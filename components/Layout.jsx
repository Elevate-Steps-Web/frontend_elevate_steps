import Head from 'next/head';
import React from 'react';
import Script from 'next/script';
import Container from './Container';
import { getStrapiMedia } from '../lib/media';

// type Props = {
//     children?: ReactNode,
//     currentPage?: string,
//     global?: any
//   }

export function Layout({ global, children, currentPage }) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          {global.attributes.siteName}
          {' '}
          |
          {` ${currentPage}`}
        </title>
        <meta name="description" content="Elevate Steps Africa" />
        <link rel="icon" href={global.favicon} />
      </Head>
      <Container>{children}</Container>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" />
    </>
  );
}
