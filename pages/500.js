/* eslint-disable no-underscore-dangle */

import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import Link from 'next/link';
import Container from '../components/Container';
import { Layout } from '../components/Layout';
import { fetchAPI } from '../lib/api';

function Error({ pageData }) {
  const {
    attributes: { favicon, siteName, footer },
  } = pageData;
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
              <span>Internal Server Error.</span>
              <span className="block mt-5">
                The Elevate developers have seen this error and are working to
                fix it. Please wait and try again later. Thank you!
              </span>
            </h1>
            <Link href="/" passHref>
              <a className="h-36 lg:h-56 w-fit">
                <div className="h-18 md:h-32 mt-24 bounce-down">
                  {footer
                    && footer
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

export default Error;

export async function getStaticProps({ locale: routeLocale }) {
  const globalRes = await fetchAPI('/global', {
    populate: {
      favicon: '*',
      nav: {
        populate: '*',
      },
      footer: {
        populate: '*',
      },
      defaultSeo: {
        populate: '*',
      },
      locale: routeLocale,
    },
  });
  // Pass the data to our page via props
  return { props: { pageData: globalRes.data } };
}
