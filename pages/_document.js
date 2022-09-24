import {
  Head, Html, Main, NextScript,
} from 'next/document';

import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css"
        />
      </Head>
      <body className="font-sans bg-white overflow-visible">
        <Main />
        <NextScript />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" />
        <Script src="https://platform.twitter.com/widgets.js" charset="utf-8" />
      </body>
    </Html>
  );
}
