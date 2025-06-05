"use client";

import Image from "next/image";
import { useMessages } from "@/app/frame/LanguageProvider";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGit } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiAngular,
} from "react-icons/si";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import Typewriter from "typewriter-effect";

export default function Home() {
  const t = useMessages();
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-600 w-8 h-8 mx-auto mb-2" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-600 w-8 h-8 mx-auto mb-2" />,
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-400 w-8 h-8 mx-auto mb-2" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-700 w-8 h-8 mx-auto mb-2" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-500 w-8 h-8 mx-auto mb-2" />,
    },
    {
      name: "Next.js",
      icon: (
        <SiNextdotjs className="text-gray-900 dark:text-white w-8 h-8 mx-auto mb-2" />
      ),
    },
    {
      name: "Angular",
      icon: <SiAngular className="text-red-600 w-8 h-8 mx-auto mb-2" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-400 w-8 h-8 mx-auto mb-2" />,
    },
    {
      name: "Git",
      icon: <FaGit className="text-red-600 w-8 h-8 mx-auto mb-2" />,
    },
  ];
  return (
    <main className="min-h-screen bg-white text-black dark:bg-[#0a0a0a] dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image and Basic Info */}
          <div className="flex flex-col items-center text-center md:text-left space-y-6">
            <div className="w-36 h-36 relative rounded-full overflow-hidden border border-gray-300 dark:border-gray-700">
              <Image
                src="/chappy.webp"
                alt="Your Name"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h1 className="text-3xl font-bold">chappy</h1>
            <div className="text-lg  font-semibold text-left text-gray-600 dark:text-gray-400 mb-8">
              <Typewriter
                options={{
                  strings: t.typewriterStrings,
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>

          {/* Right Column: About Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">{t.aboutTitle}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t.aboutDescription}
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
                <div className="text-2xl sm:text-4xl font-semibold text-left text-silate-900 mb-8"></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-gray-50 dark:bg-gray-900 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">{t.hiringTitle}</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            {t.hiringDescription}
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-10 pb-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://twitter.com/chappy_job              "
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
            >
              <FaXTwitter className="text-xl" /> X ( Twitter )
            </a>
            <a
              href="https://github.com/chappy-666"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <FaGithub className="text-xl" /> GitHub
            </a>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  );
}
