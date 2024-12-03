/** @format */

import React, { useEffect, useState } from "react";
import { theme } from "../../../constants/theme";
import image from "../../../constants/image";
import { useMediaQuery } from "@relume_io/relume-ui";
import clsx from "clsx"; // Ensure clsx is imported
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
  icon: string; // Path to the icon image
  image: string; // Path to the card image
  images?: ImageProps[]; // Optional array for carousel images
}

interface ExpertiseSectionProps {
  data: ExpertiseItem[];
}

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ data }) => {
  const md = useMediaQuery("(max-width:900px)");
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  return (
    <section
      style={{ background: "linear-gradient(90deg, #FEF2F2 0%, #FEE2E2 100%)" }}
      className='py-[100px]  md:py-[150px] '
    >
      <div className='container max-w-[1280px] px-[5%]  mx-auto '>
        {/* Header Section */}
        <div className='mx-auto w-full max-w-2xl space-y-4 text-center'>
          <p
            className='uppercase text-xs md:text-sm md:mt-0'
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
            className='text-[2.3rem] leading-10 font-bold md:text-9xl lg:text-[3rem]'
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
            className='text-[0.85rem] md:text-[1rem]'
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
              className={`flex  lg:h-[640px]  flex-col  ${
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
                          className={clsx(
                            "relative mx-[3px] z-30 inline-block size-2 rounded-full",
                            current === index + 1 ? "bg-red-400" : "bg-white/40"
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
              <div className='size-full flex flex-col justify-center items-center lg:w-1/2 p-12 gap-3 text-center '>
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
                    color: theme.colors.dark,
                    fontFamily: theme.typography.fontFamily,
                  }}
                  className='text-[1.5rem] md:text-[2rem] leading-6 '
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontWeight: theme.typography.fontWeight.regular,
                    color: theme.colors.primaryLight,
                    fontFamily: theme.typography.fontFamily,
                  }}
                  className='text-[0.85rem] text-center md:text-[1rem] mb-4'
                >
                  {item.description}
                </p>
                <Link to={item.buttonRoute}>
                  <PrimaryButton
                    sx={{
                      width: md ? "140px" : "164px",
                      height: md ? "45px" : "51px",
                      fontSize: md ? "16px" : "18px",
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
