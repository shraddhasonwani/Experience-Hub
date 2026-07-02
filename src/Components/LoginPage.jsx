import React from "react";
import {
  Globe,
  Mail,
  Lock,
  Eye,
  ArrowRight,
  Check,
} from "lucide-react";
import "../Styles/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-left">
          <div className="login-logoBox">
            <div className="login-logo">M</div>
            <div>
              <h2>
                Experience<span>Hub</span>
              </h2>
              <p>Share Experience. Create Impact.</p>
            </div>
          </div>

          <div className="login-leftContent">
            <h1>Welcome back!</h1>
            <p>
              Log in to continue connecting,
              <br />
              collaborating and creating impact.
            </p>
            <div className="login-line"></div>
          </div>

          <div className="login-dots">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i}></span>
            ))}
          </div>

          <div className="login-illustration">
            <div className="login-girl"></div>
            <div className="login-laptop"></div>
            <div className="login-plant"></div>
            <div className="login-cup"></div>
          </div>
        </div>

        <div className="login-right">
          <div className="login-language">
            <Globe size={22} />
            <span>English</span>
            <span>⌄</span>
          </div>

          <div className="login-formBox">
            <h1>Log in</h1>
            <p className="login-subtitle">
              Enter your credentials to access your account.
            </p>

            <form>
              <label>Email Address</label>
              <div className="inputBox">
                <Mail size={24} />
                <input type="email" placeholder="Enter your email" />
              </div>

              <label>Password</label>
              <div className="inputBox">
                <Lock size={23} />
                <input type="password" placeholder="Enter your password" />
                <Eye size={24} className="eyeIcon" />
              </div>

              <div className="form-options">
                <div className="remember">
                  <span className="checkBox">
                    <Check size={18} />
                  </span>
                  <span>Remember me</span>
                </div>

                <span className="forgot">Forgot Password?</span>
              </div>

              <button type="submit" className="loginBtn">
                <span>Log In</span>
                <ArrowRight size={28} />
              </button>
            </form>

            <div className="divider">
              <span></span>
              <p>or</p>
              <span></span>
            </div>

            <button className="socialBtn google">G Continue with Google</button>
            <button className="socialBtn microsoft">▦ Continue with Microsoft</button>
            <button className="socialBtn linkedin">in Continue with LinkedIn</button>

            <p className="signupText">
              Don’t have an account? <span>Sign up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;