import React from "react";
import {
  Search, Bell, ChevronDown,
  Bookmark,
  MapPin, CheckCircle, Leaf, Code, Users, Pencil, Heart
} from "lucide-react";
import "../Styles/OpportunitiesPage.css";
import Sidebar from "./Sidebar";

const jobs = [
  {
    icon: <Leaf />,
    cls: "green",
    title: "Content Writer",
    company: "GreenFuture Foundation",
    mode: "Remote",
    type: "Part-time",
    hours: "5 hrs/week",
    desc: "Create engaging content for our campaigns, blogs, and social media to raise awareness about environmental sustainability.",
    tag: "New",
  },
  {
    icon: <Code />,
    cls: "purple",
    title: "Web Developer",
    company: "TechForGood",
    mode: "Remote",
    type: "Full-time",
    hours: "",
    desc: "Build and maintain web applications that help nonprofits manage their programs and reach more people.",
    tag: "Featured",
  },
  {
    icon: <Users />,
    cls: "yellow",
    title: "Volunteer Coordinator",
    company: "Community Uplift",
    mode: "New York, NY",
    type: "Part-time",
    hours: "",
    desc: "Coordinate volunteers, plan events, and support community outreach initiatives.",
    tag: "New",
  },
  {
    icon: <Pencil />,
    cls: "blue",
    title: "Graphic Designer",
    company: "ArtReach",
    mode: "Hybrid",
    type: "Part-time",
    hours: "10 hrs/week",
    desc: "Design visual materials for social media, newsletters, and fundraising campaigns.",
    tag: "Urgent",
  },
  {
    icon: <Heart />,
    cls: "pink",
    title: "Program Assistant",
    company: "Youth Empowerment Network",
    mode: "Remote",
    type: "Part-time",
    hours: "",
    desc: "Provide admin support for youth programs and help track impact metrics.",
    tag: "",
  },
];

const OpportunitiesPage = () => {
  return (
    <div className="opp-page">
      <Sidebar />

      <main className="opp-main">
        <header className="opp-header">
          <div className="opp-search">
            <Search size={22} />
            <input placeholder="Search opportunities by title, keyword, or organization..." />
          </div>

          <div className="opp-userArea">
            <div className="opp-bell">
              <Bell size={24} />
              <span>3</span>
            </div>
            <div className="opp-avatar"></div>
            <h4>Sarah Johnson</h4>
            <ChevronDown size={20} />
          </div>
        </header>

        <section className="opp-title">
          <h1>Browse Opportunities</h1>
          <p>Discover ways to contribute your skills and make an impact.</p>
        </section>

        <div className="opp-content">
          <section className="opp-listArea">
            <div className="opp-tabs">
              <div className="tabs-left">
                <button className="active">All Opportunities</button>
                <button>Remote</button>
                <button>On-site</button>
                <button>Hybrid</button>
              </div>

              <div className="tabs-right">
                <span>128 opportunities found</span>
                <select>
                  <option>Most Recent</option>
                  <option>Oldest</option>
                </select>
              </div>
            </div>

            <div className="job-list">
              {jobs.map((job, index) => (
                <OpportunityCard key={index} job={job} index={index} />
              ))}
            </div>
          </section>

          <aside className="filter-panel">
            <div className="filter-head">
              <h3>Filters</h3>
              <span>Clear all</span>
            </div>

            <label>Keyword</label>
            <input className="filter-input" placeholder="e.g. marketing, education, design" />

            <h4>Location</h4>
            <Radio text="All Locations" checked />
            <Radio text="Remote" />
            <Radio text="On-site" />
            <Radio text="Hybrid" />

            <h4>Opportunity Type</h4>
            <Check text="Full-time" />
            <Check text="Part-time" />
            <Check text="Internship" />
            <Check text="Volunteer" />
            <Check text="Contract" />

            <label>Category</label>
            <select className="filter-input">
              <option>Select category</option>
            </select>

            <label>Skills</label>
            <select className="filter-input">
              <option>Select skills</option>
            </select>

            <label>Date Posted</label>
            <select className="filter-input">
              <option>Any time</option>
            </select>

            <button className="apply-btn">Apply Filters</button>

            <p className="save-search">
              <Bookmark size={17} /> Save Search
            </p>
          </aside>
        </div>
      </main>
    </div>
  );
};

const OpportunityCard = ({ job, index }) => (
  <div className="opp-card">
    <div className={`opp-jobIcon ${job.cls}`}>{job.icon}</div>

    <div className="opp-jobInfo">
      <h3>{job.title}</h3>
      <p>
        {job.company} <CheckCircle size={14} />
      </p>
      <small>
        <MapPin size={15} /> {job.mode} <b>•</b> {job.type}
        {job.hours && (
          <>
            <b>•</b> {job.hours}
          </>
        )}
      </small>
      <p className="desc">{job.desc}</p>
    </div>

    <div className="opp-status">
      {job.tag && <span className={job.tag.toLowerCase()}>{job.tag}</span>}
      <p>Posted {index === 0 ? "2 hours ago" : `${index} day${index > 1 ? "s" : ""} ago`}</p>
    </div>

    <button className="save-btn">
      <Bookmark size={25} />
    </button>
  </div>
);

const Radio = ({ text, checked }) => (
  <div className="filter-option">
    <span className={`radio ${checked ? "checked" : ""}`}></span>
    <p>{text}</p>
  </div>
);

const Check = ({ text }) => (
  <div className="filter-option">
    <span className="checkbox"></span>
    <p>{text}</p>
  </div>
);

export default OpportunitiesPage;