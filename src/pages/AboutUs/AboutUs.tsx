/** @format */

import React from "react";
import NavFoot from "../../components/layout/layoutComonent/NavFoot";
import AboutUsHeader from "../../components/layout/AbooutUsHeader/Index";
import { CommunityImpact } from "../../components/layout/CommunityImpact/Index";
import image from "../../constants/image";
import { Timeline } from "../../components/layout/Timeline/Index";
import { Team20 } from "../../components/layout/Teams/Index";
import { FeatureSection } from "../../components/layout/FeatureSection/Index";
import { Contact } from "../../components/layout/Contact/Index";
import Expertise from "../../components/layout/Expertise/Index";
import {
  CommunityImpactData,
  Contactdata,
  expertiseData,
  FeatureSectionData,
  TeamData,
  TimelineData,
} from "../../constants/data/about/data";

function AboutUs() {
  return (
    <NavFoot>
      <AboutUsHeader
        title='aboutus'
        backgroundImage='https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg'
      />
      <CommunityImpact {...CommunityImpactData} />
      <Timeline {...(TimelineData as any)} />
      <Team20 {...TeamData} />
      <FeatureSection {...FeatureSectionData} />
      <Expertise data={expertiseData} />
      <Contact bg={true} {...Contactdata} />
    </NavFoot>
  );
}

export default AboutUs;
