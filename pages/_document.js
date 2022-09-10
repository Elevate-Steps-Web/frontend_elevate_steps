import {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <body className="font-sans bg-white overflow-visible">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
