import React from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  ArrowRight,
  Home,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import "../Styles/ResetFlow.css";

const PasswordResetSuccessPage = () => {
  return (
    <div className="reset-page">
      <div className="reset-card">
        <div className="reset-left">
          <Logo />

          <div className="left-text">
            <h1>
              You’re all set! <br />
              <span>Password reset successful.</span>
            </h1>
            <div className="green-line"></div>
            <p>
              Your password has been updated <br />
              successfully. You can now log in to <br />
              your account.
            </p>
          </div>

          <Dots />
          <Illustration />
        </div>

        <div className="reset-right">
          <Language />

          <div className="success-box">
            <div className="success-circle">
              <CheckCircle size={80} />
            </div>

            <h1>You’re all set!</h1>
            <p>
              Your password has been reset successfully. <br />
              You can now log in to your account.
            </p>

            <Link to="/login" className="green-btn">
              <span>Go to Login</span>
              <ArrowRight size={26} />
            </Link>

            <Divider />

            <Link to="/" className="outline-btn">
              <Home size={25} />
              Go to Home
            </Link>

            <div className="security-card">
              <div>
                <ShieldCheck size={32} />
              </div>
              <p>
                <b>Keep your account secure</b>
                <br />
                Never share your password with anyone. <br />
                Change it regularly to keep your account safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Logo = () => (
  <div className="logo-box">
    <div className="logo">M</div>
    <div>
      <h2>
        Experience<span>Hub</span>
      </h2>
      <p>Share Experience. Create Impact.</p>
    </div>
  </div>
);

const Language = () => (
  <div className="language">
    <Globe size={22} />
    <span>English</span>
    <span>⌄</span>
  </div>
);

const Dots = () => (
  <div className="dots">
    {Array.from({ length: 12 }).map((_, i) => (
      <span key={i}></span>
    ))}
  </div>
);

const Divider = () => (
  <div className="divider">
    <span></span>
    <p>or</p>
    <span></span>
  </div>
);

const Illustration = () => (
  <div className="illustration">
    <div className="plant"></div>
    <div className="girl"></div>
    <div className="laptop"></div>
    <div className="cup"></div>
  </div>
);

export default PasswordResetSuccessPage;