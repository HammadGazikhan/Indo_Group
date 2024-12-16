/** @format */

"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "../../../constants/theme";
import SwiperComponent from "../Swiper/Index";

type ImageProps = {
  src: string;
  alt?: string;
};

type TabTrigger = {
  heading: string;
  description: string;
};

type Tab = {
  value: string;
  trigger: TabTrigger;
  content: ImageProps[];
};

type Props = {
  tagline: string;
  heading: string;
  colorHeading: string;
  description: string;
  defaultTabValue: string;
  tabs: Tab[];
};

export type Layout406Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const RecentProjectSection = (props: Layout406Props) => {
  const { tagline, heading, colorHeading, description, defaultTabValue, tabs } =
    {
      // ...Layout406Defaults,
      ...props,
    } as Props;

  const [activeTab, setActiveTab] = useState(defaultTabValue);
  const MotionTabsContent = motion.create(TabsContent);

  return (
    <section
      id='relume'
      style={{ background: theme.colors.background }}
      className='px-[5%] py-16 md:py-24 lg:py-28 mt-12 md:mt-20'
    >
      <div className='container'>
        <div className='mx-auto mb-12 w-full max-w-xl text-center md:mb-18 lg:mb-20'>
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
              fontWeight: theme.typography.fontWeight.ExtraBold,
            }}
            className='mb-5 text-[2.2rem] md:text-[2.7rem] leading-8 md:leading-[42px] font-bold md:mb-6  lg:text-[3.2rem]'
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
            className='md:text-[1.125rem] text-[1rem]'
          >
            {description}
          </p>
        </div>
        <Tabs defaultValue={defaultTabValue}>
          <TabsList className='mb-4 flex-col md:mb-4 lg:flex-row'>
            {tabs.map((tab, index) => (
              <TabsTrigger
                key={index}
                value={tab.value}
                style={{
                  // fontSize: theme.typography.fontSize.small,
                  fontWeight:
                    tab.value === activeTab
                      ? theme.typography.fontWeight.medium
                      : theme.typography.fontWeight.regular,

                  fontFamily: theme.typography.fontFamily,
                  color:
                    tab.value === activeTab
                      ? theme.colors.secondary
                      : theme.colors.dark,
                  background:
                    tab.value === activeTab
                      ? theme.colors.gradient
                      : "transparent",
                }}
                onClick={() => setActiveTab(tab.value)}
                className={`flex w-full flex-col gap-1 ease-in-out rounded-lg lg:rounded-full whitespace-normal border-0  px-6 py-4 text-center duration-300  data-[state=active]:bg-transparent `}
              >
                <h3 className='text-[1rem] md:text-[1.4rem] text-nowrap   leading-[1.4] '>
                  {tab.trigger.heading}
                </h3>
                {/* <p>{tab.trigger.description}</p> */}
              </TabsTrigger>
            ))}
          </TabsList>
          <AnimatePresence initial={false}>
            {tabs.map(
              (tab, index) =>
                tab.value === activeTab && (
                  <MotionTabsContent
                    key={index}
                    value={tab.value}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {/* {tab.content.map((feature, featureIndex) => (
                      <div
                        className='size-full object-cover'
                        key={featureIndex}
                      >
                        <img
                          src={feature.src}
                          className='size-full object-cover'
                          alt={feature.alt}
                        />
                      </div>
                    ))} */}
                    <SwiperComponent images={tab.content as any} />
                  </MotionTabsContent>
                )
            )}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
};
