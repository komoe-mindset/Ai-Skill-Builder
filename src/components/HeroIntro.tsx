import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  ExternalLink,
  Bot,
  BookOpen,
  Cpu,
  Server,
  Video,
  Workflow,
  ChevronDown,
  Info,
  PenLine,
  SlidersHorizontal,
  FileCheck2,
} from 'lucide-react';
import {
  WORKFLOW_AI_VIDEO_URL,
  WORKFLOW_AI_SKILL_URL,
  GEMINI_SKILL_BUILDER_GEM_URL,
  GEMINI_SPARK_GUIDE_URL,
  SPARK_SKILL_STUDIO_URL,
  MCP_GUIDE_URL,
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
  const [showOtherTools, setShowOtherTools] = useState(false);

  const quickStartSteps = [
    {
      badge: t.quickStartStep1Badge,
      title: t.quickStartStep1Title,
      desc: t.quickStartStep1Desc,
      icon: PenLine,
      color: 'bg-blue-50 text-blue-700 border-blue-200/80',
      badgeColor: 'bg-blue-600 text-white',
    },
    {
      badge: t.quickStartStep2Badge,
      title: t.quickStartStep2Title,
      desc: t.quickStartStep2Desc,
      icon: SlidersHorizontal,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
      badgeColor: 'bg-indigo-600 text-white',
    },
    {
      badge: t.quickStartStep3Badge,
      title: t.quickStartStep3Title,
      desc: t.quickStartStep3Desc,
      icon: FileCheck2,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      badgeColor: 'bg-emerald-600 text-white',
    },
  ];

  const ecosystemLinks = [
    {
      title: 'Workflow AI Video',
      url: WORKFLOW_AI_VIDEO_URL,
      icon: Video,
      color: 'bg-rose-50 text-rose-800 border-rose-200/80 hover:bg-rose-100',
      iconColor: 'text-rose-600',
      badge: 'Video AI',
    },
    {
      title: 'Workflow AI Skill',
      url: WORKFLOW_AI_SKILL_URL,
      icon: Workflow,
      color: 'bg-cyan-50 text-cyan-800 border-cyan-200/80 hover:bg-cyan-100',
      iconColor: 'text-cyan-600',
      badge: 'Skill Flow',
    },
    {
      title: 'Spark Skill Studio',
      url: SPARK_SKILL_STUDIO_URL,
      icon: Cpu,
      color: 'bg-purple-50 text-purple-800 border-purple-200/80 hover:bg-purple-100',
      iconColor: 'text-purple-600',
      badge: 'Studio',
    },
    {
      title: 'MCP Guide',
      url: MCP_GUIDE_URL,
      icon: Server,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200/80 hover:bg-emerald-100',
      iconColor: 'text-emerald-600',
      badge: 'Protocol',
    },
    {
      title: 'Spark Guide',
      url: GEMINI_SPARK_GUIDE_URL,
      icon: BookOpen,
      color: 'bg-amber-50 text-amber-900 border-amber-200/80 hover:bg-amber-100',
      iconColor: 'text-amber-600',
      badge: 'Docs',
    },
    {
      title: 'Skill Gem',
      url: GEMINI_SKILL_BUILDER_GEM_URL,
      icon: Bot,
      color: 'bg-blue-50 text-blue-800 border-blue-200/80 hover:bg-blue-100',
      iconColor: 'text-blue-600',
      badge: 'Gemini',
    },
  ];

  return (
    <header className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-br from-blue-50/70 via-white to-slate-50/50 p-5 sm:p-8">
      <div className="max-w-4xl space-y-6">
        {/* Category Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100/80 text-blue-800 tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>{t.heroTag}</span>
        </div>

        {/* Clear Primary Heading */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-[1.35]">
            {t.heroTitle}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            {t.heroDesc}
          </p>
        </div>

        {/* 3-Step Visual Quick Start Guide */}
        <section aria-label={t.quickStartTitle} className="space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500">
              {t.quickStartTitle}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {quickStartSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
                  className={`p-3.5 sm:p-4 rounded-2xl border bg-white shadow-2xs flex flex-col justify-between transition-all hover:shadow-xs hover:border-slate-300 ${step.color}`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[11px] font-black px-2.5 py-0.5 rounded-full ${step.badgeColor}`}
                      >
                        {step.badge}
                      </span>
                      <StepIcon className="w-4 h-4 opacity-75" />
                    </div>
                    <h2 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {step.title}
                    </h2>
                    <p className="text-[12px] text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Short definition of Skill */}
        <div className="flex items-start gap-2.5 p-3 sm:p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-950 text-xs sm:text-sm">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold text-amber-900 block mb-0.5">
              {t.heroSkillDefTitle}
            </strong>
            <span className="leading-relaxed text-amber-900/90 font-medium">
              {t.heroSkillDef}
            </span>
          </div>
        </div>

        {/* Primary and Secondary Action Buttons */}
        <div className="pt-1 flex flex-wrap items-center gap-3">
          <button
            type="button"
            id="hero-start-btn"
            onClick={onStart}
            aria-label={t.heroStartBtn}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] shadow-md shadow-blue-600/25 transition min-h-[48px] cursor-pointer"
          >
            <span>{t.heroStartBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            id="hero-templates-btn"
            onClick={onOpenTemplates}
            aria-label={t.heroTemplatesBtn}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-sm sm:text-base font-bold text-slate-700 bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-300 shadow-2xs transition min-h-[48px] cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>{t.heroTemplatesBtn}</span>
          </button>
        </div>

        {/* Quieter Collapsible 'Other Tools / Learn More' Area */}
        <nav aria-label="Ecosystem tools" className="pt-2 border-t border-slate-200/60">
          <button
            type="button"
            onClick={() => setShowOtherTools(!showOtherTools)}
            aria-expanded={showOtherTools}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition py-1 cursor-pointer"
          >
            <span>{t.heroOtherTools}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                showOtherTools ? 'rotate-180' : ''
              }`}
            />
          </button>

          {showOtherTools && (
            <div className="mt-2.5 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2.5 animate-in fade-in duration-150">
              <p className="text-[11px] text-slate-500 leading-normal">
                {t.heroOtherToolsDesc}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {ecosystemLinks.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition ${item.color}`}
                      title={`${item.title} — သီးခြားဝဘ်ဆိုဒ်တွင် ဖွင့်ပါမည် (${item.url})`}
                    >
                      <IconComp className={`w-3.5 h-3.5 ${item.iconColor}`} />
                      <span>{item.title}</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                    </a>
                  );
                })}
              </div>

              {onOpenEcosystem && (
                <div className="pt-1.5 flex justify-end">
                  <button
                    type="button"
                    onClick={onOpenEcosystem}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 underline underline-offset-2"
                  >
                    {t.heroEcosystemView} →
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
