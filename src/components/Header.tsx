import React from 'react';
import {
  Sparkles,
  HelpCircle,
  RotateCcw,
  ExternalLink,
  Bot,
  BookOpen,
  Cpu,
  Layers,
  Globe,
  Server,
} from 'lucide-react';
import {
  GEMINI_SKILL_BUILDER_GEM_URL,
  GEMINI_SPARK_GUIDE_URL,
  SPARK_SKILL_STUDIO_URL,
  MCP_GUIDE_URL,
} from '../types';
import { Language, TRANSLATIONS } from '../translations';

interface HeaderProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
  onOpenTemplates: () => void;
  onOpenHelp: () => void;
  onOpenEcosystem: () => void;
  onReset: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onChangeLang,
  onOpenTemplates,
  onOpenHelp,
  onOpenEcosystem,
  onReset,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 px-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid place-items-center w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white font-black text-xl shadow-md shadow-slate-900/20 ring-2 ring-blue-500/20">
            S
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight">
                {t.appName}
              </span>

              {/* Language Switcher Pill Toggle */}
              <div className="inline-flex items-center p-0.5 rounded-full bg-slate-100 border border-slate-200/90 shadow-2xs">
                <button
                  type="button"
                  id="lang-my-btn"
                  onClick={() => onChangeLang('my')}
                  className={`px-2 py-0.5 rounded-full text-xs font-bold transition cursor-pointer ${
                    lang === 'my'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="မြန်မာဘာသာဖြင့် သုံးမည်"
                >
                  မြန်မာ
                </button>
                <button
                  type="button"
                  id="lang-en-btn"
                  onClick={() => onChangeLang('en')}
                  className={`px-2 py-0.5 rounded-full text-xs font-bold transition cursor-pointer ${
                    lang === 'en'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Switch to English"
                >
                  EN
                </button>
              </div>
            </div>
            <p className="text-xs text-slate-500 font-medium hidden sm:block">
              {t.appSubtitle}
            </p>
          </div>
        </div>

        {/* Mobile quick actions */}
        <div className="flex items-center gap-1 sm:hidden">
          <a
            href={SPARK_SKILL_STUDIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2 py-1.5 text-xs font-bold text-purple-800 bg-purple-50 border border-purple-200/90 rounded-xl active:bg-purple-100 transition"
            title="Spark Skill Studio & Architect (skill-builder.komoe.org)"
          >
            <Cpu className="w-3.5 h-3.5 text-purple-600" />
            <span>Studio</span>
            <ExternalLink className="w-2.5 h-2.5 text-purple-500" />
          </a>
          <a
            href={GEMINI_SPARK_GUIDE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2 py-1.5 text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200/80 rounded-xl active:bg-amber-100 transition"
            title={t.sparkGuideBtn}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>Guide</span>
            <ExternalLink className="w-2.5 h-2.5 text-amber-500" />
          </a>
          <a
            href={GEMINI_SKILL_BUILDER_GEM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 rounded-xl active:bg-blue-100 transition"
            title={t.gemBtn}
          >
            <Bot className="w-3.5 h-3.5 text-blue-600" />
            <span>Gem</span>
            <ExternalLink className="w-3 h-3 text-blue-500" />
          </a>
          <a
            href={MCP_GUIDE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2 py-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 rounded-xl active:bg-emerald-100 transition"
            title="MCP Guide Website (https://mcp-guide.komoe.org/)"
          >
            <Server className="w-3.5 h-3.5 text-emerald-600" />
            <span>MCP</span>
            <ExternalLink className="w-2.5 h-2.5 text-emerald-500" />
          </a>
          <button
            type="button"
            id="mobile-templates-btn"
            onClick={onOpenTemplates}
            className="p-2 text-slate-600 hover:text-blue-600 rounded-xl hover:bg-slate-100 transition"
            title={t.templates}
            aria-label={t.templates}
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
          </button>
        </div>
      </div>

      {/* Desktop actions */}
      <div className="hidden sm:flex items-center gap-2 flex-wrap justify-end">
        {/* Spark Skill Studio & Architect Web App Link */}
        <a
          href={SPARK_SKILL_STUDIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-purple-900 bg-purple-50 hover:bg-purple-100 border border-purple-200/90 rounded-xl shadow-2xs transition active:scale-[0.98]"
          title="Spark Skill Studio & Architect (skill-builder.komoe.org)"
        >
          <Cpu className="w-3.5 h-3.5 text-purple-600" />
          <span>{t.studioBtn}</span>
          <ExternalLink className="w-3 h-3 text-purple-600 opacity-80" />
        </a>

        {/* Gemini Spark User Guide */}
        <a
          href={GEMINI_SPARK_GUIDE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200/90 rounded-xl shadow-2xs transition active:scale-[0.98]"
          title="Gemini Spark User Guide (gemini-spark.komoe.org)"
        >
          <BookOpen className="w-3.5 h-3.5 text-amber-600" />
          <span>{t.sparkGuideBtn}</span>
          <ExternalLink className="w-3 h-3 text-amber-600 opacity-80" />
        </a>

        {/* Gemini Skill Builder Gem */}
        <a
          href={GEMINI_SKILL_BUILDER_GEM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl shadow-xs transition active:scale-[0.98]"
          title="Gemini Skill Builder Gem"
        >
          <Bot className="w-3.5 h-3.5 text-blue-600" />
          <span>{t.gemBtn}</span>
          <ExternalLink className="w-3 h-3 text-blue-600 opacity-80" />
        </a>

        {/* MCP Guide Website */}
        <a
          href={MCP_GUIDE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/90 rounded-xl shadow-2xs transition active:scale-[0.98]"
          title="MCP Guide Website (https://mcp-guide.komoe.org/)"
        >
          <Server className="w-3.5 h-3.5 text-emerald-600" />
          <span>{t.mcpGuideBtn}</span>
          <ExternalLink className="w-3 h-3 text-emerald-600 opacity-80" />
        </a>

        {/* Ecosystem Suite Overview Modal Opener */}
        <button
          type="button"
          onClick={onOpenEcosystem}
          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-xl shadow-2xs transition"
          title="Spark Ecosystem Suite"
        >
          <Layers className="w-3.5 h-3.5 text-indigo-600" />
          <span>{t.sparkSuite}</span>
        </button>

        {/* Templates Button */}
        <button
          type="button"
          id="header-templates-btn"
          onClick={onOpenTemplates}
          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-xs transition"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>{t.templates}</span>
        </button>

        {/* Help Button */}
        <button
          type="button"
          id="header-help-btn"
          onClick={onOpenHelp}
          className="p-2 text-slate-500 hover:text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-xs transition"
          title={t.help}
          aria-label={t.help}
        >
          <HelpCircle className="w-4 h-4" />
        </button>

        {/* Reset Button */}
        <button
          type="button"
          id="header-reset-btn"
          onClick={onReset}
          className="p-2 text-slate-500 hover:text-rose-600 bg-white hover:bg-rose-50 border border-slate-200 hover:border-rose-200 rounded-xl shadow-xs transition"
          title={t.reset}
          aria-label={t.reset}
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
