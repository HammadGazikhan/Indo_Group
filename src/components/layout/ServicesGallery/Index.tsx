/** @format */

"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import type { CarouselApi } from "@relume_io/relume-ui";
import clsx from "clsx";
import { theme } from "../../../constants/theme";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  tagline: string;
  heading: string;
  colorHeading: string;
  description: string;
  images: ImageProps[];
  subTitle: string;
  subDescription: string;
};

export type Gallery13Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ServicesGallery = (props: Gallery13Props) => {
  const {
    tagline,
    heading,
    colorHeading,
    description,
    images,
    subTitle,
    subDescription,
  } = {
    ...props,
  } as Props;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className=' py-16 md:py-24 lg:py-28'>
      <div className='px-[5%] '>
        <div className='container text-center pb-16 md:pb-24 lg:pb-28'>
          <p
            className='uppercase mb-2 text-sm md:text-md mt-5 md:mt-0'
            style={{
              // fontSize: theme.typography.fontSize.small,
              fontFamily: theme.typography.fontFamily,
              fontWeight: theme.typography.fontWeight.regular,
              background: theme.colors.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {tagline}
          </p>
          <h1
            style={{
              // fontSize: theme.typography.fontSize.xxLarge,
              color: theme.colors.dark,
              fontFamily: theme.typography.fontFamilyHeading,
              fontWeight: theme.typography.fontWeight.ExtraBold,
            }}
            className='mb-5 text-[2.2rem] md:text-[2.7rem] leading-9 md:leading-[42px]  md:mb-6  lg:text-[3.2rem]'
          >
            {heading}{" "}
            <span
              style={{
                background: theme.colors.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {colorHeading}
            </span>
          </h1>
          <p
            style={{
              fontWeight: theme.typography.fontWeight.regular,
              fontFamily: theme.typography.fontFamily,
              color: theme.colors.primaryLight,
            }}
            className='md:text-[1.125rem] text-[1rem]'
          >
            {description}{" "}
          </p>
        </div>
      </div>
      {/* for all available options: https://www.embla-carousel.com/api/options/ */}
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
        className='overflow-hidden container'
      >
        <CarouselContent className='ml-0'>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className='relative rounded-md h-dvh pl-0'
            >
              <img
                src={image.src}
                alt={image.alt}
                className='absolute inset-0 rounded-md size-full object-cover'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='-mt-8 ml-8 hidden lg:flex' />
        <CarouselNext className='-mt-8 mr-8 hidden lg:flex' />
        <div className='absolute bottom-8 left-1/2 bg-[#FFFFFFE5] px-2 h-4 flex items-center  rounded-full -translate-x-1/2 transform'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={clsx(
                "relative mx-[3px] inline-block size-2 rounded-full",
                current === index + 1 ? "bg-[#0E7490]" : "bg-[#85beb2]"
              )}
            />
          ))}
        </div>
      </Carousel>
      <div className='container px-[1%] mx-auto mt-6'>
        <h3
          style={{
            fontFamily: theme.typography.fontFamily,
            fontWeight: theme.typography.fontWeight.medium,
            color: theme.colors.dark,
          }}
          className='mb-3 text-xl leading-[20px]  md:mb-4 lg:text-2xl'
        >
          {subTitle}{" "}
        </h3>
        <p
          className='text-[1rem] lg:text-[1.125rem]'
          style={{
            fontFamily: theme.typography.fontFamily,
            fontWeight: theme.typography.fontWeight.regular,
            color: theme.colors.primaryLight,
          }}
        >
          {subDescription}{" "}
        </p>
      </div>
    </section>
  );
};
