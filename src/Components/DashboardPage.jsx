import React from "react";
import {
  Search,
  Bell,
  ChevronDown,
  Briefcase,
  FileText,
  MessageCircle,
  Bookmark,
  ArrowRight,
  MapPin,
  Calendar,
  Lightbulb,
  Download,
} from "lucide-react";

import "../Styles/DashboardPage.css";

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      {/* Main Content */}

      <main className="dashboard-main">

        {/* Header */}

        <header className="dash-header">

          <div className="searchBox">

            <Search size={22} />

            <input
              type="text"
              placeholder="Search opportunities, applications..."
            />

          </div>

          <div className="header-right">

            <div className="bellBox">
              <Bell size={24}/>
              <span>3</span>
            </div>

            <div className="avatar"></div>

            <h4>Sarah Johnson</h4>

            <ChevronDown size={18}/>

          </div>

        </header>

        {/* Welcome */}

        <section className="welcome-section">

          <h1>Welcome back, Sarah 👋</h1>

          <p>
            Here's what's happening with your account today.
          </p>

        </section>

        {/* Grid */}

        <div className="dashboard-grid">

          {/* Left */}

          <div className="main-column">

            {/* Stats */}

            <div className="stats-row">

              <Stat
                icon={<Briefcase />}
                number="12"
                text="Active Opportunities"
              />

              <Stat
                icon={<FileText />}
                number="3"
                text="Applications"
              />

              <Stat
                icon={<Bookmark />}
                number="5"
                text="Saved Opportunities"
              />

              <Stat
                icon={<MessageCircle />}
                number="2"
                text="Unread Messages"
              />

            </div>

            {/* Recommended */}

            <section className="panel">

              <PanelTitle title="Recommended for you"/>

              <Job
                color="green"
                title="Content Writer"
                org="GreenFuture Foundation"
                location="Remote"
                type="Part-time"
              />

              <Job
                color="purple"
                title="Web Developer"
                org="TechForGood"
                location="Remote"
                type="Full-time"
              />

              <Job
                color="yellow"
                title="Volunteer Coordinator"
                org="Community Uplift"
                location="New York"
                type="Part-time"
              />

            </section>
                        {/* Recent Activity */}

            <section className="panel">

              <PanelTitle title="Recent Activity" />

              <div className="activity-flex">

                <div className="activity-list">

                  <Activity
                    text="You applied for Content Writer at GreenFuture Foundation"
                    time="2 hours ago"
                  />

                  <Activity
                    text='You saved "Graphic Designer" opportunity'
                    time="Yesterday"
                  />

                  <Activity
                    text="New message from TechForGood"
                    time="2 days ago"
                  />

                </div>

                <div className="chartBox">

                  <div className="chart-head">

                    <h4>Activity Overview</h4>

                    <button>This Month ▼</button>

                  </div>

                  <div className="fake-chart">

                    <div className="chart-line"></div>

                  </div>

                  <div className="chart-labels">

                    <span>Apr 29</span>
                    <span>May 6</span>
                    <span>May 13</span>
                    <span>May 20</span>
                    <span>May 27</span>

                  </div>

                </div>

              </div>

            </section>

          </div>

          {/* Right Column */}

          <div className="right-column">

            <section className="panel profile-panel">

              <h3>Profile Strength</h3>

              <div className="circle-progress">

                <span>80%</span>

              </div>

              <p>Great job! Your profile is looking strong.</p>

              <button>Complete Profile</button>

            </section>

            <section className="panel">

              <PanelTitle title="Upcoming Events" />

              <Event
                title="Resume Building Workshop"
                date="May 18, 2024"
                time="10:00 AM"
              />

              <Event
                title="Networking for Impact"
                date="May 25, 2024"
                time="2:00 PM"
              />

            </section>

            <section className="panel">

              <h3>Quick Actions</h3>

              <Quick
                icon={<Lightbulb />}
                text="Update Skills"
              />

              <Quick
                icon={<Briefcase />}
                text="Browse Opportunities"
              />

              <Quick
                icon={<FileText />}
                text="Application History"
              />

              <Quick
                icon={<Download />}
                text="Download Resume"
              />

            </section>

          </div>

        </div>

      </main>

    </div>
  );
};

const Stat = ({ icon, number, text }) => (
  <div className="stat-card">
    <div className="stat-icon">{icon}</div>

    <h2>{number}</h2>

    <p>{text}</p>

    <span>
      View All <ArrowRight size={15} />
    </span>
  </div>
);

const PanelTitle = ({ title }) => (
  <div className="panel-title">
    <h3>{title}</h3>

    <span>View All</span>
  </div>
);

const Job = ({ color, title, org, location, type }) => (
  <div className="job-card">

    <div className={`job-icon ${color}`}>
      ✦
    </div>

    <div className="job-info">

      <h4>{title}</h4>

      <p>{org}</p>

      <small>
        <MapPin size={14} /> {location} • {type}
      </small>

    </div>

    <button className="view-btn">
      View Details
    </button>

    <Bookmark size={22} />

  </div>
);

const Activity = ({ text, time }) => (
  <div className="activity-item">

    <div className="activity-icon">
      <FileText size={18} />
    </div>

    <div className="activity-content">

      <p>{text}</p>

      <small>{time}</small>

    </div>

    <ArrowRight size={18} />

  </div>
);

const Event = ({ title, date, time }) => (
  <div className="event-item">

    <div className="event-icon">
      <Calendar size={20} />
    </div>

    <div>

      <h4>{title}</h4>

      <p>
        {date} • {time}
      </p>

      <small>Online</small>

    </div>

  </div>
);

const Quick = ({ icon, text }) => (
  <div className="quick-item">

    <div className="quick-icon">
      {icon}
    </div>

    <span>{text}</span>

    <ArrowRight size={18} />

  </div>
);

export default DashboardPage;