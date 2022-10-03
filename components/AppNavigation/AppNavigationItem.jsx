import Link from 'next/link';

export default function AppNavigationItem({ linkText, linkRoute }) {
  return (
    <Link href={linkRoute} passHref>
      <a className="nav-link text-xl hover:text-secondary-blue text-white tracking-wide">
        {linkText}
      </a>
    </Link>
  );
}
