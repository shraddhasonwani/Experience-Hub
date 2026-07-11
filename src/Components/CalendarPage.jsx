import React from "react";
import {
  Bell,
  BookOpen,
  Briefcase,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  FileText,
  Home,
  LogOut,
  MessageCircle,
  Plus,
  Settings,
  Star,
  UserCircle,
  Bookmark,
  PieChart,
  Video,
} from "lucide-react";
import "../Styles/CalendarPage.css";

const calendarEvents = {
  1: [{ time: "11:00 AM", title: "Personal Branding", type: "purple" }],
  6: [{ time: "2:00 PM", title: "Resume Review", type: "green" }],
  8: [{ time: "10:00 AM", title: "Interview Prep", type: "yellow" }],
  10: [{ time: "4:00 PM", title: "Career Guidance", type: "blue" }],
  14: [{ time: "1:00 PM", title: "LinkedIn Profile", type: "purple" }],
  15: [{ time: "3:30 PM", title: "Skills Development", type: "green" }],
  17: [{ time: "11:00 AM", title: "Job Search Strategy", type: "red" }],
  20: [{ time: "10:00 AM", title: "Career Guidance", type: "green" }],
  23: [{ time: "2:30 PM", title: "Cover Letter Review", type: "yellow" }],
  28: [{ time: "4:00 PM", title: "Career Planning", type: "blue" }],
};

const days = [
  { date: 28, muted: true },
  { date: 29, muted: true },
  { date: 30, muted: true },
  { date: 1 },
  { date: 2 },
  { date: 3 },
  { date: 4 },
  { date: 5 },
  { date: 6 },
  { date: 7 },
  { date: 8 },
  { date: 9 },
  { date: 10 },
  { date: 11 },
  { date: 12 },
  { date: 13 },
  { date: 14 },
  { date: 15, today: true },
  { date: 16 },
  { date: 17 },
  { date: 18 },
  { date: 19 },
  { date: 20 },
  { date: 21 },
  { date: 22 },
  { date: 23 },
  { date: 24 },
  { date: 25 },
  { date: 26 },
  { date: 27 },
  { date: 28 },
  { date: 29 },
  { date: 30 },
  { date: 31 },
  { date: 1, muted: true },
];

const CalendarPage = () => {
  return (
    <div className="calendar-page">
      <aside className="calendar-sidebar">
        <div className="calendar-logo">
          <div className="calendar-logoMark">M</div>

          <div>
            <h2>
              Experience<span>Hub</span>
            </h2>
            <p>Share Experience. Create Impact.</p>
          </div>
        </div>

        <nav className="calendar-menu">
          <MenuItem icon={<Home />} text="Dashboard" />
          <MenuItem icon={<Briefcase />} text="Opportunities" />
          <MenuItem icon={<FileText />} text="My Applications" />
          <MenuItem icon={<UserCircle />} text="My Consultations" />
          <MenuItem icon={<CalendarDays />} text="Calendar" active />
          <MenuItem icon={<MessageCircle />} text="Messages" badge="2" />
          <MenuItem icon={<Bookmark />} text="Saved" />
          <MenuItem icon={<UserCircle />} text="My Profile" />
          <MenuItem icon={<Star />} text="Skills" />
          <MenuItem icon={<PieChart />} text="Analytics" />

          <div className="calendar-menuDivider"></div>

          <MenuItem icon={<BookOpen />} text="Resources" />
          <MenuItem icon={<CircleHelp />} text="Help Center" />
          <MenuItem icon={<Settings />} text="Settings" />
          <MenuItem icon={<LogOut />} text="Logout" />
        </nav>

        <div className="calendar-promo">
          <div className="calendar-plant"></div>

          <div>
            <h4>Stay on track</h4>
            <p>
              Never miss a session.
              <br />
              Sync your calendar.
            </p>

            <button>
              <CalendarDays size={16} />
              Connect Calendar
            </button>
          </div>
        </div>
      </aside>

      <main className="calendar-main">
        <header className="calendar-topbar">
          <div>
            <h1>Calendar</h1>
            <p>Manage your consultations and never miss a session.</p>
          </div>

          <div className="calendar-user">
            <div className="calendar-bell">
              <Bell size={24} />
              <span>3</span>
            </div>

            <div className="calendar-avatar">SJ</div>

            <strong>Sarah Johnson</strong>
            <ChevronDown size={20} />
          </div>
        </header>

        <div className="calendar-layout">
          <section className="calendar-center">
            <div className="calendar-controls">
              <div className="calendar-leftControls">
                <button className="calendar-secondaryBtn">Today</button>

                <div className="calendar-arrows">
                  <button>
                    <ChevronLeft size={20} />
                  </button>
                  <button>
                    <ChevronRight size={20} />
                  </button>
                </div>

                <button className="calendar-monthBtn">
                  May 2024
                  <ChevronDown size={18} />
                </button>
              </div>

              <div className="calendar-rightControls">
                <div className="calendar-viewSwitch">
                  <button className="active">Month</button>
                  <button>Week</button>
                  <button>Day</button>
                </div>

                <button className="calendar-bookBtn">
                  <Plus size={20} />
                  Book Consultation
                  <ChevronDown size={18} />
                </button>
              </div>
            </div>

            <div className="calendar-grid">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (day) => (
                  <div className="calendar-weekday" key={day}>
                    {day}
                  </div>
                )
              )}

              {days.map((day, index) => (
                <CalendarCell key={index} day={day} />
              ))}
            </div>

            <div className="calendar-legend">
              <Legend color="green" text="Upcoming" />
              <Legend color="blue" text="Completed" />
              <Legend color="yellow" text="Rescheduled" />
              <Legend color="red" text="Cancelled" />
            </div>
          </section>

          <aside className="calendar-rightbar">
            <MiniCalendar />

            <section className="calendar-sideCard calendar-filterCard">
              <div className="calendar-cardTitle">
                <h3>Filters</h3>
                <button>Clear</button>
              </div>

              <button className="calendar-filterSelect">
                <CalendarDays size={19} />
                <span>All Consultations</span>
                <ChevronDown size={18} />
              </button>
            </section>

            <section className="calendar-sideCard calendar-upcomingCard">
              <div className="calendar-cardTitle">
                <h3>Upcoming Sessions</h3>
                <button>View all</button>
              </div>

              <UpcomingSession
                day="15"
                weekDay="WED"
                title="Skills Development"
                time="3:30 PM – 4:30 PM"
                person="James Wilson"
                type="green"
              />

              <UpcomingSession
                day="17"
                weekDay="FRI"
                title="Job Search Strategy"
                time="11:00 AM – 12:00 PM"
                person="Priya Sharma"
                type="red"
              />

              <UpcomingSession
                day="20"
                weekDay="MON"
                title="Career Guidance"
                time="10:00 AM – 11:00 AM"
                person="James Wilson"
                type="green"
              />

              <button className="calendar-viewAllBtn">
                View All Consultations
              </button>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
};

const MenuItem = ({ icon, text, active, badge }) => (
  <div className={`calendar-menuItem ${active ? "active" : ""}`}>
    {icon}
    <span>{text}</span>
    {badge && <b>{badge}</b>}
  </div>
);

const CalendarCell = ({ day }) => {
  const events = !day.muted ? calendarEvents[day.date] || [] : [];

  return (
    <div
      className={`calendar-cell ${day.muted ? "muted" : ""}`}
    >
      <span className={`calendar-date ${day.today ? "today" : ""}`}>
        {day.date}
      </span>

      <div className="calendar-cellEvents">
        {events.map((event, index) => (
          <div
            key={index}
            className={`calendar-event calendar-event-${event.type}`}
          >
            <div>
              <strong>{event.time}</strong>
              <span>{event.title}</span>
            </div>

            {event.type !== "purple" && <Video size={14} />}
          </div>
        ))}
      </div>
    </div>
  );
};

const MiniCalendar = () => (
  <section className="calendar-sideCard mini-calendar">
    <h3>Mini Calendar</h3>

    <div className="mini-calendarHeader">
      <ChevronLeft size={19} />
      <strong>May 2024</strong>
      <ChevronRight size={19} />
    </div>

    <div className="mini-calendarGrid">
      {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
        <span className="mini-weekday" key={index}>
          {day}
        </span>
      ))}

      {[28, 29, 30].map((day) => (
        <span className="mini-muted" key={`previous-${day}`}>
          {day}
        </span>
      ))}

      {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
        <span
          key={day}
          className={day === 15 ? "mini-active" : ""}
        >
          {day}
        </span>
      ))}

      <span className="mini-muted">1</span>
    </div>
  </section>
);

const UpcomingSession = ({
  day,
  weekDay,
  title,
  time,
  person,
  type,
}) => (
  <div className="calendar-session">
    <div className={`calendar-sessionDate session-${type}`}>
      <small>MAY</small>
      <strong>{day}</strong>
      <small>{weekDay}</small>
    </div>

    <div className="calendar-sessionInfo">
      <h4>{title}</h4>
      <p>{time}</p>
      <p>with {person}</p>
      <span>
        <Video size={14} />
        Online
      </span>
    </div>

    <button className="calendar-moreBtn">⋮</button>
  </div>
);

const Legend = ({ color, text }) => (
  <div className="calendar-legendItem">
    <span className={`calendar-dot dot-${color}`}></span>
    <p>{text}</p>
  </div>
);

export default CalendarPage;