
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../sections/Hero/Hero";
import Stats from "../sections/Stats/Stats";
import Features from "../sections/Features/Features";
import About from "../sections/About/About";
import Download from "../sections/Download/Download";

function Home() {
  return (
    <div className="min-h-screen bg-[#070b14] text-white selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Features />
        <About />
        <Download />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
