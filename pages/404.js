/* eslint-disable no-underscore-dangle */

import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import Link from 'next/link';
import Container from '../components/Container';
import { Page } from '../components/Page';

export default function FourOhFour({ global }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'elevate-steps',
    },
    url: {
      secure: true,
    },
  });
  function get404Text(routeLocale) {
    switch (routeLocale) {
      case 'en':
        return {
          caption: "Looks like you're lost!",
          homePrompt: 'Wanna head back home? Hit the bouncing button below!',
        };
      default:
        return {
          caption: "Looks like you're lost!",
          homePrompt: 'Wanna head back home? Hit the bouncing button below!',
        };
    }
  }
  const errorText = get404Text(global.attributes.locale);
  return (
    <Page global={global} currentPage="404">
      <div className="flex flex-col items-center py-24">
        <Container>
          <div className="flex flex-col items-center text-center px-6">
            <h1 className="text-9xl lg:text-[16rem] tracking-widest font-cursive text-orange">
              404
            </h1>
            <h2 className="text-3xl lg:text-4xl font-cursive text-orange mb-24">
              {errorText.caption}
            </h2>
            <h2 className="text-3xl text-primary-blue">
              {errorText.homePrompt}
            </h2>
            <Link href="/" passHref>
              <a className="h-36 lg:h-56 w-fit">
                <div className="h-18 md:h-32 mt-24 bounce-down">
                  {global.attributes.footer
                    .filter(
                      (navItem) => navItem.__component === 'images.nav-brand',
                    )
                    .map((image) => (
                      <AdvancedImage
                        key={1}
                        className="object-cover object-center h-full lg:h-16 w-fit"
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
    </Page>
  );
}
