import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://noctiluca.tekromancy.com'),
  title: 'Noctiluca | Cyberpunk Illusionist Watch Face & Documentation',
  description: 'Noctiluca: The illusionist cyberpunk mage capable of altering visage. Weather-reactive Wear OS 5 watch face built with Watch Face Format (WFF v2).',
  keywords: [
    'Noctiluca',
    'Tekromancy',
    'Wear OS 5',
    'Watch Face Format v2',
    'WFF',
    'Cyberpunk Watch Face',
    'Weather Reactive Watch Face',
    'Illusionist Mage',
    'Android Watch Face'
  ],
  authors: [{ name: 'Tekromancy' }],
  openGraph: {
    title: 'Noctiluca | The Cyberpunk Illusionist Watch Face',
    description: 'Altering visages with atmospheric shifts. Wear OS 5 WFF v2 watch face with zero battery overhead.',
    url: 'https://noctiluca.tekromancy.com',
    siteName: 'Tekromancy Noctiluca',
    images: [
      {
        url: '/images/visage-obsidian.jpg',
        width: 1200,
        height: 630,
        alt: 'Noctiluca Illusionist Cyberpunk Mage',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noctiluca | Cyberpunk Illusionist Watch Face',
    description: 'Weather-reactive Wear OS 5 watch face altering visage with real-time conditions.',
    images: ['/images/visage-obsidian.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-obsidian-950 text-slate-100 antialiased min-h-screen flex flex-col selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
