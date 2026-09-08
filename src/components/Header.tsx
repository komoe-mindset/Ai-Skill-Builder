import React from 'react';
import { Bookmark, Sparkles, HelpCircle, RotateCcw, ExternalLink, Bot, BookOpen } from 'lucide-react';
import { GEMINI_SKILL_BUILDER_GEM_URL, GEMINI_SPARK_GUIDE_URL } from '../types';

interface HeaderProps {
  savedCount: number;
  onOpenSaved: () => void;
  onOpenTemplates: () => void;
  onOpenHelp: () => void;
  onReset: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  savedCount,
  onOpenSaved,
  onOpenTemplates,
  onOpenHelp,
  onReset,
}) => {
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
                Skill Builder Guide
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                မြန်မာ
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium hidden sm:block">
              Gemini Skill Builder Gem ဖြင့် AI Skill ဖန်တီးနည်း လမ်းညွှန်
            </p>
          </div>
        </div>

        {/* Mobile quick actions */}
        <div className="flex items-center gap-1 sm:hidden">
          <a
            href={GEMINI_SPARK_GUIDE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2 py-1.5 text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200/80 rounded-xl active:bg-amber-100 transition"
            title="Gemini Spark User Guide (ဥပမာများ ဖတ်ရန်)"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>Spark</span>
            <ExternalLink className="w-2.5 h-2.5 text-amber-500" />
          </a>
          <a
            href={GEMINI_SKILL_BUILDER_GEM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 rounded-xl active:bg-blue-100 transition"
            title="Skill Builder Gem ဖွင့်ရန်"
          >
            <Bot className="w-3.5 h-3.5 text-blue-600" />
            <span>Gem</span>
            <ExternalLink className="w-3 h-3 text-blue-500" />
          </a>
          <button
            type="button"
            id="mobile-templates-btn"
            onClick={onOpenTemplates}
            className="p-2 text-slate-600 hover:text-blue-600 rounded-xl hover:bg-slate-100 transition"
            title="အသင့်သုံးပုံစံများ"
            aria-label="အသင့်သုံးပုံစံများ"
          >
            <Sparkles className="w-5 h-5" />
          </button>
          <button
            type="button"
            id="mobile-saved-btn"
            onClick={onOpenSaved}
            className="relative p-2 text-slate-600 hover:text-blue-600 rounded-xl hover:bg-slate-100 transition"
            title="သိမ်းထားသော Skills"
            aria-label="သိမ်းထားသော Skills"
          >
            <Bookmark className="w-5 h-5" />
            {savedCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-blue-600 text-white rounded-full text-[10px] font-bold grid place-items-center">
                {savedCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Desktop actions */}
      <div className="hidden sm:flex items-center gap-2">
        <a
          href={GEMINI_SPARK_GUIDE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200/90 rounded-xl shadow-2xs transition active:scale-[0.98]"
          title="Gemini Spark User Guide (ဥပမာများနှင့်တကွ လေ့လာရန်)"
        >
          <BookOpen className="w-3.5 h-3.5 text-amber-600" />
          <span>Gemini Spark Guide</span>
          <ExternalLink className="w-3 h-3 text-amber-600 opacity-80" />
        </a>

        <a
          href={GEMINI_SKILL_BUILDER_GEM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-xs shadow-blue-600/20 transition active:scale-[0.98]"
          title="Gemini Skill Builder Gem ကို တက်ဘ်အသစ်တွင် ဖွင့်ရန်"
        >
          <Bot className="w-3.5 h-3.5" />
          <span>Skill Builder Gem ဖွင့်ရန်</span>
          <ExternalLink className="w-3 h-3 opacity-80" />
        </a>

        <button
          type="button"
          id="header-templates-btn"
          onClick={onOpenTemplates}
          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-xs transition"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>အသင့်သုံး ပုံစံများ</span>
        </button>

        <button
          type="button"
          id="header-saved-btn"
          onClick={onOpenSaved}
          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-xs transition"
        >
          <Bookmark className="w-3.5 h-3.5 text-blue-500" />
          <span>သိမ်းထားသော Skills</span>
          {savedCount > 0 && (
            <span className="ml-0.5 px-1.5 py-0.2 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold">
              {savedCount}
            </span>
          )}
        </button>

        <button
          type="button"
          id="header-help-btn"
          onClick={onOpenHelp}
          className="p-2 text-slate-500 hover:text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-xs transition"
          title="အသုံးပြုနည်း လမ်းညွှန်"
          aria-label="အသုံးပြုနည်း လမ်းညွှန်"
        >
          <HelpCircle className="w-4 h-4" />
        </button>

        <button
          type="button"
          id="header-reset-btn"
          onClick={onReset}
          className="p-2 text-slate-500 hover:text-rose-600 bg-white hover:bg-rose-50 border border-slate-200 hover:border-rose-200 rounded-xl shadow-xs transition"
          title="ပြန်လည်စတင်ရန် (Reset)"
          aria-label="ပြန်လည်စတင်ရန်"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};


