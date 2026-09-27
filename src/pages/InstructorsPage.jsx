import React from 'react';
import { Award, Users, Star, BookOpen, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import InstructorsSection, { instructorsData } from '../components/InstructorsSection';

export default function InstructorsPage({ onNavigate }) {
  return (
    <div className="instructors-page-root">
      {/* Page Header */}
      <div className="page-header-banner">
        <div className="section-container">
          <div className="badge-pill-header">
            <Sparkles size={14} color="#6355EC" />
            <span>World-Class Industry Mentors</span>
          </div>
          <h1 className="page-main-title">Meet Our Expert Instructors</h1>
          <p className="page-main-subtitle">
            Learn directly from leaders working at top tech firms, creative agencies, and hyper-growth startups.
          </p>

          <div className="instructor-stats-summary">
            <div className="summary-stat-item">
              <span className="summary-number">20+</span>
              <span className="summary-label">Top Tier Mentors</span>
            </div>
            <div className="summary-stat-divider"></div>
            <div className="summary-stat-item">
              <span className="summary-number">4.9★</span>
              <span className="summary-label">Average Instructor Rating</span>
            </div>
            <div className="summary-stat-divider"></div>
            <div className="summary-stat-item">
              <span className="summary-number">100%</span>
              <span className="summary-label">Live Hands-on Guidance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <InstructorsSection onNavigate={onNavigate} isStandalonePage={true} />

      {/* Instructor Application CTA */}
      <div className="section-container instructor-join-banner">
        <div className="join-banner-card">
          <div className="join-banner-content">
            <h3 className="join-banner-title">Become an Instructor at CLASS</h3>
            <p className="join-banner-desc">
              Share your expertise with tens of thousands of passionate students across the globe and earn competitive compensation.
            </p>
            <button 
              className="btn-lets-learn"
              onClick={() => onNavigate('enroll')}
            >
              <span>Apply to Teach</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
