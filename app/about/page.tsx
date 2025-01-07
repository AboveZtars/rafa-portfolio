"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Newsreader} from "next/font/google";

const newsreader = Newsreader({subsets: ["latin"]});

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header showAnimation={true} />
      <main className="flex-grow flex flex-col items-center p-8">
        <h1
          className={`text-5xl font-bold mb-12 text-lime-700 ${newsreader.className}`}
        >
          About Rafael
        </h1>

        <div className="w-full max-w-4xl space-y-12">
          {/* Personal Information */}
          <section className="bg-white/50 p-8 rounded-lg shadow-lg backdrop-blur-sm transition-all hover:shadow-xl">
            <h2
              className={`text-3xl font-semibold mb-6 text-lime-700 ${newsreader.className}`}
            >
              Personal Information
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              I&apos;m a passionate software engineer based in Venezuela,
              dedicated to creating innovative solutions that make a difference.
              When I&apos;m not coding, you can find me exploring new
              technologies.
            </p>
          </section>

          {/* Professional Information */}
          <section className="bg-white/50 p-8 rounded-lg shadow-lg backdrop-blur-sm transition-all hover:shadow-xl">
            <h2
              className={`text-3xl font-semibold mb-6 text-lime-700 ${newsreader.className}`}
            >
              Professional Experience
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className={`text-2xl font-medium ${newsreader.className}`}>
                  Senior Software Engineer
                </h3>
                <p className="text-gray-600 mt-2">Current Position</p>
                <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                  <li>Leading development of scalable web applications</li>
                  <li>Architecting cloud-native solutions</li>
                  <li>Mentoring junior developers</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Career Details */}
          <section className="bg-white/50 p-8 rounded-lg shadow-lg backdrop-blur-sm transition-all hover:shadow-xl">
            <h2
              className={`text-3xl font-semibold mb-6 text-lime-700 ${newsreader.className}`}
            >
              Career Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3
                  className={`text-2xl font-medium mb-4 ${newsreader.className}`}
                >
                  Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-lime-100 text-lime-700 rounded-full font-medium transition-colors hover:bg-lime-200">
                    React
                  </span>
                  <span className="px-4 py-2 bg-lime-100 text-lime-700 rounded-full font-medium transition-colors hover:bg-lime-200">
                    TypeScript
                  </span>
                  <span className="px-4 py-2 bg-lime-100 text-lime-700 rounded-full font-medium transition-colors hover:bg-lime-200">
                    Node.js
                  </span>
                  <span className="px-4 py-2 bg-lime-100 text-lime-700 rounded-full font-medium transition-colors hover:bg-lime-200">
                    AWS
                  </span>
                </div>
              </div>
              <div>
                <h3
                  className={`text-2xl font-medium mb-4 ${newsreader.className}`}
                >
                  Education
                </h3>
                <p className="text-gray-700 text-lg">
                  Bachelor&apos;s Degree in Computer Science
                  <br />
                  Relevant certifications in cloud computing and web development
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
