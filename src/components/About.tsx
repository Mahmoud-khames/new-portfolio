import UseSectionsSelector from "../hooks/useSectionsSelector";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  const { ref } = UseSectionsSelector("About", 0.3);
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 mt-[110px] mx-auto"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a graduate of{" "}
        <span className="font-medium">
          Alexandria University's Faculty of Arts
        </span>
        , I discovered my true passion in technology and made a bold career
        shift. Over the past <span className="font-medium">2 years</span>, I've
        immersed myself in
        <span className="font-medium"> self-taught programming</span>, mastering
        the{" "}
        <span className="font-medium">
          MERN stack (MongoDB, Express.js, React, Node.js)
        </span>
        . <span className="italic">What captivates me most about coding</span>{" "}
        is the endless puzzle-solving and the satisfaction of turning ideas into
        functional applications. My expertise spans{" "}
        <span className="font-medium">full-stack development</span> with
        hands-on experience in building RESTful APIs, dynamic user interfaces,
        and database architecture.
      </p>

      <p className="mb-3">
        I've sharpened my skills through personal projects and collaborative
        coding challenges, constantly expanding my knowledge in{" "}
        <span className="font-medium">TypeScript</span> and modern development
        practices. Now seeking my{" "}
        <span className="font-medium">first professional opportunity</span> in
        software development, I'm eager to contribute my unique perspective from
        humanities studies combined with technical skills.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I channel my
        <span className="font-medium"> liberal arts background</span> into
        exploring new dimensions of learning. Currently diving into{" "}
        <span className="font-medium">Arabic computational linguistics</span>,
        blending my linguistic roots with programming. I'm also experimenting
        with <span className="font-medium">3D modeling</span> to create
        historical artifact reconstructions, merging my passion for history with
        tech. On weekends, you'll find me{" "}
        <span className="underline">reverse-engineering</span> classic video
        games to understand their core mechanics, or participating in{" "}
        <span className="font-medium">online tech workshops</span> with fellow
        self-taught developers. My latest self-challenge? Mastering{" "}
        <span className="font-medium">Ethical Hacking fundamentals</span> while
        maintaining a 100-day coding streak.
      </p>
    </motion.section>
  );
}
