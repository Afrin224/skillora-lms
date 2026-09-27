import React, { useState, useEffect } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, BookOpen, Clock, Calendar, Star, Award } from 'lucide-react';
import { coursesData } from '../components/PopularCoursesSection';

export default function EnrollPage({ onNavigate, initialCourseId }) {
  const [selectedCourseId, setSelectedCourseId] = useState(initialCourseId || 'artificial-intelligence');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [batchType, setBatchType] = useState('weekend');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialCourseId) {
      setSelectedCourseId(initialCourseId);
    }
  }, [initialCourseId]);

  const selectedCourse = coursesData.find(c => c.id === selectedCourseId) || coursesData[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName && email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="enroll-page-root">
      {/* Page Header */}
      <div className="enroll-header-banner">
        <div className="enroll-header-inner">
          <div className="enroll-badge-pill">
            <Sparkles size={14} color="#6355EC" />
            <span>Fast-Track Your Career</span>
          </div>
          <h1 className="enroll-page-title">Enroll in Your Next Course</h1>
          <p className="enroll-page-subtitle">
            Secure your seat today and get instant lifetime access to curriculum, live workshops, and mentor support.
          </p>
        </div>
      </div>

      <div className="enroll-content-wrapper">
        {submitted ? (
          <div className="enroll-success-box">
            <div className="success-icon-badge">
              <CheckCircle2 size={64} color="#10B981" />
            </div>
            <h2>Congratulations, {fullName}! 🎉</h2>
            <p className="success-msg">
              Your enrollment for <strong>{selectedCourse.title}</strong> has been successfully confirmed.
            </p>
            <div className="success-details-card">
              <div className="success-detail-row">
                <span>Course:</span>
                <strong>{selectedCourse.title}</strong>
              </div>
              <div className="success-detail-row">
                <span>Instructor:</span>
                <strong>{selectedCourse.instructor}</strong>
              </div>
              <div className="success-detail-row">
                <span>Batch Schedule:</span>
                <strong>{batchType === 'weekend' ? 'Weekend Live Cohort (Sat-Sun)' : 'Self-Paced Flexible Access'}</strong>
              </div>
              <div className="success-detail-row">
                <span>Confirmation sent to:</span>
                <strong>{email}</strong>
              </div>
            </div>

            <div className="success-actions">
              <button className="btn-lets-learn" onClick={() => onNavigate('home')}>
                Back to Home
              </button>
              <button className="btn-secondary-white" onClick={() => setSubmitted(false)}>
                Enroll in Another Course
              </button>
            </div>
          </div>
        ) : (
          <div className="enroll-grid">
            {/* Left Column: Form */}
            <div className="enroll-form-card">
              <h2 className="form-card-title">Student Registration</h2>
              <p className="form-card-subtitle">Fill in your information to get started immediately.</p>

              <form onSubmit={handleSubmit} className="enroll-form">
                {/* Select Course */}
                <div className="form-group">
                  <label className="form-label">Select Course Program *</label>
                  <select 
                    className="form-select"
                    value={selectedCourseId}
                    onChange={(e) => setSelectedCourseId(e.target.value)}
                  >
                    {coursesData.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.title} ({c.price})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    className="form-input"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    className="form-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label className="form-label">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="form-input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                {/* Batch Mode Selection */}
                <div className="form-group">
                  <label className="form-label">Preferred Learning Mode</label>
                  <div className="learning-modes-options">
                    <label className={`mode-option-label ${batchType === 'weekend' ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="batch"
                        value="weekend"
                        checked={batchType === 'weekend'}
                        onChange={() => setBatchType('weekend')}
                      />
                      <div>
                        <strong>Weekend Live Cohort</strong>
                        <span>Live interactive sessions every Saturday & Sunday</span>
                      </div>
                    </label>

                    <label className={`mode-option-label ${batchType === 'self-paced' ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="batch"
                        value="self-paced"
                        checked={batchType === 'self-paced'}
                        onChange={() => setBatchType('self-paced')}
                      />
                      <div>
                        <strong>Self-Paced Instant Access</strong>
                        <span>Watch anytime at your own speed with 1-on-1 mentor support</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Guarantee Banner */}
                <div className="guarantee-banner">
                  <ShieldCheck size={20} color="#10B981" />
                  <span>30-Day 100% Money-Back Guarantee. No Questions Asked.</span>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn-submit-enroll">
                  <span>Complete Enrollment ({selectedCourse.price})</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>

            {/* Right Column / Mobile: Below Form - Course Summary Card */}
            <div className="enroll-summary-card">
              <div className="summary-badge">{selectedCourse.badge}</div>
              <h3 className="summary-course-title">{selectedCourse.title}</h3>
              <p className="summary-course-desc">{selectedCourse.description}</p>

              <div className="summary-rating-row">
                <Star size={16} fill="#F59E0B" color="#F59E0B" />
                <span className="rating-bold">{selectedCourse.rating}</span>
                <span className="rating-muted">({selectedCourse.reviews} student reviews)</span>
              </div>

              <div className="summary-perks-list">
                <div className="perk-item">
                  <BookOpen size={16} color="#6355EC" />
                  <span>{selectedCourse.lessons} Modules & Hands-on Projects</span>
                </div>
                <div className="perk-item">
                  <Clock size={16} color="#6355EC" />
                  <span>{selectedCourse.duration} of Video Content</span>
                </div>
                <div className="perk-item">
                  <Award size={16} color="#6355EC" />
                  <span>Official Certificate of Completion</span>
                </div>
                <div className="perk-item">
                  <Calendar size={16} color="#6355EC" />
                  <span>Lifetime Access & Free Future Updates</span>
                </div>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-pricing-row">
                <span className="price-label">Total Tuition:</span>
                <div className="price-values">
                  <span className="old-tuition">{selectedCourse.oldPrice}</span>
                  <span className="current-tuition">{selectedCourse.price}</span>
                </div>
              </div>

              <div className="instructor-badge-box">
                <span>Instructor: <strong>{selectedCourse.instructor}</strong></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
