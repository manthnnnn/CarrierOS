'use client';

import DashboardLayout from '@/components/DashboardLayout';

export default function PlaceholderPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="feature-icon mb-4 bg-primary-900">
          <span className="text-2xl">🚧</span>
        </div>
        <h1 className="display-sm mb-2">Module Coming Soon</h1>
        <p className="text-secondary max-w-md">
          This feature is currently under active development. 
          Check back later as we continue to roll out the CarrierOS platform.
        </p>
      </div>
    </DashboardLayout>
  );
}
