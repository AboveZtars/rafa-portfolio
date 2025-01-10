interface Skill {
  name: string;
}

interface Experience {
  title: string;
  status: string;
  responsibilities: string[];
}

interface Education {
  degree: string;
  additionalInfo: string;
}

interface AboutData {
  personalInfo: {
    description: string;
  };
  professionalExperience: Experience;
  skills: Skill[];
  education: Education;
}

export const aboutData: AboutData = {
  personalInfo: {
    description:
      "I'm a passionate software engineer based in Venezuela, dedicated to creating innovative solutions that make a difference. When I'm not coding, you can find me exploring new technologies.",
  },
  professionalExperience: {
    title: "Senior Software Engineer @ Yummy",
    status: "Current Position",
    responsibilities: [
      "Leading development of scalable chatbots integrated with AI models and real world applications",
      "Optimizing the performance of the chatbot by implementing caching strategies and optimizing database queries",
      "Developing and maintaining RESTful APIs for seamless integration with external systems",
      "Collaborating with cross-functional teams to define, design, and ship new features",
      "Architecting and implementing highly scalable and fault-tolerant systems",
    ],
  },
  skills: [
    {name: "TypeScript"},
    {name: "Python"},
    {name: "Node.js"},
    {name: "AWS"},
    {name: "DigitalOcean"},
    {name: "React"},
    {name: "Docker"},
    {name: "Kubernetes"},
    {name: "Git"},
    {name: "PostgreSQL"},
    {name: "MongoDB"},
    {name: "Redis"},
    {name: "LLM"},
    {name: "Chatbot"},
    {name: "AI"},
    {name: "OpenAI"},
    {name: "RAG"},
    {name: "Langchain"},
  ],
  education: {
    degree: "3 Years of Electrical Engineering Studies",
    additionalInfo:
      "Relevant certifications in cloud computing and web development",
  },
};

export const chatCTA = `Hi there! 👋 Rafael is a Senior Software Engineer specializing in AI and chatbot development. With experience in both cloud infrastructure and full-stack development.\nI'd be happy to discuss:\n\n
• AI projects and LLM implementations where Rafael worked\n
• Information about the projects Rafael worked on\n
• Information about the technologies Rafael worked with\n
• Personal information about Rafael\n
• How this chatbot was built\n
What would you like to know about Rafael?`;
