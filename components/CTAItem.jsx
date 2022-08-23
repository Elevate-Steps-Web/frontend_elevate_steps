import Link from 'next/link';

export default function CTAItem({ data }) {
  const {
    header, caption, linkText, linkRoute,
  } = data;
  return (
    <div className="flex flex-col items-center flex-1 gap-y-3 text-center">
      <h2 className="text-white text-3xl font-bold">{header}</h2>
      <p className="text-white text-xl">{caption}</p>
      <Link href={linkRoute} passHref>
        <a className="text-lg hover:text-secondary-blue btn btn-outline-light mt-4">
          {linkText}
        </a>
      </Link>
    </div>
  );
}
