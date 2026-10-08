'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const classes = [
    { id: '10', label: 'Class 10', desc: 'Looking for the right stream' },
    { id: '11', label: 'Class 11', desc: 'Just started my stream' },
    { id: '12', label: 'Class 12', desc: 'Preparing for college/entrance exams' },
    { id: 'diploma', label: 'Diploma', desc: 'Exploring next steps' },
    { id: 'college', label: 'College', desc: 'Looking for right career path' }
  ];

  return (
    <div className="min-h-screen flex flex-col pt-24 pb-12 px-6">
      <div className="max-w-2xl mx-auto w-full">
        {/* Progress Bar (Tailwind native) */}
        <div className="flex items-center justify-between mb-12 relative z-10">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 dark:bg-gray-800 -z-10 rounded"></div>
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary-500 -z-10 rounded transition-all duration-500"
            style={{ width: `${(step - 1) * 50}%` }}
          ></div>

          {[1, 2, 3].map((num) => (
            <div 
              key={num}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors duration-300 ${
                step >= num 
                  ? 'bg-primary-500 border-primary-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                  : 'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-400'
              }`}
            >
              {num}
            </div>
          ))}
        </div>

        {step === 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card border border-border p-8 md:p-10"
          >
            <h2 className="display-sm mb-2 text-gradient">Where are you right now?</h2>
            <p className="text-secondary mb-8">Tell us your current education level to personalize your roadmap.</p>
            
            <div className="flex flex-col gap-4 mb-8">
              {classes.map((cls) => (
                <button
                  key={cls.id}
                  className={`option-card flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                    selectedClass === cls.id 
                      ? 'border-primary-500 bg-primary-500/10 shadow-[0_0_20px_rgba(59,130,246,0.15)]' 
                      : 'border-border hover:border-primary-500/50 hover:bg-gray-50 dark:hover:bg-gray-900/50'
                  }`}
                  onClick={() => setSelectedClass(cls.id)}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    selectedClass === cls.id ? 'bg-primary-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-primary-500'
                  }`}>
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-lg">{cls.label}</div>
                    <div className="text-sm text-secondary mt-0.5">{cls.desc}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center mt-10">
              <Link href="/" className="btn btn-ghost px-4 py-2">Back to Home</Link>
              <button 
                className="btn btn-primary px-6 py-2"
                disabled={!selectedClass}
                onClick={() => setStep(2)}
              >
                Next Step <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}

        {step > 1 && (
           <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="card border border-border p-12 text-center flex flex-col items-center justify-center min-h-[400px]"
         >
            <div className="w-20 h-20 bg-primary-500/10 text-primary-500 rounded-full flex items-center justify-center mb-6">
              <GraduationCap size={40} />
            </div>
            <h2 className="display-sm mb-4">Great! Let's build your profile.</h2>
            <p className="text-secondary mb-10 max-w-md mx-auto">We will now analyze your strengths, weaknesses, and logical reasoning skills to find your perfect career match.</p>
            <Link href="/dashboard" className="btn btn-primary">
              Continue to Dashboard <ArrowRight size={18} className="ml-2" />
            </Link>
         </motion.div>
        )}
      </div>
    </div>
  );
}
