import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "./Image";
import { motion } from "framer-motion";
import { TfiDownload } from "react-icons/tfi";

import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import UseSectionsSelector from "../hooks/useSectionsSelector";

const Home = () => {
  const { ref } = UseSectionsSelector("Home", 0.5);
  return (
    <section
      ref={ref}
      id="home"
      className=" flex flex-col gap-4 items-center justify-center mt-[130px] mx-auto mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] relative overflow-visible"
    >
      <div className=" bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

      {/* img */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex relative"
      >
        <Image
          src={"/myPhoto.jpeg"}
          alt="myPhoto"
          w={"182"}
          h={"182"}
          className=" h-[182px] w-[182px] rounded-full object-cover border-[0.35rem] border-white shadow-xl"
        />
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
          className="absolute bottom-0 right-0 text-4xl "
        >
          👋
        </motion.span>
      </motion.div>
      {/* title */}
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-center"
      >
        <span className="font-bold">Hello, I'm Mahmoud.</span>
        <span className="font-bold"> full-stack developer </span>
        with
        <span className="font-bold"> 2 years </span>
        of experience. I enjoy building
        <span className="italic"> sites</span>
        <span className="underline"> React & NodeJs </span>.
      </motion.h1>
      {/* buttons */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.1,
        }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <a
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center justify-center rounded-full gap-2 hover:scale-110 hover:bg-gray-950 active:scale-105 transition "
        >
          Contact me here
          <span className="opacity-70 group-hover:translate-x-1 transition  text-2xl my-auto">
            <IoIosArrowRoundForward className="opacity-70 group-hover:translate-x-1 transition" />
          </span>
        </a>
        <a
          download={true}
          href="/CV.pdf"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 "
        >
          Download CV
          <span className="opacity-70 group-hover:translate-y-1 transition  text-xl my-auto ">
            <TfiDownload />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/mahmoud-khames/"
          target="_blank"
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Mahmoud-khames"
          target="_blank"
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaSquareGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
