
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MainVault } from './components/MainVault';
import { LanguageHub } from './components/LanguageHub';

export type TabType = 'vault' | 'language-hub' | 'passwords' | 'files';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('language-hub');

  return (
    <div className="flex h-screen w-full relative bg-background-dark overflow-hidden text-silver-200">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex flex-1 flex-col h-full relative overflow-hidden">
        <Header activeTab={activeTab} />
        
        <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth no-scrollbar">
          {activeTab === 'vault' && <MainVault />}
          {activeTab === 'language-hub' && <LanguageHub />}
          {activeTab !== 'vault' && activeTab !== 'language-hub' && (
            <div className="flex items-center justify-center h-full text-silver-400">
              <div className="text-center">
                <span className="material-symbols-outlined text-6xl mb-4 opacity-20">construction</span>
                <p className="text-lg font-medium">This section is coming soon</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
