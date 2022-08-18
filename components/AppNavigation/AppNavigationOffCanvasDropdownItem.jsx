import Link from 'next/link';

export default function AppNavigationOffCanvasDropdownItem({
  linkText,
  linkRoute,
}) {
  return (
    <Link href={linkRoute} passHref>
      <a className="block hover:text-orange text-xl  active:underline">
        {linkText}
      </a>
    </Link>
  );
}
