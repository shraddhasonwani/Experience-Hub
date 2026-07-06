import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Mail,
} from "lucide-react";
import "../Styles/OTPVerificationPage.css";

const OTPVerificationPage = () => {
  const [otp, setOtp] = useState(["1", "4", "7", "2", "8", "9"]);
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="otp-page">
      <div className="otp-card">
        <div className="otp-left">
          <div className="otp-logoBox">
            <div className="otp-logo">M</div>
            <div>
              <h2>
                Experience<span>Hub</span>
              </h2>
              <p>Share Experience. Create Impact.</p>
            </div>
          </div>

          <div className="otp-leftText">
            <h1>
              Let’s verify your <br />
              <span>email</span>
            </h1>
            <p>
              We’ve sent a 6-digit verification code <br />
              to your email address.
            </p>
            <div className="otp-line"></div>
          </div>

          <div className="otp-dots">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i}></span>
            ))}
          </div>

          <div className="otp-illustration">
            <div className="otp-plant"></div>
            <div className="otp-girl"></div>
            <div className="otp-phone"></div>
            <div className="otp-mailBubble">
              <Mail size={42} />
              <span>1</span>
            </div>
            <div className="otp-cup"></div>
            <div className="otp-book"></div>
          </div>
        </div>

        <div className="otp-right">
          <div className="otp-language">
            <Globe size={22} />
            <span>English</span>
            <span>⌄</span>
          </div>

          <div className="otp-formBox">
            <div className="otp-iconCircle">
              <ShieldCheck size={58} />
            </div>

            <h1>OTP Verification</h1>

            <p className="otp-subtitle">
              Enter the 6-digit code sent to <br />
              <span>john.doe@example.com</span>
            </p>

            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputsRef.current[index] = el)}
                  value={digit}
                  maxLength="1"
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </div>

            <p className="otp-resend">
              Didn’t receive the code?{" "}
              <span>Resend Code (00:45)</span>
            </p>

            <Link to="/reset-password" className="otp-submitBtn">
  <span>Verify & Continue</span>
  <ArrowRight size={28} />
</Link>

            <div className="otp-divider">
              <span></span>
              <p>or</p>
              <span></span>
            </div>

            <Link to="/forgot-password" className="otp-backBtn">
              <ArrowLeft size={26} />
              <span>Back to Forgot Password</span>
            </Link>

            <div className="otp-secure">
              <div>
                <ShieldCheck size={26} />
              </div>
              <p>
                Your information is secure with us. <br />
                We never share your data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerificationPage;