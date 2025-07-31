// app/services/page.tsx
import { Language } from "@/app/frame/LanguageProvider";
import {
  Code2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const translations = {
  "en-US": {
    title: "Services",
    heroText:
      "Pixel-perfect migration and simple maintenance using Next.js × Tailwind CSS × Shadcn UI.",
    servicesTitle: "Our Services",
    freePage: {
      title: "1 Page Free Migration",
      desc: "We offer free coding for one page based on your Figma or existing site.",
      points: [
        "Next.js + Tailwind CSS + Shadcn UI stack",
        "±2px design accuracy",
        "Responsive and accessibility included",
      ],
      note: "Please consider additional pages only if satisfied.",
      price: "Additional pages: from $ 70 / page",
    },
    maintenance: {
      title: "Light Maintenance Plan (Optional)",
      desc: "A lightweight maintenance plan offered only to those who want it post-delivery.",
      points: [
        "Up to one minor fix per month",
        "Library update support",
        "Security checks and simple backups",
      ],
      price: "$ 35 / month (optional)",
    },
    flowTitle: "How to Order",
    flowSteps: [
      "Contact us (consultation welcome)",
      "Hearing and requirements confirmation",
      "Free coding for 1 page",
      "Review and decide on continuation",
      "Proposal for additional implementation and maintenance (if needed)",
    ],
    ctaTitle: "Try 1 Page Free First",
    ctaDesc: "Feel free to contact us via X DM.",
    contactHref: "/contact",
    contactText: "Go to Contact Form",
  },

  ja: {
    title: "サービス紹介",
    heroText:
      "Next.js × Tailwind CSS × Shadcn UI によるピクセルパーフェクトな移行と軽量・シンプルな保守を提供します。",
    servicesTitle: "提供サービス",
    freePage: {
      title: "1ページ無料移行",
      desc: "Figmaや既存サイトの内容をもとに、1ページ分の無料コーディングを提供しています。",
      points: [
        "Next.js + Tailwind CSS + Shadcn UI 構成",
        "±2pxの高精度なデザイン再現",
        "レスポンシブ / アクセシビリティ対応込み",
      ],
      note: "ご満足いただけた場合のみ、2ページ目以降をご検討ください。",
      price: "追加ページ：¥8,000〜 / ページ",
    },
    maintenance: {
      title: "ライト保守プラン（オプション）",
      desc: "実装後、ご希望の方にのみ提供している軽量なサイト保守プランです。",
      points: [
        "月1回までの軽微な修正対応",
        "Next.js / Tailwind / Shadcn UI のアップデート対応",
        "セキュリティチェック・簡易バックアップ",
      ],
      price: "¥5,000 / 月（契約は任意）",
    },
    flowTitle: "ご依頼の流れ",
    flowSteps: [
      "お問い合わせ（ご相談のみでもOKです）",
      "ヒアリング・要件確認",
      "1ページ無料コーディング",
      "ご確認・継続のご判断",
      "追加実装・保守のご提案（必要に応じて）",
    ],
    ctaTitle: "まずは1ページ無料でお試しください",
    ctaDesc: "お問い合わせはXのDMからお気軽にどうぞ。",
    contactHref: "/contact",
    contactText: "お問い合わせフォームへ",
  },
};

export default async function ServicesPage({
  params,
}: {
  params: Promise<{
    lang: Language;
  }>;
}) {
  const { lang } = await params;
  const t = translations[lang];
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Background Pattern */}

      <div className="relative mx-auto px-4 py-20 max-w-6xl">
        {/* Hero Section */}
        <section className="mb-24 text-center">
          <div className="slide-in-from-top animate-in duration-700">
            <div className="inline-flex items-center gap-2 mb-6">
              <Sparkles
                className="w-6 h-6"
                style={{ color: "var(--color-aquamarine-500)" }}
              />
              <span className="bg-clip-text bg-gradient-to-r from-[var(--color-aquamarine-600)] dark:from-[var(--color-text)] to-[var(--color-aquamarine-700)] dark:to-[var(--color-text)] font-medium text-transparent text-sm uppercase tracking-wide">
                Premium Development
              </span>
            </div>
            <h1
              className="mb-6 font-bold text-5xl lg:text-6xl leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              {t.title}
            </h1>
            <p
              className="opacity-80 mx-auto max-w-3xl text-xl leading-relaxed"
              style={{ color: "var(--color-text)" }}
            >
              {t.heroText}
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-24">
          <div className="slide-in-from-bottom mb-12 text-center animate-in duration-700 delay-200">
            <h2
              className="mb-4 font-semibold text-3xl"
              style={{ color: "var(--color-text)" }}
            >
              {t.servicesTitle}
            </h2>
            <div className="bg-gradient-to-r from-[var(--color-aquamarine-500)] dark:from-[var(--color-text)] to-[var(--color-aquamarine-600)] dark:to-[var(--color-text)] mx-auto rounded-full w-24 h-1"></div>
          </div>

          <div className="gap-8 grid lg:grid-cols-2 mx-auto max-w-5xl">
            {/* Free Page Migration */}
            <div className="group slide-in-from-left animate-in duration-700 delay-300">
              <div
                className="relative shadow-xl hover:shadow-2xl p-8 rounded-2xl transition-all hover:-translate-y-2 duration-300"
                style={{
                  backgroundColor: "var(--color-card-bg)",
                  color: "var(--color-card-text)",
                }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-aquamarine-500)] dark:from-[var(--color-text)] to-[var(--color-aquamarine-600)] dark:to-[var(--color-text)] opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>

                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-[var(--color-aquamarine-500)] dark:from-[var(--color-text)] to-[var(--color-aquamarine-600)] dark:to-pink-400 shadow-lg p-3 rounded-xl text-white">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <h3
                      className="font-bold text-2xl"
                      style={{ color: "var(--color-card-text)" }}
                    >
                      {t.freePage.title}
                    </h3>
                  </div>

                  <p
                    className="opacity-90 mb-6 leading-relaxed"
                    style={{ color: "var(--color-card-text)" }}
                  >
                    {t.freePage.desc}
                  </p>

                  <div className="space-y-3 mb-6">
                    {t.freePage.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle
                          className="flex-shrink-0 mt-0.5 w-5 h-5"
                          style={{ color: "var(--color-aquamarine-600)" }}
                        />
                        <span style={{ color: "var(--color-card-text)" }}>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="mb-4 p-4 rounded-xl"
                    style={{ backgroundColor: "var(--color-aquamarine-100)" }}
                  >
                    <p
                      className="text-sm"
                      style={{ color: "var(--color-aquamarine-900)" }}
                    >
                      {t.freePage.note}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="bg-clip-text bg-gradient-to-r from-[var(--color-aquamarine-600)] dark:from-[var(--color-text)] to-[var(--color-aquamarine-700)] dark:to-pink-400 font-bold text-transparent text-lg">
                      {t.freePage.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Maintenance Plan */}
            <div className="group slide-in-from-right animate-in duration-700 delay-400">
              <div
                className="relative shadow-lg hover:shadow-xl p-8 rounded-2xl transition-all hover:-translate-y-1 duration-300"
                style={{
                  backgroundColor: "var(--color-card-bg)",
                  color: "var(--color-card-text)",
                  opacity: "0.8",
                }}
              >
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-[var(--color-aquamarine-700)] dark:from-pink-500 to-[var(--color-aquamarine-800)] dark:to-pink-600 shadow-lg p-3 rounded-xl text-white">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3
                      className="font-bold text-xl"
                      style={{ color: "var(--color-card-text)" }}
                    >
                      {t.maintenance.title}
                    </h3>
                  </div>

                  <p
                    className="opacity-90 mb-6 leading-relaxed"
                    style={{ color: "var(--color-card-text)" }}
                  >
                    {t.maintenance.desc}
                  </p>

                  <div className="space-y-3 mb-6">
                    {t.maintenance.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle
                          className="flex-shrink-0 mt-0.5 w-5 h-5"
                          style={{ color: "var(--color-aquamarine-600)" }}
                        />
                        <span
                          className="text-sm"
                          style={{ color: "var(--color-card-text)" }}
                        >
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="text-right">
                    <p className="bg-clip-text bg-gradient-to-r from-[var(--color-aquamarine-700)] dark:from-pink-400 to-[var(--color-aquamarine-800)] dark:to-pink-500 font-bold text-transparent text-lg">
                      {t.maintenance.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flow Section */}
        <section className="mb-24">
          <div className="slide-in-from-bottom mb-12 text-center animate-in duration-700 delay-500">
            <h2
              className="mb-4 font-semibold text-3xl"
              style={{ color: "var(--color-text)" }}
            >
              {t.flowTitle}
            </h2>
            <div className="bg-gradient-to-r from-[var(--color-aquamarine-700)] dark:from-pink-400 to-[var(--color-aquamarine-800)] dark:to-pink-500 mx-auto rounded-full w-24 h-1"></div>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="space-y-6">
              {t.flowSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 slide-in-from-left shadow-sm hover:shadow-md p-6 rounded-xl transition-all animate-in duration-300"
                  style={{
                    backgroundColor: "var(--color-card-bg)",
                    animationDelay: `${600 + i * 100}ms`,
                  }}
                >
                  <div className="flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-[var(--color-aquamarine-500)] dark:from-[var(--color-text)] to-[var(--color-aquamarine-600)] dark:to-pink-400 shadow-lg rounded-full w-10 h-10 font-bold text-white">
                    {i + 1}
                  </div>
                  <span
                    className="flex-1 leading-relaxed"
                    style={{ color: "var(--color-card-text)" }}
                  >
                    {step}
                  </span>
                  {i < t.flowSteps.length - 1 && (
                    <ArrowRight
                      className="flex-shrink-0 opacity-60 w-4 h-4"
                      style={{ color: "var(--color-card-text)" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="slide-in-from-bottom text-center animate-in duration-700 delay-1000">
          <div className="relative bg-gradient-to-br from-[var(--color-card-bg)] via-purple-600 to-blue-800 shadow-2xl mx-auto p-12 rounded-3xl max-w-2xl overflow-hidden text-white">
            {/* Background Pattern */}

            <div className="relative">
              <h2 className="mb-4 font-bold text-3xl">{t.ctaTitle}</h2>
              <p className="mb-8 text-blue-100 text-lg leading-relaxed">
                {t.ctaDesc}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
