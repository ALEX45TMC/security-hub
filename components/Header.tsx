
import React from 'react';
import { TabType } from '../App';

interface HeaderProps {
  activeTab: TabType;
}

export const Header: React.FC<HeaderProps> = ({ activeTab }) => {
  const titles: Record<TabType, string> = {
    'vault': 'Secure Vault Dashboard',
    'language-hub': 'Language & Translation Center',
    'passwords': 'Password Manager',
    'files': 'Secure File Hub'
  };

  return (
    <header className="flex h-20 items-center justify-between px-10 border-b border-silver-400/10 bg-navy-900/50 backdrop-blur-xl z-20">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-semibold text-white">{titles[activeTab]}</h2>
        <span className="px-2.5 py-1 rounded-full bg-navy-700 text-cyan-accent text-[10px] font-bold uppercase tracking-widest border border-cyan-accent/20">Active Session</span>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <button className="size-10 flex items-center justify-center rounded-xl bg-white/5 text-silver-300 hover:text-cyan-accent transition-all border border-transparent hover:border-cyan-accent/20" title="Security Notifications">
            <span className="material-symbols-outlined text-[22px]">notifications</span>
          </button>
        </div>
        <div className="h-8 w-px bg-silver-400/10"></div>
        <button className="flex items-center gap-3 pl-1 pr-1 py-1 rounded-full hover:bg-white/5 transition-all">
          <div className="size-10 rounded-full border-2 border-cyan-accent/30 p-0.5">
            <div className="w-full h-full rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/user123/100/100')" }}></div>
          </div>
        </button>
      </div>
    </header>
  );
};
