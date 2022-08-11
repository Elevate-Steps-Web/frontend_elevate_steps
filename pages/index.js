import AppCarousel from '../components/AppCarousel';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import ImportantNumbersSection from '../components/ImportantNumbersSection';
import { Page } from '../components/Page';
import SplitSection from '../components/SplitSection';
import { fetchAPI } from '../lib/api';
// type Props = {
//   currentPage?: string,
//   global?: any
// }

export default function Home({
  global,
  homepageContent: { caroussel, splitSection },
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
        <ImportantNumbersSection />
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
  // console.log(homepage.data)
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
      default:
        console.error('Component not categorized. Not rendering.');
    }
  });
  return { props: { homepageContent } };
}
