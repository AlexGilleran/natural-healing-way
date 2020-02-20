import React from "react";
import App from "next/app";
import Link from "next/link";
import "../css/tailwind.css";

import { attributes } from "../content/nav.md";

type NavItem = {
  label: string;
  href?: string;
  children: NavItem[];
};

function MenuItem({ item }: { item: NavItem }) {
  if (item.href) {
    return (
      <li>
        <Link href={item.href}>
          <a className="text-white font-bold p-4 inline-block">{item.label}</a>
        </Link>
      </li>
    );
  } else {
    return (
      <li className="group relative">
        <button className="text-white font-bold p-4 inline-block">{item.label}</button>
        <ul className="hidden group-hover:block absolute bg-nhw-green">
          {item.children.map(item => (
            <MenuItem item={item}></MenuItem>
          ))}
        </ul>
      </li>
    );
  }
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <header>
          <div className="p-2">
            <img src="/Natural-Healing-banner.jpg" width="1080" height="90" />
          </div>
          <nav className="w-screen bg-nhw-green">
            <ul className="flex">
              {attributes.nav.map(nav => (
                <MenuItem item={nav}></MenuItem>
              ))}
            </ul>
          </nav>
        </header>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
