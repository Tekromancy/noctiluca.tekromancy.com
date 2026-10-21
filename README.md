# noctiluca.tekromancy.com

> Official advertisement showcase and interactive documentation portal for **Noctiluca** — The illusionist cyberpunk mage capable of altering visage across Wear OS 5 dynamic atmospheres.

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2015-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Wear OS 5 Ready](https://img.shields.io/badge/Wear%20OS-5%20(API%2034%2B)-00f0ff?style=flat&logo=android)](https://developer.android.com/training/wearables/wff)
[![Watch Face Format v2](https://img.shields.io/badge/Architecture-WFF%20v2-a855f7?style=flat)](https://github.com/djehauti/noctiluca)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=flat)](LICENSE)

---

## ✦ Features

- **The Illusionist Cyberpunk Mage Showcase**:
  - Immersive mythos and lore of *Noctiluca* (*Noctiluca scintillans*), the illusionist cyberpunk mage who manipulates atmospheric telemetry and photolithographic illusions.
  - High-resolution concept art portraits across 5 metamorphic visages.

- **Interactive Visage Alteration Chamber**:
  - **Void Obsidian Visage**: Nocturnal illusionist with orbiting bioluminescent glyphs.
  - **Solar Dawn Visage**: Golden-hour rose amber twilight refraction.
  - **Tempest Plasma Visage**: High-voltage violet lightning and electric arc veil.
  - **Glacial Cryo Visage**: Crystalline azure ice mask and digital snowflakes.
  - **Bioluminescent Abyss Visage**: Oceanic sea sparkle dinoflagellate trails.
  - Real-time synchronization with the Watch Face Simulator.

- **Interactive Wear OS 5 Watch Face Simulator**:
  - Live 450x450 canvas recreation matching Google Watch Face Format (WFF v2).
  - 4 Concentric Bezel Arcs:
    - Battery (280°..344°) with charging indicator and warning states.
    - Step Goal (16°..80°) with celebratory star indicator.
    - Heart Rate (196°..260°) with animated pulsing crimson heart.
    - Rain Chance & UV Index (100°..164°) with dynamic classification.
  - 12 o'clock Crown Jewel notification beacon (x=217, y=6).
  - Digital clock (12H / 24H) with live seconds readout.
  - Hero Weather Card with condition icons, high/low, and sunrise/sunset complication.
  - Dual-mode forecast strip: 3-Hour Track vs 3-Day Outlook.
  - 3 Glassmorphism Presets: Deep Obsidian, Frosted Glass, Crystal Minimal.
  - Ambient Always-On Display (AOD) Mode toggle with <10% on-pixel ratio (OPR).

- **Full Technical Documentation**:
  - Architecture & WFF v2 Zero-Code advantages (`hasCode="false"`).
  - Installation & ADB Wireless Sideloading guide.
  - Interactive tap-to-launch targets.
  - Automated Keystore generation (`generate-release-keystore.sh`) & GitHub Actions CI/CD.
  - Complete zero-telemetry privacy policy disclosure.

---

## 🛠️ Local Development & Static Export

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build production static export (outputs to /out)
npm run build
```

The static build is preconfigured with `output: 'export'`, allowing deployment to GitHub Pages, Cloudflare Pages, Firebase Hosting, Netlify, or AWS S3.

---

## ✦ Tekromancy

Crafted by **Tekromancy**. Released under the [MIT License](LICENSE).
Wear OS by Google is a trademark of Google LLC.
