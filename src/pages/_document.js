import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <link rel="icon" href="/icon1.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon2.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5BAE2F" />
        <meta name="msapplication-TileColor" content="#5BAE2F" />
        <meta name="theme-color" content="#0d0e0b" />

        <link rel="stylesheet" href="css/plugins/bootstrap-grid.css" />
        <link rel="stylesheet" href="css/plugins/font-awesome.min.css" />
        <link rel="stylesheet" href="css/plugins/swiper.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
