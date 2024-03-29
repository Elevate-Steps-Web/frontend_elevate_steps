import { useEffect, useState } from 'react';

import MarkdownIt from 'markdown-it';
import parse from 'html-react-parser';
import CTAItem from '../../components/CTAItem';
/* eslint-disable no-unused-vars */
import Loading from '../../components/Loading';
import { Page } from '../../components/Page';
import TabsSection from '../../components/TabsSection';
import { fetchAPI } from '../../lib/api';

export default function ProfilesPage({
  global,
  tabs,
  pageHeader,
  pageContent,
  cta,
  notFound,
}) {
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
    <Page global={global} currentPage="Profiles">
      <div className="pt-16 px-10" id="page-header">
        <h1 className="text-primary-blue font-cursive text-6xl text-center">
          {pageHeader}
        </h1>
      </div>
      <div className="py-6 px-8 md:px-16 lg:px-32 lg:py-12 xl:px-72">
        <div className="pb-8 lg:pb-12">
          <div className="markdown">{parse(content)}</div>
        </div>
        <div className="pb-12">
          <TabsSection tabs={tabs} />
        </div>
        {cta && (
          <div className="pb-24 flex flex-col gap-2 justify-center">
            <CTAItem data={cta} />
          </div>
        )}
      </div>
    </Page>
  );
}

export async function getServerSideProps({ locale: routeLocale, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=36000',
  );
  // get Page properties
  const page = await fetchAPI('/profile', {
    populate: {
      mentors: {
        populate: '*',
      },
      fellows: {
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
  const {
    data: {
      attributes: {
        mentors,
        fellows,
        fellowSectionHeader,
        mentorSectionHeader,
        pageHeader,
        pageContent,
        cta,
      },
    },
  } = page;
  if (mentors === null && fellows === null) {
    console.log('No data content in page.');
    return {
      notFound: true,
    };
  }
  const tabs = [
    { name: mentorSectionHeader, list: mentors },
    { name: fellowSectionHeader, list: fellows },
  ];

  return {
    props: {
      tabs,
      pageHeader,
      pageContent,
      cta: cta ?? null,
    },
  };
}
