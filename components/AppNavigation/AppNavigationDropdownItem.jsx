import Link from 'next/link';

export default function AppNavigationDropdownItem({ linkText, linkRoute }) {
  return (
    <Link href={linkRoute} passHref>
      <a className="nav-link hover:text-orange">{linkText}</a>
    </Link>
  );
}
