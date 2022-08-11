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
      secure: true, // force https, set to false to force http
    },
  });
  return (
    <Carousel interval="3500" key={uuidv4()} className="relative">
      {imageData.map((image, index) => (
        <Carousel.Item
          key={uuidv4()}
          className="shadow-xl h-[600px] lg:h-[700px] xl:h-[800px]"
        >
          <div className="absolute flex items-center justify-center w-screen h-full">
            <div className="absolute container flex flex-col items-center justify-center z-10 gap-y-3 w-fit">
              {carousselText[index].Header && (
                <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-center text-white font-medium tracking-wide max-w-[250px] md:max-w-none">
                  {carousselText[index].Header}
                </h1>
              )}
              {carousselText[index].Caption && (
                <p className="md:text-xl lg:text-2xl xl:text-3xl font-light text-white max-w-[250px] md:max-w-[700px] text-center">
                  {carousselText[index].Caption}
                </p>
              )}
              {carousselText[index].LinkRoute && (
                <Link href={carousselText[index].LinkRoute} passHref>
                  <a className="hover:underline hover:text-secondary-blue text-white md:text-base lg:text-lg xl:text-xl ">
                    {carousselText[index].LinkText
                      ?? carousselText[index].LinkRoute}
                  </a>
                </Link>
              )}
            </div>
            <div className="absolute bg-primary-blue opacity-60 h-full w-full" />
            <AdvancedImage
              className="object-cover object-center h-full md:h-fit"
              cldImg={cld.image(image.attributes.provider_metadata.public_id)}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
