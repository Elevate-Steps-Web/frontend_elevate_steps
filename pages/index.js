import AppCarousel from '../components/AppCarousel';
import CTASection from '../components/CTASection';
import Container from '../components/Container';
import FAQSection from '../components/FAQSection';
import ImportantNumbersSection from '../components/ImportantNumbersSection';
import { Layout } from '../components/Layout';
import SplitSection from '../components/SplitSection';
// type Props = {
//   currentPage?: string,
//   global?: any
// }

export default function Home({ global }) {
  return (
    <Layout global={global} currentPage="Home">
      <Container>
        <div id="app-carousel">
          <AppCarousel />
        </div>
        <div id="app-career-success;  picture left, text right">
          <SplitSection />
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
      </Container>
    </Layout>
  );
}
