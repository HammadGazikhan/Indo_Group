/** @format */

import "../../App.css";
import { Suspense, useEffect } from "react";
import Loader from "../../components/layout/Loader/Index";
import AdminLayout from "../../components/layout/UserPanel/PanelLayout";
import { Route, Routes, useLocation } from "react-router-dom";
import RejectedEmployeeList from "../../pages/AdminPanel/RejectedEmployees";
import ApprovedEmployeeList from "../../pages/AdminPanel/ApprovedEmployees";
import EmployeeDetail from "../../pages/AdminPanel/RegisterdEmployees/View";
import AdminEmployeeList from "../../pages/AdminPanel/RegisterdEmployees";
import Dashboard from "../../pages/AdminPanel/Dashboard";
import SalarySlips from "../../pages/AdminPanel/SalarySlips";
import SalaryPage from "../../pages/AdminPanel/SalarySlips/View";
import ApprovedEmployeeDetail from "../../pages/AdminPanel/ApprovedEmployees/View";
import TerminateEmployee from "../../pages/AdminPanel/TerminateEmployee";
import TerminatedEmployeeView from "../../pages/AdminPanel/TerminateEmployee/View";

function AdminPanel() {
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
        <ScrollToTop />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            }
          />
          <Route
            path="/registered-employees"
            element={
              <AdminLayout>
                <AdminEmployeeList />
              </AdminLayout>
            }
          />
          <Route
            path="/employee/:id"
            element={
              <AdminLayout>
                <EmployeeDetail />
              </AdminLayout>
            }
          />
          <Route
            path="/rejected-employees"
            element={
              <AdminLayout>
                <RejectedEmployeeList />
              </AdminLayout>
            }
          />

          <Route
            path="/approved-employees"
            element={
              <AdminLayout>
                <ApprovedEmployeeList />
              </AdminLayout>
            }
          />
          <Route
            path="/approved-employees/:id"
            element={
              <AdminLayout>
                <ApprovedEmployeeDetail />
              </AdminLayout>
            }
          />
          <Route
            path="/salary-slips"
            element={
              <AdminLayout>
                <SalarySlips />
              </AdminLayout>
            }
          />
          <Route
            path="/salary-slips/:id"
            element={
              <AdminLayout>
                <SalaryPage />
              </AdminLayout>
            }
          />
          <Route
            path="/terminated-employees"
            element={
              <AdminLayout>
                <TerminateEmployee />
              </AdminLayout>
            }
          />
          <Route
            path="/terminated-employees/:id"
            element={
              <AdminLayout>
                <TerminatedEmployeeView />
              </AdminLayout>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default AdminPanel;
