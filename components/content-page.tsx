import { ReactNode } from "react";
import Head from "next/head";
import ContactUs from "../components/contact-us-form";
import { FacebookLikes } from "./facebook-likes";

interface Props {
  title: string;
  description: string;
  children: ReactNode;
}

export default function ContentPage(props: Props) {
  return (
    <>
      <Head>
        <title>
          {props.title &&
            props.title +
              " | Natural Healing Traditional Chinese Medicine Bondi"}
        </title>
        <meta name="description" content={props.description} />
      </Head>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-10">
        <article className="col-span-2">{props.children}</article>
        <aside className="col-span-1">
          <FacebookLikes />
          <ContactUs />
        </aside>
      </div>
    </>
  );
}
