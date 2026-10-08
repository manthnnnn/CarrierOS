'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { BookOpen, Clock, TrendingUp, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const courses = [
  {
    title: 'B.Tech Computer Science (CSE)',
    duration: '4 Years',
    math: 'High',
    coding: 'High',
    demand: 'Very High',
    icon: '💻',
    highlight: true,
    desc: 'The most direct route to top tech companies. Covers algorithms, systems, AI, and software engineering.',
  },
  {
    title: 'B.Sc Artificial Intelligence',
    duration: '3 Years',
    math: 'Very High',
    coding: 'Medium',
    demand: 'High',
    icon: '🧠',
    desc: 'Deep focus on AI/ML theory, statistics, and neural networks. Ideal for research-oriented students.',
  },
  {
    title: 'BCA',
    duration: '3 Years',
    math: 'Medium',
    coding: 'Medium',
    demand: 'Medium',
    icon: '🖥️',
    desc: 'A practical degree covering core programming, databases, and web development fundamentals.',
  },
];

const demandColor = (d: string) =>
  d === 'Very High' ? 'var(--success-500)' : d === 'High' ? 'var(--brand-600)' : 'var(--text-muted)';

export default function Courses() {
  return (
    <DashboardLayout>
      <div style={{ marginBottom: 28 }}>
        <h1 className="display-sm" style={{ marginBottom: 8 }}>Course Comparison</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
          Compare degree programmes side-by-side to understand what each path demands.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
        {courses.map((course, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.45 }}
            className="card"
            style={{
              padding: 28,
              borderColor: course.highlight ? 'var(--brand-500)' : undefined,
              position: 'relative', overflow: 'hidden',
            }}
          >
            {course.highlight && (
              <div style={{
                position: 'absolute', top: 14, right: 14,
              }}>
                <span className="badge badge-primary" style={{ fontSize: '0.68rem' }}>⭐ Best Match</span>
              </div>
            )}

            {/* Icon */}
            <div style={{
              width: 52, height: 52, borderRadius: 14, fontSize: '1.5rem',
              background: 'var(--bg-elevated)', border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 18,
            }}>
              {course.icon}
            </div>

            <h3 style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: 10, lineHeight: 1.4, letterSpacing: '-0.01em', minHeight: 48 }}>
              {course.title}
            </h3>
            <p style={{ fontSize: '0.8625rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 20 }}>
              {course.desc}
            </p>

            {/* Stats list */}
            <div style={{
              borderTop: '1px solid var(--border)', paddingTop: 16,
              display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20,
            }}>
              {[
                { icon: Clock, label: 'Duration', val: course.duration, color: 'var(--text-primary)' },
                { icon: BookOpen, label: 'Math Rigor', val: course.math, color: 'var(--text-primary)' },
                { icon: CheckCircle2, label: 'Coding Focus', val: course.coding, color: 'var(--text-primary)' },
                { icon: TrendingUp, label: 'Industry Demand', val: course.demand, color: demandColor(course.demand) },
              ].map(({ icon: Icon, label, val, color }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Icon size={13} color="var(--text-muted)" />
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>{label}</span>
                  </div>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700, color }}>{val}</span>
                </div>
              ))}
            </div>

            <button className="btn btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
              View Syllabus & Colleges
            </button>
          </motion.div>
        ))}
      </div>
    </DashboardLayout>
  );
}
