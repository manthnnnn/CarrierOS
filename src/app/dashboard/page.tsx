'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { motion } from 'framer-motion';
import { Target, TrendingUp, AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="display-sm mb-2">Welcome back, Student!</h1>
        <p className="text-secondary">Here is an overview of your career discovery journey.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-gradient col-span-1 lg:col-span-2 flex flex-col justify-center"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="badge badge-accent mb-3">Target Career</div>
              <h2 className="display-md mb-2">AI Engineer</h2>
              <p className="text-primary-200 mb-6 max-w-md">You have an 87% match with this career based on your logical reasoning and high technology interest.</p>
              
              <Link href="/roadmap" className="btn btn-primary">
                View My Roadmap <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="score-ring-container hidden md:block">
              <svg className="score-ring" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--primary-400)" />
                    <stop offset="100%" stopColor="var(--accent-400)" />
                  </linearGradient>
                </defs>
                <circle className="score-ring-bg" cx="50" cy="50" r="40"></circle>
                <circle className="score-ring-fill" cx="50" cy="50" r="40" strokeDasharray="251.2" strokeDashoffset="32.6" stroke="url(#ringGradient)"></circle>
              </svg>
              <div className="score-number text-white">87<span className="text-xs text-primary-200">%</span></div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size={20} className="text-warning-400" />
              <h3 className="font-bold text-lg">Risk Factor</h3>
            </div>
            <p className="text-secondary text-sm mb-4">
              Your profile indicates a potential gap in continuous self-learning, which is critical for AI Engineering.
            </p>
          </div>
          <Link href="/simulator" className="btn btn-secondary w-full text-sm">
            Try Simulator to improve
          </Link>
        </motion.div>
      </div>

      <h3 className="font-bold text-xl mb-4">Your Next 30 Days</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { week: 1, task: 'Complete mathematics assessment', done: true },
          { week: 2, task: 'Complete software engineering simulation', done: false, active: true },
          { week: 3, task: 'Research 5 colleges and fees', done: false },
          { week: 4, task: 'Start beginner Python project', done: false },
        ].map((item, i) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + (i * 0.1) }}
            key={item.week}
            className={`card ${item.active ? 'border-primary-500 bg-primary-900/20' : ''} ${item.done ? 'opacity-60' : ''}`}
          >
            <div className="text-xs font-bold text-muted mb-2 uppercase tracking-wider">Week {item.week}</div>
            <div className={`text-sm ${item.done ? 'line-through text-secondary' : 'font-semibold text-primary'}`}>
              {item.task}
            </div>
            {item.active && (
              <div className="mt-4 badge badge-primary text-xs">Current Focus</div>
            )}
            {item.done && (
              <div className="mt-4 badge badge-success text-xs">Completed</div>
            )}
          </motion.div>
        ))}
      </div>
    </DashboardLayout>
  );
}
