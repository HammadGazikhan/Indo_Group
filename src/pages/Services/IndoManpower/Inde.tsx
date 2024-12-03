/** @format */

import NavFoot from "../../../components/layout/layoutComonent/NavFoot";
import { ServicesCards } from "../../../components/layout/ServicesSection/Index";
import Expertise from "../../../components/layout/Expertise/Index";
import { ServicesTimeline } from "../../../components/layout/ServicesTimeline/Index";
import { CommunityImpact } from "../../../components/layout/CommunityImpact/Index";
import { Capabilities } from "../../../components/layout/Capabilities/Index";
import { Contact } from "../../../components/layout/Contact/Index";

import { ManpowerHeader } from "../../../components/layout/ManpowerHeader/Inden";
import {
  CapabilitiesData,
  CommunityImpactData,
  Contactdata,
  expertiseData,
  ManpowerHeaderData,
  servicesData,
  ServiceTimelineData,
} from "../../../constants/data/services/indoManpower/data";

function IndoManpower() {
  return (
    <NavFoot>
      <ManpowerHeader {...ManpowerHeaderData} />
      <ServicesCards {...(servicesData as any)} />
      <Expertise data={expertiseData} />
      <ServicesTimeline {...ServiceTimelineData} />
      <CommunityImpact {...CommunityImpactData} />
      <Capabilities {...CapabilitiesData} />
      <Contact {...Contactdata} />
    </NavFoot>
  );
}

export default IndoManpower;
