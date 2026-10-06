import { motion } from "framer-motion";
import "./VideoSection.css";

function VideoSection() {
  return (
    <section className="video-section" id="our-video">

      {/* Background Glow */}
      <div className="video-glow video-glow-one"></div>
      <div className="video-glow video-glow-two"></div>

      {/* Heading */}
      <motion.div
        className="video-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <p className="video-small-title">
          A LITTLE MOVIE ABOUT US
        </p>

        <h2>
          Our
          <span>Moments</span>
        </h2>

        <div className="video-heart">♡</div>

        <p className="video-subtitle">
          Some memories are better felt than explained.
          <br />
          So I made this little movie just for you.
        </p>
      </motion.div>

      {/* Video */}
      <motion.div
        className="video-wrapper"
        initial={{ opacity: 0, scale: 0.94, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className="video-frame">

          <video
            controls
            playsInline
            preload="metadata"
          >
            <source src="/video/VN20261007_014303.mp4" type="video/mp4" />

            Your browser does not support the video tag.
          </video>

          <div className="video-corner top-left"></div>
          <div className="video-corner top-right"></div>
          <div className="video-corner bottom-left"></div>
          <div className="video-corner bottom-right"></div>

        </div>
      </motion.div>

      {/* Ending Text */}
      <motion.div
        className="video-ending"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="video-line"></div>

        <p>
          Every little moment with you
          <br />
          is a memory I want to
          <span> keep forever.</span>
        </p>

        <div className="video-ending-heart">♡</div>

        <small>JUST YOU & ME</small>

        <div className="video-line"></div>
      </motion.div>

    </section>
  );
}

export default VideoSection;