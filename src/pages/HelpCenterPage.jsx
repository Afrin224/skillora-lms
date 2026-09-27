import React from 'react';
import { Search, Book, MessageCircle } from 'lucide-react';

export default function HelpCenterPage() {
  return (
    <div className="page-container" style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '20px' }}>How can we help?</h1>
      <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto 60px' }}>
        <Search size={24} style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
        <input 
          type="text" 
          placeholder="Search for articles, guides, and more..." 
          style={{ width: '100%', padding: '20px 20px 20px 60px', borderRadius: '30px', border: '1px solid #e5e7eb', fontSize: '1.2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '30px' }}>
        <div style={{ padding: '40px', background: '#fff', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
          <Book size={40} color="#3b82f6" style={{ margin: '0 auto 20px' }} />
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Getting Started</h3>
          <p style={{ color: '#6b7280' }}>Everything you need to know to start using Skillora.</p>
        </div>
        <div style={{ padding: '40px', background: '#fff', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
          <MessageCircle size={40} color="#10b981" style={{ margin: '0 auto 20px' }} />
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Community Support</h3>
          <p style={{ color: '#6b7280' }}>Connect with other learners and get answers.</p>
        </div>
      </div>
    </div>
  );
}
