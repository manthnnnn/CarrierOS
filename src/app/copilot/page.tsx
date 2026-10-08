'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { useState, FormEvent, useRef, useEffect } from 'react';
import { Send, Bot, User, Key, Loader2, Sparkles, X } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { motion, AnimatePresence } from 'framer-motion';

type Message = { sender: 'ai' | 'user'; text: string };

const SYSTEM_PROMPT =
  'You are CareerOS AI — an expert, empathetic career counsellor for Indian students (Class 10 to College). Keep answers encouraging, realistic, structured, and concise. Use bullet points when listing steps. Avoid jargon.';

const starters = [
  "I'm bad at math. Can I still become a data scientist?",
  "What's the difference between CSE and IT?",
  'Which is better — IIT or BITS Pilani?',
  'How do I become an AI Engineer from Class 10?',
];

export default function Copilot() {
  const [apiKey, setApiKey]     = useState('');
  const [isKeySet, setIsKeySet] = useState(false);
  const [keyError, setKeyError] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ai', text: 'Hi! I\'m your CareerOS AI Copilot 🚀\n\nI can help you navigate stream choices, career options, entrance exams, college decisions, and anything else about your academic future.\n\nWhat\'s on your mind today?' },
  ]);
  const [input, setInput]       = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isLoading]);

  const handleSetKey = (e: FormEvent) => {
    e.preventDefault();
    setKeyError('');
    if (apiKey.trim().length < 20) {
      setKeyError('Please enter a valid Gemini API key.');
      return;
    }
    setIsKeySet(true);
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || !isKeySet || isLoading) return;
    setMessages(prev => [...prev, { sender: 'user', text: text.trim() }]);
    setInput('');
    setIsLoading(true);
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const result = await model.generateContent(`${SYSTEM_PROMPT}\n\nStudent: ${text.trim()}`);
      setMessages(prev => [...prev, { sender: 'ai', text: result.response.text() }]);
    } catch {
      setMessages(prev => [...prev, {
        sender: 'ai',
        text: 'Sorry, I ran into an error. Please double-check your API key and try again.',
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent) => { e.preventDefault(); sendMessage(input); };

  return (
    <DashboardLayout>
      <div style={{ height: 'calc(100vh - 96px)', display: 'flex', flexDirection: 'column', maxWidth: 780, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexShrink: 0 }}>
          <div>
            <h1 className="display-sm text-gradient" style={{ marginBottom: 4 }}>AI Career Copilot</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              Evidence-based advice tailored to your exact profile.
            </p>
          </div>
          {isKeySet && (
            <div style={{ display: 'flex', gap: 8 }}>
              <span className="badge badge-success"><Key size={11} /> API Key Active</span>
              <button className="btn btn-ghost btn-sm" onClick={() => { setIsKeySet(false); setApiKey(''); }} style={{ padding: '4px 8px' }}>
                <X size={14} />
              </button>
            </div>
          )}
        </div>

        {!isKeySet ? (
          /* ── API Key Setup ── */
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card"
              style={{ maxWidth: 440, width: '100%', padding: 36, textAlign: 'center' }}
            >
              <div style={{
                width: 64, height: 64, borderRadius: '50%', margin: '0 auto 20px',
                background: 'linear-gradient(135deg,var(--brand-500),var(--accent-500))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(37,99,235,0.25)',
              }}>
                <Sparkles size={28} color="#fff" />
              </div>
              <h2 style={{ fontWeight: 800, fontSize: '1.125rem', color: 'var(--text-primary)', marginBottom: 8 }}>
                Connect Your AI Copilot
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: 24 }}>
                Enter your Google Gemini API key to activate the live AI counsellor. Your key is stored only in your browser session and never sent to our servers.
              </p>
              <form onSubmit={handleSetKey} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <input
                  type="password"
                  className="input"
                  placeholder="AIzaSy…"
                  value={apiKey}
                  onChange={e => setApiKey(e.target.value)}
                  required
                  autoFocus
                />
                {keyError && (
                  <p style={{ fontSize: '0.8125rem', color: 'var(--danger-500)', textAlign: 'left' }}>{keyError}</p>
                )}
                <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                  Activate AI Copilot
                </button>
              </form>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 16 }}>
                Get a free key at{' '}
                <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" style={{ color: 'var(--brand-600)', textDecoration: 'none' }}>
                  aistudio.google.com
                </a>
              </p>
            </motion.div>
          </div>
        ) : (
          /* ── Chat UI ── */
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {/* Messages */}
            <div ref={scrollRef} style={{
              flex: 1, overflowY: 'auto', padding: '4px 4px 16px',
              display: 'flex', flexDirection: 'column', gap: 20,
            }}>
              <AnimatePresence initial={false}>
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: 'flex', gap: 12,
                      flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row',
                      alignItems: 'flex-end', maxWidth: '88%',
                      alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    }}
                  >
                    {/* Avatar */}
                    <div style={{
                      width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                      background: msg.sender === 'user'
                        ? 'linear-gradient(135deg,var(--brand-500),var(--brand-700))'
                        : 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {msg.sender === 'user' ? <User size={15} color="#fff" /> : <Bot size={15} color="var(--brand-600)" />}
                    </div>

                    {/* Bubble */}
                    <div style={{
                      padding: '12px 16px',
                      borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                      background: msg.sender === 'user'
                        ? 'linear-gradient(135deg,var(--brand-500),var(--brand-700))'
                        : 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      boxShadow: 'var(--shadow-xs)',
                      maxWidth: '100%',
                    }}>
                      {msg.text.split('\n').map((line, i) => (
                        <p key={i} style={{
                          margin: '0 0 6px',
                          fontSize: '0.9rem', lineHeight: 1.65,
                          color: msg.sender === 'user' ? '#fff' : 'var(--text-primary)',
                        }}>
                          {line || '\u00A0'}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  style={{ display: 'flex', gap: 12, alignItems: 'flex-end', alignSelf: 'flex-start' }}
                >
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--bg-elevated)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Bot size={15} color="var(--brand-600)" />
                  </div>
                  <div style={{ padding: '14px 18px', borderRadius: '18px 18px 18px 4px', background: 'var(--bg-elevated)', border: '1px solid var(--border)', display: 'flex', gap: 5, alignItems: 'center' }}>
                    {[0, 1, 2].map(i => (
                      <div key={i} style={{
                        width: 7, height: 7, borderRadius: '50%',
                        background: 'var(--brand-500)',
                        animation: 'pulseSoft 1.2s ease-in-out infinite',
                        animationDelay: `${i * 0.2}s`,
                      }} />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Starter prompts */}
            {messages.length === 1 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12, paddingBottom: 4 }}>
                {starters.map((s, i) => (
                  <button key={i} className="btn btn-secondary btn-sm" onClick={() => sendMessage(s)} style={{ fontSize: '0.8rem' }}>
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input bar */}
            <form onSubmit={handleSubmit} style={{
              display: 'flex', gap: 10,
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              borderRadius: 16, padding: '8px 8px 8px 16px',
              boxShadow: 'var(--shadow-sm)', flexShrink: 0,
            }}>
              <input
                type="text"
                placeholder="Ask anything about your career path…"
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={isLoading}
                style={{
                  flex: 1, background: 'transparent', border: 'none', outline: 'none',
                  fontSize: '0.9375rem', color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                }}
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading || !input.trim()}
                style={{ padding: '9px 16px', borderRadius: 10 }}
              >
                {isLoading ? <Loader2 size={17} className="animate-spin" /> : <Send size={17} />}
              </button>
            </form>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
