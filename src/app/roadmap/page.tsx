'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';

const steps = [
  {
    level: 'Class 10',
    tag: 'Foundation',
    tagColor: 'badge-primary',
    done: true,
    actions: [
      'Explore career options and match with AI Engineer',
      'Choose Science Stream (PCM) for strong tech foundation',
      'Build mathematics foundation (Geometry & Algebra)',
    ],
  },
  {
    level: 'Class 11 – 12',
    tag: 'Preparation',
    tagColor: 'badge-accent',
    done: false,
    active: true,
    actions: [
      'Entrance exam prep (JEE / State level)',
      'Build Python fundamentals via online courses',
      'Participate in school science fairs or coding competitions',
    ],
  },
  {
    level: 'College — BTech CSE / AI',
    tag: 'Execution',
    tagColor: 'badge-warning',
    done: false,
    actions: [
      'Year 1: Data Structures, C++, Git, Basic web dev',
      'Year 2: Machine Learning, SQL, Statistics',
      'Year 3: Advanced AI, Deep Learning, Summer Internship',
      'Final Year: Capstone project, placement preparation',
    ],
  },
  {
    level: 'Career Entry',
    tag: 'Launch',
    tagColor: 'badge-success',
    done: false,
    actions: [
      '6-month AI/ML Internship',
      'Entry-Level AI Engineer Role (₹8L – ₹14L CTC)',
    ],
  },
];

export default function Roadmap() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div style={{ marginBottom: 36 }}>
        <h1 className="display-sm text-gradient" style={{ marginBottom: 8 }}>Your Personalised Roadmap</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
          Target: <strong>AI Engineer</strong> &nbsp;·&nbsp; Starting from: <strong>Class 10</strong>
        </p>
      </div>

      {/* Timeline */}
      <div className="roadmap-track" style={{ maxWidth: 680 }}>
        {steps.map((step, index) => (
          <motion.div
            key={step.level}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.12, duration: 0.45 }}
            className="roadmap-step"
          >
            <div className="roadmap-dot">{index + 1}</div>

            <div
              className="card"
              style={{
                padding: 24,
                borderColor: step.active ? 'var(--brand-500)' : undefined,
                background: step.active ? 'var(--brand-50)' : undefined,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <h3 style={{ fontWeight: 800, fontSize: '1.0625rem', color: 'var(--text-primary)', letterSpacing: '-0.02em', flex: 1 }}>
                  {step.level}
                </h3>
                <span className={`badge ${step.tagColor}`}>{step.tag}</span>
                {step.done && <span className="badge badge-success">✓ Done</span>}
                {step.active && <span className="badge badge-primary">In Progress</span>}
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {step.actions.map((action, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    {step.done
                      ? <CheckCircle2 size={15} color="var(--success-500)" style={{ flexShrink: 0, marginTop: 2 }} />
                      : <Circle size={15} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: 2 }} />
                    }
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, textDecoration: step.done ? 'line-through' : 'none' }}>
                      {action}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </DashboardLayout>
  );
}
