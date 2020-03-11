import Head from "next/head";
import { Component } from "react";
import { attributes } from "../content/index.md";
import Link from "next/link";

export default class Home extends Component {
  render() {
    let { title, description, keywords, panels } = attributes;
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="description">{description}</meta>
          <meta name="keywords">{keywords}</meta>
        </Head>
        <div className="w-full bg-gray-300">
          <div className="container mx-auto">
            <img
              src="/Natural-Healing-Slider.jpg"
              className="w-full"
              alt="Natural Healing Intro Image"
              title="Health is not merely the absense of illness, it is the wellbeing of the whole person - mind, body and spirit"
            ></img>
          </div>
        </div>
        <article className="container mx-auto grid grid-cols-1 sm:grid-cols-2">
          {panels.map((panel: PanelData) => (
            <Panel panel={panel} />
          ))}
        </article>
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
