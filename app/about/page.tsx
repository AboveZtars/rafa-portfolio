"use client";
export default function About() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-12 text-lime-700">About Rafael</h1>

      <div className="w-full max-w-4xl space-y-12">
        {/* Personal Information */}
        <section className="bg-white/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-lime-600">
            Personal Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            I&apos;m a passionate software engineer based in Venezuela,
            dedicated to creating innovative solutions that make a difference.
            When I&apos;m not coding, you can find me exploring new
            technologies.
          </p>
        </section>

        {/* Professional Information */}
        <section className="bg-white/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-lime-600">
            Professional Experience
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium">Senior Software Engineer</h3>
              <p className="text-gray-600">Current Position</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Leading development of scalable web applications</li>
                <li>Architecting cloud-native solutions</li>
                <li>Mentoring junior developers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Details */}
        <section className="bg-white/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-lime-600">
            Career Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full">
                  AWS
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Education</h3>
              <p className="text-gray-700">
                Bachelor&apos;s Degree in Computer Science
                <br />
                Relevant certifications in cloud computing and web development
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
