import LoadingScreen from "./components/LoadingScreen";
import MusicPlayer from "./components/MusicPlayer";

import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Memories from "./components/Memories";
import HisPhotos from "./components/HisPhotos";
import VideoSection from "./components/VideoSection";
import OurStory from "./components/OurStory";
import Reasons from "./components/Reasons";
import BirthdayLetter from "./components/BirthdayLetter";
import Surprise from "./components/Surprise";
import FinalSection from "./components/FinalSection";

import "./App.css";

function App() {
  return (
    <div className="app">
      <LoadingScreen />
      <MusicPlayer />

      <main>
        <Hero />

        <Countdown />

        <Memories />

        <HisPhotos />

        <VideoSection />

        <OurStory />

        <Reasons />

        <BirthdayLetter />

        <Surprise />

        <FinalSection />
      </main>
    </div>
  );
}

export default App;