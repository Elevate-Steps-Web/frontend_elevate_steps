import Image from 'next/image';
import Link from 'next/link';

export default function AppFooter() {
  return (
    <footer className="relative self-end bottom-0 mt-screen">
      <div className="bg-black w-full lg:h-72 mt-96 px-10 xl:px-40">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 text-white justify-items-center lg:py-5 py-10 xl:gap-x-2 gap-y-6 md:gap-y-3 mx-auto max-w-[90rem]">
          <div id="logo/home" className="flex flex-col text-center space-y-3">
            <div className="flex justify-center mt-2">
              <Image
                className="h-12"
                src="/static/tmp/elevate-full-o-pb.png"
                alt="Elevate Logo"
                height={40}
                width={200}
              />
            </div>
            <Link href="/" passHref>
              <a className="hover:text-orange text-secondary-blue">Home</a>
            </Link>
          </div>
          <div id="About" className="text-center">
            <h1 className="text-xl">About</h1>
            <div className="text-secondary-blue md:text-sm text-lg flex flex-col xl:space-y-2 mt-2 font-light">
              <Link href="/about/who-we-are" passHref>
                <a className="hover:text-orange text-secondary-blue">
                  Who we are
                </a>
              </Link>
              <Link href="/about/what-we-do" passHref>
                <a className="hover:text-orange text-secondary-blue">
                  What we do
                </a>
              </Link>
              <Link href="/about/mentors" passHref>
                <a className="hover:text-orange text-secondary-blue">Mentors</a>
              </Link>
              <Link href="/about/fellows" passHref>
                <a className="hover:text-orange text-secondary-blue">Fellows</a>
              </Link>
              <Link href="/about/partners-&-sponsors" passHref>
                <a className="hover:text-orange text-secondary-blue">
                  Partners & Sponsors
                </a>
              </Link>
            </div>
          </div>
          <div id="Programs" className="text-center">
            <h1 className="text-xl">Programs</h1>
            <div className="text-secondary-blue md:text-sm text-lg flex flex-col xl:space-y-2 mt-2 font-light">
              <Link href="/programs/mentorship" passHref>
                <a className="hover:text-orange text-secondary-blue">
                  Mentorship
                </a>
              </Link>
              <Link href="#" passHref>
                <a className="hover:text-orange text-secondary-blue">
                  Program B
                </a>
              </Link>
            </div>
          </div>
          <div id="blog" className="text-center">
            <h1 className="text-xl">Blog</h1>
            <div className="text-secondary-blue md:text-sm text-lg flex flex-col xl:space-y-2 mt-2 font-light">
              <Link href="/blog/latest" passHref>
                <a className="hover:text-orange text-secondary-blue">
                  Latest post
                </a>
              </Link>
              <Link href="/blog" passHref>
                <a className="hover:text-orange text-secondary-blue">
                  All posts
                </a>
              </Link>
            </div>
          </div>
          <div id="news" className="text-center">
            <h1 className="text-xl">News</h1>
            <div className="text-secondary-blue md:text-sm text-lg flex flex-col xl:space-y-2 mt-2 font-light">
              <Link href="/news/updates" passHref>
                <a className="hover:text-orange text-secondary-blue">Updates</a>
              </Link>
              <Link href="/news/stories" passHref>
                <a className="hover:text-orange text-secondary-blue">Stories</a>
              </Link>
            </div>
          </div>
          <div id="Legal" className="text-center">
            <h1 className="text-xl">Legal</h1>
            <div className="text-secondary-blue md:text-sm text-lg flex flex-col xl:space-y-2 mt-2 font-light">
              <Link href="/legal/documentation" passHref>
                <a className="hover:text-orange text-secondary-blue">
                  Documentation
                </a>
              </Link>
              <Link href="/legal/privacy" passHref>
                <a className="hover:text-orange text-secondary-blue">Privacy</a>
              </Link>
            </div>
          </div>
        </div>
        <div
          id="copyright"
          className="text-center mt-10 text-secondary-blue font-light text-sm"
        >
          <span>
            Copyright &copy;
            {' '}
            {new Date().getFullYear()}
            {' '}
            Elevate Ltd. All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
