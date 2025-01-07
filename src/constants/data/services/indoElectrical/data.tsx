/** @format */

import image from "../../../image";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import { theme } from "../../../theme";

export const ElectricalData = {
  bg: true,
  tagline: "Your Trusted Partner in Electrical Solutions",
  heading: "Indo ",
  colorHeading: "Electricals",
  description:
    "Since 1996, Indo Electricals has been dedicated to delivering quality-driven, reliable electrical services to industrial, commercial & residential clients. With over two decades of experience, we ensure efficiency, safety & customer satisfaction in every project we undertake.",
  buttons: [{ title: "Get in touch", route: "/contact" }],
  firstImage: {
    src: image.ElHeader1,
    alt: "Relume placeholder image 1",
  },
  secondImage: {
    src: image.ElHeader3,
    alt: "Relume placeholder image 2",
  },
  thirdImage: {
    src: image.ElHeader2,
    alt: "Relume placeholder image 3",
  },
};
export const servicesData = {
  tagline: " Our Services",
  heading: "Comprehensive Electrical Services",
  colorHeading: "for Your Needs",
  description:
    "Our team of skilled professionals offers a full range of electrical solutions, ensuring that each project meets the highest standards of safety, efficiency and functionality.",
  sections: [
    {
      image: {
        src: image.ElServices1,
        alt: "Relume placeholder image 1",
      },
      heading: "Transformer Installations",
      description:
        "We handle all aspects of transformer installations, from setup to maintenance, ensuring reliable power distribution for any building or industry.",
    },
    {
      image: {
        src: image.ElServices2,
        alt: "Relume placeholder image 2",
      },
      heading: "Feeder Pillar Installations",
      description:
        "We design and install feeder pillars, supporting safe and efficient electrical distribution across various infrastructures.",
    },
    {
      image: {
        src: image.ElServices3,
        alt: "Relume placeholder image 3",
      },
      heading: "Overhead & Underground Cables",
      description:
        "Experts in LT and HT cable installations, our team ensures safety and precision for both overhead and underground projects.",
    },
    {
      image: {
        src: image.ElServices4,
        alt: "Relume placeholder image 1",
      },
      heading: "Internal & External Wiring",
      description:
        "Providing customized wiring solutions for commercial and residential properties, balancing aesthetics with functionality.",
    },
    {
      image: {
        src: image.ElServices5,
        alt: "Relume placeholder image 2",
      },
      heading: "Meter Sanctioning and Installation",
      description:
        "Experienced in liaising with MSEDCL, we streamline the process of electric meter sanctioning and installation for seamless service integration.",
    },
    {
      image: {
        src: image.ElServices6,
        alt: "Relume placeholder image 3",
      },
      heading: "Street Lighting Installations",
      description:
        "Specializing in street lamp installations, we enhance visibility and safety in public spaces across urban environments.",
    },
  ],
};
export const serviceGalleryData = {
  tagline: "Project Portfolio",
  heading: "Our Work in",
  colorHeading: "Action",
  description:
    "Indo Electricals has successfully completed a variety of projects that showcase our expertise and dedication to quality. Here’s a look at some of our most impactful projects.",
  images: [
    {
      src: image.Electrical2,
      alt: "Relume placeholder image 1",
    },
    {
      src: image.Electrical3,
      alt: "Relume placeholder image 1",
    },
    {
      src: image.Electrical4,
      alt: "Relume placeholder image 1",
    },
    {
      src: image.Electrical5,
      alt: "Relume placeholer image 1",
    },
    {
      src: image.Electrical6,
      alt: "Relume placeholder image 1",
    },
    {
      src: image.Electrical7,
      alt: "Relume placeholder image 1",
    },
    {
      src: image.Electrical8,
      alt: "Relume placeholder image 1",
    },
    {
      src: image.Electrical9,
      alt: "Relume placeholder image 1",
    },
    {
      src: image.Electrical10,
      alt: "Relume placeholder image 1",
    },
    {
      src: image.Electrical11,
      alt: "Relume placeholder image 1",
    },
    {
      src: image.Electrical2,
      alt: "Relume placeholder image 1",
    },
    {
      src: image.Electrical3,
      alt: "Relume placeholder image 1",
    },
    {
      src: image.Electrical4,
      alt: "Relume placeholder image 1",
    },
    {
      src: image.Electrical5,
      alt: "Relume placeholder image 1",
    },
    {
      src: image.Electrical16,
      alt: "Relume placeholder image 1",
    },
  ],
  subTitle: "High-Tension Cable Installation for MSEDCL",
  subDescription:
    "Successfully completed HT cable installations for MSEDCL, enhancing grid reliability and power access for thousands of users.",
};
export const Contactdata = {
  tagline: "Contact Indo Electricals",
  heading: "Power Up Your",
  colorHeading: "Next Project",
  description:
    "Whether you’re looking for reliable electrical installations or consulting services, our team is here to help. Get in touch to discuss how Indo Electricals can add value to your project.",
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
      description: "+91 9822-054-197",
      link: {
        label: "Mr. Naeem A. Sundke ",
        url: "#",
      },
    },
    {
      icon: (
        <BiMap style={{ color: theme.colors.border }} className='size-8 ' />
      ),
      title: "Office",
      description:
        "Office No. 103+104, Landmark Building, 490/491 Nana Peth, Pune, Maharashtra - 411002.",
      button: {
        title: "Get Directions",
        variant: "link",
        size: "link",
        iconRight: (
          <RxChevronRight
            style={{ color: theme.colors.border }}
            className=' size-4'
          />
        ),
      },
    },
  ],
  map: {
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.6320494134204!2d73.8676440225177!3d18.516963898594653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0431c671d53%3A0xf1b13f8f30fbe65!2sLandmark%20Building%2C%20Jawaharlal%20Nehru%20Rd%2C%20New%20Nana%20Peth%2C%20Ganesh%20Peth%2C%20Pune%2C%20Maharashtra%20411002!5e0!3m2!1sen!2sin!4v1733137069339!5m2!1sen!2sin",
    image: {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.6320494134204!2d73.8676440225177!3d18.516963898594653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0431c671d53%3A0xf1b13f8f30fbe65!2sLandmark%20Building%2C%20Jawaharlal%20Nehru%20Rd%2C%20New%20Nana%20Peth%2C%20Ganesh%20Peth%2C%20Pune%2C%20Maharashtra%20411002!5e0!3m2!1sen!2sin!4v1733137069339!5m2!1sen!2sin",

      alt: "Relume placeholder map image",
    },
  },
};
export const CapabilitiesData = {
  tagline: "Unique Capabilities",
  heading: "What Sets Us",
  colorHeading: "Apart",
  description:
    "At Indo Electricals, we’re known for our quality, commitment to safety, and customer-centric approach. Our team leverages the latest technologies and practices to deliver efficient and effective electrical solutions tailored to each client's needs.",
  sections: [
    {
      icon: {
        src: image.Star,
        alt: "Relume logo 1",
      },
      heading: "Industry Expertise",
      description:
        "Our team’s knowledge spans multiple domains, from residential wiring to large-scale industrial installations, ensuring every project is expertly managed.",
    },
    {
      icon: {
        src: image.Hat,
        alt: "Relume logo 2",
      },
      heading: "Safety-First Approach",
      description:
        "We adhere to stringent safety protocols, ensuring each installation is reliable, durable and compliant with industry regulations.",
    },
    {
      icon: {
        src: image.Tv,
        alt: "Relume logo 3",
      },
      heading: "End-to-End Solutions",
      description:
        "Offering everything from feasibility studies and load analysis to final installation and compliance, Indo Electricals covers every aspect of your electrical needs.",
    },
    {
      icon: {
        src: image.UserThreeElectrical,
        alt: "Relume logo 3",
      },
      heading: "Certified Professionals",
      description:
        "Our team consists of qualified technicians with industry certifications and specialized training.",
    },
    {
      icon: {
        src: image.Chartline,
        alt: "Relume logo 3",
      },
      heading: "Proven Track Record",
      description:
        "Our strong client relationships highlight our commitment to providing reliable, top-quality service.",
    },
    {
      icon: {
        src: image.Wrench,
        alt: "Relume logo 3",
      },
      heading: "Advanced Equipment",
      description:
        "We use cutting-edge tools and techniques, ensuring efficiency and precision in every project.",
    },
  ],
};
