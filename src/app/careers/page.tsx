'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { Search, TrendingUp, DollarSign, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const careers = [
  { name: 'AI Engineer',          match: 91, salary: '₹8L – ₹25L',  growth: 'Very High', diff: 'High',      category: 'Engineering' },
  { name: 'Product Designer',     match: 84, salary: '₹6L – ₹18L',  growth: 'High',      diff: 'Medium',    category: 'Design' },
  { name: 'Data Scientist',       match: 79, salary: '₹7L – ₹22L',  growth: 'High',      diff: 'High',      category: 'Data' },
  { name: 'Cloud Architect',      match: 65, salary: '₹10L – ₹30L', growth: 'High',      diff: 'Very High', category: 'Engineering' },
  { name: 'Cybersecurity Analyst',match: 60, salary: '₹6L – ₹20L',  growth: 'High',      diff: 'High',      category: 'Security' },
  { name: 'Digital Marketer',     match: 45, salary: '₹4L – ₹12L',  growth: 'Medium',    diff: 'Low',       category: 'Marketing' },
];

const matchColor = (m: number) =>
  m >= 80 ? 'var(--success-500)' : m >= 60 ? 'var(--warning-500)' : 'var(--danger-500)';

export default function CareerExplorer() {
  const [query, setQuery] = useState('');
  const filtered = careers.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <DashboardLayout>
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 28 }}>
        <h1 className="display-sm">Career Explorer</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
          Discover paths, salaries, and requirements ranked by your personal match score.
        </p>
      </div>

      {/* Search */}
      <div style={{ position: 'relative', maxWidth: 420, marginBottom: 28 }}>
        <Search size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
        <input
          type="text"
          className="input"
          placeholder="Search for a career..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ paddingLeft: 42 }}
        />
      </div>

      {/* Career grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 18 }}>
        {filtered.map((career) => (
          <div key={career.name} className="card" style={{ padding: 24 }}>
            {/* Top row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
              <div>
                <span className="badge badge-primary" style={{ marginBottom: 10, display: 'inline-flex' }}>{career.category}</span>
                <h3 style={{ fontWeight: 800, fontSize: '1.0625rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                  {career.name}
                </h3>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 4 }}>Match</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: matchColor(career.match), letterSpacing: '-0.03em' }}>
                  {career.match}%
                </div>
              </div>
            </div>

            {/* Match bar */}
            <div className="progress-bar" style={{ marginBottom: 20 }}>
              <div className="progress-fill" style={{ width: `${career.match}%`, background: matchColor(career.match) }} />
            </div>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 20 }}>
              {[
                { icon: DollarSign, label: 'Salary', val: career.salary },
                { icon: TrendingUp, label: 'Growth', val: career.growth },
                { icon: Target, label: 'Difficulty', val: career.diff },
              ].map(({ icon: Icon, label, val }) => (
                <div key={label} style={{
                  background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                  borderRadius: 10, padding: '10px 12px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 5 }}>
                    <Icon size={12} color="var(--text-muted)" />
                    <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</span>
                  </div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-primary)' }}>{val}</div>
                </div>
              ))}
            </div>

            <Link
              href={`/careers/${career.name.toLowerCase().replace(/ /g, '-')}`}
              className="btn btn-secondary btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              View Detailed Roadmap <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: '1rem' }}>No careers matched &quot;{query}&quot;</p>
        </div>
      )}
    </DashboardLayout>
  );
}
