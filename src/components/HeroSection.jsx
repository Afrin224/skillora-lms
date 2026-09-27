import React from 'react';
import { ArrowUpRight, Check, Star, Award, Target } from 'lucide-react';
import heroStudentImg from '../assets/Hero_student-image.png';

export default function HeroSection({ onNavigate }) {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Content Column */}
        <div className="hero-content">
          <h1 className="hero-title">
            Learn Skills Today<br />
          Become a Champion Tomorrow.
          </h1>
          
          <p className="hero-description">
            Bodily exercise, when compulsory, does no harm to the body; but knowledge which is acquired under compulsion obtains no hold on the mind.
          </p>

          <ul className="hero-checklist">
            <li className="hero-checklist-item">
              <span className="check-icon-circle">
                <Check size={14} strokeWidth={3} />
              </span>
              <span>100+ Exclusive online course</span>
            </li>
            <li className="hero-checklist-item">
              <span className="check-icon-circle">
                <Check size={14} strokeWidth={3} />
              </span>
              <span>Best Instructor on live course</span>
            </li>
            <li className="hero-checklist-item">
              <span className="check-icon-circle">
                <Check size={14} strokeWidth={3} />
              </span>
              <span>Get certificate</span>
            </li>
          </ul>

          <div className="hero-action-row">
            <button
              className="btn-lets-learn"
              onClick={() => onNavigate('courses')}
            >
              <span>Let's Learn</span>
              <ArrowUpRight size={18} />
            </button>

            <div className="hero-ratings-widget">
              <div className="stars-group">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="star-filled" fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <span className="reviews-text">(300+ reviews)</span>
            </div>
          </div>
        </div>

        {/* Right Visual Graphic Column */}
        <div className="hero-visual-col">
          <div className="hero-visual-wrapper">
            {/* Organic Shape Backgrounds */}
            <div className="organic-blob-red"></div>
            <div className="circle-yellow"></div>
            
            {/* Main Student Image */}
            <div className="hero-image-container">
              <img
                src={heroStudentImg}
                alt="Student learning with laptop"
                className="hero-student-photo"
              />
            </div>

            {/* Floating Badge 1: Trophy */}
            <div className="floating-badge badge-trophy">
              <div className="badge-icon-trophy">
                <Award size={20} color="#F59E0B" />
              </div>
            </div>

            {/* Floating Badge 2: Target */}
            <div className="floating-badge badge-target">
              <div className="badge-icon-target">
                <Target size={22} color="#EF4444" />
              </div>
            </div>

            {/* Decorative dots */}
            <div className="decor-dots-top"></div>
            <div className="decor-dots-bottom"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
