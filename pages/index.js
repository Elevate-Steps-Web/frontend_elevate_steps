import Head from 'next/head';

export default function Home({ global }) {
  return (
    <>
      <Head>
        <title>{global.attributes.siteName}</title>
        <meta name="description" content="Elevate Steps Africa" />
        <link rel="icon" href={global.favicon} />
      </Head>
      <main>
        <h1>Hello World!</h1>
      </main>
    </>

  );
}
