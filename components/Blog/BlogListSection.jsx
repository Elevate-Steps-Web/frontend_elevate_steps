import { BlogCard } from './BlogCard';
import Container from '../Container';

export function BlogListSection({ header, posts = [] }) {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-secondary-blue font-bold text-4xl pb-4">
          {header.pageTitle}
        </h1>
        <div className="flex flex-wrap md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-4">
          {posts.map((blog) => (
            <BlogCard
              id={blog.id}
              title={blog.attributes.blogTitle}
              description={blog.attributes.blogDescription}
              content={blog.attributes.blogContent}
              key={`blog-${blog.id}`}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
