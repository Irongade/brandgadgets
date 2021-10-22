import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            <link
            rel="preload"
            href="/fonts/Gilroy/Gilroy-Bold.woff"
            as="font"
            crossOrigin
          />
          <link
            rel="preload"
            href="/fonts/Gilroy/Gilroy-Medium.woff"
            as="font"
            crossOrigin
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument