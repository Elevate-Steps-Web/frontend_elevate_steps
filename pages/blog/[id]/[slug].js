/* eslint-disable no-unused-vars */
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import MarkdownIt from 'markdown-it';
import parse from 'html-react-parser';
import { v4 as uuidv4 } from 'uuid';
import { Page } from '../../../components/Page';
import ShareToSocials from '../../../components/ShareToSocials';
import { fetchAPI } from '../../../lib/api';

export default function BlogPost({ global, post, notFound }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'elevate-steps',
    },
    url: {
      secure: true,
    },
  });
  const md = new MarkdownIt({ html: true, linkify: true, breaks: true });
  const {
    blogTitle, blogContent, coverMedia, author,
  } = post.attributes;
  const content = md.render(blogContent);
  const socials = ['Facebook', 'Twitter', 'WhatsApp', 'Telegram'];
  return (
    <Page global={global} currentPage="Blog">
      <div className="relative h-64 md:h-96 lg:h-[650px] w-screen">
        <div className="absolute h-full w-full bg-gradient-to-b from-primary-blue to-black opacity-60" />
        <div className="absolute flex flex-col item-center justify-center h-full w-full p-4 lg:p-24 text-4xl md:text-6xl lg:text-8xl font-bold text-white">
          <h1 className="text-center">{blogTitle}</h1>
        </div>
        <div className="absolute bottom-0 left-0 p-2 px-8 md:px-12 md:py-8 lg:px-24 text-2xl text-green font-cursive">
          <h2>
            <span className="text-xl font-normal font-sans text-white">
              author:
              {' '}
            </span>
            {author}
          </h2>
        </div>
        <div className="absolute flex flex-row bottom-0 right-0 p-2 px-8 md:px-12 md:py-8 lg:px-24 text-2xl gap-x-4">
          {socials.map((social) => (
            <ShareToSocials
              key={uuidv4()}
              target={social}
              pageTitle={blogTitle}
            />
          ))}
        </div>
        <AdvancedImage
          className="object-cover object-center h-full w-full"
          cldImg={cld.image(
            coverMedia.data.attributes.formats.large.provider_metadata
              .public_id,
          )}
        />
      </div>
      <div className="bg-white py-6 px-8 md:px-16 lg:px-32 lg:py-12 xl:px-72 pb-24">
        <div className="markdown">{parse(content)}</div>
      </div>
    </Page>
  );
}

export async function getServerSideProps({ params, locale: routeLocale }) {
  const postRes = await fetchAPI('/blog-posts', {
    filters: {
      id: params.id,
    },
    populate: '*',
    locale: routeLocale,
  });
  if (postRes.error) {
    console.log('Fetching data failed');
    return {
      notFound: true,
    };
  }
  return {
    props: { post: postRes.data[0] },
  };
}
