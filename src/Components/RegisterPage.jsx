import React from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  ArrowRight,
  Check,
  Briefcase,
  Users,
} from "lucide-react";
import "../Styles/RegisterPage.css";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="register-card">
        {/* LEFT */}
        <div className="register-left">
          <div className="register-logoBox">
            <div className="register-logo">M</div>
            <div>
              <h2>
                Experience<span>Hub</span>
              </h2>
              <p>Share Experience. Create Impact.</p>
            </div>
          </div>

          <h1 className="register-leftTitle">
            Join a community <br />
            that values experience <br />
            and <span>creates opportunities.</span>
          </h1>

          <div className="register-line"></div>

          <div className="register-features">
            <Feature
              icon={<User />}
              title="Build your professional profile"
              text="Showcase your expertise and achievements"
            />
            <Feature
              icon={<Briefcase />}
              title="Discover meaningful opportunities"
              text="Find roles that match your skills and interests"
            />
            <Feature
              icon={<Users />}
              title="Make a real impact"
              text="Share your knowledge and help others grow"
            />
          </div>

          <div className="register-dots">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i}></span>
            ))}
          </div>

          <div className="register-illustration">
            <div className="reg-plant"></div>
            <div className="reg-girl"></div>
            <div className="reg-laptop"></div>
            <div className="reg-cup"></div>
            <div className="reg-book"></div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="register-right">
          

          <div className="register-formBox">
            <h1>Create Account</h1>
            <p className="register-subtitle">
              Fill in the details below to get started.
            </p>

            <form>
              <label>Full Name</label>
              <div className="register-inputBox">
                <User size={22} />
                <input type="text" placeholder="Enter your full name" />
              </div>

              <label>Email Address</label>
              <div className="register-inputBox">
                <Mail size={22} />
                <input type="email" placeholder="Enter your email" />
              </div>

              <label>Password</label>
              <div className="register-inputBox">
                <Lock size={22} />
                <input type="password" placeholder="Create a password" />
                <Eye size={22} className="register-eyeIcon" />
              </div>

              <p className="password-hint">
                Password must be at least 8 characters long.
              </p>

              <label>Confirm Password</label>
              <div className="register-inputBox">
                <Lock size={22} />
                <input type="password" placeholder="Confirm your password" />
                <Eye size={22} className="register-eyeIcon" />
              </div>

              <div className="terms">
                <span className="register-checkBox">
                  <Check size={17} />
                </span>
                <p>
                  I agree to the <span>Terms of Service</span> and{" "}
                  <span>Privacy Policy</span>
                </p>
              </div>

              <button type="submit" className="createBtn">
                <span>Create Account</span>
                <ArrowRight size={26} />
              </button>
            </form>
            <br />

            <p className="top-login">
            Already have an account? <Link to="/login" className="register-loginLink">Log in</Link>
          </p>

            <div className="register-divider">
              <span></span>
              <p>or</p>
              <span></span>
            </div>

            

            <button className="register-socialBtn">
              <b>G</b> Sign up with Google
            </button>

            <p className="register-policy">
              By creating an account, you agree to our{" "}
              <span>Terms of Service</span> and <span>Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

function Feature({ icon, title, text }) {
  return (
    <div className="register-feature">
      <div className="register-iconBox">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default RegisterPage;