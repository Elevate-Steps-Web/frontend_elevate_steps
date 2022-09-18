import { BlogCard } from './BlogCard';
import Container from './Container';
import PageHeader from './PageHeader';

export function BlogIntroSection({
  pageHeader,
  latestSectionHeader,
  featuredSectionHeader,
  latestPost = null,
  featuredPosts = [],
}) {
  return (
    <Container>
      <div className="w-full py-4">
        {pageHeader && (
          <PageHeader
            data={pageHeader}
            titleStyle="text-secondary-blue"
            captionStyle="text-white"
          />
        )}
      </div>
      <div className="flex flex-wrap justify-between gap-5">
        {latestPost && (
          <div className="py-6">
            <h1 className="text-secondary-blue font-bold text-4xl pb-4">
              {latestSectionHeader.pageTitle}
            </h1>
            <BlogCard
              id={latestPost.id}
              title={latestPost.attributes.blogTitle}
              description={latestPost.attributes.blogDescription}
              content={latestPost.attributes.blogContent}
            />
          </div>
        )}
        {featuredPosts.length > 0 && (
          <div className="py-6">
            <h1 className="text-secondary-blue font-bold text-4xl pb-4">
              {featuredSectionHeader.pageTitle}
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
