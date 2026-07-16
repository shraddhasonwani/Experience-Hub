import React from "react";
import "../Styles/ProfilePage.css";
import {
  Search,
  Bell,
  ChevronDown,
  Edit,
  MapPin,
  Mail,
  Calendar,
  CheckCircle,
  Camera,
  Phone,
  Globe,
  GraduationCap,
} from "lucide-react";
import Sidebar from "./Sidebar";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Sidebar />


      {/* Main */}

      <main className="profile-main">

        {/* Top */}

        <header className="topbar">

          <div className="search-box">

            <Search size={18} />

            <input
              placeholder="Search..."
            />

          </div>

          <div className="top-right">

            <div className="notification">

              <Bell />

              <span>3</span>

            </div>

            <div className="profile-mini">

              <img
                src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
                alt=""
              />

              <h4>Sarah Johnson</h4>

              <ChevronDown size={18} />

            </div>

          </div>

        </header>

        {/* Profile Card */}

        <section className="profile-card">

          <div className="profile-left">

            <div className="profile-image">

              <img
                src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
                alt=""
              />

              <button>
                <Camera size={18} />
              </button>

            </div>

            <div>

              <div className="name-row">

                <h2>Sarah Johnson</h2>

                <span>
                  <CheckCircle size={16} />
                  Verified
                </span>

              </div>

              <h4>Content Writer</h4>

              <p>
                <MapPin size={16} />
                New York, NY, USA
              </p>

              <p>
                <Mail size={16} />
                sarah.johnson@example.com
              </p>

              <p>
                <Calendar size={16} />
                Joined March 2023
              </p>

            </div>

          </div>

          <button className="edit-btn">

            <Edit size={18} />

            Edit Profile

          </button>

        </section>

                {/* Tabs */}

        <div className="profile-tabs">
          <button className="active">Overview</button>
          <button>Experience</button>
          <button>Education</button>
          <button>Skills</button>
          <button>Certificates</button>
          <button>Preferences</button>
          <button>Account</button>
        </div>

        <div className="profile-content">

          {/* LEFT */}

          <div className="left-column">

            {/* About */}

            <div className="card">

              <div className="card-header">
                <h3>About Me</h3>

                <button>
                  <Edit size={18}/>
                </button>
              </div>

              <p>
                Passionate content writer with 4+ years of experience creating
                engaging content for nonprofits and impact-driven organizations.
                I love storytelling that connects people and drives change.
              </p>

            </div>

            {/* Experience */}

            <div className="card">

              <div className="card-header">
                <h3>Work Experience</h3>

                <button className="view-all-btn">
  View all
</button>
              </div>

              <div className="experience-item">

                <div className="icon green">
                  🌿
                </div>

                <div>

                  <h4>Content Writer</h4>

                  <h5>GreenFuture Foundation</h5>

                  <span>
                    Jan 2022 – Present • New York, NY
                  </span>

                  <p>
                    Create content for campaigns, blogs and social media to
                    engage audiences and promote sustainability initiatives.
                  </p>

                </div>

              </div>

              <hr />

              <div className="experience-item">

                <div className="icon purple">
                  📄
                </div>

                <div>

                  <h4>Communications Associate</h4>

                  <h5>TechForGood</h5>

                  <span>
                    Jun 2020 – Dec 2021 • Remote
                  </span>

                  <p>
                    Supported content strategy, wrote newsletters and managed
                    organization website.
                  </p>

                </div>

              </div>

            </div>

            {/* Education */}

            <div className="card">

              <div className="card-header">
                <h3>Education</h3>

                <button className="view-all-btn">View all</button>
              </div>

              <div className="experience-item">

                <div className="icon purple">
                  <GraduationCap size={28}/>
                </div>

                <div>

                  <h4>Bachelor of Arts in English</h4>

                  <h5>New York University</h5>

                  <span>
                    Graduated May 2020
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="right-column">

            {/* Strength */}

            <div className="card strength-card">

              <h3>Profile Strength</h3>

              <div className="circle">

                <span>80%</span>

              </div>

              <p>
                Great job! Your profile is looking strong.
              </p>

              <button>
                Improve Profile
              </button>

            </div>

            {/* Skills */}

            <div className="card">

              <div className="card-header">

                <h3>Top Skills</h3>

                <button>Edit</button>

              </div>

              <div className="skills">

                <span>Content Writing</span>
                <span>SEO Writing</span>
                <span>Copywriting</span>
                <span>Editing</span>
                <span>Social Media</span>
                <span>+ Add Skill</span>

              </div>

            </div>
            
          </div>

            {/* Languages */}

            <div className="card">

              <div className="card-header">

                <h3>Languages</h3>

                <button>Edit</button>

              </div>

              <div className="language">

                <span>English</span>

                <strong>Native</strong>

              </div>

              <div className="language">

                <span>Spanish</span>

                <strong>Conversational</strong>

              </div>

            </div>

            {/* Contact */}

            <div className="card">

              <div className="card-header">

                <h3>Contact Information</h3>

                <button>Edit</button>

              </div>

              <p>
                <Phone size={16}/> +1 (555) 123-4567
              </p>

              <p>
                <Globe size={16}/> linkedin.com/in/sarahjohnson
              </p>

            </div>

          

        </div>

      </main>

    </div>

  );
};

export default ProfilePage;