/** @format */

import NavFoot from "../../../components/layout/layoutComonent/NavFoot";
import { ElectricalHeader } from "../../../components/layout/ElectricalHeader/Index";
import { ServicesCards } from "../../../components/layout/ServicesSection/Index";
import { ServicesGallery } from "../../../components/layout/ServicesGallery/Index";
import { Contact } from "../../../components/layout/Contact/Index";
import { Capabilities } from "../../../components/layout/Capabilities/Index";
import Expertise from "../../../components/layout/Expertise/Index";
import { CommunityImpact } from "../../../components/layout/CommunityImpact/Index";
import {
  CapabilitiesData,
  CommunityImpactData,
  ConstructionData,
  Contactdata,
  expertiseData,
  serviceGalleryData,
  servicesData,
} from "../../../constants/data/services/indoConstruction&Developers/data";
import { Helmet } from "react-helmet-async";

function IndoConstructionDevelopers() {
  return (
    <NavFoot>
      <Helmet>
        <title>Indo Group Services- Construction and Developers</title>
      </Helmet>
      <ElectricalHeader {...ConstructionData} />
      <ServicesCards {...(servicesData as any)} />
      <ServicesGallery {...serviceGalleryData} />
      <Expertise data={expertiseData} />
      <Capabilities {...CapabilitiesData} />
      <CommunityImpact {...CommunityImpactData} />
      <Contact {...Contactdata} />
    </NavFoot>
  );
}

export default IndoConstructionDevelopers;
