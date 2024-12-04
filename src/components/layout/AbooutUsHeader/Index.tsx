/** @format */

import React from "react";

// Define props type
interface Header69Props {
  title: string;
  backgroundImage?: string;
}

// Header Component
const AboutUsHeader: React.FC<Header69Props> = ({ backgroundImage }) => {
  return (
    <header
      className='relative flex items-center justify-center h-[50vh] bg-cover bg-center text-center text-white'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></header>
  );
};

export default AboutUsHeader;
