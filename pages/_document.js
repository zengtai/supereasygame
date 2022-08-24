import Document, { Html, Head, Main, NextScript } from "next/document";
import { ADS_ID } from "../lib/constants";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            as="script"
          />
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_ID}`}
            crossOrigin="anonymous"
          />
        </Head>
        <body className="bg-cyan-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
