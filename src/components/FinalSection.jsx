import { motion } from "framer-motion";
import "./FinalSection.css";

function FinalSection() {
  return (
    <section className="final-section">

      <div className="final-image"></div>

      <div className="final-overlay"></div>

      <motion.div
        className="final-content"
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
      >

        <p className="final-start">
          29 JANUARY 2022
        </p>

        <div className="final-arrow">
          ↓
        </div>

        <p className="final-small">
          YEARS OF MEMORIES AND STILL COUNTING
        </p>

        <h1>
          HAPPY
          <span>BIRTHDAY</span>
        </h1>

        <h2>
          My Love ♡
        </h2>

        <div className="final-star">
          ✦
        </div>

        <p className="final-text">
          Here's to more laughter,
          <br />
          more memories,
          <br />
          more adventures,
          <br />
          and many more birthdays together.
        </p>

        <p className="final-forever">
          Always & Forever
        </p>

        <p className="final-date">
          10 • 10 • 2026
        </p>

      </motion.div>

    </section>
  );
}

export default FinalSection;