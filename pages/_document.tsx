import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
            />
            <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />

            <link href="/assets/css/font-awesome.min.css" rel="stylesheet" />

            <link href="/assets/css/owl-carousel.min.css" rel="stylesheet" />
            <link href="/assets/css/owl-carousel.theme.css" rel="stylesheet" />

            <link href="/assets/css/prettyPhoto.css" rel="stylesheet" />

            <link href="/assets/css/animate.min.css" rel="stylesheet" />

            <link href="/assets/css/skill.css" rel="stylesheet" />

            <link href="/assets/css/style.css" rel="stylesheet" />

            <link rel="stylesheet" href="/assets/css/responsive.css" />
            <link rel="stylesheet" href="/assets/css/fontSocial.min.css" />
          </head>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/assets/js/jquery.min.js"></script>
          <script src="/assets/js/bootstrap.min.js"></script>
          <script src="/assets/js/modernizr-2.6.2.min.js"></script>

          <script src="/assets/js/owl-carousel.min.js"></script>

          <script src="/assets/js/waypoints.min.js"></script>
          <script src="/assets/js/counterup.min.js"></script>

          <script src="/assets/js/appear.js"></script>

          <script src="/assets/js/jquery.prettyPhoto.js"></script>
          <script src="/assets/js/wow.min.js"></script>

          <script src="/assets/js/main.js"></script>
        </body>
      </Html>
    );
  }
}
