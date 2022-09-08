import MarkdownIt from 'markdown-it';
import parse from 'html-react-parser';
import Link from 'next/link';
import { Page } from '../../components/Page';
import { fetchAPI } from '../../lib/api';

export default function Timeline({ global, pageData }) {
  const { pageHeader, pageDescription, cta } = pageData.attributes;
  const md = new MarkdownIt({ html: true, linkify: true, breaks: true });
  const content = md.render(pageDescription);
  console.log(cta.header);
  return (
    <Page global={global} currentPage="Who We Are">
      <div className="bg-white pt-12" id="page-header">
        <h1 className="text-primary-blue font-bold text-4xl text-center">
          {pageHeader}
        </h1>
      </div>
      <div className="bg-white py-6 px-8 md:px-16 lg:px-32 lg:py-12 xl:px-72">
        <div className="pb-12">
          <div className="markdown">{parse(content)}</div>
        </div>
        <div className="pb-24 flex flex-col gap-2 justify-center">
          {cta.header && (
            <h3 className="text-center text-primary-blue text-2xl">
              {cta.header}
            </h3>
          )}
          <Link href={cta.linkRoute}>
            <a className="text-center text-green hover:text-secondary-blue text-xl">
              {`${cta.linkText} >`}
            </a>
          </Link>
        </div>
      </div>
    </Page>
  );
}

export async function getServerSideProps({ locale: routeLocale }) {
  const page = await fetchAPI('/timeline', {
    populate: '*',
    locale: routeLocale,
  });
  console.log(routeLocale);
  return { props: { pageData: page.data } };
}
