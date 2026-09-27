import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="page-container" style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>Contact Us</h1>
        <p style={{ fontSize: '1.2rem', color: '#4b5563' }}>We'd love to hear from you. Please fill out the form below or reach out via our contact details.</p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
        <div style={{ flex: '1 1 min(100%, 400px)', background: '#fff', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={e => e.preventDefault()}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Full Name</label>
              <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email</label>
              <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Message</label>
              <textarea rows="5" placeholder="How can we help?" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }}></textarea>
            </div>
            <button type="submit" style={{ padding: '14px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: '600', cursor: 'pointer' }}>Send Message</button>
          </form>
        </div>

        <div style={{ flex: '1 1 min(100%, 300px)', display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ padding: '15px', background: '#eff6ff', borderRadius: '50%' }}>
              <Mail size={24} color="#3b82f6" />
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '4px' }}>Email</h4>
              <p style={{ color: '#4b5563' }}>support@skillora.com</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ padding: '15px', background: '#eff6ff', borderRadius: '50%' }}>
              <Phone size={24} color="#3b82f6" />
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '4px' }}>Phone</h4>
              <p style={{ color: '#4b5563' }}>+1 (555) 123-4567</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ padding: '15px', background: '#eff6ff', borderRadius: '50%' }}>
              <MapPin size={24} color="#3b82f6" />
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '4px' }}>Office</h4>
              <p style={{ color: '#4b5563' }}>123 Learning Way, Tech City, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
