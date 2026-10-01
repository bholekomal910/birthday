import { motion } from "framer-motion";
import "./LoadingScreen.css";

function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        pointerEvents: "none",
      }}
      transition={{
        delay: 2,
        duration: 1,
      }}
    >
      <div className="loading-content">

        <motion.div
          className="loading-heart"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
        >
          ♡
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          OUR LITTLE UNIVERSE
        </motion.p>

        <span>
          Since 29.01.2022
        </span>

      </div>
    </motion.div>
  );
}

export default LoadingScreen;