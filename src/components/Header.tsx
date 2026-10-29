import React, { useState, useRef, useEffect } from 'react';
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
  Video,
  Workflow,
  ChevronDown,
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const websiteCategories = [
    {
      category: t.categoryWorkflows,
      items: [
        {
          name: 'Workflow AI Video',
          url: WORKFLOW_AI_VIDEO_URL,
          icon: Video,
          iconColor: 'text-rose-600 bg-rose-50 border-rose-200',
          badge: 'Video AI',
          badgeColor: 'bg-rose-100 text-rose-800',
          desc:
            lang === 'en'
              ? 'Creative visual & AI video workflow pipeline'
              : 'AI Video ဖန်တီးမှုနှင့် Visual Workflow စနစ်',
        },
        {
          name: 'Workflow AI Skill',
          url: WORKFLOW_AI_SKILL_URL,
          icon: Workflow,
          iconColor: 'text-cyan-600 bg-cyan-50 border-cyan-200',
          badge: 'Skill Flow',
          badgeColor: 'bg-cyan-100 text-cyan-800',
          desc:
            lang === 'en'
              ? 'AI skill execution & automation workflow'
              : 'AI Skill တည်ဆောက်ခြင်းနှင့် Automation Workflow',
        },
      ],
    },
    {
      category: t.categoryStudios,
      items: [
        {
          name: 'Spark Skill Studio',
          url: SPARK_SKILL_STUDIO_URL,
          icon: Cpu,
          iconColor: 'text-purple-600 bg-purple-50 border-purple-200',
          badge: 'Studio',
          badgeColor: 'bg-purple-100 text-purple-800',
          desc:
            lang === 'en'
              ? 'Visual studio for deep agent architecture'
              : 'အဆင့်မြင့် Visual Studio & Architecture စနစ်',
        },
        {
          name: 'Gemini Skill Builder Gem',
          url: GEMINI_SKILL_BUILDER_GEM_URL,
          icon: Bot,
          iconColor: 'text-blue-600 bg-blue-50 border-blue-200',
          badge: 'Gemini Gem',
          badgeColor: 'bg-blue-100 text-blue-800',
          desc:
            lang === 'en'
              ? 'Conversational AI Skill generator in Gemini'
              : 'AI နှင့် တိုက်ရိုက် မေးမြန်းစမ်းသပ်နိုင်သော Gem',
        },
      ],
    },
    {
      category: t.categoryGuides,
      items: [
        {
          name: 'MCP Guide Website',
          url: MCP_GUIDE_URL,
          icon: Server,
          iconColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
          badge: 'Protocol',
          badgeColor: 'bg-emerald-100 text-emerald-800',
          desc:
            lang === 'en'
              ? 'Model Context Protocol servers & agent tools'
              : 'Model Context Protocol လက်စွဲလမ်းညွှန်',
        },
        {
          name: 'Gemini Spark Guide',
          url: GEMINI_SPARK_GUIDE_URL,
          icon: BookOpen,
          iconColor: 'text-amber-600 bg-amber-50 border-amber-200',
          badge: 'Docs',
          badgeColor: 'bg-amber-100 text-amber-800',
          desc:
            lang === 'en'
              ? 'Tutorials, case studies & prompt guides'
              : 'အသုံးပြုနည်းလမ်းညွှန်နှင့် လက်တွေ့ဥပမာများ',
        },
      ],
    },
  ];

  return (
    <header className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 px-1">
      {/* Brand & Language Toggle */}
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

        {/* Mobile neat actions */}
        <div className="flex items-center gap-1.5 sm:hidden">
          {/* Mobile All Websites Dropdown trigger */}
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold text-slate-800 bg-white border border-slate-200 rounded-xl shadow-2xs hover:bg-slate-50 transition active:scale-[0.98]"
            title="Ecosystem Websites"
          >
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            <span>Sites</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800">
              6
            </span>
            <ChevronDown
              className={`w-3 h-3 text-slate-500 transition-transform ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

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

          <button
            type="button"
            onClick={onOpenHelp}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition"
            title={t.help}
            aria-label={t.help}
          >
            <HelpCircle className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Desktop Neat Actions */}
      <div className="hidden sm:flex items-center gap-2 flex-wrap justify-end">
        {/* Quick Shortcut 1: Workflow AI Video */}
        <a
          href={WORKFLOW_AI_VIDEO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold text-rose-900 bg-rose-50/80 hover:bg-rose-100 border border-rose-200/90 rounded-xl shadow-2xs transition active:scale-[0.98]"
          title="Workflow AI Video (https://workflow-ai-video.komoe.org/)"
        >
          <Video className="w-3.5 h-3.5 text-rose-600" />
          <span>AI Video</span>
          <ExternalLink className="w-2.5 h-2.5 text-rose-500 opacity-80" />
        </a>

        {/* Quick Shortcut 2: Workflow AI Skill */}
        <a
          href={WORKFLOW_AI_SKILL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold text-cyan-900 bg-cyan-50/80 hover:bg-cyan-100 border border-cyan-200/90 rounded-xl shadow-2xs transition active:scale-[0.98]"
          title="Workflow AI Skill (https://workflow-ai-skill.komoe.org/)"
        >
          <Workflow className="w-3.5 h-3.5 text-cyan-600" />
          <span>AI Skill Flow</span>
          <ExternalLink className="w-2.5 h-2.5 text-cyan-500 opacity-80" />
        </a>

        {/* Quick Shortcut 3: Spark Skill Studio */}
        <a
          href={SPARK_SKILL_STUDIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold text-purple-900 bg-purple-50/80 hover:bg-purple-100 border border-purple-200/90 rounded-xl shadow-2xs transition active:scale-[0.98]"
          title="Spark Skill Studio & Architect (https://skill-builder.komoe.org/)"
        >
          <Cpu className="w-3.5 h-3.5 text-purple-600" />
          <span>Studio</span>
          <ExternalLink className="w-2.5 h-2.5 text-purple-500 opacity-80" />
        </a>

        {/* All Websites Tidy Dropdown Menu Button */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-2xs transition active:scale-[0.98] cursor-pointer"
            title="All Ecosystem Websites"
          >
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.allWebsitesBtn}</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800">
              6
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Neat & Tidy Floating Dropdown Popover */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-slate-200 z-50 p-3 space-y-3 animate-in fade-in slide-in-from-top-1 duration-150">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-900">
                      {lang === 'en' ? 'Ecosystem Websites' : 'Komoe & Spark ဝဘ်ဆိုဒ်များ'}
                    </h4>
                    <p className="text-[10px] text-slate-500">
                      {lang === 'en'
                        ? '6 connected tools & guides with direct access'
                        : 'ချိတ်ဆက်ထားသော ဝဘ်ဆိုဒ်နှင့် လမ်းညွှန် ၆ ခု'}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onOpenEcosystem}
                  className="text-[11px] font-bold text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1"
                >
                  <Layers className="w-3 h-3" />
                  <span>{lang === 'en' ? 'Suite Overview' : 'အကျဉ်းချုပ်'}</span>
                </button>
              </div>

              {/* Grouped Links */}
              <div className="space-y-3 max-h-[65vh] overflow-y-auto pr-1">
                {websiteCategories.map((group, gIdx) => (
                  <div key={gIdx} className="space-y-1.5">
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase px-1">
                      {group.category}
                    </span>
                    <div className="grid grid-cols-1 gap-1.5">
                      {group.items.map((item, iIdx) => {
                        const IconComponent = item.icon;
                        return (
                          <a
                            key={iIdx}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsDropdownOpen(false)}
                            className="group flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/80 transition"
                          >
                            <div
                              className={`p-1.5 rounded-lg border shrink-0 ${item.iconColor}`}
                            >
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1">
                                <span className="font-bold text-xs text-slate-800 group-hover:text-blue-600 transition truncate">
                                  {item.name}
                                </span>
                                <span
                                  className={`text-[9px] font-bold px-1.5 py-0.5 rounded shrink-0 ${item.badgeColor}`}
                                >
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-[10px] text-slate-500 leading-tight mt-0.5 line-clamp-1">
                                {item.desc}
                              </p>
                            </div>
                            <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-600 shrink-0 self-center transition opacity-60 group-hover:opacity-100" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Dropdown Footer */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <button
                  type="button"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    onOpenEcosystem();
                  }}
                  className="w-full py-1.5 text-center font-bold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-lg transition"
                >
                  {lang === 'en'
                    ? 'Explore Full Architecture & Ecosystem'
                    : 'Spark Suite & Architecture အပြည့်အစုံ ကြည့်မည်'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Templates Button */}
        <button
          type="button"
          id="header-templates-btn"
          onClick={onOpenTemplates}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-xs transition cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>{t.templates}</span>
        </button>

        {/* Help Button */}
        <button
          type="button"
          id="header-help-btn"
          onClick={onOpenHelp}
          className="p-2 text-slate-500 hover:text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-xs transition cursor-pointer"
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
          className="p-2 text-slate-500 hover:text-rose-600 bg-white hover:bg-rose-50 border border-slate-200 hover:border-rose-200 rounded-xl shadow-xs transition cursor-pointer"
          title={t.reset}
          aria-label={t.reset}
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile Dropdown Backdrop & Menu */}
      {isDropdownOpen && (
        <div className="sm:hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-2xs p-4 flex flex-col justify-end">
          <div className="bg-white rounded-3xl p-4 shadow-2xl border border-slate-200 max-h-[85vh] overflow-y-auto space-y-3 animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600" />
                <span className="font-extrabold text-sm text-slate-900">
                  {lang === 'en' ? 'Ecosystem Websites (6)' : 'ဝဘ်ဆိုဒ်များနှင့် ကိရိယာများ (၆ ခု)'}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              {websiteCategories.map((group, gIdx) => (
                <div key={gIdx} className="space-y-1.5">
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                    {group.category}
                  </span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {group.items.map((item, iIdx) => {
                      const IconComponent = item.icon;
                      return (
                        <a
                          key={iIdx}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/70 border border-slate-200/80 active:bg-slate-100 transition"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className={`p-1.5 rounded-lg border ${item.iconColor}`}>
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <span className="font-bold text-xs text-slate-900 block truncate">
                                {item.name}
                              </span>
                              <span className="text-[10px] text-slate-500 block truncate">
                                {item.desc}
                              </span>
                            </div>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-2" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                setIsDropdownOpen(false);
                onOpenEcosystem();
              }}
              className="w-full py-2.5 text-center font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition"
            >
              {lang === 'en'
                ? 'Open Suite Overview Modal'
                : 'Spark Suite အကျဉ်းချုပ် ဖွင့်မည်'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
