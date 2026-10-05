'use client';
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Trash2, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user'|'assistant', content: string}[]>([
    {role: 'assistant', content: "Hi! I'm Anish's AI. Ask me anything about his experience or projects."}
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(() => { scrollToBottom(); }, [messages, isLoading]);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    document.addEventListener('open-chat', handleOpen);
    return () => document.removeEventListener('open-chat', handleOpen);
  }, []);

  const handleSubmit = async (e?: React.FormEvent, preset?: string) => {
    e?.preventDefault();
    const text = preset || input;
    if (!text.trim() || isLoading) return;

    const newMessages = [...messages, { role: 'user' as const, content: text }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: messages.slice(-6) }),
      });

      if (!res.ok) throw new Error('Failed to fetch');

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMsg = '';

      setMessages([...newMessages, { role: 'assistant', content: '' }]);

      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantMsg += decoder.decode(value, { stream: true });
        setMessages([...newMessages, { role: 'assistant', content: assistantMsg }]);
      }
    } catch (err) { console.error(err);
      setMessages([...newMessages, { role: 'assistant', content: 'Oops! Something went wrong. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = ['What projects has Anish built?', 'Tell me about MedVision AI', 'What is his role at Outlier?'];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-black shadow-lg transition-transform hover:scale-105 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-4 sm:right-6 z-50 flex h-[70vh] max-h-[600px] w-[calc(100vw-32px)] sm:w-[400px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#07070A]/95 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-violet-400" />
                <span className="font-medium text-white">Ask my AI</span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setMessages([{role: 'assistant', content: "Hi! I'm Anish's AI. Ask me anything about his experience or projects."}])} className="p-2 text-white/50 hover:text-white"><Trash2 className="h-4 w-4" /></button>
                <button onClick={() => setIsOpen(false)} className="p-2 text-white/50 hover:text-white"><X className="h-5 w-5" /></button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${m.role === 'user' ? 'bg-violet-500 text-white' : 'bg-white/10 text-white/90 border border-white/5'}`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 border border-white/5 text-white/90 rounded-2xl px-4 py-3 text-sm flex gap-1 items-center h-[44px]">
                    <span className="h-1.5 w-1.5 bg-white/50 rounded-full animate-bounce"></span>
                    <span className="h-1.5 w-1.5 bg-white/50 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                    <span className="h-1.5 w-1.5 bg-white/50 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {suggestions.map(s => (
                  <button key={s} onClick={() => handleSubmit(undefined, s)} className="text-xs border border-white/10 bg-white/5 rounded-full px-3 py-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors text-left">
                    {s}
                  </button>
                ))}
              </div>
            )}

            <form onSubmit={handleSubmit} className="border-t border-white/10 p-4">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-4 pr-12 text-sm text-white placeholder:text-white/40 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors"
                />
                <button type="submit" disabled={!input.trim() || isLoading} className="absolute right-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-violet-500 text-white disabled:opacity-50 transition-colors hover:bg-violet-400">
                  <Send className="h-4 w-4 ml-0.5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}