import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Link, useActionData } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import Header from "~/components/Header";
import Layout from "~/components/Layout";
import { getMemberships } from "~/models/membership.server";
import { useLoaderData, Form } from "@remix-run/react";
import Button from "~/components/Button";
import { updateUserMembership } from "~/models/user.server";
import { requireUserId } from "~/session.server";
import Check from "~/components/icons/Check";

interface Membership {
  id: string;
  name: string;
  price: number;
}

interface User {
  membershipId: string;
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const userId = await requireUserId(request);

  const formData = await request.formData();
  const selectedMembership = formData.get("selectedMembership");

  await updateUserMembership(userId, selectedMembership);

  return redirect("/Membership");
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const memberships: Membership[] = await getMemberships();

  return json({ memberships });
};

export default function Membership() {
  const user = useOptionalUser();
  const data = useLoaderData<{ memberships: Membership[] }>();
  const actionData = useActionData<typeof action>();

  const PriceRow = ({ id, copy, price }: Membership) => (
    <tr className="border-b border-gray-200 ">
      <th
        scope="row"
        className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 "
      >
        {copy}
      </th>

      <td className="px-6 py-4">{price}</td>

      {user && (
        <td className="px-6 py-4">
          <Form method="post">
            {user.membershipId !== id ? (
              <Button type="submit" name="selectedMembership" value={id}>
                Select Tier
              </Button>
            ) : (
              <Check className="h-10 w-10 text-green-500" />
            )}
          </Form>
        </td>
      )}
    </tr>
  );

  const currentMembership = data.memberships?.find(
    (membership) => membership.id === user?.membershipId
  )?.name;

  return (
    <Layout>
      <Header heading="Membership" />

      <section className="pt-10">
        {user === undefined && (
          <p className="mb-10 text-center">
            Login to select a membership tier!
          </p>
        )}

        {user && data.memberships && (
          <p className="mb-10 text-center">
            {currentMembership ? (
              <span>Your current membership is: {currentMembership}</span>
            ) : (
              <span>You have not selected a membership yet!</span>
            )}
          </p>
        )}

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          {data.memberships?.length > 0 ? (
            <table className="w-full text-left text-sm text-gray-500 rtl:text-right ">
              <thead className="text-xs uppercase text-gray-700 ">
                <tr>
                  <th scope="col" className="bg-gray-50 px-6 py-3 ">
                    Membership
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>

                  {user && (
                    <th scope="col" className="px-6 py-3">
                      Select Membership
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {data.memberships.map((membership) => (
                  <PriceRow
                    key={membership.id}
                    id={membership.id}
                    copy={membership.name}
                    price={membership.price}
                  />
                ))}
              </tbody>
            </table>
          ) : (
            <p>No memberships found</p>
          )}
        </div>
      </section>
    </Layout>
  );
}
