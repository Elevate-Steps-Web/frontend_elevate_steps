/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import AppCarousel from '../components/AppCarousel';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import Loading from '../components/Loading';
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
    pageMetaDescription,
  },
  notFound,
}) {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    return () => setLoading(true);
  });

  return isLoading ? (
    <Loading state={isLoading} />
  ) : (
    <Page
      global={global}
      currentPage="Home"
      pageMetaDescription={pageMetaDescription}
    >
      <div id="app-carousel">
        {caroussel && <AppCarousel data={caroussel} />}
      </div>
      <div id="picture left, text right">
        {splitSection && <SplitSection data={splitSection} />}
      </div>
      <div id="important numbers" className="py-14">
        {statsSection && <StatsSection data={statsSection} />}
      </div>
      <div id="faeq section">
        {faeqSection && <FAQSection data={faeqSection} />}
      </div>
      <div id="cta section" className="py-20">
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
        ctaItems: {
          populate: '*',
        },
      },
      defaultSeo: {
        populate: '*',
      },
    },
    locale: routeLocale,
  });
  if (homepage.error) {
    console.log('Fetching data failed');
    return {
      notFound: true,
    };
  }
  const homepageContent = {};
  const {
    data: {
      attributes: { content, pageMetaDescription },
    },
  } = homepage;
  homepageContent.pageMetaDescription = pageMetaDescription;
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
