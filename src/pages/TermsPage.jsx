import React from 'react';

export default function TermsPage() {
  return (
    <div className="page-container" style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '30px', textAlign: 'center' }}>Terms of Service</h1>
      
      <div style={{ background: '#fff', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb', color: '#4b5563', lineHeight: '1.8' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', marginTop: '20px', marginBottom: '10px' }}>1. Acceptance of Terms</h2>
        <p style={{ marginBottom: '20px' }}>
          By accessing and using Skillora, you accept and agree to be bound by the terms and provision of this agreement. 
          In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
        </p>
        
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', marginTop: '20px', marginBottom: '10px' }}>2. Use License</h2>
        <p style={{ marginBottom: '20px' }}>
          Permission is granted to temporarily download one copy of the materials (information or software) on Skillora's web site for personal, non-commercial transitory viewing only.
        </p>

        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', marginTop: '20px', marginBottom: '10px' }}>3. Disclaimer</h2>
        <p style={{ marginBottom: '20px' }}>
          The materials on Skillora's web site are provided "as is". Skillora makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
        
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', marginTop: '20px', marginBottom: '10px' }}>4. Limitations</h2>
        <p style={{ marginBottom: '20px' }}>
          In no event shall Skillora or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Skillora's Internet site.
        </p>
      </div>
    </div>
  );
}
