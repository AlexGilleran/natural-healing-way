import React from "react";
import App from "next/app";

import Header from "../components/header";

import "../css/tailwind.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Header></Header>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
