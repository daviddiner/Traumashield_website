/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Science } from './components/Science';
import { Traction } from './components/Traction';
import { Market } from './components/Market';
import { Roadmap } from './components/Roadmap';
import { Team } from './components/Team';
import { Documents } from './components/Documents';
import { Join } from './components/Join';
import { Footer } from './components/Footer';
import { LiveCounter } from './components/LiveCounter';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-white selection:bg-[rgba(0,207,255,0.3)] relative">
      <div className="scanline-overlay"></div>
      <Navbar />
      <LiveCounter />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Science />
        <Traction />
        <Roadmap />
        <Market />
        <Team />
        <Documents />
        <Join />
      </main>
      <Footer />
    </div>
  );
}
