'use client';

import { useState } from 'next';
import DashboardLayout from '@/components/DashboardLayout';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [completed, setCompleted] = useState(false);

  const questions = [
    {
      question: "When faced with a complex problem, what is your first instinct?",
      options: [
        "Break it down into smaller, logical steps.",
        "Look for a creative or out-of-the-box solution.",
        "Discuss it with others to get different perspectives.",
        "Find a tool or software that can solve it automatically."
      ]
    },
    {
      question: "Which of these activities sounds most appealing for a weekend project?",
      options: [
        "Building a simple website or app.",
        "Designing a logo or painting.",
        "Organizing an event for your community.",
        "Analyzing data to predict sports outcomes."
      ]
    },
    {
      question: "How do you handle repetitive tasks?",
      options: [
        "I try to automate them using scripts or shortcuts.",
        "I get bored quickly and try to change the process.",
        "I don't mind them if they need to be done.",
        "I delegate them if possible."
      ]
    }
  ];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto py-10">
        {!completed ? (
          <>
            <div className="mb-8">
              <h1 className="display-sm mb-2">Career Fit Assessment</h1>
              <p className="text-secondary">Question {currentQuestion + 1} of {questions.length}</p>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
                <div 
                  className="bg-primary-600 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="card p-8 mb-8 animate-fadeIn">
              <h2 className="text-xl font-bold mb-6">{questions[currentQuestion].question}</h2>
              <div className="flex flex-col gap-4">
                {questions[currentQuestion].options.map((opt, i) => (
                  <button key={i} className="option-card" onClick={handleNext}>
                    <span>{opt}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between">
              <button 
                className="btn btn-ghost"
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft size={18} /> Previous
              </button>
            </div>
          </>
        ) : (
          <div className="card p-10 text-center animate-slideUp">
            <div className="flex justify-center mb-6">
              <CheckCircle2 size={64} className="text-success-500" />
            </div>
            <h2 className="display-sm mb-4">Assessment Complete!</h2>
            <p className="text-secondary mb-8">We've updated your profile based on your responses.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
              <div className="p-4 border rounded-lg bg-gray-50">
                <div className="text-sm font-semibold text-secondary mb-1">Top Match</div>
                <div className="text-lg font-bold text-primary-700">Software Engineering</div>
                <div className="text-xs mt-2 text-success-500 font-medium">92% Compatibility</div>
              </div>
              <div className="p-4 border rounded-lg bg-gray-50">
                <div className="text-sm font-semibold text-secondary mb-1">Secondary Match</div>
                <div className="text-lg font-bold text-primary-700">Data Science</div>
                <div className="text-xs mt-2 text-success-500 font-medium">85% Compatibility</div>
              </div>
            </div>

            <a href="/dashboard" className="btn btn-primary">Return to Dashboard</a>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
