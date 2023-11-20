import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import Header from "~/components/Header";
import Layout from "~/components/Layout";

const PriceRow = ({ copy, price }) => (
  <tr class="border-b border-gray-200 ">
    <th
      scope="row"
      class="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 "
    >
      {copy}
    </th>

    <td class="px-6 py-4">{price}</td>
  </tr>
);

export default function Index() {
  const user = useOptionalUser();

  console.log(user)

  return (
    <Layout>
      <Header heading="Membership" />

      <section className="pt-10">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-left text-sm text-gray-500 rtl:text-right ">
            <thead class="text-xs uppercase text-gray-700 ">
              <tr>
                <th scope="col" class="bg-gray-50 px-6 py-3 ">
                  Membership
                </th>

                <th scope="col" class="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>

              <PriceRow copy='Basic (1 martial art – 2 sessions per week) – monthly' price="£25.00" />
              <PriceRow copy='Plan 2' price="£30.00" />

            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
}
