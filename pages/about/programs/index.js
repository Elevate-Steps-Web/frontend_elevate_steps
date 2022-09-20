/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import Container from '../../../components/Container';
import Loading from '../../../components/Loading';
import { Page } from '../../../components/Page';
import TitleCard from '../../../components/TitleCard';
import { fetchAPI } from '../../../lib/api';

export default function ProgramsPage({ global, pageData, notFound }) {
  const {
    attributes: {
      pageHeader: { pageTitle, caption },
      programs,
    },
  } = pageData;
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    return () => setLoading(true);
  });
  return isLoading ? (
    <Loading state={isLoading} />
  ) : (
    <Page global={global} currentPage="Programs">
      <div className="flex flex-col items-center text-center py-10">
        <Container>
          <h1 className="font-cursive text-6xl mb-10 text-primary-blue">
            {pageTitle}
          </h1>
          <p className="text-2xl lg:px-36 md:px-24">{caption}</p>
        </Container>
      </div>
      <Container>
        <div className="flex  flex-wrap w-full mx-42 px-10 md:px-20 lg:px-0 justify-center justify-items-between gap-y-12 gap-x-12 mb-36">
          {programs.map((program) => (
            <Link key={uuidv4()} href={program.linkRoute} passHref>
              <a>
                <TitleCard title={program.name} bg={program.bgImage} />
              </a>
            </Link>
          ))}
        </div>
      </Container>
    </Page>
  );
}

export async function getServerSideProps({ locale: routeLocale }) {
  const page = await fetchAPI('/about-our-programs', {
    populate: {
      pageHeader: {
        populate: '*',
      },
      programs: {
        populate: '*',
      },
      defaultSeo: {
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
