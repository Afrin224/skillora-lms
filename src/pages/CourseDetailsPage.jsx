import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Clock, 
  BookOpen, 
  User, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Play, 
  FileText, 
  Award, 
  ShieldCheck, 
  Globe, 
  Calendar, 
  ArrowLeft, 
  Heart, 
  Share2, 
  Check, 
  Sparkles,
  Layers,
  HelpCircle,
  Video
} from 'lucide-react';
import { coursesData } from '../components/PopularCoursesSection';
import { coursesCurriculumData } from '../data/coursesCurriculumData';

export default function CourseDetailsPage({ 
  courseId = 'artificial-intelligence', 
  onNavigate, 
  onSelectCourse 
}) {
  // Find course basic data and deep curriculum data
  const baseCourse = coursesData.find(c => c.id === courseId) || coursesData[0];
  const curriculum = coursesCurriculumData[courseId] || coursesCurriculumData['artificial-intelligence'];

  // State for expanded chapters: initialize first chapter open by default
  const [expandedChapters, setExpandedChapters] = useState([1]);
  const [allExpanded, setAllExpanded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Scroll to top on course change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setExpandedChapters([1]);
  }, [courseId]);

  const toggleChapter = (chapterNumber) => {
    setExpandedChapters(prev => 
      prev.includes(chapterNumber)
        ? prev.filter(num => num !== chapterNumber)
        : [...prev, chapterNumber]
    );
  };

  const toggleAllChapters = () => {
    if (allExpanded) {
      setExpandedChapters([]);
      setAllExpanded(false);
    } else {
      const allNumbers = curriculum.chapters.map(ch => ch.chapterNumber);
      setExpandedChapters(allNumbers);
      setAllExpanded(true);
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="course-details-page-root">
      {/* Breadcrumb Bar */}
      <div className="cd-breadcrumb-bar">
        <div className="section-container cd-breadcrumb-inner">
          <button 
            className="cd-back-btn" 
            onClick={() => onNavigate('courses')}
          >
            <ArrowLeft size={16} />
            <span>Back to Courses</span>
          </button>
          <div className="cd-breadcrumb-trail">
            <span onClick={() => onNavigate('home')} className="cd-crumb-link">Home</span>
            <span className="cd-crumb-sep">/</span>
            <span onClick={() => onNavigate('courses')} className="cd-crumb-link">Courses</span>
            <span className="cd-crumb-sep">/</span>
            <span className="cd-crumb-active">{baseCourse.categoryName}</span>
          </div>
        </div>
      </div>

      {/* Hero Header Banner */}
      <section className="cd-hero-banner">
        <div className="section-container cd-hero-grid">
          {/* Left Hero Content */}
          <div className="cd-hero-left">
            <div className="cd-badge-row">
              <span className="cd-badge-pill">{baseCourse.badge || 'Trending'}</span>
              <span className="cd-category-tag">{baseCourse.categoryName}</span>
            </div>

            <h1 className="cd-course-title">{baseCourse.title}</h1>
            <p className="cd-course-tagline">{curriculum.tagline}</p>

            {/* Rating & Enrollment Meta */}
            <div className="cd-hero-meta-row">
              <div className="cd-rating-box">
                <span className="cd-rating-number">{baseCourse.rating || 4.9}</span>
                <div className="cd-stars-group">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <span className="cd-reviews-count">({baseCourse.reviews || 390} ratings)</span>
              </div>
              <span className="cd-meta-divider">•</span>
              <div className="cd-students-count">
                <strong>{baseCourse.students || '3,700'}</strong> students enrolled
              </div>
            </div>

            {/* Instructor & Update Meta */}
            <div className="cd-author-meta-row">
              <div className="cd-author-badge">
                <div className="cd-author-avatar-placeholder">
                  {baseCourse.instructor.charAt(0)}
                </div>
                <span>Created by <strong>{baseCourse.instructor}</strong></span>
              </div>
              <div className="cd-meta-item">
                <Calendar size={14} />
                <span>Last updated {curriculum.lastUpdated}</span>
              </div>
              <div className="cd-meta-item">
                <Globe size={14} />
                <span>{curriculum.language}</span>
              </div>
            </div>
          </div>

          {/* Right Floating Purchase Card (Desktop Placement) */}
          <div className="cd-floating-sidebar">
            <div className="cd-purchase-card">
              {/* Media Preview Box */}
              <div className="cd-preview-media">
                <img 
                  src={baseCourse.image} 
                  alt={baseCourse.title} 
                  className="cd-preview-img"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&auto=format&fit=crop&q=80';
                  }}
                />
              </div>

              {/* Price Row */}
              <div className="cd-card-price-area">
                <div className="cd-price-stack">
                  <span className="cd-card-current-price">{baseCourse.price}</span>
                  <span className="cd-card-old-price">{baseCourse.oldPrice}</span>
                </div>
                <span className="cd-discount-tag">45% OFF</span>
              </div>

              {/* Action Buttons */}
              <div className="cd-card-actions">
                <button 
                  className="cd-btn-enroll-now"
                  onClick={() => onNavigate('enroll', baseCourse.id)}
                >
                  Enroll Now
                </button>
                <div className="cd-secondary-action-row">
                  <button 
                    className={`cd-btn-secondary ${isWishlisted ? 'wishlisted' : ''}`}
                    onClick={() => setIsWishlisted(!isWishlisted)}
                  >
                    <Heart size={16} fill={isWishlisted ? '#ef4444' : 'none'} color={isWishlisted ? '#ef4444' : 'currentColor'} />
                    <span>{isWishlisted ? 'Wishlisted' : 'Wishlist'}</span>
                  </button>
                  <button 
                    className="cd-btn-secondary"
                    onClick={handleShare}
                  >
                    <Share2 size={16} />
                    <span>{copiedLink ? 'Copied!' : 'Share'}</span>
                  </button>
                </div>
              </div>

              <div className="cd-guarantee-notice">
                <ShieldCheck size={16} color="#10B981" />
                <span>30-Day Full Money-Back Guarantee</span>
              </div>

              {/* Course Includes Checklist */}
              <div className="cd-features-checklist">
                <h4 className="cd-features-title">This course includes:</h4>
                <ul className="cd-features-list">
                  <li>
                    <Video size={15} color="#4F46E5" />
                    <span>{curriculum.totalHours} on-demand video</span>
                  </li>
                  <li>
                    <Layers size={15} color="#4F46E5" />
                    <span>{curriculum.totalChapters} modules & {curriculum.totalLectures} lectures</span>
                  </li>
                  <li>
                    <FileText size={15} color="#4F46E5" />
                    <span>18 downloadable resources & cheat sheets</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} color="#4F46E5" />
                    <span>Full lifetime access on mobile and TV</span>
                  </li>
                  <li>
                    <Award size={15} color="#4F46E5" />
                    <span>Verified Certificate of Completion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="section-container cd-body-layout">
        <div className="cd-main-column">
          {/* Quick Key Highlights Cards */}
          <div className="cd-highlights-grid">
            <div className="cd-highlight-card">
              <Clock className="cd-hl-icon" size={20} />
              <div>
                <span className="cd-hl-label">Duration</span>
                <strong className="cd-hl-val">{curriculum.totalHours}</strong>
              </div>
            </div>
            <div className="cd-highlight-card">
              <BookOpen className="cd-hl-icon" size={20} />
              <div>
                <span className="cd-hl-label">Lectures</span>
                <strong className="cd-hl-val">{curriculum.totalLectures} lessons</strong>
              </div>
            </div>
            <div className="cd-highlight-card">
              <Sparkles className="cd-hl-icon" size={20} />
              <div>
                <span className="cd-hl-label">Skill Level</span>
                <strong className="cd-hl-val">{curriculum.level}</strong>
              </div>
            </div>
            <div className="cd-highlight-card">
              <Award className="cd-hl-icon" size={20} />
              <div>
                <span className="cd-hl-label">Certification</span>
                <strong className="cd-hl-val">Included</strong>
              </div>
            </div>
          </div>

          {/* What You Will Learn Box */}
          <div className="cd-learn-box">
            <h2 className="cd-section-heading">What You'll Learn</h2>
            <div className="cd-learn-grid">
              {curriculum.whatYouWillLearn.map((item, idx) => (
                <div key={idx} className="cd-learn-item">
                  <Check size={18} className="cd-learn-check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Course Overview & Description */}
          <div className="cd-info-card">
            <h2 className="cd-section-heading">Course Overview</h2>
            <p className="cd-overview-paragraph">{curriculum.overview}</p>
            <p className="cd-overview-paragraph">
              Every lesson has been developed with industry practitioners to ensure you acquire actionable, 
              in-demand competencies. You will follow step-by-step video walkthroughs, code alongside the instructor, 
              and build complete portfolio-ready applications.
            </p>
          </div>

          {/* ========================================================================= */}
          {/* COURSE CONTENT SECTION (MATCHING SCREENSHOT 2) */}
          {/* ========================================================================= */}
          <div className="cd-course-content-wrapper" id="course-curriculum">
            {/* Header row matching screenshot 2: COURSE CONTENT ^ */}
            <div className="cd-content-section-header">
              <div className="cd-content-header-left" onClick={toggleAllChapters}>
                <h2 className="cd-content-title">COURSE CONTENT</h2>
                <button 
                  className="cd-content-toggle-all-btn" 
                  aria-label="Toggle all chapters"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleAllChapters();
                  }}
                >
                  {allExpanded ? (
                    <ChevronUp size={20} className="cd-header-caret" />
                  ) : (
                    <ChevronDown size={20} className="cd-header-caret" />
                  )}
                </button>
              </div>

              {/* Stats & Expand/Collapse All */}
              <div className="cd-content-meta-stats">
                <span>{curriculum.totalChapters} chapters</span>
                <span>•</span>
                <span>{curriculum.totalLectures} lectures</span>
                <span>•</span>
                <span>{curriculum.totalHours} total length</span>
                <button 
                  className="cd-btn-expand-collapse-text"
                  onClick={toggleAllChapters}
                >
                  {allExpanded ? 'Collapse all' : 'Expand all'}
                </button>
              </div>
            </div>

            {/* Chapter Accordion List matching Screenshot 2 */}
            <div className="cd-chapters-accordion-list">
              {curriculum.chapters.map((chapter) => {
                const isExpanded = expandedChapters.includes(chapter.chapterNumber);
                return (
                  <div 
                    key={chapter.chapterNumber} 
                    className={`cd-chapter-item-container ${isExpanded ? 'open' : ''}`}
                  >
                    {/* Chapter Header Row */}
                    <div 
                      className="cd-chapter-header-row"
                      onClick={() => toggleChapter(chapter.chapterNumber)}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isExpanded}
                    >
                      <div className="cd-chapter-title-wrapper">
                        {/* Caret icon matching v in screenshot 2 */}
                        <span className={`cd-chapter-caret-icon ${isExpanded ? 'rotated' : ''}`}>
                          {isExpanded ? (
                            <ChevronDown size={17} strokeWidth={2.5} color="#1e3a8a" />
                          ) : (
                            <ChevronDown size={17} strokeWidth={2.5} color="#1e3a8a" style={{ transform: 'rotate(-90deg)' }} />
                          )}
                        </span>
                        <span className="cd-chapter-title-text">
                          {chapter.title}
                        </span>
                      </div>

                      {/* Right lecture count matching screenshot 2 */}
                      <div className="cd-chapter-lecture-badge">
                        <span>{chapter.lectureCount}</span>
                      </div>
                    </div>

                    {/* Collapsible Topics Dropdown */}
                    {isExpanded && (
                      <div className="cd-chapter-topics-dropdown">
                        <ul className="cd-topics-list">
                          {chapter.topics.map((topic) => (
                            <li key={topic.id} className="cd-topic-row-item">
                              <div className="cd-topic-left">
                                {topic.type === 'quiz' ? (
                                  <FileText size={15} className="cd-topic-icon quiz" />
                                ) : (
                                  <Play size={15} color="#ef4444" className="cd-topic-icon video" />
                                )}
                                <span className="cd-topic-name">{topic.title}</span>
                              </div>

                              <div className="cd-topic-right">
                                {topic.isPreview && (
                                  <span className="cd-topic-preview-pill">Preview</span>
                                )}
                                <span className="cd-topic-duration">{topic.duration}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Requirements & Target Audience */}
          <div className="cd-dual-details-grid">
            <div className="cd-info-card">
              <h3 className="cd-subsection-heading">Requirements</h3>
              <ul className="cd-bullet-list">
                {curriculum.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="cd-info-card">
              <h3 className="cd-subsection-heading">Who This Course is For</h3>
              <ul className="cd-bullet-list">
                {curriculum.targetAudience.map((aud, i) => (
                  <li key={i}>{aud}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructor Bio Box */}
          <div className="cd-instructor-bio-card">
            <h2 className="cd-section-heading">Instructor Profile</h2>
            <div className="cd-instructor-bio-layout">
              <div className="cd-instructor-avatar-large">
                {baseCourse.instructor.charAt(0)}
              </div>
              <div className="cd-instructor-bio-details">
                <h3 className="cd-instructor-name">{baseCourse.instructor}</h3>
                <p className="cd-instructor-role">Senior Lead Instructor & Curriculum Director</p>
                <div className="cd-instructor-stats-row">
                  <div className="cd-inst-stat">
                    <Star size={14} fill="#F59E0B" color="#F59E0B" />
                    <span>4.9 Instructor Rating</span>
                  </div>
                  <div className="cd-inst-stat">
                    <Award size={14} color="#6366F1" />
                    <span>18,400+ Reviews</span>
                  </div>
                  <div className="cd-inst-stat">
                    <User size={14} color="#10B981" />
                    <span>45,000+ Students</span>
                  </div>
                </div>
                <p className="cd-instructor-paragraph">
                  {baseCourse.instructor} has over 10 years of software engineering and teaching experience. 
                  Specializing in enterprise systems, real-world application architectures, and hands-on mentor-led 
                  bootcamps, their courses are celebrated for intuitive breakdowns of complex topics.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Call To Action Banner */}
          <div className="cd-bottom-cta-banner">
            <div className="cd-cta-text-content">
              <h3>Start Masterclass Today</h3>
              <p>Get instant lifetime access to all {curriculum.totalLectures} lectures and earn your verified certificate.</p>
            </div>
            <button 
              className="cd-btn-cta-bottom"
              onClick={() => onNavigate('enroll', baseCourse.id)}
            >
              Enroll in This Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
