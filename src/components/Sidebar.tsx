'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Search, 
  Map, 
  ClipboardCheck, 
  TerminalSquare, 
  BookOpen, 
  GraduationCap, 
  Bot,
  LogOut
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

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
      <Link href="/" className="nav-logo mb-6 text-gradient font-display text-xl">
        PathwayAI
      </Link>
      
      <div className="text-xs font-semibold text-muted mb-4 uppercase tracking-wider">Menu</div>
      
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
          
          return (
            <Link 
              key={item.path} 
              href={item.path}
              className={`sidebar-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={18} />
              <span>{item.name}</span>
              {item.badge && (
                <span className="sidebar-badge">{item.badge}</span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto">
        <Link href="/" className="sidebar-item hover:text-danger-400">
          <LogOut size={18} />
          <span>Exit App</span>
        </Link>
      </div>
    </aside>
  );
}
