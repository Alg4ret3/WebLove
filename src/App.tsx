import React, { useRef } from 'react';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Gallery } from './components/Gallery';
import { Invitation } from './components/Invitation';
import { PersonalMessage } from './components/PersonalMessage';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { YellowFlowersCountdown } from './components/targetDate';

function App() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero onExploreClick={scrollToTimeline} />
      <YellowFlowersCountdown />
      <div ref={timelineRef}>
        <Timeline />
      </div>
      <Gallery />
      <Invitation />
      <PersonalMessage />z
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;