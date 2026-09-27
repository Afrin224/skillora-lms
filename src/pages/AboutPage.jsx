import React from 'react';
import { Target, ShieldCheck, Zap, Globe, Heart, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import LearnAnywhereSection from '../components/LearnAnywhereSection';

export default function AboutPage({ onNavigate }) {
  const values = [
    {
      icon: Target,
      title: 'Outcome-Driven Curriculum',
      desc: 'Every lesson is designed to teach practical, in-demand skills needed in real corporate and freelance projects.'
    },
    {
      icon: ShieldCheck,
      title: 'Industry Recognized Certificates',
      desc: 'Earn verifiable digital certificates shareable on LinkedIn and backed by verified skill assessments.'
    },
    {
      icon: Zap,
      title: 'Live Interactive Workshops',
      desc: 'Participate in weekly live coding sessions, design critiques, and direct Q&A office hours with instructors.'
    },
    {
      icon: Globe,
      title: 'Global Student Community',
      desc: 'Connect with over 50,000+ ambitious peers from 80+ countries in our private Discord and Slack groups.'
    }
  ];

  return (
    <div className="about-page-root">
      {/* Page Header */}
      <div className="page-header-banner">
        <div className="section-container">
          <div className="badge-pill-header">
            <Heart size={14} color="#EF4444" fill="#EF4444" />
            <span>Our Mission & Vision</span>
          </div>
          <h1 className="page-main-title">Reinventing Digital Learning</h1>
          <p className="page-main-subtitle">
            We believe world-class education should be accessible, engaging, and directly connected to modern career success.
          </p>
        </div>
      </div>

      {/* Learn From Anywhere Snippet */}
      <LearnAnywhereSection onNavigate={onNavigate} />

      {/* Values & Features */}
      <section className="about-values-section">
        <div className="section-container">
          <div className="section-header-center">
            <h2 className="section-title">Why Students Choose Skillora?</h2>
            <p className="section-subtitle">
              Built from the ground up for modern remote learning with unmatched support and verified outcomes.
            </p>
          </div>

          <div className="values-grid">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="value-card">
                  <div className="value-icon-box">
                    <Icon size={24} color="#6355EC" />
                  </div>
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-desc">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <div className="section-container about-cta-container">
        <div className="about-cta-card">
          <h2 className="about-cta-title">Ready to become a champion?</h2>
          <p className="about-cta-desc">
            Join thousands of learners achieving their career dreams today.
          </p>
          <button 
            className="btn-lets-learn"
            onClick={() => onNavigate('enroll')}
          >
            <span>Enroll in a Course</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
