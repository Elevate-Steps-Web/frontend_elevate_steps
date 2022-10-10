import { useEffect, useState } from 'react';

/* eslint-disable no-unused-vars */
import ContactEmails from '../components/Contact/ContactEmails';
import ContactForm from '../components/Contact/ContactForm';
import ContactPhoneNumbers from '../components/Contact/ContactPhoneNumbers';
import Loading from '../components/Loading';
import { Page } from '../components/Page';
import PageHeader from '../components/PageHeader';
import SocialMediaSection from '../components/Contact/SocialMediaSection';
import { fetchAPI } from '../lib/api';

export default function Contact({
  global,
  pageContent: {
    pageHeader,
    socialMediaSection,
    contactEmails,
    contactPhones,
    contactForm,
  },
  notFound,
}) {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    return () => setLoading(true);
  });
  return isLoading ? (
    <Loading state={isLoading} />
  ) : (
    <Page global={global} currentPage="Contact Us">
      <div className="w-full h-full bg-white">
        {pageHeader && (
          <PageHeader data={pageHeader} titleStyle="text-primary-blue" />
        )}
        {socialMediaSection && (
          <SocialMediaSection data={socialMediaSection} displayColored />
        )}
        <div className="flex md:flex-row flex-col justify-center gap-x-16">
          {contactEmails && <ContactEmails data={contactEmails} />}
          {contactPhones && <ContactPhoneNumbers data={contactPhones} />}
        </div>
        {contactForm && <ContactForm data={contactForm} />}
      </div>
    </Page>
  );
}

export async function getServerSideProps({ locale: routeLocale, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=36000',
  );
  // get Page properties
  const page = await fetchAPI('/contact', {
    populate: {
      content: {
        populate: '*',
      },
      defaultSeo: {
        populate: '*',
      },
    },
    locale: routeLocale,
  });
  if (page.error) {
    console.log('Fetching data failed');
    return {
      notFound: true,
    };
  }
  // TODO: loop through objects and filter objects based on __component property
  const pageContent = {};
  const {
    data: {
      attributes: { content },
    },
  } = page;
  content.forEach((item) => {
    /* eslint-disable-next-line no-underscore-dangle */
    switch (item.__component) {
      case 'text.page-header':
        pageContent.pageHeader = item;
        break;
      case 'text.phone-numbers':
        pageContent.contactPhones = item;
        break;
      case 'text.emails':
        pageContent.contactEmails = item;
        break;
      case 'sections.social-media-section':
        pageContent.socialMediaSection = item;
        break;
      case 'input-forms.contact-form':
        pageContent.contactForm = item;
        break;
      default:
        console.error('Component not categorized. Not rendering.');
    }
  });
  return { props: { pageContent } };
}
