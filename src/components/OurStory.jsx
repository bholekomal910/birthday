import { motion } from "framer-motion";
import "./OurStory.css";

function OurStory() {
  const story = [
    {
      number: "01",
      date: "29 JANUARY 2022",
      title: "The Beginning",
      text: "It all started in college. One ordinary day became the beginning of something very special.",
    },
    {
      number: "02",
      date: "OUR COLLEGE DAYS",
      title: "The Memories",
      text: "Little conversations, laughs, silly moments and all those memories slowly became my favourite part of college.",
    },
    {
      number: "03",
      date: "YEARS TOGETHER",
      title: "Growing Together",
      text: "Days became months and months became years. Somewhere along the way, you became such an important part of my life.",
    },
    {
      number: "04",
      date: "10 OCTOBER 2026",
      title: "Your Day",
      text: "Today, I get to celebrate you and everything that makes you so special to me.",
    },
  ];

  return (
    <section className="story-section" id="story">

      <motion.div
        className="story-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>EVERY LOVE STORY HAS A BEGINNING</p>

        <h2>
          Our <span>Story</span>
        </h2>

        <div>♡</div>

        <small>
          From one college day to years of memories.
        </small>
      </motion.div>

      <div className="timeline">
        {story.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={item.number}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -60 : 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="timeline-dot">
              {item.number}
            </div>

            <div className="timeline-card">
              <span>{item.date}</span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default OurStory;