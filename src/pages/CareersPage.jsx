import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';

export default function CareersPage() {
  const jobs = [
    { title: 'Senior Frontend Engineer', dept: 'Engineering', loc: 'Remote' },
    { title: 'Product Manager', dept: 'Product', loc: 'New York, NY' },
    { title: 'Marketing Specialist', dept: 'Marketing', loc: 'London, UK' },
    { title: 'UX/UI Designer', dept: 'Design', loc: 'Remote' },
  ];

  return (
    <div className="careers-page-root">
      <div className="careers-header">
        <h1 className="careers-title">Join Our Team</h1>
        <p className="careers-subtitle">
          Help us build the future of online education. We are always looking for passionate individuals.
        </p>
      </div>

      <div className="careers-jobs-list">
        {jobs.map((job, idx) => (
          <div key={idx} className="careers-job-card">
            <div className="careers-job-info">
              <h3 className="careers-job-title">
                <Briefcase size={20} color="#6366f1" /> {job.title}
              </h3>
              <p className="careers-job-meta">{job.dept} &bull; {job.loc}</p>
            </div>
            <button className="careers-apply-btn">
              Apply <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
