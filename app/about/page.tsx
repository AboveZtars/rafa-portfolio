"use client";
import {useState, useEffect} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Newsreader} from "next/font/google";
import {aboutData} from "../data/about";
import {motion, AnimatePresence} from "framer-motion";
import {
  User,
  Briefcase,
  GraduationCap,
  Code,
  ChevronRight,
  Calendar,
  MapPin,
  ArrowUp,
} from "lucide-react";
import Image from "next/image";

const newsreader = Newsreader({subsets: ["latin"]});

export default function About() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const fadeIn = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.6},
    },
  };

  const staggerContainer = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-whitesand dark:bg-slate-900 transition-colors duration-1000">
      <Header />
      <main className="flex-grow flex flex-col items-center p-4 md:p-8 w-full">
        {/* Hero Section */}
        <motion.div
          className="w-full max-w-5xl mb-8 md:mb-12 px-2 sm:px-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            {/* Background Image with Parallax Effect */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              initial={{scale: 1.1}}
              animate={{scale: 1}}
              transition={{duration: 1.5}}
            >
              <Image
                src="/about/avila.jpg"
                alt="Avila mountain background"
                fill={true}
                className="object-cover object-top opacity-90 dark:opacity-70 transition-opacity duration-1000 transform hover:scale-105 transition-transform duration-5000"
                priority
              />
              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-transparent dark:from-slate-900/80 dark:via-slate-900/60 dark:to-transparent"></div>
            </motion.div>

            <div className="relative z-10 p-8 sm:p-10 md:p-14">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Profile Image Container with Animation */}
                <motion.div
                  className="w-40 h-40 md:w-52 md:h-52 relative rounded-full overflow-hidden border-4 border-white/80 dark:border-slate-700/80 shadow-lg bg-gradient-to-br from-lime-50 to-lime-100 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center"
                  initial={{scale: 0.8, opacity: 0}}
                  animate={{scale: 1, opacity: 1}}
                  transition={{duration: 0.5, delay: 0.2}}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Image
                    src="/about/profile.jpeg"
                    alt="Rafael's profile picture"
                    fill={true}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </motion.div>

                <motion.div
                  className="text-center md:text-left"
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.5, delay: 0.3}}
                >
                  <h1
                    className={`text-4xl md:text-5xl lg:text-6xl font-bold ${newsreader.className} text-gray-600 dark:text-lime-300 mb-4 tracking-tight`}
                  >
                    About Rafael
                  </h1>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-gray-700 dark:text-gray-300 mb-5 font-medium">
                    <MapPin
                      size={18}
                      className="text-lime-600 dark:text-lime-400"
                    />
                    <span>Venezuela</span>
                  </div>
                  <motion.div
                    className="bg-white/70 dark:bg-slate-800/70 p-5 rounded-xl backdrop-blur-md shadow-md border border-white/50 dark:border-slate-700/50"
                    whileHover={{
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      backgroundColor: "rgba(24, 111, 37, 0.11)",
                      borderColor: "rgba(255, 255, 255, 0)",
                    }}
                    transition={{duration: 0.3}}
                  >
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl leading-relaxed">
                      {aboutData.personalInfo.description}
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full max-w-5xl space-y-8 md:space-y-12 px-2 sm:px-4"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Professional Experience */}
          <motion.section
            className="bg-white/60 dark:bg-gray-800/60 p-8 rounded-2xl shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:bg-white/80 dark:hover:bg-gray-800/80 border border-white/50 dark:border-gray-700/50"
            variants={fadeIn}
            whileHover={{y: -5}}
            tabIndex={0}
            aria-labelledby="experience-heading"
          >
            <div className="flex items-center gap-3 mb-8 text-lime-700 dark:text-lime-300 transition-colors duration-1000">
              <div className="p-2.5 bg-lime-100 dark:bg-lime-900/50 rounded-lg">
                <Briefcase className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2
                id="experience-heading"
                className={`text-2xl md:text-3xl font-semibold ${newsreader.className}`}
              >
                Professional Experience
              </h2>
            </div>

            <div className="space-y-6">
              <motion.div
                className="relative pl-8 border-l-2 border-lime-300 dark:border-lime-700"
                initial={{opacity: 0, x: -10}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.5, delay: 0.2}}
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-lime-500 dark:bg-lime-400 shadow-md shadow-lime-200 dark:shadow-lime-900/30"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div
                    className={`text-gray-900 dark:text-white transition-colors duration-1000 ${newsreader.className}`}
                  >
                    <h3
                      className={`text-xl md:text-2xl font-medium ${newsreader.className}`}
                    >
                      {aboutData.professionalExperience.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-lime-600 dark:text-lime-400 font-medium mt-2 md:mt-0 bg-lime-50 dark:bg-lime-900/30 px-3 py-1 rounded-full">
                    <Calendar size={16} />
                    <span>{aboutData.professionalExperience.status}</span>
                  </div>
                </div>
                <ul className="space-y-4 mt-5">
                  {aboutData.professionalExperience.responsibilities.map(
                    (responsibility, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300 group"
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.3, delay: 0.1 * index}}
                        whileHover={{x: 5}}
                      >
                        <ChevronRight className="h-5 w-5 text-lime-500 dark:text-lime-400 flex-shrink-0 mt-0.5 group-hover:text-lime-600 dark:group-hover:text-lime-300 transition-colors" />
                        <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          {responsibility}
                        </span>
                      </motion.li>
                    )
                  )}
                </ul>
              </motion.div>
            </div>
          </motion.section>

          {/* Career Details */}
          <motion.section
            className="bg-white/60 dark:bg-gray-800/60 p-8 rounded-2xl shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:bg-white/80 dark:hover:bg-gray-800/80 border border-white/50 dark:border-gray-700/50"
            variants={fadeIn}
            whileHover={{y: -5}}
            tabIndex={0}
            aria-labelledby="career-heading"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Skills */}
              <div>
                <div className="flex items-center gap-3 mb-6 text-lime-700 dark:text-lime-300 transition-colors duration-1000">
                  <div className="p-2.5 bg-lime-100 dark:bg-lime-900/50 rounded-lg">
                    <Code className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3
                    id="skills-heading"
                    className={`text-2xl font-medium ${newsreader.className}`}
                  >
                    Skills
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {aboutData.skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-4 py-2 bg-lime-100/80 dark:bg-lime-900/50 text-lime-700 dark:text-lime-300 rounded-full font-medium transition-all duration-300 hover:bg-lime-200 dark:hover:bg-lime-800 hover:shadow-md"
                      initial={{opacity: 0, scale: 0.9}}
                      animate={{opacity: 1, scale: 1}}
                      transition={{duration: 0.3, delay: 0.05 * index}}
                      whileHover={{scale: 1.05, y: -2}}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-6 text-lime-700 dark:text-lime-300 transition-colors duration-1000">
                  <div className="p-2.5 bg-lime-100 dark:bg-lime-900/50 rounded-lg">
                    <GraduationCap className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3
                    id="education-heading"
                    className={`text-2xl font-medium ${newsreader.className}`}
                  >
                    Education
                  </h3>
                </div>
                <motion.div
                  className="bg-white/80 dark:bg-gray-700/80 p-6 rounded-xl border border-gray-100 dark:border-gray-600 shadow-md"
                  whileHover={{
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    y: -3,
                  }}
                  transition={{duration: 0.3}}
                >
                  <p className="text-gray-800 dark:text-gray-200 transition-colors duration-1000 text-lg font-medium">
                    {aboutData.education.degree}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-1000 mt-2">
                    {aboutData.education.additionalInfo}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Personal Information */}
          <motion.section
            className="bg-white/60 dark:bg-gray-800/60 p-8 rounded-2xl shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:bg-white/80 dark:hover:bg-gray-800/80 border border-white/50 dark:border-gray-700/50"
            variants={fadeIn}
            whileHover={{y: -5}}
            tabIndex={0}
            aria-labelledby="personal-heading"
          >
            <div className="flex items-center gap-3 mb-6 text-lime-700 dark:text-lime-300 transition-colors duration-1000">
              <div className="p-2.5 bg-lime-100 dark:bg-lime-900/50 rounded-lg">
                <User className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2
                id="personal-heading"
                className={`text-2xl md:text-3xl font-semibold ${newsreader.className}`}
              >
                Personal Interests
              </h2>
            </div>
            <motion.p
              className="text-gray-700 dark:text-gray-300 transition-colors duration-1000 leading-relaxed text-lg"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.5}}
            >
              I'm particularly interested in AI 🤖, backend development of
              applications and obsessing over finding innovative solutions. In
              my free time, I enjoy playing video games 🎮 and traveling to
              explore new places 🌍.
            </motion.p>
          </motion.section>
        </motion.div>

        {/* Scroll to top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              className="fixed bottom-6 right-6 p-3 bg-lime-500 dark:bg-lime-600 text-white rounded-full shadow-lg z-50 hover:bg-lime-600 dark:hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              onClick={handleScrollToTop}
              initial={{opacity: 0, scale: 0.5}}
              animate={{opacity: 1, scale: 1}}
              exit={{opacity: 0, scale: 0.5}}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
              }}
              transition={{duration: 0.2}}
              aria-label="Scroll to top"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleScrollToTop();
                }
              }}
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
