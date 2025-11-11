// BlazeRP.lt Modern Night Techno - Single-file React component
// Customized for BlazeRP.lt server with real IP and Discord link

import React, { useEffect, useState } from 'react';

const SERVER_IP = 'cfx.re/join/g5434x'; // BlazeRP.lt server IP
const DISCORD_LINK = 'https://discord.gg/GdVr7j7u23'; // BlazeRP Discord invite

export default function BlazeRPLanding() {
  const [players, setPlayers] = useState(null);
  const [maxPlayers, setMaxPlayers] = useState(null);
  const [status, setStatus] = useState('tikrinama');

  useEffect(() => {
    // Example mock data — replace with real API call if available
    const timer = setTimeout(() => {
      setPlayers(57);
      setMaxPlayers(128);
      setStatus('online');
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b1020] to-[#0b0b0b] text-white font-sans">
      {/* NAV */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-2xl">
            <span className="font-bold tracking-wide">BR</span>
          </div>
          <div>
            <h1 className="text-xl font-bold">BlazeRP.lt</h1>
            <p className="text-xs text-gray-300">Kronikos Miestas • Realus Roleplay</p>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#about" className="text-sm hover:underline">Apie</a>
          <a href="#features" className="text-sm hover:underline">Funkcijos</a>
          <a href="#join" className="text-sm hover:underline">Prisijunk</a>
          <a href={DISCORD_LINK} target="_blank" rel="noreferrer" className="ml-4 px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-black font-semibold">Discord</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Modernus naktinis miestas<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Techno atmosfera</span></h2>
          <p className="mt-4 text-gray-300 max-w-xl">Realus roleplay, gilios istorijos ir aktyvi bendruomenė. Prisijunk prie Kronikos Miesto — kur naktis gyvena savo gyvenimą.</p>

          <div className="mt-6 flex items-center gap-4">
            <a id="join" href={`fivem://connect/${SERVER_IP}`} className="px-6 py-3 rounded-full bg-white text-black font-bold shadow-lg">Prisijungti</a>
            <a href={DISCORD_LINK} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full border border-gray-700">Discord</a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className={`inline-block w-3 h-3 rounded-full ${status === 'online' ? 'bg-green-400' : 'bg-yellow-400'}`} />
              <span className="text-gray-300">Serveris: <span className="font-semibold text-white">{status}</span></span>
            </div>
            <div className="text-gray-300">Žaidėjų: <span className="font-semibold text-white">{players ?? '—'} / {maxPlayers ?? '—'}</span></div>
          </div>
        </div>

        {/* IMAGE CARD */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl" style={{background: 'linear-gradient(135deg, rgba(14,10,30,0.6), rgba(4,6,12,0.8))'}}>
            <img src="/night-city.jpg" alt="Night City" className="w-full h-72 object-cover opacity-90" />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Kronikos Miestas 4.0</h3>
              <p className="mt-2 text-gray-300">Naratyvas, frakcijos, unikalios misijos ir techninis stabilumas. Mūsų tikslas — gyvas, kvėpuojantis RP miestas.</p>

              <div className="mt-4 flex gap-3">
                <span className="px-3 py-1 rounded-full bg-black/40 border border-purple-600 text-sm">Techno Nights</span>
                <span className="px-3 py-1 rounded-full bg-black/40 border border-pink-500 text-sm">Real Life RP</span>
                <span className="px-3 py-1 rounded-full bg-black/40 border border-cyan-400 text-sm">Stability</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 left-6 w-40 h-1 rounded-full" style={{background: 'linear-gradient(90deg,#7c3aed,#ec4899)'}} />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Pagrindinės funkcijos</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-tr from-black/60 to-white/5 border border-gray-800">
            <h4 className="font-semibold">Realus Roleplay</h4>
            <p className="mt-2 text-sm text-gray-300">Gylus naratyvas, civiliniai darbai, frakcijos ir misijos su istorija.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-tr from-black/60 to-white/5 border border-gray-800">
            <h4 className="font-semibold">Techno atmosfera</h4>
            <p className="mt-2 text-sm text-gray-300">Naktiniai event'ai, DJ rinkiniai ir miesto šviesos, kurios kuria nuotaiką.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-tr from-black/60 to-white/5 border border-gray-800">
            <h4 className="font-semibold">Stabilus serveris</h4>
            <p className="mt-2 text-sm text-gray-300">Optimizuoti sisteminiai sprendimai ir aktyvi adminų komanda.</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">Apie BlazeRP.lt</h3>
            <p className="mt-4 text-gray-300">BlazeRP.lt — tai unikalus FiveM serveris, sukurtas pagal Kronikos Miesto 4.0 viziją. Čia kiekvienas gali kurti savo istoriją, tapti dalimi techno atmosferos ir realaus roleplay pasaulio.</p>
            <ul className="mt-4 text-gray-300 list-disc list-inside">
              <li>Unikalus miesto naratyvas</li>
              <li>Gyva naktinė scena ir event'ai</li>
              <li>Modernus techno dizainas</li>
            </ul>
          </div>
          <div>
            <div className="rounded-xl p-6 bg-black/30 border border-gray-800">
              <h4 className="font-semibold">Server info</h4>
              <div className="mt-3 text-gray-300">
                <div>IP: <span className="font-medium text-white">{SERVER_IP}</span></div>
                <div className="mt-1">Statusas: <span className="font-medium text-white">{status}</span></div>
                <div className="mt-1">Žaidėjai: <span className="font-medium text-white">{players ?? '—'}/{maxPlayers ?? '—'}</span></div>
              </div>
              <div className="mt-4">
                <a href={`fivem://connect/${SERVER_IP}`} className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 text-black font-semibold">Prisijungti</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-12 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-400">© {new Date().getFullYear()} BlazeRP.lt — Kronikos Miestas 4.0. Visos teisės saugomos.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-gray-400">Privatumo politika</a>
            <a href="#" className="text-sm text-gray-400">Taisyklės</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
