import React, { useState } from 'react';
import { Star, Clock, BookOpen, User, ArrowRight, Check } from 'lucide-react';

import imgMern from '../assets/course-mern-stack.jpg';
import imgUiux from '../assets/course-uiux-design.jpg';
import imgMarketing from '../assets/course-digital-marketing.jpg';
import imgFlutter from '../assets/course-flutter.jpg';
import imgGraphic from '../assets/course-graphic-design.jpg';
import imgWordpress from '../assets/course-mern-stack.jpg';
import imgAi from '../assets/course-ai.jpg';

export const coursesData = [
  {
    id: 'data-science',
    title: 'Data Science & Machine Learning Masterclass',
    category: 'development',
    categoryName: 'Data Science',
    instructor: 'Shakib Khan',
    rating: 4.9,
    reviews: 480,
    lessons: 46,
    duration: '30 Hours',
    students: '4,600',
    price: '$99',
    oldPrice: '$169',
    badge: 'Hot',
    description: 'Master data analysis, statistical modeling, Pandas, NumPy, Scikit-learn, and build predictive machine learning models.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 'python-development',
    title: 'Python Development: From Zero to Hero',
    category: 'development',
    categoryName: 'Python Development',
    instructor: 'Onimesh Chandro',
    rating: 4.9,
    reviews: 520,
    lessons: 42,
    duration: '28 Hours',
    students: '5,800',
    price: '$89',
    oldPrice: '$149',
    badge: 'Best Seller',
    description: 'Master Python syntax, OOP, scripts, web scraping, backend APIs with FastAPI, and automation with 10 real-world projects.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 'java-development',
    title: 'Java Development: Enterprise Applications',
    category: 'development',
    categoryName: 'Java Development',
    instructor: 'Seth Rollens',
    rating: 4.8,
    reviews: 430,
    lessons: 50,
    duration: '32 Hours',
    students: '4,200',
    price: '$94',
    oldPrice: '$159',
    badge: 'Popular',
    description: 'Complete Java programming with Spring Boot, Hibernate, microservices architecture, REST APIs and enterprise deployment.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 'web-development',
    title: 'Full-Stack Web Development: MERN Bootcamp',
    category: 'development',
    categoryName: 'Web Development',
    instructor: 'Seth Rollens',
    rating: 4.9,
    reviews: 560,
    lessons: 45,
    duration: '34 Hours',
    students: '6,200',
    price: '$89',
    oldPrice: '$149',
    badge: 'Best Seller',
    description: 'Build production web apps with React 19, Node.js, Express, MongoDB, Next.js, and modern full-stack best practices.',
    image: imgMern
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence & Neural Networks',
    category: 'development',
    categoryName: 'Artificial Intelligence',
    instructor: 'Shakib Khan',
    rating: 4.9,
    reviews: 390,
    lessons: 40,
    duration: '28 Hours',
    students: '3,700',
    price: '$109',
    oldPrice: '$189',
    badge: 'Trending',
    description: 'Deep learning foundations, Convolutional Neural Networks, NLP transformers, Large Language Models and Generative AI.',
    image: imgAi
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics with PowerBI, SQL & Tableau',
    category: 'development',
    categoryName: 'Data Analytics',
    instructor: 'Onimesh Chandro',
    rating: 4.8,
    reviews: 310,
    lessons: 32,
    duration: '20 Hours',
    students: '3,450',
    price: '$79',
    oldPrice: '$129',
    badge: 'Featured',
    description: 'Turn complex raw business data into actionable executive insights with interactive dashboards and storytelling.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing & DevOps: AWS & Azure',
    category: 'development',
    categoryName: 'Cloud Computing',
    instructor: 'Seth Rollens',
    rating: 4.8,
    reviews: 290,
    lessons: 38,
    duration: '26 Hours',
    students: '3,100',
    price: '$99',
    oldPrice: '$169',
    badge: 'Popular',
    description: 'Design scalable cloud architecture, manage EC2, S3, Kubernetes clusters, Terraform and automated CI/CD pipelines.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security & Ethical Hacking Defense',
    category: 'development',
    categoryName: 'Cyber Security',
    instructor: 'Shakib Khan',
    rating: 4.9,
    reviews: 275,
    lessons: 36,
    duration: '24 Hours',
    students: '2,900',
    price: '$89',
    oldPrice: '$149',
    badge: 'Hot',
    description: 'Network penetration testing, vulnerability assessment, cryptography, Wireshark packet analysis, and system hardening.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development: Flutter & React Native',
    category: 'development',
    categoryName: 'Mobile App Development',
    instructor: 'Anny Rahman',
    rating: 4.9,
    reviews: 340,
    lessons: 42,
    duration: '28 Hours',
    students: '3,800',
    price: '$84',
    oldPrice: '$139',
    badge: 'Featured',
    description: 'Build high-performance cross-platform iOS and Android apps with beautiful responsive UI and native hardware APIs.',
    image: imgFlutter
  },
  {
    id: 'database-management',
    title: 'Database Management Systems (SQL & MongoDB)',
    category: 'development',
    categoryName: 'Database Management',
    instructor: 'Onimesh Chandro',
    rating: 4.8,
    reviews: 230,
    lessons: 28,
    duration: '18 Hours',
    students: '2,400',
    price: '$74',
    oldPrice: '$119',
    badge: 'Popular',
    description: 'Advanced SQL queries, PostgreSQL optimization, indexing strategies, schema modeling, and NoSQL document databases.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design: Figma Systems & Prototyping',
    category: 'design',
    categoryName: 'UI/UX Design',
    instructor: 'Anny Rahman',
    rating: 4.9,
    reviews: 410,
    lessons: 30,
    duration: '20 Hours',
    students: '4,300',
    price: '$79',
    oldPrice: '$129',
    badge: 'Best Seller',
    description: 'Master Figma, auto-layout, interactive prototypes, design tokens, wireframing, and user research methodologies.',
    image: imgUiux
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Growth Hacking Mastery',
    category: 'marketing',
    categoryName: 'Digital Marketing',
    instructor: 'Onimesh Chandro',
    rating: 4.8,
    reviews: 380,
    lessons: 34,
    duration: '22 Hours',
    students: '4,500',
    price: '$69',
    oldPrice: '$119',
    badge: 'Trending',
    description: 'Master performance ads on Google & Meta, search engine optimization, content funnels, and growth analytics.',
    image: imgMarketing
  }
];

export default function PopularCoursesSection({ onNavigate, onSelectCourse, filterCategory = 'all' }) {
  const [selectedCategory, setSelectedCategory] = useState(filterCategory);

  const filterTabs = [
    { key: 'all', label: 'All Courses' },
    { key: 'development', label: 'Development' },
    { key: 'design', label: 'Design' },
    { key: 'marketing', label: 'Marketing' },
  ];

  const displayedCourses = selectedCategory === 'all' 
    ? coursesData 
    : coursesData.filter(c => c.category === selectedCategory);

  return (
    <section className="popular-courses-section" id="popular-courses">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <h2 className="section-title">Popular Courses</h2>
          <p className="section-subtitle">
            Explore our highest rated learning paths crafted by industry veterans to fast-track your career.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="courses-filter-tabs">
          {filterTabs.map(tab => (
            <button
              key={tab.key}
              className={`filter-tab-btn ${selectedCategory === tab.key ? 'active' : ''}`}
              onClick={() => setSelectedCategory(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {displayedCourses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-card-top">
                <span className="course-badge">{course.badge}</span>
                <span className="course-category-tag">{course.categoryName}</span>
              </div>

              <h3 
                className="course-card-title clickable-title"
                style={{ cursor: 'pointer' }}
                onClick={() => onSelectCourse ? onSelectCourse(course.id) : onNavigate('course-details', course.id)}
                title="Click to view course curriculum and details"
              >
                {course.title}
              </h3>
              <p className="course-card-desc">{course.description}</p>

              <div className="course-meta-row">
                <div className="course-instructor">
                  <User size={14} className="meta-icon" />
                  <span>{course.instructor}</span>
                </div>
                <div className="course-rating">
                  <Star size={14} fill="#F59E0B" color="#F59E0B" />
                  <span>{course.rating}</span>
                  <span className="rating-count">({course.reviews})</span>
                </div>
              </div>

              <div className="course-details-row">
                <div className="detail-item">
                  <BookOpen size={14} />
                  <span>{course.lessons} Lessons</span>
                </div>
                <div className="detail-item">
                  <Clock size={14} />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="course-card-footer">
                <div className="course-price-box">
                  <span className="current-price">{course.price}</span>
                  <span className="old-price">{course.oldPrice}</span>
                </div>

                <button
                  className="btn-enroll-course"
                  onClick={() => onNavigate('enroll')}
                >
                  <span>Enroll</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
