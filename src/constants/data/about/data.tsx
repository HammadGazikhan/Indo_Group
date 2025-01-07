/** @format */

import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { BiLogoFacebook, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { RxChevronRight } from "react-icons/rx";
import image from "../../image";
import { theme } from "../../theme";

export const CommunityImpactData = {
  bg: true,
  heading: "Our Values  ",
  colorHeading: "That Define Us",
  description:
    "Our core values are the foundation of every decision and action we take. We prioritize integrity, transparency & the collective well-being of our clients, employees and the communities we serve.",
  buttons: [{ title: "Get in touch", route: "/contact" }],
  features: [
    {
      icon: {
        src: image.AboutIcon1,
        alt: "Relume logo 1",
      },
      boldParagraph: "Integrity: ",
      paragraph: "Committed to transparency, upholding trust at every level.",
    },
    {
      icon: {
        src: image.SolarIcon5,
        alt: "Relume logo 2",
      },
      boldParagraph: "Innovation:",
      paragraph: "Embracing new technologies to create impactful solutions.",
    },
    {
      icon: {
        src: image.AboutIcon2,
        alt: "Relume logo 3",
      },
      boldParagraph: "Sustainability:",
      paragraph: "Leading with practices that protect our environment.",
    },
    {
      icon: {
        src: image.AboutIcon3,
        alt: "Relume logo 3",
      },
      boldParagraph: "Customer-Centric Approach: ",
      paragraph:
        "We place our clients’ needs first, ensuring satisfaction at every stage. ",
    },
  ],
};
export const TimelineData = {
  tagline: "Our Journey",
  heading: "Our Journey of",
  colorHeading: "Growth & Impact",
  description:
    "From humble beginnings to industry leadership, INDO Group’s path is one of resilience and achievement. Guided by passion and driven by purpose, we continue to expand our services to create value across sectors.",
  buttons: [
    { title: "Button", variant: "secondary", route: "/contact" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  timelineItems: [
    {
      heading: "1996",
      title: "Establishment of Indo Electricals",
      description:
        "Started as a small electrical services provider, focusing on quality and customer satisfaction. Over the years, Indo Electricals expanded its offerings and developed a reputation for reliability and excellence in the electrical industry.",
      buttons: [
        { title: "Learn More", variant: "secondary" },
        {
          title: "Contact Us",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
      primaryButton: {
        title: "Learn More",
        route: "/services/indo-electricals",
      },
      secondaryButton: {
        title: "Contact Us",
        iconRight: (
          <RxChevronRight
            style={{ color: theme.colors.border }}
            className='  size-5'
          />
        ),
        route: "/contact",
      },
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 1",
      },
    },

    {
      heading: "1998",
      title: "Indo Manpower Launch",
      description:
        "Launched to address the staffing needs of the electrical sector in Maharashtra. With a commitment to providing skilled labor, Indo Manpower quickly became a trusted partner for MSEDCL and other industry players.",
      primaryButton: {
        title: "Learn More",
        route: "/services/indo-manpower",
      },
      secondaryButton: {
        title: "Contact Us",
        iconRight: (
          <RxChevronRight
            style={{ color: theme.colors.border }}
            className='  size-5'
          />
        ),
        route: "/contact",
      },
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 2",
      },
    },
    {
      heading: "2014",
      title: "Expansion into Energy Solutions",
      description:
        "Entered the renewable energy market with the launch of Indo Solar Solutions. Focused on providing sustainable solar installations, the company has contributed to reducing carbon footprints for numerous clients across sectors.",
      primaryButton: {
        title: "Learn More",
        route: "/services/indo-solar-solutions",
      },
      secondaryButton: {
        title: "Contact Us",
        iconRight: (
          <RxChevronRight
            style={{ color: theme.colors.border }}
            className='  size-5'
          />
        ),
        route: "/contact",
      },
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 3",
      },
    },
    {
      heading: "2021",
      title: "First Project Completion in Construction",
      description:
        "Marked by the successful delivery of INDO HOMES, an 8-floor mixed-use development in Pune. This project showcases our commitment to modern living and sustainable building practices, setting the standard for future developments.",
      primaryButton: {
        title: "Learn More",
        route: "/services/indo-construction&developers",
      },
      secondaryButton: {
        title: "Contact Us",
        iconRight: (
          <RxChevronRight
            style={{ color: theme.colors.border }}
            className='  size-5'
          />
        ),
        route: "/contact",
      },
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 4",
      },
    },
  ],
};
export const TeamData = {
  tagline: "Know About Us",
  heading: "Our Visionary ",
  colorHeading: "Leadership",
  description:
    "The strength of INDO Group lies in the vision and dedication of our leaders. Each one brings a wealth of experience and a commitment to driving innovation, quality, and community impact across all our sectors.",
  button: { title: "Open positions", variant: "secondary" },
  teamMembers: [
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 1",
      },
      name: "Mr. Naeem Ayaz Sundke",
      jobTitle: "Founder and Chairperson, Indo Group & Indo Electricals",
      description:
        "Naeem Sundke started his financial career at a very young age working in a shop repairing radios and TVs. Then worked as an electrical labour. After gaining experience he finally established his own electrical contracting company called Indo Electricals. As years passed by the company grew and expanded and started doing business in different sectors.",
      socialLinks: [
        { href: "#", icon: <BiLogoLinkedinSquare className='size-6' /> },
        { href: "#", icon: <FaXTwitter className='size-6 p-0.5' /> },
        { href: "#", icon: <BiLogoFacebook className='size-6' /> },
      ],
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 2",
      },
      name: "Mr. Iftekar Ayaz Sundke",
      jobTitle: "Proprietor of Indo Manpower, Partner in Indo Construction",
      description:
        "Started his career as a software engineer. Worked as a soft engineer in Saudi Arabia for 5 years while his elder brother was setting up a new business. After 5 years he returned to India to join his brother's business and took control over a newly established sector of the indo group - Indo Manpower. Under his control Indo Manpower progressed to become one of Maharashtra's leading Manpower Supplier working for MSEDCL.",
      socialLinks: [
        { href: "#", icon: <BiLogoLinkedinSquare className='size-6' /> },
        { href: "#", icon: <FaXTwitter className='size-6 p-0.5' /> },
        { href: "#", icon: <BiLogoFacebook className='size-6' /> },
      ],
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 3",
      },
      name: "Mr. Saad N. Sundke",
      jobTitle: "Partner and Manager,  Indo Construction & Developer",
      description:
        "Leading with a fresh vision, Mr. Saad drives modern projects that blend sustainability with innovation.",
      socialLinks: [
        { href: "#", icon: <BiLogoLinkedinSquare className='size-6' /> },
        { href: "#", icon: <FaXTwitter className='size-6 p-0.5' /> },
        { href: "#", icon: <BiLogoFacebook className='size-6' /> },
      ],
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 4",
      },
      name: "Miss Azra N. Sundke",
      jobTitle: "Proprietor, Indo Energy Solutions",
      description:
        "Miss Azra, a BE graduate in Electrical Engineering, is Passionate about clean energy, Miss Azra oversees solar projects, promoting green solutions for a sustainable future.",
      socialLinks: [
        { href: "#", icon: <BiLogoLinkedinSquare className='size-6' /> },
        { href: "#", icon: <FaXTwitter className='size-6 p-0.5' /> },
        { href: "#", icon: <BiLogoFacebook className='size-6' /> },
      ],
    },
  ], // Use the array with four distinct team members
};
export const expertiseData = {
  bg: false,
  tagline: "Our Industry Expertise",
  heading: "Pioneers Across",
  colorHeading: "Key Sectors",
  description:
    "With industry-specific knowledge and solutions, INDO Group serves diverse sectors, from electrical infrastructure to solar energy and construction. Our expertise ensures results that align with our clients' goals and contribute to our community’s growth.",
  cards: [
    {
      heading: "Indo Construction & Developers",
      description:
        "Transforming Pune’s Peth areas into modern living spaces with sustainable building practices.",
      image: {
        src: image.AboutSector1,
        alt: "Relume placeholder image 1",
      },
      button: [
        {
          title: "View More",
          iconRight: (
            <RxChevronRight
              style={{ color: theme.colors.border }}
              className='  size-5'
            />
          ),
          route: "/services/indo-construction&developers",
        },
      ],
    },
    {
      heading: "Indo Energy Solutions",
      description:
        "Residential and commercial solar installations promoting clean energy and reduced utility costs.",
      image: {
        src: image.AboutSector2,
        alt: "Relume placeholder image 1",
      },
      button: [
        {
          title: "View More",
          iconRight: (
            <RxChevronRight
              style={{ color: theme.colors.border }}
              className='  size-5'
            />
          ),
          route: "/services/indo-energy-solutions",
        },
      ],
    },
    {
      heading: "Indo Electricals",
      description:
        "Comprehensive electrical services, from transformers to low/high-tension installations.",
      image: {
        src: image.AboutSector3,
        alt: "Relume placeholder image 1",
      },
      button: [
        {
          title: "View More",
          iconRight: (
            <RxChevronRight
              style={{ color: theme.colors.border }}
              className='  size-5'
            />
          ),
          route: "/services/indo-electricals",
        },
      ],
    },
    {
      heading: "Indo Manpower",
      description:
        "Skilled and dedicated workforce supply for Maharashtra’s electrical sector, with a focus on MSEDCL contracts.",
      image: {
        src: image.AboutSector4,
        alt: "Relume placeholder image 1",
      },
      button: [
        {
          title: "View More",
          iconRight: (
            <RxChevronRight
              style={{ color: theme.colors.border }}
              className='  size-5'
            />
          ),
          route: "/services/indo-manpower",
        },
      ],
    },
    // Add more card objects as needed
  ],
};
export const FeatureSectionData = {
  tagline: "Social Responsibility",
  heading: "Committed to ",
  colorHeading: "Positive Impact",
  description:
    "At Indo Group, we view business as a platform for positive change. From sustainability initiatives to community support, we believe in building a future where our projects benefit all.",
  reverse: true,
  tabs: [
    {
      projects: "2,00,000 ",
      heading: "Green Energy Promotion",
      description:
        "Through Indo Solar Solutions, we help clients access subsidies and invest in renewable energy.",
      image: {
        src: image.AboutImpact1,
        alt: "Relume placeholder image 1",
      },
    },
    {
      projects: "1500",
      heading: "Community Redevelopment",
      description:
        "Focused on transforming old buildings in Pune into modern, sustainable spaces.",

      image: {
        src: image.AboutImpact2,
        alt: "Relume placeholder image 2",
      },
    },
    {
      projects: "400",
      heading: "Employee Welfare",
      description:
        "Supporting our workforce through timely pay, benefits and celebrations of significant milestones..",
      image: {
        src: image.AboutImpact3,
        alt: "Relume placeholder image 3",
      },
    },
  ],
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
};
export const Contactdata = {
  tagline: "Get in Touch",
  heading: "We’d Love to Hear",
  colorHeading: "from You",
  description:
    "Whether you have questions about our services, want to discuss a potential project or need assistance, our team at INDO Group is here to help. Reach out to us using the contact form below or find our direct contact information.",
  contacts: [
    {
      icon: (
        <BiEnvelope
          style={{ color: theme.colors.border }}
          className='size-8 '
        />
      ),
      title: "Email",
      description: "",
      link: {
        label: "hello@relume.io",
        url: "#",
      },
    },
    {
      icon: (
        <BiPhone style={{ color: theme.colors.border }} className='size-8 ' />
      ),
      title: "Phone",
      description: "",
      link: {
        label: "+91 7378-666-783  ",
        url: "#",
      },
    },
    {
      icon: (
        <BiMap style={{ color: theme.colors.border }} className='size-8 ' />
      ),
      title: "Office",
      description:
        "Shop No.2, Indo Homes, 367 B, Mahatma Phule Peth, Pune, Maharashtra - 411042",
      button: {
        title: "Get Directions",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight style={{ color: theme.colors.border }} />,
      },
    },
  ],
  map: {
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.46355128292709!2d73.87000223162953!3d18.51005692375497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c040c3803f5f%3A0xd50b1031dd2944d!2sIndo%20Homes!5e0!3m2!1sen!2sin!4v1733140749431!5m2!1sen!2sin",
    image: {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.46355128292709!2d73.87000223162953!3d18.51005692375497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c040c3803f5f%3A0xd50b1031dd2944d!2sIndo%20Homes!5e0!3m2!1sen!2sin!4v1733140749431!5m2!1sen!2sin",
      alt: "Relume placeholder map image",
    },
  },
};
