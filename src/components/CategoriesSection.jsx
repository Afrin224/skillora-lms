import React, { useState } from 'react';
import { 
  Globe,
  Brain,
  BarChart3,
  Cloud,
  ShieldCheck,
  Smartphone,
  Database,
  Palette,
  Megaphone,
  Code2,
  Terminal
} from 'lucide-react';

export const categoriesData = [
  {
    id: 'data-science',
    title: 'Data Science',
    courses: '05 Courses',
    workshops: '03 Workshop',
    icon: BarChart3,
    color: '#3b82f6',
    bgColor: '#eff6ff',
    categoryKey: 'data'
  },
  {
    id: 'python-development',
    title: 'Python Development',
    courses: '05 Courses',
    workshops: '03 Workshop',
    icon: Terminal,
    color: '#eab308',
    bgColor: '#fefce8',
    categoryKey: 'development'
  },
  {
    id: 'java-development',
    title: 'Java Development',
    courses: '05 Courses',
    workshops: '03 Workshop',
    icon: Code2,
    color: '#f97316',
    bgColor: '#fff7ed',
    categoryKey: 'development'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    courses: '05 Courses',
    workshops: '03 Workshop',
    icon: Globe,
    color: '#06b6d4',
    bgColor: '#ecfeff',
    categoryKey: 'development'
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    courses: '05 Courses',
    workshops: '03 Workshop',
    icon: Brain,
    color: '#8b5cf6',
    bgColor: '#f5f3ff',
    categoryKey: 'development'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    courses: '05 Courses',
    workshops: '03 Workshop',
    icon: BarChart3,
    color: '#10b981',
    bgColor: '#ecfdf5',
    categoryKey: 'data'
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    courses: '05 Courses',
    workshops: '03 Workshop',
    icon: Cloud,
    color: '#6366f1',
    bgColor: '#eef2ff',
    categoryKey: 'development'
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    courses: '05 Courses',
    workshops: '03 Workshop',
    icon: ShieldCheck,
    color: '#ef4444',
    bgColor: '#fef2f2',
    categoryKey: 'development'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    courses: '05 Courses',
    workshops: '03 Workshop',
    icon: Smartphone,
    color: '#ec4899',
    bgColor: '#fdf2f8',
    categoryKey: 'development'
  },
  {
    id: 'database-management',
    title: 'Database Management',
    courses: '05 Courses',
    workshops: '03 Workshop',
    icon: Database,
    color: '#14b8a6',
    bgColor: '#f0fdfa',
    categoryKey: 'development'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    courses: '05 Courses',
    workshops: '03 Workshop',
    icon: Palette,
    color: '#f43f5e',
    bgColor: '#fff1f2',
    categoryKey: 'creative'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    courses: '05 Courses',
    workshops: '03 Workshop',
    icon: Megaphone,
    color: '#a855f7',
    bgColor: '#faf5ff',
    categoryKey: 'marketing'
  }
];

export default function CategoriesSection({ onSelectCategory, selectedCategoryId = null }) {
  const [activeCategory, setActiveCategory] = useState(selectedCategoryId);

  const handleCardClick = (cat) => {
    setActiveCategory(cat.id);
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
  };

  return (
    <section className="categories-section" id="categories">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <h2 className="section-title">Course Categories</h2>
          <p className="section-subtitle">
            Explore our wide range of professional categories designed to accelerate your career.
          </p>
        </div>

        {/* Category Grid */}
        <div className="categories-grid">
          {categoriesData.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <div
                key={cat.id}
                className={`category-card ${isActive ? 'active-card' : ''}`}
                onClick={() => handleCardClick(cat)}
                role="button"
                tabIndex={0}
              >
                <div 
                  className="category-icon-wrapper"
                  style={{ 
                    backgroundColor: cat.bgColor, 
                    color: cat.color 
                  }}
                >
                  <Icon size={22} />
                </div>
                
                <div className="category-info">
                  <h3 className="category-name">{cat.title}</h3>
                  <div className="category-meta">
                    <span>{cat.courses}</span>
                    <span className="dot-separator">•</span>
                    <span>{cat.workshops}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}