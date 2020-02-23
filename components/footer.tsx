import Link from "next/link";
import { useState } from "react";

import { attributes } from "../content/nav.md";

const fbIcon = require("!!raw-loader!@fortawesome/fontawesome-free/svgs/brands/facebook-f.svg")
  .default;

export function Footer() {
  return (
    <footer className="bg-nhw-green p-8 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <h3 className="font-bold">We are accredited members of:</h3>
            <img
              src="/AACMA-logo.gif"
              alt="Australian Acupuncture and Chinese Medicine Association Logo"
              className="my-2"
            />
            <img
              src="/ATMS.jpg"
              alt="Australian Traditional Medicine Society Logo"
              className="my-2"
            />
          </div>
          <div>
            <h3 className="font-bold">Connect with us:</h3>
            <a
              href="https://facebook.com/naturalhealingway"
              className="inline-block my-1 text-white panel-svg-wrapper h-10 w-10 bg-blue-800 p-2 rounded"
              dangerouslySetInnerHTML={{ __html: fbIcon }}
            />
          </div>
        </div>
        <aside className="text-sm text-center">
          Copyright Natural Healing Way Pty Ltd {new Date().getFullYear()}
        </aside>
      </div>
    </footer>
  );
}
