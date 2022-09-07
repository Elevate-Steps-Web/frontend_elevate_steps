import ContactEmails from '../components/Contact/ContactEmails';
import ContactForm from '../components/Contact/ContactForm';
import ContactPhoneNumbers from '../components/Contact/ContactPhoneNumbers';
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
}) {
  return (
    <Page global={global} currentPage="Contact Us">
      <div className="w-full h-full bg-primary-blue">
        {pageHeader && <PageHeader data={pageHeader} />}
        {socialMediaSection && <SocialMediaSection data={socialMediaSection} />}
        {contactEmails && <ContactEmails data={contactEmails} />}
        {contactPhones && <ContactPhoneNumbers data={contactPhones} />}
        {contactForm && <ContactForm data={contactForm} />}
      </div>
    </Page>
  );
}

export async function getServerSideProps({ locale: routeLocale }) {
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
  // TODO: loop through objects and filter objects based on __component property
  const pageContent = {};
  const {
    data: {
      attributes: { content },
    },
  } = page;
  if (content === null) {
    console.log('No data content in contact page.');
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
