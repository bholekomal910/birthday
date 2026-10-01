import { motion } from "framer-motion";
import "./HisPhotos.css";

function HisPhotos() {
  const hisPhotos = [
    "/his_photos/1.jpg",
    "/his_photos/2.jpg",
    "/his_photos/3.jpg",
    "/his_photos/4.jpg",
    "/his_photos/5.jpg",
    "/his_photos/6.jpg",
    "/his_photos/7.jpg",
    "/his_photos/8.jpg",
    "/his_photos/9.jpg",
  ];

  const captions = [
    "That smile.",
    "My favourite face.",
    "The way you look.",
    "Just you.",
    "Always this one.",
    "One of my favourites.",
    "You, being you.",
    "My favourite person.",
    "Simply you.",
  ];

  return (
    <section className="his-photos-section" id="just-you">

      {/* Background Glow */}
      <div className="his-photos-glow glow-one"></div>
      <div className="his-photos-glow glow-two"></div>

      {/* Heading */}
      <motion.div
        className="his-photos-heading"
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
          duration: 0.9,
        }}
      >
        <p>BECAUSE YOU DESERVE YOUR OWN CHAPTER</p>

        <h2>
          Just
          <span>You</span>
        </h2>

        <div className="his-heading-heart">
          ♡
        </div>

        <p className="his-photos-subtitle">
          Some pictures are simply my favourites.
          <br />
          Not because of anything special...
          <br />
          Just because they are you.
        </p>
      </motion.div>

      {/* Photos */}
      <div className="his-photos-grid">
        {hisPhotos.map((photo, index) => (
          <motion.div
            className="his-photo-card"
            key={photo}
            initial={{
              opacity: 0,
              y: 70,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              delay: (index % 3) * 0.12,
            }}
            whileHover={{
              y: -10,
            }}
          >
            <div className="his-photo-image">

              <img
                src={photo}
                alt={`Favourite photo ${index + 1}`}
                loading="lazy"
              />

              <div className="his-photo-overlay">

                {/* Number */}
                <div className="his-photo-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Heart */}
                <div className="his-photo-heart">
                  ♡
                </div>

                {/* Caption */}
                <div className="his-photo-caption">
                  {captions[index]}
                </div>

              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Ending */}
      <motion.div
        className="his-photos-ending"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
      >
        <div className="ending-line"></div>

        <p>
          I don't know how you see yourself,
          <br />
          but I hope you know how
          <span> beautiful you are to me.</span>
        </p>

        <div className="ending-heart">
          ♡
        </div>

        <small>
          MY FAVOURITE PERSON
        </small>

        <div className="ending-line"></div>
      </motion.div>

    </section>
  );
}

export default HisPhotos;