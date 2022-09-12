/* eslint-disable no-underscore-dangle */

import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import Link from 'next/link';
import Container from '../components/Container';
import { Layout } from '../components/Layout';

function Error({ statusCode, global }) {
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
  return (
    <Layout siteName={siteName} favicon={favicon} currentPage="Error">
      <div className="flex flex-col items-center justify-center h-screen w-full flex-grow bg-primary-blue">
        <Container>
          <div className="flex flex-col items-center text-center px-6">
            <h1 className="text-white text-4xl text-center px-4 md:px-24">
              {statusCode ? (
                <span>{`An error ${statusCode} occurred on server while processing your request.`}</span>
              ) : (
                <span>
                  An error occurred in your browser while loading this page.
                </span>
              )}
              <span className="block mt-5">
                But not to worry. Click on the logo below and head on back to
                the homepage!
              </span>
            </h1>
            <Link href="/" passHref>
              <a className="h-36 lg:h-56 w-fit">
                <div className="h-18 md:h-32 mt-24 bounce-down">
                  {footer
                    .filter(
                      (navItem) => navItem.__component === 'images.nav-brand',
                    )
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
      </div>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  /* eslint-disable-next-line no-nested-ternary */
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
