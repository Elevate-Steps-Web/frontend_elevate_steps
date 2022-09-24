import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

export default function SlideInSectionMobile({
  children,
  header,
  subText,
  coverMedia,
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
    <div className="mt-12 w-full flex flex-col space-y-4 text-neutral-700">
      <CoverSide
        header={header}
        subText={subText}
        cld={cld}
        coverMedia={coverMedia}
      />
      <ContentSide content={children} />
    </div>
  );
}

function ContentSide({ content }) {
  return (
    <div className="flex flex-col space-y-2 h-auto  justify-center items-center p-4">
      {content}
    </div>
  );
}

function CoverSide({
  header, subText, coverMedia, cld,
}) {
  return (
    <div className=" relative h-96">
      <div className="absolute h-full w-full bg-gradient-to-b from-primary-blue to-black opacity-60" />
      <div className="absolute w-full h-96 flex flex-col justify-center p-4">
        <h1 className="text-3xl font-cursive text-green">{header}</h1>
        {subText && (
          <p className="font-normal text-lg md:text-xl text-white">{subText}</p>
        )}
      </div>
      <AdvancedImage
        className="object-cover object-center h-full w-full"
        cldImg={cld.image(
          coverMedia.data.attributes.formats.large.provider_metadata.public_id,
        )}
      />
    </div>
  );
}
