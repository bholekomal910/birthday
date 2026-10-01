import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Countdown.css";

function Countdown() {
  const calculateTime = () => {
    const birthday = new Date(
      "October 10, 2026 00:00:00"
    ).getTime();

    const now = new Date().getTime();

    const difference = birthday - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        birthday: true,
      };
    }

    return {
      days: Math.floor(
        difference / (1000 * 60 * 60 * 24)
      ),

      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),

      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),

      seconds: Math.floor(
        (difference / 1000) % 60
      ),

      birthday: false,
    };
  };

  const [time, setTime] =
    useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const values = [
    ["days", "DAYS"],
    ["hours", "HOURS"],
    ["minutes", "MINUTES"],
    ["seconds", "SECONDS"],
  ];

  return (
    <section
      className="countdown-section"
      id="countdown"
    >
      <motion.div
        className="countdown-heading"
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
        <p>COUNTING EVERY SECOND</p>

        <h2>
          Your Special
          <span>Day</span>
        </h2>

        <div>♡</div>
      </motion.div>

      {time.birthday ? (
        <div className="birthday-now">
          HAPPY BIRTHDAY MY LOVE ♡
        </div>
      ) : (
        <div className="countdown-boxes">
          {values.map(([key, label]) => (
            <motion.div
              className="countdown-box"
              key={key}
              whileHover={{
                y: -8,
              }}
            >
              <strong>
                {String(time[key]).padStart(2, "0")}
              </strong>

              <span>{label}</span>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Countdown;