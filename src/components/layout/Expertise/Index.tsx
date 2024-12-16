/** @format */

import React from "react";
import SecondaryButton from "../../inputs/secondaryButton/Index";
import { RxChevronRight } from "react-icons/rx";
import { theme } from "../../../constants/theme";
import { Link } from "react-router-dom";

type ImageProps = {
  src: string;
  alt?: string;
};

type ButtonProps = {
  route: string;
  title: string;
  iconRight?: React.ReactNode;
};

type CardProps = {
  heading: string;
  description: string;
  image?: ImageProps;
  button?: ButtonProps[];
};

type ExpertiseProps = {
  bg: boolean;
  tagline: string;
  heading: string;
  colorHeading: string;
  description?: string;
  cards: CardProps[];
};

interface ExpertiseSectionProps {
  data: ExpertiseProps;
}

const Expertise: React.FC<ExpertiseSectionProps> = ({ data }) => {
  return (
    <div
      style={{ background: data?.bg ? theme.colors.background : "" }}
      className='w-full'
    >
      <div className='py-[80px] md:py-[150px] p-5 mx-auto max-w-[1380px] md:space-y-[100px] space-y-[40px]'>
        {/* Header Section */}
        <div className='space-y-4 text-center'>
          <p
            className='uppercase mb-2 text-sm md:text-md mt-5 md:mt-0'
            style={{
              fontFamily: theme.typography.fontFamily,
              fontWeight: theme.typography.fontWeight.regular,
              background: theme.colors.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {data.tagline}
          </p>
          <h1
            className='mb-5 text-[2.2rem] md:text-[2.7rem] leading-8 font-bold md:mb-6  lg:text-[3.2rem]'
            style={{
              color: theme.colors.dark,
              fontFamily: theme.typography.fontFamilyHeading,
            }}
          >
            {data.heading}{" "}
            <span
              style={{
                background: theme.colors.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {data.colorHeading}
            </span>
          </h1>
          {data.description && (
            <p
              className='text-[1rem] md:text-[1.125rem]'
              style={{
                fontFamily: theme.typography.fontFamily,
                fontWeight: theme.typography.fontWeight.regular,
                color: theme.colors.primary,
              }}
            >
              {data.description}
            </p>
          )}
        </div>

        {/* Cards Section */}
        <div className='flex flex-wrap justify-center gap-8 md:gap-16'>
          {data.cards.map((card, index) => (
            <div
              key={index}
              className='flex flex-col md:flex-row gap-8 max-w-[608px]'
            >
              {card.image && (
                <img
                  src={card.image.src}
                  alt={card.image.alt || "Card image"}
                  className='size-full md:w-[240px] rounded'
                />
              )}
              <div className='space-y-2 size-full'>
                <h1
                  className='text-[1.4rem] leading-[32px] md:text-[1.8rem]'
                  style={{
                    color: theme.colors.dark,
                    fontWeight: theme.typography.fontWeight.bold,
                  }}
                >
                  {card.heading}
                </h1>
                <p
                  className='text-[1rem] md:text-[1.125rem] leading-7'
                  style={{
                    fontWeight: theme.typography.fontWeight.regular,
                    color: theme.colors.primary,
                  }}
                >
                  {card.description}
                </p>
                {card.button?.map((btn, btnIndex) => (
                  <Link to={btn.route}>
                    <SecondaryButton key={btnIndex} sx={{ paddingLeft: 0 }}>
                      {btn.title} {btn.iconRight}
                    </SecondaryButton>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
