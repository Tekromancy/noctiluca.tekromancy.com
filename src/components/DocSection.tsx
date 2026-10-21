'use client';

import React, { useState } from 'react';
import { 
  BookOpen, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Download, 
  Code, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  Check,
  ChevronRight,
  ExternalLink,
  Lock,
  Zap
} from 'lucide-react';

export default function DocSection() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'installation' | 'complications' | 'cicd' | 'privacy'>('architecture');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="documentation" className="relative py-24 bg-obsidian-950 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>NOCTILUCA TECHNICAL DOCUMENTATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-cyber font-black tracking-tight text-white uppercase">
            ARCHITECTURE & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 glow-text-cyan">DOCUMENTATION</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Complete technical specifications, Watch Face Format v2 XML declarations, ADB sideloading commands, and privacy disclosure.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 border-b border-slate-800 pb-4">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all flex items-center space-x-2 ${
              activeTab === 'architecture'
                ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-400 shadow-glow-cyan font-bold'
                : 'text-slate-400 hover:text-slate-200 border border-transparent'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>WFF v2 Architecture</span>
          </button>

          <button
            onClick={() => setActiveTab('installation')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all flex items-center space-x-2 ${
              activeTab === 'installation'
                ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-400 shadow-glow-cyan font-bold'
                : 'text-slate-400 hover:text-slate-200 border border-transparent'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>Installation & Sideload</span>
          </button>

          <button
            onClick={() => setActiveTab('complications')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all flex items-center space-x-2 ${
              activeTab === 'complications'
                ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-400 shadow-glow-cyan font-bold'
                : 'text-slate-400 hover:text-slate-200 border border-transparent'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Gauges & Launchers</span>
          </button>

          <button
            onClick={() => setActiveTab('cicd')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all flex items-center space-x-2 ${
              activeTab === 'cicd'
                ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-400 shadow-glow-cyan font-bold'
                : 'text-slate-400 hover:text-slate-200 border border-transparent'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>CI/CD & Keystore</span>
          </button>

          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all flex items-center space-x-2 ${
              activeTab === 'privacy'
                ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-400 shadow-glow-cyan font-bold'
                : 'text-slate-400 hover:text-slate-200 border border-transparent'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Zero-Telemetry Privacy</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="bg-obsidian-900/70 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          
          {/* TAB 1: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
                  <span>SPECIFICATION</span>
                  <span>•</span>
                  <span>WEAR OS 5 (API 34+)</span>
                </div>
                <h3 className="text-2xl font-cyber font-bold text-white">
                  Zero-Code Declarative Architecture (WFF v2)
                </h3>
                <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                  Unlike traditional Android watch faces that execute Kotlin or Java background processes consuming memory and battery, Noctiluca is authored 100% in <strong>Google's Watch Face Format (WFF Version 2)</strong>. There is zero runtime APK execution (<code className="text-cyan-300">hasCode=&quot;false&quot;</code>), granting native battery optimization, instant load times, and guaranteed system safety.
                </p>
              </div>

              {/* Technical Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      <th className="py-3 px-4">Metric / Dimension</th>
                      <th className="py-3 px-4 text-cyan-400">Noctiluca (WFF v2)</th>
                      <th className="py-3 px-4 text-slate-500">Legacy Kotlin / Java Watch Face</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    <tr>
                      <td className="py-3 px-4 font-semibold text-white">Execution Model</td>
                      <td className="py-3 px-4 text-emerald-400">Hardware daemon parsed declarative XML</td>
                      <td className="py-3 px-4 text-slate-400">Continuous JVM process & bytecode loops</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-white">On-Pixel Ratio (AOD)</td>
                      <td className="py-3 px-4 text-emerald-400">&lt; 9.2% (Full burn-in protection)</td>
                      <td className="py-3 px-4 text-amber-400">Typically 15% - 25% (Higher OLED drain)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-white">App Bundle Size</td>
                      <td className="py-3 px-4 text-emerald-400">~100 KB total AAB</td>
                      <td className="py-3 px-4 text-slate-400">8 MB - 25 MB with dependencies</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-white">Battery Overhead</td>
                      <td className="py-3 px-4 text-emerald-400">Near Zero (Native OS hardware rendering)</td>
                      <td className="py-3 px-4 text-rose-400">3% - 7% per hour CPU wake locks</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-white">Minimum Target SDK</td>
                      <td className="py-3 px-4 text-cyan-300">Wear OS 5 (API 34) / Android 14+</td>
                      <td className="py-3 px-4 text-slate-400">API 26+ (Deprecated WFF 1)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Sample XML Code snippet */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Core Layout Snippet (watchface.xml)</span>
                  <button
                    onClick={() => copyToClipboard(
`<WatchFace width="450" height="450" clipShape="CIRCLE">
    <Metadata key="CLOCK_TYPE" value="DIGITAL"/>
    <Metadata key="PREVIEW_TIME" value="10:08:32"/>

    <!-- User Glassmorphic Configurations -->
    <UserConfigurations>
        <ListConfiguration id="glass_theme" displayName="@string/theme_title" defaultValue="obsidian">
            <ListOption id="obsidian" displayName="@string/theme_obsidian"/>
            <ListOption id="frosted" displayName="@string/theme_frosted"/>
            <ListOption id="crystal" displayName="@string/theme_crystal"/>
        </ListConfiguration>
    </UserConfigurations>

    <!-- Bezel Edge Circular Arcs -->
    <PartDraw>
        <!-- 280° to 344° Battery Arc -->
        <Arc x="0" y="0" width="450" height="450" startAngle="280" endAngle="[280 + (64 * [BATTERY_PERCENT] / 100)]" direction="CLOCKWISE">
            <Stroke color="[IS_CHARGING] ? '#00e676' : ([BATTERY_PERCENT] > 20 ? '#4ade80' : '#f43f5e')" thickness="8"/>
        </Arc>
    </PartDraw>
</WatchFace>`, 'wff-code')}
                    className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300"
                  >
                    {copiedCode === 'wff-code' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode === 'wff-code' ? 'Copied' : 'Copy XML'}</span>
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-obsidian-950 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                  <pre className="text-cyan-300">
{`<WatchFace width="450" height="450" clipShape="CIRCLE">
    <Metadata key="CLOCK_TYPE" value="DIGITAL"/>
    <Metadata key="PREVIEW_TIME" value="10:08:32"/>

    <!-- User Glassmorphic Configurations -->
    <UserConfigurations>
        <ListConfiguration id="glass_theme" displayName="@string/theme_title" defaultValue="obsidian">
            <ListOption id="obsidian" displayName="@string/theme_obsidian"/>
            <ListOption id="frosted" displayName="@string/theme_frosted"/>
            <ListOption id="crystal" displayName="@string/theme_crystal"/>
        </ListConfiguration>
    </UserConfigurations>

    <!-- Bezel Edge Circular Arcs -->
    <PartDraw>
        <!-- 280° to 344° Battery Arc -->
        <Arc x="0" y="0" width="450" height="450" startAngle="280" endAngle="[280 + (64 * [BATTERY_PERCENT] / 100)]" direction="CLOCKWISE">
            <Stroke color="[IS_CHARGING] ? '#00e676' : ([BATTERY_PERCENT] > 20 ? '#4ade80' : '#f43f5e')" thickness="8"/>
        </Arc>
    </PartDraw>
</WatchFace>`}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: INSTALLATION */}
          {activeTab === 'installation' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-cyber font-bold text-white">
                  Installation & Sideloading Guide
                </h3>
                <p className="text-slate-300 text-sm mt-1">
                  How to install Noctiluca on your Wear OS 5 watch (Pixel Watch 1/2/3, Galaxy Watch 4/5/6/7, OnePlus Watch 2).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Method 1: Google Play */}
                <div className="p-6 rounded-2xl bg-obsidian-950 border border-slate-800 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Download className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-cyber font-bold text-white">Method 1: Google Play Store</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Search for <strong className="text-cyan-300">&quot;Noctiluca Weather Watch Face&quot;</strong> in the on-watch Play Store app or install remotely from your paired Android phone or web browser.
                  </p>
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>One-click install & automatic background updates</span>
                    </span>
                  </div>
                </div>

                {/* Method 2: ADB Sideload */}
                <div className="p-6 rounded-2xl bg-obsidian-950 border border-slate-800 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-cyber font-bold text-white">Method 2: ADB Wireless Sideload</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Developers can push the release APK directly to any Wear OS watch over local Wi-Fi ADB:
                  </p>
                  <div className="p-3 rounded-lg bg-black text-cyan-300 font-mono text-[11px] overflow-x-auto border border-slate-800">
                    <code>adb connect 192.168.1.xxx:5555<br/>adb install -r watchface-release.apk</code>
                  </div>
                </div>
              </div>

              {/* Step by step ADB guide */}
              <div className="p-5 rounded-2xl bg-obsidian-950 border border-slate-800 space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  ENABLING WIRELESS DEBUGGING ON WEAR OS 5:
                </div>
                <ol className="list-decimal list-inside text-xs text-slate-300 space-y-2 font-mono">
                  <li>On your watch, open <strong>Settings</strong> → <strong>System</strong> → <strong>About</strong> → Tap <em>Build Number</em> 7 times.</li>
                  <li>Go back to <strong>Settings</strong> → <strong>Developer options</strong>.</li>
                  <li>Enable <strong>ADB debugging</strong> and <strong>Wireless debugging</strong>.</li>
                  <li>Note the watch's IP address and pairing port, connect via ADB, and install.</li>
                </ol>
              </div>
            </div>
          )}

          {/* TAB 3: GAUGES & LAUNCHERS */}
          {activeTab === 'complications' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-cyber font-bold text-white">
                  Bezel Edge Arcs & Interactive Tap Shortcuts
                </h3>
                <p className="text-slate-300 text-sm mt-1">
                  Every card and circular gauge on Noctiluca acts as an interactive launcher for native Wear OS applications.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-obsidian-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-emerald-400 font-bold">TOP-LEFT ARC (280° - 344°)</span>
                    <span className="text-slate-500">Tap Target: BATTERY_STATUS</span>
                  </div>
                  <div className="text-xs text-slate-300">
                    Shows battery level with dynamic charging indicators (<code className="text-emerald-300">#00e676</code> Charging, <code className="text-emerald-400">#4ade80</code> Normal, <code className="text-amber-400">#f59e0b</code> Warning &lt;20%, <code className="text-rose-400">#f43f5e</code> Critical &lt;10%). Tapping opens Wear OS battery settings.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-obsidian-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-sky-400 font-bold">TOP-RIGHT ARC (16° - 80°)</span>
                    <span className="text-slate-500">Tap Target: FITNESS / STEPS</span>
                  </div>
                  <div className="text-xs text-slate-300">
                    Step goal progression gauge. Upon reaching your daily step goal (10,000 steps), a gold star (<code className="text-amber-300">★</code>) illuminates next to your total step count. Tapping launches your preferred fitness activity.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-obsidian-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-rose-400 font-bold">BOTTOM-LEFT ARC (196° - 260°)</span>
                    <span className="text-slate-500">Tap Target: HEALTH_HEART_RATE</span>
                  </div>
                  <div className="text-xs text-slate-300">
                    Live sensor heart rate monitoring (40 - 180 bpm). Features an animated pulsing crimson heart icon. Tapping triggers an instant on-demand heart rate measurement in Wear Health Services.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-obsidian-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-blue-400 font-bold">BOTTOM-RIGHT ARC (100° - 164°)</span>
                    <span className="text-slate-500">Tap Target: WEATHER_RADAR</span>
                  </div>
                  <div className="text-xs text-slate-300">
                    Rain chance percentage & UV index gauge. Displays real-time precipitation forecast (<code className="text-cyan-300">💧 &lt;PRECIP&gt;%</code>) alongside daytime UV severity classifications (<code className="text-amber-300">UV 3 • Mod</code>).
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-obsidian-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-purple-400 font-bold">HERO WEATHER CARD</span>
                    <span className="text-slate-500">Tap Target: WEATHER_APP</span>
                  </div>
                  <div className="text-xs text-slate-300">
                    Integrated hero weather card displaying live condition icons, current temp, day high/low, and a user-customizable complication slot defaulted to Sunrise/Sunset (<code className="text-purple-300">SUNRISE_SUNSET</code>).
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-obsidian-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-cyan-400 font-bold">12 O&apos;CLOCK CROWN JEWEL</span>
                    <span className="text-slate-500">Coordinate: (217, 6)</span>
                  </div>
                  <div className="text-xs text-slate-300">
                    Bioluminescent cyan core with pulsating halo indicator that lights up exclusively when there are unread notifications (<code className="text-cyan-300">UNREAD_NOTIFICATION_COUNT &gt; 0</code>). Tap or swipe down to inspect.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CI/CD & KEYSTORE */}
          {activeTab === 'cicd' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-cyber font-bold text-white">
                  Automated CI/CD & Keystore Generator
                </h3>
                <p className="text-slate-300 text-sm mt-1">
                  How to generate cryptographic release keystores and configure automated Play Store deployment via GitHub Actions.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-obsidian-950 border border-slate-800">
                  <div className="text-xs font-mono text-cyan-400 mb-2">
                    STEP 1: GENERATE CRYPTOGRAPHIC RELEASE KEYSTORE
                  </div>
                  <div className="p-3 rounded-lg bg-black text-cyan-300 font-mono text-xs overflow-x-auto border border-slate-800">
                    <code>./scripts/generate-release-keystore.sh</code>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    This interactive bash script prompts for a secure password, generates a 2048-bit RSA keystore at <code className="text-slate-200">release-keystore.jks</code>, and creates <code className="text-slate-200">keystore.properties</code> (which is automatically excluded from git).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-obsidian-950 border border-slate-800">
                  <div className="text-xs font-mono text-purple-400 mb-2">
                    STEP 2: ENCODE KEYSTORE FOR GITHUB ACTIONS
                  </div>
                  <div className="p-3 rounded-lg bg-black text-purple-300 font-mono text-xs overflow-x-auto border border-slate-800">
                    <code>base64 -w 0 release-keystore.jks</code>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    Paste the output as a repository secret named <code className="text-white">KEYSTORE_BASE64</code> in your GitHub repository settings under <em>Secrets and variables → Actions</em>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-obsidian-950 border border-slate-800">
                  <div className="text-xs font-mono text-emerald-400 mb-2">
                    STEP 3: DEPLOY AUTOMATION VIA GITHUB ACTIONS
                  </div>
                  <p className="text-xs text-slate-300">
                    Two automated workflows are supplied in <code className="text-slate-200">.github/workflows/</code>:
                  </p>
                  <ul className="list-disc list-inside text-xs text-slate-400 font-mono mt-2 space-y-1">
                    <li><strong className="text-slate-200">android-ci.yml</strong>: Builds APK & signed Release Bundle on every pull request to verify lint and compilation.</li>
                    <li><strong className="text-slate-200">deploy-play-store.yml</strong>: Builds and releases directly to Google Play when a tag is pushed (e.g. <code className="text-cyan-300">git tag v1.0.0 &amp;&amp; git push --tags</code>).</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-cyber font-bold text-white">
                    Zero-Telemetry Privacy Commitment
                  </h3>
                  <div className="text-xs font-mono text-emerald-400">
                    100% PRIVATE • ZERO BYTES COLLECTED • NO TRACKING
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-obsidian-950 border border-slate-800 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                <p>
                  <strong>Noctiluca</strong> adheres to the strictest principles of personal digital sovereignty. Because Noctiluca is authored exclusively with declarative <strong>Watch Face Format v2</strong> without executable Kotlin/Java application code, the app possesses <em>no network communication libraries, no remote logging endpoints, no advertising trackers, and no telemetry services</em>.
                </p>

                <div className="p-4 rounded-xl bg-obsidian-900 border border-emerald-500/20 space-y-2">
                  <div className="text-emerald-400 font-bold uppercase text-xs">
                    SENSOR DATA ACCESS DISCLOSURE:
                  </div>
                  <ul className="list-disc list-inside text-slate-300 text-xs space-y-1.5">
                    <li><strong>Heart Rate (<code className="text-cyan-300">BODY_SENSORS</code>):</strong> Used solely to render your instantaneous heart rate on the radial bezel arc. Processed on-device; never logged or retained.</li>
                    <li><strong>Step Counter (<code className="text-cyan-300">ACTIVITY_RECOGNITION</code>):</strong> Used solely to draw the step progress arc towards your daily goal.</li>
                    <li><strong>Weather & Daylight (<code className="text-cyan-300">WEATHER_PROVIDER</code>):</strong> Delivered via the standard Wear OS system weather complication. The watch face does not access your GPS coordinates directly.</li>
                  </ul>
                </div>

                <p className="text-slate-400 text-xs">
                  For the complete legal text submitted to the Google Play Console, view the <a href="/privacy/" className="text-cyan-400 underline font-semibold">Hosted Privacy Policy (/privacy/)</a> or the raw <a href="/PRIVACY_POLICY.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline font-semibold">PRIVACY_POLICY.md</a>.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
