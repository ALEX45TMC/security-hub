
import React from 'react';

export const RightPanel: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Auto-Lock Settings */}
      <section className="vault-glass rounded-2xl p-6 cyan-glow">
        <div className="flex items-center gap-3 mb-6">
          <div className="size-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
            <span className="material-symbols-outlined text-[22px]">timer_10_alt_1</span>
          </div>
          <div>
            <h4 className="font-bold text-silver-100">Auto-Lock Settings</h4>
            <p className="text-[11px] text-silver-400">Manage inactivity timers</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-silver-300">Lock on Hibernate</span>
            <Toggle checked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-silver-300">Lock on Window Blur</span>
            <Toggle />
          </div>
          <div className="pt-2">
            <button className="w-full py-2.5 rounded-lg bg-navy-800 text-xs font-bold text-silver-200 border border-white/5 hover:bg-navy-700 transition-all">
              Lock Vault Now
            </button>
          </div>
        </div>
      </section>

      {/* Recent Access */}
      <section className="vault-glass rounded-2xl p-6">
        <h4 className="text-sm font-bold text-silver-200 mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-cyan-400 text-[18px]">history</span>
          Recent Access
        </h4>
        <div className="space-y-4">
          <AccessItem title="Vault Unlocked" meta="Today, 09:42 AM • London, UK" color="cyan" />
          <AccessItem title="Emergency Access Sync" meta="Yesterday, 11:20 PM" color="silver" />
          <AccessItem title="Failed Login Attempt" meta="Oct 24, 02:15 AM • Ashburn, US" color="red" />
        </div>
        <button className="w-full mt-6 py-2 text-[11px] font-black text-cyan-400 uppercase tracking-widest hover:text-cyan-300">
          Full Access Logs
        </button>
      </section>

      {/* Premium Box */}
      <div className="rounded-2xl bg-gradient-to-br from-cyan-600/20 to-navy-900 border border-cyan-500/20 p-6">
        <span className="material-symbols-outlined text-cyan-400 mb-3">verified</span>
        <h5 className="font-bold text-white mb-1">Premium Security</h5>
        <p className="text-[11px] text-silver-400 mb-4">You are currently using advanced Zero-Knowledge protocols.</p>
        <button className="text-[10px] font-bold text-cyan-400 flex items-center gap-1 group">
          Learn about our encryption
          <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

const Toggle: React.FC<{ checked?: boolean }> = ({ checked }) => {
  const [isOn, setIsOn] = React.useState(checked || false);
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input 
        type="checkbox" 
        className="sr-only peer" 
        checked={isOn}
        onChange={() => setIsOn(!isOn)}
      />
      <div className="w-9 h-5 bg-navy-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500"></div>
    </label>
  );
};

const AccessItem: React.FC<{ title: string; meta: string; color: 'cyan' | 'red' | 'silver' }> = ({ title, meta, color }) => {
  const dotColor = {
    cyan: "bg-cyan-500",
    red: "bg-red-500/50",
    silver: "bg-silver-700"
  };

  return (
    <div className="flex gap-3">
      <div className={`size-2 mt-1.5 rounded-full ${dotColor[color]}`}></div>
      <div>
        <p className={`text-xs font-bold ${color === 'cyan' ? 'text-silver-100' : 'text-silver-300'}`}>{title}</p>
        <p className="text-[10px] text-silver-500">{meta}</p>
      </div>
    </div>
  );
};
