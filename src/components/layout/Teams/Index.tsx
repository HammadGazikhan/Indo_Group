/** @format */

import type { ButtonProps } from "@relume_io/relume-ui";

import { theme } from "../../../constants/theme";

type ImageProps = {
  src: string;
  alt?: string;
};

type SocialLink = {
  href: string;
  icon: React.ReactNode;
};

type TeamMember = {
  image: ImageProps;
  name: string;
  jobTitle: string;
  description: string;
  socialLinks: SocialLink[];
};

type Props = {
  tagline: string;
  heading: string;
  colorHeading: string;
  description: string;
  button: ButtonProps;
  teamMembers: TeamMember[];
};

export type Team20Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Team20 = (props: Team20Props) => {
  const { tagline, heading, colorHeading, description, button, teamMembers } = {
    ...props,
  } as Props;
  return (
    <section
      // style={{ background: theme.colors.background }}
      id='relume'
      className='px-[5%] py-16 md:py-24 lg:py-28'
    >
      <div className='container'>
        <div className='grid grid-cols-1 items-start md:grid-flow-row md:grid-cols-[.5fr_1fr] md:gap-x-12 lg:gap-x-20'>
          <div className='rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20'>
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
              className='md:text-[1rem] text-justify text-justify text-[1rem]'
            >
              {description}
            </p>
          </div>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 md:gap-y-16 lg:gap-x-12'>
            {teamMembers.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ member }: { member: TeamMember }) => {
  return (
    <div className='flex flex-col'>
      <div className='relative mb-5 aspect-square size-full overflow-hidden md:mb-6 md:pt-[100%]'>
        <img
          src={member.image.src}
          alt={member.image.alt}
          className='absolute inset-0 size-full object-cover'
        />
      </div>
      <div
        style={{ fontFamily: theme.typography.fontFamily }}
        className='mb-3 md:mb-4'
      >
        <h5
          style={{
            color: theme.colors.dark,
            fontWeight: theme.typography.fontWeight.bold,
          }}
          className='text-md  md:text-lg'
        >
          {member.name}
        </h5>
        <h6
          style={{
            color: theme.colors.lightRed,
            fontWeight: theme.typography.fontWeight.regular,
          }}
          className='md:text-md text-sm'
        >
          {member.jobTitle}
        </h6>
      </div>
      <p
        style={{
          color: theme.colors.primaryLight,
          fontWeight: theme.typography.fontWeight.regular,
        }}
        className='text-[1rem] text-justify md:text-[1rem]'
      >
        {member.description}
      </p>
      <div className='mt-6 grid grid-flow-col grid-cols-[max-content] gap-3 self-start'>
        {member.socialLinks.map((link, index) => (
          <a key={index} href={link.href}>
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

// const teamMembersData: TeamMember[] = [];
