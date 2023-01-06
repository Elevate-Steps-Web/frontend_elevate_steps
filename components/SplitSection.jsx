import { AdvancedImage, AdvancedVideo } from '@cloudinary/react';

import { Cloudinary } from '@cloudinary/url-gen';
import Link from 'next/link';
import _ from 'lodash';
import Section from './Section';
import YouTubePlayer from './YouTubePlayer';

export default function SplitSection({ data }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'elevate-steps',
    },
    url: {
      secure: true,
    },
  });
  const {
    text: {
      Header, Caption, LinkText, LinkRoute,
    },
    media: {
      data: {
        attributes: {
          provider_metadata: {
            public_id: mediaId = '',
            resource_type: mediaType = '',
          },
        } = {},
      } = {},
    } = {},
    embedVideoUrl,
  } = data;
  return (
    <Section>
      <div className="grid md:grid-cols-2 w-full h-full">
        <div
          id="media"
          className="order-last md:order-1 md:block h-full w-full bg-black "
        >
          {embedVideoUrl ? (
            <YouTubePlayer src={embedVideoUrl} />
          ) : (
            <div className="w-full h-full">
              {!_.isEmpty(data.media.data) && (
                <>
                  {mediaType === 'image' && (
                    <AdvancedImage
                      className="object-cover object-center h-full w-full"
                      cldImg={cld.image(mediaId)}
                    />
                  )}
                  {mediaType === 'video' && (
                    <AdvancedVideo
                      className="object-cover object-center h-full w-full py-14"
                      cldVid={cld.video(mediaId)}
                      controls
                    />
                  )}
                </>
              )}
            </div>
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
              <h1 className="text-3xl md:text-5xl text-white">{Header}</h1>
              <p className="md:text-xl text-secondary-blue">{Caption}</p>
              <Link href={LinkRoute} passHref>
                <a className="hover:text-primary-blue btn btn-green mt-5 hover:bg-green text-green hover:border-green border-green md:text-lg lg:text-xl xl:text-2xl mx-auto h-full">
                  {LinkText}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
