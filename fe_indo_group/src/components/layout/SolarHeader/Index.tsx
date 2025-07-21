/** @format */

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { theme } from "../../../constants/theme";
import PrimaryButton from "../../inputs/primaryButton/Index";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import image from "../../../constants/image";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  tagline: String;
  heading: string;
  colorHeading: String;
  description: string;
  buttons: ButtonProps[];
  firstImage: ImageProps;
  secondImage: ImageProps;
};

export type Header126Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const SolarHeader = (props: Header126Props) => {
  const {
    tagline,
    heading,
    colorHeading,
    description,
    buttons,
    firstImage,
    secondImage,
  } = {
    ...props,
  } as Props;
  const md = useMediaQuery("(max-width:900px)");

  return (
    <section id='relume' className='px-[5%] relative py-16 md:py-24 lg:py-28'>
      <div
        style={{
          backgroundImage: `url(${
            md ? image.BgFeaturedSmall : image.BgFeatured
          })`,
        }}
        className='absolute bg-cover  bg-center object-fill lg:w-[85%] lg:h-full lg:right-0 w-[90%] h-[100%] bottom-0 right-0 -z-10   '
      ></div>
      <div className='container'>
        <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16'>
          <div>
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
              }}
              className='mb-5 text-[2.2rem] md:text-[2.7rem] leading-9 md:leading-[42px]  font-bold md:mb-6  lg:text-[3.2rem] '
            >
              {heading}
              <span
                style={{
                  background: theme.colors.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}
                {colorHeading}
              </span>
            </h1>
            <p
              className='text-[1rem] md:text-[1.125rem]'
              style={{
                fontFamily: theme.typography.fontFamily,
                // fontSize: theme.typography.fontSize.base,
                fontWeight: theme.typography.fontWeight.regular,
                color: theme.colors.primary,
              }}
            >
              {description}
            </p>
            <div className='mt-6 flex flex-wrap gap-4 md:mt-8'>
              {buttons.map((button, index) => (
                <Link to={button.route}>
                  <PrimaryButton
                    sx={{
                      width: md ? "160px" : "193px",
                      height: md ? "45px" : "51px",
                      fontSize: md ? "16px" : "18px",
                      fontWeight: theme.typography.fontWeight.medium,
                    }}
                    key={index}
                  >
                    {button.title}
                    <FaArrowRightLong
                      style={{
                        marginLeft: "2px",
                        color: theme.colors.secondary,
                      }}
                    />
                  </PrimaryButton>
                </Link>
              ))}
            </div>
          </div>
          <div className='relative flex w-full'>
            <div className='mr-[30%]'>
              <img
                src={firstImage.src}
                className='aspect-[2/3] rounded-md size-full object-cover'
                alt={firstImage.alt}
              />
            </div>
            <div className='absolute bottom-auto left-auto right-0 top-[20%] w-1/2'>
              <img
                src={secondImage.src}
                style={{
                  border: "10px solid",
                  borderImageSource:
                    "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%)",
                  borderImageSlice: 1,
                  borderRadius: "15px", // Adjust the value to control the roundness
                }}
                className='aspect-square rounded-lg size-full object-cover'
                alt={secondImage.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
