import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import InstructorsPage from './pages/InstructorsPage';
import AboutPage from './pages/AboutPage';
import LiveRecordingsPage from './pages/LiveRecordingsPage';
import EnrollPage from './pages/EnrollPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/Dashboard';
import PlaceholderPage from './pages/PlaceholderPage';
import CertificatesPage from './pages/CertificatesPage';
import CareersPage from './pages/CareersPage';
import BlogPage from './pages/BlogPage';
import PartnersPage from './pages/PartnersPage';
import HelpCenterPage from './pages/HelpCenterPage';
import FAQsPage from './pages/FAQsPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCourseId, setSelectedCourseId] = useState('artificial-intelligence');

  const handleNavigate = (pageId, extraParam) => {
    if (extraParam) {
      if (pageId === 'course-details' || pageId === 'enroll') {
        setSelectedCourseId(extraParam);
      }
    }
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCourseSelect = (courseId) => {
    setSelectedCourseId(courseId);
    setActivePage('course-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category.categoryKey || 'all');
    setActivePage('courses');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* Universal Navigation Bar */}
      <Navbar activePage={activePage} setActivePage={handleNavigate} />

      {/* Main View Router */}
      <main className="main-content">
        {activePage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onSelectCategory={handleCategorySelect} 
            onSelectCourse={handleCourseSelect}
          />
        )}

        {activePage === 'courses' && (
          <CoursesPage 
            onNavigate={handleNavigate} 
            onSelectCourse={handleCourseSelect}
            initialCategory={selectedCategory} 
          />
        )}

        {activePage === 'course-details' && (
          <CourseDetailsPage 
            courseId={selectedCourseId}
            onNavigate={handleNavigate}
            onSelectCourse={handleCourseSelect}
          />
        )}

        {activePage === 'instructors' && (
          <InstructorsPage 
            onNavigate={handleNavigate} 
          />
        )}

        {activePage === 'about' && (
          <AboutPage 
            onNavigate={handleNavigate} 
          />
        )}

        {activePage === 'live' && (
          <LiveRecordingsPage 
            onNavigate={handleNavigate} 
          />
        )}

        {activePage === 'enroll' && (
          <EnrollPage 
            onNavigate={handleNavigate} 
            initialCourseId={selectedCourseId}
          />
        )}

        {activePage === 'login' && (
          <LoginPage 
            onNavigate={handleNavigate} 
          />
        )}
        {/* Add Dashboard Page Route Here */}
        {activePage === 'dashboard' && (
          <DashboardPage 
            onNavigate={handleNavigate} 
          />
        )}

        {/* Actual Pages */}
        {activePage === 'certificates' && <CertificatesPage />}
        {activePage === 'careers' && <CareersPage />}
        {activePage === 'blog' && <BlogPage />}
        {activePage === 'partners' && <PartnersPage />}
        {activePage === 'help' && <HelpCenterPage />}
        {activePage === 'faqs' && <FAQsPage />}
        {activePage === 'contact' && <ContactPage />}
        {activePage === 'terms' && <TermsPage />}
        {activePage === 'privacy' && <PlaceholderPage title="Privacy Policy" />}
        {activePage === 'cookies' && <PlaceholderPage title="Cookie Policy" />}
      </main>

      {/* Universal Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
