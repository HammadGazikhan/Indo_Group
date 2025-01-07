/** @format */

import { useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { theme } from "../../../constants/theme";
import { FaArrowRightLong } from "react-icons/fa6";
import PrimaryButton from "../../inputs/primaryButton/Index";
import { Link } from "react-router-dom";
import image from "../../../constants/image";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeaturesProps = {
  icon: ImageProps;
  boldParagraph: string;
  paragraph: string;
};

type Props = {
  bg: boolean;
  width: boolean;
  tagline: string;
  heading: string;
  colorHeading: string;
  description: string;
  features: FeaturesProps[];
  buttons: ButtonProps[];
};

export type Layout65Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const CommunityImpact = (props: Layout65Props) => {
  const md = useMediaQuery("(max-width:900px)");

  // Destructure the props to use them in the component
  const {
    bg,
    width,
    heading,
    colorHeading,
    description,
    features,
    buttons,
    tagline,
  } = {
    ...props,
  } as Props;
  return (
    <section
      style={{
        // background: theme.colors.secondaryBackground,
        backgroundImage: bg ? "" : `url(${image.BackgroundImage})`,
      }}
      id='relume'
      className='px-[5%] bg-cover  bg-center object-fill py-16 md:py-24 lg:py-28 relative'
    >
      <div className='mx-auto max-w-[1380px]'>
        <div className='flex flex-col  items-start gap-5 lg:flex-row md:gap-x-12 lg:gap-x-20'>
          <div className={`w-full ${width ? " lg:w-[30%]" : " lg:w-[35%]"}`}>
            <p
              className='uppercase mb-2 text-sm md:text-md mt-5 md:mt-0'
              style={{
                fontFamily: theme.typography.fontFamily,
                fontWeight: theme.typography.fontWeight.regular,
                background: bg ? theme.colors.gradient : theme.colors.heading,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {tagline}
            </p>
            <h1
              style={{
                color: bg ? theme.colors.dark : theme.colors.secondaryHeading,
                fontFamily: theme.typography.fontFamilyHeading,
                fontWeight: theme.typography.fontWeight.ExtraBold,
              }}
              className='mb-10 text-[2.2rem] md:text-[2.7rem] leading-10 lg:leading-[59px] font-bold md:mb-6  lg:text-[3.2rem]'
            >
              {heading}
              <span
                style={{
                  background: bg ? theme.colors.gradient : theme.colors.heading,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}
                {colorHeading}
              </span>
            </h1>

            {buttons.map((button, index) => (
              <Link to={button.route}>
                <PrimaryButton
                  sx={{
                    width: md ? "160px" : "193px",
                    height: md ? "45px" : "51px",
                    fontSize: md ? "18px" : "20px",
                    fontWeight: theme.typography.fontWeight.medium,
                    color: bg ? theme.colors.secondaryHeading : "#0E7490",

                    background: bg
                      ? theme.colors.gradient
                      : theme.colors.heading,
                  }}
                  key={index}
                >
                  {button.title}
                  <FaArrowRightLong
                    style={{
                      marginLeft: "2px",
                      color: bg ? theme.colors.secondaryHeading : "#0E7490",
                    }}
                  />
                </PrimaryButton>
              </Link>
            ))}
          </div>
          <div className={`w-full ${width ? " lg:w-[70%]" : " lg:w-[65%]"}`}>
            <p
              style={{
                fontWeight: theme.typography.fontWeight.regular,
                fontFamily: theme.typography.fontFamily,
                color: bg
                  ? theme.colors.textSecondary
                  : theme.colors.secondaryHeading,
              }}
              className='md:text-[1.125rem] text-justify text-[1rem]'
            >
              {description}
            </p>
            <ul className='grid grid-cols-1 gap-4 py-3'>
              {features.map((feature, index) => (
                <li
                  key={index}
                  className='flex self-start flex-col sm:flex-row gap-2'
                >
                  <div className='mr-2 hidden md:block flex-none self-start'>
                    <img
                      src={feature.icon.src}
                      alt={feature.icon.alt}
                      className='size-6'
                    />
                  </div>
                  <div className='flex '>
                    <div className='mr-2 md:hidden'>
                      <img
                        src={feature.icon.src}
                        alt={feature.icon.alt}
                        className='size-6'
                      />
                    </div>
                    <span
                      className='text-nowrap text-[1rem] md:text-[1.125rem] '
                      style={{
                        fontWeight: theme.typography.fontWeight.bold,
                        fontFamily: theme.typography.fontFamily,
                        background: bg
                          ? theme.colors.dark
                          : theme.colors.heading,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {feature.boldParagraph}
                    </span>
                  </div>

                  <p
                    className='text-[1rem] md:text-[1.125rem] w-full sm:w-auto '
                    style={{
                      fontWeight: theme.typography.fontWeight.regular,
                      fontFamily: theme.typography.fontFamily,
                      color: bg
                        ? theme.colors.textSecondary
                        : theme.colors.secondaryHeading,
                    }}
                  >
                    {feature.paragraph}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
