import Link from 'next/link';
import MarkdownIt from 'markdown-it';
import parse from 'html-react-parser';
import { Page } from '../../components/Page';
import TabsSection from '../../components/TabsSection';
import { fetchAPI } from '../../lib/api';

export default function ProfilesPage({
  global,
  tabs,
  pageHeader,
  pageContent,
  cta,
}) {
  const md = new MarkdownIt({ html: true, linkify: true, breaks: true });
  const content = md.render(pageContent);
  return (
    <Page global={global} currentPage="Profiles">
      <div className="pt-24" id="page-header">
        <h1 className="text-primary-blue font-bold text-4xl text-center">
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
            {cta.header && (
              <h3 className="text-center text-primary-blue text-2xl">
                {cta.header}
              </h3>
            )}
            <Link href={cta.linkRoute}>
              <a className="text-center text-green hover:text-secondary-blue text-xl">
                {cta.linkText}
              </a>
            </Link>
          </div>
        )}
      </div>
    </Page>
  );
}

export async function getServerSideProps({ locale: routeLocale }) {
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
