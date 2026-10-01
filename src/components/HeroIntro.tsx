import React from 'react';
import {
  ArrowRight,
  Sparkles,
  ExternalLink,
  Bot,
  BookOpen,
  Cpu,
} from 'lucide-react';
import {
  GEMINI_SKILL_BUILDER_GEM_URL,
  GEMINI_SPARK_GUIDE_URL,
  SPARK_SKILL_STUDIO_URL,
} from '../types';
import { Language, TRANSLATIONS } from '../translations';

interface HeroIntroProps {
  lang: Language;
  onStart: () => void;
  onOpenTemplates: () => void;
  onOpenEcosystem?: () => void;
}

export const HeroIntro: React.FC<HeroIntroProps> = ({
  lang,
  onStart,
  onOpenTemplates,
  onOpenEcosystem,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="relative overflow-hidden border-b border-slate-200/90 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/50 p-5 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Column: Heading and description */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.heroTag}</span>
            </div>

            <a
              href={SPARK_SKILL_STUDIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-800 border border-purple-200/90 hover:bg-purple-100 transition"
              title="Spark Skill Studio & Architect"
            >
              <Cpu className="w-3.5 h-3.5 text-purple-600" />
              <span>{t.studioBtn}</span>
              <ExternalLink className="w-3 h-3 text-purple-500" />
            </a>

            <a
              href={GEMINI_SKILL_BUILDER_GEM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/80 hover:bg-indigo-100 transition"
              title="Gemini Skill Builder Gem"
            >
              <Bot className="w-3.5 h-3.5 text-indigo-600" />
              <span>{t.gemBtn}</span>
              <ExternalLink className="w-3 h-3 text-indigo-500" />
            </a>

            <a
              href={GEMINI_SPARK_GUIDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200/80 hover:bg-amber-100 transition"
              title="Gemini Spark User Guide"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>{t.sparkGuideBtn}</span>
              <ExternalLink className="w-3 h-3 text-amber-500" />
            </a>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-[1.35]">
            {t.heroTitle1} <br className="hidden sm:inline" />
            {t.heroTitle2}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
            {t.heroDesc}
          </p>

          {/* Quick Ecosystem Hub Bar */}
          <div className="p-2.5 sm:p-3 rounded-2xl bg-white/95 border border-purple-200/80 shadow-2xs text-xs text-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-md bg-purple-100 text-purple-700">
                <Cpu className="w-4 h-4 shrink-0" />
              </div>
              <span className="font-medium text-slate-700">
                {t.heroStudioCallout}
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={SPARK_SKILL_STUDIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-purple-800 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition"
              >
                <span>{t.heroStudioOpen}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              {onOpenEcosystem && (
                <button
                  type="button"
                  onClick={onOpenEcosystem}
                  className="text-xs text-slate-500 hover:text-slate-800 underline underline-offset-2 font-medium cursor-pointer"
                >
                  {t.heroEcosystemView}
                </button>
              )}
            </div>
          </div>

          <div className="pt-1 flex flex-wrap items-center gap-2">
            <button
              type="button"
              id="hero-start-btn"
              onClick={onStart}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-600/20 transition cursor-pointer"
            >
              <span>{t.heroStartBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              id="hero-templates-btn"
              onClick={onOpenTemplates}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{t.heroTemplatesBtn}</span>
            </button>
          </div>
        </div>

        {/* Right Column: 3-step mini flow */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5">
          <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-2xs">
            <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-800 font-extrabold text-sm flex items-center justify-center shrink-0">
              1
            </div>
            <div>
              <strong className="block text-xs sm:text-sm font-bold text-slate-800">
                {t.step1Mini}
              </strong>
              <span className="text-[11px] text-slate-500">
                {t.step1MiniDesc}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-2xs">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-extrabold text-sm flex items-center justify-center shrink-0">
              2
            </div>
            <div>
              <strong className="block text-xs sm:text-sm font-bold text-slate-800">
                {t.step2Mini}
              </strong>
              <span className="text-[11px] text-slate-500">
                {t.step2MiniDesc}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-2xs">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-sm flex items-center justify-center shrink-0">
              3
            </div>
            <div>
              <strong className="block text-xs sm:text-sm font-bold text-slate-800">
                {t.step3Mini}
              </strong>
              <span className="text-[11px] text-slate-500">
                {t.step3MiniDesc}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
