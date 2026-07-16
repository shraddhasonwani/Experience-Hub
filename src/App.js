import { Routes, Route } from "react-router-dom";

import WelcomePage from "./Components/WelcomePage";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import ForgotPasswordPage from "./Components/ForgotPasswordPage";
import OTPVerificationPage from "./Components/OTPVerificationPage";
import ResetPasswordPage from "./Components/ResetPasswordPage";
import PasswordResetSuccessPage from "./Components/PasswordResetSuccessPage";

import DashboardPage from "./Components/DashboardPage";
import OpportunitiesPage from "./Components/OpportunitiesPage";
import CalendarPage from "./Components/CalendarPage";
import ConsultationDetailsPage from "./Components/ConsultationDetailsPage";
import ProfilePage from "./Components/ProfilePage";

import Layout from "./Components/Layout";

function App() {
  return (
    <Routes>

      {/* Public Pages */}
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/otp-verification" element={<OTPVerificationPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route
        path="/password-reset-success"
        element={<PasswordResetSuccessPage />}
      />

      {/* Pages with Sidebar */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/opportunities" element={<OpportunitiesPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route
          path="/consultation-details"
          element={<ConsultationDetailsPage />}
        />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

    </Routes>
  );
}

export default App;