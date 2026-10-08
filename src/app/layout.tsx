import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'CareerOS | Your AI-Powered Career GPS',
  description:
    'Stop choosing your future because your friends did. CareerOS uses AI to map the perfect education and career path uniquely tailored to you.',
  keywords: ['career guidance', 'AI career', 'student roadmap', 'college finder', 'career assessment'],
  authors: [{ name: 'CareerOS' }],
  openGraph: {
    title: 'CareerOS | Your AI-Powered Career GPS',
    description: 'Find the education and career path that actually fits you.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
