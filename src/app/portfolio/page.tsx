"use client";

import { useMessages } from "../frame/LanguageProvider";

export default function Portfolio() {
  const t = useMessages();
  return (
    <main className="min-h-screen bg-white text-black dark:bg-[#0a0a0a] dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-extrabold mb-6">Portfolio Timeline</h1>
        <div className="relative border-l-2 border-gray-300 ml-4 pl-6">
          <div className="mb-8 relative">
            <div className="absolute -left-5 top-0 w-5 h-5 bg-blue-600 rounded-full border-2 border-white"></div>
            {t.works.map((work, idx) => (
              <div className="mb-2" key={idx}>
                <div className="text-sm font-semibold">{work.date}</div>
                <h3 className="text-xl font-bold">{work.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
