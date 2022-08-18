/* eslint-disable no-underscore-dangle */
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { v4 as uuidv4 } from 'uuid';
import AppFooterColumn from './AppFooter/AppFooterColumn';
import AppFooterItem from './AppFooter/AppFooterItem';

export default function AppFooter({ footer }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'elevate-steps',
    },
    url: {
      secure: true, // force https, set to false to force http
    },
  });
  return (
    <footer className="relative w-full self-end bottom-0 mt-screen">
      <div className="bg-black w-full px-10 xl:px-40">
        <div className="grid md:grid-cols-2 lg:flex lg:flex-row text-white justify-items-center lg:py-5 py-10 xl:gap-x-2 gap-y-6 md:gap-y-3 mx-auto max-w-[90rem]">
          <div id="logo/home" className="flex flex-col text-center space-y-3">
            <div className="flex justify-center mt-2">
              {footer
                .filter((navItem) => navItem.__component === 'images.nav-brand')
                .map((image) => (
                  <AdvancedImage
                    key={1}
                    className="object-cover object-center h-10 w-full"
                    cldImg={cld.image(
                      image.navBrand.data.attributes.provider_metadata
                        .public_id,
                    )}
                  />
                ))}
            </div>
            <AppFooterItem linkText="Home" linkRoute="/" />
          </div>
          {footer.map(
            (footerItem) => footerItem.__component === 'navigation.footer-column' && (
            <AppFooterColumn
              key={uuidv4()}
              title={footerItem.columnTitle}
              footerItems={footerItem.footerItems}
            />
            ),
          )}
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
