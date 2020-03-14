import React from "react";
import App from "next/app";
import Head from "next/head";

import Header from "../components/header";

import "../css/tailwind.css";
import { Footer } from "../components/footer";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className="font-sans">
        <Head>
          <meta property="og:image" content="/Natural-Healing-team.jpg" />
        </Head>
        <Header></Header>
        <Component {...pageProps} />
        <Footer />
      </div>
    );
  }
}

export default MyApp;
