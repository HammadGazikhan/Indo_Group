/** @format */

import Home from "./pages/Home/Home";
import "./App.css";
import AboutUs from "./pages/AboutUs/AboutUs";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import IndoElectricals from "./pages/Services/IndoElectricals/Index";
import IndoSolar from "./pages/Services/IndoSolar/Index";
import IndoManpower from "./pages/Services/IndoManpower/Inde";
import IndoConstructionDevelopers from "./pages/Services/IndoConstruction&Developers/Index";
import Contact from "./pages/Contact/Index";
import { Suspense, useEffect } from "react";
import PageNotFound from "./pages/PageNotFound/Index";
import Loader from "./components/layout/Loader/Index";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }, [pathname]);

    return null;
  };

  return (
    <div className='max-w-[1920px] mx-auto'>
      <BrowserRouter>
        <Suspense fallback={<Loader isLoading />}>
          <ScrollToTop />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route
              path='/services/indo-electricals'
              element={<IndoElectricals />}
            />
            <Route
              path='/services/indo-energy-solutions'
              element={<IndoSolar />}
            />
            <Route path='/services/indo-Manpower' element={<IndoManpower />} />
            <Route
              path='/services/indo-construction&Developers'
              element={<IndoConstructionDevelopers />}
            />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
