import React from 'react';
import { ArrowUpRight, Award, Layers } from 'lucide-react';
import outdoorStudentImg from '../assets/outdoor-student.jpg';

export default function LearnAnywhereSection({ onNavigate }) {
  const stats = [
    { number: '500+', label: 'Enrolled' },
    { number: '18+', label: 'Courses' },
    { number: '20+', label: 'Instructor' }
  ];

  return (
    <section className="learn-anywhere-section" id="about-snippet">
      <div className="section-container">
        <div className="learn-anywhere-layout">
          {/* Left Column: Image with floating badges */}
          <div className="learn-image-col">
            <div className="learn-image-wrapper">
              <img
                src={outdoorStudentImg}
                alt="Student studying with laptop in park"
                className="outdoor-student-photo"
              />

              {/* Floating Badge: 10+ Awards */}
              <div className="learn-floating-badge badge-awards">
                <div className="awards-icon-box">
                  <Award size={20} color="#F59E0B" />
                </div>
                <span className="badge-title">10+ Awards</span>
              </div>

              {/* Floating Badge: Organized Syllabus */}
              <div className="learn-floating-badge badge-syllabus">
                <div className="syllabus-icon-box">
                  <Layers size={18} color="#EF4444" />
                </div>
                <span className="badge-title">Organized Syllabus</span>
              </div>
            </div>
          </div>

          {/* Right Column: Content and Stats */}
          <div className="learn-content-col">
            <h2 className="learn-title">Learn From Anywhere.</h2>
            
            <p className="learn-description">
              There are many variations of passages of Lorem Ipsum available, 
              but the majority have suffered alteration in some form. 
              There are many variations.
            </p>

            <div className="stats-row">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="learn-cta-wrapper">
              <button
                className="btn-start-learning"
                onClick={() => onNavigate('courses')}
              >
                <span>Start Learning</span>
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
