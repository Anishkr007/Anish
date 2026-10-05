'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['Work', 'Experience', 'About', 'Skills', 'Contact'];

  return (
    <header className="fixed top-4 left-1/2 z-40 w-full max-w-3xl -translate-x-1/2 px-4 sm:px-6">
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-md">
        <a href="#" className="text-xl font-bold tracking-tighter">AK.</a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <a href="/kumar_anish_2026.pdf" target="_blank" rel="noreferrer" className="rounded-full bg-white text-black px-4 py-2 text-sm font-medium transition-transform hover:scale-105">Resume</a>
        </div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 rounded-2xl border border-white/10 bg-[#07070A]/95 p-4 backdrop-blur-md flex flex-col gap-4 shadow-xl"
          >
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-base font-medium text-white/70 hover:text-white px-2">
                {link}
              </a>
            ))}
            <a href="/kumar_anish_2026.pdf" target="_blank" rel="noreferrer" className="rounded-full bg-white text-black px-4 py-3 text-sm font-medium text-center mt-2">Resume</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}