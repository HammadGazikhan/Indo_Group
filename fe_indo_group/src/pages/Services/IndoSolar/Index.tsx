/** @format */

import NavFoot from "../../../components/layout/layoutComonent/NavFoot";
import { SolarHeader } from "../../../components/layout/SolarHeader/Index";
import { ServicesCards } from "../../../components/layout/ServicesSection/Index";
import Expertise from "../../../components/layout/Expertise/Index";
import { ServicesTimeline } from "../../../components/layout/ServicesTimeline/Index";
import { CommunityImpact } from "../../../components/layout/CommunityImpact/Index";
import { Capabilities } from "../../../components/layout/Capabilities/Index";
import { ServicesGallery } from "../../../components/layout/ServicesGallery/Index";
import { Contact } from "../../../components/layout/Contact/Index";
import {
  CapabilitiesData,
  CommunityImpactData,
  Contactdata,
  expertiseData,
  serviceGalleryData,
  servicesData,
  ServiceTimelineData,
  solarHeaderData,
} from "../../../constants/data/services/indoSolar/data";
import { Helmet } from "react-helmet-async";

function IndoSolar() {
  return (
    <NavFoot>
      <Helmet>
        <title>Indo Group Services - Solar Solutions</title>
      </Helmet>
      <SolarHeader {...solarHeaderData} />
      <ServicesCards {...(servicesData as any)} />
      <Expertise data={expertiseData} />
      <ServicesTimeline {...ServiceTimelineData} />
      <CommunityImpact {...CommunityImpactData} />
      <Capabilities {...CapabilitiesData} />
      <ServicesGallery {...serviceGalleryData} />
      <Contact {...Contactdata} />
    </NavFoot>
  );
}

export default IndoSolar;
