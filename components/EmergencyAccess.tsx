
import React from 'react';

export const EmergencyAccess: React.FC = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900 dark:text-silver-200">Emergency Access Setup</h3>
        <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-1 border border-cyan-500/20 rounded-full uppercase tracking-widest">Setup Complete</span>
      </div>
      
      <div className="vault-glass rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-white/5">
          <p className="text-sm text-silver-400 leading-relaxed mb-6">Designate a trusted contact to request access to your vault if you're unable to access it. You'll have a 7-day window to decline any request.</p>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-navy-900/40 border border-white/5">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-navy-700 flex items-center justify-center text-silver-300">
                  <span className="material-symbols-outlined text-[20px]">person</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-silver-200">sarah.j@trusted.com</p>
                  <p className="text-[11px] text-silver-500">Primary Contact • Can request full vault</p>
                </div>
              </div>
              <button className="text-silver-500 hover:text-red-400 transition-colors">
                <span className="material-symbols-outlined text-[20px]">delete</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-navy-950/30 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] font-black text-silver-500 uppercase tracking-widest mb-2">Waiting Period</label>
            <div className="relative">
              <select className="w-full bg-navy-900 border-white/10 rounded-lg text-sm text-silver-200 py-2.5 px-4 focus:ring-cyan-500 outline-none appearance-none">
                <option>48 Hours</option>
                <option defaultValue="7 Days">7 Days</option>
                <option>14 Days</option>
                <option>30 Days</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-silver-500">
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </div>
            </div>
            <p className="text-[10px] text-silver-500 mt-2">Requests will wait this long before access is granted.</p>
          </div>
          <div className="flex flex-col justify-end">
            <button className="w-full py-2.5 rounded-lg border-2 border-dashed border-white/10 text-silver-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all flex items-center justify-center gap-2 text-sm font-bold">
              <span className="material-symbols-outlined text-[18px]">person_add</span>
              Add Secondary Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
