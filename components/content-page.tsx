import { ReactNode } from "react";
import Head from "next/head";

interface Props {
  title: String;
  children: ReactNode;
}

export default function ContentPage(props: Props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
        <article className="col-span-2">{props.children}</article>
        <aside className="col-span-1">
          {/* <h2>People who love us</h2>
              
              <h2>Contact Us</h2> */}
        </aside>
      </div>
    </>
  );
}
