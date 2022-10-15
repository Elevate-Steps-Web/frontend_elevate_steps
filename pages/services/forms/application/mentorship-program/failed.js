/* eslint-disable no-unused-vars */
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from '../../../../../components/Container';
import { Layout } from '../../../../../components/Layout';

export default function ApplicationFailed({ global, notFound }) {
  const {
    attributes: { favicon, siteName, footer },
  } = global;
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'elevate-steps',
    },
    url: {
      secure: true,
    },
  });
  const router = useRouter();
  const currentPath = router.asPath;
  const parentPath = currentPath.replace('/failed', '');
  return (
    <Layout
      siteName={siteName}
      favicon={favicon}
      currentPage="Application Complete"
    >
      <Container>
        <div className="flex flex-col items-center justify-center h-screen w-full flex-grow bg-white">
          <h1 className="text-primary-blue text-4xl text-center px-4 md:px-24">
            <span>Application Failed!</span>
            <span className="block mt-5">
              {"We're really sorry about that. "}
              {
                "Don't worry, it's most likely a failure on our side, and we'll try to fix it. "
              }
              In the meantime, please wait or click on the bouncing button below to try again.
            </span>
          </h1>
          <Link href={parentPath} passHref>
            <a className="h-36 lg:h-56 w-fit">
              <div className="h-18 md:h-32 mt-24 bounce-down">
                {footer
                  /* eslint-disable-next-line no-underscore-dangle */
                  .filter((navItem) => navItem.__component === 'images.nav-brand')
                  .map((image) => (
                    <AdvancedImage
                      key={1}
                      className="object-cover object-center h-full lg:h-32 w-fit"
                      cldImg={cld.image(
                        image.navBrand.data.attributes.provider_metadata
                          .public_id,
                      )}
                    />
                  ))}
              </div>
            </a>
          </Link>
        </div>
      </Container>
    </Layout>
  );
}
