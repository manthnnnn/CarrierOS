'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { Building2, MapPin, IndianRupee, TrendingUp, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const colleges = [
  {
    name: 'Indian Institute of Technology (IIT)',
    location: 'Multiple Cities',
    type: 'Government',
    fees: '₹8L – ₹10L',
    cutoff: 'Top 1% (JEE Advanced)',
    match: 98,
    icon: '🏆',
  },
  {
    name: 'National Institute of Technology (NIT)',
    location: 'Multiple Cities',
    type: 'Government',
    fees: '₹5L – ₹8L',
    cutoff: 'Top 5% (JEE Main)',
    match: 92,
    icon: '🎓',
  },
  {
    name: 'BITS Pilani',
    location: 'Pilani · Goa · Hyderabad',
    type: 'Deemed Private',
    fees: '₹25L – ₹30L',
    cutoff: 'High (BITSAT)',
    match: 89,
    icon: '⭐',
  },
  {
    name: 'Vellore Institute of Technology (VIT)',
    location: 'Vellore',
    type: 'Private',
    fees: '₹12L – ₹20L',
    cutoff: 'Medium (VITEEE)',
    match: 85,
    icon: '📚',
  },
  {
    name: 'Manipal Institute of Technology',
    location: 'Manipal, Karnataka',
    type: 'Private',
    fees: '₹14L – ₹18L',
    cutoff: 'Medium (MET)',
    match: 80,
    icon: '🏫',
  },
];

const matchColor = (m: number) =>
  m >= 90 ? 'var(--success-500)' : m >= 80 ? 'var(--brand-600)' : 'var(--warning-500)';

export default function Colleges() {
  const [query, setQuery] = useState('');
  const filtered = colleges.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <DashboardLayout>
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 24 }}>
        <h1 className="display-sm">College Finder</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
          Institutions ranked by match score for your AI Engineer roadmap.
        </p>
      </div>

      {/* Search */}
      <div style={{ position: 'relative', maxWidth: 400, marginBottom: 24 }}>
        <Search size={15} style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
        <input
          type="text"
          className="input"
          placeholder="Search colleges..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ paddingLeft: 38 }}
        />
      </div>

      {/* List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {filtered.map((college, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.07, duration: 0.4 }}
            className="card"
            style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}
          >
            {/* Icon */}
            <div style={{
              width: 52, height: 52, borderRadius: 14, background: 'var(--bg-elevated)',
              border: '1px solid var(--border)', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: '1.375rem', flexShrink: 0,
            }}>
              {college.icon}
            </div>

            {/* Main info */}
            <div style={{ flex: 1, minWidth: 200 }}>
              <h3 style={{ fontWeight: 800, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: 6, letterSpacing: '-0.01em' }}>
                {college.name}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <MapPin size={12} /> {college.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <IndianRupee size={12} /> {college.fees}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <Building2 size={12} /> {college.type}
                </span>
              </div>
            </div>

            {/* Cutoff */}
            <div style={{ textAlign: 'center', minWidth: 140 }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
                Cutoff
              </div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{college.cutoff}</div>
            </div>

            {/* Match */}
            <div style={{ textAlign: 'center', minWidth: 80 }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'center' }}>
                <TrendingUp size={11} /> Match
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em', color: matchColor(college.match) }}>
                {college.match}%
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
          No colleges matched &quot;{query}&quot;
        </div>
      )}
    </DashboardLayout>
  );
}
