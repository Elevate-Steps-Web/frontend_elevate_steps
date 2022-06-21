// import { AdvancedImage } from '@cloudinary/react';
// import Carousel from 'react-bootstrap/Carousel';
// import { Cloudinary } from '@cloudinary/url-gen';
// import React from 'react';
// import { thumbnail } from '@cloudinary/url-gen/actions/resize';
// import { v4 as uuidv4 } from 'uuid';

export default function AppCarousel() {
  // const projects = files.filter((project) => project.title === title);
  //   const files = global.attributes.landingCarousel.images;
  //   const cld = new Cloudinary({
  //     cloud: {
  //       cloudName: 'elevate-steps',
  //     },
  //     url: {
  //       secure: true, // force https, set to false to force http
  //     },
  //   });
  return (
    <h1>AppCarousel works!</h1>
    // <Carousel interval="2500" key={uuidv4()} className="relative">
    //   {files.map(
    //     (
    //       file, // rework
    //     ) => (
    //       <Carousel.Item key={uuidv4()} className="shadow-xl">
    //         <AdvancedImage
    //           className="object-cover object-center h-full"
    //           cldImg={cld
    //             .image(file.public_id)
    //             .resize(thumbnail().width(190).height(190))}
    //         />
    //       </Carousel.Item>
    //     ),
    //   )}
    // </Carousel>
  );
}
