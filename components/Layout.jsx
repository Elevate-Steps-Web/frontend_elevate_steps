import Head from 'next/head';
import React from 'react';
import Script from 'next/script';
import { getStrapiMedia } from '../lib/media';

// type Props = {
//     children?: ReactNode,
//     currentPage?: string,
//     global?: any
//   }

export function Layout({
  favicon, siteName, children, currentPage,
}) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(favicon)} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          {siteName}
          {' '}
          |
          {` ${currentPage}`}
        </title>
        <meta name="description" content="Elevate Steps Africa" />
        <link rel="icon" href={getStrapiMedia(favicon)} />
      </Head>
      {children}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" />
    </>
  );
}
