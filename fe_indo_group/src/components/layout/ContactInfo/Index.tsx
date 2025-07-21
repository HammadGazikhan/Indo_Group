/** @format */

import image from "../../../constants/image";
import { theme } from "../../../constants/theme";

type LinkProps = {
  label: string;
  url: string;
};

type ContactProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: LinkProps;
  Secondlink?: LinkProps;
};

type Props = {
  contacts: ContactProps[];
};

export type Contact24Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ContactInfo = (props: Contact24Props) => {
  const { contacts } = {
    ...props,
  } as Props;
  return (
    <section
      style={{ backgroundImage: `url(${image.BackgroundImage})` }}
      id='relume'
      className='px-[5%] py-16 md:py-24 lg:py-28'
    >
      <div className='container'>
        <div className='flex flex-wrap justify-between gap-8'>
          {contacts.map((contact, index) => (
            <div
              style={{
                color: theme.colors.dark,
                fontFamily: theme.typography.fontFamily,
              }}
              className='max-w-[394.67px]'
              key={index}
            >
              <div className='rb-5 mb-5 md:mb-6'>{contact.icon}</div>
              <h3
                style={{
                  background: theme.colors.heading,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: theme.typography.fontWeight.bold,
                }}
                className='mb-3 text-xl  md:mb-4 md:text-[1.8rem] md:leading-[1.3] lg:text-[2.2rem]'
              >
                {contact.title}
              </h3>
              <p
                style={{ color: theme.colors.secondaryHeading }}
                className='mb-5 md:mb-6 text-[1rem] md:text-[1.125rem]'
              >
                {contact.description}
              </p>
              <a
                style={{
                  background: theme.colors.heading,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className='underline text-[1rem] md:text-[1.125rem]'
                href={contact.link.url}
              >
                {contact.link.label}
              </a>
              <br />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
