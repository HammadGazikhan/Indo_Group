/** @format */

import NavFoot from "../../../components/layout/layoutComonent/NavFoot";
import { ElectricalHeader } from "../../../components/layout/ElectricalHeader/Index";
import { ElectricalLogos } from "../../../components/layout/ElectricalLogos/Index";
import { ServicesCards } from "../../../components/layout/ServicesSection/Index";
import { ServicesGallery } from "../../../components/layout/ServicesGallery/Index";
import { Contact } from "../../../components/layout/Contact/Index";
import { Capabilities } from "../../../components/layout/Capabilities/Index";
import {
  CapabilitiesData,
  Contactdata,
  ElectricalData,
  serviceGalleryData,
  servicesData,
} from "../../../constants/data/services/indoElectrical/data";

function IndoElectricals() {
  return (
    <NavFoot>
      <ElectricalHeader {...ElectricalData} />
      <ElectricalLogos />
      <ServicesCards {...(servicesData as any)} />
      <ServicesGallery {...serviceGalleryData} />
      <Capabilities {...CapabilitiesData} />
      <Contact {...Contactdata} />
    </NavFoot>
  );
}

export default IndoElectricals;
