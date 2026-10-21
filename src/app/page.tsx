'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VisageChamber, { Visage } from '@/components/VisageChamber';
import WatchSimulator, { WeatherState, GlassTheme } from '@/components/WatchSimulator';
import AtmosphereEngine from '@/components/AtmosphereEngine';
import DocSection from '@/components/DocSection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [selectedVisageId, setSelectedVisageId] = useState<string>('obsidian');
  const [simWeather, setSimWeather] = useState<WeatherState>('clear_night');
  const [simTheme, setSimTheme] = useState<GlassTheme>('obsidian');

  // When a visage is selected, harmonize the watch simulator
  const handleSelectVisage = (visage: Visage) => {
    setSelectedVisageId(visage.id);
    switch (visage.id) {
      case 'obsidian':
        setSimWeather('clear_night');
        setSimTheme('obsidian');
        break;
      case 'solar':
        setSimWeather('golden');
        setSimTheme('frosted');
        break;
      case 'tempest':
        setSimWeather('thunderstorm');
        setSimTheme('obsidian');
        break;
      case 'glacial':
        setSimWeather('snow');
        setSimTheme('crystal');
        break;
      case 'oceanic':
        setSimWeather('rain');
        setSimTheme('frosted');
        break;
      default:
        setSimWeather('clear_night');
        setSimTheme('obsidian');
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-obsidian-950 text-slate-100 selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <Hero />
      <VisageChamber
        selectedVisageId={selectedVisageId}
        onSelectVisage={handleSelectVisage}
      />
      <WatchSimulator
        key={`${simWeather}-${simTheme}`}
        initialWeather={simWeather}
        initialTheme={simTheme}
      />
      <AtmosphereEngine />
      <DocSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}
