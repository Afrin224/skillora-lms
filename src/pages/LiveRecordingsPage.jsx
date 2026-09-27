import React, { useState } from 'react';
import { Play, Clock, Calendar, Users, Eye, Sparkles, Filter, CheckCircle2, ArrowRight } from 'lucide-react';

const recordingsData = [
  {
    id: 1,
    title: 'Data Science & Machine Learning Masterclass',
    instructor: 'David Miller',
    role: 'Senior Data Scientist',
    date: 'Sep 24, 2026',
    duration: '1h 45m',
    views: '2.4k',
    category: 'Development',
    badge: 'Live Masterclass',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    description: 'Master data analysis, predictive modeling, and machine learning pipelines using Python and Scikit-Learn.',
    youtubeId: 'NWONeJKn6kc',
    url: 'http://www.youtube.com/watch?v=NWONeJKn6kc'
  },
  {
    id: 2,
    title: 'Python Development',
    instructor: 'Roshan Kumar',
    role: 'Lead Backend Engineer',
    date: 'Sep 24, 2026',
    duration: '1h 20m',
    views: '3.1k',
    category: 'Development',
    badge: 'Bootcamp',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80',
    description: 'Comprehensive guide to Python programming, data structures, object-oriented concepts, and automation scripts.',
    youtubeId: 'rfscVS0vtbw',
    url: 'http://www.youtube.com/watch?v=rfscVS0vtbw'
  },
  {
    id: 3,
    title: 'Java Development',
    instructor: 'David Miller',
    role: 'Senior Full Stack Lead',
    date: 'Sep 24, 2026',
    duration: '1h 35m',
    views: '1.9k',
    category: 'Development',
    badge: 'Hands-on Lab',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80',
    description: 'Deep dive into enterprise Java, Spring Boot microservices architecture, and robust REST API design.',
    youtubeId: 'eIrMbAQSU34',
    url: 'http://www.youtube.com/watch?v=eIrMbAQSU34'
  },
  {
    id: 4,
    title: 'Full-Stack Web Development: MERN Bootcamp',
    instructor: 'Sarah Jenkins',
    role: 'Full Stack Instructor',
    date: 'Sep 09, 2026',
    duration: '1h 15m',
    views: '2.8k',
    category: 'Development',
    badge: 'Strategy Session',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
    description: 'Build complete end-to-end web apps using MongoDB, Express, React, and Node.js with secure authentication.',
    youtubeId: '7-aY-tS2LhE',
    url: 'http://www.youtube.com/watch?v=7-aY-tS2LhE'
  },
  {
    id: 5,
    title: 'Artificial Intelligence & Neural Networks',
    instructor: 'Alex Rivera',
    role: 'AI Researcher',
    date: 'Sep 04, 2026',
    duration: '2h 00m',
    views: '5.2k',
    category: 'Development',
    badge: 'Deep Dive',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600&auto=format&fit=crop&q=80',
    description: 'Explore deep learning fundamentals, building neural networks from scratch, and modern transformer architectures.',
    youtubeId: 'aircAruvnKk',
    url: 'http://www.youtube.com/watch?v=aircAruvnKk'
  },
  {
  id: 6,
    title: 'Data Analytics with PowerBI, SQL & Tableau',
    instructor: 'David Miller',
    role: 'Data Architect',
    date: 'Aug 29, 2026',
    duration: '1h 50m',
    views: '4.5k',
    category: 'Development',
    badge: 'Career Prep',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80',
    description: 'Transform raw data into impactful interactive business dashboards and execute advanced SQL query tuning.',
    youtubeId: 'zoS00u0hIVM',
    url: 'http://www.youtube.com/watch?v=zoS00u0hIVM'
  },
  {
    id: 7,
    title: 'Cloud Computing & DevOps: AWS & Azure',
    instructor: 'Sarah Jenkins',
    role: 'Cloud Solutions Architect',
    date: 'Sep 24, 2026',
    duration: '1h 55m',
    views: '4.5k',
    category: 'Development',
    badge: 'Cloud Lab',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80',
    description: 'Learn cloud infrastructure provisioning, Docker containerization, Kubernetes orchestration, and CI/CD pipelines.',
    youtubeId: 'XW7TtyWDt9w',
    url: 'http://www.youtube.com/watch?v=XW7TtyWDt9w'
  },
  {
    id: 8,
    title: 'Cyber Security & Ethical Hacking Defense',
    instructor: 'Alex Rivera',
    role: 'Information Security Lead',
    date: 'Sep 24, 2026',
    duration: '1h 40m',
    views: '4.5k',
    category: 'Development',
    badge: 'Security Masterclass',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80',
    description: 'Understand penetration testing methodologies, vulnerability assessments, network security, and threat defense.',
    youtubeId: '3Kq1MIfTWCE',
    url: 'http://www.youtube.com/watch?v=3Kq1MIfTWCE'
  },
  {
    id: 9,
    title: 'Mobile App Development: Flutter & React Native',
    instructor: 'Roshan Kumar',
    role: 'Mobile Architect',
    date: 'Sep 24, 2026',
    duration: '2h 15m',
    views: '4.5k',
    category: 'Mobile',
    badge: 'Mobile Sprint',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80',
    description: 'Build high-performance cross-platform mobile apps with native UI components, state management, and API integration.',
    youtubeId: 'x0uinJvhNxI',
    url: 'http://www.youtube.com/watch?v=x0uinJvhNxI'
  }
];

export default function LiveRecordingsPage({ onNavigate }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeVideo, setActiveVideo] = useState(null);

  const categories = ['All', 'Development', 'Design', 'Marketing', 'Mobile'];

  const filteredRecordings = selectedFilter === 'All'
    ? recordingsData
    : recordingsData.filter(r => r.category === selectedFilter);

  return (
    <div className="live-page-root">
      {/* Page Header */}
      <div className="page-header-banner">
        <div className="section-container">
          <div className="badge-pill-header">
            <span className="live-indicator-dot"></span>
            <span>Recorded Live Sessions</span>
          </div>
          <h1 className="page-main-title">Live Class Recordings & Workshops</h1>
          <p className="page-main-subtitle">
            Missed a live cohort session? Catch up on interactive masterclasses, live coding builds, and Q&A office hours.
          </p>
        </div>
      </div>

      {/* Filter and Content Section */}
      <section className="live-content-section">
        <div className="section-container">
          {/* Category Pills */}
          <div className="live-filter-bar">
            <div className="filter-pill-group">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`filter-pill-btn ${selectedFilter === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <span className="recordings-count-text">Showing {filteredRecordings.length} Recordings</span>
          </div>

          {/* Recordings Grid */}
          <div className="recordings-grid">
            {filteredRecordings.map((rec) => (
              <div key={rec.id} className="recording-card">
                <div className="recording-thumbnail-box" onClick={() => setActiveVideo(rec)}>
                  <img src={rec.thumbnail} alt={rec.title} className="recording-img" />
                  <div className="recording-overlay">
                    <div className="play-button-pulse">
                      <Play size={24} fill="#ffffff" color="#ffffff" />
                    </div>
                  </div>
                  <span className="recording-badge-tag">{rec.badge}</span>
                  <span className="recording-duration-tag">
                    <Clock size={12} /> {rec.duration}
                  </span>
                </div>

                <div className="recording-info">
                  <div className="recording-meta-top">
                    <span className="recording-cat-label">{rec.category}</span>
                    <span className="recording-date">
                      <Calendar size={13} /> {rec.date}
                    </span>
                  </div>

                  <h3 className="recording-card-title">{rec.title}</h3>
                  <p className="recording-card-desc">{rec.description}</p>

                  <div className="recording-footer">
                    <div className="instructor-mini-info">
                      <span className="instructor-name">{rec.instructor}</span>
                      <span className="instructor-role-tiny">{rec.role}</span>
                    </div>

                    <button 
                      className="btn-watch-recording"
                      onClick={() => setActiveVideo(rec)}
                    >
                      <span>Watch</span>
                      <Play size={14} fill="currentColor" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="live-cta-banner">
            <div className="live-cta-content">
              <h3>Join Our Next Live Interactive Workshop</h3>
              <p>Get real-time feedback, ask questions directly to instructors, and build portfolio projects live.</p>
              <button className="btn-primary" onClick={() => onNavigate('enroll')}>
                <span>Enroll in Next Live Cohort</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Preview Modal with YouTube Embed */}
      {activeVideo && (
        <div className="video-modal-backdrop" onClick={() => setActiveVideo(null)}>
          <div className="video-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal-header">
              <h4>{activeVideo.title}</h4>
              <button className="video-modal-close" onClick={() => setActiveVideo(null)}>✕</button>
            </div>
            <div className="video-modal-player-box" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-modal-details">
              <p>{activeVideo.description}</p>
              <div className="video-modal-actions" style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'space-between' }}>
                <a href={activeVideo.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#3b82f6', textDecoration: 'underline' }}>
                  Open on YouTube
                </a>
                <button className="btn-primary" onClick={() => { setActiveVideo(null); onNavigate('enroll'); }}>
                  Enroll in Full Course to Download Source Files
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}