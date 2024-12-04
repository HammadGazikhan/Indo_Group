/** @format */
import NavFoot from "../../components/layout/layoutComonent/NavFoot";
import { ContactUs } from "../../components/layout/MainContact/Index";
import { ContactInfo } from "../../components/layout/ContactInfo/Index";

import { ContactLocation } from "../../components/layout/ContactsLocation/Inde";
import { ContactInfoData } from "../../constants/data/contact/data";
import { FeatureSectionData } from "../../constants/data/contact/data";
import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <NavFoot>
      <Helmet>
        <title>Indo Group - Contact us</title>
      </Helmet>
      <ContactUs />
      <ContactInfo {...ContactInfoData} />
      <ContactLocation {...FeatureSectionData} />
    </NavFoot>
  );
}

export default Contact;
