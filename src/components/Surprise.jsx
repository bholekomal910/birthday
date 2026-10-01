import { useState } from "react";
import { motion } from "framer-motion";
import "./Surprise.css";

function Surprise() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="surprise-section">

      {!opened ? (
        <motion.div
          className="surprise-content"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <p>A LITTLE MORE...</p>

          <h2>
            I Have One More
            <span>Thing For You</span>
          </h2>

          <motion.div
            className="surprise-heart"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            ♡
          </motion.div>

          <button
            className="surprise-button"
            onClick={() => setOpened(true)}
          >
            Open Your Surprise
            <span>♡</span>
          </button>
        </motion.div>
      ) : (
        <motion.div
          className="surprise-open"
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="surprise-small">
            FOR THE BIRTHDAY BOY
          </div>

          <div className="surprise-hearts">
            ♡ ♡ ♡
          </div>

          <h2>
            Happy Birthday
            <span>My Love</span>
          </h2>

          <p>
            You are one of the most beautiful
            parts of my life.
          </p>

          <div className="big-heart">
            ♥
          </div>

          <strong>
            29.01.2022 → Forever
          </strong>
        </motion.div>
      )}

    </section>
  );
}

export default Surprise;