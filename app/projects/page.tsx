"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Newsreader} from "next/font/google";

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
    image: "/projects/ecommerce.jpg",
    technologies: [
      "BunJS",
      "Whatsapp",
      "Postgres",
      "Redis",
      "Langchain",
      "OpenAI",
      "DigitalOcean",
    ],
    link: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Yuri AI",
    description:
      "A simple chatbot to help you request a ride from Yummy Rides in Venezuela and ask questions about yummy rides. Build specifically to be used in Whatsapp.",
    image: "/projects/chat.jpg",
    technologies: ["NodeJS", "MomentoCache", "Whatsapp", "StackAi", "OpenAI"],
    link: "https://github.com/yourusername/ai-chat",
  },
  {
    title: "Task Management System",
    description:
      "A collaborative task management system with real-time updates, team collaboration features, and analytics dashboard.",
    image: "/projects/tasks.jpg",
    technologies: ["React", "Firebase", "TypeScript", "Material-UI"],
    link: "https://github.com/yourusername/task-manager",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header showAnimation={true} />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1
          className={`text-5xl text-lime-700 text-center mb-16 ${newsreader.className}`}
        >
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3
                  className={`text-2xl text-lime-700 font-medium mb-3 ${newsreader.className}`}
                >
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-lime-50 text-lime-700 rounded-full text-sm border border-lime-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-lime-700 hover:bg-lime-800 text-white px-4 py-2 rounded-md transition-colors duration-300"
                  >
                    View Project
                  </Link>
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
