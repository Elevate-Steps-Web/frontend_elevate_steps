import Link from 'next/link';
import MarkdownIt from 'markdown-it';
import parse from 'html-react-parser';
import Container from '../../../../components/Container';
/* eslint-disable no-unused-vars */
import { Page } from '../../../../components/Page';
import { fetchAPI } from '../../../../lib/api';

export default function MentorshipProgramsPage({ global, pageData, notFound }) {
  const {
    attributes: {
      pageHeader: { pageTitle, caption },
      pageContent,
      cta,
    },
  } = pageData;
  const md = new MarkdownIt({ html: true, linkify: true, breaks: true });
  const content = md.render(pageContent);
  return (
    <Page global={global} currentPage="Mentorship Program">
      <div className="flex flex-col items-center text-center py-10">
        <Container>
          <h1 className="font-cursive text-6xl text-primary-blue">
            {pageTitle}
          </h1>
          {caption && (
            <p className="text-2xl lg:px-36 md:px-24 mt-10">{caption}</p>
          )}
        </Container>
      </div>
      <div className="py-6 px-8 md:px-16 lg:px-32 lg:py-12 xl:px-72">
        <div className="pb-12">
          <div className="markdown">{parse(content)}</div>
        </div>
        <div className="pb-24 flex flex-col gap-2 justify-center">
          {cta.header && (
            <>
              <h3 className="text-center font-cursive text-primary-blue text-3xl">
                {cta.header}
              </h3>
              <p className="text-xl font-normal text-center lg:px-36 md:px-24">
                {cta.caption}
              </p>
            </>
          )}
          <Link href={cta.linkRoute}>
            <a className="text-center text-green hover:text-secondary-blue text-2xl underline">
              {`${cta.linkText} >`}
            </a>
          </Link>
        </div>
      </div>
    </Page>
  );
}

export async function getServerSideProps({ locale: routeLocale }) {
  const page = await fetchAPI('/about-mentorship-program', {
    populate: '*',
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
