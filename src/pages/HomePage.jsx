import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import LearnAnywhereSection from '../components/LearnAnywhereSection';
import InstructorsSection from '../components/InstructorsSection';
import PopularCoursesSection from '../components/PopularCoursesSection';

export default function HomePage({ onNavigate, onSelectCategory, onSelectCourse }) {
  return (
    <div className="home-page-root">
      {/* 1. Hero Section (Screenshot 1) */}
      <HeroSection onNavigate={onNavigate} />

      {/* 2. Course Categories Section (Screenshot 2) */}
      <CategoriesSection 
        onSelectCategory={(cat) => {
          if (onSelectCourse) onSelectCourse(cat.id);
        }} 
      />

      {/* 3. Learn From Anywhere Section (Screenshot 3) */}
      <LearnAnywhereSection onNavigate={onNavigate} />

      {/* 4. Our Experts / Instructors Section (Screenshot 4) */}
      <InstructorsSection onNavigate={onNavigate} />

      {/* 5. Popular Courses Section */}
      <PopularCoursesSection 
        onNavigate={onNavigate} 
        onSelectCourse={onSelectCourse} 
      />
    </div>
  );
}
