import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Home,
  Briefcase,
  FileText,
  MessageCircle,
  Calendar,
  User,
  Award,
  BarChart3,
  BookOpen,
  HelpCircle,
  Settings,
  LogOut,
} from "lucide-react";

import "../Styles/Sidebar.css";

const Sidebar = () => {

  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <aside className="sidebar">

      <div className="dash-logoBox">

        <div className="dash-logo">
          M
        </div>

        <div>

          <h2>
            Experience
            <span>Hub</span>
          </h2>

          <p>
            Share Experience. Create Impact.
          </p>

        </div>

      </div>

      <nav className="side-menu">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <Home size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/opportunities"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <Briefcase size={20} />
          <span>Opportunities</span>
        </NavLink>

        <NavLink
          to="/applications"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FileText size={20} />
          <span>My Applications</span>
        </NavLink>

        <NavLink
          to="/consultation-details"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <MessageCircle size={20} />
          <span>Consultations</span>
        </NavLink>

        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <Calendar size={20} />
          <span>Calendar</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <User size={20} />
          <span>My Profile</span>
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <Award size={20} />
          <span>Skills</span>
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <BarChart3 size={20} />
          <span>Analytics</span>
        </NavLink>

        <div className="side-divider"></div>

        <NavLink
          to="/resources"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <BookOpen size={20} />
          <span>Resources</span>
        </NavLink>

        <NavLink
          to="/help"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <HelpCircle size={20} />
          <span>Help Center</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>

        <button className="logout-btn" onClick={logout}>
          <LogOut size={20} />
          Logout
        </button>

      </nav>

      <div className="impact-card">

        <div className="plant-img"></div>

        <h4>Make an Impact 🌱</h4>

        <p>
          Share your experience and help students grow.
        </p>

        <button>
          Explore
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;