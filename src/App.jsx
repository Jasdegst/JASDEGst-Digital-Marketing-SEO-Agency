import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ProjectShowcase from "./components/ProjectShowcase";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div
      className="
      bg-white
      dark:bg-slate-950
      text-slate-900
      dark:text-white
      transition-colors
      duration-500
      "
    >
      <Navbar />
      <Hero />
      <Services />
      <ProjectShowcase />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;