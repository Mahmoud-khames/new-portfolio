import { links } from "../lib/data";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useActiveSectionContext } from "../context/active-sections";

const Navbar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling Down
        setShowNavbar(false);
      } else {
        // Scrolling Up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: showNavbar ? 0 : -100, opacity: showNavbar ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-1/2 -translate-x-1/2 h-[72px] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[8px] sm:top-6 sm:h-[52px] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 z-50"
    >
      <motion.nav
        className="flex flex-wrap fixed top-[2.4px] left-1/2 h-12 -translate-x-1/2 py-2  sm:py-0"
      >
        <ul className="flex w-[22rem] flex-wrap h-9 sm:h-auto items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 ">
          {links.map((link) => (
            <li
              className="h-3/4 flex items-center justify-center relative transition"
              key={link.hash}
            >
              <a
                className={clsx(
                  "flex w-full items-center justify-center dark:text-gray-500 dark:hover:text-gray-300 px-3 py-3 hover:text-gray-950 transition"
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.title);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.title}

                {link.title === activeSection && (
                  <motion.span
                    className={`bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800 ${link.title === activeSection ? "!text-red-500" : "text-gray-500"}`}
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;
