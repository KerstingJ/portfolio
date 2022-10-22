import App from "next/app";
import Head from "next/head";
import Script from "next/script";
import { ThemeProvider } from "styled-components";
import "../index.css";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {/* <Script
          src="https://kit.fontawesome.com/79b8b1addc.js"
          crossOrigin="anonymous"
        ></Script> */}
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-136240788-1"
        ></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
              gtag("config", "UA-136240788-1");
            `,
          }}
        /> */}
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
