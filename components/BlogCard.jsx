import Link from 'next/link';

export function BlogCard({ title, description }) {
  const desc = description
    ?? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  const timeToRead = Math.ceil(desc.split(' ').length / 200);
  return (
    <Link href="/" passHref>
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
