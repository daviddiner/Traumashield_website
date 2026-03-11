/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Science } from './components/Science';
import { Market } from './components/Market';
import { Traction } from './components/Traction';
import { Team } from './components/Team';
import { Documents } from './components/Documents';
import { Join } from './components/Join';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-white selection:bg-[rgba(0,207,255,0.3)]">
      <div className="scanline-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <Solution />
        <Science />
        <Market />
        <Traction />
        <Team />
        <Documents />
        <Join />
      </main>
      <Footer />
    </div>
  );
}
