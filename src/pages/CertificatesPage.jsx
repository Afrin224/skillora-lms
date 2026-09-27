import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

export default function CertificatesPage() {
  return (
    <div className="page-container" style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>Professional Certificates</h1>
        <p style={{ fontSize: '1.2rem', color: '#4b5563', maxWidth: '800px', margin: '0 auto' }}>
          Validate your skills with our industry-recognized certificates. Stand out in the job market and accelerate your career.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '30px' }}>
        {[1, 2, 3].map((item) => (
          <div key={item} style={{ padding: '30px', background: '#fff', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', textAlign: 'center', transition: 'transform 0.3s ease' }}>
            <Award size={48} color="#3b82f6" style={{ margin: '0 auto 20px' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Advanced Certification {item}</h3>
            <p style={{ color: '#6b7280', marginBottom: '20px' }}>Complete rigorous coursework and a capstone project to earn this distinguished credential.</p>
            <ul style={{ textAlign: 'left', marginBottom: '20px', color: '#4b5563', listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="#10b981"/> Industry Recognized</li>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="#10b981"/> Shareable on LinkedIn</li>
            </ul>
            <button style={{ padding: '10px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', width: '100%' }}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}
