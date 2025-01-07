/** @format */

import { FaXTwitter } from "react-icons/fa6";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { theme } from "../../../constants/theme";
import image from "../../../constants/image";
import { Link } from "react-router-dom";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
};

type SocialMediaLinks = {
  url: string;
  icon: React.ReactNode;
};

type ColumnLinks = {
  links: Links[];
};

type Address = {
  label: string;
  value: string;
};

type Contact = {
  label: string;
  phone: string;
  email: string;
};

type Props = {
  logo: ImageProps;
  address: Address;
  contact: Contact;
  columnLinks: ColumnLinks[];
  socialMediaLinks: SocialMediaLinks[];
  footerText?: string;
  footerLinks: Links[];
};

export type Footer3Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Footer = (props: Footer3Props) => {
  const {
    logo,
    address,
    contact,
    columnLinks,
    socialMediaLinks,
    footerText,
    footerLinks,
  } = {
    ...Footer3Defaults,
    ...props,
  } as Props;
  return (
    <footer
      style={{
        background: theme.colors.backgroundFooter,
        color: theme.colors.secondaryLigth,
      }}
      className='px-[3%] text-white py-12 md:py-18 lg:py-20 '
    >
      <div className=''>
        <div className='grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-8 md:gap-y-16 md:pb-8 lg:grid-cols-[1fr_0.6fr] lg:gap-y-4 lg:pb-4'>
          <div>
            <div className='rb-6 mb-6 md:mb-8'>
              <Link to={`${logo.url}`}>
                <img src={logo.src} alt={logo.alt} className='inline-block' />
              </Link>
            </div>
            <div className='rb-6 mb-6 md:mb-8'>
              <div>
                <p className='mb-1 text-sm md:text-md font-semibold'>
                  {address.label}
                </p>
                <p className='mb-5 text-sm md:text-md md:mb-6'>
                  {address.value}
                </p>
              </div>
              <div>
                <p className='mb-1 text-sm md:text-md font-semibold'>
                  {contact.label}
                </p>
                <p className='flex flex-col text-sm md:text-md underline decoration-black underline-offset-1 md:mb-6'>
                  <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </p>
              </div>
            </div>
            <div className='grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3'>
              {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.url}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className='grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4'>
            {columnLinks.map((column, index) => (
              <ul key={index}>
                {column.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    style={{
                      fontSize: theme.typography.fontSize.small,
                      fontWeight: theme.typography.fontWeight.regular,
                    }}
                    className='py-2  font-semibold'
                  >
                    <a className='text-sm md:text-md' href={link.url}>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div
          className='h-px w-full '
          style={{ background: theme.colors.secondaryLigth }}
        />
        <div className='flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:text-md md:flex-row md:items-center md:pb-0 md:pt-8'>
          <p className='mt-0 md:mt-0'>{footerText}</p>
          {/* <ul className='grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:text-md md:grid-flow-col md:gap-x-6 md:gap-y-0'>
            {footerLinks.map((link, index) => (
              <li key={index} className='underline text-nowrap'>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </footer>
  );
};

export const Footer3Defaults: Footer3Props = {
  logo: {
    url: "/",
    src: image.FooterLogo,
    alt: "Logo image",
  },
  address: {
    label: "Address:",
    value:
      "Office No. 103+104, Landmark Building, 490/491 Nana Peth, Pune, Maharashtra - 411002",
  },
  contact: {
    label: "Contact:",
    phone: "7378666783 , 9822054197 , 9970392823 , 8668700280",
    email: "indocnd@gmail.com",
  },
  columnLinks: [
    {
      links: [
        { title: "Home", url: "/" },
        { title: "About", url: "/about" },
        { title: "Contact", url: "/contact" },
        { title: "Back To Top ↑", url: "#" },
      ],
    },
    {
      links: [
        { title: "Indo Electricals", url: "/services/indo-electricals" },
        {
          title: "Indo Energy Solutions",
          url: "/services/indo-energy-solutions",
        },
        { title: "Indo Manpower", url: "/services/indo-Manpower" },
        {
          title: "Indo Constructions & Developers",
          url: "/services/indo-construction&Developers",
        },
      ],
    },
  ],
  socialMediaLinks: [
    { url: "#", icon: <BiLogoFacebookCircle className='size-6 md:size-8' /> },
    { url: "#", icon: <BiLogoInstagram className='size-6 md:size-8' /> },
    { url: "#", icon: <FaXTwitter className='size-6 md:size-8 p-0.5' /> },
    { url: "#", icon: <BiLogoLinkedinSquare className='size-6 md:size-8' /> },
    { url: "#", icon: <BiLogoYoutube className='size-6 md:size-8' /> },
  ],
  footerText: "© FireFox Digital marketing. All rights reserved.",
  footerLinks: [
    { title: "", url: "" },
    { title: "", url: "" },
    { title: "", url: "" },
  ],
};
