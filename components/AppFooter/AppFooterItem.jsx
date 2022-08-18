import Link from 'next/link';

export default function AppFooterItem({ linkText, linkRoute }) {
  return (
    <Link href={linkRoute} passHref>
      <a className="hover:text-orange text-secondary-blue">{linkText}</a>
    </Link>
  );
}
