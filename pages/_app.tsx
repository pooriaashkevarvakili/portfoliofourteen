// import * from 'next/babel'
import { AppProps } from "next/app";
import { GetStaticProps } from "next";
import { DataService } from "../service/data.service";

// The Component prop is the active page,
// pageProps is an object with the initial props that were preloaded for your page by one of our data fetching methods,
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export const getStaticProps: GetStaticProps = async () => {
  // const catalogData = await DataService.getCatalogData();
  await DataService.getCatalogData();
  return {
    props: {},
  };
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
