import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQsPage() {
  const faqs = [
    { q: 'How do I access my courses?', a: 'Once you enroll, you can access your courses directly from your Dashboard.' },
    { q: 'Can I get a refund?', a: 'Yes, we offer a 30-day money-back guarantee for all our courses.' },
    { q: 'Are the certificates recognized?', a: 'Absolutely! Our certificates are recognized by top companies worldwide.' },
    { q: 'Do you offer financial aid?', a: 'Yes, please contact our support team to apply for financial aid.' },
  ];

  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="page-container" style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>Frequently Asked Questions</h1>
        <p style={{ fontSize: '1.2rem', color: '#4b5563' }}>Find answers to common questions about Skillora.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {faqs.map((faq, idx) => (
          <div key={idx} style={{ background: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              style={{ width: '100%', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: '1.2rem', fontWeight: '600', color: '#1f2937' }}
            >
              {faq.q}
              {openIdx === idx ? <ChevronUp size={24} color="#6b7280" /> : <ChevronDown size={24} color="#6b7280" />}
            </button>
            {openIdx === idx && (
              <div style={{ padding: '0 24px 24px', color: '#4b5563', fontSize: '1.1rem', lineHeight: '1.6' }}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
