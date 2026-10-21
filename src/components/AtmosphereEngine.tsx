'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sun, CloudRain, CloudLightning, CloudSnow, CloudFog, Moon, Sparkles, Compass, Eye, Thermometer, Wind } from 'lucide-react';

interface AtmosphereState {
  id: string;
  name: string;
  iconName: string;
  conditionCode: string;
  colorSpectrum: string;
  gradientPreview: string;
  horizonGlow: string;
  description: string;
  wffCondition: string;
  astronomicalRule: string;
}

const ATMOSPHERES: AtmosphereState[] = [
  {
    id: 'sunny',
    name: 'Sunny / Clear Day',
    iconName: '/icons/ic_sunny.png',
    conditionCode: 'WFF_CONDITION_CLEAR_DAY',
    colorSpectrum: 'Solar Azure & Radiant Amber',
    gradientPreview: 'from-[#0284c7] via-[#0369a1] to-[#050811]',
    horizonGlow: '#f59e0b',
    description: 'Solar sky blues with radiant amber horizon glow. Calibrated for maximum OLED readability under direct harsh outdoor sunlight.',
    wffCondition: '[WEATHER_CONDITION] == 1 && [IS_DAY] == 1',
    astronomicalRule: 'Solar elevation > 6° above horizon',
  },
  {
    id: 'golden',
    name: 'Golden Hour / Dawn-Dusk',
    iconName: '/icons/ic_clear.png',
    conditionCode: 'WFF_CONDITION_GOLDEN_HOUR',
    colorSpectrum: 'Warm Amber-Rose Twilight',
    gradientPreview: 'from-[#831843] via-[#701a75] to-[#050811]',
    horizonGlow: '#fb7185',
    description: 'Warm amber-rose gradient between day and twilight. Captures the ephemeral atmospheric refraction during sunrise and dusk windows.',
    wffCondition: '[SUNRISE_SUNSET_WINDOW] == 1',
    astronomicalRule: 'Solar elevation between -6° and +6°',
  },
  {
    id: 'midday',
    name: 'Midday High-Noon',
    iconName: '/icons/ic_sunny.png',
    conditionCode: 'WFF_CONDITION_MIDDAY',
    colorSpectrum: 'Crisp Azure Noon Sky',
    gradientPreview: 'from-[#0369a1] via-[#075985] to-[#050811]',
    horizonGlow: '#38bdf8',
    description: 'Crisp high-noon azure sky with enhanced contrast borders for full sunlight legibility. UV index automatically promoted to primary card indicator.',
    wffCondition: '[IS_DAY] == 1 && [SOLAR_ELEVATION] > 50°',
    astronomicalRule: 'Peak solar azimuth window',
  },
  {
    id: 'clear_night',
    name: 'Clear Night (Sea Sparkle)',
    iconName: '/icons/ic_partly_cloudy_night.png',
    conditionCode: 'WFF_CONDITION_CLEAR_NIGHT',
    colorSpectrum: 'Nocturnal Indigo & Lunar Cyan',
    gradientPreview: 'from-[#1e1b4b] via-[#0f172a] to-[#050811]',
    horizonGlow: '#00f0ff',
    description: 'Deep nocturnal indigo with lunar cyan horizon shimmer and 4 twinkling Noctiluca bioluminescent stars positioned around the clock geometry.',
    wffCondition: '[IS_DAY] == 0 && [WEATHER_CONDITION] == 1',
    astronomicalRule: 'Moon phase dynamically computed via lunar age',
  },
  {
    id: 'rain',
    name: 'Rain & Oceanic Drizzle',
    iconName: '/icons/ic_rain.png',
    conditionCode: 'WFF_CONDITION_RAIN',
    colorSpectrum: 'Hydro-Cyan & Oceanic Slate',
    gradientPreview: 'from-[#0e7490] via-[#155e75] to-[#050811]',
    horizonGlow: '#06b6d4',
    description: 'Hydro-cyan and oceanic slate tones. Activates the precipitation probability complication badge and rain bezel arc gauge.',
    wffCondition: '[WEATHER_CONDITION] == 3 || [WEATHER_CONDITION] == 2',
    astronomicalRule: 'Precipitation probability radar > 40%',
  },
  {
    id: 'thunderstorm',
    name: 'Tempest Thunderstorm',
    iconName: '/icons/ic_thunderstorm.png',
    conditionCode: 'WFF_CONDITION_THUNDERSTORM',
    colorSpectrum: 'Electric Violet & Moody Charcoal',
    gradientPreview: 'from-[#581c87] via-[#3b0764] to-[#050811]',
    horizonGlow: '#c084fc',
    description: 'Electric violet and moody charcoal lighting. High-contrast neon strokes give the impression of lightning pulses cutting through dark clouds.',
    wffCondition: '[WEATHER_CONDITION] == 4',
    astronomicalRule: 'Severe barometric gradient detected',
  },
  {
    id: 'snow',
    name: 'Snow & Glacial Ice',
    iconName: '/icons/ic_snow.png',
    conditionCode: 'WFF_CONDITION_SNOW',
    colorSpectrum: 'Frosted Glacial Crystalline Blue',
    gradientPreview: 'from-[#075985] via-[#0c4a6e] to-[#050811]',
    horizonGlow: '#7dd3fc',
    description: 'Frosted glacial crystalline blue. Digital snowflake motifs and pale borders maximize ambient light reflection on snowy winter days.',
    wffCondition: '[WEATHER_CONDITION] == 5',
    astronomicalRule: 'Sub-zero Celsius surface temperature',
  },
  {
    id: 'fog',
    name: 'Cloudy / Mist / Dense Fog',
    iconName: '/icons/ic_fog.png',
    conditionCode: 'WFF_CONDITION_FOG_MIST',
    colorSpectrum: 'Atmospheric Slate & Vapor Gray',
    gradientPreview: 'from-[#334155] via-[#1e293b] to-[#050811]',
    horizonGlow: '#94a3b8',
    description: 'Soft atmospheric slate-gray diffusion with frosted contours, offering subtle elegance without distracting from typography.',
    wffCondition: '[WEATHER_CONDITION] == 6 || [WEATHER_CONDITION] == 7',
    astronomicalRule: 'High relative humidity + low dew point spread',
  },
];

export default function AtmosphereEngine() {
  const [selectedAtmosphere, setSelectedAtmosphere] = useState<AtmosphereState>(ATMOSPHERES[3]);

  return (
    <section id="atmosphere" className="relative py-24 bg-obsidian-900 border-b border-cyan-500/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>FULL-BLEED WEATHER REACTIVITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-cyber font-black tracking-tight text-white uppercase">
            8 METEOROLOGICAL <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 glow-text-cyan">ATMOSPHERES</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Noctiluca doesn't just display static colors. It continuously recalculates solar zenith, daylight phase, and meteorological conditions on-device to morph the entire canvas into living atmosphere.
          </p>
        </div>

        {/* Selected Atmosphere Showcase */}
        <div className="mb-12 p-8 rounded-3xl bg-obsidian-950 border border-cyan-500/30 relative overflow-hidden shadow-2xl">
          {/* Dynamic background gradient simulation */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${selectedAtmosphere.gradientPreview} opacity-40 transition-all duration-700`}
          />
          <div
            className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-[100px] opacity-25 pointer-events-none transition-colors duration-700"
            style={{ backgroundColor: selectedAtmosphere.horizonGlow }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Weather Icon & Titles */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-2xl bg-obsidian-900 border border-slate-700 p-2.5 shadow-lg flex items-center justify-center">
                  <Image
                    src={selectedAtmosphere.iconName}
                    alt={selectedAtmosphere.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
                    {selectedAtmosphere.conditionCode}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-cyber font-black text-white">
                    {selectedAtmosphere.name}
                  </h3>
                  <div className="text-xs font-mono text-slate-300">
                    Spectrum: <span className="text-white font-bold">{selectedAtmosphere.colorSpectrum}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {selectedAtmosphere.description}
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-obsidian-900/90 border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase">WFF DECLARATIVE EXPRESSION</span>
                  <code className="text-cyan-300 font-semibold">{selectedAtmosphere.wffCondition}</code>
                </div>
                <div className="p-3 rounded-xl bg-obsidian-900/90 border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase">ASTRONOMICAL CALCULATION</span>
                  <span className="text-slate-200 font-semibold">{selectedAtmosphere.astronomicalRule}</span>
                </div>
              </div>
            </div>

            {/* Right: Glassmorphic Preview Visual */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full max-w-sm rounded-2xl p-5 bg-obsidian-900/80 backdrop-blur-xl border border-cyan-500/20 shadow-xl space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
                  <span className="text-cyan-400">ATMOSPHERIC GLOW SIMULATION</span>
                  <span className="text-slate-400">100% HARDWARE-DRIVEN</span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-slate-300">
                    <span>Horizon Refraction:</span>
                    <span className="font-bold text-white flex items-center space-x-1.5">
                      <span className="w-3 h-3 rounded-full inline-block border border-white/20" style={{ backgroundColor: selectedAtmosphere.horizonGlow }} />
                      <span>{selectedAtmosphere.horizonGlow}</span>
                    </span>
                  </div>
                  <div className="flex justify-between text-xs font-mono text-slate-300">
                    <span>OLED On-Pixel Ratio:</span>
                    <span className="text-emerald-400 font-bold">&lt; 8.8% Ambient</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono text-slate-300">
                    <span>Parallax Gyroscope Depth:</span>
                    <span className="text-purple-300 font-bold">Enabled (Wrist React)</span>
                  </div>
                </div>

                <a
                  href="#simulator"
                  className="w-full py-2.5 rounded-xl font-cyber text-xs uppercase font-bold text-obsidian-950 bg-cyan-400 hover:bg-cyan-300 flex items-center justify-center space-x-2 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>Preview in Watch Simulator</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 8-Card Atmosphere Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {ATMOSPHERES.map((atm) => {
            const isSelected = atm.id === selectedAtmosphere.id;
            return (
              <button
                key={atm.id}
                onClick={() => setSelectedAtmosphere(atm)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 group relative overflow-hidden ${
                  isSelected
                    ? 'bg-obsidian-950 border-cyan-400 shadow-glow-cyan scale-[1.02]'
                    : 'bg-obsidian-950/80 border-slate-800 hover:border-slate-700 hover:bg-obsidian-950'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="relative w-9 h-9 rounded-lg bg-obsidian-900 border border-slate-700/60 p-1 flex items-center justify-center">
                    <Image
                      src={atm.iconName}
                      alt={atm.name}
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <div
                    className="w-3.5 h-3.5 rounded-full border border-white/20"
                    style={{ backgroundColor: atm.horizonGlow }}
                    title={`Horizon Glow: ${atm.horizonGlow}`}
                  />
                </div>

                <div className="text-xs font-cyber font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {atm.name}
                </div>

                <div className="text-[10px] font-mono text-slate-400 mt-1 line-clamp-1">
                  {atm.colorSpectrum}
                </div>

                {isSelected && (
                  <div className="mt-2 text-[9px] font-mono text-cyan-400 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>ACTIVE ATMOSPHERE</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
