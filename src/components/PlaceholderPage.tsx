'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { Construction } from 'lucide-react';

export default function PlaceholderPage() {
  return (
    <DashboardLayout>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        minHeight: '60vh', textAlign: 'center',
      }}>
        <div style={{
          width: 68, height: 68, borderRadius: '50%', marginBottom: 24,
          background: 'var(--bg-elevated)', border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: 'var(--shadow-sm)',
        }}>
          <Construction size={28} color="var(--text-muted)" />
        </div>
        <h1 className="display-sm" style={{ marginBottom: 10 }}>Coming Soon</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: 380, fontSize: '0.9375rem', lineHeight: 1.65 }}>
          This module is under active development. Check back soon as we continue rolling out the full CareerOS platform.
        </p>
      </div>
    </DashboardLayout>
  );
}
