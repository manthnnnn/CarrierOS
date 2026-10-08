'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { useState, FormEvent, useRef, useEffect } from 'react';
import { Send, Bot, User, Key, Loader2 } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

type Message = { sender: 'ai' | 'user'; text: string };

export default function Copilot() {
  const [apiKey, setApiKey] = useState('');
  const [isKeySet, setIsKeySet] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ai', text: 'Hi! I am your AI Career Copilot. I can help you figure out the best career path based on your interests and current situation. What is on your mind today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSetKey = (e: FormEvent) => {
    e.preventDefault();
    if (apiKey.trim().length > 10) {
      setIsKeySet(true);
    }
  };

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !isKeySet) return;
    
    const userMessage = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);
    
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      const prompt = `You are an expert student career counselor. Respond to the following query from a student. Keep your answer encouraging, realistic, and formatted nicely. Query: ${userMessage}`;
      
      const result = await model.generateContent(prompt);
      const responseText = result.response.text();
      
      setMessages(prev => [...prev, { sender: 'ai', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { sender: 'ai', text: 'Sorry, I encountered an error. Please check your API key and try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-100px)] flex flex-col max-w-4xl mx-auto">
        <div className="mb-4 flex justify-between items-end">
          <div>
            <h1 className="display-sm mb-1 text-gradient">AI Career Copilot</h1>
            <p className="text-secondary text-sm">Evidence-based advice tailored to your exact profile.</p>
          </div>
          {isKeySet && (
            <div className="badge badge-success flex items-center gap-1">
              <Key size={12} /> API Key Active
            </div>
          )}
        </div>

        {!isKeySet ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="card max-w-md w-full">
              <div className="flex justify-center mb-6 text-primary-500">
                <Bot size={48} />
              </div>
              <h2 className="text-xl font-bold text-center mb-2">Connect Your Copilot</h2>
              <p className="text-secondary text-center text-sm mb-6">
                Please enter your Google Gemini API key to activate the live AI counselor. Your key is stored locally in your browser.
              </p>
              <form onSubmit={handleSetKey} className="flex flex-col gap-4">
                <input 
                  type="password" 
                  className="input" 
                  placeholder="AIzaSy..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary w-full">Activate AI</button>
              </form>
            </div>
          </div>
        ) : (
          <div className="flex-1 bg-card border border-gray-200 dark:border-gray-800 rounded-xl flex flex-col overflow-hidden shadow-sm">
            <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto flex flex-col gap-6">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'self-end flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === 'user' ? 'bg-primary-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-primary-600 border border-gray-200 dark:border-gray-700'}`}>
                    {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user' ? 'bg-primary-600 text-white rounded-tr-none' : 'bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-tl-none'}`}>
                    <div className="prose dark:prose-invert max-w-none text-sm">
                      {msg.text.split('\n').map((line, i) => (
                        <p key={i} className="mb-2 last:mb-0">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700 text-primary-600">
                    <Bot size={16} />
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-tl-none flex items-center text-primary-500">
                    <Loader2 size={16} className="animate-spin" />
                  </div>
                </div>
              )}
            </div>
            
            <form onSubmit={sendMessage} className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 flex gap-2">
              <input 
                type="text" 
                className="input flex-1 bg-white dark:bg-gray-950" 
                placeholder="E.g. I am bad at math, can I still become a data scientist?"
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={isLoading}
              />
              <button type="submit" className="btn btn-primary px-4 rounded-lg" disabled={isLoading || !input.trim()}>
                <Send size={18} />
              </button>
            </form>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
