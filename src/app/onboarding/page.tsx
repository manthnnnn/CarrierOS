'use client';

import { useState } from 'next';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, UserCircle, GraduationCap, MapPin } from 'lucide-react';
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
    <div className="container min-h-screen flex flex-col pt-24 pb-12">
      <div className="max-w-2xl mx-auto w-full">
        <div className="step-progress mb-12">
          <div className={`step-dot ${step >= 1 ? 'current' : ''}`}>1</div>
          <div className={`step-line ${step >= 2 ? 'completed' : ''}`}></div>
          <div className={`step-dot ${step >= 2 ? 'current' : ''}`}>2</div>
          <div className={`step-line ${step >= 3 ? 'completed' : ''}`}></div>
          <div className={`step-dot ${step >= 3 ? 'current' : ''}`}>3</div>
        </div>

        {step === 1 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card p-8"
          >
            <h2 className="display-sm mb-2 text-gradient">Where are you right now?</h2>
            <p className="text-secondary mb-8">Tell us your current education level to personalize your roadmap.</p>
            
            <div className="flex flex-col gap-4 mb-8">
              {classes.map((cls) => (
                <button
                  key={cls.id}
                  className={`option-card ${selectedClass === cls.id ? 'selected' : ''}`}
                  onClick={() => setSelectedClass(cls.id)}
                >
                  <div className="feature-icon bg-gradient-to-br from-primary-500 to-accent-500 w-10 h-10 mb-0 flex-shrink-0">
                    <GraduationCap size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-primary">{cls.label}</div>
                    <div className="text-xs text-muted mt-1">{cls.desc}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center mt-10">
              <Link href="/" className="btn btn-ghost">Back</Link>
              <button 
                className="btn btn-primary"
                disabled={!selectedClass}
                onClick={() => setStep(2)}
              >
                Next Step <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}

        {/* Similar sections for step 2, 3 would go here */}
        {step > 1 && (
           <motion.div 
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           className="card p-8 text-center"
         >
            <h2 className="display-sm mb-4">Great! Let's build your profile.</h2>
            <p className="text-secondary mb-8">We will now analyze your strengths and weaknesses.</p>
            <Link href="/dashboard" className="btn btn-primary btn-lg">
              Go to Dashboard
            </Link>
         </motion.div>
        )}

      </div>
    </div>
  );
}
