import { motion } from "framer-motion";
import "./Reasons.css";

function Reasons() {
  const reasons = [
    {
      title: "Your Smile",
      text: "Because somehow your smile can make even an ordinary day feel special.",
    },
    {
      title: "Your Care",
      text: "The little things you do for me mean more than you probably realize.",
    },
    {
      title: "Your Support",
      text: "Thank you for being there through the good days and difficult ones.",
    },
    {
      title: "Our Memories",
      text: "From our college days to every little moment we've shared.",
    },
    {
      title: "Your Presence",
      text: "Sometimes I don't need anything else. Just having you around is enough.",
    },
    {
      title: "Just You",
      text: "No special reason. I simply love you for being you.",
    },
  ];

  return (
    <section className="reasons-section">

      <motion.div
        className="reasons-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>A FEW OF MANY</p>

        <h2>
          Things I Love
          <span>About You</span>
        </h2>

        <div>♡</div>

        <small>
          And honestly, I could keep going...
        </small>
      </motion.div>

      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <motion.div
            className="reason-card"
            key={reason.title}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -10,
            }}
          >
            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="reason-heart">
              ♡
            </div>

            <h3>{reason.title}</h3>

            <p>{reason.text}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Reasons;