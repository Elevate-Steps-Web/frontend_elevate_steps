import Head from 'next/head';
import Script from 'next/script';
import React from 'react';
import { getStrapiMedia } from '../lib/media';

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
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" />
      <Script src="https://platform.twitter.com/widgets.js" charset="utf-8" />
    </>
  );
}
