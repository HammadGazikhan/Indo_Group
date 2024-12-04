/** @format */

"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  useMediaQuery,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { FaArrowRightLong, FaCirclePlay } from "react-icons/fa6";
import { CgSpinner } from "react-icons/cg";
import { theme } from "../../../constants/theme";
import { FiPlus } from "react-icons/fi";
import PrimaryButton from "../../inputs/primaryButton/Index";
import { Link } from "react-router-dom";

type ImageProps = {
  src: string;
  alt?: string;
};

type VideoProps = {
  image: ImageProps;
  url: string;
};

type TabProps = {
  heading: string;
  projects: string;
  description: string;
  image?: ImageProps;
  video?: VideoProps;
};

type Props = {
  tagline: string;
  heading: string;
  colorHeading: string;
  description: string;
  reverse: boolean;
  tabs: TabProps[];
  buttons: ButtonProps[];
};

export type Layout499Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const FeatureSection = (props: Layout499Props) => {
  const { tagline, heading, colorHeading, description, tabs, reverse } = {
    ...props,
  } as Props;
  const [activeTab, setActiveTab] = useState(0);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const md = useMediaQuery("(max-width:900px)");
  // Automatically change tabs every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % tabs.length); // Loop back to the first tab after the last one
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [tabs.length]);
  return (
    <section
      id='relume'
      style={{ background: reverse ? theme.colors.background : "" }}
      className='px-[5%] py-16 md:py-24 lg:py-28'
    >
      <div className='container'>
        <div className='mx-auto mb-12 w-full max-w-xl text-center md:mb-18 md:w-auto lg:mb-20'>
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
              fontWeight: theme.typography.fontWeight.ExtraBold,
            }}
            className='mb-5 text-[2rem] md:text-[2.25rem] leading-8 md:mb-6  lg:text-8xl'
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
            style={{
              fontWeight: theme.typography.fontWeight.regular,
              fontFamily: theme.typography.fontFamily,
              color: theme.colors.primaryLight,
            }}
            className='md:text-[1rem] text-[1rem]'
          >
            {description}
          </p>
        </div>
        <div
          className={`grid grid-cols-1 items-center gap-y-12  lg:grid-cols-2
           md:gap-x-12 lg:gap-x-20`}
        >
          <div
            className={`grid grid-cols-1 items-center gap-x-4 ${
              reverse ? "order-2" : "order-1"
            }`}
          >
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={clsx("cursor-pointer py-4 pl-6 md:pl-8", {
                  "border-l-2 border-black": activeTab === index,
                  "border-l-2 border-transparent": activeTab !== index,
                })}
              >
                {reverse ? (
                  ""
                ) : (
                  <h3
                    style={{
                      fontWeight: theme.typography.fontWeight.bold,
                      fontFamily: theme.typography.fontFamily,
                      background: theme.colors.gradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className=' text-[32px] flex items-center md:mb-2 md:text-[48px] md:leading-[1.3] lg:text-[56px]'
                  >
                    {tab?.projects}
                    <FiPlus className='ml-1 size-5' />
                  </h3>
                )}

                <h3
                  style={{
                    fontWeight: theme.typography.fontWeight.bold,
                    fontFamily: theme.typography.fontFamily,
                    color: theme.colors.dark,
                  }}
                  className='mb-1 text-[1.1rem] font-bold md:mb-2  md:leading-[1.3] lg:text-[20px]'
                >
                  {tab.heading}
                </h3>

                <p
                  style={{
                    fontWeight: theme.typography.fontWeight.regular,
                    fontFamily: theme.typography.fontFamily,
                    color: theme.colors.primaryLight,
                  }}
                  className='text-[1rem] md:text-[1rem]'
                >
                  {tab.description}
                </p>
              </div>
            ))}
            {reverse && (
              <div className='pl-6 pt-6'>
                <Link to={"/contact"}>
                  <PrimaryButton
                    sx={{
                      width: md ? "160px" : "193px",
                      height: md ? "45px" : "51px",
                      fontSize: md ? "16px" : "18px",
                      fontWeight: theme.typography.fontWeight.medium,
                    }}
                    // key={index}
                  >
                    {/* {button.title} */}
                    Get in touch
                    <FaArrowRightLong
                      style={{
                        marginLeft: "2px",
                        color: theme.colors.secondary,
                      }}
                    />
                  </PrimaryButton>
                </Link>
              </div>
            )}
          </div>
          <div
            className={`max-size-full flex items-center justify-center overflow-hidden ${
              reverse ? "order-2 lg:order-1" : "order-1 lg:order-2"
            }`}
          >
            <AnimatePresence mode='wait' initial={false}>
              {tabs.map((tab, index) => {
                if (activeTab !== index) return null;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0 }}
                  >
                    {tab.image && (
                      <img
                        src={tab.image.src}
                        alt={tab.image.alt}
                        className={`size-full ${
                          reverse ? "" : "lg:h-[780px]"
                        }  object-cover`}
                      />
                    )}
                    {tab.video && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className='relative flex w-full items-center justify-center'>
                            <img
                              className='size-full object-cover'
                              src={tab.video.image.src}
                              alt={tab.video.image.alt}
                            />
                            <FaCirclePlay className='absolute z-20 size-16 text-white' />
                            <span className='absolute inset-0 z-10 bg-black/50' />
                          </div>
                        </DialogTrigger>
                        <DialogPortal>
                          <DialogOverlay className='bg-black/90' />
                          <DialogContent>
                            {!isIframeLoaded && (
                              <CgSpinner className='mx-auto size-16 animate-spin text-white' />
                            )}
                            <iframe
                              className={clsx(
                                "z-0 mx-auto aspect-video size-full   md:h-[738px] lg:h-[940px]",
                                {
                                  visible: isIframeLoaded,
                                  hidden: !isIframeLoaded,
                                }
                              )}
                              src={tab.video.url}
                              allow='autoplay; encrypted-media; picture-in-picture'
                              allowFullScreen
                              onLoad={() => setIsIframeLoaded(true)}
                            ></iframe>
                          </DialogContent>
                        </DialogPortal>
                      </Dialog>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
