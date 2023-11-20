import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import hero from "~/assets/jpg/hero.jpg";
import Card from "~/components/card";
import Layout from "~/components/Layout";
import Header from "~/components/Header";

export default function Index() {
  const user = useOptionalUser();
  return (
    <Layout>
        <Header heading="Our Instructors" />

        <section className="grid grid-cols-1 gap-10 pt-20 sm:px-6 md:grid-cols-3 lg:px-8">
          <Card
            imgSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
            heading="John Smith"
            copy="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati recusandae dolores in perferendis repellat minus doloremque possimus, et consequuntur itaque beatae magni adipisci deleniti, asperiores porro repellendus sequi quaerat quis?"
          ></Card>

          <Card
            imgSrc="https://t4.ftcdn.net/jpg/01/22/69/41/360_F_122694157_jjUIXTkpCHa3usyTZx4RCWDIjQqKsqzS.jpg"
            heading="John Smith"
            copy="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati recusandae dolores in perferendis repellat minus doloremque possimus, et consequuntur itaque beatae magni adipisci deleniti, asperiores porro repellendus sequi quaerat quis?"
          ></Card>
          <Card
            imgSrc="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
            heading="John Smith"
            copy="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati recusandae dolores in perferendis repellat minus doloremque possimus, et consequuntur itaque beatae magni adipisci deleniti, asperiores porro repellendus sequi quaerat quis?"
          ></Card>
        </section>
      
    </Layout>
  );
}
