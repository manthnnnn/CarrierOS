'use client';

import Sidebar from './Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dash-layout">
      <Sidebar />
      <main className="dash-main animate-fadeIn">
        {children}
      </main>
    </div>
  );
}
