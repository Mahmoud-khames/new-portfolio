import UseSectionsSelector from "../hooks/useSectionsSelector";
import SectionHeading from "./section-heading";
import Project from "./project";
import { projectsData } from "../lib/data";
import React from "react";
import { motion } from "framer-motion"; 
export default function Projects() {
  const { ref } = UseSectionsSelector("Projects", 0.2);

 
  return (
    <motion.section
      ref={ref}
       id="projects"
      className="scroll-mt-28 mb-28 mt-[150px] relative"
    >
      <SectionHeading>My projects</SectionHeading>
      <div>
      {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}


