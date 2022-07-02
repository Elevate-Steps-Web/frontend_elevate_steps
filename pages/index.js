import AppCarousel from '../components/AppCarousel';
import AppFooter from '../components/AppFooter';
import AppNavigation from '../components/AppNavigation';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import ImportantNumbersSection from '../components/ImportantNumbersSection';
import { Layout } from '../components/Layout';
import SplitSection from '../components/SplitSection';
import { fetchAPI } from '../lib/api';
// type Props = {
//   currentPage?: string,
//   global?: any
// }

export default function Home({ global, homepageContent }) {
  return (
    <Layout global={global} currentPage="Home">
      <AppNavigation />
      <div id="app-carousel">
        <AppCarousel data={homepageContent} />
      </div>
      <div id="app-career-success;  picture left, text right">
        <SplitSection data={homepageContent} />
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
      <AppFooter />
    </Layout>
  );
}

export async function getServerSideProps() {
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
  });
  // TODO: pre-populate global props before homepage data
  return { props: { homepageContent: homepage.data.attributes.content[0] } };
}
