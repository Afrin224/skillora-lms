import React from 'react';
import { Calendar, User } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    { title: 'The Future of AI in Education', date: 'Sep 24, 2026', author: 'Jane Doe', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80' },
    { title: '10 Tips for Remote Learning Success', date: 'Sep 18, 2026', author: 'John Smith', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80' },
    { title: 'Mastering React in 2026', date: 'Sep 10, 2026', author: 'Alice Johnson', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80' },
  ];

  return (
    <div className="page-container" style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>Our Blog</h1>
        <p style={{ fontSize: '1.2rem', color: '#4b5563' }}>Insights, tutorials, and updates from the Skillora team.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '40px' }}>
        {posts.map((post, idx) => (
          <div key={idx} style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <div style={{ height: '200px', background: `url(${post.img}) center/cover` }} />
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'flex', gap: '15px', color: '#6b7280', fontSize: '0.9rem', marginBottom: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Calendar size={14}/> {post.date}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><User size={14}/> {post.author}</span>
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '12px', color: '#1f2937' }}>{post.title}</h3>
              <p style={{ color: '#4b5563', marginBottom: '20px' }}>Discover the latest trends and enhance your skills with our comprehensive guides.</p>
              <button style={{ background: 'transparent', border: 'none', color: '#3b82f6', fontWeight: '600', cursor: 'pointer', padding: 0 }}>Read More &rarr;</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
