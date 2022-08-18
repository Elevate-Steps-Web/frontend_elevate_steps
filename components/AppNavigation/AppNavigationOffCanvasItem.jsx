import Link from 'next/link';

export default function AppNavigationOffCanvasItem({ linkText, linkRoute }) {
  return (
    <Link href={linkRoute} passHref>
      <a className="hover:text-orange">{linkText}</a>
    </Link>
  );
}
