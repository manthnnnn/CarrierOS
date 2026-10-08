'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { Building, MapPin, BadgeIndianRupee } from 'lucide-react';

export default function Colleges() {
  const colleges = [
    { name: 'Indian Institute of Technology (IIT)', location: 'Multiple', type: 'Government', fees: '₹8L - ₹10L', cutoff: 'Top 1% (JEE Advanced)', match: 98 },
    { name: 'National Institute of Technology (NIT)', location: 'Multiple', type: 'Government', fees: '₹5L - ₹8L', cutoff: 'Top 5% (JEE Main)', match: 92 },
    { name: 'BITS Pilani', location: 'Pilani, Goa, Hyderabad', type: 'Private', fees: '₹25L - ₹30L', cutoff: 'High (BITSAT)', match: 89 },
    { name: 'Vellore Institute of Technology (VIT)', location: 'Vellore', type: 'Private', fees: '₹12L - ₹20L', cutoff: 'Medium (VITEEE)', match: 85 },
  ];

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="display-sm mb-2">College Finder</h1>
        <p className="text-secondary">Institutions matched to your AI Engineer roadmap.</p>
      </div>

      <div className="flex flex-col gap-4">
        {colleges.map((college, idx) => (
          <div key={idx} className="card flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-lg bg-gray-50 border flex items-center justify-center text-primary-600 flex-shrink-0">
                <Building size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">{college.name}</h3>
                <div className="flex gap-3 text-xs text-secondary mt-1">
                  <span className="flex items-center gap-1"><MapPin size={12}/> {college.location}</span>
                  <span className="flex items-center gap-1"><BadgeIndianRupee size={12}/> {college.fees}</span>
                  <span className="bg-gray-100 px-2 py-0.5 rounded">{college.type}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:items-end gap-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">Match Score</span>
                <span className="bg-success-500 text-white px-2 py-0.5 rounded text-sm font-bold">{college.match}%</span>
              </div>
              <div className="text-xs text-secondary">
                Cutoff: <span className="font-semibold text-gray-700">{college.cutoff}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
