import React from "react";
import {
  Search,
  Bell,
  ChevronDown,
  Home,
  Briefcase,
  FileText,
  MessageCircle,
  Bookmark,
  User,
  Star,
  PieChart,
  BookOpen,
  HelpCircle,
  Settings,
  LogOut,
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
      <aside className="sidebar">
        <div className="dash-logoBox">
          <div className="dash-logo">M</div>
          <div>
            <h2>
              Experience<span>Hub</span>
            </h2>
            <p>Share Experience. Create Impact.</p>
          </div>
        </div>

        <nav className="side-menu">
          <Menu icon={<Home />} text="Dashboard" active />
          <Menu icon={<Briefcase />} text="Opportunities" />
          <Menu icon={<FileText />} text="My Applications" />
          <Menu icon={<MessageCircle />} text="Messages" badge="2" />
          <Menu icon={<Bookmark />} text="Saved" />
          <Menu icon={<User />} text="My Profile" />
          <Menu icon={<Star />} text="Skills" />
          <Menu icon={<PieChart />} text="Analytics" />

          <div className="side-divider"></div>

          <Menu icon={<BookOpen />} text="Resources" />
          <Menu icon={<HelpCircle />} text="Help Center" />
          <Menu icon={<Settings />} text="Settings" />
          <Menu icon={<LogOut />} text="Logout" />
        </nav>

        <div className="impact-card">
          <div className="plant-img"></div>
          <div>
            <h4>Make an impact</h4>
            <p>Share your skills and help others grow.</p>
            <button>Explore Opportunities</button>
          </div>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dash-header">
          <div className="searchBox">
            <Search size={22} />
            <input placeholder="Search opportunities, applications..." />
          </div>

          <div className="header-right">
            <div className="bellBox">
              <Bell size={24} />
              <span>3</span>
            </div>
            <div className="avatar"></div>
            <h4>Sarah Johnson</h4>
            <ChevronDown size={20} />
          </div>
        </header>

        <section className="welcome-section">
          <h1>Welcome back, Sarah! 👋</h1>
          <p>Here’s what’s happening with your account today.</p>
        </section>

        <div className="dashboard-grid">
          <div className="main-column">
            <div className="stats-row">
              <Stat icon={<Briefcase />} number="12" text="Active Opportunities" />
              <Stat icon={<FileText />} number="3" text="Applications" />
              <Stat icon={<Bookmark />} number="5" text="Saved Opportunities" />
              <Stat icon={<MessageCircle />} number="2" text="Unread Messages" />
            </div>

            <section className="panel recommended">
              <PanelTitle title="Recommended for you" />
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
                location="New York, NY"
                type="Part-time"
              />
            </section>

            <section className="panel activity-panel">
              <PanelTitle title="Recent Activity" />
              <div className="activity-flex">
                <div className="activity-list">
                  <Activity text="You applied for Content Writer at GreenFuture Foundation" time="2 hours ago" />
                  <Activity text='You saved "Graphic Designer" opportunity' time="Yesterday" />
                  <Activity text="New message from TechForGood" time="2 days ago" />
                </div>

                <div className="chartBox">
                  <div className="chart-head">
                    <h4>Activity Overview</h4>
                    <button>This Month⌄</button>
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

          <div className="right-column">
            <section className="panel profile-panel">
              <h3>Profile Strength</h3>
              <div className="circle-progress">
                <span>80%</span>
              </div>
              <p>Great job! Your profile is looking strong.</p>
              <button>Complete Profile</button>
            </section>

            <section className="panel events-panel">
              <PanelTitle title="Upcoming Events" />
              <Event title="Resume Building Workshop" date="May 18, 2024" time="10:00 AM" />
              <Event title="Networking for Impact" date="May 25, 2024" time="2:00 PM" />
            </section>

            <section className="panel quick-panel">
              <h3>Quick Actions</h3>
              <Quick icon={<Lightbulb />} text="Update Skills" />
              <Quick icon={<Briefcase />} text="Browse Opportunities" />
              <Quick icon={<FileText />} text="Application History" />
              <Quick icon={<Download />} text="Download Resume" />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

const Menu = ({ icon, text, active, badge }) => (
  <div className={`menu-item ${active ? "active" : ""}`}>
    {icon}
    <span>{text}</span>
    {badge && <b>{badge}</b>}
  </div>
);

const Stat = ({ icon, number, text }) => (
  <div className="stat-card">
    <div className="stat-icon">{icon}</div>
    <h2>{number}</h2>
    <p>{text}</p>
    <span>
      View all <ArrowRight size={16} />
    </span>
  </div>
);

const PanelTitle = ({ title }) => (
  <div className="panel-title">
    <h3>{title}</h3>
    <span>View all</span>
  </div>
);

const Job = ({ color, title, org, location, type }) => (
  <div className="job-card">
    <div className={`job-icon ${color}`}>✦</div>
    <div className="job-info">
      <h4>{title}</h4>
      <p>{org}</p>
      <small>
        <MapPin size={14} /> {location} <b>•</b> {type}
      </small>
    </div>
    <button>View Details</button>
    <Bookmark size={24} />
  </div>
);

const Activity = ({ text, time }) => (
  <div className="activity-item">
    <div className="activity-icon">
      <FileText size={20} />
    </div>
    <div>
      <p>{text}</p>
      <small>{time}</small>
    </div>
    <ArrowRight size={20} />
  </div>
);

const Event = ({ title, date, time }) => (
  <div className="event-item">
    <div className="event-icon">
      <Calendar size={24} />
    </div>
    <div>
      <h4>{title}</h4>
      <p>
        {date} <b>•</b> {time}
      </p>
      <small>Online</small>
    </div>
  </div>
);

const Quick = ({ icon, text }) => (
  <div className="quick-item">
    <div>{icon}</div>
    <span>{text}</span>
    <ArrowRight size={20} />
  </div>
);

export default DashboardPage;