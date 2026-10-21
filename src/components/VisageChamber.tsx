'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Eye, Zap, Flame, Snowflake, Waves, Layers, Terminal, Check, ArrowRight } from 'lucide-react';

export interface Visage {
  id: string;
  name: string;
  alias: string;
  tagline: string;
  image: string;
  icon: React.ReactNode;
  themeColor: string;
  borderColor: string;
  glowClass: string;
  accentBg: string;
  spellFormula: string;
  metCondition: string;
  wffPalette: {
    skyGradient: string;
    horizonGlow: string;
    glassBorder: string;
    bezelAccent: string;
  };
  glassPreset: 'Deep Obsidian' | 'Frosted Glass' | 'Crystal Minimal';
  description: string;
  technomancyLog: string;
}

export const VISAGES: Visage[] = [
  {
    id: 'obsidian',
    name: 'Void Obsidian Visage',
    alias: 'The Nocturnal Illusionist',
    tagline: 'Deep midnight obsidian weave with orbital bioluminescent glyphs.',
    image: '/images/visage-obsidian.jpg',
    icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
    themeColor: '#00f0ff',
    borderColor: 'border-cyan-400',
    glowClass: 'shadow-glow-cyan',
    accentBg: 'bg-cyan-500/10 text-cyan-300',
    spellFormula: 'GLAMOUR_VOID_01 :: PHOTONIC_ENCRYPTION(LAT, LON, TIME)',
    metCondition: 'Clear Night • 4 Bioluminescent Stars Active',
    wffPalette: {
      skyGradient: '#050811 → #020409',
      horizonGlow: '#00f0ff (Lunar Cyan)',
      glassBorder: '#00f0ff28 (1.5px glowing stroke)',
      bezelAccent: '#38bdf8 / #a855f7',
    },
    glassPreset: 'Deep Obsidian',
    description: 'The foundation visage of Noctiluca. An obsidian weave trench coat concealing neural coprocessors. Floating holographic glyphs orbit her visage in mathematical spiral harmonics, deflecting visual and infrared surveillance across neon back-alleys.',
    technomancyLog: 'Neural weave initialized. On-pixel ratio maintained at <8.5%. Shifting facial geometry creates 99.4% obfuscation against biometric facial recognition drones.',
  },
  {
    id: 'solar',
    name: 'Solar Dawn Visage',
    alias: 'The Aurora Technomancer',
    tagline: 'Amber-rose twilight glamour refracting piercing sunrise irradiance.',
    image: '/images/visage-solar.jpg',
    icon: <Flame className="w-5 h-5 text-amber-400" />,
    themeColor: '#f59e0b',
    borderColor: 'border-amber-400',
    glowClass: 'shadow-glow-gold',
    accentBg: 'bg-amber-500/10 text-amber-300',
    spellFormula: 'SOLAR_CREST_04 :: REFRACT_HORIZON(SOLAR_ELEVATION <= 6°)',
    metCondition: 'Golden Hour • Dawn / Twilight Window',
    wffPalette: {
      skyGradient: '#1e1b4b → #7c2d12',
      horizonGlow: '#f59e0b (Solar Amber)',
      glassBorder: '#fbbf2438 (Rose-Gold Glass)',
      bezelAccent: '#f59e0b / #fb7185',
    },
    glassPreset: 'Frosted Glass',
    description: 'When the dawn sun breaks through the smog shroud of the megacity, Noctiluca harmonizes with solar irradiance. Iridescent obsidian armor reflects rose-gold twilight, refracting blinding sunlit sigils that reshape her visage into an ethereal solar diadem.',
    technomancyLog: 'Photovoltaic absorption peak at 100%. Dynamic UV index complication automatically calibrated. Solar horizon glow calculated via on-device astronomical ephemeris.',
  },
  {
    id: 'tempest',
    name: 'Tempest Plasma Visage',
    alias: 'The Storm Weaver',
    tagline: 'Crackling violet plasma & electric lightning arcs shielding her visage.',
    image: '/images/visage-tempest.jpg',
    icon: <Zap className="w-5 h-5 text-purple-400" />,
    themeColor: '#a855f7',
    borderColor: 'border-purple-400',
    glowClass: 'shadow-glow-violet',
    accentBg: 'bg-purple-500/10 text-purple-300',
    spellFormula: 'TEMPEST_ARC_09 :: HARVEST_STATIC(BAROMETRIC_SURGE > 10hPa)',
    metCondition: 'Thunderstorm • Atmospheric Electrostatic Discharge',
    wffPalette: {
      skyGradient: '#1e1b4b → #0f172a',
      horizonGlow: '#c084fc (Electric Violet)',
      glassBorder: '#c084fc40 (High-Voltage Border)',
      bezelAccent: '#818cf8 / #e879f9',
    },
    glassPreset: 'Deep Obsidian',
    description: 'High-voltage storm squalls charge her cybernetic reservoirs. Ionizing violet plasma crackles along her temples and neural implants, turning heavy rain into a shimmering kinetic barrier. Her visage becomes a masked electric wraith.',
    technomancyLog: 'Electrostatic discharge channeled into secondary battery arc gauge. Barometric pressure drop registered. Pre-cache rain probability radar at 98%.',
  },
  {
    id: 'glacial',
    name: 'Glacial Cryo Visage',
    alias: 'The Frost Weaver',
    tagline: 'Frosted crystalline holographic masks and falling digital snow fractals.',
    image: '/images/visage-glacial.jpg',
    icon: <Snowflake className="w-5 h-5 text-sky-400" />,
    themeColor: '#38bdf8',
    borderColor: 'border-sky-400',
    glowClass: 'shadow-glow-cyan',
    accentBg: 'bg-sky-500/10 text-sky-300',
    spellFormula: 'CRYONIC_MIRROR_03 :: CONDENSE_AEROSOL(TEMP < 0°C)',
    metCondition: 'Snow, Ice & Glacial Frost • Crystalline Mode',
    wffPalette: {
      skyGradient: '#0c4a6e → #082f49',
      horizonGlow: '#38bdf8 (Glacial Cyan)',
      glassBorder: '#7dd3fc30 (Frost Crystal)',
      bezelAccent: '#38bdf8 / #e0f2fe',
    },
    glassPreset: 'Crystal Minimal',
    description: 'Sub-zero temperatures trigger micro-thermal condensation. Digital snowflakes crystalize around her brow and cheekbones, weaving a diamond-hard holographic ice mask that diffuses thermal scans and laser targeting.',
    technomancyLog: 'Thermal signature lowered to 0.04 Kelvin above ambient. Watch face shifts to Crystal Minimal ultra-transparency, maximizing frosted snow atmosphere visibility.',
  },
  {
    id: 'oceanic',
    name: 'Bioluminescent Abyss Visage',
    alias: 'The Sea Sparkle Technomancer',
    tagline: 'Swirling cyan dinoflagellate trails and translucent fluid water-masks.',
    image: '/images/visage-oceanic.jpg',
    icon: <Waves className="w-5 h-5 text-teal-400" />,
    themeColor: '#14b8a6',
    borderColor: 'border-teal-400',
    glowClass: 'shadow-glow-cyan',
    accentBg: 'bg-teal-500/10 text-teal-300',
    spellFormula: 'NOCTILUCA_PRIME :: BIOLUMINESCENT_SURGE(DINOFLAGELLATE_COUNT)',
    metCondition: 'Oceanic Rain, Drizzle & Maritime Fog',
    wffPalette: {
      skyGradient: '#042f2e → #022c22',
      horizonGlow: '#2dd4bf (Sea Sparkle Turquoise)',
      glassBorder: '#14b8a640 (Aquatic Border)',
      bezelAccent: '#2dd4bf / #38bdf8',
    },
    glassPreset: 'Frosted Glass',
    description: 'The primordial inspiration of Noctiluca scintillans. Along nocturnal oceanfront piers where high-tech neon reflects upon rolling waves, bio-photonic trails awaken. A shimmering fluid mask cascades across her face, emitting cold, living light.',
    technomancyLog: 'Crown jewel notification beacon pulses with bioluminescent cyan at (217, 6). Rain chance complication automatically surfaces in bezel arc gauge.',
  },
];

interface VisageChamberProps {
  onSelectVisage?: (visage: Visage) => void;
  selectedVisageId?: string;
}

export default function VisageChamber({ onSelectVisage, selectedVisageId: externalSelectedId }: VisageChamberProps) {
  const [internalSelectedId, setInternalSelectedId] = useState<string>('obsidian');
  const activeId = externalSelectedId || internalSelectedId;
  const currentVisage = VISAGES.find((v) => v.id === activeId) || VISAGES[0];

  const handleSelect = (visage: Visage) => {
    setInternalSelectedId(visage.id);
    if (onSelectVisage) {
      onSelectVisage(visage);
    }
  };

  return (
    <section id="visages" className="relative py-24 bg-obsidian-900/60 border-t border-b border-cyan-500/20 overflow-hidden">
      {/* Background glow matching active visage */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: currentVisage.themeColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>THE ALTERING VISAGE CHAMBER</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-cyber font-black tracking-tight text-white uppercase">
            MORPHING GLAMOUR & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 glow-text-cyan">VISAGES</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Noctiluca alters her visage in response to atmospheric barometric shifts, celestial positions, and biological feedback. Select any visage below to witness her metamorphic transformation.
          </p>
        </div>

        {/* Visage Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {VISAGES.map((visage) => {
            const isSelected = visage.id === activeId;
            return (
              <button
                key={visage.id}
                onClick={() => handleSelect(visage)}
                className={`flex items-center space-x-2.5 px-4 py-3 rounded-xl font-cyber text-xs tracking-wider uppercase transition-all duration-300 border ${
                  isSelected
                    ? `bg-obsidian-950 text-white ${visage.borderColor} ${visage.glowClass} scale-105`
                    : 'bg-obsidian-900/80 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <span>{visage.icon}</span>
                <span className="font-bold">{visage.name.replace(' Visage', '')}</span>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />}
              </button>
            );
          })}
        </div>

        {/* Active Visage Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Portrait of Active Visage */}
          <div className="lg:col-span-6 relative">
            <div className={`relative rounded-2xl overflow-hidden border-2 ${currentVisage.borderColor} ${currentVisage.glowClass} bg-obsidian-950 transition-all duration-500`}>
              <div className="aspect-[4/5] relative w-full">
                <Image
                  src={currentVisage.image}
                  alt={currentVisage.name}
                  fill
                  className="object-cover object-center transition-all duration-700"
                  priority
                />
                
                {/* Atmospheric gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />
                
                {/* Badges on Portrait */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-obsidian-950/85 backdrop-blur-md border border-cyan-500/40 text-cyan-300">
                    {currentVisage.id.toUpperCase()} // ACTIVE
                  </div>
                  <div className="font-mono text-xs px-2.5 py-1 rounded bg-obsidian-950/85 backdrop-blur-md border border-purple-500/40 text-purple-300">
                    {currentVisage.glassPreset}
                  </div>
                </div>

                <div className="absolute top-4 right-4 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-obsidian-950/90 border border-emerald-500/40 text-emerald-400 font-mono text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>TRANSMUTATION STABLE</span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-obsidian-950/90 backdrop-blur-lg border border-slate-700/60">
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    {currentVisage.alias}
                  </div>
                  <div className="text-xl font-cyber font-bold text-white mt-0.5">
                    {currentVisage.name}
                  </div>
                  <p className="text-xs text-slate-300 mt-1 italic">
                    "{currentVisage.tagline}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visage Arcana & Technical Specifications */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Header info */}
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                <span>TECHNO-ARCANUM SPECIFICATION</span>
                <span className="text-cyan-500">•</span>
                <span className="text-purple-400">{currentVisage.id}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-cyber font-bold text-white">
                {currentVisage.name}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                {currentVisage.description}
              </p>
            </div>

            {/* Spell & Atmospheric Trigger Card */}
            <div className="p-4 rounded-xl bg-obsidian-950 border border-slate-800 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                <span className="flex items-center space-x-1.5 text-cyan-400">
                  <Terminal className="w-4 h-4" />
                  <span>ARCANUM TRIGGER FORMULA</span>
                </span>
                <span className="text-[10px] text-slate-400 uppercase">WFF v2 DECLARATIVE</span>
              </div>
              <div className="p-2.5 rounded bg-black/70 text-cyan-300 font-mono text-[11px] overflow-x-auto border border-cyan-500/20">
                <code>{currentVisage.spellFormula}</code>
              </div>
              <div className="flex items-center justify-between text-slate-300 pt-1 text-[11px]">
                <span className="text-slate-400">Meteorological Condition:</span>
                <span className="font-semibold text-white">{currentVisage.metCondition}</span>
              </div>
            </div>

            {/* Wear OS WFF Palette Harmonization */}
            <div className="p-4 rounded-xl bg-obsidian-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center space-x-1.5 text-purple-400">
                  <Layers className="w-4 h-4" />
                  <span>WEAR OS 5 PALETTE MAPPING</span>
                </span>
                <span className="text-slate-400 text-[10px]">WFF XML BINDING</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-lg bg-obsidian-900 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-mono">SKY GRADIENT</span>
                  <span className="font-mono text-slate-200 font-semibold">{currentVisage.wffPalette.skyGradient}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-obsidian-900 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-mono">HORIZON GLOW</span>
                  <span className="font-mono text-slate-200 font-semibold">{currentVisage.wffPalette.horizonGlow}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-obsidian-900 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-mono">GLASS CONTAINER</span>
                  <span className="font-mono text-slate-200 font-semibold">{currentVisage.glassPreset}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-obsidian-900 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-mono">BEZEL GAUGES</span>
                  <span className="font-mono text-slate-200 font-semibold">{currentVisage.wffPalette.bezelAccent}</span>
                </div>
              </div>
            </div>

            {/* Technomancy Telemetry Log */}
            <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs font-mono text-cyan-300 flex items-start space-x-2.5">
              <span className="text-cyan-400 mt-0.5">⚡</span>
              <div>
                <span className="font-bold text-white uppercase block">LOG // VISAGE_TELEMETRY:</span>
                <span className="text-slate-300">{currentVisage.technomancyLog}</span>
              </div>
            </div>

            {/* Action CTA: Apply to Simulator */}
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#simulator"
                onClick={() => handleSelect(currentVisage)}
                className="px-6 py-3 rounded-xl font-cyber text-xs uppercase font-bold tracking-wider text-obsidian-950 bg-cyan-400 hover:bg-cyan-300 shadow-glow-cyan flex items-center space-x-2 transition-all"
              >
                <Sparkles className="w-4 h-4 text-obsidian-950" />
                <span>Sync with Watch Simulator</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#documentation"
                className="px-5 py-3 rounded-xl font-mono text-xs text-slate-300 hover:text-white bg-obsidian-900 border border-slate-700 flex items-center space-x-2 transition-colors"
              >
                <span>View WFF XML Code</span>
              </a>
            </div>

          </div>

        </div>

        {/* Thumbnail Carousel of All Visages */}
        <div className="mt-16 pt-12 border-t border-slate-800">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-6 text-center">
            ALL 5 ALTERING VISAGES AVAILABLE IN NOCTILUCA
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {VISAGES.map((v) => {
              const isSelected = v.id === activeId;
              return (
                <button
                  key={v.id}
                  onClick={() => handleSelect(v)}
                  className={`group relative rounded-xl overflow-hidden border transition-all duration-300 text-left ${
                    isSelected
                      ? `${v.borderColor} ring-2 ring-cyan-400/50 scale-105 shadow-glow-cyan`
                      : 'border-slate-800 hover:border-slate-600 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="aspect-square relative w-full">
                    <Image
                      src={v.image}
                      alt={v.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/30 to-transparent" />
                    
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="text-[10px] font-mono text-cyan-400 uppercase">
                        {v.id}
                      </div>
                      <div className="text-xs font-cyber font-bold text-white truncate">
                        {v.name.replace(' Visage', '')}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
