import AppCarousel from '../components/AppCarousel';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import { Page } from '../components/Page';
import SplitSection from '../components/SplitSection';
import StatsSection from '../components/StatsSection';
import { fetchAPI } from '../lib/api';
// type Props = {
//   currentPage?: string,
//   global?: any
// }

export default function Home({
  global,
  homepageContent: { caroussel, splitSection, statsSection },
}) {
  return (
    <Page global={global} currentPage="Home">
      <div id="app-carousel">
        <AppCarousel data={caroussel} />
      </div>
      <div id="app-career-success;  picture left, text right">
        <SplitSection data={splitSection} />
      </div>
      <div id="empty blue section">
        <h1>Empty blue section works!</h1>
      </div>
      <div id="important numbers">
        <StatsSection data={statsSection} />
      </div>
      <div id="faeq section">
        <FAQSection />
      </div>
      <div id="cta section">
        <CTASection />
      </div>
    </Page>
  );
}

export async function getStaticProps({ locale: routeLocale }) {
  // get Homepage properties
  const homepage = await fetchAPI('/homepage', {
    populate: {
      content: {
        populate: '*',
      },
      defaultSeo: {
        populate: '*',
      },
    },
    locale: routeLocale,
  });
  // TODO: loop through objects and filter objects based on __component property
  const homepageContent = {};
  const {
    data: {
      attributes: { content },
    },
  } = homepage;
  if (content === null) {
    console.log('No data content in homepage.');
    return {
      notFound: true,
    };
  }
  content.forEach((item) => {
    /* eslint-disable-next-line no-underscore-dangle */
    switch (item.__component) {
      case 'images.image-caroussel':
        homepageContent.caroussel = item;
        break;
      case 'sections.split-section':
        homepageContent.splitSection = item;
        break;
      case 'sections.stats-section':
        homepageContent.statsSection = item;
        break;
      default:
        console.error('Component not categorized. Not rendering.');
    }
  });
  return { props: { homepageContent } };
}
