'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, GraduationCap, CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';

const classes = [
  { id: '10',      label: 'Class 10',  desc: 'Choosing the right stream' },
  { id: '11',      label: 'Class 11',  desc: 'Just started my stream' },
  { id: '12',      label: 'Class 12',  desc: 'Preparing for entrance exams' },
  { id: 'diploma', label: 'Diploma',   desc: 'Exploring next steps' },
  { id: 'college', label: 'College',   desc: 'Finding the right career path' },
];

const streams = [
  { id: 'science',   label: 'Science (PCM)',     desc: 'Physics · Chemistry · Math' },
  { id: 'scienceBio',label: 'Science (PCB)',      desc: 'Physics · Chemistry · Biology' },
  { id: 'commerce',  label: 'Commerce',           desc: 'Accounts · Economics · Business' },
  { id: 'arts',      label: 'Arts / Humanities',  desc: 'History · Lit · Sociology' },
  { id: 'unsure',    label: 'Not decided yet',    desc: 'Help me figure it out' },
];

const slideVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit:  { opacity: 0, x: -40 },
};

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedStream, setSelectedStream] = useState<string | null>(null);
  const totalSteps = 3;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 40px' }}>
      <div style={{ width: '100%', maxWidth: 560 }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 28, height: 28, borderRadius: 7, background: 'linear-gradient(135deg,#2563EB,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sparkles size={14} color="#fff" />
          </div>
          <span className="text-gradient" style={{ fontSize: '1.0625rem', fontWeight: 800, letterSpacing: '-0.02em' }}>CareerOS</span>
        </Link>

        {/* Step indicator */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, marginBottom: 40 }}>
          {Array.from({ length: totalSteps }).map((_, i) => {
            const num = i + 1;
            const done = step > num;
            const active = step === num;
            return (
              <div key={num} style={{ display: 'flex', alignItems: 'center' }}>
                <div className={`step-dot ${active ? 'active' : done ? 'done' : ''}`}>
                  {done ? <CheckCircle2 size={14} /> : num}
                </div>
                {i < totalSteps - 1 && (
                  <div style={{ width: 60, height: 2, background: step > num ? 'var(--brand-500)' : 'var(--border)', transition: 'background 0.4s', margin: '0 4px' }} />
                )}
              </div>
            );
          })}
        </div>

        {/* Card */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" variants={slideVariants} initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="card" style={{ padding: '36px 32px' }}
              >
                <h2 className="display-sm" style={{ marginBottom: 8 }}>Where are you right now?</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 28, fontSize: '0.9375rem' }}>
                  Tell us your current education level to personalise your roadmap.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                  {classes.map((cls) => (
                    <button key={cls.id} className={`option-card ${selectedClass === cls.id ? 'selected' : ''}`}
                      onClick={() => setSelectedClass(cls.id)}>
                      <div style={{
                        width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                        background: selectedClass === cls.id ? 'var(--brand-500)' : 'var(--brand-50)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.2s',
                      }}>
                        <GraduationCap size={20} color={selectedClass === cls.id ? '#fff' : 'var(--brand-600)'} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>{cls.label}</div>
                        <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: 2 }}>{cls.desc}</div>
                      </div>
                      {selectedClass === cls.id && (
                        <CheckCircle2 size={18} color="var(--brand-500)" style={{ marginLeft: 'auto' }} />
                      )}
                    </button>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link href="/" className="btn btn-ghost btn-sm">← Back to Home</Link>
                  <button className="btn btn-primary" disabled={!selectedClass} onClick={() => setStep(2)}>
                    Next Step <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" variants={slideVariants} initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="card" style={{ padding: '36px 32px' }}
              >
                <h2 className="display-sm" style={{ marginBottom: 8 }}>What&apos;s your stream / interest?</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 28, fontSize: '0.9375rem' }}>
                  This helps us narrow down the most relevant career paths for you.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                  {streams.map((s) => (
                    <button key={s.id} className={`option-card ${selectedStream === s.id ? 'selected' : ''}`}
                      onClick={() => setSelectedStream(s.id)}>
                      <div style={{
                        width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                        background: selectedStream === s.id ? 'var(--brand-500)' : 'var(--brand-50)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.2s', fontWeight: 800, fontSize: '0.875rem',
                        color: selectedStream === s.id ? '#fff' : 'var(--brand-600)',
                      }}>
                        {s.id === 'unsure' ? '?' : s.label.charAt(0)}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>{s.label}</div>
                        <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: 2 }}>{s.desc}</div>
                      </div>
                      {selectedStream === s.id && (
                        <CheckCircle2 size={18} color="var(--brand-500)" style={{ marginLeft: 'auto' }} />
                      )}
                    </button>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button className="btn btn-ghost btn-sm" onClick={() => setStep(1)}>
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button className="btn btn-primary" disabled={!selectedStream} onClick={() => setStep(3)}>
                    Next Step <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" variants={slideVariants} initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="card" style={{ padding: '48px 32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--brand-500), var(--accent-500))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24, boxShadow: '0 8px 24px rgba(37,99,235,0.30)',
                }}>
                  <CheckCircle2 size={36} color="#fff" />
                </div>
                <h2 className="display-sm" style={{ marginBottom: 12 }}>Profile Created!</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.65, maxWidth: 380, marginBottom: 32 }}>
                  We&apos;ll now analyse your strengths, interests, and reasoning to build your personalised career roadmap.
                </p>
                <Link href="/dashboard" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                  Go to My Dashboard <ArrowRight size={18} />
                </Link>
                <button className="btn btn-ghost btn-sm" style={{ marginTop: 12 }} onClick={() => setStep(2)}>
                  <ArrowLeft size={14} /> Go back
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
