import Document, { Html, Head, Main, NextScript } from "next/document";
import { ADS_ID } from "../lib/constants";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body className="bg-cyan-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
