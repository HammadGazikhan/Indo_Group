/** @format */

import type { ButtonProps } from "@relume_io/relume-ui";
import { useEffect, useRef, useState } from "react";
import { theme } from "../../../constants/theme";

// Image Props Type
type ImageProps = {
  src: string;
  alt?: string;
};

// Social Link Type
type SocialLink = {
  href: string;
  icon: React.ReactNode;
};

// Team Member Type
type TeamMember = {
  image: ImageProps;
  name: string;
  jobTitle: string;
  description: string;
  socialLinks: SocialLink[];
};

// Component Props
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
      style={{ background: theme.colors.background }}
      id='relume'
      className='px-[5%] py-16 md:py-24 lg:py-28'
    >
      <div className='container'>
        <div className='grid grid-cols-1 items-start md:grid-flow-row md:grid-cols-[.5fr_1fr] md:gap-x-12 lg:gap-x-20'>
          <div className='rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20'>
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
              {tagline}
            </p>
            <h1
              style={{
                color: theme.colors.dark,
                fontFamily: theme.typography.fontFamilyHeading,
                fontWeight: theme.typography.fontWeight.ExtraBold,
              }}
              className='mb-4 text-[2.2rem] md:text-[2.7rem] leading-none lg:leading-[50px] font-bold md:mb-6 lg:text-[3.2rem]'
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
              className='md:text-[1.125rem] text-pretty text-[1rem]'
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = descriptionRef.current;
    if (el) {
      setIsTruncated(el.scrollHeight > el.clientHeight);
    }
  }, [member.description]);

  return (
    <div className='flex flex-col'>
      {/* Image Section */}
      <div className='relative mb-5 aspect-square overflow-hidden md:mb-6'>
        <img
          src={member.image.src}
          alt={member.image.alt}
          className='absolute inset-0 size-full object-cover'
        />
      </div>

      {/* Name and Job Title */}
      <div
        className='mb-3 md:mb-4'
        style={{ fontFamily: theme.typography.fontFamily }}
      >
        <h5
          className='text-[1.25rem] md:text-[1.5rem]'
          style={{
            color: theme.colors.dark,
            fontWeight: theme.typography.fontWeight.bold,
          }}
        >
          {member.name}
        </h5>
        <h6
          className='md:text-[1.25rem] text-[1.125rem]'
          style={{
            color: theme.colors.lightBlue,
            fontWeight: theme.typography.fontWeight.regular,
          }}
        >
          {member.jobTitle}
        </h6>
      </div>

      {/* Description */}
      <div>
        <div
          ref={descriptionRef}
          className={`transition-all duration-300 ease-in-out overflow-hidden text-[1rem] md:text-[1.125rem] text-pretty`}
          style={{
            maxHeight: isExpanded ? "1000px" : "4.8rem", // approx 3 lines
            color: theme.colors.primaryLight,
            fontFamily: theme.typography.fontFamily,
            fontWeight: theme.typography.fontWeight.regular,
          }}
        >
          {member.description}
        </div>

        {/* Toggle Button - always visible */}
        {isTruncated && (
          <div className='mt-2'>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className='text-[1rem] md:text-[1.125rem]'
              style={{
                color: theme.colors.dark,
                fontFamily: theme.typography.fontFamily,
                fontWeight: theme.typography.fontWeight.medium,
              }}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        )}
      </div>

      {/* Social Links */}
      <div className='mt-6 grid grid-flow-col grid-cols-[max-content] gap-3 self-start'>
        {member.socialLinks.map((link: SocialLink, index: number) => (
          <a key={index} href={link.href}>
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
