import { motion } from "framer-motion";
import "./Memories.css";

function Memories() {
  const photos = [
    "/photos/1.jpg",
    "/photos/2.jpg",
    "/photos/3.jpg",
    "/photos/4.jpg",
    "/photos/5.jpg",
    "/photos/6.jpg",
    "/photos/7.jpg",
    "/photos/8.jpg",
    "/photos/9.jpg",
    "/photos/10.jpg",
    "/photos/11.jpg",
    "/photos/12.jpg",
    "/photos/13.jpg",
    "/photos/14.jpg",
    "/photos/15.jpg",
    "/photos/16.jpg",
    "/photos/17.jpg",
    "/photos/18.jpg",
    "/photos/19.jpg",
    "/photos/20.jpg",
    "/photos/21.jpg",
    "/photos/22.jpg",
    "/photos/23.jpg",
    "/photos/24.jpg",
    "/photos/25.jpg",
    "/photos/26.jpg",
    "/photos/27.jpg",
    "/photos/28.jpg",
    "/photos/29.jpg",
    "/photos/30.jpg",
  ];

  return (
    <section className="memories-section" id="memories">

      {/* Heading */}

      <motion.div
        className="memories-heading"
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
        transition={{
          duration: 0.8,
        }}
      >
        <p>
          SINCE 29 JANUARY 2022
        </p>

        <h2>
          Our
          <span>
            Beautiful Memories
          </span>
        </h2>

        <div className="memories-heart">
          ♡
        </div>

        <p className="memories-subtitle">
          A collection of moments that became
          <br />
          some of my favourite parts of life.
        </p>
      </motion.div>

      {/* Gallery */}

      <div className="simple-gallery">

        {photos.map((photo, index) => (
          <motion.div
            className="simple-photo"
            key={photo}
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
              amount: 0.1,
            }}
            transition={{
              duration: 0.6,
              delay: (index % 3) * 0.08,
            }}
            whileHover={{
              y: -8,
            }}
          >

            <div className="simple-photo-inner">

              <img
                src={photo}
                alt={`Our memory ${index + 1}`}
                loading="lazy"
                onError={(e) => {
                  console.log(
                    "Image not found:",
                    photo
                  );

                  e.currentTarget.style.display =
                    "none";
                }}
              />

              <div className="simple-photo-overlay">

                <span>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <div className="photo-heart">
                  ♡
                </div>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

      {/* Ending */}

      <motion.div
        className="memories-end"
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
      >

        <div></div>

        <p>
          30 memories.
          <span>
            {" "}
            One beautiful story.
          </span>
        </p>

        <small>
          29.01.2022 — AND STILL WRITING OUR STORY
        </small>

        <div></div>

      </motion.div>

    </section>
  );
}

export default Memories;