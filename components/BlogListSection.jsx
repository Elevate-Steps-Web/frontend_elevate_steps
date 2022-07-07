import { BlogCard } from './BlogCard';
import Container from './Container';

export function BlogListSection() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-secondary-blue font-bold text-4xl pb-4">
          All Posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-4">
          <BlogCard
            title="Featured Blog 2"
            description="A long enoug description to warrant a cutoff and ellipsis instead of the full text"
          />
          <BlogCard
            title="Featured Blog 2"
            description="A long enoug description to warrant a cutoff and ellipsis instead of the full text"
          />
          <BlogCard
            title="Featured Blog 2"
            description="A long enoug description to warrant a cutoff and ellipsis instead of the full text"
          />
          <BlogCard
            title="Featured Blog 2"
            description="A long enoug description to warrant a cutoff and ellipsis instead of the full text"
          />
          <BlogCard
            title="Featured Blog 2"
            description="A long enoug description to warrant a cutoff and ellipsis instead of the full text"
          />
          <BlogCard
            title="Featured Blog 2"
            description="A long enoug description to warrant a cutoff and ellipsis instead of the full text"
          />
          <BlogCard
            title="Featured Blog 2"
            description="A long enoug description to warrant a cutoff and ellipsis instead of the full text"
          />
          <BlogCard
            title="Featured Blog 2"
            description="A long enoug description to warrant a cutoff and ellipsis instead of the full text"
          />
        </div>
      </div>
    </Container>
  );
}
