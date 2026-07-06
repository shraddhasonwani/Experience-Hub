import React from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Lock,
  Eye,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import "../Styles/ResetFlow.css";

const ResetPasswordPage = () => {
  return (
    <div className="reset-page">
      <div className="reset-card">
        <div className="reset-left">
          <Logo />

          <div className="left-text">
            <h1>
              You’re one step <br />
              <span>away!</span>
            </h1>
            <div className="green-line"></div>
            <p>
              Create a strong new password <br />
              to secure your account.
            </p>
          </div>

          <Dots />
          <Illustration />
        </div>

        <div className="reset-right">
          <Language />

          <div className="reset-form">
            <div className="circle-icon">
              <Lock size={48} />
            </div>

            <h1>Reset Password</h1>
            <p className="sub-text">
              Enter and confirm your new password <br />
              to reset your account.
            </p>

            <label>New Password</label>
            <div className="input-box">
              <Lock size={22} />
              <input type="password" placeholder="Enter your new password" />
              <Eye size={22} />
            </div>

            <p className="must">Password must contain:</p>

            <div className="rules">
              <span><CheckCircle size={16} /> 8+ characters</span>
              <span><CheckCircle size={16} /> Uppercase & lowercase</span>
              <span><CheckCircle size={16} /> Number</span>
              <span><CheckCircle size={16} /> Special character</span>
            </div>

            <label>Confirm New Password</label>
            <div className="input-box">
              <Lock size={22} />
              <input type="password" placeholder="Confirm your new password" />
              <Eye size={22} />
            </div>

            <Link to="/password-reset-success" className="green-btn">
              <span>Reset Password</span>
              <ArrowRight size={26} />
            </Link>

            <Divider />

            <Link to="/otp-verification" className="outline-btn">
              <ArrowLeft size={24} />
              Back to OTP Verification
            </Link>

            <div className="secure-note">
              <ShieldCheck size={25} />
              <p>
                Your security is important to us. <br />
                Choose a password that’s hard to guess.
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

export default ResetPasswordPage;