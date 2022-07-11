import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Myllena Atanazio - Fisioterapeuta</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Asap+Condensed:wght@400;500;600;700&family=Noto+Sans:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
