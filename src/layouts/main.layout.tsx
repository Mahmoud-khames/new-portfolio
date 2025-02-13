import Navbar from "../components/Navbar";
import About from "../components/About";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import SectionDivider from "../components/section-divider";
import ActiveSectionContextProvider from "../context/active-sections";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import ThemeSwitch from "../components/theme-switch";
import ThemecontextProvider from "../context/theme-context";

const MainLayout = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col items-center px-4">
 
      <ThemecontextProvider>
        <ActiveSectionContextProvider>
          <Navbar />
          <Home />
          <SectionDivider />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
          <ThemeSwitch />
        </ActiveSectionContextProvider>
      </ThemecontextProvider>
    </div>
  );
};

export default MainLayout;
