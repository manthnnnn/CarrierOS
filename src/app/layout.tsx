import type { Metadata } from 'next';
import './globals.css';

import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'PathwayAI | Student Career Roadmap',
  description: 'Find the education and career path that actually fits you.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
