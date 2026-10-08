'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { Search, Briefcase, DollarSign, Target, BarChart } from 'lucide-react';
import Link from 'next/link';

export default function CareerExplorer() {
  const careers = [
    { name: 'AI Engineer', match: 91, salary: '₹8L - ₹25L', growth: 'Very High', diff: 'High', category: 'Engineering' },
    { name: 'Product Designer (UI/UX)', match: 84, salary: '₹6L - ₹18L', growth: 'High', diff: 'Medium', category: 'Design' },
    { name: 'Data Scientist', match: 79, salary: '₹7L - ₹22L', growth: 'High', diff: 'High', category: 'Data' },
    { name: 'Cloud Architect', match: 65, salary: '₹10L - ₹30L', growth: 'High', diff: 'Very High', category: 'Engineering' },
    { name: 'Digital Marketer', match: 45, salary: '₹4L - ₹12L', growth: 'Medium', diff: 'Low', category: 'Marketing' },
  ];

  return (
    <DashboardLayout>
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="display-sm mb-2">Career Explorer</h1>
          <p className="text-secondary">Discover detailed paths, salaries, and requirements.</p>
        </div>
        <div className="relative max-w-sm w-full">
          <Search className="absolute left-3 top-3 text-muted" size={18} />
          <input type="text" className="input pl-10" placeholder="Search for a career..." />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {careers.map((career) => (
          <div key={career.name} className="card hover:border-primary-400 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="badge badge-primary mb-2">{career.category}</div>
                <h3 className="text-xl font-bold">{career.name}</h3>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm font-semibold text-secondary">Match</span>
                <span className={`text-xl font-bold ${career.match > 80 ? 'text-success-500' : career.match > 60 ? 'text-warning-500' : 'text-danger-500'}`}>
                  {career.match}%
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-1 text-xs text-secondary mb-1">
                  <DollarSign size={14} /> Salary
                </div>
                <div className="font-semibold text-sm">{career.salary}</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-1 text-xs text-secondary mb-1">
                  <TrendingUpIcon size={14} /> Growth
                </div>
                <div className="font-semibold text-sm">{career.growth}</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-1 text-xs text-secondary mb-1">
                  <Target size={14} /> Difficulty
                </div>
                <div className="font-semibold text-sm">{career.diff}</div>
              </div>
            </div>

            <Link href={`/careers/${career.name.toLowerCase().replace(/ /g, '-')}`} className="btn btn-secondary w-full">
              View Detailed Roadmap <ArrowRightIcon size={16} />
            </Link>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

function TrendingUpIcon(props: any) { return <BarChart {...props} />; }
function ArrowRightIcon(props: any) { return <span {...props}>→</span>; }
