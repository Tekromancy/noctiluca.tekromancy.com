'use client';

import React, { useState, useEffect } from 'react';
import { 
  Battery, 
  BatteryCharging, 
  Footprints, 
  Heart, 
  CloudRain, 
  Sun, 
  Moon, 
  CloudLightning, 
  CloudSnow, 
  CloudFog, 
  Bell, 
  Sliders, 
  Eye, 
  Sparkles, 
  RotateCcw,
  Zap
} from 'lucide-react';

export type WeatherState = 'sunny' | 'golden' | 'clear_night' | 'rain' | 'thunderstorm' | 'snow' | 'fog';
export type GlassTheme = 'obsidian' | 'frosted' | 'crystal';

interface WatchSimulatorProps {
  initialWeather?: WeatherState;
  initialTheme?: GlassTheme;
}

export default function WatchSimulator({
  initialWeather = 'clear_night',
  initialTheme = 'obsidian',
}: WatchSimulatorProps) {
  // Time state
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);

  // Sensor & Complication simulation states
  const [battery, setBattery] = useState(84);
  const [isCharging, setIsCharging] = useState(false);
  const [steps, setSteps] = useState(8420);
  const stepGoal = 10000;
  const [heartRate, setHeartRate] = useState(72);
  const [weather, setWeather] = useState<WeatherState>(initialWeather);
  const [rainChance, setRainChance] = useState(20);
  const [uvIndex, setUvIndex] = useState(3);
  const [notifications, setNotifications] = useState(2);
  const [glassTheme, setGlassTheme] = useState<GlassTheme>(initialTheme);
  const [forecastMode, setForecastMode] = useState<'hourly' | 'daily'>('hourly');
  const [isAodMode, setIsAodMode] = useState(false);

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format hours and minutes
  const hours = is24Hour
    ? time.getHours().toString().padStart(2, '0')
    : ((time.getHours() % 12) || 12).toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  const ampm = time.getHours() >= 12 ? 'PM' : 'AM';

  // Weather profiles
  const weatherConfigs = {
    sunny: {
      label: 'Sunny / Clear Day',
      temp: '76°',
      highLow: 'H:81° L:56°',
      condition: 'Clear Sky',
      icon: <Sun className="w-6 h-6 text-amber-400" />,
      bgGradient: 'from-sky-900 via-sky-950 to-obsidian-950',
      horizonGlow: '#f59e0b',
    },
    golden: {
      label: 'Golden Hour / Dawn',
      temp: '68°',
      highLow: 'H:74° L:52°',
      condition: 'Sunset Glow',
      icon: <Sun className="w-6 h-6 text-rose-400" />,
      bgGradient: 'from-amber-950 via-rose-950 to-obsidian-950',
      horizonGlow: '#fb7185',
    },
    clear_night: {
      label: 'Clear Night (Noctiluca)',
      temp: '64°',
      highLow: 'H:72° L:50°',
      condition: 'Starlit Indigo',
      icon: <Moon className="w-6 h-6 text-cyan-300" />,
      bgGradient: 'from-indigo-950 via-slate-950 to-obsidian-950',
      horizonGlow: '#00f0ff',
    },
    rain: {
      label: 'Rain & Drizzle',
      temp: '58°',
      highLow: 'H:62° L:54°',
      condition: 'Hydro Drizzle',
      icon: <CloudRain className="w-6 h-6 text-cyan-400" />,
      bgGradient: 'from-cyan-950 via-slate-950 to-obsidian-950',
      horizonGlow: '#06b6d4',
    },
    thunderstorm: {
      label: 'Thunderstorm',
      temp: '65°',
      highLow: 'H:70° L:60°',
      condition: 'Severe Plasma',
      icon: <CloudLightning className="w-6 h-6 text-purple-400 animate-pulse" />,
      bgGradient: 'from-purple-950 via-slate-950 to-obsidian-950',
      horizonGlow: '#a855f7',
    },
    snow: {
      label: 'Snow & Ice',
      temp: '28°',
      highLow: 'H:32° L:22°',
      condition: 'Glacial Cryo',
      icon: <CloudSnow className="w-6 h-6 text-sky-300" />,
      bgGradient: 'from-sky-950 via-slate-950 to-obsidian-950',
      horizonGlow: '#38bdf8',
    },
    fog: {
      label: 'Cloudy / Fog',
      temp: '54°',
      highLow: 'H:58° L:48°',
      condition: 'Dense Vapor',
      icon: <CloudFog className="w-6 h-6 text-slate-400" />,
      bgGradient: 'from-slate-900 via-slate-950 to-obsidian-950',
      horizonGlow: '#64748b',
    },
  };

  const currentWeather = weatherConfigs[weather];

  // Battery gauge color
  const getBatteryColor = () => {
    if (isCharging) return '#00e676';
    if (battery > 20) return '#4ade80';
    if (battery > 10) return '#f59e0b';
    return '#f43f5e';
  };

  // Glass card styles
  const glassStyles = {
    obsidian: {
      bg: 'rgba(5, 8, 17, 0.75)',
      border: '1.5px solid rgba(0, 240, 255, 0.25)',
      shadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
    },
    frosted: {
      bg: 'rgba(9, 13, 22, 0.45)',
      border: '1.5px solid rgba(255, 255, 255, 0.2)',
      shadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
    },
    crystal: {
      bg: 'rgba(9, 13, 22, 0.15)',
      border: '1px solid rgba(255, 255, 255, 0.12)',
      shadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    },
  };

  const activeGlass = glassStyles[glassTheme];

  // Calculate SVG arc paths
  // Center is (225, 225), radius is 215, strokeWidth 8
  const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
    const polarToCartesian = (centerX: number, centerY: number, r: number, angleInDegrees: number) => {
      const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
      return {
        x: centerX + r * Math.cos(angleInRadians),
        y: centerY + r * Math.sin(angleInRadians),
      };
    };
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    return ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ');
  };

  // Arc angle spans from watchface.xml:
  // Top-Left: 280° to 344° (Span = 64°) -> Battery
  // Top-Right: 16° to 80° (Span = 64°) -> Steps
  // Bottom-Left: 196° to 260° (Span = 64°) -> Heart
  // Bottom-Right: 100° to 164° (Span = 64°) -> Rain/UV
  const batteryPct = Math.min(100, Math.max(0, battery));
  const batteryEndAngle = 280 + (64 * batteryPct) / 100;

  const stepsPct = Math.min(100, Math.max(0, (steps / stepGoal) * 100));
  const stepsEndAngle = 16 + (64 * stepsPct) / 100;

  const hrPct = Math.min(100, Math.max(0, ((heartRate - 40) / 140) * 100));
  const hrEndAngle = 196 + (64 * hrPct) / 100;

  const rainPct = Math.min(100, Math.max(0, rainChance));
  const rainEndAngle = 100 + (64 * rainPct) / 100;

  return (
    <section id="simulator" className="relative py-24 bg-obsidian-950 overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE WEAR OS 5 SIMULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-cyber font-black tracking-tight text-white uppercase">
            LIVE WATCH FACE <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 glow-text-cyan">SANDBOX</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Experience the exact declarative Watch Face Format (WFF v2) geometry. Toggle atmospheric weather conditions, biometric sensors, bezel gauges, and ambient AOD mode in real time.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: The Watch Hardware Frame (450x450 display) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            {/* Wear OS Bezel Ring Hardware Frame */}
            <div className="relative p-6 rounded-full bg-gradient-to-b from-slate-700 via-slate-900 to-black shadow-2xl border-4 border-slate-800">
              
              {/* Outer Case Texture */}
              <div className="relative w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full overflow-hidden border-2 border-slate-700/80 shadow-inner bg-black">
                
                {/* Watch Canvas / Screen */}
                <div
                  className={`w-full h-full relative flex flex-col items-center justify-between p-4 transition-all duration-700 ${
                    isAodMode
                      ? 'bg-black text-slate-400'
                      : `bg-gradient-to-b ${currentWeather.bgGradient} text-white`
                  }`}
                >
                  
                  {/* Atmospheric Glow at Horizon (hidden in AOD) */}
                  {!isAodMode && (
                    <div
                      className="absolute inset-x-0 bottom-0 h-40 opacity-30 blur-2xl pointer-events-none transition-colors duration-700"
                      style={{ backgroundColor: currentWeather.horizonGlow }}
                    />
                  )}

                  {/* Twinkling Stars (in Clear Night mode) */}
                  {!isAodMode && weather === 'clear_night' && (
                    <div className="absolute inset-0 pointer-events-none">
                      <span className="absolute top-16 left-28 w-1 h-1 bg-cyan-300 rounded-full animate-ping" />
                      <span className="absolute top-24 right-32 w-1.5 h-1.5 bg-cyan-200 rounded-full animate-pulse" />
                      <span className="absolute top-40 left-20 w-1 h-1 bg-white rounded-full opacity-80" />
                      <span className="absolute top-32 right-20 w-1.5 h-1.5 bg-sky-200 rounded-full animate-ping" />
                    </div>
                  )}

                  {/* 4 Concentric Bezel Arcs SVG Layer */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-10"
                    viewBox="0 0 450 450"
                  >
                    {/* Gauge Track Backgrounds (Dim) */}
                    <path
                      d={describeArc(225, 225, 215, 280, 344)}
                      fill="none"
                      stroke={isAodMode ? '#1e293b' : 'rgba(255, 255, 255, 0.12)'}
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    <path
                      d={describeArc(225, 225, 215, 16, 80)}
                      fill="none"
                      stroke={isAodMode ? '#1e293b' : 'rgba(255, 255, 255, 0.12)'}
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    <path
                      d={describeArc(225, 225, 215, 196, 260)}
                      fill="none"
                      stroke={isAodMode ? '#1e293b' : 'rgba(255, 255, 255, 0.12)'}
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    <path
                      d={describeArc(225, 225, 215, 100, 164)}
                      fill="none"
                      stroke={isAodMode ? '#1e293b' : 'rgba(255, 255, 255, 0.12)'}
                      strokeWidth="8"
                      strokeLinecap="round"
                    />

                    {/* Active Filled Gauge Arcs (Hidden or dim in AOD) */}
                    {!isAodMode && (
                      <>
                        {/* Battery Arc */}
                        <path
                          d={describeArc(225, 225, 215, 280, batteryEndAngle)}
                          fill="none"
                          stroke={getBatteryColor()}
                          strokeWidth="8"
                          strokeLinecap="round"
                        />
                        {/* Step Goal Arc */}
                        <path
                          d={describeArc(225, 225, 215, 16, stepsEndAngle)}
                          fill="none"
                          stroke="#38bdf8"
                          strokeWidth="8"
                          strokeLinecap="round"
                        />
                        {/* Heart Rate Arc */}
                        <path
                          d={describeArc(225, 225, 215, 196, hrEndAngle)}
                          fill="none"
                          stroke="#fb7185"
                          strokeWidth="8"
                          strokeLinecap="round"
                        />
                        {/* Rain / UV Arc */}
                        <path
                          d={describeArc(225, 225, 215, 100, rainEndAngle)}
                          fill="none"
                          stroke="#60a5fa"
                          strokeWidth="8"
                          strokeLinecap="round"
                        />
                      </>
                    )}
                  </svg>

                  {/* 12 O'Clock Crown Jewel (Notification Beacon) */}
                  <div className="relative z-20 pt-1 flex items-center justify-center">
                    {notifications > 0 && !isAodMode && (
                      <div className="relative group cursor-pointer" onClick={() => setNotifications(0)}>
                        <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-glow-cyan animate-pulse" />
                        <div className="absolute -top-1 -left-1 w-5 h-5 rounded-full border border-cyan-300 animate-ping pointer-events-none" />
                      </div>
                    )}
                    {(notifications === 0 || isAodMode) && (
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                    )}
                  </div>

                  {/* Bezel Arc Text Readouts */}
                  <div className="absolute inset-0 pointer-events-none z-20 text-[10px] sm:text-[11px] font-mono select-none">
                    {/* Top-Left: Battery */}
                    <div className="absolute top-10 left-10 sm:top-12 sm:left-14 text-emerald-400 font-bold flex items-center space-x-1">
                      <span>{isCharging ? '⚡CHG' : '⚡'}</span>
                      <span>{battery}%</span>
                    </div>

                    {/* Top-Right: Steps */}
                    <div className="absolute top-10 right-10 sm:top-12 sm:right-14 text-sky-400 font-bold flex items-center space-x-1">
                      {steps >= stepGoal && <span className="text-amber-300">★</span>}
                      <span>{steps.toLocaleString()}</span>
                      <span>👟</span>
                    </div>

                    {/* Bottom-Left: Heart Rate */}
                    <div className="absolute bottom-10 left-10 sm:bottom-12 sm:left-14 text-rose-400 font-bold flex items-center space-x-1">
                      <span className="text-rose-500 animate-pulse">❤️</span>
                      <span>{heartRate}</span>
                      <span className="text-[9px] text-slate-400">bpm</span>
                    </div>

                    {/* Bottom-Right: Rain & UV */}
                    <div className="absolute bottom-10 right-10 sm:bottom-12 sm:right-14 text-blue-400 font-bold flex items-center space-x-1">
                      <span>💧{rainChance}%</span>
                      <span className="text-slate-400">•</span>
                      <span>UV{uvIndex}</span>
                    </div>
                  </div>

                  {/* Main Center Content Container */}
                  <div className="relative z-20 flex-1 flex flex-col items-center justify-center space-y-2 w-full max-w-[280px]">
                    
                    {/* Date Pill (Tap to Calendar) */}
                    <div className="px-3 py-0.5 rounded-full bg-black/40 border border-slate-700/60 text-[10px] font-mono text-slate-300 tracking-wider uppercase">
                      {time.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                    </div>

                    {/* Digital Clock Readout */}
                    <div className="flex items-baseline space-x-1 font-cyber font-black tracking-tight leading-none text-center">
                      <span className={`text-4xl sm:text-5xl ${isAodMode ? 'text-white' : 'text-slate-100 glow-text-cyan'}`}>
                        {hours}:{minutes}
                      </span>
                      {!isAodMode && (
                        <div className="flex flex-col text-left text-[10px] font-mono text-cyan-400 font-bold">
                          <span>{ampm}</span>
                          <span className="text-slate-400 text-[9px]">{seconds}s</span>
                        </div>
                      )}
                    </div>

                    {/* Hero Weather Card (Hidden in AOD to preserve <10% OPR) */}
                    {!isAodMode ? (
                      <div
                        className="w-full rounded-2xl p-2.5 backdrop-blur-md transition-all duration-300 border"
                        style={{
                          background: activeGlass.bg,
                          borderColor: activeGlass.border.split(' ')[2],
                          boxShadow: activeGlass.shadow,
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {currentWeather.icon}
                            <div>
                              <div className="font-cyber font-bold text-base text-white leading-none">
                                {currentWeather.temp}
                              </div>
                              <div className="text-[10px] text-slate-300 font-medium">
                                {currentWeather.condition}
                              </div>
                            </div>
                          </div>

                          <div className="text-right text-[10px] font-mono text-slate-300 space-y-0.5">
                            <div className="text-slate-400">{currentWeather.highLow}</div>
                            <div className="text-amber-400 text-[9px] font-semibold">
                              {weather === 'clear_night' ? '🌕 Waxing Gibbous' : `☀️ UV ${uvIndex} • ${uvIndex > 5 ? 'High' : 'Low'}`}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* AOD minimal indicator */
                      <div className="text-center pt-2 font-mono text-[10px] text-slate-500">
                        <span>AOD AMBIENT MODE // OPR &lt; 9.2%</span>
                      </div>
                    )}

                    {/* Dual-Mode Forecast Strip (Hidden in AOD) */}
                    {!isAodMode && (
                      <div
                        className="w-full rounded-xl px-2 py-1.5 backdrop-blur-sm border flex items-center justify-between text-[10px] font-mono"
                        style={{
                          background: activeGlass.bg,
                          borderColor: activeGlass.border.split(' ')[2],
                        }}
                      >
                        {forecastMode === 'hourly' ? (
                          <>
                            <div className="text-center">
                              <span className="text-slate-400 block text-[9px]">NOW</span>
                              <span className="font-bold text-white">{currentWeather.temp}</span>
                            </div>
                            <div className="text-slate-700">|</div>
                            <div className="text-center">
                              <span className="text-slate-400 block text-[9px]">+1H</span>
                              <span className="font-bold text-cyan-300">74° 💧10%</span>
                            </div>
                            <div className="text-slate-700">|</div>
                            <div className="text-center">
                              <span className="text-slate-400 block text-[9px]">+2H</span>
                              <span className="font-bold text-slate-300">70° 💧40%</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="text-center">
                              <span className="text-slate-400 block text-[9px]">THU</span>
                              <span className="font-bold text-white">78°/54°</span>
                            </div>
                            <div className="text-slate-700">|</div>
                            <div className="text-center">
                              <span className="text-slate-400 block text-[9px]">FRI</span>
                              <span className="font-bold text-cyan-300">72°/50°</span>
                            </div>
                            <div className="text-slate-700">|</div>
                            <div className="text-center">
                              <span className="text-slate-400 block text-[9px]">SAT</span>
                              <span className="font-bold text-amber-300">80°/55°</span>
                            </div>
                          </>
                        )}
                      </div>
                    )}

                  </div>

                  {/* Bottom Complication Slot (Sunrise / Sunset) */}
                  <div className="relative z-20 pb-1 text-[9px] font-mono text-slate-400 flex items-center space-x-1.5">
                    <span>🌇 Sunset 6:48 PM</span>
                  </div>

                </div>

              </div>

              {/* Wear OS Crown Button on Hardware Frame */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-3 h-10 rounded-r-md bg-slate-700 border border-slate-600 shadow-md cursor-pointer hover:bg-cyan-500 transition-colors" title="Physical Crown Button" />
            </div>

            {/* Bottom hardware label */}
            <div className="mt-4 flex items-center space-x-3 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>450x450 PX • WEAR OS 5 (API 34+) • WFF v2</span>
            </div>

          </div>

          {/* Right Column: Simulator Controls Dashboard */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="p-6 rounded-2xl bg-obsidian-900 border border-slate-800 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <Sliders className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-cyber font-bold text-lg text-white">
                    TELEMETRY & STATE CONTROLS
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setBattery(84);
                    setIsCharging(false);
                    setSteps(8420);
                    setHeartRate(72);
                    setWeather('clear_night');
                    setRainChance(20);
                    setUvIndex(3);
                    setNotifications(2);
                    setIsAodMode(false);
                  }}
                  className="p-1.5 rounded-lg bg-obsidian-950 border border-slate-800 text-slate-400 hover:text-cyan-400 text-xs flex items-center space-x-1"
                  title="Reset to defaults"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Weather Condition Select */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Meteorological Atmosphere
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {(Object.keys(weatherConfigs) as WeatherState[]).map((wKey) => (
                    <button
                      key={wKey}
                      onClick={() => setWeather(wKey)}
                      className={`p-2 rounded-lg text-left text-xs font-mono border transition-all ${
                        weather === wKey
                          ? 'bg-cyan-950/60 border-cyan-400 text-cyan-300 font-bold'
                          : 'bg-obsidian-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {weatherConfigs[wKey].label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Battery & Charging Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 flex items-center space-x-1.5">
                    <Battery className="w-4 h-4 text-emerald-400" />
                    <span>Battery Level: {battery}%</span>
                  </span>
                  <button
                    onClick={() => setIsCharging(!isCharging)}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold border transition-colors ${
                      isCharging
                        ? 'bg-emerald-950 border-emerald-400 text-emerald-300'
                        : 'bg-obsidian-950 border-slate-800 text-slate-500'
                    }`}
                  >
                    {isCharging ? '⚡ CHARGING (ON)' : 'UNPLUGGED'}
                  </button>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={battery}
                  onChange={(e) => setBattery(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-obsidian-950 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Steps & Heart Rate Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Steps */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center space-x-1">
                      <Footprints className="w-3.5 h-3.5 text-sky-400" />
                      <span>Steps</span>
                    </span>
                    <span className="text-white font-bold">{steps.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15000"
                    step="100"
                    value={steps}
                    onChange={(e) => setSteps(Number(e.target.value))}
                    className="w-full accent-sky-400 bg-obsidian-950 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="text-[10px] text-slate-500 flex justify-between font-mono">
                    <span>Goal: 10,000</span>
                    <span className={steps >= stepGoal ? 'text-amber-400 font-bold' : ''}>
                      {steps >= stepGoal ? '★ COMPLETED' : `${Math.round((steps / stepGoal) * 100)}%`}
                    </span>
                  </div>
                </div>

                {/* Heart Rate */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center space-x-1">
                      <Heart className="w-3.5 h-3.5 text-rose-400" />
                      <span>Heart Rate</span>
                    </span>
                    <span className="text-white font-bold">{heartRate} bpm</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="180"
                    value={heartRate}
                    onChange={(e) => setHeartRate(Number(e.target.value))}
                    className="w-full accent-rose-400 bg-obsidian-950 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="text-[10px] text-slate-500 flex justify-between font-mono">
                    <span>Resting: 60</span>
                    <span>Max: 180</span>
                  </div>
                </div>
              </div>

              {/* Glass Theme & Display Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
                {/* Glassmorphism Theme Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 block">
                    Glass Theme Preset
                  </label>
                  <div className="flex space-x-2">
                    {(['obsidian', 'frosted', 'crystal'] as GlassTheme[]).map((theme) => (
                      <button
                        key={theme}
                        onClick={() => setGlassTheme(theme)}
                        className={`flex-1 py-1.5 text-[11px] font-mono rounded border capitalize transition-colors ${
                          glassTheme === theme
                            ? 'bg-purple-950/80 border-purple-400 text-purple-300 font-bold'
                            : 'bg-obsidian-950 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {theme}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Forecast Strip & Clock format */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 block">
                    Forecast & Clock Display
                  </label>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setForecastMode(forecastMode === 'hourly' ? 'daily' : 'hourly')}
                      className="flex-1 py-1.5 text-[11px] font-mono rounded border bg-obsidian-950 border-slate-800 text-slate-300 hover:border-slate-700"
                    >
                      {forecastMode === 'hourly' ? '3-Hour Mode' : '3-Day Mode'}
                    </button>
                    <button
                      onClick={() => setIs24Hour(!is24Hour)}
                      className="px-3 py-1.5 text-[11px] font-mono rounded border bg-obsidian-950 border-slate-800 text-slate-300 hover:border-slate-700"
                    >
                      {is24Hour ? '24H' : '12H'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Mode Toggles: AOD Mode & Notification Crown */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800">
                <button
                  onClick={() => setIsAodMode(!isAodMode)}
                  className={`px-4 py-2 rounded-xl font-cyber text-xs tracking-wider uppercase font-bold border transition-all flex items-center space-x-2 ${
                    isAodMode
                      ? 'bg-slate-800 border-white text-white shadow-lg'
                      : 'bg-obsidian-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  <span>{isAodMode ? 'AOD Ambient: ACTIVE' : 'Toggle AOD Ambient'}</span>
                </button>

                <button
                  onClick={() => setNotifications(notifications > 0 ? 0 : 3)}
                  className={`px-3 py-2 rounded-xl font-mono text-xs border transition-colors flex items-center space-x-1.5 ${
                    notifications > 0
                      ? 'bg-cyan-950/60 border-cyan-400 text-cyan-300'
                      : 'bg-obsidian-950 border-slate-800 text-slate-500'
                  }`}
                >
                  <Bell className="w-3.5 h-3.5" />
                  <span>Crown Jewel: {notifications > 0 ? `${notifications} Unread` : 'Clear'}</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
