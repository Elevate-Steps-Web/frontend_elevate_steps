import { AdvancedImage, AdvancedVideo } from '@cloudinary/react';

import { Cloudinary } from '@cloudinary/url-gen';

export default function TitleCard({
  title,
  bg: {
    data: {
      attributes: {
        formats: {
          medium: {
            provider_metadata: { public_id: mediaId, resource_type: mediaType },
          },
        },
      },
    },
  },
}) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'elevate-steps',
    },
    url: {
      secure: true,
    },
  });
  return (
    <div className="flex flex-col justify-center h-72 w-[22rem] border-2 border-grey-500 hover:border-green rounded-lg transition duration-200 ease-in-out hover:scale-110">
      <div className="absolute flex flex-row z-20 h-72 w-[22rem]">
        <div className="flex flex-col items-center w-full h-full justify-center">
          <h2 className="text-3xl md:text-4xl xl:text-5xl text-center text-white">
            {title}
          </h2>
        </div>
      </div>
      <div className="absolute bg-primary-blue z-0 opacity-30 h-[17.8rem] w-[21.8rem] rounded-md" />
      {mediaType === 'image' && (
        <AdvancedImage
          className="object-cover object-center h-full w-full rounded-md"
          cldImg={cld.image(mediaId)}
        />
      )}
      {mediaType === 'video' && (
        <AdvancedVideo
          className="object-cover object-center h-full w-full py-14"
          cldVid={cld.video(mediaId)}
          autoPlay
        />
      )}
    </div>
  );
}
