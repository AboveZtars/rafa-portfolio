"use client";
import Image from "next/image";
import Link from "next/link";
import {useState, useEffect} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Newsreader} from "next/font/google";
import {ChevronRight} from "lucide-react";

const newsreader = Newsreader({subsets: ["latin"]});

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "WinkGPT",
    description:
      "A Chatbot to order any kind of products from any store, made in Whatsapp.",
    image: "/projects/winkgpt2.png",
    technologies: [
      "BunJS",
      "Whatsapp",
      "Postgres",
      "Redis",
      "Langchain",
      "OpenAI",
      "DigitalOcean",
    ],
    link: "https://www.instagram.com/wink.vzla/",
  },
  {
    title: "Yuri AI",
    description:
      "A simple chatbot to help you request a ride from Yummy Rides in Venezuela and ask questions about yummy rides. Build specifically to be used in Whatsapp.",
    image: "/projects/yummyyuri.png",
    technologies: ["NodeJS", "MomentoCache", "Whatsapp", "StackAi", "OpenAI"],
    link: "https://api.whatsapp.com/send?phone=584241905742",
  },
];

export default function ProjectsPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Animation on load
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-whitesand dark:bg-slate-900 transition-colors duration-1000">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16">
        {/* Hero Section */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1
            className={`text-5xl md:text-6xl font-bold ${newsreader.className} text-lime-700 dark:text-lime-300 mb-4 transition-colors duration-1000`}
          >
            Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg mb-8 transition-colors duration-1000">
            Explore my portfolio of projects showcasing my skills in web
            development, AI integration, and user experience design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl flex flex-col h-full transform ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{transitionDelay: `${index * 150}ms`}}
            >
              <div className="relative h-56 w-full overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <h3
                    className={`text-2xl text-white font-medium ${newsreader.className}`}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow dark:text-gray-200 transition-colors duration-1000">
                <h3
                  className={`text-2xl text-lime-700 dark:text-lime-300 font-medium mb-3 ${newsreader.className}`}
                >
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex-grow"></div>

                <div className="flex flex-wrap gap-2 mb-4 items-center">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center justify-center px-4 py-1 h-7 bg-lime-50 text-lime-700 border border-lime-200 rounded-full text-sm dark:bg-slate-700 dark:text-lime-200 dark:border-slate-600 whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <div>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-lime-700 hover:bg-lime-800 dark:bg-lime-600 dark:hover:bg-lime-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                      aria-label={`View ${project.title} project`}
                      tabIndex={0}
                    >
                      <span>View Project</span>
                      <ChevronRight size={18} />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
