import { Page } from '../../components/Page';
import { BlogIntroSection } from '../../components/BlogIntroSection';
import { BlogListSection } from '../../components/BlogListSection';
import { fetchAPI } from '../../lib/api';

export default function BlogHome({ global, blogPosts }) {
  const latestBlog = blogPosts
    /* eslint-disable-next-line max-len */
    && blogPosts.reduce((prev, curr) => (prev.attributes.createdAt < curr.attributes.createdAt ? prev : curr));
  return (
    <Page global={global} currentPage="Blog">
      {blogPosts && (
        <div className="bg-primary-blue pb-24">
          <div id="blog-intro">
            <BlogIntroSection latestPost={latestBlog} />
          </div>
          <div id="blog-list">
            <BlogListSection posts={blogPosts} />
          </div>
        </div>
      )}
    </Page>
  );
}

export async function getStaticProps() {
  const blogPostsRes = await fetchAPI('/blog-posts', { populate: '*' });
  return { props: { blogPosts: blogPostsRes.data } };
}
