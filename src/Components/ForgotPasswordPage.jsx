import React from "react";
import { Link } from "react-router-dom";
import { Globe, Mail, ArrowRight, ArrowLeft, LockKeyhole } from "lucide-react";
import "../Styles/ForgotPasswordPage.css";

const ForgotPasswordPage = () => {
  return (
    <div className="forgot-page">
      <div className="forgot-card">
        <div className="forgot-left">
          <div className="forgot-logoBox">
            <div className="forgot-logo">M</div>
            <div>
              <h2>
                Experience<span>Hub</span>
              </h2>
              <p>Share Experience. Create Impact.</p>
            </div>
          </div>

          <div className="forgot-leftText">
            <h1>Trouble signing in?</h1>
            <p>
              Don’t worry! It happens. <br />
              Enter your email and we’ll help <br />
              you reset your password.
            </p>
            <div className="forgot-line"></div>
          </div>

          <div className="forgot-dots">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i}></span>
            ))}
          </div>

          <div className="forgot-illustration">
            <div className="forgot-plant"></div>
            <div className="forgot-girl"></div>
            <div className="forgot-laptop"></div>
            <div className="forgot-cup"></div>
          </div>
        </div>

        <div className="forgot-right">
          <div className="forgot-language">
            <Globe size={22} />
            <span>English</span>
            <span>⌄</span>
          </div>

          <div className="forgot-formBox">
            <div className="forgot-iconCircle">
              <LockKeyhole size={58} />
            </div>

            <h1>Forgot Password?</h1>

            <p className="forgot-subtitle">
              Enter your registered email address and we’ll <br />
              send you a link to reset your password.
            </p>

            <form>
              <label>Email Address</label>

              <div className="forgot-inputBox">
                <Mail size={24} />
                <input type="email" placeholder="Enter your email address" />
              </div>

              <Link to="/otp-verification" className="forgot-submitBtn">
  <span>Send Reset Link</span>
  <ArrowRight size={28} />
</Link>
            </form>

            <div className="forgot-divider">
              <span></span>
              <p>or</p>
              <span></span>
            </div>

            <Link to="/login" className="forgot-backBtn">
              <ArrowLeft size={26} />
              <span>Back to Login</span>
            </Link>

            <p className="forgot-support">
              Need help? <span>Contact Support</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;