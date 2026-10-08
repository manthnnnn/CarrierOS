'use client';

import Link from 'next/link';
import { ArrowRight, Compass, Target, Route } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="hero">
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>
      
      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="badge badge-primary mb-6"
        >
          <span>The Ultimate Student Career GPS</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="display-lg mb-6 max-w-4xl"
        >
          DON&apos;T CHOOSE YOUR FUTURE <br />
          <span className="text-gradient">BECAUSE YOUR FRIEND DID.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-secondary mb-10 max-w-2xl"
        >
          Find the education and career path that actually fits you. Stop relying on family pressure, friend choices, or what everyone says has &quot;scope.&quot;
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Link href="/onboarding" className="btn btn-primary btn-lg">
            DISCOVER MY PATH
            <ArrowRight size={20} />
          </Link>
          <Link href="/careers" className="btn btn-secondary btn-lg card-glass">
            EXPLORE CAREERS
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
        >
          <div className="card-glass flex flex-col items-center text-center p-8">
            <div className="feature-icon mb-4">
              <Compass size={24} className="text-white" />
            </div>
            <h3 className="font-display font-bold text-xl mb-3">Multi-factor Fit</h3>
            <p className="text-secondary text-sm">We analyze your academic strengths, interests, logical reasoning, and risk tolerance to find true matches.</p>
          </div>
          
          <div className="card-glass flex flex-col items-center text-center p-8 border-bright">
            <div className="feature-icon mb-4">
              <Route size={24} className="text-white" />
            </div>
            <h3 className="font-display font-bold text-xl mb-3">Career GPS</h3>
            <p className="text-secondary text-sm">Get a step-by-step roadmap from your current class (10th/12th/college) directly to your target career.</p>
          </div>
          
          <div className="card-glass flex flex-col items-center text-center p-8">
            <div className="feature-icon mb-4">
              <Target size={24} className="text-white" />
            </div>
            <h3 className="font-display font-bold text-xl mb-3">Avoid Peer Pressure</h3>
            <p className="text-secondary text-sm">Our system compares your profile against common traps like &quot;everyone says it has scope&quot; to protect your choices.</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
