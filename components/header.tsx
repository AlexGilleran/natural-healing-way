import Link from "next/link";
import { useState, useEffect } from "react";

import { attributes } from "../content/header.md";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setMenuOpen(false);
    };

    document.body.addEventListener("click", handler);

    return function cleanup() {
      document.body.addEventListener("click", handler);
    };
  });

  return (
    <header>
      <div className="py-2 px-4 container mx-auto flex flex-row items-center justify-between">
        <Link href="/">
          <a>
            <img
              src="/Natural-Healing-banner.jpg"
              width="300"
              className="w-48 sm:w-64"
            />
          </a>
        </Link>

        <div className="block sm:hidden">
          <button
            className={
              "flex items-center px-4 py-3 border rounded text-white hover:bg-white " +
              "border-nhw-green bg-nhw-green hover:text-nhw-green mt-1 sm:mt-0"
            }
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="bg-nhw-green h-2 block sm:hidden" />

      <nav
        className={`bg-nhw-green ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        } sm:visible sm:opacity-100 absolute sm:static transition-nav-menu duration-200 right-0`}
      >
        <ul className="container mx-auto sm:flex">
          {attributes.nav.map((nav: NavItem) => (
            <MenuItem item={nav} key={nav.label}></MenuItem>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function MenuItem({ item }: { item: NavItem }) {
  const [forceOpen, setForceOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setForceOpen(false);
    };

    document.body.addEventListener("click", handler);

    return function cleanup() {
      document.body.addEventListener("click", handler);
    };
  });

  if (item.href) {
    return (
      <li>
        <Link href={item.href}>
          <a className="header-button hover:bg-nhw-brown w-full inline-block">
            {item.label}
          </a>
        </Link>
      </li>
    );
  } else {
    return (
      <li className="group relative">
        <button
          className={`header-button hover:bg-nhw-brown ${
            forceOpen ? "bg-nhw-brown" : ""
          } hidden sm:inline-block`}
          onClick={() => setForceOpen(true)}
        >
          {item.label}
        </button>
        <ul
          className={`sm:group-hover:opacity-100 sm:group-hover:visible ${
            forceOpen
              ? "sm:opacity-100 sm:visible"
              : "sm:opacity-0 sm:invisible"
          } sm:absolute bg-nhw-green transition-nav-menu duration-200`}
        >
          {item.children.map(item => (
            <MenuItem item={item} key={item.label || item.href}></MenuItem>
          ))}
        </ul>
      </li>
    );
  }
}

type NavItem = {
  label: string;
  href?: string;
  children: NavItem[];
};
