"use client";

import { useMessages } from "../frame/LanguageProvider";

export default function Portfolio() {
  const t = useMessages();
  return (
    <main className="min-h-screen bg-white text-black dark:bg-[#0a0a0a] dark:text-white transition-colors duration-300">
      <div className="relative w-full max-w-2xl mx-auto mt-10">
        {/* 中央の縦線 */}
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-300" />

        {/* タイムラインのループ */}
        <div className="relative z-10 flex flex-col space-y-20">
          {t.works.map((work, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="relative flex items-start justify-between w-full"
              >
                {/* 左側コンテンツ */}
                <div
                  className={`w-1/2 px-6 ${isLeft ? "text-right" : "invisible"}`}
                >
                  {isLeft && (
                    <>
                      <h3 className="text-lg font-bold">{work.title}</h3>
                      {work.detail && (
                        <p className="text-sm text-gray-700">{work.detail}</p>
                      )}
                      <p className="text-sm text-gray-500 mt-1">{work.date}</p>
                    </>
                  )}
                </div>

                {/* マーカー */}
                <div className="flex flex-col items-center w-0">
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white" />
                </div>

                {/* 右側コンテンツ */}
                <div
                  className={`w-1/2 px-6 ${!isLeft ? "text-left" : "invisible"}`}
                >
                  {!isLeft && (
                    <>
                      <h3 className="text-lg font-bold">{work.title}</h3>
                      {work.detail && (
                        <p className="text-sm text-gray-700">{work.detail}</p>
                      )}
                      <p className="text-sm text-gray-500 mt-1">{work.date}</p>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
