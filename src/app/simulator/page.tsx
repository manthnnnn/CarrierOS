'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { Terminal, Play, CheckCircle2 } from 'lucide-react';
import { useState } from 'next';

export default function Simulator() {
  const [ranCode, setRanCode] = useState(false);

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="display-sm mb-2">Software Engineering Simulator</h1>
        <p className="text-secondary">Experience a small piece of the actual day-to-day work.</p>
      </div>

      <div className="card p-0 overflow-hidden border border-gray-200">
        <div className="bg-gray-100 p-4 border-b border-gray-200 flex justify-between items-center">
          <div className="flex gap-2 items-center text-sm font-semibold text-gray-700">
            <Terminal size={16} /> Task 1: Fix the logical bug
          </div>
          <button 
            className="btn btn-primary btn-sm flex items-center gap-1"
            onClick={() => setRanCode(true)}
          >
            <Play size={14} /> Run Code
          </button>
        </div>
        <div className="p-6 bg-[#1e1e1e] text-white font-mono text-sm leading-relaxed overflow-x-auto">
          <div><span className="text-blue-400">def</span> <span className="text-yellow-200">calculate_discount</span>(price, discount_percent):</div>
          <div className="pl-4 text-green-400">"""Calculate final price after discount"""</div>
          <div className="pl-4 text-gray-500"># BUG: It's currently adding the discount instead of subtracting</div>
          <div className="pl-4">discount_amount = price * (discount_percent / <span className="text-orange-300">100</span>)</div>
          <div className="pl-4">final_price = price <span className="text-red-400 bg-red-900/30 font-bold px-1">+</span> discount_amount</div>
          <div className="pl-4"><span className="text-purple-400">return</span> final_price</div>
          <br/>
          <div><span className="text-gray-500"># Test the function</span></div>
          <div><span className="text-blue-400">print</span>(calculate_discount(<span className="text-orange-300">1000</span>, <span className="text-orange-300">20</span>)) <span className="text-gray-500"># Expected: 800</span></div>
        </div>
        {ranCode && (
          <div className="p-4 bg-gray-50 border-t border-gray-200 animate-slideUp">
            <h4 className="font-semibold text-sm mb-2 text-gray-700">Console Output:</h4>
            <div className="bg-black text-white p-3 rounded font-mono text-sm mb-4">
              1200.0
              <br/>
              <span className="text-red-400">❌ Test Failed. Expected 800.</span>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded p-4 flex gap-3 text-sm text-blue-800">
              <CheckCircle2 className="text-blue-500 flex-shrink-0" />
              <div>
                <strong>Simulation Insight:</strong> This is what debugging feels like! In the real world, Software Engineers spend about 40% of their time finding and fixing logical errors just like this. Did you enjoy trying to spot the bug?
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
