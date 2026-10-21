'use client';

import { Sparkles, Shield, Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-obsidian-950 border-t border-slate-800 text-slate-400 py-12 text-sm font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-cyan-400 font-mono text-xl font-bold">✦</span>
              <span className="font-cyber font-black tracking-wider text-xl text-white">
                NOCTILUCA
              </span>
              <span className="text-xs text-purple-400 font-mono font-semibold">
                // TEKROMANCY
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Noctiluca is an illusionist cyberpunk mage capable of altering visage across dynamic atmospheres. An open-source Wear OS 5 watch face crafted with Google&apos;s declarative Watch Face Format (WFF v2).
            </p>
            <div className="text-[11px] text-slate-500">
              Named after <em>Noctiluca scintillans</em> (sea sparkle) — living bioluminescence that illuminates dark waves.
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-2 text-xs">
            <div className="font-cyber font-bold text-white uppercase tracking-wider text-xs mb-3">
              Navigation
            </div>
            <div>
              <a href="#hero" className="hover:text-cyan-400 transition-colors">Hero Overview</a>
            </div>
            <div>
              <a href="#visages" className="hover:text-cyan-400 transition-colors">Visage Chamber</a>
            </div>
            <div>
              <a href="#simulator" className="hover:text-cyan-400 transition-colors">Watch Simulator</a>
            </div>
            <div>
              <a href="#atmosphere" className="hover:text-cyan-400 transition-colors">Atmosphere Engine</a>
            </div>
            <div>
              <a href="#documentation" className="hover:text-cyan-400 transition-colors">Documentation</a>
            </div>
          </div>

          {/* Legal / Resources */}
          <div className="space-y-2 text-xs">
            <div className="font-cyber font-bold text-white uppercase tracking-wider text-xs mb-3">
              Resources &amp; Legal
            </div>
            <div>
              <a
                href="https://github.com/djehauti/noctiluca"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center space-x-1"
              >
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div>
              <a
                href="/privacy/"
                className="hover:text-cyan-400 transition-colors flex items-center space-x-1"
              >
                <span>Privacy Policy</span>
                <span className="text-cyan-400 text-xs">→</span>
              </a>
            </div>
            <div>
              <a
                href="https://developer.android.com/training/wearables/wff"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center space-x-1"
              >
                <span>Google WFF Guidelines</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div>
              <a
                href="https://tekromancy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors flex items-center space-x-1"
              >
                <span>Tekromancy Studio</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Tekromancy. All rights reserved. Open source under MIT License.
          </div>
          <div className="flex items-center space-x-4 text-[11px]">
            <span>Wear OS by Google is a trademark of Google LLC.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
