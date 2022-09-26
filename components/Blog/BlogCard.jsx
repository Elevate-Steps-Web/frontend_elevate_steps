import Link from 'next/link';
import _ from 'lodash';

export function BlogCard({
  title, description, id, content = '',
}) {
  const desc = description
    ?? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  const timeToRead = Math.ceil(content.split(' ').length / 200);
  return (
    <Link href={`/blog/${id}/${_.kebabCase(title)}`} passHref>
      <div className="blog-card w-64 shadow-md p-8 rounded-md transform hover:scale-105 duration-100 bg-white">
        <h1 className="font-bold text-green py-2 text-xl">{title ?? 'Blog'}</h1>
        <p className="py-2 text-sm">
          {desc.length <= 80 ? desc : `${desc.substring(0, 80)}...`}
        </p>
        <p className="py-2 text-xs text-secondary-blue">
          {`${timeToRead}m read`}
        </p>
      </div>
    </Link>
  );
}
