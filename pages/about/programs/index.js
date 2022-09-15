/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import Container from '../../../components/Container';
import Loading from '../../../components/Loading';
import { Page } from '../../../components/Page';
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
        <div className="w-full h-20 mx-42 px-10 md:px-28 lg:px-36">
          {programs.map((program) => (
            <Link key={uuidv4} href={program.linkRoute} passHref>
              <a className="text-xl md:text-3xl lg:text-4xl text-center hover:text-primary-blue text-white tracking-wide w-full ">
                <div className="w-full h-10 md:h-14 lg:h-16 bg-primary-blue hover:bg-secondary-blue flex flex-col justify-center rounded-xl">
                  {program.name}
                </div>
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
