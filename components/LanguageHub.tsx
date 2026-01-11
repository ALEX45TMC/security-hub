
import React, { useState } from 'react';

const LANGUAGES = [
  { code: 'ES', label: 'Español', sub: 'Spanish', flag: '🇪🇸' },
  { code: 'US', label: 'English', sub: 'English (US)', flag: '🇺🇸' },
  { code: 'DE', label: 'Deutsch', sub: 'German', flag: '🇩🇪' },
  { code: 'FR', label: 'Français', sub: 'French', flag: '🇫🇷' },
  { code: 'JP', label: '日本語', sub: 'Japanese', flag: '🇯🇵' },
  { code: 'BR', label: 'Português', sub: 'Portuguese', flag: '🇧🇷' },
  { code: 'IT', label: 'Italiano', sub: 'Italian', flag: '🇮🇹' },
  { code: 'CN', label: '简体中文', sub: 'Chinese', flag: '🇨🇳' },
  { code: 'SA', label: 'العربية', sub: 'Arabic', flag: '🇸🇦' },
  { code: 'KR', label: '한국어', sub: 'Korean', flag: '🇰🇷' },
];

export const LanguageHub: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState('ES');
  const [autoDetect, setAutoDetect] = useState(true);

  return (
    <div className="p-10 mx-auto max-w-6xl animate-in fade-in duration-500">
      {/* Hero Banner */}
      <div className="relative overflow-hidden p-10 rounded-[2rem] bg-navy-800 border border-silver-400/10 mb-10">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-cyan-accent/5 to-transparent"></div>
        <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
          <div className="size-24 bg-cyan-accent/10 text-cyan-accent rounded-3xl flex items-center justify-center flex-shrink-0 border border-cyan-accent/20 cyan-glow">
            <span className="material-symbols-outlined text-[48px]">public</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold text-white mb-3">Global Interface Experience</h3>
            <p className="text-silver-400 text-lg leading-relaxed max-w-2xl">Tailor your SecureHub experience. Choose your native language or let our intelligent detection system optimize your workspace automatically.</p>
          </div>
        </div>
      </div>

      {/* Auto Detect Section */}
      <section className="mb-10 p-8 rounded-3xl bg-navy-800/50 border border-silver-400/10 hover:border-cyan-accent/20 transition-all">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <div className="size-12 bg-white/5 rounded-xl flex items-center justify-center text-cyan-accent">
                <span className="material-symbols-outlined">sensors</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Automatic Language Detection</h4>
                <p className="text-sm text-silver-400">Uses regional proximity and browser signals for zero-config localization.</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={autoDetect}
                onChange={() => setAutoDetect(!autoDetect)}
              />
              <div className="w-14 h-7 bg-navy-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-7 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-cyan-accent border border-silver-400/20"></div>
            </label>
          </div>
          <div className="flex items-center gap-4 px-6 py-4 bg-cyan-accent/5 border border-cyan-accent/10 rounded-2xl">
            <div className="size-8 rounded-lg bg-cyan-accent/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-cyan-accent text-[20px]">location_on</span>
            </div>
            <p className="text-sm font-medium text-silver-200">
              Current Context: <span className="text-cyan-accent font-bold">Spain (Madrid)</span> — Suggested Interface: <span className="text-cyan-accent font-bold">Spanish (ES)</span>
            </p>
          </div>
        </div>
      </section>

      {/* Manual Override */}
      <section className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-cyan-accent rounded-full"></div>
            <h4 className="text-sm font-bold text-silver-400 uppercase tracking-[0.2em]">Manual Override</h4>
          </div>
          <span className="text-xs px-3 py-1 bg-white/5 rounded-full border border-silver-400/10 text-silver-400">10 Core Languages</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {LANGUAGES.map((lang) => (
            <button 
              key={lang.code}
              onClick={() => {
                setSelectedLang(lang.code);
                setAutoDetect(false);
              }}
              className={`group relative flex flex-col items-center gap-4 p-8 rounded-[2rem] transition-all text-center border-2 ${
                selectedLang === lang.code 
                ? "bg-navy-800 border-cyan-accent shadow-2xl shadow-cyan-accent/10" 
                : "bg-navy-900 border-silver-400/10 hover:border-cyan-accent/40 hover:bg-navy-800"
              }`}
            >
              {selectedLang === lang.code && (
                <div className="absolute top-4 right-4 text-cyan-accent">
                  <span className="material-symbols-outlined text-[22px] icon-fill">check_circle</span>
                </div>
              )}
              <span className={`text-5xl transition-all duration-300 ${selectedLang === lang.code ? 'filter-none' : 'grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100'}`}>
                {lang.flag}
              </span>
              <div>
                <p className="font-bold text-white text-lg">{lang.label}</p>
                <p className="text-xs text-silver-400 font-medium tracking-wide uppercase">{lang.sub}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Support / Enterprise CTA */}
      <div className="mt-16 p-8 rounded-[2rem] bg-gradient-to-r from-navy-800 to-navy-900 border border-silver-400/10 flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="size-14 bg-cyan-accent/5 rounded-2xl flex items-center justify-center text-cyan-accent border border-cyan-accent/10">
            <span className="material-symbols-outlined text-[28px]">contact_support</span>
          </div>
          <div>
            <p className="font-bold text-white text-lg">Need custom localization?</p>
            <p className="text-sm text-silver-400">Enterprise plans include custom terminology packs and 24/7 priority translation support.</p>
          </div>
        </div>
        <button className="px-8 py-3 bg-white/5 border border-silver-400/20 rounded-xl text-sm font-bold text-white hover:bg-cyan-accent hover:text-navy-900 transition-all whitespace-nowrap">
          Request Language Pack
        </button>
      </div>

      {/* Info Cards */}
      <div className="mt-12 pt-10 border-t border-silver-400/10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all">
          <div className="size-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 flex-shrink-0">
            <span className="material-symbols-outlined text-[20px]">verified</span>
          </div>
          <div className="text-xs text-silver-400 leading-relaxed">
            <span className="text-silver-200 font-bold block mb-1">OCR Translation Active</span>
            System-wide Optical Character Recognition (OCR) and content search remain compatible with 120+ languages regardless of interface selection.
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all">
          <div className="size-10 bg-cyan-accent/10 rounded-lg flex items-center justify-center text-cyan-accent flex-shrink-0">
            <span className="material-symbols-outlined text-[20px]">info</span>
          </div>
          <div className="text-xs text-silver-400 leading-relaxed">
            <span className="text-silver-200 font-bold block mb-1">Dynamic Translation</span>
            Manual document translations can be instantly generated from the file previewer using our high-fidelity secure translation engine.
          </div>
        </div>
      </div>
    </div>
  );
};
