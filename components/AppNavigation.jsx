/* eslint-disable no-underscore-dangle */
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import AppNavigationDropdown from './AppNavigation/AppNavigationDropdown';
import AppNavigationItem from './AppNavigation/AppNavigationItem';
import AppNavigationOffCanvasDropdown from './AppNavigation/AppNavigationOffCanvasDropdown';
import AppNavigationOffCanvasItem from './AppNavigation/AppNavigationOffCanvasItem';

function renderItemOrDropdown(navItem, offcanvas = false) {
  if (!offcanvas) {
    switch (navItem.__component) {
      case 'navigation.nav-item':
        return (
          <AppNavigationItem
            key={uuidv4()}
            linkText={navItem.linkText}
            linkRoute={navItem.linkRoute}
          />
        );
      case 'navigation.nav-dropdown':
        return (
          <AppNavigationDropdown
            key={uuidv4()}
            title={navItem.title}
            navItems={navItem.navItems}
          />
        );
      default:
        return <div key={uuidv4()} />;
    }
  } else {
    switch (navItem.__component) {
      case 'navigation.nav-item':
        return (
          <AppNavigationOffCanvasItem
            key={uuidv4()}
            linkText={navItem.linkText}
            linkRoute={navItem.linkRoute}
          />
        );
      case 'navigation.nav-dropdown':
        return (
          <AppNavigationOffCanvasDropdown
            key={uuidv4()}
            title={navItem.title}
            navItems={navItem.navItems}
          />
        );
      default:
        return <div key={uuidv4()} />;
    }
  }
}

function AppNavigation({ nav }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'elevate-steps',
    },
    url: {
      secure: true,
    },
  });
  // filter the brand image out of array and conditionally render it
  return (
    <nav className="navbar navbar-expand-md bg-primary-blue">
      <div className="container-fluid px-8 md:px-12 lg:px-14 2xl:max-w-screen-2xl space-x-5">
        <Link href="/" passHref>
          <a className="navbar-brand">
            <div className="flex justify-center">
              {nav
                .filter((navItem) => navItem.__component === 'images.nav-brand')
                .map((image) => (
                  <AdvancedImage
                    key={uuidv4()}
                    className="object-cover object-center h-10 w-10"
                    cldImg={cld.image(
                      image.navBrand.data.attributes.provider_metadata
                        .public_id,
                    )}
                  />
                ))}
            </div>
          </a>
        </Link>
        <button
          className="d-md-none active:border-white focus:ring focus:ring-white focus:outline-none focus:rounded"
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
          <div className="navbar-nav me-auto text-lg gap-x-5">
            {nav.map((navItem) => renderItemOrDropdown(navItem))}
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
          {/* <LangSwitch />  will be activated once we support other languages. */}
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
            {nav
              .filter((navItem) => navItem.__component === 'images.nav-brand')
              .map((image) => (
                <AdvancedImage
                  key={uuidv4()}
                  className="object-cover object-center max-h-16 md:w-full"
                  cldImg={cld.image(
                    image.navBrand.data.attributes.provider_metadata.public_id,
                  )}
                />
              ))}
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
          {nav.map((navItem) => renderItemOrDropdown(navItem, true))}
          {/* <LangSwitch /> will be activated once we support other languages. */}
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
