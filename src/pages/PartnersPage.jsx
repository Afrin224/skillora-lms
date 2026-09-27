import React from 'react';

export default function PartnersPage() {
  return (
    <div className="page-container" style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '20px' }}>Our Partners</h1>
      <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '50px' }}>We collaborate with leading organizations to provide world-class education.</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
        {[
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/250px-Google_2015_logo.svg.png',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/250px-IBM_logo.svg.png',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/250px-Microsoft_logo_%282012%29.svg.png',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/250px-Amazon_logo.svg.png',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/250px-Cisco_logo_blue_2016.svg.png',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png'
        ].map((logo, i) => (
          <div key={i} style={{ width: '150px', height: '80px', background: '#fff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
            <img src={logo} alt={`Partner ${i + 1}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
          </div>
        ))}
      </div>

      <div style={{ marginTop: '80px', padding: '40px', background: '#3b82f6', borderRadius: '16px', color: '#fff' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Become a Partner</h2>
        <p style={{ marginBottom: '24px', fontSize: '1.1rem', opacity: 0.9 }}>Join our network and help shape the future of learning.</p>
        <button style={{ padding: '12px 30px', background: '#fff', color: '#3b82f6', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: '600', cursor: 'pointer' }}>Apply Now</button>
      </div>
    </div>
  );
}
