/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import { BlogIntroSection } from '../../components/BlogIntroSection';
import { BlogListSection } from '../../components/BlogListSection';
import Loading from '../../components/Loading';
import { Page } from '../../components/Page';
import { fetchAPI } from '../../lib/api';

export default function BlogHome({ global, blogPosts, notFound }) {
  const latestBlog = blogPosts
    /* eslint-disable-next-line max-len */
    && blogPosts.reduce((prev, curr) => (Date.parse(prev.attributes.createdAt)
      > Date.parse(curr.attributes.createdAt)
      ? prev
      : curr));
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    return () => setLoading(true);
  });
  return isLoading ? (
    <Loading state={isLoading} />
  ) : (
    <Page global={global} currentPage="Blog">
      {blogPosts ? (
        <div className="bg-primary-blue pb-24">
          <div id="blog-intro">
            <BlogIntroSection latestPost={latestBlog} />
          </div>
          <div id="blog-list">
            <BlogListSection posts={blogPosts} />
          </div>
        </div>
      ) : (
        <div className="bg-white p-24 text-4xl font-bold text-primary-blue flex flex-grow">
          Stay tuned for future posts!
        </div>
      )}
    </Page>
  );
}

export async function getServerSideProps({ locale: routeLocale }) {
  const blogPostsRes = await fetchAPI('/blog-posts', {
    populate: '*',
    locale: routeLocale,
  });
  if (blogPostsRes.error) {
    console.log('Fetching data failed');
    return {
      notFound: true,
    };
  }
  return { props: { blogPosts: blogPostsRes.data } };
}
