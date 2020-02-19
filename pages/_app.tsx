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
      <Link href={item.href}>
        <a className="text-white font-bold p-4">{item.label}</a>
      </Link>
    );
  } else {
    return (
      <div>
        {item.label}
        {item.children.map(item => (
          <MenuItem item={item}></MenuItem>
        ))}
      </div>
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
          <nav className="w-screen bg-nhw-green p-4">
            {attributes.nav.map(nav => (
              <MenuItem item={nav}></MenuItem>
            ))}
          </nav>
        </header>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
