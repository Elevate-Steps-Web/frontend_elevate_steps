import { BlogCard } from './BlogCard';
import Container from './Container';

export function BlogIntroSection({ latestPost = null, featuredPosts = [] }) {
  return (
    <Container>
      <div className="w-full lg:w-1/2 py-4">
        <h1 className="text-secondary-blue font-bold text-4xl py-2">
          ELEVATE Blog
        </h1>
        <p className="text-base text-white py-2">
          A small caption to entice readers to keep reading this blog because
          it&apos;s really good!
        </p>
      </div>
      <div className="flex flex-wrap justify-between gap-5">
        {latestPost && (
          <div className="py-6">
            <h1 className="text-secondary-blue font-bold text-4xl pb-4">
              Latest
            </h1>
            <BlogCard
              title={latestPost.attributes.blogTitle}
              description={latestPost.attributes.blogDescription}
              content={latestPost.attributes.blogContent}
            />
          </div>
        )}
        {featuredPosts.length > 0 && (
          <div className="py-6">
            <h1 className="text-secondary-blue font-bold text-4xl pb-4">
              Featured
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between">
              <BlogCard
                title="Featured Blog 1"
                description="A long enoug description to warrant a cutoff and ellipsis instead of the full text"
              />
              <BlogCard
                title="Featured Blog 2"
                description="A long enoug description to warrant a cutoff and ellipsis instead of the full text"
              />
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
