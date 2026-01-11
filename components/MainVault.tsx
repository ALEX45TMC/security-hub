
import React, { useState } from 'react';
import { SecurityBanner } from './SecurityBanner';
import { SecurityAudit } from './SecurityAudit';
import { EmergencyAccess } from './EmergencyAccess';
import { RightPanel } from './RightPanel';

export const MainVault: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2000);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <SecurityBanner />
      <div className="p-6 lg:p-10">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <SecurityAudit isScanning={isScanning} onScan={handleScan} />
            <EmergencyAccess />
          </div>
          <div className="flex flex-col gap-8">
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
};
