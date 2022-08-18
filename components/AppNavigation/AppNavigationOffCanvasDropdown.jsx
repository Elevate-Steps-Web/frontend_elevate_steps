import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import AppNavigationOffCanvasDropdownItem from './AppNavigationOffCanvasDropdownItem';

export default function AppNavigationOffCanvasDropdown({ title, navItems }) {
  return (
    <span className="dropdown">
      <span
        className="dropdown-toggle hover:text-orange  active:underline"
        id="navbarDropdownMenuLink"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </span>
      <div
        className="dropdown-menu bg-secondary-blue rounded-b-lg border-orange px-2"
        aria-labelledby="navbarDropdownMenuLink"
      >
        {navItems.map((navItem) => (
          <AppNavigationOffCanvasDropdownItem
            key={uuidv4()}
            linkText={navItem.linkText}
            linkRoute={navItem.linkRoute}
          />
        ))}
        <Link href="/about/what-we-do" passHref>
          <a className="block hover:text-orange text-xl  active:underline">
            What We Do
          </a>
        </Link>
        <Link href="/about/partners-&-sponsors" passHref>
          <a className="block hover:text-orange text-xl  active:underline">
            Partners and Sponsors
          </a>
        </Link>
      </div>
    </span>
  );
}
