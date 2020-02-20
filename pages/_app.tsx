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
          <a className="header-button hover:bg-nhw-brown w-full">
            {item.label}
          </a>
        </Link>
      </li>
    );
  } else {
    return (
      <li className="group relative">
        <button className="header-button hover:bg-nhw-brown">
          {item.label}
        </button>
        <ul className="invisible opacity-0 group-hover:opacity-100 group-hover:visible absolute bg-nhw-green transition-nav-menu duration-200">
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
          <div className="p-2 container mx-auto">
            <img src="/Natural-Healing-banner.jpg" width="1080" height="90" />
          </div>
          <nav className="w-screen bg-nhw-green">
            <ul className="flex container mx-auto">
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
