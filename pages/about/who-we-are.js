/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import MarkdownIt from 'markdown-it';
import parse from 'html-react-parser';
import AboutUsSection from '../../components/AboutUsSection';
import CTAItem from '../../components/CTAItem';
import Loading from '../../components/Loading';
import { Page } from '../../components/Page';
import { fetchAPI } from '../../lib/api';

export default function WhoWeAre({ global, pageData, notFound }) {
  const {
    pageHeader, pageContent, cta, aboutUsSections,
  } = pageData.attributes;
  const md = new MarkdownIt({ html: true, linkify: true, breaks: true });
  const content = md.render(pageContent);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    return () => setLoading(true);
  });
  return isLoading ? (
    <Loading state={isLoading} />
  ) : (
    <Page global={global} currentPage="Who We Are">
      <div className="pt-12" id="page-header">
        <h1 className="text-primary-blue font-bold text-4xl text-center">
          {pageHeader}
        </h1>
      </div>
      <div className="py-6 px-4 md:px-16 lg:px-28 lg:py-12 xl:px-72 text-3xl font-cursive text-center">
        <div className="markdown">{parse(content)}</div>
      </div>
      <AboutUsSection sections={aboutUsSections} />
      {cta && (
        <div className="py-6 px-4 md:px-16 lg:px-28 lg:py-12 xl:px-72 pb-24 flex flex-col gap-2 justify-center">
          <CTAItem data={cta} />
        </div>
      )}
    </Page>
  );
}

export async function getServerSideProps({ locale: routeLocale }) {
  const page = await fetchAPI('/who-we-are', {
    populate: {
      populate: '*',
      aboutUsSections: {
        populate: '*',
      },
      cta: {
        populate: '*',
      },
    },
    locale: routeLocale,
  });
  if (page.error) {
    console.log('Fetching data failed');
    return {
      notFound: true,
    };
  }
  return { props: { pageData: page.data } };
}
