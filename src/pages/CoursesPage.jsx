import React, { useState } from 'react';
import { Star, Clock, Heart, ArrowRight } from 'lucide-react';
import { coursesData } from '../components/PopularCoursesSection';
import coursesHeroBanner from '../assets/courses-hero-banner.jpg';

export default function CoursesPage({ onNavigate, onSelectCourse, initialCategory = 'all' }) {
  const [favorites, setFavorites] = useState([]);

  // Array of varied ratings to map dynamically for each course
  const ratingsList = ['5.0', '4.9', '4.7', '5.0', '4.6', '4.5', '4.9', '4.8', '5.0'];

  const toggleFavorite = (courseId) => {
    setFavorites(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId) 
        : [...prev, courseId]
    );
  };

  const handleOpenDetails = (courseId) => {
    if (onSelectCourse) {
      onSelectCourse(courseId);
    } else if (onNavigate) {
      onNavigate('course-details', courseId);
    }
  };

  return (
    <div className="courses-page-root">
      {/* Hero Banner Section — matching screenshot layout */}
      <div className="courses-hero-banner">
        <div className="courses-hero-overlay"></div>
        <img 
          src={coursesHeroBanner} 
          alt="Learning and Rewards Platform" 
          className="courses-hero-bg-img"
        />
        <div className="courses-hero-content">
          <h1 className="courses-hero-title">
            Learning and<br />Rewards Platform
          </h1>
          <p className="courses-hero-desc">
            Our learning platform is a naturally engaging, easy to use 
            solution modeled after the best practices. Discover why we are 
            already the #1 online learning platform worldwide.
          </p>
          <button 
            className="courses-hero-cta-btn"
            onClick={() => onNavigate('enroll')}
          >
            Start Learning Now
          </button>
        </div>
      </div>

      {/* Available Courses Section */}
      <div className="courses-available-section">
        <div className="section-container">
          <div className="courses-available-header">
            <h2 className="courses-available-title">Available Courses</h2>
            <p className="courses-available-subtitle">
              Discover our Available Courses and Start Learning
            </p>
          </div>

          {/* Courses Cards Grid — 3 columns */}
          <div className="courses-card-grid">
            {coursesData.map((course, index) => {
              // Get a unique rating for each course based on its index
              const courseRating = course.rating || ratingsList[index % ratingsList.length];

              return (
                <div key={course.id} className="cp-course-card">
                  {/* Card Image — Clickable to navigate to Course Details */}
                  <div 
                    className="cp-card-image-wrapper clickable-image"
                    onClick={() => handleOpenDetails(course.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleOpenDetails(course.id)}
                  >
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="cp-card-image"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&auto=format&fit=crop&q=80';
                      }}
                    />
                  </div>

                  {/* Card Body */}
                  <div className="cp-card-body">
                    {/* Duration & Rating Row */}
                    <div className="cp-card-meta-row">
                      <div className="cp-card-duration">
                        <Clock size={14} color="#94a3b8" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="cp-card-rating">
                        <div className="cp-stars-row">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={13} 
                              fill="#F59E0B" 
                              color="#F59E0B" 
                            />
                          ))}
                        </div>
                        {/* Dynamic rating displayed here */}
                        <span className="cp-rating-value">{courseRating}</span>
                      </div>
                    </div>

                    {/* Title — Clickable */}
                    <h3 
                      className="cp-card-title clickable-title"
                      onClick={() => handleOpenDetails(course.id)}
                    >
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="cp-card-desc">{course.description}</p>

                    {/* Instructor */}
                    <p className="cp-card-instructor">
                      <span className="cp-instructor-label">By:</span> {course.instructor}
                    </p>

                    {/* Footer with Button and Heart */}
                    <div className="cp-card-footer">
                      <button 
                        className="cp-start-course-btn"
                        onClick={() => handleOpenDetails(course.id)}
                      >
                        Course Details
                      </button>
                      <button 
                        className={`cp-favorite-btn ${favorites.includes(course.id) ? 'active' : ''}`}
                        onClick={() => toggleFavorite(course.id)}
                        aria-label="Add to favorites"
                      >
                        <Heart 
                          size={19} 
                          fill={favorites.includes(course.id) ? '#ef4444' : 'none'} 
                          color={favorites.includes(course.id) ? '#ef4444' : '#64748b'} 
                        />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}