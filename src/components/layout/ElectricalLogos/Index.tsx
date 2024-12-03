/** @format */

import image from "../../../constants/image";
import { theme } from "../../../constants/theme";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  logos: ImageProps[];
};

export type Logo2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ElectricalLogos = (props: Logo2Props) => {
  const { heading, logos } = {
    ...Logo2Defaults,
    ...props,
  } as Props;
  return (
    <section id='relume' className='px-[5%] py-12 md:py-16 lg:py-20'>
      <div className='container grid grid-cols-1 items-start justify-start gap-x-12 gap-y-8 md:grid-cols-[max-content_1fr] md:items-center md:justify-between md:gap-y-4 lg:gap-x-16'>
        <h1
          style={{
            fontFamily: theme.typography.fontFamily,
            fontWeight: theme.typography.fontWeight.bold,
            color: theme.colors.dark,
          }}
          className=' leading-[1.2] md:max-w-[16rem] text-[1rem] md:text-md md:leading-[1.2] lg:max-w-xxs'
        >
          {heading}
        </h1>
        <div className='grid grid-cols-2 items-center justify-end gap-x-4 gap-y-4 pt-4 sm:grid-cols-3 md:gap-x-8  md:pt-0 lg:grid-cols-6'>
          {logos.map((logo, index) => (
            <div
              key={index}
              className='flex items-start justify-center justify-self-center px-4 py-3 md:p-0'
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className='max-h-12 md:max-h-14'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Logo2Defaults: Logo2Props = {
  heading:
    "Proud to collaborate with some of the most reputable names in the industry.",
  logos: [
    {
      src: image.ElLogoOne,
      alt: "Webflow logo 1",
    },
    {
      src: image.ElLogoTwo,
      alt: "Relume logo 1",
    },
    {
      src: image.ElLogoThree,
      alt: "Webflow logo 2",
    },
    {
      src: image.ElLogoFour,
      alt: "Relume logo 2",
    },
    {
      src: image.ElLogoFive,
      alt: "Webflow logo 3",
    },
    {
      src: image.ElLogoSix,
      alt: "Webflow logo 3",
    },
  ],
};
