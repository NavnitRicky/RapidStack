import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './component/Header';
import TeamHero from './component/TeamHero';
import TeamMembers from './component/TeamMembers';
import ProjectShowcase from './component/ProjectShowcase';
import WorkProcess from './component/WorkProcess';
import './App.css';
import PricingSection from './component/PricingSection';
import QuoteRequest from './component/QuoteRequest';
import Footer from './component/Footer';
import ScheduleCall from './component/SchduleCall';
import ParticleBackground from './component/ParticleBackground';
import PageTransition from './component/PageTransition';

function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      // Defer until route content mounts
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  }, [location]);
  return null;
}

function HomePage() {
  return (
    <>
      <TeamHero />
      <PricingSection />
      <ProjectShowcase />
      <WorkProcess />
      <QuoteRequest />
    </>
  );
}

function TeamPage() {
  return <TeamMembers />;
}

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <PageTransition />
      <Header />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/schedule-call" element={<ScheduleCall />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App; 