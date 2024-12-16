/** @format */

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import PrimaryButton from "../../inputs/primaryButton/Index";
import { theme } from "../../../constants/theme";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  tagline: string;
  heading: string;
  colorHeading: string;
  description: string;
  buttons: ButtonProps[];
  firstImage: ImageProps;
  secondImage: ImageProps;
  thirdImage: ImageProps;
};

export type Header129Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ElectricalHeader = (props: Header129Props) => {
  const {
    tagline,
    heading,
    description,
    colorHeading,
    buttons,
    firstImage,
    secondImage,
    thirdImage,
  } = {
    // ...Header129Defaults,
    ...props,
  } as Props;
  const md = useMediaQuery("(max-width:900px)");

  return (
    <section id='relume' className='px-[5%] py-16 md:py-24 lg:py-28'>
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
            <div className='absolute bottom-[10%] left-0 w-[35%]'>
              <img
                src={firstImage.src}
                className='aspect-square size-full object-cover'
                alt={firstImage.alt}
              />
            </div>
            <div className='mx-[10%] w-full'>
              <img
                src={secondImage.src}
                className='aspect-square size-full object-cover'
                alt={secondImage.alt}
              />
            </div>
            <div className='absolute right-0 top-[10%] w-2/5'>
              <img
                src={thirdImage.src}
                className='aspect-[3/2] size-full object-cover'
                alt={thirdImage.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
