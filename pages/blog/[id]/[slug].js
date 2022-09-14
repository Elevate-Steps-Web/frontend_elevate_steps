/* eslint-disable no-unused-vars */
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import MarkdownIt from 'markdown-it';
import { Page } from '../../../components/Page';
import ShareToSocials from '../../../components/ShareToSocials';
import { fetchAPI } from '../../../lib/api';
import parse from 'html-react-parser';
import { v4 as uuidv4 } from 'uuid';

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
  const socials = ['Facebook', 'Twitter', 'WhatsApp', 'Telegram', 'LinkedIn'];
  return (
    <Page global={global} currentPage="Blog">
      <div className="relative h-96 md:h-96 lg:h-[650px] w-screen">
        <div className="absolute h-full w-full bg-gradient-to-b from-primary-blue to-black opacity-60" />
        <div className="absolute flex flex-col item-center justify-center h-96 lg:h-[40rem] w-full p-4 lg:p-24 xl:p-36 text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white gap-y-5">
          <h1 className="text-center">{blogTitle}</h1>
          <div className="block sm:hidden p-2 px-8 md:px-12 md:py-8 lg:px-24  text-center text-2xl text-green font-cursive">
            <h2>
              <span className="text-xl font-normal font-sans text-white">
                author:
                {' '}
              </span>
              {author}
            </h2>
          </div>
          <div className="sm:hidden flex flex-row justify-center p-2 px-8 md:px-12 md:py-8 lg:px-24 text-2xl gap-x-4">
            {socials.map((social) => (
              <ShareToSocials
                key={uuidv4()}
                target={social}
                pageTitle={blogTitle}
              />
            ))}
          </div>
        </div>
        <div className="hidden sm:block sm:absolute bottom-0 left-0 p-2 px-8 md:px-12 md:py-8 lg:px-24 text-2xl text-green font-cursive">
          <h2>
            <span className="text-xl font-normal font-sans text-white">
              author:
              {' '}
            </span>
            {author}
          </h2>
        </div>
        <div className="hidden sm:absolute sm:flex flex-row bottom-0 right-0 p-2 px-8 md:px-12 md:py-8 lg:px-24 text-2xl gap-x-4">
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
