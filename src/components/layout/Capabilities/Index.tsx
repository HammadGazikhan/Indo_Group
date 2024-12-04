/** @format */

import { theme } from "../../../constants/theme";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  icon: ImageProps;
  heading: string;
  description: string;
};

type Props = {
  bg: boolean;
  tagline: string;
  heading: string;
  colorHeading: string;
  description: string;
  sections: SectionProps[];
};

export type Layout242Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Capabilities = (props: Layout242Props) => {
  const {
    bg = true,
    tagline,
    heading,
    colorHeading,
    description,
    sections,
  } = {
    ...props,
  } as Props;
  return (
    <section
      id='relume'
      style={{ background: bg === false ? "" : theme.colors.background }}
      className='px-[5%] py-16 md:py-24 lg:py-28'
    >
      <div className='container'>
        <div className='flex flex-col items-center'>
          <div className='rb-12 mb-12 w-full max-w-xxl text-center md:mb-18 lg:mb-20'>
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
              className='mb-5 text-[2rem] md:text-[2.25rem] leading-8  md:mb-6  lg:text-8xl'
            >
              {heading}{" "}
              <span
                style={{
                  background: theme.colors.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
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
              {description}{" "}
            </p>
          </div>
          <div className='grid grid-cols-1  items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12'>
            {sections.map((section, index) => (
              <div
                key={index}
                className='flex flex-col text-center max-w-xs  md:text-start items-center md:items-start'
              >
                <div className='rb-5 mb-5 md:mb-6'>
                  <img
                    src={section.icon.src}
                    className='size-12'
                    alt={section.icon.alt}
                  />
                </div>
                <h3
                  style={{
                    fontWeight: theme.typography.fontWeight.bold,
                    fontFamily: theme.typography.fontFamily,
                    color: theme.colors.dark,
                  }}
                  className='mb-5 text-xl  md:mb-6 md:text-2xl'
                >
                  {section.heading}
                </h3>
                <p
                  style={{
                    fontWeight: theme.typography.fontWeight.regular,
                    fontFamily: theme.typography.fontFamily,
                    color: theme.colors.primaryLight,
                  }}
                  className='mb-5 text-[1rem] md:mb-6'
                >
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
