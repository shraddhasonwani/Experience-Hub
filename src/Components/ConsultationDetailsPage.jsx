import React from "react";
import "../Styles/ConsultationDetailsPage.css";
import {
  Bell,
  ChevronDown,
  ArrowLeft,
  Calendar,
  Clock,
  Video,
  CheckCircle,
  Upload,
  MessageSquare,
  CalendarPlus,
  PhoneCall,
  ClipboardList,
  Edit,
  Copy
} from "lucide-react";

const ConsultationDetailsPage = () => {

  const goals = [
    "Understand potential career paths in digital marketing",
    "Get advice on skills I should focus on",
    "Improve my resume and LinkedIn profile",
    "Learn effective job search strategies"
  ];

  const topics = [
    "Career goals and interests",
    "Industry exploration",
    "Skills development",
    "Job search strategies"
  ];

  return (
    <div className="consult-page">

      {/* ================= MAIN ================= */}

      <main className="consult-main">

        {/* TOPBAR */}

        <div className="topbar">

          <button className="back-btn">
            <ArrowLeft size={18}/>
            Back to My Consultations
          </button>

          <div className="profile">

            <Bell size={22}/>

            <img
              src="https://i.pravatar.cc/80?img=47"
              alt=""
            />

            <span>Sarah Johnson</span>

            <ChevronDown size={18}/>

          </div>

        </div>

        {/* HEADER CARD */}

        <div className="session-card">

          <div className="date-box">

            <span>MAY</span>

            <h1>20</h1>

            <p>Mon</p>

          </div>

          <div className="session-info">

            <div className="title-row">

              <h2>Career Guidance Session</h2>

              <span className="badge">
                Upcoming
              </span>

            </div>

            <h4>
              with James Wilson
            </h4>

            <div className="meta">

              <span>
                <Clock size={16}/>
                10:00 AM – 11:00 AM
              </span>

              <span>
                <Video size={16}/>
                Google Meet
              </span>

            </div>

            <div className="tag">
              Career Advice
            </div>

          </div>

          <div className="actions">

            <button className="join">
              <Video size={18}/>
              Join Session
            </button>

            <button className="outline">
              <Calendar size={18}/>
              Reschedule
            </button>

            <button className="danger">
              Cancel Session
            </button>

          </div>

        </div>

                {/* ================= TABS ================= */}

        <div className="tabs">

          <button className="active">Overview</button>
          <button>Agenda</button>
          <button>Preparation</button>
          <button>Notes</button>
          <button>Resources</button>
          <button>Follow-up</button>

        </div>

        {/* ================= CONTENT ================= */}

        <div className="consult-layout">

          {/* LEFT */}

          <div className="left-section">

            <div className="card">

              <h3>About This Session</h3>

              <p>
                This consultation focuses on exploring career opportunities
                in Digital Marketing. The discussion will include current
                industry trends, skill development roadmap, resume feedback,
                networking strategies, and personalized career guidance.
              </p>

            </div>

            <div className="card">

              <h3>Topics to Discuss</h3>

              <div className="topic-list">

                {topics.map((topic,index)=>(
                  <div key={index} className="topic">

                    <CheckCircle size={18}/>

                    <span>{topic}</span>

                  </div>
                ))}

              </div>

            </div>

            <div className="card">

              <h3>Session Goals</h3>

              <div className="goal-list">

                {goals.map((goal,index)=>(
                  <div key={index} className="goal">

                    <CheckCircle size={18}/>

                    <span>{goal}</span>

                  </div>
                ))}

              </div>

            </div>

            <div className="card">

              <h3>Session Details</h3>

              <div className="details-grid">

                <div>

                  <span>Date</span>

                  <strong>20 May 2024</strong>

                </div>

                <div>

                  <span>Time</span>

                  <strong>10:00 AM - 11:00 AM</strong>

                </div>

                <div>

                  <span>Duration</span>

                  <strong>60 Minutes</strong>

                </div>

                <div>

                  <span>Platform</span>

                  <strong>Google Meet</strong>

                </div>

                <div>

                  <span>Meeting ID</span>

                  <strong>879 654 235</strong>

                </div>

                <div>

                  <span>Password</span>

                  <strong>********</strong>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="right-section">

            <div className="card consultant-card">

              <img
                src="https://i.pravatar.cc/200?img=33"
                alt=""
              />

              <h3>James Wilson</h3>

              <p>Senior Product Manager</p>

              <small>Google</small>

              <div className="rating">

                ⭐⭐⭐⭐⭐

                <span>(4.9)</span>

              </div>

              <button>
                View Profile
              </button>

            </div>

            <div className="card">

              <h3>Session Tools</h3>

              <button className="tool-btn">

                <Video size={18}/>

                Join Meeting

              </button>

              <button className="tool-btn">

                <Upload size={18}/>

                Upload Resume

              </button>

              <button className="tool-btn">

                <MessageSquare size={18}/>

                Chat

              </button>

              <button className="tool-btn">

                <CalendarPlus size={18}/>

                Add Reminder

              </button>

              <button className="tool-btn">

                <PhoneCall size={18}/>

                Contact Mentor

              </button>

            </div>

            <div className="card">

              <h3>Quick Actions</h3>

              <button className="tool-btn">

                <ClipboardList size={18}/>

                Session Notes

              </button>

              <button className="tool-btn">

                <Edit size={18}/>

                Edit Booking

              </button>

              <button className="tool-btn">

                <Copy size={18}/>

                Copy Meeting Link

              </button>

            </div>

            <div className="help-box">

              <h4>Need Help?</h4>

              <p>

                Having trouble joining the consultation?

                Contact our support team anytime.

              </p>

              <button>

                Contact Support

              </button>

            </div>

          </div>

        </div>

      </main>

    </div>

  );

};

export default ConsultationDetailsPage;