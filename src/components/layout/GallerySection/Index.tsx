/** @format */

"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { theme } from "../../../constants/theme";
import { Grid } from "@mui/material";

type ImageProps = {
  src: string;
  alt: string;
};

type frameProps = {
  image: string;
  title: string;
};

type Props = {
  subTitle: String;
  title: string;
  colorTitle: string;
  description: string;
  buttons: ButtonProps[];
  images: ImageProps[];
  frame: frameProps[];
};

export type Header108Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

const useTransformValues = (
  scrollYProgress: MotionValue<number>,
  mobileValues: string[],
  desktopValues: string[],
  isMobile: boolean
) => {
  return useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? mobileValues : desktopValues
  );
};

export const Gallery = (props: Header108Props) => {
  const { subTitle, title, colorTitle, description, images, frame } = {
    ...props,
  } as Props;

  const isMobile = useMediaQuery("(max-width: 767px)");
  const { scrollYProgress } = useScroll();

  const leftImageGroup = {
    x: useTransformValues(
      scrollYProgress,
      ["0vw", "-25vw"],
      ["0vw", "-32vw"],
      isMobile
    ),
  };

  const centerImageContainer = {
    x: useTransformValues(
      scrollYProgress,
      ["0vw", "-25vw"],
      ["0vw", "-32vw"],
      isMobile
    ),
    width: useTransformValues(
      scrollYProgress,
      ["50vw", "100vw"],
      ["36vw", "100vw"],
      isMobile
    ),
    height: useTransformValues(
      scrollYProgress,
      ["60vh", "100vh"],
      ["80vh", "100vh"],
      isMobile
    ),
  };

  const rightImageGroup = {
    x: useTransformValues(
      scrollYProgress,
      ["0vw", "25vw"],
      ["0vw", "32vw"],
      isMobile
    ),
  };

  return (
    <section id='relume' className='relative h-[250vh]'>
      <div className='px-[5%] pt-16 md:pt-24 lg:pt-28'>
        <div className=' space-y-4 md:space-y-8'>
          <div className='mx-auto w-full max-w-2xl text-center'>
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
              {subTitle}
            </p>
            <h1
              style={{
                color: theme.colors.dark,
                fontFamily: theme.typography.fontFamilyHeading,
              }}
              className='mb-5 text-[2rem] md:text-[2.25rem] leading-8 lg:text-[3rem] font-bold md:mb-6   '
            >
              {title}
              <span
                style={{
                  background: theme.colors.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}
                {colorTitle}
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
            </p>{" "}
          </div>
          <Grid
            container
            spacing={2}
            justifyContent='center'
            alignItems='center'
            className='mx-auto w-full max-w-[100%]'
          >
            {frame.map((frame, index) => (
              <Grid
                key={index}
                item
                xs={12} // Full width on small screens
                sm={6}
                xl={3} // Approximately half width on medium and larger screens
                className='flex justify-center items-center gap-[11px]'
              >
                <img
                  className='w-[22px] h-[20px] md:w-[26px] md:h-[24px]'
                  src={frame.image}
                  alt=''
                />
                <p
                  style={{
                    fontFamily: theme.typography.fontFamily,
                    // fontSize: theme.typography.fontSize.base,
                    fontWeight: theme.typography.fontWeight.medium,
                    color: theme.colors.dark,
                  }}
                  className='text-[1rem] md:text-[1rem]'
                >
                  {frame.title}
                </p>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>

      <div className='sticky top-0 flex h-screen w-full items-center overflow-hidden'>
        <div className='z-10 grid h-[60vh] w-full grid-flow-col grid-cols-[25%_50%_25%] content-center items-center justify-center md:h-[70vh] md:grid-cols-[32%_36%_32%] lg:h-[80vh]'>
          <motion.div
            className='grid grid-flow-col grid-cols-1 items-center justify-items-end gap-4 justify-self-end px-4'
            style={leftImageGroup}
          >
            <div className='relative hidden md:block md:w-[25vw] lg:w-[20vw]'>
              <img
                className='aspect-[2/3] w-full object-cover'
                {...images[0]}
              />
            </div>

            <div className='relative grid w-[40vw] grid-cols-1 grid-rows-[auto_auto] gap-4 self-center md:w-[18vw]'>
              <div className='relative'>
                <img
                  className='aspect-square w-full object-cover'
                  {...images[1]}
                />
              </div>
              <div className='relative'>
                <img
                  className='aspect-[3/4] w-full object-cover'
                  {...images[2]}
                />
              </div>
            </div>
          </motion.div>

          <motion.div className='relative' style={centerImageContainer}>
            <img className='size-full object-cover' {...images[3]} />
          </motion.div>

          <motion.div
            className='grid grid-flow-col items-center justify-items-start gap-4 justify-self-start px-4'
            style={rightImageGroup}
          >
            <div className='relative grid w-[40vw] grid-cols-1 grid-rows-[auto_auto] gap-4 self-center md:w-[18vw]'>
              <div className='relative w-[40vw] sm:w-auto'>
                <img
                  className='aspect-[3/4] w-full object-cover'
                  {...images[4]}
                />
              </div>
              <div className='relative w-[40vw] sm:w-auto'>
                <img
                  className='aspect-square w-full object-cover'
                  {...images[5]}
                />
              </div>
            </div>

            <div className='relative hidden md:block md:w-[25vw] lg:w-[20vw]'>
              <img
                className='aspect-[2/3] w-full object-cover'
                {...images[6]}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className='absolute inset-0 -z-10 mt-[100vh]' />
    </section>
  );
};
