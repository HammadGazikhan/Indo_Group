/** @format */

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 p-6'>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className='text-center max-w-md'
      >
        {/* Illustration */}
        <div className='mb-8'>
          <svg
            viewBox='0 0 200 200'
            className='w-40 h-40 drop-shadow-lg mx-auto'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='100' cy='100' r='90' fill='#F0F4F8' />
            <path
              d='M80,120 Q100,80 120,120'
              fill='none'
              stroke='#139ABF'
              strokeWidth='8'
            />
            <circle cx='80' cy='80' r='10' fill='#139ABF' />
            <circle cx='120' cy='80' r='10' fill='#139ABF' />
          </svg>
        </div>

        {/* Text */}
        <h1 className='text-7xl font-bold text-[#139ABF] drop-shadow-md'>
          404
        </h1>
        <p className='text-2xl font-semibold text-gray-900 mt-2'>
          Oops! Page not found
        </p>
        <p className='text-lg text-gray-600 mt-2 leading-relaxed'>
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            style={{
              background: "linear-gradient(90deg, #0E7490 0%, #139ABF 100%)",
            }}
            to='/'
            className='inline-block mt-6 px-6 py-3 hove  text-white font-semibold hover:shadow-large rounded-lg shadow-md transition-all hover:bg-indigo-700'
          >
            Go Back Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
