'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import {
  LayoutDashboard,
  Search,
  Map,
  ClipboardCheck,
  TerminalSquare,
  BookOpen,
  GraduationCap,
  Bot,
  LogOut,
  Moon,
  Sun,
  Sparkles,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Career Assessment', path: '/assessment', icon: ClipboardCheck },
    { name: 'Career Explorer', path: '/careers', icon: Search },
    { name: 'My Roadmap', path: '/roadmap', icon: Map, badge: 'New' },
    { name: 'Simulator', path: '/simulator', icon: TerminalSquare },
    { name: 'Courses', path: '/courses', icon: BookOpen },
    { name: 'Colleges', path: '/colleges', icon: GraduationCap },
    { name: 'AI Copilot', path: '/copilot', icon: Bot },
  ];

  return (
    <aside className="sidebar">
      {/* Logo */}
      <Link href="/" className="sidebar-logo">
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 7,
            background: 'linear-gradient(135deg, #2563EB, #8B5CF6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Sparkles size={14} color="#fff" />
        </div>
        <span className="text-gradient" style={{ fontSize: '1.0625rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
          CareerOS
        </span>
      </Link>

      {/* Menu label */}
      <div className="sidebar-section-label">Navigation</div>

      {/* Nav items */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);

          return (
            <Link key={item.path} href={item.path} className={`sidebar-item ${isActive ? 'active' : ''}`}>
              <Icon size={17} className="sidebar-icon" />
              <span>{item.name}</span>
              {item.badge && <span className="sidebar-badge">{item.badge}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer actions */}
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 4, paddingTop: 16 }}>
        {mounted && (
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="sidebar-item">
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        )}
        <Link href="/" className="sidebar-item" style={{ color: 'var(--danger-500)' }}>
          <LogOut size={17} />
          <span>Exit App</span>
        </Link>
      </div>
    </aside>
  );
}
