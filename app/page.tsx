"use client";
import Hero from "./components/hero-section/Hero";
import Works from "./components/work-section/Works";
import About from "./components/about-section/About";
import Contact from "./components/contact+footer/Contact";
import Footer from "./components/contact+footer/Footer";
import Education from "./components/education-section/Education";

export default function Home() {
  return (
    <main className="overflow-x-hidden sm:overflow-x-visible">
      <Hero />
      <Works />
      <Education />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
