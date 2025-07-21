/** @format */

import { BiEnvelope, BiMessageDetail, BiPhone } from "react-icons/bi";
import { theme } from "../../theme";

export const ContactInfoData = {
  contacts: [
    {
      icon: (
        <BiPhone
          style={{
            color: theme.colors.secondaryHeading,
            filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))", // Glow effect
          }}
          className='size-12 '
        />
      ),
      title: "Phone",
      description:
        "Speak directly with one of our team members for immediate assistance, or discuss your project requirements in detail.",
      link: {
        label: "+91 9822-054-197",
        url: "#",
      },
      Secondlink: {
        label: "+91 7378-666-783",
        url: "#",
      },
    },
    {
      icon: (
        <BiEnvelope
          style={{
            color: theme.colors.secondaryHeading,
            filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))", // Glow effect
          }}
          className='size-12 '
        />
      ),
      title: "Email",
      description:
        "Our team is here to help you with any inquiries or support you may need. For direct assistance, feel free to drop us an email.",
      link: {
        label: "indocnd@gmail.com",
        url: "#",
      },
      Secondlink: {
        label: "+91 7378-666-783",
        url: "#",
      },
    },
    {
      icon: (
        <BiMessageDetail
          style={{
            color: theme.colors.secondaryHeading,
            filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))", // Glow effect
          }}
          className='size-12 '
        />
      ),
      title: "Live chat",
      description:
        "Need instant assistance? Our live chat support is available during business hours to answer your questions in real time.",
      link: {
        label: "+91 7378-666-783",
        url: "#",
      },
      Secondlink: {
        label: "+91 8668-700-280",
        url: "#",
      },
    },
  ],
};
export const FeatureSectionData = {
  tagline: "Our offices",
  heading: "You Can",
  colorHeading: "Visit Us At",
  description:
    "You can also reach us through the following location details. We look forward to connecting with you!",
  reverse: false,
  tabs: [
    {
      view: "View Map",
      heading: "Location 1",
      description:
        "Office No. 02, Indo Homes, 367B Mahatma Phule Peth, Pune, Maharashtra - 411042.",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.46355128292709!2d73.87000223162953!3d18.51005692375497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c040c3803f5f%3A0xd50b1031dd2944d!2sIndo%20Homes!5e0!3m2!1sen!2sin!4v1733140749431!5m2!1sen!2sin",
    },
    {
      view: "View Map",
      heading: "Location 2",
      description:
        "Office No. 103+104, Landmark Building, 490/491 Nana Peth, Pune, Maharashtra - 411002.",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.6320494134204!2d73.8676440225177!3d18.516963898594653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0431c671d53%3A0xf1b13f8f30fbe65!2sLandmark%20Building%2C%20Jawaharlal%20Nehru%20Rd%2C%20New%20Nana%20Peth%2C%20Ganesh%20Peth%2C%20Pune%2C%20Maharashtra%20411002!5e0!3m2!1sen!2sin!4v1733137069339!5m2!1sen!2sin",
    },
  ],
};
