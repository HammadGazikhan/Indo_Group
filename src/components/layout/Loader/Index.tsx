/** @format */

// src/components/Loader.tsx

import React from "react";
import { ClipLoader } from "react-spinners";

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div
      style={{ zIndex: 9999 }}
      className='flex  justify-center items-center h-screen'
    >
      <ClipLoader loading={isLoading} size={50} color='#3498db' />
    </div>
  );
};

export default Loader;
