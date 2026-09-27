import React from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  Clock, 
  Users, 
  CheckCircle2, 
  Settings, 
  HelpCircle, 
  Search, 
  Bell, 
  Moon, 
  Download,
  User
} from 'lucide-react';

export default function Dashboard({ onNavigate }) {
  // Retrieve currently logged-in user from localStorage, or use a default mock profile
  const currentUser = JSON.parse(localStorage.getItem('skillora_current_user') || '{}');
  const studentName = currentUser.fullName || 'Student';
  const studentEmail = currentUser.email || 'student@skillora.com';

  return (
    <div className="dashboard-layout-root">
      {/* Sidebar Navigation */}
      <aside className="dashboard-sidebar">


        <div className="sidebar-menu-section">
          <span className="menu-category-title">MAIN MENU</span>
          <button className="sidebar-nav-item active">
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </button>
          <button className="sidebar-nav-item">
            <BarChart3 size={18} />
            <span>Analytics</span>
          </button>
          <button className="sidebar-nav-item highlight">
            <Clock size={18} />
            <span>Time Management</span>
          </button>
          <button className="sidebar-nav-item">
            <Users size={18} />
            <span>Student</span>
          </button>
          <button className="sidebar-nav-item">
            <CheckCircle2 size={18} />
            <span>Approval</span>
          </button>
        </div>

        <div className="sidebar-menu-section settings-section">
          <span className="menu-category-title">SETTINGS</span>
          <button className="sidebar-nav-item">
            <Settings size={18} />
            <span>Settings</span>
          </button>
          <button className="sidebar-nav-item">
            <HelpCircle size={18} />
            <span>Help & Support</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main-content">
        {/* Top Header Bar */}
        <header className="dashboard-top-bar">
          <div className="search-bar-wrapper">
            <Search size={16} color="#94a3b8" />
            <input type="text" placeholder="Search framework..." className="dashboard-search-input" />
          </div>
          <div className="top-bar-actions">
            <button className="icon-btn-top"><Bell size={18} /></button>
            <button className="icon-btn-top"><Moon size={18} /></button>
            <button className="btn-download-report">
              <Download size={16} /> Download
            </button>
          </div>
        </header>

        {/* Dashboard Body Content */}
        <div className="dashboard-content-scroll">
          
          {/* Student Details Card */}
          <section className="student-details-card">
            <div className="student-details-header">
              <h3>Student Details</h3>
              <div className="filter-dropdown-pill">
                <span>Monthly</span>
                <span>▼</span>
              </div>
            </div>

            <div className="student-profile-row">
              <div className="student-avatar-wrap" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                backgroundColor: '#0d9488', 
                color: 'white',
                fontSize: '32px',
                fontWeight: 'bold'
              }}>
                {studentName.charAt(0).toUpperCase()}
              </div>
              <div className="student-info-grid">
                <div className="info-block">
                  <span className="info-label">Student Name</span>
                  <span className="info-val highlight-name">{studentName}</span>
                </div>
                <div className="info-block">
                  <span className="info-label">ID</span>
                  <span className="info-val">ID: 2021-0001</span>
                </div>
                <div className="info-block">
                  <span className="info-label">Number</span>
                  <span className="info-val">(555) 123-4567</span>
                </div>
                <div className="info-block">
                  <span className="info-label">Email</span>
                  <span className="info-val">{studentEmail}</span>
                </div>
                <div className="info-block">
                  <span className="info-label">Address</span>
                  <span className="info-val">123 Elm Street</span>
                </div>
              </div>
            </div>

            {/* Attendance Metric Badges */}
            <div className="attendance-metric-badges">
              <div className="metric-badge blue">
                <span className="badge-count">13 Days</span>
                <span className="badge-desc">Total Attendance</span>
              </div>
              <div className="metric-badge green">
                <span className="badge-count">7 Days</span>
                <span className="badge-desc">Late Attendance</span>
              </div>
              <div className="metric-badge yellow">
                <span className="badge-count">1 Days</span>
                <span className="badge-desc">Undertime Attendance</span>
              </div>
              <div className="metric-badge red">
                <span className="badge-count">2 Days</span>
                <span className="badge-desc">Total Absent</span>
              </div>
            </div>
          </section>

          {/* Bottom Grid: Class Days & Summary Charts */}
          <div className="dashboard-grid-split">
            {/* Left Column: Class Days & Attendance Rate */}
            <div className="dashboard-left-col">
              <div className="card-box class-days-box">
                <div className="box-header-row">
                  <span className="box-title">Class Days</span>
                  <span className="box-subtitle">Class days for Monthly</span>
                </div>
                <div className="big-stat-display">23 Days</div>
              </div>

              <div className="card-box attendance-rate-box">
                <div className="box-header-row">
                  <span className="box-title">Attendance Rate</span>
                  <span className="pill-tag">This Year</span>
                </div>
                <div className="rate-content-row">
                  <div className="big-stat-display">56%</div>
                  <div className="mini-chart-mock">
                    <div className="chart-bar-pill blue-pill">January 57%</div>
                    <div className="chart-bar-pill orange-pill">February 55%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Summary - Caleb White */}
            <div className="dashboard-right-col">
              <div className="card-box summary-box">
                <h4 className="summary-main-title">Summary - {studentName}</h4>
                
                <div className="summary-bars-grid">
                  <div className="summary-bar-column">
                    <span className="bar-top-num">13</span>
                    <div className="bar-vertical blue-fill" style={{ height: '140px' }}></div>
                    <span className="bar-bottom-label">Attendance</span>
                  </div>

                  <div className="summary-bar-column">
                    <span className="bar-top-num">07</span>
                    <div className="bar-vertical green-fill" style={{ height: '100px' }}></div>
                    <span className="bar-bottom-label">Late</span>
                  </div>

                  <div className="summary-bar-column">
                    <span className="bar-top-num">01</span>
                    <div className="bar-vertical orange-fill" style={{ height: '40px' }}></div>
                    <span className="bar-bottom-label">Undertime</span>
                  </div>

                  <div className="summary-bar-column">
                    <span className="bar-top-num">00</span>
                    <div className="bar-vertical red-fill" style={{ height: '15px' }}></div>
                    <span className="bar-bottom-label">Absent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}