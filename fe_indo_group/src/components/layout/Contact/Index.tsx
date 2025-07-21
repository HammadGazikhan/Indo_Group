/** @format */

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React from "react";

import { theme } from "../../../constants/theme";
import SecondaryButton from "../../inputs/secondaryButton/Index";
import { Link } from "react-router-dom";

type ImageProps = {
  src: string;
  alt?: string;
};

type LinkProps = {
  label: string;
  url: string;
};

type Map = {
  url: string;
  image: ImageProps;
};

type Contact = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: LinkProps;
  button?: ButtonProps;
};

type Props = {
  tagline: string;
  heading: string;
  colorHeading: string;
  description: string;
  bg: boolean;
  contacts: Contact[];
  map: Map;
};

export type Contact14Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Contact = (props: Contact14Props) => {
  const { tagline, heading, colorHeading, description, contacts, map, bg } = {
    ...props,
  } as Props;

  const getDirecttion =
    "https://www.google.com/maps/@18.4950148,73.8536679,13z?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D";
  return (
    <section
      id='relume'
      style={{ background: bg ? theme.colors.background : "" }}
      className='px-[5%] py-16 md:py-24 lg:py-28'
    >
      <div className='container'>
        <div className='mx-auto mb-12 w-full max-w-xl text-center md:mb-18 md:w-auto lg:mb-20'>
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
            className='mb-5 text-[2.2rem] md:text-[2.7rem] leading-8 md:mb-6  lg:text-[3.2rem]'
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
        <div className='grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-20 md:gap-y-16'>
          <div className='grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10'>
            {contacts.map((contact, index) => (
              <div key={index}>
                <div className='mb-3 md:mb-4'>{contact.icon}</div>
                <h3
                  style={{
                    fontWeight: theme.typography.fontWeight.bold,
                    fontFamily: theme.typography.fontFamily,
                    color: theme.colors.dark,
                  }}
                  className='mb-2 text-md font-bold leading-[1.4] md:text-2xl'
                >
                  {contact.title}
                </h3>
                <p
                  style={{
                    fontWeight: theme.typography.fontWeight.regular,
                    fontFamily: theme.typography.fontFamily,
                    color: theme.colors.textSecondary,
                  }}
                  className='mb-2 text-[1rem] md:text-[1.125rem]'
                >
                  {contact?.description}
                </p>
                {contact.title === "Office" && contact.button ? (
                  <div className='mt-5 md:mt-6'>
                    <a href={getDirecttion} target='_blank'>
                      <SecondaryButton
                        style={{
                          paddingLeft: 0,
                          background: theme.colors.gradient,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontWeight: theme.typography.fontWeight.medium,
                          fontFamily: theme.typography.fontFamily,
                        }}
                      >
                        {contact.button.title} {contact.button.iconRight}
                      </SecondaryButton>
                    </a>
                  </div>
                ) : (
                  contact.link && (
                    <p
                      style={{
                        fontWeight: theme.typography.fontWeight.regular,
                        fontFamily: theme.typography.fontFamily,
                        color: theme.colors.textSecondary,
                      }}
                      className=' text-[1rem] md:text-[1.125rem]'
                    >
                      {contact.link.label}
                    </p>
                  )
                )}
              </div>
            ))}
          </div>
          <iframe
            src={map.url}
            title={map.image.alt}
            className='justify-self-end w-full h-[400px] md:h-[516px]'
            frameBorder='0'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
