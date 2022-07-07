import { Page } from '../../components/Page';
import { BlogIntroSection } from '../../components/BlogIntroSection';
import { BlogListSection } from '../../components/BlogListSection';

export default function BlogHome({ global }) {
  return (
    <Page global={global} currentPage="Blog">
      <div className="bg-primary-blue pb-24">
        <div id="blog-intro">
          <BlogIntroSection />
        </div>
        <div id="blog-list">
          <BlogListSection />
        </div>
      </div>
    </Page>
  );
}
