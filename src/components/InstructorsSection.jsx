import React, { useState } from 'react';
import { Star, Clock, ArrowRight, CheckCircle2, Mail, ExternalLink } from 'lucide-react';
import instOnimesh from '../assets/inst-onimesh.jpg';
import instAnny from '../assets/inst-anny.jpg';
import instSeth from '../assets/inst-seth.jpg';
import instShakib from '../assets/inst-shakib.jpg';

export const instructorsData = [
  {
    id: 'onimesh-chandro',
    name: 'Onimesh Chandro',
    role: 'Marketing Instructor',
    rating: '4.9',
    reviewsCount: '110 Reviews',
    coursesCount: '05',
    image: instOnimesh,
    bio: 'Senior Growth & Performance Marketing Director with 8+ years experience scaling ed-tech & SaaS platforms globally.',
    skills: ['Performance Marketing', 'SEO Strategy', 'Data Analytics', 'Growth Loops'],
    email: 'onimesh@class.edu',
    studentsCount: '12,450+'
  },
  {
    id: 'anny-rahman',
    name: 'Anny Rahman',
    role: 'Marketing Instructor',
    rating: '4.9',
    reviewsCount: '110 Reviews',
    coursesCount: '05',
    image: instAnny,
    bio: 'Product Branding & Social Media Specialist helping over 100 brands create compelling stories and omnichannel digital presence.',
    skills: ['Content Strategy', 'Brand Identity', 'Social Media Ads', 'Copywriting'],
    email: 'anny@class.edu',
    studentsCount: '9,800+'
  },
  {
    id: 'seth-rollens',
    name: 'Seth Rollens',
    role: 'Marketing Instructor',
    rating: '4.9',
    reviewsCount: '110 Reviews',
    coursesCount: '05',
    image: instSeth,
    bio: 'Full-Stack Developer & Tech Marketing Consultant specializing in technical SEO, conversion rate optimization, and automation.',
    skills: ['Technical SEO', 'CRO Optimization', 'Marketing Automation', 'Python & React'],
    email: 'seth@class.edu',
    studentsCount: '15,200+'
  },
  {
    id: 'shakib-khan',
    name: 'Shakib Khan',
    role: 'Marketing Instructor',
    rating: '4.9',
    reviewsCount: '110 Reviews',
    coursesCount: '05',
    image: instShakib,
    bio: 'Digital Advertising Strategist & Lead Campaign Manager overseeing multi-million dollar ad spends across Meta, Google, and TikTok.',
    skills: ['Google Ads', 'Meta Campaigns', 'Audience Insights', 'ROI Maximization'],
    email: 'shakib@class.edu',
    studentsCount: '11,100+'
  }
];

export default function InstructorsSection({ onNavigate, isStandalonePage = false }) {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  return (
    <section className={`instructors-section ${isStandalonePage ? 'page-version' : ''}`} id="instructors-snippet">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <h2 className="section-title">Our Experts</h2>
          <p className="section-subtitle">
            There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="instructors-grid">
          {instructorsData.map((instructor) => (
            <div key={instructor.id} className="instructor-card">
              {/* Photo Box */}
              <div className="instructor-photo-wrapper">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="instructor-photo"
                />
              </div>

              {/* Card Body */}
              <div className="instructor-card-body">
                <span className="instructor-role">{instructor.role}</span>
                <h3 className="instructor-name">{instructor.name}</h3>

                <div className="instructor-rating-row">
                  <div className="rating-score">
                    <Star size={14} className="star-icon" fill="#F59E0B" color="#F59E0B" />
                    <span>{instructor.rating}</span>
                  </div>
                  <span className="reviews-label">({instructor.reviewsCount})</span>
                </div>

                <div className="instructor-card-divider"></div>

                {/* Footer with Course Count and Circle Arrow */}
                <div className="instructor-card-footer">
                  <div className="course-count-pill">
                    <Clock size={14} className="clock-icon" />
                    <span>Course: {instructor.coursesCount}</span>
                  </div>

                  <button
                    className="btn-instructor-arrow"
                    onClick={() => setSelectedInstructor(instructor)}
                    aria-label={`View profile of ${instructor.name}`}
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructor Modal Details */}
      {selectedInstructor && (
        <div className="modal-overlay" onClick={() => setSelectedInstructor(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedInstructor(null)}>×</button>
            <div className="modal-header">
              <img src={selectedInstructor.image} alt={selectedInstructor.name} className="modal-avatar" />
              <div>
                <span className="instructor-role">{selectedInstructor.role}</span>
                <h3 className="modal-instructor-name">{selectedInstructor.name}</h3>
                <div className="instructor-rating-row">
                  <div className="rating-score">
                    <Star size={14} fill="#F59E0B" color="#F59E0B" />
                    <span>{selectedInstructor.rating}</span>
                  </div>
                  <span className="reviews-label">({selectedInstructor.reviewsCount}) • {selectedInstructor.studentsCount} Students</span>
                </div>
              </div>
            </div>

            <p className="modal-bio">{selectedInstructor.bio}</p>

            <div className="modal-skills-section">
              <h4>Key Expertise</h4>
              <div className="skills-tags">
                {selectedInstructor.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tag">
                    <CheckCircle2 size={12} color="#6355EC" /> {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-actions">
              <button 
                className="btn-modal-primary"
                onClick={() => {
                  setSelectedInstructor(null);
                  if (onNavigate) onNavigate('courses');
                }}
              >
                View Instructor Courses <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
