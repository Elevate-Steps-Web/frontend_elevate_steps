import Image from 'next/image';
import Link from 'next/link';
import LangSwitch from './LangSwitch';

function AppNavigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary-blue">
      <div className="container-fluid px-8 md:px-12 lg:px-14 2xl:max-w-screen-2xl space-x-5">
        <Link href="/" passHref>
          <a className="navbar-brand ">
            <div className="flex justify-center">
              <Image
                src="/static/tmp/elevate-brand.png"
                alt="Elevate Logo"
                height={50}
                width={50}
              />
            </div>
          </a>
        </Link>
        <button
          className="d-lg-none active:border-white focus:ring focus:ring-white focus:outline-none focus:rounded"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
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
          <div className="navbar-nav me-auto text-lg">
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
                className="dropdown-menu px-2"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link href="/about/who-we-are" passHref>
                  <a className="nav-link hover:text-orange">Who We Are</a>
                </Link>
                <Link href="/about/what-we-do" passHref>
                  <a className="nav-link hover:text-orange">What We Do</a>
                </Link>
                <Link href="/about/partners-&-sponsors" passHref>
                  <a className="nav-link hover:text-orange">
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
          <LangSwitch />
        </div>
      </div>
      <div
        className="md:hidden offcanvas-lg offcanvas-end bg-secondary-blue opacity-90"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header mt-4 mx-6">
          <div className="flex justify-center">
            <Image
              src="/static/tmp/elevate-full-o-pb.png"
              className="h-6"
              alt="Elevate logo full"
              height={40}
              width={200}
            />
          </div>
          <button
            type="button"
            data-bs-dismiss="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="currentColor"
              viewBox="0 0 25 25"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
        <div className="lg:hidden mx-10 flex flex-col gap-y-4 text-2xl">
          <Link href="/blog" passHref>
            <a className="hover:text-orange active:underline">Blog</a>
          </Link>
          <Link href="/news" passHref>
            <a className="hover:text-orange  active:underline">News</a>
          </Link>
          <span className="dropdown">
            <span
              className="dropdown-toggle hover:text-orange  active:underline"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              About
            </span>
            <div
              className="dropdown-menu bg-secondary-blue rounded-b-lg border-orange px-2"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link href="/about/who-we-are" passHref>
                <a className="block hover:text-orange text-xl  active:underline">
                  Who We Are
                </a>
              </Link>
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
          <Link href="/contact" passHref>
            <a className="hover:text-orange">Contact</a>
          </Link>
          <LangSwitch />
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
    </nav>
  );
}

export default AppNavigation;
