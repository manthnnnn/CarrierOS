'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { BookOpen } from 'lucide-react';

export default function Courses() {
  const courses = [
    { title: 'B.Tech Computer Science (CSE)', duration: '4 Years', math: 'High', coding: 'High', demand: 'Very High' },
    { title: 'B.Sc Artificial Intelligence', duration: '3 Years', math: 'Very High', coding: 'Medium', demand: 'High' },
    { title: 'BCA (Bachelor of Computer Applications)', duration: '3 Years', math: 'Medium', coding: 'Medium', demand: 'Medium' },
  ];

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="display-sm mb-2">Course Comparison</h1>
        <p className="text-secondary">Compare degrees side-by-side to understand the academic requirements.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, idx) => (
          <div key={idx} className="card">
            <div className="feature-icon mb-4"><BookOpen size={24} /></div>
            <h3 className="font-bold text-lg mb-4 h-14">{course.title}</h3>
            
            <ul className="space-y-3 mb-6 border-t border-gray-100 pt-4">
              <li className="flex justify-between text-sm">
                <span className="text-secondary">Duration</span>
                <span className="font-semibold">{course.duration}</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-secondary">Math Rigor</span>
                <span className="font-semibold">{course.math}</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-secondary">Coding Focus</span>
                <span className="font-semibold">{course.coding}</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-secondary">Industry Demand</span>
                <span className="font-semibold text-primary-600">{course.demand}</span>
              </li>
            </ul>
            
            <button className="btn btn-secondary w-full text-sm">View Syllabus</button>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
