import { AdvancedImage } from '@cloudinary/react';
import Carousel from 'react-bootstrap/Carousel';
import { Cloudinary } from '@cloudinary/url-gen';
import Link from 'next/link';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AppCarousel({ data }) {
  const {
    images: { data: imageData },
    carousselText,
  } = data;
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'elevate-steps',
    },
    url: {
      secure: true,
    },
  });
  return (
    <Carousel interval="3500" key={uuidv4()} className="relative">
      {imageData.map((image, index) => (
        <Carousel.Item
          key={uuidv4()}
          className="shadow-xl h-[35rem] lg:h-[44rem] xl:h-[50rem]"
        >
          <div className="absolute flex items-center justify-center w-screen h-full">
            <div className="absolute container flex flex-col items-center justify-center z-10 gap-y-3 w-fit lg:max-w-[70rem] mx-12">
              {carousselText[index].Header && (
                <h1 className="text-5xl md:text-5xl lg:text-7xl xl:text-8xl text-center text-white font-medium tracking-wide ">
                  {carousselText[index].Header}
                </h1>
              )}
              {carousselText[index].Caption && (
                <p className="md:text-xl lg:text-2xl xl:text-3xl font-normal text-white max-w-[15.5rem] md:max-w-[45rem] text-center">
                  {carousselText[index].Caption}
                </p>
              )}
              {carousselText[index].LinkRoute && (
                <Link href={carousselText[index].LinkRoute} passHref>
                  <a className="hover:text-primary-blue btn btn-green mt-5 hover:bg-green text-green hover:border-green border-green md:text-xl lg:text-2xl xl:text-3xl mx-auto px-10 h-full">
                    {carousselText[index].LinkText
                      ?? carousselText[index].LinkRoute}
                  </a>
                </Link>
              )}
            </div>
            <div className="absolute bg-primary-blue opacity-60 h-full w-full" />
            <AdvancedImage
              className="object-cover object-center h-full w-full"
              cldImg={cld.image(
                image.attributes.formats.large.provider_metadata.public_id,
              )}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
