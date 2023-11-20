import { useOptionalUser } from "~/utils";
import Header from "~/components/Header";
import Layout from "~/components/Layout";

export default function Index() {
  const user = useOptionalUser();
  return (
    <Layout>
      <Header heading="Dobu Martial Arts" />
    </Layout>
  );
}
