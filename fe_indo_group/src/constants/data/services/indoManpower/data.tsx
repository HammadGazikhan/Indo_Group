/** @format */

import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import image from "../../../image";
import { theme } from "../../../theme";

export const ManpowerHeaderData = {
  tagline: "Skilled Manpower for Power Sector",
  heading: "Indo",
  colorHeading: "Manpower",
  description:
    "Indo Manpower is a trusted provider of skilled professionals, dedicated to supporting Maharashtra’s electrical sector with reliable staffing solutions. From experienced engineers to qualified technicians, we ensure each client is matched with the talent they need for success.",
  buttons: [{ title: "Get in touch", route: "/contact" }],
  buttonSecondary: [
    {
      title: "Register Now",
      iconRight: (
        <RxChevronRight
          style={{ color: theme.colors.border }}
          className="  size-5"
        />
      ),
      route: "/register-login",
    },
  ],
  group1Images: [
    {
      src: image.MPHeader1,
      alt: "Relume placeholder image 1",
    },
    {
      src: image.MPHeader3,
      alt: "Relume placeholder image 2",
    },
    {
      src: image.MPHeader2,
      alt: "Relume placeholder image 3",
    },
    {
      src: image.MPHeader4,
      alt: "Relume placeholder image 4",
    },
  ],
  group2Images: [
    {
      src: image.MPHeader5,
      alt: "Relume placeholder image 1",
    },
    {
      src: image.MPHeader6,
      alt: "Relume placeholder image 2",
    },
    {
      src: image.MPHeader7,
      alt: "Relume placeholder image 3",
    },
    {
      src: image.MPHeader8,
      alt: "Relume placeholder image 4",
    },
  ],
};
export const servicesData = {
  tagline: "Our Workforce",
  heading: "Professionals Trained for",
  colorHeading: "Excellence",
  description:
    "Our workforce includes a diverse range of skilled employees, from ITI graduates to experienced engineers, all rigorously trained to meet the unique demands of the electrical industry.",
  sections: [
    {
      image: {
        src: image.MPService1,
        alt: "Relume placeholder image 1",
      },
      heading: "ITI Graduates",
      description:
        "Qualified professionals trained in electrical work and safety protocols, ready for hands-on tasks.",
    },

    {
      image: {
        src: image.MPService2,
        alt: "Relume placeholder image 3",
      },
      heading: "Diploma Holders",
      description:
        "Experienced technicians with specialized knowledge in electrical systems and installations.",
    },
    {
      image: {
        src: image.MPService3,
        alt: "Relume placeholder image 1",
      },
      heading: "Engineers",
      description:
        "Licensed engineers with expertise in electrical design and project management.",
    },
    {
      image: {
        src: image.MPService4,
        alt: "Relume placeholder image 2",
      },
      heading: "Unskilled Labour",
      description:
        "General support workers trained in basic tasks, essential for site operations and support roles.",
    },
    {
      image: {
        src: image.MPService5,
        alt: "Relume placeholder image 3",
      },
      heading: "Site Supervisors",
      description:
        "Experienced supervisors who oversee daily operations, ensuring project timelines & quality standards are met.",
    },
    {
      image: {
        src: image.MPService6,
        alt: "Relume placeholder image 2",
      },
      heading: "Electricians",
      description:
        "Certified electricians skilled in installation, maintenance, and repair, providing essential support.",
    },
  ],
};
export const expertiseData = {
  bg: false,

  tagline: "Why Choose Indo Manpower",
  heading: "Experience & Quality You Can",
  colorHeading: "Count On",
  description:
    "With over 20 years of experience, Indo Manpower is a trusted partner for MSEDCL and other industry leaders. Our workforce is carefully selected and consistently trained to uphold the highest standards of safety, efficiency and reliability.",
  cards: [
    {
      heading: "Experienced Partner",
      description:
        "Decades-long partnership with MSEDCL highlights our reliability and expertise.",
      image: {
        src: image.MPAmenities1,
        alt: "Relume placeholder image 1",
      },
    },
    {
      heading: "Skilled Workforce",
      description:
        "Each member is selected for their technical skills and commitment to quality.",
      image: {
        src: image.MPAmenities2,
        alt: "Relume placeholder image 1",
      },
    },
    {
      heading: "Consistent Quality Assurance",
      description:
        "Our rigorous selection and training ensure consistent performance across all roles.",
      image: {
        src: image.MPAmenities3,
        alt: "Relume placeholder image 1",
      },
    },
    {
      heading: "Client-Centric Approach",
      description:
        "We tailor our services to match the specific staffing needs of each client.",
      image: {
        src: image.MPAmenities4,
        alt: "Relume placeholder image 1",
      },
    },
    // Add more card objects as needed
  ],
};
export const ServiceTimelineData = {
  tagline: "Our Selection & Training Process",
  heading: "Ensuring Excellence Through",
  colorHeading: "Rigorous Standards",
  description:
    "Indo Manpower’s selection process goes beyond qualifications. We evaluate each candidate’s skills, experience, and alignment with our clients’ needs, ensuring that every placement delivers reliable results.",

  timelineItems: [
    {
      heading: "Step 1",
      title: "Initial Screening",
      description:
        "Candidates undergo a rigorous initial screening to assess their basic qualifications and experience.",
    },
    {
      heading: "Step 2",
      title: "Technical Skill Assessment",
      description:
        "Each candidate’s technical skills are tested to confirm their competence in required tasks.",
    },
    {
      heading: "Step 3",
      title: "Onboarding Training",
      description:
        "Selected candidates receive targeted training focused on safety and job-specific skills.",
    },
    {
      heading: "Step 4",
      title: "Ongoing Performance Monitoring",
      description:
        "We continuously monitor performance, offering additional training as needed to ensure optimal service.",
    },
  ],
};
export const CommunityImpactData = {
  width: true,
  tagline: "Employee Support & Satisfaction",
  heading: "Supporting Our Workforce,",
  colorHeading: "Building Trust",
  description:
    "At Indo Manpower, we prioritize the well-being of our employees, ensuring they are supported and valued. From timely salaries to celebration of significant milestones, we believe that a satisfied workforce is key to delivering quality service.",
  buttons: [{ title: "Get in touch", route: "/contact" }],
  features: [
    {
      icon: {
        src: image.ClockUser,
        alt: "ClockUser",
      },
      boldParagraph: "Timely Salary Payments:",
      paragraph:
        "Guaranteed on-time payments to support our workforce and maintain morale.",
    },
    {
      icon: {
        src: image.UserCheck,
        alt: "UserCheck",
      },
      boldParagraph: "Employee Recognition Programs:",
      paragraph:
        "Regular recognition of outstanding work to motivate & retain top talent.",
    },
    {
      icon: {
        src: image.Speedometer,
        alt: "Speedometer",
      },
      boldParagraph: "Performance Bonuses:",
      paragraph:
        "Bonuses awarded based on performance and contribution to projects.",
    },
    {
      icon: {
        src: image.Users,
        alt: "Users",
      },
      boldParagraph: "Support in Times of Need:",
      paragraph:
        "We provide assistance to employees in emergencies or significant life events.",
    },
  ],
};
export const CapabilitiesData = {
  tagline: "Commitment to Safety & Compliance",
  heading: "Safety-First",
  colorHeading: "Approach",
  description:
    "Safety is paramount at Indo Manpower. Our employees undergo regular safety training and adhere to strict protocols, ensuring secure work environments and compliance with industry standards.",
  sections: [
    {
      icon: {
        src: image.TrafficCone,
        alt: "TrafficCone",
      },
      heading: "Comprehensive Safety Training",
      description:
        "All staff receive safety training focused on electrical hazards and workplace safety.",
    },
    {
      icon: {
        src: image.SealCheck,
        alt: "SealCheck",
      },
      heading: "Compliance with Standards",
      description:
        "We adhere to MSEDCL and government safety regulations, ensuring reliable & safe operations.",
    },
    {
      icon: {
        src: image.Hat,
        alt: "Hat",
      },
      heading: "Personal Protective Equipment (PPE)",
      description:
        "Employees are provided with necessary protective gear to mitigate on-site risks.",
    },

    {
      icon: {
        src: image.Lifebuoy,
        alt: "Lifebuoy",
      },
      heading: "Emergency Response",
      description:
        "Employees are trained in emergency protocols, equipping them to handle unexpected situations effectively & safely.",
    },
    {
      icon: {
        src: image.ShieldCheck,
        alt: "ShieldCheck",
      },
      heading: "Regular Safety Audits",
      description:
        "Ongoing safety audits ensure compliance and proactively address potential hazards.",
    },
    {
      icon: {
        src: image.HeartHalf,
        alt: "HeartHalf",
      },
      heading: "Regular Health & Safety Workshops",
      description:
        "We conduct workshops focused on health and safety best practices, keeping our workforce informed and proactive about on-site risks.",
    },
  ],
};
export const Contactdata = {
  tagline: "Contact Indo Manpower",
  heading: "Find the Right Talent for",
  colorHeading: "Your Project",
  description:
    "Whether you need skilled engineers or unskilled support staff, Indo Manpower can connect you with the professionals you need to succeed. Get in touch with us to learn more about our workforce solutions.",
  contacts: [
    {
      icon: (
        <BiEnvelope
          style={{ color: theme.colors.border }}
          className="size-8 "
        />
      ),
      title: "Email",
      description: "",
      link: {
        label: "indo_mps@yahoo.com",
        url: "#",
      },
    },
    {
      icon: (
        <BiPhone style={{ color: theme.colors.border }} className="size-8 " />
      ),
      title: "Phone",
      description: "+91 9970392823",
      link: {
        label: "Mr. Iftekar A. Sundke ",
        url: "#",
      },
    },
    {
      icon: (
        <BiMap style={{ color: theme.colors.border }} className="size-8 " />
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
            className=" size-4"
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
