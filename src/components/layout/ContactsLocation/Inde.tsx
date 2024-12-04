/** @format */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { useMediaQuery } from "@relume_io/relume-ui";
import { theme } from "../../../constants/theme";

type TabProps = {
  heading: string;
  view: string;
  description: string;
  mapUrl: string; // Added for map URL
};

type Props = {
  tagline: string;
  heading: string;
  colorHeading: string;
  description: string;
  reverse: boolean;
  tabs: TabProps[];
};

export type Layout499Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ContactLocation = (props: Layout499Props) => {
  const { tagline, heading, colorHeading, description, tabs, reverse } = {
    ...props,
  } as Props;
  const [activeTab, setActiveTab] = useState(0);
  const md = useMediaQuery("(max-width:900px)");

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
              fontWeight: theme.typography.fontWeight.ExtraBold,
            }}
            className='mb-5 text-5xl md:mb-6 md:text-7xl lg:text-8xl'
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
          className={`grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2 md:gap-x-12 lg:gap-x-20`}
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
                <h3
                  style={{
                    fontWeight: theme.typography.fontWeight.bold,
                    fontFamily: theme.typography.fontFamily,
                    color: theme.colors.dark,
                  }}
                  className='text-[24px] flex items-center md:mb-2 md:text-[30px] md:leading-[1.3] lg:text-[32px]'
                >
                  {tab.heading}
                </h3>
                <p
                  style={{
                    fontWeight: theme.typography.fontWeight.regular,
                    fontFamily: theme.typography.fontFamily,
                    color: theme.colors.primaryLight,
                  }}
                  className='mb-2 text-[1rem] md:text-[1rem]'
                >
                  {tab.description}
                </p>
                <h3
                  style={{
                    fontWeight: theme.typography.fontWeight.bold,
                    fontFamily: theme.typography.fontFamily,
                    background: theme.colors.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className='text-[1rem] md:text-[1rem]'
                >
                  {tab.view}
                </h3>
              </div>
            ))}
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
                    className='w-full'
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0 }}
                  >
                    <iframe
                      src={tab.mapUrl}
                      width='100%'
                      height={md ? "350px" : "450px"}
                      style={{ border: 0 }}
                      allowFullScreen
                      loading='lazy'
                      title={`Map for ${tab.heading}`}
                    ></iframe>
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
