/** @format */

"use client";

import { useState } from "react";
import { useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { AnimatePresence, color, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";
import { theme } from "../../../constants/theme";
import PrimaryButton from "../../inputs/primaryButton/Index";
import { Link } from "react-router-dom";
import image from "../../../constants/image";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  buttons: ButtonProps[];
};

export type Navbar1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Navbar = (props: Navbar1Props) => {
  const { logo, navLinks, buttons } = {
    ...Navbar1Defaults,
    ...props,
  } as Props;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const currentPath = window.location.pathname;
  // Check if any submenu link is active

  return (
    <nav
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        boxShadow: "0px 7px 7px 0px #00000040",
        backdropFilter: "blur(15px)",
      }}
      className=' flex w-full max-w-[1920px] fixed top-0 z-50 font-roboto items-center   bg-background-primary lg:min-h-18 lg:px-[5%]'
    >
      <div className='size-full lg:flex lg:items-center lg:justify-between'>
        <div className='flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0'>
          <Link to={`${logo.url}`}>
            <img src={logo.src} className='w-[120px] h-[60px]' alt={logo.alt} />
          </Link>
          <button
            className='-mr-2 flex size-12 flex-col items-center justify-center lg:hidden'
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <motion.span
              className='my-[3px] h-0.5 w-6 bg-black'
              animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={topLineVariants}
            />
            <motion.span
              className='my-[3px] h-0.5 w-6 bg-black'
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={middleLineVariants}
            />
            <motion.span
              className='my-[3px] h-0.5 w-6 bg-black'
              animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={bottomLineVariants}
            />
          </button>
        </div>
        <motion.div
          variants={{
            open: {
              height: "var(--height-open, 100dvh)",
            },
            close: {
              height: "var(--height-closed, 0)",
            },
          }}
          initial='close'
          exit='close'
          animate={isMobileMenuOpen ? "open" : "close"}
          transition={{ duration: 0.4 }}
          className='overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]'
        >
          {navLinks.map((navLink, index) => (
            <div key={index} className='first:pt-4 lg:first:pt-0'>
              {navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
                <SubMenu
                  navLink={navLink}
                  isMobile={isMobile}
                  currentPath={currentPath}
                />
              ) : (
                <Link
                  style={{
                    background:
                      currentPath === navLink.url
                        ? theme.colors.gradient
                        : undefined,
                    WebkitBackgroundClip:
                      currentPath === navLink.url ? "text" : undefined,
                    WebkitTextFillColor:
                      currentPath === navLink.url ? "transparent" : undefined,
                    color:
                      currentPath === navLink.url
                        ? undefined
                        : theme.colors.primary,
                    fontWeight:
                      currentPath === navLink.url
                        ? theme.typography.fontWeight.medium
                        : theme.typography.fontWeight.regular,
                    fontSize: theme.typography.fontSize.base,
                    borderBottom:
                      currentPath === navLink.url ? "3px solid " : "",
                    borderColor:
                      currentPath === navLink.url ? theme.colors.border : "",
                  }}
                  to={navLink.url}
                  className={`block py-3  lg:px-4 lg:py-2 lg:text-base `}
                >
                  {navLink.title}
                </Link>
              )}
            </div>
          ))}
          <div className='mt-6 flex flex-col items-center gap-4 lg:ml-4 lg:mt-0 lg:flex-row'>
            {buttons.map((button, index) => (
              <Link to={button.route}>
                <PrimaryButton
                  key={index}
                  sx={{
                    background: theme.colors.gradient,
                    color: theme.colors.secondary,
                    fontWeight: theme.typography.fontWeight.bold,
                    fontSize: "16px",
                    height: "40px",
                    width: "123px",
                  }}
                >
                  {button.title}
                </PrimaryButton>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

const SubMenu = ({
  navLink,
  isMobile,
  currentPath,
}: {
  navLink: NavLink;
  isMobile: boolean;
  currentPath: string;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isSubMenuActive = navLink.subMenuLinks?.some(
    (subLink) => subLink.url === currentPath
  );
  return (
    <div
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      // onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className='flex w-full  items-center font-roboto justify-between gap-2 py-3 text-left text-md lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base'
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span
          style={{
            fontWeight: theme.typography.fontWeight.regular,
            background: isSubMenuActive ? theme.colors.gradient : undefined,
            WebkitBackgroundClip: isSubMenuActive ? "text" : undefined,
            WebkitTextFillColor: isSubMenuActive ? "transparent" : undefined,
            color: isSubMenuActive ? undefined : theme.colors.primary,
            borderBottom: isSubMenuActive ? "3px solid " : "",
            borderColor: isSubMenuActive ? theme.colors.border : "",
          }}
        >
          {navLink.title}
        </span>
        <motion.span
          variants={{
            rotated: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          animate={isDropdownOpen ? "rotated" : "initial"}
          transition={{ duration: 0.3 }}
        >
          <RxChevronDown />
        </motion.span>
      </button>
      {isDropdownOpen && (
        <AnimatePresence>
          <motion.nav
            variants={{
              open: {
                visibility: "visible",
                opacity: "var(--opacity-open, 100%)",
                y: 0,
              },
              close: {
                visibility: "hidden",
                opacity: "var(--opacity-close, 0)",
                y: "var(--y-close, 0%)",
              },
            }}
            animate={isDropdownOpen ? "open" : "close"}
            initial='close'
            exit='close'
            transition={{ duration: 0.2 }}
            className={` ${
              isMobile ? "" : "bg-background-primary"
            }  lg:mt-1 lg:absolute lg:z-50 shadow-medium border lg:rounded-lg  lg:p-2 lg:[--y-close:25%] `}
          >
            {navLink.subMenuLinks?.map((subLink, index) => (
              <a
                key={index}
                href={subLink.url}
                style={{
                  background:
                    currentPath === subLink.url
                      ? theme.colors.gradient
                      : undefined,
                  WebkitBackgroundClip:
                    currentPath === subLink.url ? "text" : undefined,
                  WebkitTextFillColor:
                    currentPath === subLink.url ? "transparent" : undefined,
                  color:
                    currentPath === subLink.url
                      ? undefined
                      : theme.colors.primary,
                  fontWeight:
                    currentPath === subLink.url
                      ? theme.typography.fontWeight.medium
                      : theme.typography.fontWeight.regular,
                  fontSize: theme.typography.fontSize.base,
                }}
                className={`block py-3 pl-[5%] font-roboto text-[1rem] lg:px-4 lg:py-2 lg:text-base `}
              >
                {subLink.title}
              </a>
            ))}
          </motion.nav>
        </AnimatePresence>
      )}
    </div>
  );
};

export const Navbar1Defaults: Navbar1Props = {
  logo: {
    url: "/",
    src: image.Logo,
    alt: "Logo image",
  },
  navLinks: [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    {
      title: "Services",
      url: "#",
      subMenuLinks: [
        {
          title: "Indo Constructions & Developers",
          url: "/services/indo-construction&Developers",
        },
        { title: "Indo Electricals", url: "/services/indo-electricals" },
        { title: "Indo Manpower", url: "/services/indo-manpower" },

        {
          title: "Indo Energy Solutions",
          url: "/services/indo-energy-solutions",
        },
      ],
    },
  ],
  buttons: [
    {
      title: "Get a quote",
      route: "/contact",
    },
  ],
};

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};
