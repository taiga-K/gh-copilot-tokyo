import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { AgendaSection } from './components/sections/AgendaSection';
import { VenueSection } from './components/sections/VenueSection';
import { CopilotUpdatesSection } from './components/sections/CopilotUpdatesSection';
import { RegisterSection } from './components/sections/RegisterSection';
import { ThemeStyles } from './styles/theme';
import { Toaster } from './components/ui/sonner';

/**
 * メインアプリケーション
 */
const App = () => {
  return (
    <>
      <ThemeStyles />
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <HeroSection />
        <AboutSection />
        <AgendaSection />
        <VenueSection />
        <CopilotUpdatesSection />
        <RegisterSection />
        <Footer />
        <Toaster />
      </div>
    </>
  );
};

export default App;
