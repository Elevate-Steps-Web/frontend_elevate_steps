import AppCarousel from '../components/AppCarousel';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import { Page } from '../components/Page';
import SplitSection from '../components/SplitSection';
import StatsSection from '../components/StatsSection';
import { fetchAPI } from '../lib/api';

export default function Home({
  global,
  homepageContent: {
    caroussel,
    splitSection,
    statsSection,
    faeqSection,
    ctaSection,
  },
}) {
  return (
    <Page global={global} currentPage="Home">
      <div id="app-carousel">
        {caroussel && <AppCarousel data={caroussel} />}
      </div>
      <div id="picture left, text right">
        {splitSection && <SplitSection data={splitSection} />}
      </div>
      <div id="important numbers">
        {statsSection && <StatsSection data={statsSection} />}
      </div>
      <div id="faeq section">
        {faeqSection && <FAQSection data={faeqSection} />}
      </div>
      <div id="cta section">
        {ctaSection && <CTASection data={ctaSection} />}
      </div>
    </Page>
  );
}

export async function getServerSideProps({ locale: routeLocale }) {
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
  const homepageContent = {};
  const {
    data: {
      attributes: { content },
    },
  } = homepage;
  if (typeof content === 'undefined') {
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
      case 'sections.faeq-section':
        homepageContent.faeqSection = item;
        break;
      case 'sections.cta-section':
        homepageContent.ctaSection = item;
        break;
      default:
        console.error('Component not categorized. Not rendering.');
    }
  });
  return { props: { homepageContent } };
}
