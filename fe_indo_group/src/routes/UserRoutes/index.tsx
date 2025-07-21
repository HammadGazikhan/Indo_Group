/** @format */

import "../../App.css";
import { Suspense, useEffect } from "react";
import Loader from "../../components/layout/Loader/Index";
import AdminLayout from "../../components/layout/UserPanel/PanelLayout";
import { Route, Routes, useLocation } from "react-router-dom";
import Employees from "../../pages/UserPanels/Employees";
import Dashboard from "../../pages/UserPanels/UserDashboard/Index";

function UserPanel() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }, [pathname]);

    return null;
  };

  return (
    <div className="max-w-[1920px] mx-auto">
      <Suspense fallback={<Loader isLoading />}>
        <ScrollToTop />={" "}
        <Routes>
          <Route
            path="/employees"
            element={
              <AdminLayout>
                <Employees />
              </AdminLayout>
            }
          />
          <Route
            path="/documents"
            element={
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default UserPanel;
