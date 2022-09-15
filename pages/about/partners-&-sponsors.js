import { useEffect, useState } from 'react';

import MarkdownIt from 'markdown-it';
import parse from 'html-react-parser';
import Loading from '../../components/Loading';
import { Page } from '../../components/Page';
import PartnersSponsorsSection from '../../components/PartnersSponsorsSection';
import { fetchAPI } from '../../lib/api';

export default function WhoWeAre({
  global,
  pageHeader,
  pageContent,
  partnersSponsors,
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
    <Page global={global} currentPage="Partners And Sponsors">
      <div className="pt-12" id="page-header">
        <h1 className="text-primary-blue font-bold text-4xl text-center">
          {pageHeader}
        </h1>
      </div>
      <div className="py-6 px-8 md:px-16 lg:px-32 lg:py-12 xl:px-72">
        <div className="pb-12">
          <div className="markdown">{parse(content)}</div>
        </div>
        <div className="pb-24">
          <PartnersSponsorsSection partnersSponsors={partnersSponsors} />
        </div>
      </div>
    </Page>
  );
}

export async function getServerSideProps({ locale: routeLocale }) {
  const page = await fetchAPI('/partner-sponsor', {
    populate: {
      PartnersSponsors: {
        populate: '*',
      },
    },
    locale: routeLocale,
  });
  const { pageHeader, pageContent, PartnersSponsors } = page.data.attributes;

  return {
    props: { pageHeader, pageContent, partnersSponsors: PartnersSponsors },
  };
}
