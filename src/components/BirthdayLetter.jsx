import { motion } from "framer-motion";
import "./BirthdayLetter.css";

function BirthdayLetter() {
  return (
    <section className="letter-section">

      <div className="letter-background-glow"></div>

      <motion.div
        className="letter-card"
        initial={{
          opacity: 0,
          y: 80,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >

        {/* Top decoration */}

        <div className="letter-top-heart">
          ♡
        </div>

        <span className="letter-label">
          A LETTER I WANTED YOU TO READ
        </span>

        <h2>
          To the one who became
          <span>my favourite person...</span>
        </h2>

        <div className="letter-decoration">
          <span></span>
          ♡
          <span></span>
        </div>

        <p className="letter-date">
          29 January 2022
        </p>

        {/* Letter */}

        <div className="letter-content">

          <p>
            I don't really know where our story
            truly began.
          </p>

          <p>
            We had met before.
            We had seen each other before.
            There were moments before this date
            that were already quietly becoming
            part of our story.
          </p>

          <p>
            But I don't know the exact day when
            our paths first crossed in a way that
            mattered.
          </p>

          <p>
            And maybe that's okay.
          </p>

          <p className="letter-highlight">
            Because the date I do know,
            the date I will always remember,
            is <strong>29 January 2022.</strong>
          </p>

          <p>
            That was the day our story became
            <em>ours.</em>
          </p>

          <p>
            From that day, somehow, you slowly
            became such an important part of my
            life.
          </p>

          <p>
            We started with conversations,
            little moments, laughs, silly things,
            and memories that I didn't know
            would one day mean so much to me.
          </p>

          <p>
            We grew together through different
            days, different situations,
            happiness, misunderstandings,
            little fights, endless conversations
            and countless memories.
          </p>

          <p>
            And somewhere between all those
            ordinary moments, you became
            someone I couldn't imagine my life
            without.
          </p>

          <p>
            Sometimes I look back at our old
            pictures and wonder how quickly
            everything changed.
          </p>

          <p>
            We were just two people who met,
            and now here we are...
            with years of memories behind us
            and so many more moments still
            waiting for us.
          </p>

          <p className="letter-special">
            You are not just a part of my
            memories.
            <br />
            You are one of my favourite parts
            of my life.
          </p>

          <p>
            I may not always know how to say
            everything I feel.
          </p>

          <p>
            Sometimes I may not express it
            perfectly.
            Sometimes I may get angry over
            little things.
            Sometimes we may not agree.
          </p>

          <p>
            But underneath all of that,
            there is one thing that hasn't changed.
          </p>

          <p className="letter-highlight">
            I am still grateful that it was you.
          </p>

          <p>
            On your birthday, I don't just want
            to wish you happiness for today.
          </p>

          <p>
            I want you to have a life filled with
            everything you dream about.
            I want you to grow, succeed,
            experience beautiful things,
            laugh more, worry less,
            and always remember how special
            you are.
          </p>

          <p>
            And selfishly, I hope I get to be
            there for many of those moments.
          </p>

          <p>
            More birthdays.
            <br />
            More photographs.
            <br />
            More random conversations.
            <br />
            More silly memories.
            <br />
            More adventures.
            <br />
            More moments that we will look back
            on someday and smile about.
          </p>

          <p className="letter-final-message">
            If I could go back to the beginning,
            I would still choose the same story.
          </p>

          <p>
            I would choose that day.
            <br />
            I would choose those memories.
            <br />
            And I would choose you.
          </p>

        </div>

        {/* Ending */}

        <div className="letter-ending">

          <div className="letter-ending-line"></div>

          <p>
            Happy Birthday to the person
            who became a beautiful part
            of my life without me even
            realizing when it happened.
          </p>

          <div className="letter-big-heart">
            ♥
          </div>

          <h3>
            Happy Birthday,
            <span>My Love</span>
          </h3>

          <p className="letter-sign">
            Always yours ♡
          </p>

          <small>
            29.01.2022 — AND STILL WRITING OUR STORY
          </small>

        </div>

      </motion.div>
    </section>
  );
}

export default BirthdayLetter;