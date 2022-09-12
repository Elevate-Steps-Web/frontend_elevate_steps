import MarkdownIt from 'markdown-it';
import parse from 'html-react-parser';
import { Page } from '../../../../components/Page';
import TimelineGraphic from '../../../../components/TimelineGraphic';
import TimelineTable from '../../../../components/TimelineTable';
import { fetchAPI } from '../../../../lib/api';

export default function TimelinePage({ global, pageData }) {
  const {
    pageHeader,
    pageDescription,
    cta,
    timeline,
    isApplicationOpen,
    appClosedCTA,
  } = pageData.attributes;
  const md = new MarkdownIt({ html: true, linkify: true, breaks: true });
  const content = md.render(pageDescription);
  console.log(pageData.attributes);
  return (
    <Page global={global} currentPage="Mentorship Program Timeline">
      <div className="bg-white pt-12" id="page-header">
        <h1 className="text-primary-blue font-bold text-4xl text-center">
          {pageHeader}
        </h1>
      </div>
      <div className="bg-white py-6 px-4 md:px-16 lg:px-32 lg:py-12 xl:px-72">
        <div className="pb-12">
          <div className="markdown">{parse(content)}</div>
        </div>
        <div>
          <TimelineGraphic timeline={timeline} />
        </div>
        <div className="pb-24 lg:px-8 place-items-center">
          <TimelineTable timeline={timeline} />
        </div>
        {isApplicationOpen
          ? cta && (
          <div className="pb-24 flex flex-col gap-2 justify-center">
            {cta.header && (
            <h3 className="text-center text-primary-blue text-2xl">
              {cta.header}
            </h3>
            )}
            <a
              role="button"
              href={cta.linkRoute}
              className="text-2xl hover:text-primary-blue btn btn-green hover:bg-green text-green hover:border-green border-green mt-4 lg:mx-auto"
            >
              {cta.linkText}
            </a>
          </div>
          )
          : appClosedCTA && (
          <div className="pb-24 flex flex-col gap-2 justify-center">
            {appClosedCTA.header && (
            <h3 className="text-center text-primary-blue text-2xl">
              {appClosedCTA.header}
            </h3>
            )}
            <a
              href={appClosedCTA.linkRoute}
              className="text-2xl hover:text-secondary-blue text-orange mt-4 lg:mx-auto"
            >
              {appClosedCTA.linkText}
            </a>
          </div>
          )}
      </div>
    </Page>
  );
}

export async function getServerSideProps({ locale: routeLocale }) {
  const page = await fetchAPI('/timeline', {
    populate: '*',
    locale: routeLocale,
  });
  return { props: { pageData: page.data } };
}
