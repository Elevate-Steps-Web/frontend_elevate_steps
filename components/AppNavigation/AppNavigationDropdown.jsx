import { v4 as uuidv4 } from 'uuid';
import AppNavigationDropdownItem from './AppNavigationDropdownItem';

export default function AppNavigationDropdown({ title, navItems }) {
  return (
    <span className="nav-item dropdown">
      <span
        className="nav-link dropdown-toggle text-white hover:text-secondary-blue tracking-wide text-xl"
        id="navbarDropdownMenuLink"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </span>
      <div
        className="dropdown-menu px-2"
        aria-labelledby="navbarDropdownMenuLink"
      >
        {navItems.map((navItem) => (
          <AppNavigationDropdownItem
            key={uuidv4()}
            linkText={navItem.linkText}
            linkRoute={navItem.linkRoute}
          />
        ))}
      </div>
    </span>
  );
}
