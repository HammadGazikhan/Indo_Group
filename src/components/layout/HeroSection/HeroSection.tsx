/** @format */

import type { ButtonProps } from "@relume_io/relume-ui";
import { theme } from "../../../constants/theme";
import { useMediaQuery } from "@mui/system";
import PrimaryButton from "../../inputs/primaryButton/Index";
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
  images: ImageProps[];
};

export type Header76Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header = (props: Header76Props) => {
  const md = useMediaQuery("(max-width:900px)");
  const { tagline, heading, colorHeading, description, buttons, images } = {
    ...props,
  } as Props;
  return (
    <section
      id='relume'
      style={{ background: theme.colors.background }}
      className=' grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0'
    >
      <div className='mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end'>
        <p
          className='uppercase mb-2 text-xs md:text-sm mt-5 md:mt-0'
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
          className='mb-5 text-6xl  font-bold md:mb-6 md:text-9xl lg:text-[3rem] '
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
          className='text-[1rem] md:text-[1rem]'
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
      <div className='h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0'>
        <div className='grid w-full grid-cols-2 gap-x-4'>
          <div className='-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center'>
            {images.map((image, index) => (
              <div key={index} className='grid size-full grid-cols-1 gap-4'>
                <div className='relative w-full pt-[120%]'>
                  <img
                    className='absolute  inset-0 size-full object-cover'
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className='grid size-full animate-loop-vertically grid-cols-1 gap-4'>
            {images.map((image, index) => (
              <div key={index} className='grid size-full grid-cols-1 gap-4'>
                <div className='relative w-full pt-[120%]'>
                  <img
                    className='absolute inset-0 size-full object-cover'
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
