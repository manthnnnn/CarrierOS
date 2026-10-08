'use client';

import Link from 'next/link';
import { ArrowRight, Compass, Route, Target, Sparkles, ChevronRight, Star, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const features = [
  {
    icon: Compass,
    title: 'Multi-factor Fit Analysis',
    desc: 'We weigh academic strengths, interests, logical reasoning, and risk tolerance to surface your true career matches — not just popular ones.',
    gradient: 'linear-gradient(135deg,#2563EB,#3B82F6)',
    glow: 'rgba(37,99,235,0.25)',
  },
  {
    icon: Route,
    title: 'Step-by-Step Career GPS',
    desc: 'Get a concrete roadmap from your current class all the way to your dream role — with milestones, courses, and college options at each stage.',
    gradient: 'linear-gradient(135deg,#7C3AED,#8B5CF6)',
    glow: 'rgba(124,58,237,0.25)',
  },
  {
    icon: Target,
    title: 'Peer Pressure Shield',
    desc: "Our AI actively flags herd-following patterns so your decisions are truly yours — not driven by what everyone else is doing.",
    gradient: 'linear-gradient(135deg,#DC2626,#EF4444)',
    glow: 'rgba(220,38,38,0.20)',
  },
];

const stats = [
  { value: '50K+',  label: 'Students guided' },
  { value: '200+',  label: 'Careers mapped' },
  { value: '95%',   label: 'Satisfaction rate' },
  { value: '4.9★',  label: 'Average rating' },
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div style={{ background: 'var(--bg-base)', minHeight: '100vh' }}>

      {/* ─── NAV ───────────────────────────────────────── */}
      <nav className="nav">
        <div style={{ maxWidth: 1160, margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none' }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg,#2563EB,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(37,99,235,0.35)' }}>
              <Sparkles size={15} color="#fff" />
            </div>
            <span style={{ fontWeight: 800, fontSize: '1.0625rem', letterSpacing: '-0.025em', color: 'var(--text-primary)' }}>CareerOS</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Link href="/careers"   className="btn btn-ghost btn-sm" style={{ fontWeight: 500 }}>Careers</Link>
            <Link href="/colleges"  className="btn btn-ghost btn-sm" style={{ fontWeight: 500 }}>Colleges</Link>
            <Link href="/dashboard" className="btn btn-ghost btn-sm" style={{ fontWeight: 500 }}>Dashboard</Link>
            {mounted && (
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="btn btn-ghost btn-sm" style={{ padding: '7px 9px' }} aria-label="Toggle theme">
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}
            <div style={{ width: 1, height: 20, background: 'var(--border)', margin: '0 4px' }} />
            <Link href="/onboarding" className="btn btn-primary btn-sm">
              Get Started <ChevronRight size={13} />
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── HERO ──────────────────────────────────────── */}
      <section className="hero" style={{ paddingTop: 120 }}>
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-glow hero-glow-3" />

        <div style={{ maxWidth: 760, width: '100%', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="badge badge-primary" style={{ marginBottom: 22, display: 'inline-flex', gap: 6 }}>
              <Sparkles size={11} /> AI-Powered Career Intelligence Platform
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
            className="display-2xl" style={{ marginBottom: 22, color: 'var(--text-primary)' }}>
            Don&apos;t choose your future<br />
            <span className="text-gradient">because your friend did.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: 36, lineHeight: 1.75, maxWidth: 540, margin: '0 auto 36px' }}>
            CareerOS is your AI career GPS — it maps the perfect education and career path based on who you <em>actually</em> are, not what everyone else is doing.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 52 }}>
            <Link href="/onboarding" className="btn btn-primary btn-xl">
              Discover My Path <ArrowRight size={18} />
            </Link>
            <Link href="/dashboard" className="btn btn-secondary btn-xl">
              View Dashboard
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            <div style={{ display: 'flex', gap: 2 }}>
              {[0,1,2,3,4].map(i => <Star key={i} size={13} fill="#F59E0B" color="#F59E0B" />)}
            </div>
            <span>Trusted by <strong style={{ color: 'var(--text-secondary)' }}>50,000+ students</strong> across India</span>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS BAR ─────────────────────────────────── */}
      <section style={{ padding: '0 24px 72px', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ maxWidth: 860, margin: '0 auto', background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 20, padding: '28px 0', boxShadow: 'var(--shadow-md)', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '0 24px', borderRight: i < 3 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ fontSize: '1.875rem', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--text-primary)' }}>{s.value}</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ─── FEATURES ──────────────────────────────────── */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="label-sm" style={{ marginBottom: 12 }}>Why CareerOS</div>
            <h2 className="display-lg" style={{ color: 'var(--text-primary)', maxWidth: 500, margin: '0 auto 16px' }}>
              Everything you need to own your future
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', maxWidth: 500, margin: '0 auto' }}>
              Built for Indian students navigating the overwhelming maze of stream choices, entrance exams, and career confusion.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="card" style={{ padding: 32 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, marginBottom: 20, background: f.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 16px ${f.glow}` }}>
                    <Icon size={24} color="#fff" />
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.0625rem', marginBottom: 10, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{f.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ──────────────────────────────── */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="label-sm" style={{ marginBottom: 12 }}>How it works</div>
            <h2 className="display-lg" style={{ color: 'var(--text-primary)' }}>Your journey in 3 steps</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
            {[
              { step:'01', title:'Tell us about yourself', desc:'Select your education level, stream, and interests in under 2 minutes.' },
              { step:'02', title:'Take the assessment', desc:'Answer 10 thoughtful questions about your strengths and working style.' },
              { step:'03', title:'Get your roadmap', desc:'Receive a personalised career path with colleges, courses, and timelines.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center', padding: '32px 24px' }} className="card">
                <div style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.05em', marginBottom: 16, background: 'linear-gradient(135deg,var(--brand-500),var(--accent-500))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{item.step}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────── */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="card-gradient" style={{ textAlign: 'center', padding: '64px 40px' }}>
            <h2 className="display-lg" style={{ color: '#fff', marginBottom: 16 }}>Ready to find your real path?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.0625rem', marginBottom: 36, maxWidth: 440, margin: '0 auto 36px' }}>
              Take the 5-minute assessment and get a personalised roadmap to your dream career — completely free.
            </p>
            <Link href="/onboarding" className="btn btn-xl"
              style={{ background: '#fff', color: '#1D4ED8', boxShadow: '0 4px 20px rgba(0,0,0,0.20)', display: 'inline-flex' }}>
              Start for Free <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────── */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '28px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 24, height: 24, borderRadius: 6, background: 'linear-gradient(135deg,#2563EB,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sparkles size={11} color="#fff" />
            </div>
            <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>CareerOS</span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>© 2026 CareerOS. Built with ♥ for every ambitious student in India.</p>
          <div style={{ display: 'flex', gap: 16 }}>
            {['Privacy','Terms','Contact'].map(t => (
              <span key={t} style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', cursor: 'pointer' }}>{t}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
