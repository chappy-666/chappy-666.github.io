"use client";

import { useEffect, useRef, useState } from "react";
import { useMessages } from "../frame/LanguageProvider";

export default function Portfolio() {
  const t = useMessages();
  const itemRefs = useRef<HTMLDivElement[]>([]);
  // 各タイムラインアイテムへの参照配列 - 個別アイテムの位置情報取得用

  const [markerTop, setMarkerTop] = useState(0);

  // タイムラインコンテナ全体への参照 - スクロール位置計算の基準点として使用
  const containerRef = useRef<HTMLDivElement>(null);

  // 初期表示は一番上の要素に玉をセット
  useEffect(() => {
    if (!containerRef.current || !itemRefs.current[0]) return;

    const containerTop =
      containerRef.current.getBoundingClientRect().top + window.scrollY;
    const firstItemTop =
      itemRefs.current[0].getBoundingClientRect().top + window.scrollY;

    setMarkerTop(firstItemTop - containerTop);
  }, []);

  // スクロールやリサイズ時に玉を動かす
  useEffect(() => {
    const updateMarkerPosition = () => {
      if (!containerRef.current) return;

      const containerTop =
        containerRef.current.getBoundingClientRect().top + window.scrollY;
      const centerY = window.scrollY + window.innerHeight / 2;

      const positions = itemRefs.current.map((ref) =>
        ref ? ref.getBoundingClientRect().top + window.scrollY : 0
      );

      let closestIndex = 0;
      let minDistance = Infinity;

      positions.forEach((pos, idx) => {
        const distance = Math.abs(centerY - pos);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      });

      const closestTop = positions[closestIndex] - containerTop + 10;
      setMarkerTop(closestTop);
    };

    window.addEventListener("scroll", updateMarkerPosition);
    window.addEventListener("resize", updateMarkerPosition);

    return () => {
      window.removeEventListener("scroll", updateMarkerPosition);
      window.removeEventListener("resize", updateMarkerPosition);
    };
  }, []);

  return (
    <div>
      {/* 上部ヘッダー */}
      <section className="flex justify-center items-center px-4 py-16 w-full h-[250px] text-center">
        <div>
          <h2 className="font-extrabold text-4xl">
            Let&apos;s Build Something Great
          </h2>
          <p className="mx-auto mt-4 text-lg sm:text-xl">
            Every project is a step forward. Here&apos;s where I&apos;ve been so
            far.
          </p>
        </div>
      </section>
      <div
        ref={containerRef}
        className="relative mx-auto mt-20 px-4 max-w-4xl min-h-48"
      >
        {/* 縦線の親コンテナ（中央揃え＆幅固定） */}
        <div className="top-0 left-1/2 absolute w-2 h-full -translate-x-1/2">
          {/* グレーのベースライン */}
          <div
            className="bg-yellow-400 drop-shadow-md w-2 h-full"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          />
          {/* 青の進捗バー：玉の位置に合わせて高さを動的制御 */}
          <div
            className="top-0 left-0 absolute bg-yellow-300 drop-shadow-md w-2 transition-[height] duration-300"
            style={{ height: `${markerTop + 10}px` }} // +10 は玉の半径に合わせて調整
          />
        </div>

        {/* 黄色い玉 */}
        <div
          className="left-1/2 z-10 absolute bg-yellow-300 border-4 border-white border-white rounded-full w-6 h-6 transition-all duration-300"
          style={{
            top: `calc(${markerTop}px + 5px)`,
            transform: "translateX(-50%)",
          }}
        />

        {/* タイムライン */}
        <div className="z-10 relative flex flex-col space-y-20">
          {t.works.map((work, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                ref={(el) => {
                  if (el) itemRefs.current[idx] = el;
                }}
                className={`relative flex w-full items-center justify-between ${
                  isLeft ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* カード */}
                <div className="bg-[var(--color-card-bg)] shadow-md p-6 rounded-lg w-5/12 text-[var(--color-card-text)]">
                  <h3 className="font-semibold text-lg">{work.title}</h3>
                  <p className="mt-2">{work.detail}</p>
                  <p className="mt-2 text-sm">{work.date}</p>
                </div>

                {/* 中央線とのスペース調整用 */}
                <div className="w-1/12" />

                {/* 空白側は空ける */}
                <div className="w-5/12" />
              </div>
            );
          })}
        </div>
      </div>
      <section className="flex flex-col justify-center items-center px-4 py-16 min-h-[250px] text-center">
        <p className="font-semibold text-xl sm:text-2xl 0">
          Ready for the next project!
        </p>
        <p className="mt-2">Let’s create something wonderful together!</p>
      </section>
    </div>
  );
}
