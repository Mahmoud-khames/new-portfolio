import UseSectionsSelector from "../hooks/useSectionsSelector";
import SectionHeading from "./section-heading";
import Project from "./project";

import { projectsData } from "../lib/data";
import React from "react";

const Projects = () => {
  const { ref } = UseSectionsSelector("Projects", 0.3);
  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 mt-[150px]"
    >
      <SectionHeading>My projects</SectionHeading>
      <div>
      {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
