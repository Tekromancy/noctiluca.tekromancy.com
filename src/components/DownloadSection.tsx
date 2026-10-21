'use client';

import React from 'react';
import { Download, Shield, Cpu, ExternalLink, CheckCircle } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function DownloadSection() {
  return (
    <section id="download" className="relative py-24 bg-obsidian-900 border-b border-cyan-500/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-obsidian-950 via-obsidian-900 to-obsidian-950 border-2 border-cyan-500/40 shadow-glow-cyan overflow-hidden text-center lg:text-left">
          
          {/* Background cyber glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>READY FOR DEPLOYMENT // WEAR OS 5 (API 34+)</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-cyber font-black tracking-tight text-white uppercase">
                EQUIP <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 glow-text-cyan">NOCTILUCA</span> ON YOUR WRIST
              </h2>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-light">
                Channel the arcane glamour of the illusionist cyberpunk mage. Zero battery penalties, 8 living atmospheres, and complete on-device privacy.
              </p>

              {/* Hardware compatibility badges */}
              <div className="flex flex-wrap gap-2 pt-2 justify-center lg:justify-start text-xs font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-obsidian-950 border border-slate-800 text-slate-300 flex items-center space-x-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Google Pixel Watch 1 / 2 / 3</span>
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-obsidian-950 border border-slate-800 text-slate-300 flex items-center space-x-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Samsung Galaxy Watch 4 / 5 / 6 / 7</span>
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-obsidian-950 border border-slate-800 text-slate-300 flex items-center space-x-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>OnePlus Watch 2 &amp; Wear OS 5 Devices</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.noctiluca.watchface"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 rounded-xl font-cyber text-sm tracking-wider uppercase font-bold text-obsidian-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-white transition-all duration-300 shadow-glow-cyan flex items-center space-x-2.5"
                >
                  <Download className="w-4 h-4 text-obsidian-950" />
                  <span>Install on Google Play</span>
                  <ExternalLink className="w-3.5 h-3.5 text-obsidian-950 opacity-70" />
                </a>

                <a
                  href="https://github.com/djehauti/noctiluca/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl font-cyber text-sm tracking-wider uppercase font-semibold text-slate-200 bg-obsidian-950 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 flex items-center space-x-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Download APK / AAB</span>
                </a>
              </div>
            </div>

            {/* Right Card: Technical Highlights Box */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-obsidian-950/80 border border-slate-800 space-y-4 font-mono text-xs text-left">
              <div className="text-cyan-400 font-bold uppercase tracking-wider pb-2 border-b border-slate-800 flex items-center justify-between">
                <span>BUNDLE TELEMETRY</span>
                <span className="text-[10px] text-emerald-400">VERIFIED CLEAN</span>
              </div>

              <div className="space-y-2.5 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Package Format:</span>
                  <span className="font-bold text-white">Android App Bundle (.aab)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Binary Size:</span>
                  <span className="font-bold text-emerald-400">~100 KB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Framework:</span>
                  <span className="font-bold text-white">WFF Version 2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Permissions Requested:</span>
                  <span className="font-bold text-white">BODY_SENSORS, ACTIVITY</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Internet Access:</span>
                  <span className="font-bold text-emerald-400">NO (Zero Networking)</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400">
                Crafted by <strong className="text-purple-400">Tekromancy</strong>. 100% Open Source under MIT License.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
