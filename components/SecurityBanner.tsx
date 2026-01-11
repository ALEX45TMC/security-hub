
import React from 'react';

export const SecurityBanner: React.FC = () => {
  return (
    <div className="vault-gradient border-b border-cyan-900/30 px-8 py-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#22d3ee 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
      <div className="mx-auto max-w-7xl relative">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 rounded bg-cyan-500 text-navy-900 text-[10px] font-black uppercase tracking-widest">Military Grade</span>
              <span className="text-silver-400 text-xs flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-cyan-400">verified_user</span> 
                End-to-End Encrypted
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Security Architecture</h2>
            <p className="text-silver-400 max-w-xl text-sm leading-relaxed">
              Your data is secured using AES-256 with PBKDF2 SHA-256. Using Zero-Knowledge architecture, DataHub never sees your master password or unencrypted data.
            </p>
          </div>
          
          <div className="flex items-center gap-6 bg-navy-950/40 p-4 rounded-2xl border border-white/5 backdrop-blur-md">
            <div className="flex flex-col items-center gap-1">
              <div className="size-10 rounded-full bg-cyan-500 flex items-center justify-center text-navy-900 shadow-lg shadow-cyan-500/20">
                <span className="material-symbols-outlined text-[20px]">person</span>
              </div>
              <span className="text-[9px] font-bold text-silver-300">USER</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-cyan-500/50"></div>
              <span className="material-symbols-outlined text-cyan-400 text-[18px]">lock</span>
              <div className="h-px w-8 bg-cyan-500/50"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="size-10 rounded-full bg-navy-800 flex items-center justify-center text-silver-400 border border-white/10">
                <span className="material-symbols-outlined text-[20px]">cloud_off</span>
              </div>
              <span className="text-[9px] font-bold text-silver-500">CLOUD</span>
            </div>
            <div className="h-10 w-px bg-white/10"></div>
            <div className="pr-2">
              <p className="text-[11px] font-bold text-cyan-400 uppercase tracking-tighter">Zero-Knowledge</p>
              <p className="text-[10px] text-silver-400">Local Encryption Only</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
