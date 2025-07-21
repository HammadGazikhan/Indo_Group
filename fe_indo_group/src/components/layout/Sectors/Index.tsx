/** @format */

import React, { useEffect, useState } from "react";
import { theme } from "../../../constants/theme";
import { useMediaQuery } from "@relume_io/relume-ui";
import clsx from "clsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import type { CarouselApi } from "@relume_io/relume-ui";
import PrimaryButton from "../../inputs/primaryButton/Index";
import { Link } from "react-router-dom";

type ImageProps = {
  src: string;
  alt?: string;
};

interface ExpertiseItem {
  id: number;
  title: string;
  description: string;
  buttonLabel: string;
  buttonRoute: string;
  icon: string;
  image: string;
  images?: ImageProps[];
}

interface ExpertiseSectionProps {
  data: ExpertiseItem[];
}

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ data }) => {
  const md = useMediaQuery("(max-width:900px)");
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Automatically scroll carousel every 3 seconds
  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      const nextIndex = (current % (data[0]?.images?.length || 1)) + 1;
      api.scrollTo(nextIndex - 1);
      setCurrent(nextIndex);
    }, 3000); // 3 seconds interval

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [api, current, data]);

  return (
    <section
      style={{ background: theme.colors.background }}
      className='py-[100px] md:py-[150px]'
    >
      <div className='container max-w-[1280px] px-[5%] mx-auto'>
        {/* Header Section */}
        <div className='mx-auto w-full max-w-2xl space-y-4 text-center'>
          <p
            className='uppercase text-sm md:text-md md:mt-0'
            style={{
              fontFamily: theme.typography.fontFamily,
              fontWeight: theme.typography.fontWeight.regular,
              background: theme.colors.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Sectors
          </p>
          <h1
            style={{
              color: theme.colors.dark,
              fontFamily: theme.typography.fontFamilyHeading,
            }}
            className='text-[2.2rem] md:text-[2.8rem] leading-9 md:leading-[42px] font-bold md:text-9xl lg:text-[3.2rem]'
          >
            Our Expertise Across
            <span
              style={{
                background: theme.colors.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}
              Multiple Sectors
            </span>
          </h1>
          <p
            className='text-[1rem] md:text-[1.125rem]'
            style={{
              fontFamily: theme.typography.fontFamily,
              fontWeight: theme.typography.fontWeight.regular,
              color: theme.colors.primary,
            }}
          >
            Comprehensive Solutions Tailored to Your Needs & Requirements
          </p>
        </div>

        {/* Expertise Cards */}
        <div className='space-y-[100px] mt-[60px]'>
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`flex lg:h-[640px] flex-col ${
                index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center bg-white shadow-md rounded-lg overflow-hidden`}
            >
              {/* Carousel/Image Section */}
              <div className='w-full lg:w-1/2'>
                {item.images ? (
                  <Carousel
                    setApi={setApi}
                    opts={{
                      loop: true,
                      align: "start",
                    }}
                    className='overflow-hidden'
                  >
                    <CarouselContent>
                      {item.images.map((img, idx) => (
                        <CarouselItem
                          key={idx}
                          className='relative h-[350px] lg:h-dvh pl-0'
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className='absolute inset-0 size-full object-cover'
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className='hidden border-none lg:flex bg-[#FFFFFFE5] ml-4' />
                    <CarouselNext className='hidden border-none lg:flex bg-[#FFFFFFE5] mr-4' />
                    <div className='absolute z-20 bottom-8 left-1/2 -translate-x-1/2 transform'>
                      {item.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => api?.scrollTo(index)}
                          style={{
                            background:
                              current === index + 1
                                ? theme.colors.border
                                : theme.colors.primaryLight,
                          }}
                          className={clsx(
                            "relative mx-[3px] z-30 inline-block size-2 rounded-full"
                          )}
                        />
                      ))}
                    </div>
                  </Carousel>
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-full object-cover'
                  />
                )}
              </div>

              {/* Text Section */}
              <div
                style={{ background: theme.colors.gradient }}
                className='relative size-full flex flex-col justify-center items-center lg:w-1/2 p-12 gap-3 text-center '
              >
                <div
                  className='absolute top-0 inset-0 pointer-events-none'
                  style={{
                    background:
                      "radial-gradient(circle at 50% -14%, rgba(231, 253, 255, 0.8), transparent 40%)", // Adjusted position to 50% 10%
                    mixBlendMode: "screen", // Use "screen" to brighten the background image
                  }}
                ></div>
                <div className='flex items-center justify-center md:justify-start'>
                  <img
                    src={item.icon}
                    alt={`${item.title} Icon`}
                    className='size-18 md:size-[100px]'
                  />
                </div>
                <h3
                  style={{
                    fontWeight: theme.typography.fontWeight.bold,
                    color: theme.colors.heading,
                    fontFamily: theme.typography.fontFamily,
                  }}
                  className='text-[1.7rem] md:text-[2.2rem] leading-7 '
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontWeight: theme.typography.fontWeight.regular,
                    color: theme.colors.secondaryHeading,
                    fontFamily: theme.typography.fontFamily,
                  }}
                  className='text-[1rem] text-center md:text-[1.125rem] mb-4'
                >
                  {item.description}
                </p>
                <Link to={item.buttonRoute}>
                  <PrimaryButton
                    sx={{
                      background: theme.colors.heading,
                      color: "#0E7490",
                      width: md ? "140px" : "164px",
                      height: md ? "45px" : "51px",
                      fontSize: md ? "18px" : "20px",
                      fontWeight: theme.typography.fontWeight.medium,
                    }}
                  >
                    {item.buttonLabel}
                  </PrimaryButton>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
