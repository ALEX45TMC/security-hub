
import React from 'react';

interface SecurityAuditProps {
  isScanning: boolean;
  onScan: () => void;
}

export const SecurityAudit: React.FC<SecurityAuditProps> = ({ isScanning, onScan }) => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900 dark:text-silver-200 flex items-center gap-2">
          <span className="material-symbols-outlined text-cyan-500 text-[22px]">security_update_good</span>
          Security Audit Result
        </h3>
        <button 
          onClick={onScan}
          disabled={isScanning}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-500 text-xs font-bold hover:bg-cyan-500/20 transition-all border border-cyan-500/20 disabled:opacity-50"
        >
          <span className={`material-symbols-outlined text-[16px] ${isScanning ? 'animate-spin' : 'security-scan-pulse'}`}>
            refresh
          </span>
          {isScanning ? 'Scanning...' : 'Run Deep Scan'}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AuditCard 
          icon="password_2" 
          color="yellow" 
          title="Weak Passwords" 
          count="12 Items Found" 
          description="Passwords that are easily guessable or too short." 
        />
        <AuditCard 
          icon="sync_problem" 
          color="red" 
          title="Reused Passwords" 
          count="4 Instances" 
          description="Same password used across multiple secure items." 
        />
      </div>

      <div className="vault-glass rounded-2xl p-6 border-cyan-500/20">
        <div className="flex items-center gap-4 mb-6">
          <div className="size-12 rounded-full border-4 border-cyan-500/30 border-t-cyan-500 flex items-center justify-center">
            <span className="text-sm font-bold text-cyan-400">82%</span>
          </div>
          <div>
            <h4 className="font-bold text-silver-100">Overall Health Score</h4>
            <p className="text-xs text-silver-400">Excellent, but 3 data breaches found in external services.</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-3">
          <BreachAlert 
            title="Email Leaked: adobe.com breach" 
            subtitle="Update your Adobe password immediately." 
          />
        </div>
      </div>
    </section>
  );
};

interface AuditCardProps {
  icon: string;
  color: 'yellow' | 'red';
  title: string;
  count: string;
  description: string;
}

const AuditCard: React.FC<AuditCardProps> = ({ icon, color, title, count, description }) => {
  const colorMap = {
    yellow: "text-yellow-500 border-yellow-500/30 bg-yellow-500/20 bg-yellow-500/5 hover:bg-yellow-500/10",
    red: "text-red-500 border-red-500/30 bg-red-500/20 bg-red-500/5 hover:bg-red-500/10"
  };

  return (
    <div className={`vault-glass rounded-2xl p-5 border-opacity-20 transition-all ${colorMap[color].split(' hover')[0]}`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`size-10 rounded-lg flex items-center justify-center border ${colorMap[color].split(' ')[0]} ${colorMap[color].split(' ')[1]} ${colorMap[color].split(' ')[2]}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <span className={`text-xs font-bold ${colorMap[color].split(' ')[0]}`}>{count}</span>
      </div>
      <h4 className="font-bold text-silver-100">{title}</h4>
      <p className="text-xs text-silver-400 mt-1 mb-4">{description}</p>
      <button className={`w-full py-2 rounded-lg text-[11px] font-black uppercase tracking-widest transition-all ${colorMap[color].split('hover:')[1]} ${colorMap[color].split(' ')[0]}`}>
        Review & Fix
      </button>
    </div>
  );
};

const BreachAlert: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="flex items-center gap-3 p-3 rounded-xl bg-navy-950/40 border border-white/5">
    <span className="material-symbols-outlined text-red-400 text-[20px]">report</span>
    <div className="flex-1">
      <p className="text-xs font-bold text-silver-200">{title}</p>
      <p className="text-[10px] text-silver-500">{subtitle}</p>
    </div>
    <button className="px-3 py-1 rounded-md bg-white/5 text-[10px] font-bold text-silver-300 hover:bg-white/10 transition-colors">Ignore</button>
  </div>
);
