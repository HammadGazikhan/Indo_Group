/** @format */

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
  Secondlink: LinkProps;
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
      style={{ background: theme.colors.background }}
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
                style={{ fontWeight: theme.typography.fontWeight.bold }}
                className='mb-3 text-xl  md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl'
              >
                {contact.title}
              </h3>
              <p
                style={{ color: theme.colors.primaryLight }}
                className='mb-5 md:mb-6'
              >
                {contact.description}
              </p>
              <a
                style={{
                  background: theme.colors.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className='underline'
                href={contact.link.url}
              >
                {contact.link.label}
              </a>
              <br />
              <a
                style={{
                  background: theme.colors.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className='underline'
                href={contact.link.url}
              >
                {contact.link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
