
import React from 'react';
import { TabType } from '../App';

interface SidebarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <aside className="flex w-72 flex-col border-r border-silver-400/10 bg-navy-900 flex-shrink-0 transition-all duration-300 z-20">
      <div className="flex h-20 items-center px-8 border-b border-silver-400/5">
        <div className="flex items-center gap-3 text-cyan-accent">
          <div className="size-9 rounded-lg bg-cyan-accent/10 flex items-center justify-center border border-cyan-accent/20">
            <span className="material-symbols-outlined icon-fill">shield</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white">SecureHub</h1>
        </div>
      </div>
      
      <div className="flex flex-col flex-1 overflow-y-auto p-6 gap-8 no-scrollbar">
        <div className="flex flex-col gap-2">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-accent hover:brightness-110 transition-all h-12 text-navy-900 shadow-lg shadow-cyan-accent/20 font-bold">
            <span className="material-symbols-outlined">upload_file</span>
            <span className="text-sm">Secure Upload</span>
          </button>
        </div>

        <nav className="flex flex-col gap-1.5">
          <p className="px-3 text-[10px] font-bold text-silver-400 uppercase tracking-widest mb-2 opacity-50">Storage</p>
          <SidebarLink 
            icon="folder_shared" 
            label="File Hub" 
            active={activeTab === 'files'} 
            onClick={() => onTabChange('files')}
          />
          <SidebarLink 
            icon="encrypted" 
            label="Private Vault" 
            active={activeTab === 'vault'} 
            onClick={() => onTabChange('vault')}
          />
          <SidebarLink 
            icon="passkey" 
            label="Passwords" 
            active={activeTab === 'passwords'} 
            onClick={() => onTabChange('passwords')}
          />
          
          <div className="my-4 h-px bg-silver-400/10 mx-3"></div>
          
          <p className="px-3 text-[10px] font-bold text-silver-400 uppercase tracking-widest mb-2 opacity-50">Preferences</p>
          <SidebarLink 
            icon="translate" 
            label="Language Hub" 
            active={activeTab === 'language-hub'} 
            onClick={() => onTabChange('language-hub')}
          />
          <SidebarLink 
            icon="settings" 
            label="Security Settings" 
            active={false} 
            onClick={() => {}}
          />
        </nav>

        <div className="mt-auto">
          <div className="p-5 bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl border border-cyan-accent/20 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 size-20 bg-cyan-accent/5 rounded-full blur-2xl group-hover:bg-cyan-accent/10 transition-all"></div>
            <div className="flex items-center gap-2 mb-2 relative z-10">
              <span className="material-symbols-outlined text-cyan-accent text-[20px] icon-fill">verified_user</span>
              <span className="text-xs font-bold text-white uppercase tracking-wider">Enterprise Tier</span>
            </div>
            <p className="text-[11px] text-silver-400 leading-relaxed relative z-10">Enhanced encryption & localization policies are active.</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

interface SidebarLinkProps {
  icon: string;
  label: string;
  active: boolean;
  onClick: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group w-full ${
      active 
      ? "bg-cyan-accent/10 text-cyan-accent border border-cyan-accent/20 font-semibold" 
      : "text-silver-300 hover:bg-white/5"
    }`}
  >
    <span className={`material-symbols-outlined ${active ? 'text-cyan-accent' : 'text-silver-400 group-hover:text-cyan-accent'}`}>
      {icon}
    </span>
    <span className="text-sm font-medium">{label}</span>
  </button>
);
