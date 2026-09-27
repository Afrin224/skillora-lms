import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, BookOpen, GraduationCap, Users, Info, UserPlus, Video, ChevronDown, LayoutDashboard, LogOut } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Check login state and handle clicks outside dropdown
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Load active user from storage
    const user = localStorage.getItem('skillora_current_user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }

    // Listen to storage updates if user logs in/out in another flow
    const handleStorageChange = () => {
      const updatedUser = localStorage.getItem('skillora_current_user');
      setCurrentUser(updatedUser ? JSON.parse(updatedUser) : null);
    };
    window.addEventListener('storage', handleStorageChange);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', handleStorageChange);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: BookOpen },
    { id: 'courses', label: 'Courses', icon: GraduationCap },
    { id: 'instructors', label: 'Instructors', icon: Users },
    { id: 'about', label: 'About us', icon: Info },
    { id: 'live', label: 'Live recordings', icon: Video },
    { id: 'enroll', label: 'Enroll Now', icon: UserPlus, isCta: true },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    localStorage.removeItem('skillora_current_user');
    setCurrentUser(null);
    setDropdownOpen(false);
    handleNavClick('home');
  };

  // Get first letter of user's name for the avatar badge
  const userInitial = currentUser?.fullName ? currentUser.fullName.charAt(0).toUpperCase() : 'U';

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <div className="brand-logo" onClick={() => handleNavClick('home')}>
          <div className="logo-icon-wrapper">
            <svg
              viewBox="0 0 64 64"
              width="42"
              height="42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 18C18 15 27 18 32 23V55C25 50 17 48 8 50V18Z" fill="#2563EB" />
              <path d="M56 18C46 15 37 18 32 23V55C39 50 47 48 56 50V18Z" fill="#7C3AED" />
              <circle cx="32" cy="17" r="6" fill="#F59E0B" />
              <path d="M20 13L32 7L44 13L32 19L20 13Z" fill="#111827" />
              <path d="M39 16V23" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
              <path d="M50 7V11M48 9H52" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <span className="logo-text">Skillora</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${activePage === item.id ? 'active' : ''} ${item.isCta ? 'nav-link-cta' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Actions: Profile Menu / Auth Button & Mobile Toggle */}
        <div className="nav-right-actions" ref={dropdownRef}>
          {currentUser ? (
            <div className="profile-menu-container" style={{ position: 'relative' }}>
              <button 
                className="profile-pill-btn"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#f1f5f9',
                  border: '1px solid #e2e8f0',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontWeight: 500,
                  color: '#1e293b'
                }}
              >
                <span style={{
                  width: '28px',
                  height: '28px',
                  backgroundColor: '#0d9488',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  fontSize: '14px'
                }}>
                  {userInitial}
                </span>
                <span className="profile-name-text" style={{overflow:'hidden',maxWidth:'100px',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{currentUser.fullName}</span>
                <ChevronDown size={14} />
              </button>

              {dropdownOpen && (
                <div className="profile-dropdown-menu" style={{
                  position: 'absolute',
                  right: 0,
                  top: '42px',
                  background: 'white',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  width: '180px',
                  zIndex: 100,
                  overflow: 'hidden'
                }}>
                  <button 
                    className="dropdown-item"
                    onClick={() => handleNavClick('dashboard')}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '14px',
                      color: '#334155'
                    }}
                  >
                    <LayoutDashboard size={16} />
                    <span>Student Dashboard</span>
                  </button>
                  <button 
                    className="dropdown-item logout-item"
                    onClick={handleLogout}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      background: 'none',
                      border: 'none',
                      borderTop: '1px solid #f1f5f9',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '14px',
                      color: '#ef4444'
                    }}
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              className="btn-login"
              onClick={() => handleNavClick('login')}
            >
              <span>Log In</span>
              <ArrowRight size={16} />
            </button>
          )}

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`mobile-nav-item ${activePage === item.id ? 'active' : ''}`}
              >
                <Icon size={18} className="mobile-item-icon" />
                <span>{item.label}</span>
              </button>
            );
          })}
          
          {currentUser && (
            <button
              onClick={() => handleNavClick('dashboard')}
              className={`mobile-nav-item ${activePage === 'dashboard' ? 'active' : ''}`}
            >
              <LayoutDashboard size={18} className="mobile-item-icon" />
              <span>Student Dashboard</span>
            </button>
          )}

          <div className="mobile-drawer-footer">
            {currentUser ? (
              <button
                className="btn-primary-mobile"
                onClick={handleLogout}
                style={{ backgroundColor: '#ef4444', color: '#fff' }}
              >
                Logout <LogOut size={18} />
              </button>
            ) : (
              <button
                className="btn-primary-mobile"
                onClick={() => handleNavClick('enroll')}
              >
                Get Started Free <ArrowRight size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}