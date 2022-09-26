/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import Link from 'next/link';
import MarkdownIt from 'markdown-it';
import parse from 'html-react-parser';
import ApplicationCTASection from '../../../../components/ApplicationCTASection';
import CTASection from '../../../../components/CTASection';
import Container from '../../../../components/Container';
import FAQSection from '../../../../components/FAQSection';
import Loading from '../../../../components/Loading';
import { Page } from '../../../../components/Page';
import TimelineGraphic from '../../../../components/TimelineGraphic';
import TimelineTable from '../../../../components/TimelineTable';
import { fetchAPI } from '../../../../lib/api';

export default function MentorshipProgramsPage({ global, program }) {
  const {
    attributes: {
      title,
      programDescription,
      ctaSection,
      timelineSection,
      faeqSection,
      applicationSection,
    },
  } = program;
  const md = new MarkdownIt({ html: true, linkify: true, breaks: true });
  const content = md.render(programDescription);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    return () => setLoading(true);
  });
  return isLoading ? (
    <Loading state={isLoading} />
  ) : (
    <Page global={global} currentPage="Mentorship Program">
      <div className="flex flex-col items-center text-center py-10">
        <Container>
          <h1 className="font-cursive text-6xl text-primary-blue">{title}</h1>
        </Container>
      </div>
      <div className="py-6 px-8 md:px-16 lg:px-32 lg:py-12 xl:px-72">
        <div className="pb-12">
          <div className="markdown">{parse(content)}</div>
        </div>
        {timelineSection && (
          <>
            <div>
              <div className="mb-6 text-center">
                <h1 className="text-4xl text-primary-blue font-bold">
                  {timelineSection.title}
                </h1>
                <p className="text-xl">{timelineSection.caption}</p>
              </div>
              <TimelineGraphic timeline={timelineSection.timeline} />
            </div>
            ``
            <div className="pb-24 lg:px-8 place-items-center">
              <TimelineTable timeline={timelineSection.timeline} />
            </div>
          </>
        )}
        {faeqSection && (
          <FAQSection data={faeqSection} hasBg={false} />
        )}
        {ctaSection && <CTASection data={ctaSection} />}
        {applicationSection && (
          <ApplicationCTASection data={applicationSection} />
        )}
      </div>
    </Page>
  );
}

export async function getServerSideProps({ params, locale: routeLocale }) {
  const page = await fetchAPI('/programs', {
    filters: {
      id: params.id,
    },
    populate: {
      ctaSection: {
        populate: '*',
      },
      timelineSection: {
        populate: '*',
      },
      faeqSection: {
        populate: '*',
      },
      coverMedia: {
        populate: '*',
      },
      applicationSection: {
        populate: '*',
      },
    },
    locale: routeLocale,
  });
  if (page.error) {
    console.log(`Fetching data failed: ${page.error}`);
    return {
      notFound: true,
    };
  }
  return { props: { program: page.data[0] } };
}
