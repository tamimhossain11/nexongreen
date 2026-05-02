import React from "react";
import Head from "next/head";
import './index.scss';
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nexon Green — IoT · AI · Web · Mobile</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="NexonGreen delivers smart IoT, AI, web, mobile, and digital forensics solutions from Bangladesh." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
