/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import Loading from '../../../components/Loading';
import { Page } from '../../../components/Page';
import { ProgramListSection } from '../../../components/Programs/ProgramListSection';
import ProgramsIntroSection from '../../../components/Programs/ProgramsIntroSection';
import { fetchAPI } from '../../../lib/api';

export default function ProgramsPage({
  global,
  homepageData,
  programs,
  notFound,
}) {
  const { pageHeader } = homepageData;
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    return () => setLoading(true);
  });
  return isLoading ? (
    <Loading state={isLoading} />
  ) : (
    <Page global={global} currentPage="Programs">
      <ProgramsIntroSection pageHeader={pageHeader} />
      <ProgramListSection programs={programs} />
    </Page>
  );
}

export async function getServerSideProps({ locale: routeLocale, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=36000',
  );
  const programsRes = await fetchAPI('/programs', {
    populate: '*',
    locale: routeLocale,
  });
  const programsHomeRes = await fetchAPI('/programs-home', {
    populate: '*',
    locale: routeLocale,
  });
  if (programsRes.error) {
    console.log(`Fetching data failed: ${programsRes.error}`);
    return {
      notFound: true,
    };
  }
  return {
    props: {
      homepageData: programsHomeRes.data.attributes,
      programs: programsRes.data,
    },
  };
}
