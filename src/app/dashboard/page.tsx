'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { motion } from 'framer-motion';
import { Target, TrendingUp, AlertTriangle, ArrowRight, CheckCircle2, Clock, Zap, BookOpen, BarChart2 } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { label: 'Career Match',  value: '87%',     icon: Target,      color: '#2563EB', bg: 'rgba(37,99,235,0.08)',   border: 'rgba(37,99,235,0.15)'  },
  { label: 'Modules Done',  value: '3 / 8',   icon: CheckCircle2,color: '#22C55E', bg: 'rgba(34,197,94,0.08)',  border: 'rgba(34,197,94,0.15)'  },
  { label: 'Day Streak',    value: '7 days',  icon: Zap,         color: '#F59E0B', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.15)' },
  { label: 'Active Courses',value: '2',       icon: BookOpen,    color: '#8B5CF6', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.15)' },
];

const weekTasks = [
  { week: 1, task: 'Complete mathematics assessment', done: true },
  { week: 2, task: 'Software engineering simulation', done: false, active: true },
  { week: 3, task: 'Research 5 colleges and fees',    done: false },
  { week: 4, task: 'Start beginner Python project',   done: false },
];

const quickLinks = [
  { label: 'View Roadmap',   href: '/roadmap',    color: '#2563EB' },
  { label: 'Career Explorer',href: '/careers',    color: '#8B5CF6' },
  { label: 'AI Copilot',     href: '/copilot',    color: '#22C55E' },
  { label: 'Take Assessment',href: '/assessment', color: '#F59E0B' },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      {/* ─── HEADER ─────────────────────────────────────── */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: 28 }}>
        <p className="label-sm" style={{ marginBottom: 6 }}>Thursday, October 8, 2026</p>
        <h1 className="display-sm" style={{ marginBottom: 6 }}>Welcome back, Student 👋</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
          You&apos;re <strong>87% matched</strong> to your target career. Here&apos;s your progress overview.
        </p>
      </motion.div>

      {/* ─── STAT CARDS ─────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(175px,1fr))', gap: 14, marginBottom: 24 }}>
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              style={{ background: 'var(--bg-elevated)', border: `1px solid ${s.border}`, borderRadius: 16, padding: '18px 20px', boxShadow: 'var(--shadow-xs)', transition: 'all 0.2s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.02em' }}>{s.label}</span>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={15} color={s.color} />
                </div>
              </div>
              <div style={{ fontSize: '1.625rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>{s.value}</div>
            </motion.div>
          );
        })}
      </div>

      {/* ─── MAIN 2-COL ─────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 18, marginBottom: 24 }}>
        {/* Career hero card */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="card-gradient" style={{ padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div style={{ flex: 1 }}>
            <span className="badge" style={{ background: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.25)', color: '#fff', marginBottom: 14, display: 'inline-flex' }}>
              🎯 Target Career
            </span>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', marginBottom: 10 }}>AI Engineer</h2>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: 22, maxWidth: 360 }}>
              87% match based on your logical reasoning score and high interest in technology — a top result.
            </p>
            <Link href="/roadmap" className="btn btn-sm"
              style={{ background: '#fff', color: '#1D4ED8', boxShadow: '0 2px 10px rgba(0,0,0,0.15)', display: 'inline-flex' }}>
              View My Roadmap <ArrowRight size={14} />
            </Link>
          </div>
          <div className="score-ring-container">
            <svg className="score-ring" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.5)" />
                </linearGradient>
              </defs>
              <circle className="score-ring-bg" cx="50" cy="50" r="40" />
              <circle className="score-ring-fill" cx="50" cy="50" r="40" strokeDasharray="251.2" strokeDashoffset="32.6" stroke="url(#rg)" />
            </svg>
            <div className="score-number">87<span style={{ fontSize: '0.7rem', opacity: 0.7 }}>%</span></div>
          </div>
        </motion.div>

        {/* Risk + Quick links stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="card" style={{ padding: 20, flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(245,158,11,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AlertTriangle size={16} color="#F59E0B" />
              </div>
              <span style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>Risk Factor</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: 14 }}>
              Gap in <strong>continuous self-learning</strong> detected — critical for AI Engineering.
            </p>
            <Link href="/simulator" className="btn btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
              <TrendingUp size={13} /> Practice in Simulator
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="card" style={{ padding: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <BarChart2 size={15} color="var(--text-muted)" />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quick Access</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {quickLinks.map(l => (
                <Link key={l.label} href={l.href} className="btn btn-secondary btn-sm"
                  style={{ justifyContent: 'center', fontSize: '0.78rem', borderColor: 'var(--border)' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── 30-DAY PLAN ────────────────────────────────── */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.0625rem', color: 'var(--text-primary)' }}>Your Next 30 Days</h3>
          <Link href="/roadmap" className="btn btn-ghost btn-sm" style={{ gap: 4 }}>
            Full roadmap <ArrowRight size={13} />
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12 }}>
          {weekTasks.map((item, i) => (
            <motion.div key={item.week}
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 + i * 0.07 }}
              className="card"
              style={{
                opacity: item.done ? 0.55 : 1, padding: 18,
                borderColor: item.active ? 'var(--brand-500)' : undefined,
                background: item.active ? 'var(--brand-50)' : undefined,
              }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <div style={{ width: 22, height: 22, borderRadius: 6,
                  background: item.done ? 'var(--success-500)' : item.active ? 'var(--brand-500)' : 'var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.done   ? <CheckCircle2 size={12} color="#fff" />
                  : item.active ? <Zap size={11} color="#fff" />
                  : <Clock size={11} color="var(--text-muted)" />}
                </div>
                <span className="label-sm">Week {item.week}</span>
              </div>
              <p style={{ fontSize: '0.875rem', fontWeight: 500, color: item.done ? 'var(--text-muted)' : 'var(--text-primary)', textDecoration: item.done ? 'line-through' : 'none', lineHeight: 1.5 }}>
                {item.task}
              </p>
              {item.active && <span className="badge badge-primary" style={{ marginTop: 10, fontSize: '0.68rem' }}>Current Focus</span>}
              {item.done   && <span className="badge badge-success" style={{ marginTop: 10, fontSize: '0.68rem' }}>✓ Completed</span>}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
