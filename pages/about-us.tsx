import Head from "next/head";
import { Component } from "react";
import { attributes, react as AboutUsContent } from "../content/about-us.md";
import Link from "next/link";

export default class Home extends Component {
  render() {
    let { title, panels } = attributes;
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>

        <div className="container mx-auto grid grid-cols-3 gap-4">
          <article className="markdown col-span-2">
            <AboutUsContent />
          </article>
          <aside className="col-span-1">
            <h2>People who love us</h2>
            
            <h2>Contact Us</h2>
          </aside>
        </div>

        {/* <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article> */}
      </>
    );
  }
}

interface PanelData {
  icon: string;
  heading: string;
  blurb: string;
  linkLabel: string;
  linkHref: string;
}

function Panel({ panel }: { panel: PanelData }) {
  const icon = require(`!!raw-loader!@fortawesome/fontawesome-free/svgs/solid/${panel.icon}.svg`)
    .default;

  return (
    <section className="flex flex-col items-center text-center p-4 mx-2">
      <div
        className="h-24 w-24 p-6 m-3 rounded-full panel-svg-wrapper bg-nhw-brown flex justify-center text-white"
        dangerouslySetInnerHTML={{ __html: icon }}
      />

      <h2 className="font-bold mb-4 text-xl">{panel.heading}</h2>

      <p>{panel.blurb}</p>
      <Link href={panel.linkHref}>
        <a className="my-3 font-bold">{panel.linkLabel}</a>
      </Link>
    </section>
  );
}
