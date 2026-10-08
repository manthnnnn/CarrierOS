'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { motion } from 'framer-motion';

export default function Roadmap() {
  const steps = [
    {
      level: 'Class 10',
      actions: [
        'Explore career options and match with AI Engineer',
        'Choose Science Stream (PCM) for strong tech foundation',
        'Build mathematics foundation (Geometry & Algebra)'
      ]
    },
    {
      level: 'Class 11 - 12',
      actions: [
        'Entrance preparation (JEE/State level)',
        'Build Python fundamentals via online courses',
        'Participate in school science fairs or coding competitions'
      ]
    },
    {
      level: 'College (BTech CSE / AI)',
      actions: [
        'Year 1: Data Structures, C++, Git, Basic web dev',
        'Year 2: Machine Learning, SQL, Statistics',
        'Year 3: Advanced AI, Deep Learning, Summer Internship',
        'Final Year: Major capstone project, placement preparation'
      ]
    },
    {
      level: 'Career Entry',
      actions: [
        '6-month AI/ML Internship',
        'Entry-Level AI Engineer Role ($70k - $90k)'
      ]
    }
  ];

  return (
    <DashboardLayout>
      <div className="mb-10">
        <h1 className="display-sm mb-2 text-gradient">Your Personalized Roadmap</h1>
        <p className="text-secondary">Target: AI Engineer • Current: Class 10</p>
      </div>

      <div className="max-w-3xl">
        {steps.map((step, index) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            key={step.level} 
            className="roadmap-step"
          >
            <div className="roadmap-dot">{index + 1}</div>
            <div className="roadmap-content card-glass">
              <h3 className="font-bold text-lg mb-3 text-primary-300">{step.level}</h3>
              <ul className="flex flex-col gap-2">
                {step.actions.map((action, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0"></span>
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </DashboardLayout>
  );
}
