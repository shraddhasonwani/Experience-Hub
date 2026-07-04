import { Routes, Route } from "react-router-dom";
import WelcomePage from "./Components/WelcomePage";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import ForgotPasswordPage from "./Components/ForgotPasswordPage";
import OTPVerificationPage from "./Components/OTPVerificationPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/otp-verification" element={<OTPVerificationPage />} />
    </Routes>
  );
}

export default App;