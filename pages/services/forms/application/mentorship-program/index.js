/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

import 'swiper/css';
import 'swiper/css/scrollbar';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Keyboard, Scrollbar } from 'swiper';

import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import Container from '../../../../../components/Container';
import FormIntroSection from '../../../../../components/ApplicationForm/FormIntroSection';
import FormSection from '../../../../../components/ApplicationForm/FormSection';
import { Layout } from '../../../../../components/Layout';
import Loading from '../../../../../components/Loading';
import alreadyApplied from '../../../../../constants/constants';
import { fetchAPI } from '../../../../../lib/api';

SwiperCore.use([Keyboard]);

export default function MentorshipApplicationPage({
  global,
  pageContent,
  isApplicationOpen,
  notFound,
}) {
  const {
    attributes: { favicon, siteName, footer },
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
  const [isLoading, setLoading] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const data = new FormData(event.target);
    const formDataObj = {};

    /* eslint-disable-next-line no-return-assign */
    data.forEach((value, key) => (formDataObj[key] = value));

    // check the email of the formDataObj. if it already exists,
    // log a message and redirect to the homescreen
    if (alreadyApplied(formDataObj.email, formDataObj.fullname)) {
      // eslint-disable-next-line no-alert
      alert('You have already applied. Redirecting to the homepagee.');
      window.location.href = '/';
      return;
    }

    const endpoint = '/api/forms/applications/mentorship-program';
    const options = {
      method: 'post',
      body: data,
    };
    const response = await fetch(endpoint, options);

    const result = await response.json();
    console.log(result);
    const currentPath = router.asPath;
    let targetPath;
    if (result.status === 'success') {
      // redirect to status complete page (might need improvement)
      targetPath = 'complete';
    } else {
      targetPath = 'failed';
    }
    window.location.href = `${currentPath}/${targetPath}`;
  };

  useEffect(() => {
    setLoading(false);
    return () => setLoading(true);
  });

  return isLoading ? (
    <Loading state={isLoading} />
  ) : (
    <Layout
      siteName={siteName}
      favicon={favicon}
      currentPage="Elevate Mentorship Program Application"
    >
      {isApplicationOpen ? (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col bg-primary-blue lg:justify-start lg:items-start items-center h-[88vh] md:h-screen overflow-scroll">
            <Link href="/" passHref>
              <a className="h-10 md:h-24 w-fit">
                <div className="lg:absolute lg:h-20 h-10 lg:mt-8 lg:ml-14 mt-6 ml-4">
                  {footer
                    .filter(
                      (navItem) => navItem.__component === 'images.nav-brand',
                    )
                    .map((image) => (
                      <AdvancedImage
                        key={1}
                        className="object-cover object-center h-6 xl:h-10 lg:w-full"
                        cldImg={cld.image(
                          image.navBrand.data.attributes.provider_metadata
                            .public_id,
                        )}
                      />
                    ))}
                </div>
              </a>
            </Link>
            <div className="lg:absolute lg:h-16 lg:mt-6 lg:mr-14 lg:right-0 md:mb-0 text-center mt-4 pb-2">
              <span className="text-secondary-blue font-cursive text-lg lg:text-2xl">
                Elevate Mentorship Program Application
              </span>
            </div>
            <Swiper
              shortSwipes={false}
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
      ) : (
        <Container>
          <div className="flex flex-col items-center justify-center h-screen w-full flex-grow bg-white">
            <h1 className="text-orange text-4xl text-center px-4 md:px-24">
              <span>Application currently unavailable!</span>
              <span className="block mt-5">
                Click on the logo below and head on back to the homepage!
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
      )}
    </Layout>
  );
}

export async function getServerSideProps() {
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
  if (page.error) {
    console.log('Fetching data failed');
    return {
      notFound: true,
    };
  }
  const pageContent = {};
  pageContent.formSections = [];
  const {
    data: {
      attributes: { content, isApplicationOpen },
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
  return { props: { pageContent, isApplicationOpen } };
}
