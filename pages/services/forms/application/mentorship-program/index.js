/* eslint-disable import/no-unresolved */
import 'swiper/css';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Keyboard, Scrollbar } from 'swiper';

import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import { fetchAPI } from '../../../../../lib/api';
import FormSection from '../../../../../components/ApplicationForm/FormSection';
import FormIntroSection from '../../../../../components/ApplicationForm/FormIntroSection';

SwiperCore.use([Keyboard]);

export default function MentorshipApplicationPage({ global, pageContent }) {
  const {
    attributes: { footer },
  } = global;
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'elevate-steps',
    },
    url: {
      secure: true, // force https, set to false to force http
    },
  });
  const { pageHeader, formSections } = pageContent;
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
    const formDataObj = {};

    /* eslint-disable-next-line no-return-assign */
    data.forEach((value, key) => (formDataObj[key] = value));

    console.log(formDataObj);

    const endpoint = '/api/forms/applications/mentorship-program';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formDataObj,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();
    console.log(result.data);
    const currentPath = router.asPath;
    router.push(`${currentPath}complete`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col flex-grow h-screen bg-primary-blue">
        <Link href="/" passHref>
          <a className="h-24 w-fit">
            <div className="absolute h-20 mt-8 ml-14">
              {footer
                /* eslint-disable-next-line no-underscore-dangle */
                .filter((navItem) => navItem.__component === 'images.nav-brand')
                .map((image) => (
                  <AdvancedImage
                    key={1}
                    className="object-cover object-center h-full lg:h-10 lg:w-full w-3/5"
                    cldImg={cld.image(
                      image.navBrand.data.attributes.provider_metadata
                        .public_id,
                    )}
                  />
                ))}
            </div>
          </a>
        </Link>

        <div className="absolute h-20 mt-6 mr-14 right-0">
          <span className="text-secondary-blue font-cursive text-2xl">
            Elevate Mentorship Program Application
          </span>
        </div>
        <Swiper
          scrollbar={{
            hide: false,
            draggable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          cssMode
          centeredSlides
          modules={[Scrollbar]}
        >
          <SwiperSlide>
            <FormIntroSection
              title={pageHeader.pageTitle}
              introText={pageHeader.caption}
              direction="right"
            />
          </SwiperSlide>
          {formSections.map((section) => (
            <SwiperSlide key={uuidv4()}>
              <FormSection data={section} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </form>
  );
}

export async function getStaticProps() {
  // get Page properties
  const page = await fetchAPI('/mentorship-program-application', {
    populate: {
      content: {
        populate: {
          fields: {
            populate: '*',
          },
        },
      },
      defaultSeo: {
        populate: '*',
      },
    },
  });
  // TODO: loop through objects and filter objects based on __component property
  const pageContent = {};
  pageContent.formSections = [];
  const {
    data: {
      attributes: { content },
    },
  } = page;
  if (content === null) {
    console.log('No data content in page api.');
    return {
      notFound: true,
    };
  }
  content.forEach((item) => {
    /* eslint-disable-next-line no-underscore-dangle */
    switch (item.__component) {
      case 'text.page-header':
        pageContent.pageHeader = item;
        break;
      case 'input-forms.application-form-section':
        pageContent.formSections.push(item);
        break;
      default:
        console.log(item);
        console.error('Component not categorized. Not rendering.');
    }
  });
  return { props: { pageContent } };
}
