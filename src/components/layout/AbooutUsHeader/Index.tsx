/** @format */

import React from "react";

// Define props type
interface Header69Props {
  tagline?: string;
  title: string;
  subtitle?: string;
  description?: string;
  buttons?: {
    label: string;
    variant?: "primary" | "secondary";
    onClick?: () => void;
  }[];
  backgroundImage?: string;
}

// Header Component
const AboutUsHeader: React.FC<Header69Props> = ({
  tagline,
  title,
  subtitle,
  description,
  buttons,
  backgroundImage,
}) => {
  return (
    <header
      className='relative flex items-center justify-center h-[50vh] bg-cover bg-center text-center text-white'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative z-10 max-w-4xl px-6'>
        {tagline && <p className='mb-2 text-lg font-semibold'>{tagline}</p>}
        <h1 className='text-4xl font-bold sm:text-5xl lg:text-6xl'>{title}</h1>
        {subtitle && (
          <h2 className='mt-4 text-2xl font-medium sm:text-3xl'>{subtitle}</h2>
        )}
        {description && (
          <p className='mt-6 text-lg sm:text-xl text-gray-200'>{description}</p>
        )}
        {buttons && (
          <div className='mt-8 flex justify-center gap-4'>
            {buttons.map((button, index) => (
              <button
                key={index}
                onClick={button.onClick}
                className={`px-6 py-3 text-lg font-semibold rounded ${
                  button.variant === "secondary"
                    ? "bg-transparent border border-white text-white hover:bg-white hover:text-black"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        )}
      </div> */}
    </header>
  );
};

export default AboutUsHeader;
