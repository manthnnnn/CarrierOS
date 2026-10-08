'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Terminal, Play, CheckCircle2, Lightbulb, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Simulator() {
  const [ran, setRan] = useState(false);
  const [fixed, setFixed] = useState(false);

  const reset = () => { setRan(false); setFixed(false); };

  return (
    <DashboardLayout>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <h1 className="display-sm text-gradient" style={{ marginBottom: 8 }}>Career Simulator</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
          Experience a real slice of the day-to-day work before committing to a path.
        </p>
      </div>

      {/* Challenge badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
        <span className="badge badge-primary">Software Engineering</span>
        <span className="badge badge-accent">Debugging Challenge</span>
        <span className="badge badge-warning">Beginner</span>
      </div>

      {/* Code card */}
      <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: 20 }}>
        {/* Title bar */}
        <div style={{
          background: 'var(--bg-elevated)', padding: '14px 20px',
          borderBottom: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* Traffic lights */}
            <div style={{ display: 'flex', gap: 6 }}>
              {['#FF5F57','#FEBC2E','#28C840'].map((c, i) => (
                <div key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
              ))}
            </div>
            <Terminal size={14} color="var(--text-muted)" />
            <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              task_1_fix_the_bug.py
            </span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {ran && (
              <button className="btn btn-ghost btn-sm" onClick={reset} style={{ gap: 4 }}>
                <RotateCcw size={13} /> Reset
              </button>
            )}
            <button
              className="btn btn-primary btn-sm"
              onClick={() => setRan(true)}
              style={{ gap: 6 }}
            >
              <Play size={13} /> Run Code
            </button>
          </div>
        </div>

        {/* Code body */}
        <div style={{
          background: '#0D1117', padding: '24px 28px',
          fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
          fontSize: '0.85rem', lineHeight: 1.8, overflowX: 'auto',
          color: '#C9D1D9',
        }}>
          <div>
            <span style={{ color: '#FF7B72' }}>def </span>
            <span style={{ color: '#D2A8FF' }}>calculate_discount</span>
            <span>(price, discount_percent):</span>
          </div>
          <div style={{ paddingLeft: 24, color: '#8B949E' }}>
            <span style={{ color: '#A5D6FF' }}>"""Calculate final price after discount"""</span>
          </div>
          <div style={{ paddingLeft: 24, color: '#8B949E' }}># BUG: Adding discount instead of subtracting it</div>
          <div style={{ paddingLeft: 24 }}>
            discount_amount = price * (discount_percent /&nbsp;
            <span style={{ color: '#79C0FF' }}>100</span>)
          </div>
          <div style={{ paddingLeft: 24 }}>
            final_price = price&nbsp;
            <span style={{
              color: '#FF7B72', fontWeight: 800,
              background: 'rgba(255,123,114,0.15)',
              padding: '1px 5px', borderRadius: 4,
            }}>+</span>
            &nbsp;discount_amount
          </div>
          <div style={{ paddingLeft: 24 }}>
            <span style={{ color: '#FF7B72' }}>return </span>final_price
          </div>
          <br />
          <div style={{ color: '#8B949E' }}># Test it out</div>
          <div>
            <span style={{ color: '#79C0FF' }}>print</span>
            (calculate_discount(
            <span style={{ color: '#79C0FF' }}>1000</span>,&nbsp;
            <span style={{ color: '#79C0FF' }}>20</span>))&nbsp;
            <span style={{ color: '#8B949E' }}># Expected: 800</span>
          </div>
        </div>

        {/* Output panel */}
        <AnimatePresence>
          {ran && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <div style={{ background: 'var(--bg-elevated)', padding: '16px 20px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Console Output
                </div>
                <div style={{
                  background: '#0D1117', borderRadius: 8, padding: '12px 16px',
                  fontFamily: 'monospace', fontSize: '0.875rem', color: '#C9D1D9',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div>1200.0</div>
                  <div style={{ color: '#FF7B72', marginTop: 4 }}>❌ Test Failed — Expected: 800</div>
                </div>
              </div>

              {/* Insight */}
              <div style={{
                padding: '16px 20px',
                background: 'var(--brand-50)',
                borderTop: '1px solid var(--brand-100)',
                display: 'flex', gap: 14, alignItems: 'flex-start',
              }}>
                <Lightbulb size={18} color="var(--brand-600)" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: 6 }}>
                    Simulation Insight
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    This is exactly what debugging feels like! Real Software Engineers spend ~40% of their time finding and fixing logical errors. The fix is simple: change&nbsp;
                    <code style={{ background: 'rgba(37,99,235,0.1)', padding: '1px 6px', borderRadius: 4, fontWeight: 700, color: 'var(--brand-600)' }}>+</code>
                    &nbsp;to&nbsp;
                    <code style={{ background: 'rgba(34,197,94,0.1)', padding: '1px 6px', borderRadius: 4, fontWeight: 700, color: 'var(--success-600)' }}>-</code>.
                    Did you enjoy the challenge?
                  </p>
                  <button
                    className="btn btn-primary btn-sm"
                    style={{ marginTop: 14 }}
                    onClick={() => setFixed(true)}
                  >
                    <CheckCircle2 size={14} /> I found the fix!
                  </button>
                </div>
              </div>

              {/* Congrats */}
              <AnimatePresence>
                {fixed && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      padding: '16px 20px', background: 'var(--success-50)',
                      borderTop: '1px solid rgba(34,197,94,0.2)',
                      display: 'flex', gap: 12, alignItems: 'center',
                    }}
                  >
                    <CheckCircle2 size={20} color="var(--success-500)" style={{ flexShrink: 0 }} />
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--success-600)', fontSize: '0.875rem' }}>
                        Great instinct! You&apos;re thinking like an engineer.
                      </div>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: 4 }}>
                        This skill of spotting logic bugs is at the core of Software Engineering. Your profile shows a strong match.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DashboardLayout>
  );
}
