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
    <header className='relative flex items-center justify-center h-[50vh] text-center text-white overflow-hidden'>
      <img
        src={backgroundImage}
        alt='Header Image'
        className='absolute top-0 left-0 w-full h-full object-cover'
      />
    </header>
  );
};

export default AboutUsHeader;
