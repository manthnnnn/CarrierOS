'use client';

import Link from 'next/link';
import { ArrowRight, Compass, Route, Target, Sparkles, ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

const features = [
  {
    icon: Compass,
    title: 'Multi-factor Fit Analysis',
    desc: 'We weigh academic strengths, interests, logical reasoning, and risk tolerance to surface your true career matches.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Route,
    title: 'Step-by-Step Career GPS',
    desc: 'Get a concrete roadmap from your current class all the way to your dream role — no guesswork, no gaps.',
    color: 'from-violet-500 to-violet-600',
  },
  {
    icon: Target,
    title: 'Peer Pressure Shield',
    desc: 'Our AI actively flags "herd-following" patterns so your decisions are truly yours, not everyone else\'s.',
    color: 'from-rose-500 to-rose-600',
  },
];

const stats = [
  { value: '50K+', label: 'Students guided' },
  { value: '200+', label: 'Careers mapped' },
  { value: '95%', label: 'Satisfaction rate' },
  { value: '4.9★', label: 'App rating' },
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div style={{ background: 'var(--bg-base)', minHeight: '100vh' }}>
      {/* ── NAV ─────────────────────────────────────────── */}
      <nav className="nav">
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: 'linear-gradient(135deg, #2563EB, #8B5CF6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Sparkles size={16} color="#fff" />
            </div>
            <span style={{ fontWeight: 800, fontSize: '1.0625rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              CareerOS
            </span>
          </Link>

          {/* Nav links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Link href="/careers" className="btn btn-ghost btn-sm">Careers</Link>
            <Link href="/colleges" className="btn btn-ghost btn-sm">Colleges</Link>
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="btn btn-ghost btn-sm"
                style={{ padding: '7px 10px' }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}
            <Link href="/onboarding" className="btn btn-primary btn-sm">
              Get Started <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="hero" style={{ paddingTop: 140 }}>
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-glow hero-glow-3" />

        <div style={{ maxWidth: 800, width: '100%', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
            <span className="badge badge-primary" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <Sparkles size={11} />
              AI-Powered Career Intelligence
            </span>
          </motion.div>

          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="show"
            className="display-2xl"
            style={{ marginBottom: 24, color: 'var(--text-primary)' }}
          >
            Don&apos;t choose your future<br />
            <span className="text-gradient">because your friend did.</span>
          </motion.h1>

          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate="show"
            style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7, maxWidth: 560, margin: '0 auto 40px' }}
          >
            CareerOS is your AI career GPS — mapping the perfect education and career path based on who you actually are, not what everyone else is doing.
          </motion.p>

          <motion.div
            custom={3} variants={fadeUp} initial="hidden" animate="show"
            style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}
          >
            <Link href="/onboarding" className="btn btn-primary btn-xl">
              Discover My Path
              <ArrowRight size={18} />
            </Link>
            <Link href="/dashboard" className="btn btn-secondary btn-xl">
              View Dashboard
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" animate="show"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, color: 'var(--text-muted)', fontSize: '0.875rem' }}
          >
            <div style={{ display: 'flex' }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={13} fill="#F59E0B" color="#F59E0B" />)}
            </div>
            <span>Trusted by 50,000+ students across India</span>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────── */}
      <section style={{ padding: '0 24px 80px', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
              background: 'var(--bg-elevated)', border: '1px solid var(--border)',
              borderRadius: 20, padding: '28px 32px', gap: 0,
              boxShadow: 'var(--shadow-md)',
            }}
          >
            {stats.map((s, i) => (
              <div key={i} style={{
                textAlign: 'center', padding: '0 20px',
                borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>{s.value}</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────── */}
      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 60 }}
          >
            <div className="label-sm" style={{ marginBottom: 12 }}>Why CareerOS</div>
            <h2 className="display-lg" style={{ color: 'var(--text-primary)', maxWidth: 480, margin: '0 auto 16px' }}>
              Everything you need to own your future
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', maxWidth: 500, margin: '0 auto' }}>
              Built for Indian students navigating the overwhelming maze of stream choices, entrance exams, and career confusion.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="card"
                  style={{ padding: 32 }}
                >
                  <div style={{
                    width: 52, height: 52, borderRadius: 14, marginBottom: 20,
                    background: `linear-gradient(135deg, ${f.color.split(' ')[1]}, ${f.color.split(' ')[3]})`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                  }}>
                    <Icon size={24} color="#fff" />
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.0625rem', marginBottom: 10, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                    {f.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65 }}>{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────── */}
      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="card-gradient"
            style={{ textAlign: 'center', padding: '60px 40px' }}
          >
            <h2 className="display-lg" style={{ color: '#fff', marginBottom: 16 }}>
              Ready to find your real path?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.0625rem', marginBottom: 36, maxWidth: 460, margin: '0 auto 36px' }}>
              Take the 5-minute assessment and get a personalised roadmap to your dream career — completely free.
            </p>
            <Link href="/onboarding" className="btn btn-xl" style={{
              background: '#fff', color: '#1D4ED8', boxShadow: '0 4px 20px rgba(0,0,0,0.20)',
            }}>
              Start for Free
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer style={{
        borderTop: '1px solid var(--border)', padding: '32px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--text-muted)', fontSize: '0.8125rem',
      }}>
        © 2026 CareerOS. Built with ♥ for every ambitious student.
      </footer>
    </div>
  );
}
