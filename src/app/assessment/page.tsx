'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const questions = [
  {
    q: 'When faced with a complex problem, what is your first instinct?',
    options: [
      'Break it down into smaller, logical steps.',
      'Look for a creative or out-of-the-box solution.',
      'Discuss it with others to get different perspectives.',
      'Find a tool or software that can solve it automatically.',
    ],
  },
  {
    q: 'Which of these activities sounds most appealing for a weekend project?',
    options: [
      'Building a simple website or app.',
      'Designing a logo or painting.',
      'Organizing an event for your community.',
      'Analyzing data to predict sports outcomes.',
    ],
  },
  {
    q: 'How do you handle repetitive tasks?',
    options: [
      'I try to automate them using scripts or shortcuts.',
      'I get bored quickly and try to change the process.',
      "I don't mind them if they need to be done.",
      'I delegate them if possible.',
    ],
  },
];

export default function Assessment() {
  const [current, setCurrent] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setCompleted(true);
    }
  };
  const handleBack = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const progress = ((current + 1) / questions.length) * 100;

  return (
    <DashboardLayout>
      <div style={{ maxWidth: 680, margin: '0 auto', paddingTop: 20 }}>
        {!completed ? (
          <>
            {/* Header */}
            <div style={{ marginBottom: 32 }}>
              <h1 className="display-sm" style={{ marginBottom: 8 }}>Career Fit Assessment</h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
                Question {current + 1} of {questions.length}
              </p>
              {/* Progress bar */}
              <div className="progress-bar" style={{ marginTop: 16 }}>
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
            </div>

            {/* Question card */}
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className="card"
              style={{ padding: 32, marginBottom: 24 }}
            >
              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: 24, color: 'var(--text-primary)', lineHeight: 1.5 }}>
                {questions[current].q}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {questions[current].options.map((opt, i) => (
                  <button key={i} className="option-card" onClick={handleNext}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 7, flexShrink: 0,
                      border: '2px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-muted)',
                    }}>
                      {String.fromCharCode(65 + i)}
                    </div>
                    <span style={{ flex: 1 }}>{opt}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Nav */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button className="btn btn-ghost" onClick={handleBack} disabled={current === 0}>
                <ArrowLeft size={16} /> Previous
              </button>
              <button className="btn btn-ghost btn-sm" onClick={handleNext}>
                Skip <ArrowRight size={14} />
              </button>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="card"
            style={{ padding: 48, textAlign: 'center' }}
          >
            <div style={{
              width: 72, height: 72, borderRadius: '50%', margin: '0 auto 24px',
              background: 'linear-gradient(135deg, var(--success-500), var(--success-600))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(34,197,94,0.30)',
            }}>
              <CheckCircle2 size={36} color="#fff" />
            </div>
            <h2 className="display-sm" style={{ marginBottom: 12 }}>Assessment Complete!</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginBottom: 32 }}>
              We've updated your profile based on your responses.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 32 }}>
              <div style={{
                padding: 20, background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', textAlign: 'left',
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Top Match
                </div>
                <div style={{ fontSize: '1.0625rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 8 }}>
                  Software Engineering
                </div>
                <span className="badge badge-success" style={{ fontSize: '0.68rem' }}>92% Match</span>
              </div>
              <div style={{
                padding: 20, background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', textAlign: 'left',
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Secondary
                </div>
                <div style={{ fontSize: '1.0625rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 8 }}>
                  Data Science
                </div>
                <span className="badge badge-primary" style={{ fontSize: '0.68rem' }}>85% Match</span>
              </div>
            </div>

            <a href="/dashboard" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
              Return to Dashboard
            </a>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  );
}
