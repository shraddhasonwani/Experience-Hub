import React from "react";
import {
  Globe,
  Users,
  Briefcase,
  MessageCircle,
  Building2,
  ArrowRight,
} from "lucide-react";
import "../Styles/WelcomePage.css";
import { Link } from "react-router-dom";


const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-card">
        <div className="left">
          <div className="logoBox">
            <div className="logo">M</div>
            <div>
              <h2>
                Experience<span>Hub</span>
              </h2>
              <p>Share Experience. Create Impact.</p>
            </div>
          </div>

          <h1 className="leftTitle">
            A platform where <br />
            experience meets <br />
            <span>opportunity.</span>
          </h1>

          <div className="line"></div>

          <div className="dots">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i}></span>
            ))}
          </div>

          <div className="illustration">
            <div className="person old"></div>
            <div className="laptop"></div>
            <div className="person young"></div>
            <div className="plant"></div>
            <div className="cup"></div>
          </div>
        </div>

        <div className="right">
          <div className="language">
            <Globe size={20} />
            <span>English</span>
            <span>⌄</span>
          </div>

          <div className="content">
            <h1>
              Welcome to <br />
              Experience<span>Hub</span>
            </h1>

            <div className="smallLine"></div>

            <p className="subtitle">
              Connecting experienced professionals <br />
              with organizations that value their expertise.
            </p>

            <Feature
              icon={<Users />}
              title="Share Your Experience"
              text="Create your profile and showcase your expertise"
            />

            <Feature
              icon={<Briefcase />}
              title="Find Meaningful Opportunities"
              text="Discover consulting, mentoring and advisory roles"
            />

            <Feature
              icon={<MessageCircle />}
              title="Connect & Collaborate"
              text="Engage in consultations and create real impact"
            />
            <br />
            <br />
            <br/>
            <br/>
            

            <Link to="/register" className="primaryBtn">
  <span>Get Started</span>
  <ArrowRight size={24} />
</Link>

            <button className="outlineBtn">
              <Building2 size={22} />
              <span>I&apos;m an Organization</span>
            </button>

            <p className="loginText">
  Already have an account?{" "}
  <Link to="/login" className="loginLink">
    Login
  </Link>
</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function Feature({ icon, title, text }) {
  return (
    <div className="feature">
      <div className="iconBox">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default WelcomePage;