/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-bind */

import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperCore, { Keyboard, Pagination } from 'swiper';

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import BouncingArrow from '../BouncingArrow';
import FormInput from './FormInput';
import FormIntroSection from './FormIntroSection';

SwiperCore.use([Keyboard]);

export default function FormSection({ data }) {
  const swiper = useSwiper();

  const { title, introText, fields } = data;

  function changeSlide() {
    return swiper.slideNext();
  }
  console.log(fields.filter((field) => field.inputType === 'Submit'));
  return (
    <Swiper
      className="mySwiper2 swiper-v"
      direction="vertical"
      pagination={{
        clickable: true,
        renderBullet(index, className) {
          return `<span class="${className}">${index + 1}</span>`;
        },
      }}
      keyboard={{
        enabled: true,
      }}
      cssMode
      centeredSlides
      modules={[Pagination]}
    >
      <SwiperSlide>
        <FormIntroSection
          title={title}
          introText={introText}
          direction="down"
        />
      </SwiperSlide>
      {fields.map((field) => (
        <SwiperSlide key={uuidv4()}>
          <FormInput data={field} />
        </SwiperSlide>
      ))}
      {fields.filter((field) => field.inputType === 'Submit').length === 0 && (
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row lg:justify-center lg:w-full">
            <span className="text-2xl lg:text-4xl font-cursive text-green lg:mr-10 px-14 py-5 lg:px-0 lg:w-3/5">
              All done with this section! Press the right arrow key to continue!
            </span>
            <BouncingArrow direction="right" changeParentSlide={changeSlide} />
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  );
}
