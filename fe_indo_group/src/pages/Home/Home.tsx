/** @format */

import { Helmet } from "react-helmet-async";
import { CommunityImpact } from "../../components/layout/CommunityImpact/Index";
import { FeatureSection } from "../../components/layout/FeatureSection/Index";
import { Gallery } from "../../components/layout/GallerySection/Index";
import { Header } from "../../components/layout/HeroSection/HeroSection";
import NavFoot from "../../components/layout/layoutComonent/NavFoot";
import { RecentProjectSection } from "../../components/layout/RecentProjectSection/Index";
import ExpertiseSection from "../../components/layout/Sectors/Index";
import {
  CommunityImpactData,
  expertiseData,
  FeatureSectionData,
  GalleryData,
  headerData,
  RecentProject,
} from "../../constants/data/home/data";

function Index() {
  return (
    <NavFoot>
      <Helmet>
        <title>Indo Group - Home</title>
      </Helmet>
      <Header {...headerData} />
      <FeatureSection {...FeatureSectionData} />
      <ExpertiseSection data={expertiseData} />
      <Gallery {...GalleryData} />
      <RecentProjectSection {...RecentProject} />
      <CommunityImpact {...CommunityImpactData} />
    </NavFoot>
  );
}

export default Index;
