import { AdvancedImage, AdvancedVideo } from '@cloudinary/react';

import { Cloudinary } from '@cloudinary/url-gen';
import Link from 'next/link';
import Section from './Section';

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
          provider_metadata: { public_id: mediaId, resource_type: mediaType },
        },
      },
    },
  } = data;
  return (
    <Section>
      <div className="grid md:grid-cols-2 w-full h-full">
        <div
          id="media"
          className="order-last md:order-1 md:block h-full w-full bg-black py-14"
        >
          {mediaType === 'image' && (
            <AdvancedImage
              className="object-cover object-center h-full w-full"
              cldImg={cld.image(mediaId)}
            />
          )}
          {mediaType === 'video' && (
            <AdvancedVideo
              className="object-cover object-center h-full w-full"
              cldVid={cld.video(mediaId)}
              controls
            />
          )}
        </div>
        <div
          id="bg_text"
          className="flex flex-col justify-center h-full w-full bg-primary-blue order-2"
        >
          <div className="flex flex-row items-center mx-auto max-w-lg">
            <div
              id="content"
              className="flex flex-col text-center gap-y-5 md:px-14 px-8 py-24"
            >
              <h1 className="text-3xl md:text-5xl text-white">
                {Header || 'Our Objective? Your Career Success'}
              </h1>
              <p className="text-base md:text-xl text-secondary-blue">
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
    </Section>
  );
}
