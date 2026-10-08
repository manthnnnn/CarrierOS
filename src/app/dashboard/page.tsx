'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { motion } from 'framer-motion';
import { Target, TrendingUp, AlertTriangle, ArrowRight, CheckCircle2, Clock, Zap, BookOpen } from 'lucide-react';
import Link from 'next/link';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: 'easeOut' as const },
});

const stats = [
  { label: 'Career Match', value: '87%', icon: Target, color: '#2563EB', bg: 'rgba(37,99,235,0.08)' },
  { label: 'Modules Done', value: '3/8', icon: CheckCircle2, color: '#22C55E', bg: 'rgba(34,197,94,0.08)' },
  { label: 'Streak', value: '7 days', icon: Zap, color: '#F59E0B', bg: 'rgba(245,158,11,0.08)' },
  { label: 'Courses', value: '2 Active', icon: BookOpen, color: '#8B5CF6', bg: 'rgba(139,92,246,0.08)' },
];

const weekTasks = [
  { week: 1, task: 'Complete mathematics assessment', done: true },
  { week: 2, task: 'Software engineering simulation', done: false, active: true },
  { week: 3, task: 'Research 5 colleges and fees', done: false },
  { week: 4, task: 'Start beginner Python project', done: false },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <motion.div {...fadeUp(0)}>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 6 }}>
            Thursday, October 8
          </p>
          <h1 className="display-sm" style={{ marginBottom: 6 }}>Welcome back, Student 👋</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
            You&apos;re 87% matched to your target career. Keep going.
          </p>
        </motion.div>
      </div>

      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 28 }}>
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div key={i} {...fadeUp(i * 0.07)} className="card-stat">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 600 }}>{s.label}</span>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={16} color={s.color} />
                </div>
              </div>
              <div style={{ fontSize: '1.625rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>{s.value}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Main 2-col grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20, marginBottom: 28 }}>
        {/* Hero career card */}
        <motion.div {...fadeUp(0.15)} className="card-gradient" style={{ padding: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div style={{ flex: 1 }}>
            <span className="badge" style={{ background: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.25)', color: '#fff', marginBottom: 14, display: 'inline-flex' }}>
              🎯 Target Career
            </span>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', marginBottom: 10 }}>
              AI Engineer
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 24, maxWidth: 380 }}>
              You&apos;re an 87% match based on your logical reasoning and high technology interest score.
            </p>
            <Link href="/roadmap" className="btn btn-sm" style={{ background: '#fff', color: '#1D4ED8', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }}>
              View My Roadmap <ArrowRight size={14} />
            </Link>
          </div>

          {/* Score ring */}
          <div className="score-ring-container" style={{ flexShrink: 0 }}>
            <svg className="score-ring" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.5)" />
                </linearGradient>
              </defs>
              <circle className="score-ring-bg" cx="50" cy="50" r="40" />
              <circle className="score-ring-fill" cx="50" cy="50" r="40"
                strokeDasharray="251.2"
                strokeDashoffset="32.6"
                stroke="url(#rg)"
              />
            </svg>
            <div className="score-number">87<span style={{ fontSize: '0.75rem', opacity: 0.7 }}>%</span></div>
          </div>
        </motion.div>

        {/* Risk card */}
        <motion.div {...fadeUp(0.2)} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ width: 36, height: 36, borderRadius: 9, background: 'rgba(245,158,11,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AlertTriangle size={18} color="#F59E0B" />
            </div>
            <h3 style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>Risk Factor</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: 20, flex: 1 }}>
            Your profile shows a potential gap in <strong>continuous self-learning</strong> — a critical trait for AI Engineering roles.
          </p>
          <Link href="/simulator" className="btn btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
            <TrendingUp size={14} /> Try Simulator to improve
          </Link>
        </motion.div>
      </div>

      {/* 30-day plan */}
      <motion.div {...fadeUp(0.25)}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.0625rem', color: 'var(--text-primary)' }}>Your Next 30 Days</h3>
          <Link href="/roadmap" className="btn btn-ghost btn-sm" style={{ gap: 4 }}>
            Full roadmap <ArrowRight size={13} />
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
          {weekTasks.map((item, i) => (
            <motion.div
              key={item.week}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
              className="card"
              style={{
                opacity: item.done ? 0.55 : 1,
                borderColor: item.active ? 'var(--brand-500)' : undefined,
                background: item.active ? 'var(--brand-50)' : undefined,
                padding: 20,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <div style={{
                  width: 22, height: 22, borderRadius: 6,
                  background: item.done ? 'var(--success-500)' : item.active ? 'var(--brand-500)' : 'var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {item.done
                    ? <CheckCircle2 size={13} color="#fff" />
                    : item.active
                      ? <Zap size={12} color="#fff" />
                      : <Clock size={12} color="var(--text-muted)" />}
                </div>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Week {item.week}
                </span>
              </div>
              <p style={{
                fontSize: '0.875rem', fontWeight: 500,
                color: item.done ? 'var(--text-muted)' : 'var(--text-primary)',
                textDecoration: item.done ? 'line-through' : 'none',
                lineHeight: 1.5,
              }}>
                {item.task}
              </p>
              {item.active && (
                <span className="badge badge-primary" style={{ marginTop: 12, fontSize: '0.68rem' }}>Current Focus</span>
              )}
              {item.done && (
                <span className="badge badge-success" style={{ marginTop: 12, fontSize: '0.68rem' }}>Completed</span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
