/** @format */
import type { ButtonProps } from "@relume_io/relume-ui";
import { theme } from "../../../constants/theme";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  image: ImageProps;
  heading: string;
  description: string;
  button: ButtonProps;
};

type Props = {
  tagline: string;
  heading: string;
  colorHeading: string;
  description: string;
  sections: SectionProps[];
};

export type Layout236Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ServicesCards = (props: Layout236Props) => {
  const { sections, tagline, heading, colorHeading, description } = {
    // ...Layout236Defaults,
    ...props,
  } as Props;
  return (
    <section
      id='relume'
      style={{ background: theme.colors.background }}
      className='px-[5%] py-16 md:py-24 lg:py-28'
    >
      <div className='container'>
        <div className='mx-auto mb-12 w-full max-w-2xl text-center md:mb-18 md:w-auto lg:mb-20'>
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
            className='mb-5 text-[2.2rem] md:text-[2.7rem] leading-9 md:leading-[42px]  md:mb-6  lg:text-8xl'
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
            className='md:text-[1.125rem] text-[1rem]'
          >
            {description}{" "}
          </p>
        </div>
        <div className='grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12'>
          {sections.map((section, index) => (
            <div className='text-center' key={index}>
              <div className='rb-6 mb-6 md:mb-8'>
                <img src={section.image.src} alt={section.image.alt} />
              </div>
              <h3
                style={{
                  fontFamily: theme.typography.fontFamily,
                  fontWeight: theme.typography.fontWeight.medium,
                  color: theme.colors.dark,
                }}
                className='mb-3 text-xl leading-[20px]  md:mb-4 lg:text-2xl'
              >
                {section.heading}
              </h3>
              <p
                className='text-[1rem] lg:text-[1.125rem]'
                style={{
                  fontFamily: theme.typography.fontFamily,
                  fontWeight: theme.typography.fontWeight.regular,
                  color: theme.colors.primaryLight,
                }}
              >
                {section.description}
              </p>
              {/* <div className='mt-6 flex flex-wrap items-center gap-4 md:mt-8'>
                <Button {...section.button}>{section.button.title}</Button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
