import Container from '../../components/Container';
import { Page } from '../../components/Page';
// import PageHeader from '../../components/PageHeader';
import TabsSection from '../../components/TabsSection';
import { fetchAPI } from '../../lib/api';

export default function ProfilesPage({ global, tabs }) {
  return (
    <Page global={global} currentPage="Contact Us">
      <Container>
        {/* {pageHeader && <PageHeader data={pageHeader} />} */}
        <TabsSection tabs={tabs} />
      </Container>
    </Page>
  );
}

export async function getStaticProps({ locale: routeLocale }) {
  // get Page properties
  const page = await fetchAPI('/profile', {
    populate: {
      mentors: {
        populate: '*',
      },
      fellows: {
        populate: '*',
      },
    },
    locale: routeLocale,
  });
  // TODO: loop through objects and filter objects based on __component property
  const {
    data: {
      attributes: { mentors, fellows },
    },
  } = page;
  if (mentors === null && fellows === null) {
    console.log('No data content in contact page.');
    return {
      notFound: true,
    };
  }
  const tabs = [
    { name: 'mentors', list: mentors },
    { name: 'fellows', list: fellows },
  ];

  return { props: { tabs } };
}
