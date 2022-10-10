import _ from 'lodash';
import { useEffect } from 'react';
import Loading from '../../components/Loading';
import { fetchAPI } from '../../lib/api';

export default function LatestBlogPost({ blogPosts }) {
  const latestPost = blogPosts
    /* eslint-disable-next-line max-len */
    && blogPosts.reduce((prev, curr) => (Date.parse(prev.attributes.createdAt)
      > Date.parse(curr.attributes.createdAt)
      ? prev
      : curr));
  const {
    id,
    attributes: { blogTitle },
  } = latestPost;
  useEffect(() => {
    window.location.href = `/blog/${id}/${_.kebabCase(blogTitle)}`;
  });
  return <Loading state />;
}

export async function getServerSideProps({ locale: routeLocale, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=36000',
  );
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
