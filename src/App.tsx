import ParticleBackground from "./components/ui/ParticleBackground";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import EventDetails from "./components/sections/EventDetails";
import Gallery from "./components/sections/Gallery";
import Gifts from "./components/sections/Gifts";
import Rsvp from "./components/sections/Rsvp";
import Thanks from "./components/sections/Thanks";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { useBackgroundMusic } from "./hooks/useBackgroundMusic";

export default function App() {
  const activeSection = useScrollSpy();
  const { isMuted, toggleMute } = useBackgroundMusic();

  return (
    <div className="relative min-h-screen bg-background-custom text-on-background overflow-x-hidden selection:bg-primary-container selection:text-primary">
      <ParticleBackground />
      <Navbar activeSection={activeSection} isMuted={isMuted} onToggleMusic={toggleMute} />

      <main className="w-full flex-grow flex flex-col relative pb-16 md:pb-0">
        <Hero />
        <EventDetails />
        <Gallery />
        <Gifts />
        <Rsvp />
        <Thanks />
      </main>

      <Footer />
    </div>
  );
}
