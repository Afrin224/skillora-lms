import React from 'react';
import { FileText, ShieldCheck, Cookie, ArrowRight } from 'lucide-react';

export default function PlaceholderPage({ title }) {
  const isPrivacy = title?.toLowerCase().includes('privacy');
  const isCookie = title?.toLowerCase().includes('cookie');

  const Icon = isCookie ? Cookie : isPrivacy ? ShieldCheck : FileText;

  const sections = isPrivacy ? [
    { heading: 'Information We Collect', content: 'We collect information you provide directly, such as your name, email address, and payment information when you create an account or enroll in courses. We also collect usage data automatically through cookies and similar technologies.' },
    { heading: 'How We Use Your Information', content: 'Your information is used to provide and improve our services, personalize your learning experience, process transactions, send course updates and promotional materials (with your consent), and ensure the security of our platform.' },
    { heading: 'Data Sharing & Third Parties', content: 'We do not sell your personal information. We may share data with trusted service providers who assist in operating our platform, processing payments, or delivering course content. All third parties are bound by strict confidentiality agreements.' },
    { heading: 'Data Security', content: 'We implement industry-standard security measures including encryption, secure servers, and regular security audits to protect your personal information from unauthorized access, alteration, or destruction.' },
    { heading: 'Your Rights', content: 'You have the right to access, correct, or delete your personal data at any time. You can also opt out of marketing communications and request a copy of your data. Contact our support team to exercise these rights.' },
    { heading: 'Changes to This Policy', content: 'We may update this policy periodically. We will notify you of significant changes via email or through a prominent notice on our platform. Continued use of our services after changes constitutes acceptance of the updated policy.' },
  ] : [
    { heading: 'What Are Cookies?', content: 'Cookies are small text files stored on your device when you visit our website. They help us remember your preferences, understand how you use our platform, and improve your overall experience.' },
    { heading: 'Essential Cookies', content: 'These cookies are necessary for the website to function properly. They enable core features like secure login, course progress tracking, and shopping cart functionality. You cannot opt out of essential cookies.' },
    { heading: 'Analytics Cookies', content: 'We use analytics cookies to understand how visitors interact with our platform. This helps us improve our content, optimize performance, and identify popular courses. Data is aggregated and anonymized.' },
    { heading: 'Marketing Cookies', content: 'With your consent, we use marketing cookies to deliver relevant advertisements and measure the effectiveness of our campaigns. These cookies may be set by our advertising partners.' },
    { heading: 'Managing Your Cookies', content: 'You can manage your cookie preferences through your browser settings. Most browsers allow you to block or delete cookies. Please note that disabling certain cookies may affect the functionality of our platform.' },
    { heading: 'Updates to This Policy', content: 'We may update our cookie policy as our practices or applicable regulations change. Any updates will be posted on this page with a revised effective date.' },
  ];

  return (
    <div className="page-container" style={{ padding: '60px 20px 80px', maxWidth: '900px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: '64px', height: '64px', borderRadius: '16px',
          background: 'linear-gradient(135deg, #f3f0ff 0%, #e9d5ff 100%)',
          marginBottom: '20px'
        }}>
          <Icon size={28} color="#6355EC" />
        </div>
        <h1 style={{
          fontSize: '2.5rem', fontWeight: '800', color: '#1f2937',
          marginBottom: '12px', letterSpacing: '-0.025em'
        }}>
          {title}
        </h1>
        <p style={{ fontSize: '1rem', color: '#6b7280', maxWidth: '540px', margin: '0 auto', lineHeight: '1.6' }}>
          {isPrivacy
            ? 'Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.'
            : 'This policy explains how we use cookies and similar technologies on our platform.'}
        </p>
        <p style={{ fontSize: '0.85rem', color: '#9ca3af', marginTop: '12px' }}>
          Last updated: September 2026
        </p>
      </div>

      {/* Content Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {sections.map((section, idx) => (
          <div key={idx} style={{
            background: '#ffffff',
            border: '1px solid #f0f2f8',
            borderRadius: '16px',
            padding: '28px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
          }}>
            <h2 style={{
              fontSize: '1.15rem', fontWeight: '700', color: '#1e293b',
              marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px'
            }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '28px', height: '28px', borderRadius: '8px',
                background: '#f3f0ff', color: '#6355EC',
                fontSize: '0.8rem', fontWeight: '800', flexShrink: 0
              }}>
                {idx + 1}
              </span>
              {section.heading}
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.7', margin: 0, paddingLeft: '38px' }}>
              {section.content}
            </p>
          </div>
        ))}
      </div>

      {/* Contact Banner */}
      <div style={{
        marginTop: '48px', padding: '28px',
        background: 'linear-gradient(135deg, #f3f0ff 0%, #e9d5ff 100%)',
        borderRadius: '16px', textAlign: 'center',
        border: '1px solid #d8b4fe'
      }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '8px' }}>
          Have Questions?
        </h3>
        <p style={{ fontSize: '0.9rem', color: '#581c87', marginBottom: '0' }}>
          If you have any questions about this policy, please contact us at{' '}
          <strong>support@skillora.com</strong>
        </p>
      </div>
    </div>
  );
}
