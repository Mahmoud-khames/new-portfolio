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
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

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
