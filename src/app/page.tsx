"use client";

import { useEffect } from "react";
import { motion, useAnimation, Variants, easeOut } from "framer-motion";
import { Lexend_Tera, Lexend } from "next/font/google";

const lexendTera = Lexend_Tera({ subsets: ["latin"], weight: ["400", "700"] });
const lexend = Lexend({ subsets: ["latin"], weight: ["400", "500"] });

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut }
    }
  };

  return (
    <main className={`bg-[#f9f7f8] text-[#7a004b] ${lexend.className}`}>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-[#7a004b33] py-6">
        <nav className="flex justify-center gap-16 text-sm text-white">
          {["About", "Features", "Get Started"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="relative transition-all duration-300 hover:translate-y-[-2px] hover:font-bold after:block after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all after:duration-300"
            >
              {link}
            </a>
          ))}
        </nav>
      </header>

      {/* HERO */}
      <section className="relative w-full h-screen overflow-hidden pt-24">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src="/sweeten-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-10 left-0 right-0 px-8">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className={`text-white text-[12vw] md:text-[10vw] w-full text-center tracking-tight ${lexendTera.className}`}
          >
            sweeten
          </motion.h1>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-8 py-56 max-w-6xl mx-auto text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className={`text-6xl font-extrabold mb-10 w-full ${lexendTera.className}`}
        >
          About
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-2xl text-[#4a0034]"
        >
          Sweeten is a modern diabetes management app built to simplify and sweeten your journey to better health. We provide tools for daily tracking, insights, and empowering support.
        </motion.p>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-8 py-56 max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className={`text-6xl font-extrabold mb-10 w-full text-center ${lexendTera.className}`}
        >
          Features
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10 text-lg">
          {["Track", "Understand", "Thrive"].map((step) => (
            <motion.div
              key={step}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="w-full h-48 bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-gray-400">[ {step} Image ]</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{step}</h3>
              <p>Brief description of how you can {step.toLowerCase()} with Sweeten.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BUDGET */}
      <section className="bg-[#e8dbf0] px-8 py-56 max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className={`text-6xl font-extrabold mb-10 w-full text-center ${lexendTera.className}`}
        >
          THE BUDGET
        </motion.h2>
        <p className="text-2xl mb-6">We believe in transparency and value for care.</p>
        <div className="grid grid-cols-3 gap-8 text-center text-xl">
          <div>
            <p className="text-4xl font-bold">50%</p>
            <p>Education</p>
          </div>
          <div>
            <p className="text-4xl font-bold">30%</p>
            <p>Tech Development</p>
          </div>
          <div>
            <p className="text-4xl font-bold">20%</p>
            <p>Community</p>
          </div>
        </div>
      </section>

      {/* AIMS */}
      <section className="px-8 py-56 max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className={`text-6xl font-extrabold mb-10 w-full text-center ${lexendTera.className}`}
        >
          AIMS
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="w-full h-80 bg-gray-200 rounded-xl flex items-center justify-center">
            <span className="text-gray-400">[ Aims Image ]</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Better Health", "Daily Tracking", "User Empowerment", "Global Reach"].map((aim) => (
              <div
                key={aim}
                className="bg-[#e8dbf0] rounded-full p-8 flex items-center justify-center text-center font-bold text-lg"
              >
                {aim}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET STARTED */}
      <section id="get-started" className="relative w-full h-[80vh] overflow-hidden text-center">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src="/sweeten-bg.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 px-8 py-24 max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={`text-6xl font-extrabold mb-6 w-full ${lexendTera.className}`}
          >
            Get Started
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Ready to take control of your health journey? Join Sweeten today and experience a better, balanced lifestyle.
          </motion.p>
          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-4 px-10 py-4 bg-[#7a004b] text-white text-xl rounded-full hover:-translate-y-1 hover:scale-105 hover:bg-[#5c0037] transition-all duration-300"
          >
            Sign Up Now
          </motion.button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Sweeten. All rights reserved.
      </footer>
    </main>
  );
}