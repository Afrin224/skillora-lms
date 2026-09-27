import React, { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  const scrollToTopAndNav = (page) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-root">
      {/* Newsletter Bar */}
      <div className="newsletter-banner">
        <div className="section-container newsletter-flex">
          <div className="newsletter-text">
            <h3 className="newsletter-title">Subscribe to our newsletter</h3>
            <p className="newsletter-subtitle">Get the latest course releases, free workshops, and special discounts.</p>
          </div>

          <form onSubmit={handleSubscribe} className="newsletter-form">
            <div className="newsletter-input-group">
              <Mail size={18} className="newsletter-icon" />
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="btn-newsletter-submit">
                {subscribed ? (
                  <>
                    <Check size={16} /> Subscribed!
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="main-footer-body">
        <div className="section-container footer-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="brand-logo footer-logo" onClick={() => scrollToTopAndNav('home')}>
              <div className="logo-icon-wrapper">
                <svg
                  viewBox="0 0 64 64"
                  width="36"
                  height="36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Open Book - Left */}
                  <path
                    d="M8 18C18 15 27 18 32 23V55C25 50 17 48 8 50V18Z"
                    fill="#3b82f6"
                  />
                  {/* Open Book - Right */}
                  <path
                    d="M56 18C46 15 37 18 32 23V55C39 50 47 48 56 50V18Z"
                    fill="#a855f7"
                  />
                  {/* Student */}
                  <circle
                    cx="32"
                    cy="17"
                    r="6"
                    fill="#fbbf24"
                  />
                  {/* Graduation Cap */}
                  <path
                    d="M20 13L32 7L44 13L32 19L20 13Z"
                    fill="#ffffff"
                  />
                  {/* Cap Tassel */}
                  <path
                    d="M39 16V23"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* Learning Spark */}
                  <path
                    d="M50 7V11M48 9H52"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="logo-text">Skillora</span>
            </div>

            <p className="footer-about-text">
              Empowering learners worldwide with cutting-edge skills, expert mentorship, and industry certifications.
            </p>

            <div className="footer-social-links" style={{ display: 'flex', gap: '12px' }}>
              <a
                href="https://www.linkedin.com/in/afrin-md-558246396?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3BTsAQs1jETUyFv9XIogiudg%3D%3D"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="social-icon-btn round-icon linkedin-icon"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/mellow_queen_2_4"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="social-icon-btn round-icon instagram-icon"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://github.com/Afrin224"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="social-icon-btn round-icon github-icon"
                title="GitHub"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Explore Col */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Explore</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => scrollToTopAndNav('courses')}>Courses</button></li>
              <li><button onClick={() => scrollToTopAndNav('instructors')}>Instructors</button></li>
              <li><button onClick={() => scrollToTopAndNav('enroll')}>Enroll Now</button></li>
              <li><button onClick={() => scrollToTopAndNav('certificates')}>Certificates</button></li>
            </ul>
          </div>

          {/* Company Col */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => scrollToTopAndNav('about')}>About us</button></li>
              <li><button onClick={() => scrollToTopAndNav('careers')}>Careers</button></li>
              <li><button onClick={() => scrollToTopAndNav('blog')}>Blog</button></li>
              <li><button onClick={() => scrollToTopAndNav('partners')}>Partners</button></li>
            </ul>
          </div>

          {/* Support Col */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Support</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => scrollToTopAndNav('help')}>Help Center</button></li>
              <li><button onClick={() => scrollToTopAndNav('faqs')}>FAQs</button></li>
              <li><button onClick={() => scrollToTopAndNav('contact')}>Contact</button></li>
              <li><button onClick={() => scrollToTopAndNav('terms')}>Terms</button></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="section-container footer-bottom-flex">
          <p className="copyright-text">
            © 2026 Skillora. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <button onClick={() => scrollToTopAndNav('privacy')} className="legal-link">Privacy</button>
            <span className="separator-dot">·</span>
            <button onClick={() => scrollToTopAndNav('terms')} className="legal-link">Terms</button>
            <span className="separator-dot">·</span>
            <button onClick={() => scrollToTopAndNav('cookies')} className="legal-link">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
