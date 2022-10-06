import Head from 'next/head';
import React from 'react';
import Script from 'next/script';
import { getStrapiMedia } from '../lib/media';

export function Layout({
  favicon,
  siteName,
  children,
  currentPage,
  pageMetaDescription,
}) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(favicon)}
          key="favicon"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          {siteName}
          {' '}
          |
          {` ${currentPage}`}
        </title>
        <meta property="og:title" content={`${siteName} | ${currentPage}`} />
        <meta property="og:description" content={pageMetaDescription} />
        <meta property="og:image" content={getStrapiMedia(favicon)} />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <link rel="icon" href={getStrapiMedia(favicon)} key="icon" />
      </Head>
      {children}
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" />
      <Script src="https://platform.twitter.com/widgets.js" charset="utf-8" />
    </>
  );
}
