import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  const goToCountdown = () => {
    document
      .getElementById("countdown")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="hero-section" id="home">

      <div className="hero-photo"></div>

      <div className="hero-dark"></div>

      <div className="hero-glow"></div>

      <div className="hero-content">

        <motion.p
          className="hero-top"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2.3,
            duration: 0.8,
          }}
        >
          A LITTLE SURPRISE FOR YOU
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2.5,
            duration: 1,
          }}
        >
          Hey Birthday
          <span>Boy ♡</span>
        </motion.h1>

        <motion.div
          className="hero-date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          10 • 10 • 2026
        </motion.div>

        <motion.p
          className="hero-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2 }}
        >
          To the person who became
          <br />
          my favourite part of my college story.
        </motion.p>

        <motion.button
          className="hero-button"
          onClick={goToCountdown}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 3.5,
          }}
        >
          Enter Our World
          <span>♡</span>
        </motion.button>

      </div>

      <div className="hero-scroll">
        <span></span>
        <p>SCROLL TO EXPLORE</p>
      </div>

    </section>
  );
}

export default Hero;