'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'next';
import { Send, Bot, User } from 'lucide-react';

export default function Copilot() {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hi! I am your AI Career Copilot. I see your target is AI Engineering, but you are currently in Class 10. How can I help you today? Do you want to discuss your stream selection?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = (e: any) => {
    e.preventDefault();
    if(!input.trim()) return;
    
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        sender: 'ai', 
        text: 'That makes sense! Since you mentioned you don\'t like Physics much, standard Engineering might be slightly frustrating during 11th and 12th. Have you considered BCA or BSc in Computer Science? We can look at technology paths that rely more on Mathematics and Coding rather than Core Physics.' 
      }]);
    }, 1000);
  };

  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-100px)] flex flex-col">
        <div className="mb-4">
          <h1 className="display-sm mb-1">AI Career Copilot</h1>
          <p className="text-secondary text-sm">Evidence-based advice tailored to your exact profile.</p>
        </div>

        <div className="flex-1 bg-white border border-gray-200 rounded-xl flex flex-col overflow-hidden shadow-sm">
          <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 max-w-[80%] ${msg.sender === 'user' ? 'self-end flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === 'user' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-primary-600 border'}`}>
                  {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user' ? 'bg-primary-600 text-white rounded-tr-none' : 'bg-gray-50 border border-gray-100 rounded-tl-none text-gray-800'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={sendMessage} className="p-4 border-t border-gray-100 bg-gray-50 flex gap-2">
            <input 
              type="text" 
              className="input flex-1 bg-white" 
              placeholder="E.g. My parents want me to do mechanical engineering, but I want software..."
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button type="submit" className="btn btn-primary px-4 rounded-lg">
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
