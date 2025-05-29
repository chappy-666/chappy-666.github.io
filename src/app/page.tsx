import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGit } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiAngular } from "react-icons/si";



export default function Home() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600 w-8 h-8 mx-auto mb-2" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600 w-8 h-8 mx-auto mb-2" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 w-8 h-8 mx-auto mb-2" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-700 w-8 h-8 mx-auto mb-2" /> },
    { name: "React", icon: <FaReact className="text-cyan-500 w-8 h-8 mx-auto mb-2" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 dark:text-white w-8 h-8 mx-auto mb-2" /> },
    { name: "Angular", icon: <SiAngular className="text-red-600 w-8 h-8 mx-auto mb-2" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 w-8 h-8 mx-auto mb-2" /> },
    { name: "Git", icon: <FaGit className="text-red-600 w-8 h-8 mx-auto mb-2" /> },
  ];
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image and Basic Info */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-6">
            <div className="w-32 h-32 relative rounded-full overflow-hidden border border-gray-300 dark:border-gray-700">
              <Image
                src="/chappy.webp"
                alt="Your Name"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h1 className="text-3xl font-bold">chappy</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400"> Frontend Developer </p>
          </div>

          {/* Right Column: About Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300">
              I&apos;m a passionate frontend web developer from Japan, specializing in building responsive and accessible applications using React, Next.js, Angular, and TypeScript.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {skills.map(({ name, icon }) => (
              <div
                key={name}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center"
              >
                {icon}
                <span className="mt-2 font-medium">{name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Chappy. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
