/** @format */

import React from "react";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { useRef } from "react";
import { motion, MotionStyle, useScroll, useTransform } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";
import clsx from "clsx";
import { theme } from "../../../constants/theme";

type TimelineCircleProps = {
  backgroundColor: MotionStyle;
  className?: string;
};

type TimelineItem = {
  heading: string;
  title: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  colorHeading: string;
  description: string;
  timelineItems: TimelineItem[];
};

export type Timeline9Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ServicesTimeline = (props: Timeline9Props) => {
  const { tagline, heading, colorHeading, description, timelineItems } = {
    ...props,
  } as Props;

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id='relume'
      style={{ background: theme.colors.background }}
      className='px-[5%] py-16 md:py-24 lg:py-28'
    >
      <div className='container'>
        <div className='flex flex-col items-center'>
          <div className='mb-12 text-center md:mb-18 lg:mb-20'>
            <div className='relative z-10 w-full max-w-xxl'>
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
                className='mb-10 text-5xl font-bold md:mb-6 md:text-[2.7rem] lg:text-[3rem]'
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
                className='md:text-[1rem] text-center text-[0.85rem]'
              >
                {description}
              </p>
            </div>
          </div>
          <div
            ref={containerRef}
            className='relative grid grid-cols-1 justify-items-center gap-12 md:gap-20'
          >
            <div className='absolute flex h-full w-8 flex-col items-center justify-self-start md:justify-self-auto'>
              <div className='absolute z-10 h-16 w-1 bg-gradient-to-b from-background-primary to-transparent' />
              <div className='h-full w-[3px] bg-red-600' />
              <div className='absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-background-primary' />
            </div>
            <React.Fragment>
              {timelineItems.map((item, index) => (
                <TimelineItem
                  key={index}
                  index={index}
                  containerRef={containerRef}
                  item={item}
                />
              ))}
            </React.Fragment>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({
  item,
  index,
  containerRef,
}: {
  item: TimelineItem;
  index: number;
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const isEven = index % 2 === 0;
  const circleRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: circleRef,
    container: containerRef,
    offset: ["start end", "end center"],
  });

  const backgroundColor = {
    backgroundColor: useTransform(scrollYProgress, [1, 1], ["red", "red"]),
  };

  return (
    <div className='grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12'>
      {isEven ? (
        <React.Fragment>
          <div className='hidden w-full md:block' />
          <TimelineCircle ref={circleRef} backgroundColor={backgroundColor} />
          <TimelineContent item={item} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <TimelineContent item={item} alignment='right' />
          <TimelineCircle
            ref={circleRef}
            backgroundColor={backgroundColor}
            className='order-first md:order-none'
          />
          <div className='hidden w-full md:block' />
        </React.Fragment>
      )}
    </div>
  );
};

const TimelineCircle = React.forwardRef<HTMLDivElement, TimelineCircleProps>(
  ({ backgroundColor, className }, ref) => (
    <div className={clsx("flex h-full w-8 justify-center", className)}>
      <motion.div
        ref={ref}
        style={backgroundColor}
        className='z-20 mt-7 size-[0.9375rem] rounded-full bg-red-600 md:mt-8'
      />
    </div>
  )
);

const TimelineContent = ({
  item,
  alignment = "left",
}: {
  item: TimelineItem;
  alignment?: "left" | "right";
}) => (
  <div
    className={clsx(
      "z-20 mt-6 flex w-full flex-col md:w-auto",
      alignment === "right" &&
        "items-start text-left md:items-end md:text-right"
    )}
    style={{ fontFamily: theme.typography.fontFamily }}
  >
    <h3
      style={{
        background: theme.colors.gradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      className='mb-2 text-[0.85rem] leading-[1.2]  md:text-[1rem] '
    >
      {item.heading}
    </h3>
    <h4
      style={{
        fontWeight: theme.typography.fontWeight.bold,
      }}
      className='mb-4 text-xl md:text-4xl'
    >
      {item.title}
    </h4>
    <p
      style={{
        color: theme.colors.textSecondary,
        fontWeight: theme.typography.fontWeight.regular,
      }}
    >
      {item.description}
    </p>
  </div>
);
