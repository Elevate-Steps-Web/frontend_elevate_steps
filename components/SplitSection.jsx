import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import Link from 'next/link';

export default function SplitSection({ data }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'elevate-steps',
    },
    url: {
      secure: true, // force https, set to false to force http
    },
  });
  const {
    text: {
      Header, Caption, LinkText, LinkRoute,
    },
    media: {
      data: {
        attributes: {
          provider_metadata: { public_id: mediaId },
        },
      },
    },
  } = data;
  return (
    <div
      id="split-section"
      className="h-[35rem] lg:h-[42rem] grid md:grid-cols-2"
    >
      <div id="picture" className="hidden md:block h-full w-full bg-orange">
        <AdvancedImage
          className="object-cover object-center h-full w-full"
          cldImg={cld.image(mediaId)}
        />
      </div>
      <div
        id="bg_text"
        className="flex flex-col justify-center h-full w-full bg-primary-blue"
      >
        <div className="flex flex-row items-center mx-auto max-w-lg">
          <div id="content" className="flex flex-col text-center gap-y-5 px-14">
            <h1 className="text-5xl text-white">
              {Header || 'Our Objective? Your Career Success'}
            </h1>
            <p className="text-xl text-secondary-blue">
              {Caption
                || 'We help prepare young, upcoming African professionals to succeed in their future career endeavours. '}
            </p>
            <Link href={LinkRoute || '/programs'} passHref>
              <a className="text-lg hover:text-secondary-blue hover:underline text-green">
                {LinkText || 'Click here to learn more! >'}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
