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
import Typewriter from "typewriter-effect";

export default function Home() {
  const t = useMessages();
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="mx-auto mb-2 w-8 h-8 text-orange-600" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="mx-auto mb-2 w-8 h-8 text-blue-600" />,
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="mx-auto mb-2 w-8 h-8 text-yellow-400" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="mx-auto mb-2 w-8 h-8 text-blue-700" />,
    },
    {
      name: "React",
      icon: <FaReact className="mx-auto mb-2 w-8 h-8 text-cyan-500" />,
    },
    {
      name: "Next.js",
      icon: (
        <SiNextdotjs className="mx-auto mb-2 w-8 h-8 text-gray-900 dark:text-white" />
      ),
    },
    {
      name: "Angular",
      icon: <SiAngular className="mx-auto mb-2 w-8 h-8 text-red-600" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="mx-auto mb-2 w-8 h-8 text-teal-400" />,
    },
    {
      name: "Git",
      icon: <FaGit className="mx-auto mb-2 w-8 h-8 text-red-600" />,
    },
  ];
  return (
    <main className="min-h-screen transition-colors duration-300">
      <div className="mx-auto px-4 py-12 max-w-6xl">
        <div className="items-center gap-12 grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Image and Basic Info */}
          <div className="flex flex-col items-center space-y-6 md:text-left text-center">
            <div className="relative border border-gray-300 rounded-full w-36 h-36 overflow-hidden">
              <Image
                src="/chappy.webp"
                alt="Your Name"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="font-bold text-3xl">chappy</h1>
            <div className="mb-8 font-semibold text-lg text-left">
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
            <h2 className="font-semibold text-2xl">{t.aboutTitle}</h2>
            <p className="">{t.aboutDescription}</p>
          </div>
        </div>

        {/* Skills Section */}
        <section className="mt-16">
          <h2 className="mb-6 font-semibold text-2xl text-center">Skills</h2>
          <div className="gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 text-center">
            {skills.map(({ name, icon }) => (
              <div
                key={name}
                className="flex flex-col justify-center items-center bg-[var(--color-card-bg)] shadow-md p-4 rounded-lg text-[var(--color-card-text)]"
              >
                {icon}
                <span className="mt-2 font-medium">{name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[var(--color-card-bg)] mt-16 p-8 rounded-lg text-center">
          <h2 className="mb-4 font-semibold text-2xl">{t.hiringTitle}</h2>
          <p className="mx-auto max-w-xl text-[var(--color-card-text)]">
            {t.hiringDescription}
          </p>
        </section>
      </div>
    </main>
  );
}
