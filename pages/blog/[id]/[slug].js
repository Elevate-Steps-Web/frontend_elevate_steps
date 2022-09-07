import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import MarkdownIt from 'markdown-it';
import _ from 'lodash';
import parse from 'html-react-parser';
import { Page } from '../../../components/Page';
import ShareFacebook from '../../../components/socialMediaSharing/ShareFacebook';
import ShareTwitter from '../../../components/socialMediaSharing/ShareTwitter';
import { fetchAPI } from '../../../lib/api';

export default function BlogPost({ global, post }) {
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
    blogTitle, blogContent, coverMedia, author, locale,
  } = post.attributes;
  const content = md.render(blogContent);
  return (
    <Page global={global} currentPage="Blog">
      <div className="relative h-64 md:h-96 lg:h-[650px] w-screen">
        <div className="absolute h-full w-full bg-gradient-to-b from-primary-blue to-black opacity-60" />
        <div className="absolute flex flex-col item-center justify-center h-full w-full p-4 lg:p-24 text-4xl md:text-6xl lg:text-8xl font-bold text-white">
          <h1 className="text-center">{blogTitle}</h1>
        </div>
        <div className="absolute bottom-0 left-0 p-2 px-8 md:px-12 md:py-8 lg:px-24 text-2xl text-green font-cursive">
          <h2>
            <span className="text-xl font-light font-sans text-white">
              author:
              {' '}
            </span>
            {author}
          </h2>
        </div>
        <div className="absolute flex flex-row bottom-0 right-0 p-2 px-8 md:px-12 md:py-8 lg:px-24 text-2xl gap-x-4">
          <ShareTwitter locale={locale} />
          <ShareFacebook />
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

export async function getStaticPaths() {
  const postRes = await fetchAPI('/blog-posts', { locale: 'all' });
  return {
    paths: postRes.data.map((post) => ({
      params: {
        id: post.id.toString(),
        slug: _.kebabCase(post.attributes.blogTitle),
      },
      locale: post.attributes.locale,
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params, locale: routeLocale }) {
  const postRes = await fetchAPI('/blog-posts', {
    filters: {
      id: params.id,
    },
    populate: '*',
    locale: routeLocale,
  });
  return {
    props: { post: postRes.data[0] },
    revalidate: 1,
  };
}
