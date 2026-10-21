'use client';

import React, { useState } from 'react';
import { Sparkles, Shield, Compass, BookOpen, Download, Menu, X, Cpu } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-obsidian-950/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/30 border border-cyan-400/40 flex items-center justify-center shadow-glow-cyan transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400">
              <span className="text-cyan-400 font-mono text-xl font-bold group-hover:text-cyan-300">✦</span>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="font-cyber font-black tracking-wider text-xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-200 to-purple-400">
                  NOCTILUCA
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 font-mono tracking-tighter">
                  WFF v2
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 flex items-center space-x-1">
                <span>BY</span>
                <span className="text-purple-400 font-semibold group-hover:underline">TEKROMANCY</span>
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <a
            href="#hero"
            className="hover:text-cyan-400 transition-colors flex items-center space-x-1.5"
          >
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>Overview</span>
          </a>
          <a
            href="#visages"
            className="hover:text-cyan-400 transition-colors flex items-center space-x-1.5"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Visage Chamber</span>
          </a>
          <a
            href="#simulator"
            className="hover:text-cyan-400 transition-colors flex items-center space-x-1.5"
          >
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Watch Simulator</span>
          </a>
          <a
            href="#atmosphere"
            className="hover:text-cyan-400 transition-colors flex items-center space-x-1.5"
          >
            <span className="text-amber-400 text-xs">☀️</span>
            <span>Atmospheres</span>
          </a>
          <a
            href="#documentation"
            className="hover:text-cyan-400 transition-colors flex items-center space-x-1.5"
          >
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>Documentation</span>
          </a>
          <a
            href="/privacy/"
            className="hover:text-cyan-400 transition-colors flex items-center space-x-1.5"
          >
            <Shield className="w-4 h-4 text-slate-400" />
            <span>Privacy Policy</span>
          </a>
        </nav>

        {/* Action CTAs */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="https://github.com/djehauti/noctiluca"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-obsidian-900 border border-slate-700/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200"
            title="GitHub Repository"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="#download"
            className="relative px-5 py-2.5 rounded-lg font-cyber text-xs tracking-wider uppercase font-bold text-obsidian-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-white transition-all duration-300 shadow-glow-cyan flex items-center space-x-2"
          >
            <Download className="w-4 h-4 text-obsidian-950" />
            <span>Get Watch Face</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-obsidian-900 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-950/40"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-obsidian-950 border-b border-cyan-500/30 px-6 py-6 space-y-4">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 py-1"
          >
            Overview
          </a>
          <a
            href="#visages"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 py-1"
          >
            Visage Chamber
          </a>
          <a
            href="#simulator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 py-1"
          >
            Watch Simulator
          </a>
          <a
            href="#atmosphere"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 py-1"
          >
            Atmosphere Engine
          </a>
          <a
            href="#documentation"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 py-1"
          >
            Documentation
          </a>
          <a
            href="/privacy/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 py-1"
          >
            Privacy Policy
          </a>
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <a
              href="https://github.com/djehauti/noctiluca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-cyan-400 flex items-center space-x-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repo</span>
            </a>
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded font-cyber text-xs uppercase font-bold text-obsidian-950 bg-cyan-400"
            >
              Install
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
