'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Shield, Cpu, Activity, CloudSun, Eye, ArrowRight, Layers } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 lg:py-24">
      {/* Background Cyber Gradients & Glows */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Story & Product Pitch */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>TEKROMANCY EXPERIMENTAL ARTIFACT // WFF v2</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-cyber font-black tracking-tight uppercase leading-none">
              <span className="block text-slate-100">THE ILLUSIONIST</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 glow-text-cyan">
                CYBERPUNK MAGE
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              Meet <strong className="text-cyan-300 font-semibold">Noctiluca</strong> — an arcane technomancer capable of altering visage across the digital atmospheric spectrum. Engineered for <strong className="text-white">Wear OS 5</strong> using declarative <span className="text-purple-300 font-mono">Watch Face Format v2</span>.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              <div className="p-3 rounded-xl bg-obsidian-900/80 border border-cyan-500/20 text-left">
                <CloudSun className="w-5 h-5 text-cyan-400 mb-1" />
                <div className="text-xs font-cyber font-bold text-white">8 ATMOSPHERES</div>
                <div className="text-[11px] text-slate-400">Weather-reactive</div>
              </div>

              <div className="p-3 rounded-xl bg-obsidian-900/80 border border-purple-500/20 text-left">
                <Sparkles className="w-5 h-5 text-purple-400 mb-1" />
                <div className="text-xs font-cyber font-bold text-white">MORPHING VISAGE</div>
                <div className="text-[11px] text-slate-400">Shifting glamours</div>
              </div>

              <div className="p-3 rounded-xl bg-obsidian-900/80 border border-emerald-500/20 text-left">
                <Cpu className="w-5 h-5 text-emerald-400 mb-1" />
                <div className="text-xs font-cyber font-bold text-white">ZERO RUNTIME</div>
                <div className="text-[11px] text-slate-400">Pure declarative XML</div>
              </div>

              <div className="p-3 rounded-xl bg-obsidian-900/80 border border-sky-500/20 text-left">
                <Shield className="w-5 h-5 text-sky-400 mb-1" />
                <div className="text-xs font-cyber font-bold text-white">0 BYTES STORED</div>
                <div className="text-[11px] text-slate-400">Absolute privacy</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#visages"
                className="px-6 py-3.5 rounded-xl font-cyber text-sm tracking-wider uppercase font-bold text-obsidian-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-white transition-all duration-300 shadow-glow-cyan flex items-center space-x-2"
              >
                <Eye className="w-4 h-4 text-obsidian-950" />
                <span>Enter Visage Chamber</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#simulator"
                className="px-6 py-3.5 rounded-xl font-cyber text-sm tracking-wider uppercase font-semibold text-slate-200 bg-obsidian-900/90 border border-cyan-500/30 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 flex items-center space-x-2"
              >
                <Activity className="w-4 h-4 text-cyan-400" />
                <span>Launch Simulator</span>
              </a>

              <a
                href="#documentation"
                className="px-5 py-3.5 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-200 flex items-center space-x-1.5 transition-colors"
              >
                <span>Read Technical Specs</span>
                <span className="text-cyan-400">→</span>
              </a>
            </div>

            {/* Sub-quote */}
            <div className="pt-2 text-xs font-mono text-slate-400 flex items-center justify-center lg:justify-start space-x-2">
              <span className="text-cyan-500">▶</span>
              <span>Inspired by <em className="text-cyan-300">Noctiluca scintillans</em> — bioluminescence shifting with oceanic storms.</span>
            </div>
          </div>

          {/* Right Column: Visual Showcase (Mage Portrait + Watch Face) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Holographic Ring backdrop */}
            <div className="absolute w-[440px] h-[440px] rounded-full border border-cyan-500/20 animate-spin" style={{ animationDuration: '40s' }} />
            <div className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-purple-500/30 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
            
            {/* Dual Card Showcase Container */}
            <div className="relative w-full max-w-md">
              
              {/* Primary Image: Noctiluca Cyberpunk Mage */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-400/40 shadow-glow-cyan bg-obsidian-900 group">
                <div className="aspect-[4/5] relative w-full">
                  <Image
                    src="/images/visage-obsidian.jpg"
                    alt="Noctiluca - Illusionist Cyberpunk Mage altering visage"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Atmospheric overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />
                  
                  {/* Tech HUD overlays on character image */}
                  <div className="absolute top-4 left-4 font-mono text-[10px] text-cyan-400 bg-obsidian-950/80 px-2 py-1 rounded border border-cyan-500/40">
                    VISAGE // VOID_OBSIDIAN.HEX
                  </div>
                  <div className="absolute top-4 right-4 flex items-center space-x-1.5 font-mono text-[10px] text-emerald-400 bg-obsidian-950/80 px-2 py-1 rounded border border-emerald-500/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>SYNCHRONIZED</span>
                  </div>

                  {/* Character Title Card at bottom of photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-obsidian-950/85 backdrop-blur-md border border-cyan-500/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-mono text-purple-400 uppercase tracking-widest">
                          Arcane Technomancy
                        </div>
                        <div className="font-cyber font-bold text-lg text-white">
                          NOCTILUCA SCINTILLANS
                        </div>
                      </div>
                      <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
                        <Sparkles className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="text-xs text-slate-300 mt-1 line-clamp-2">
                      Channels environmental telemetry, altering holographic visage with ambient daylight, precipitation, and bio-feedback.
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Watch Face Thumbnail Preview */}
              <div className="absolute -bottom-8 -left-8 sm:-left-12 w-40 sm:w-44 h-40 sm:h-44 rounded-full border-2 border-cyan-400/60 shadow-glow-cyan overflow-hidden bg-black p-1 group hover:scale-110 transition-transform duration-300 z-20">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/watchface-preview.png"
                    alt="Noctiluca Wear OS Watch Face Preview"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-obsidian-950 border border-cyan-400 text-cyan-300 text-[9px] font-mono uppercase px-2 py-0.5 rounded-full whitespace-nowrap shadow-md">
                  WEAR OS 5 // WFF
                </div>
              </div>

              {/* Floating Battery & Heart telemetry badges */}
              <div className="absolute -top-4 -right-4 bg-obsidian-950/90 border border-purple-500/50 p-2.5 rounded-xl shadow-lg backdrop-blur-md text-[11px] font-mono text-purple-300 flex items-center space-x-2">
                <Activity className="w-4 h-4 text-rose-400 animate-pulse" />
                <div>
                  <div className="text-[9px] text-slate-400 uppercase">HEART_RATE</div>
                  <span className="font-bold text-white">72 BPM</span> • SYNCED
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
