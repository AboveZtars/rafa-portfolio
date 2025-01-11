"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Newsreader} from "next/font/google";
import {aboutData} from "../data/about";

const newsreader = Newsreader({subsets: ["latin"]});

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-whitesand dark:bg-slate-900 transition-colors duration-1000">
      <Header showAnimation={true} />
      <main className="flex-grow flex flex-col items-center p-8">
        <div
          className={`mb-6 text-lime-700 dark:text-lime-300 transition-colors duration-1000`}
        >
          <h1 className={`text-5xl font-bold ${newsreader.className}`}>
            About Rafael
          </h1>
        </div>

        <div className="w-full max-w-4xl space-y-12">
          <section className="bg-white/50 dark:bg-gray-800 duration-1000 p-8 rounded-lg shadow-lg backdrop-blur-sm transition-all hover:shadow-xl">
            <div
              className={`mb-6 text-lime-700 dark:text-lime-300 transition-colors duration-1000`}
            >
              <h2 className={`text-3xl font-semibold ${newsreader.className}`}>
                Personal Information
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 transition-colors duration-1000 leading-relaxed text-lg">
              {aboutData.personalInfo.description}
            </p>
          </section>

          <section className="bg-white/50 dark:bg-gray-800 duration-1000 p-8 rounded-lg shadow-lg backdrop-blur-sm transition-all hover:shadow-xl">
            <div
              className={`mb-6 text-lime-700 dark:text-lime-300 transition-colors duration-1000`}
            >
              <h2 className={`text-3xl font-semibold ${newsreader.className}`}>
                Professional Experience
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <div
                  className={`text-black dark:text-white transition-colors duration-1000 ${newsreader.className}`}
                >
                  <h3
                    className={`text-2xl font-medium ${newsreader.className}`}
                  >
                    {aboutData.professionalExperience.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2 transition-colors duration-1000">
                  {aboutData.professionalExperience.status}
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-700 dark:text-gray-300 space-y-2 transition-colors duration-1000">
                  {aboutData.professionalExperience.responsibilities.map(
                    (responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </section>

          {/* Career Details */}
          <section className="bg-white/50 dark:bg-gray-800 duration-1000 p-8 rounded-lg shadow-lg backdrop-blur-sm transition-all hover:shadow-xl">
            <div
              className={`mb-6 text-lime-700 dark:text-lime-300 transition-colors duration-1000`}
            >
              <h2 className={`text-3xl font-semibold ${newsreader.className}`}>
                Career Highlights
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div
                  className={`text-black dark:text-white transition-colors duration-1000`}
                >
                  <h3
                    className={`text-2xl font-medium mb-4 ${newsreader.className}`}
                  >
                    Skills
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {aboutData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-lime-100 dark:bg-lime-900 text-lime-700 dark:text-lime-300 rounded-full font-medium transition-colors hover:bg-lime-200"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div
                  className={`mb-4 text-black dark:text-white transition-colors duration-1000`}
                >
                  <h3
                    className={`text-2xl font-medium ${newsreader.className}`}
                  >
                    Education
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-1000 text-lg">
                  {aboutData.education.degree}
                  <br />
                  {aboutData.education.additionalInfo}
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
