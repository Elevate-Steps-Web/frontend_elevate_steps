import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import ScrollSlideLeft from '../Transitions/Scroll/SlideLeft';
import ScrollSlideRight from '../Transitions/Scroll/SlideRight';

export default function SlideInSectionDesktop({
  children,
  header,
  subText,
  coverMedia,
  contentLeft = false,
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
    <div className="mt-12 w-full h-[36rem] grid grid-cols-7 text-neutral-700">
      {contentLeft ? (
        <>
          <ContentSide content={children} SliderElem={ScrollSlideRight} />
          <CoverSide
            SliderElem={ScrollSlideLeft}
            header={header}
            subText={subText}
            coverMedia={coverMedia}
            contentLeft={contentLeft}
            cld={cld}
          />
        </>
      ) : (
        <>
          <CoverSide
            SliderElem={ScrollSlideRight}
            header={header}
            subText={subText}
            coverMedia={coverMedia}
            contentLeft={contentLeft}
            cld={cld}
          />
          <ContentSide content={children} SliderElem={ScrollSlideLeft} />
        </>
      )}
    </div>
  );
}

function ContentSide({ content, SliderElem }) {
  return (
    <div className="col-span-4 flex flex-col space-y-2 justify-center items-center p-4 px-24">
      <SliderElem>{content}</SliderElem>
    </div>
  );
}

function CoverSide({
  header,
  subText,
  contentLeft,
  SliderElem,
  coverMedia,
  cld,
}) {
  return (
    <div className="col-span-3">
      <SliderElem>
        <div
          className={` relative w-full h-[36rem] rounded-${
            contentLeft ? 'l' : 'r'
          }-lg  shadow-md`}
        >
          <div
            className={`absolute rounded-${
              contentLeft ? 'l' : 'r'
            }-lg h-full w-full bg-gradient-to-b from-primary-blue to-black opacity-40`}
          />
          <div className="absolute w-full h-full flex flex-col justify-center p-12">
            <h1 className=" text-5xl font-cursive text-green pb-4">{header}</h1>
            {subText && (
              <p className="font-normal text-lg md:text-xl text-white">
                {subText}
              </p>
            )}
          </div>
          <AdvancedImage
            className={`object-cover object-center rounded-${
              contentLeft ? 'l' : 'r'
            }-lg h-full w-full`}
            cldImg={cld.image(
              coverMedia.data.attributes.formats.large.provider_metadata
                .public_id,
            )}
          />
        </div>
      </SliderElem>
    </div>
  );
}
