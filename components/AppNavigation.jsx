import Link from 'next/link';

function AppNavigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary-blue">
      <div className="container-fluid px-8 md:px-12 lg:px-14 2xl:max-w-screen-2xl space-x-5">
        <Link href="/" passHref>
          <a className="navbar-brand">
            <img
              className="h-10 w-10"
              src="/static/tmp/elevate-brand.png"
              alt="Elevate Logo"
            />
          </a>
        </Link>
        <button
          className="navbar-toggler focus:border-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="lightgray"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav me-auto space-x-5 text-lg">
            <Link href="/blog" passHref>
              <a className="nav-link hover:text-secondary-blue text-white">
                Blog
              </a>
            </Link>
            <Link href="/news" passHref>
              <a className="nav-link hover:text-secondary-blue text-white">
                News
              </a>
            </Link>
            <span className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle text-white hover:text-secondary-blue"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </span>
              <div
                className="dropdown-menu bg-primary-blue rounded-b-lg border-orange px-2"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link href="/about/who-we-are" passHref>
                  <a className="nav-link hover:text-orange text-white">
                    Who We Are
                  </a>
                </Link>
                <Link href="/about/what-we-do" passHref>
                  <a className="nav-link hover:text-orange text-white">
                    What We Do
                  </a>
                </Link>
                <Link href="/about/partners-&-sponsors" passHref>
                  <a className="nav-link hover:text-orange text-white">
                    Partners and Sponsors
                  </a>
                </Link>
              </div>
            </span>
            <Link href="/contact" passHref>
              <a className="nav-link hover:text-secondary-blue text-white">
                Contact
              </a>
            </Link>
          </div>
          <div className="hidden flex flex-col lg:flex-row w-[200px] gap-y-3 lg:gap-y-0 lg:gap-x-4 lg:w-[180px] items-center">
            <Link href="/register" passHref>
              <a className="nav-link hover:text-secondary-blue text-white px-0 text-lg">
                Register
              </a>
            </Link>
            <Link href="/login" passHref>
              <a
                role="button"
                className="btn btn-outline-light hover:text-secondary-blue mb-5 lg:mb-0 lg:w-24 h-4/12"
              >
                Login
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AppNavigation;
