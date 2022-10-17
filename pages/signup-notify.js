import { useEffect, useState } from 'react';

import Loading from '../components/Loading';
import { Page } from '../components/Page';
import PageHeader from '../components/SignupForm/PageHeader';
import SignupForm from '../components/SignupForm';
import { fetchAPI } from '../lib/api';

export default function SignupNotify({ global, pageData }) {
  const { pageHeader, formInputFields, responseMessage } = pageData;
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    return () => setLoading(true);
  });

  return isLoading ? (
    <Loading state={isLoading} />
  ) : (
    <Page global={global} currentPage="Sign-up">
      <PageHeader pageHeader={pageHeader} />
      <SignupForm fields={formInputFields} responseMessage={responseMessage} />
    </Page>
  );
}

export async function getServerSideProps({ locale: routeLocale, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=36000',
  );
  const page = await fetchAPI('/signup-page', {
    populate: {
      formInputFields: {
        populate: '*',
      },
      pageHeader: {
        populate: '*',
      },
      responseMessage: {
        populate: '*',
      },
    },
    locale: routeLocale,
  });
  const { pageHeader, formInputFields, responseMessage } = page.data.attributes;
  const pageData = {
    pageHeader,
    formInputFields,
    responseMessage,
  };
  if (page.error) {
    console.log('Fetching data failed');
    return {
      notFound: true,
    };
  }
  return { props: { pageData } };
}
