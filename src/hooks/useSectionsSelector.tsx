import { useEffect } from "react";
import { useActiveSectionContext } from "../context/active-sections";
import { links } from "../lib/data";
import { useInView } from "react-intersection-observer";


export type SectionName = (typeof links)[number]["title"];
const UseSectionsSelector = (sectionName: SectionName, threshold = 0.3) => {
  const { ref, inView } = useInView({
    threshold,
  });
 
  

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    console.log(`Section: ${sectionName}, inView: ${inView}`);
    
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setTimeout(() => {
        console.log(`Setting active section to: ${sectionName}`);
        setActiveSection(sectionName);
      }, 100);
    }
  }, [inView, setActiveSection, sectionName, timeOfLastClick]);
  
  return {
    ref,
  };
};

export default UseSectionsSelector;
