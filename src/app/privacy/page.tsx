import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck, ArrowLeft, Download, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Noctiluca Watch Face - Tekromancy',
  description: 'Official Privacy Policy for Noctiluca Weather-Reactive Wear OS Watch Face. 100% On-Device, Zero Data Collection, Zero Telemetry.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-obsidian-950 text-slate-100 selection:bg-cyan-500 selection:text-black">
      <Navbar />

      <div className="flex-1 py-16 sm:py-24 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          
          {/* Back link */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Noctiluca Overview</span>
            </Link>
          </div>

          {/* Header Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-obsidian-900/90 border border-emerald-500/30 backdrop-blur-xl shadow-2xl space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-glow-emerald">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest block">
                  LEGAL &amp; COMPLIANCE DISCLOSURE
                </span>
                <h1 className="text-2xl sm:text-4xl font-cyber font-black text-white">
                  Privacy Policy for Noctiluca Watch Face
                </h1>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800 text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[10px]">EFFECTIVE DATE</span>
                <span className="text-white font-semibold">October 21, 2026</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">DEVELOPER</span>
                <span className="text-purple-400 font-semibold">Tekromancy</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">PACKAGE NAME</span>
                <span className="text-cyan-300 font-semibold">com.noctiluca.watchface</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">DATA COLLECTION</span>
                <span className="text-emerald-400 font-bold">0 BYTES (ZERO)</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="/PRIVACY_POLICY.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>View raw Markdown (/PRIVACY_POLICY.md)</span>
              </a>
            </div>
          </div>

          {/* Privacy Document Body */}
          <div className="p-8 sm:p-12 rounded-3xl bg-obsidian-900/60 border border-slate-800 backdrop-blur-md space-y-10 text-slate-200 text-sm sm:text-base leading-relaxed">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-cyber font-bold text-white flex items-center space-x-2 border-b border-slate-800 pb-2">
                <span className="text-cyan-400">1.</span>
                <span>Introduction &amp; Core Philosophy</span>
              </h2>
              <p>
                Tekromancy (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) develops <strong>Noctiluca</strong> with a strict <strong>zero-data-collection, on-device architecture</strong>.
              </p>
              <p>
                Noctiluca is an ambient, weather-reactive watch face built purely with Google&apos;s declarative <strong>Watch Face Format (WFF v2)</strong> for Wear OS 5 and higher. It operates with zero executable application code (<code className="text-cyan-300 bg-obsidian-950 px-1.5 py-0.5 rounded border border-slate-800">android:hasCode=&quot;false&quot;</code>), zero third-party software development kits (SDKs), zero remote servers, and zero background analytics or tracking services.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl font-cyber font-bold text-white flex items-center space-x-2 border-b border-slate-800 pb-2">
                <span className="text-cyan-400">2.</span>
                <span>Data Collection and Usage</span>
              </h2>

              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-100 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>A. Zero Personal Data Collected</span>
                </h3>
                <p>
                  Noctiluca does <strong>not</strong> collect, store, transmit, or share any personal data, identifiers, device metrics, or user activity.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="text-base font-bold text-slate-100 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>B. Device Sensors &amp; Health Metrics</span>
                </h3>
                <ul className="list-disc list-inside space-y-2 text-slate-300">
                  <li>
                    <strong>Battery Level, Step Count, Heart Rate:</strong> Displayed via native Wear OS system complication and watch face platform expressions. These values are rendered directly by the Wear OS operating system onto the display canvas. The watch face does not log, process, retain, or transmit your sensor readings.
                  </li>
                  <li>
                    <strong>Weather Information:</strong> Weather conditions, temperatures, UV index, and precipitation forecasts are supplied directly by the device&apos;s default system weather provider (e.g., Google Weather on Wear OS). Noctiluca does not access GPS or network location directly.
                  </li>
                </ul>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="text-base font-bold text-slate-100 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>C. Permissions</span>
                </h3>
                <p>Noctiluca declares <strong>no special or dangerous permissions</strong>:</p>
                <div className="p-4 rounded-xl bg-obsidian-950 border border-slate-800 font-mono text-xs space-y-1.5 text-slate-300">
                  <div>• <code className="text-rose-400">android.permission.INTERNET</code>: <strong>NOT requested</strong>. Noctiluca is completely incapable of network communication.</div>
                  <div>• <code className="text-rose-400">ACCESS_FINE_LOCATION</code> / <code className="text-rose-400">ACCESS_COARSE_LOCATION</code>: <strong>NOT requested</strong>.</div>
                  <div>• Storage or contacts permissions: <strong>NOT requested</strong>.</div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl font-cyber font-bold text-white flex items-center space-x-2 border-b border-slate-800 pb-2">
                <span className="text-cyan-400">3.</span>
                <span>Third-Party Services</span>
              </h2>
              <p>Noctiluca contains:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li><strong>No advertising libraries or ad trackers</strong></li>
                <li><strong>No analytics SDKs</strong> (such as Google Analytics or Firebase)</li>
                <li><strong>No crash-reporting SDKs</strong></li>
              </ul>
              <p>
                All system updates and installations are distributed securely through the Google Play Store.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl font-cyber font-bold text-white flex items-center space-x-2 border-b border-slate-800 pb-2">
                <span className="text-cyan-400">4.</span>
                <span>Children&apos;s Privacy</span>
              </h2>
              <p>
                Noctiluca does not collect any information from anyone, including children under the age of 13.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl font-cyber font-bold text-white flex items-center space-x-2 border-b border-slate-800 pb-2">
                <span className="text-cyan-400">5.</span>
                <span>Contact Information</span>
              </h2>
              <p>If you have any questions regarding this Privacy Policy, you may contact:</p>
              <div className="p-4 rounded-xl bg-obsidian-950 border border-slate-800 font-mono text-xs space-y-1">
                <div>• <strong>Developer:</strong> Tekromancy</div>
                <div>• <strong>Repository:</strong> <a href="https://github.com/Tekromancy/noctiluca" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">https://github.com/Tekromancy/noctiluca</a></div>
              </div>
            </section>

          </div>

          {/* Google Play Submission Verification Box */}
          <div className="p-6 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 text-xs font-mono text-cyan-300 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>This policy complies with all Google Play Store Developer Program Policies &amp; Wear OS Quality Guidelines.</span>
            </div>
            <Link
              href="/"
              className="px-4 py-2 rounded-lg bg-cyan-400 text-obsidian-950 font-cyber font-bold uppercase hover:bg-cyan-300 transition-colors whitespace-nowrap ml-4"
            >
              Back to Home
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
