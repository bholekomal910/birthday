import { useEffect, useRef } from "react";
import "./MusicPlayer.css";

function MusicPlayer() {
  const audioRef = useRef(null);

  // Currently playing song
  const currentSongRef = useRef(0);

  // User has interacted with website or not
  const userInteractedRef = useRef(false);

  const songs = [
    "/music/song1.mp3",
    "/music/song2.mp3",
    "/music/song3.mp3",
    "/music/song4.mp3",
    "/music/song5.mp3",
  ];

  /*
    SECTION → SONG

    0 = song1
    1 = song2
    2 = song3
    3 = song4
    4 = song5
  */

  const sectionSongs = {
  // song1
  home: 0,
  countdown: 0,

  // song2
  memories: 1,

  // song3
  "just-you": 2,
  "our-story": 2,
  reasons: 2,

  // song4
  "birthday-letter": 3,

  // song5
  surprise: 4,
  final: 4,
};

  /*
    Change song
  */
  const changeSong = (songIndex) => {
    const audio = audioRef.current;

    if (!audio) return;

    // Same song असेल तर काही करू नका
    if (songIndex === currentSongRef.current) {
      return;
    }

    currentSongRef.current = songIndex;

    // Current song stop
    audio.pause();

    // New song
    audio.src = songs[songIndex];

    // Start from beginning
    audio.currentTime = 0;

    audio.load();

    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log(
          "Song change blocked:",
          error.name
        );
      });
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    // Volume
    audio.volume = 0.7;

    /*
      Browser autoplay साठी
      first user interaction
    */
    const startMusicAfterInteraction = () => {
      userInteractedRef.current = true;

      if (audio.paused) {
        audio.play().catch((error) => {
          console.log(
            "Music could not start:",
            error.name
          );
        });
      }
    };

    window.addEventListener(
      "click",
      startMusicAfterInteraction
    );

    window.addEventListener(
      "autoplaystart",
      startMusicAfterInteraction
    );

    window.addEventListener(
      "keydown",
      startMusicAfterInteraction
    );

    /*
      Find which section is currently
      closest to the middle of screen
    */
    const checkCurrentSection = () => {
      const sections =
        document.querySelectorAll("main section");

      if (!sections.length) return;

      const screenMiddle =
        window.innerHeight / 2;

      let closestSection = null;
      let smallestDistance = Infinity;

      sections.forEach((section) => {
        const rect =
          section.getBoundingClientRect();

        const sectionMiddle =
          rect.top + rect.height / 2;

        const distance = Math.abs(
          screenMiddle - sectionMiddle
        );

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestSection = section;
        }
      });

      if (!closestSection) return;

      const sectionId =
        closestSection.id;

      /*
        Section ला song assign केलेला नसेल
        तर काही करू नका.
      */
      if (
        !Object.prototype.hasOwnProperty.call(
          sectionSongs,
          sectionId
        )
      ) {
        return;
      }

      const newSongIndex =
        sectionSongs[sectionId];

      /*
        Same song असेल तर change करू नका.
      */
      if (
        newSongIndex ===
        currentSongRef.current
      ) {
        return;
      }

      /*
        User ने एकदा interaction
        केल्यानंतरच song बदलू.
      */
      if (userInteractedRef.current) {
        changeSong(newSongIndex);
      }
    };

    /*
      Scroll listener
    */
    let scrollTimer;

    const handleScroll = () => {
      clearTimeout(scrollTimer);

      scrollTimer = setTimeout(() => {
        checkCurrentSection();
      }, 80);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    /*
      Page load वर current section check
    */
    checkCurrentSection();

    /*
      Cleanup
    */
    return () => {
      window.removeEventListener(
        "click",
        startMusicAfterInteraction
      );

      window.removeEventListener(
        "touchstart",
        startMusicAfterInteraction
      );

      window.removeEventListener(
        "keydown",
        startMusicAfterInteraction
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music/song1.mp3"
      preload="auto"
    />
  );
}

export default MusicPlayer;