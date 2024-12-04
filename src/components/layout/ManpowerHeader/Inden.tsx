/** @format */

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useCallback } from "react";
import type { ButtonProps } from "@relume_io/relume-ui";
import { useMediaQuery } from "@relume_io/relume-ui";
import { FaArrowRightLong } from "react-icons/fa6";
import PrimaryButton from "../../inputs/primaryButton/Index";
import { theme } from "../../../constants/theme";
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
  group1Images: ImageProps[];
  group2Images: ImageProps[];
};

export type Header142Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

const imagePositions = {
  group1: [
    "bottom-[5%] left-[-8%] z-10 max-w-[18%] sm:bottom-[10%] lg:bottom-auto",
    "left-[30%] top-[8%] z-10 max-w-[18%] sm:top-[10%] sm:max-w-[12%] lg:left-[40%] lg:top-[5%]",
    "bottom-[-5%] right-[-5%] z-10 max-w-[25%] lg:max-w-[18%]",
    "bottom-[-2%] left-[20%] z-10 max-w-[18%] sm:bottom-[-5%] sm:max-w-[16%] lg:bottom-[-10%]",
  ],
  group2: [
    "left-[2%] top-[-5%] max-w-[30%] sm:left-[5%] sm:max-w-[18%] lg:left-[10%] lg:top-[-10%]",
    "right-[20%] top-[-2%] max-w-[25%] sm:top-[5%] sm:max-w-[16%] lg:right-[20%] lg:top-[-10%]",
    "right-[-5%] top-[10%] max-w-[20%] sm:max-w-[15%] lg:top-[25%]",
    "bottom-[5%] right-[32%] max-w-[18%] sm:right-[30%] sm:max-w-[15%] lg:bottom-[5%] lg:max-w-[12%]",
  ],
};

// Custom hook to calculate transform styles
const useTransformStyles = (
  smoothMouseX: any,
  smoothMouseY: any,
  xRange: string[],
  yRange: string[]
) => {
  const x = useTransform(smoothMouseX, [0, 1], xRange);
  const y = useTransform(smoothMouseY, [0, 1], yRange);
  return { x, y };
};

const useMouseMove = () => {
  const mouseX = useMotionValue(0.55);
  const mouseY = useMotionValue(0.55);

  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 500 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 500 });

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } =
        event.currentTarget.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
  );

  return { smoothMouseX, smoothMouseY, handleMouseMove };
};

export const ManpowerHeader = (props: Header142Props) => {
  const md = useMediaQuery("(max-width:900px)");

  const {
    tagline,
    heading,
    colorHeading,
    description,
    buttons,
    group1Images,
    group2Images,
  } = props as Props;

  const { smoothMouseX, smoothMouseY, handleMouseMove } = useMouseMove();
  const isMobile = useMediaQuery("(max-width: 991px)");
  const Animate = isMobile ? "div" : motion.div;

  const canvasTransform = useTransformStyles(
    smoothMouseX,
    smoothMouseY,
    ["10vw", "-5vw"],
    ["10vh", "-5vh"]
  );
  const group1Transform = useTransformStyles(
    smoothMouseX,
    smoothMouseY,
    ["8%", "-8%"],
    ["8%", "-8%"]
  );
  const group2Transform = useTransformStyles(
    smoothMouseX,
    smoothMouseY,
    ["2%", "-2%"],
    ["2%", "-2%"]
  );

  const renderImages = (
    images: ImageProps[],
    positions: string[],
    transformStyles: any
  ) => (
    <Animate
      className='absolute inset-0 flex origin-bottom items-center justify-center'
      style={transformStyles}
    >
      {images.map((image, index) => (
        <div key={index} className={`absolute w-full ${positions[index]}`}>
          <img src={image.src} alt={image.alt} className='size-full' />
        </div>
      ))}
    </Animate>
  );

  return (
    <section
      id='relume'
      className='relative flex h-svh items-center justify-center overflow-hidden lg:h-screen'
      onMouseMove={handleMouseMove}
    >
      <div className='px-[5%] py-16 md:py-24 lg:py-28'>
        <div className='container max-w-lg'>
          <div className='relative z-10 text-center'>
            <p
              className='uppercase mb-2 text-xs md:text-sm mt-5 md:mt-0'
              style={{
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
                color: theme.colors.dark,
                fontFamily: theme.typography.fontFamilyHeading,
              }}
              className='mb-5 text-[2rem] md:text-[2.25rem] leading-8 font-bold md:mb-6  lg:text-[3rem]'
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
                fontWeight: theme.typography.fontWeight.regular,
                color: theme.colors.primary,
              }}
            >
              {description}
            </p>
            <div className='mt-6 w-full flex flex-wrap justify-center gap-4 md:mt-8'>
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
        </div>
      </div>
      <Animate className='absolute size-full' style={canvasTransform}>
        {renderImages(group1Images, imagePositions.group1, group1Transform)}
        {renderImages(group2Images, imagePositions.group2, group2Transform)}
      </Animate>
    </section>
  );
};
