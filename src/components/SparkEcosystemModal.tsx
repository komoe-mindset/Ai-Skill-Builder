import React from 'react';
import {
  X,
  Compass,
  Bot,
  BookOpen,
  ExternalLink,
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Workflow,
  Cpu,
} from 'lucide-react';
import {
  SPARK_SKILL_STUDIO_URL,
  GEMINI_SKILL_BUILDER_GEM_URL,
  GEMINI_SPARK_GUIDE_URL,
} from '../types';
import { Language } from '../translations';

interface SparkEcosystemModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const SparkEcosystemModal: React.FC<SparkEcosystemModalProps> = ({
  lang,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-purple-50/70 via-blue-50/50 to-indigo-50/70">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-sm shadow-purple-600/20">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-slate-900">
                  {lang === 'en' ? 'Spark Ecosystem Tools' : 'Spark Ecosystem ကိရိယာများ'}
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                  Suite
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                {lang === 'en'
                  ? 'Interconnected tools to craft, refine, and architect AI Skills'
                  : 'AI Skill ဖန်တီးတည်ဆောက်ရန် ချိတ်ဆက်အသုံးပြုနိုင်သော ကိရိယာများ'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm leading-relaxed flex-1">
          {/* Highlight Card: Spark Skill Studio & Architect */}
          <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-purple-50/90 via-white to-indigo-50/80 border-2 border-purple-300/80 shadow-xs space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-purple-600/30">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h4 className="font-black text-slate-900 text-sm sm:text-base">
                      Spark Skill Studio & Architect
                    </h4>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-purple-600 text-white">
                      Web App
                    </span>
                  </div>
                  <p className="text-xs text-purple-900/80 font-medium">
                    {lang === 'en'
                      ? 'Advanced Visual Studio & Agent Architecture Platform'
                      : 'အဆင့်မြင့် Visual Studio & Agent Architecture စနစ်'}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm">
              {lang === 'en'
                ? 'Design complex multi-tool schemas, workflow diagrams, and production-ready Agent Skills (SKILL.md) in a dedicated visual web environment.'
                : 'အသေးစိတ် Tool Schema များ၊ multi-step workflow များနှင့် production-ready Agent Skills (SKILL.md) များကို စနစ်တကျ ရေးဆွဲတည်ဆောက်နိုင်သော သီးသန့် Web Application ဖြစ်ပါသည်။'}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white border border-purple-200 text-purple-800">
                <CheckCircle2 className="w-3 h-3 text-purple-600" />
                Visual Schema Builder
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white border border-purple-200 text-purple-800">
                <CheckCircle2 className="w-3 h-3 text-purple-600" />
                Deep Architecture
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white border border-purple-200 text-purple-800">
                <CheckCircle2 className="w-3 h-3 text-purple-600" />
                Tool Configuration
              </span>
            </div>

            <a
              href={SPARK_SKILL_STUDIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition active:scale-[0.99]"
            >
              <span>
                {lang === 'en'
                  ? 'Open Spark Skill Studio & Architect (skill-builder.komoe.org)'
                  : 'Spark Skill Studio & Architect ဖွင့်မည် (skill-builder.komoe.org)'}
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Grid of the other 2 Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Tool 2: Gemini Skill Builder Gem */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50/80 to-slate-50 border border-blue-200/90 space-y-2.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-blue-100 text-blue-700">
                      <Bot className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">
                      Gemini Skill Builder Gem
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 border border-blue-200">
                    AI Gem
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-normal">
                  {lang === 'en'
                    ? 'Conversational AI Gem in Gemini to draft, brainstorm, and generate prompt instructions through real-time dialogue.'
                    : 'Gemini ပေါ်တွင် စကားပြောဆိုကာ Skill များကို AI နှင့် တိုက်ရိုက် မေးမြန်း၊ ပြင်ဆင်၊ ဆွေးနွေးဖန်တီးနိုင်သော သီးသန့် AI Gem ဖြစ်ပါသည်။'}
                </p>
              </div>

              <a
                href={GEMINI_SKILL_BUILDER_GEM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition"
              >
                <span>{lang === 'en' ? 'Open Gem' : 'Skill Builder Gem ဖွင့်မည်'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Tool 3: Gemini Spark User Guide */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50/80 to-orange-50/40 border border-amber-200/90 space-y-2.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-amber-100 text-amber-800">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">
                      Gemini Spark User Guide
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                    Docs & Examples
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-normal">
                  {lang === 'en'
                    ? 'Comprehensive tutorials, best practices, and real-world examples on how to utilize Gemini Spark effectively.'
                    : 'Gemini Spark ကို မည်သို့ အသုံးပြုရမည်နှင့် လက်တွေ့အသုံးချ နမူနာ (Examples) များကို အသေးစိတ်ရှင်းပြထားသော ဝဘ်ဆိုဒ် ဖြစ်ပါသည်။'}
                </p>
              </div>

              <a
                href={GEMINI_SPARK_GUIDE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-xs transition"
              >
                <span>{lang === 'en' ? 'Read Guide' : 'User Guide ဖတ်ရှုမည်'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Connected Workflow Pipeline */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
            <div className="flex items-center gap-2 font-bold text-slate-800">
              <Workflow className="w-4 h-4 text-purple-600" />
              <span>
                {lang === 'en' ? 'Recommended Pipeline:' : 'အကြံပြု အသုံးပြုနည်း လမ်းကြောင်း (Recommended Pipeline):'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 space-y-1">
                <span className="font-bold text-amber-800 flex items-center gap-1">
                  <span>{lang === 'en' ? '1. Learn' : '၁။ လေ့လာပါ'}</span>
                </span>
                <p className="text-[11px] text-slate-500">
                  {lang === 'en'
                    ? 'Study workflows & samples in the User Guide.'
                    : 'User Guide တွင် Spark အသုံးပြုနည်းနှင့် ဥပမာများကို ဖတ်ပါ။'}
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200 space-y-1">
                <span className="font-bold text-blue-700 flex items-center gap-1">
                  <span>{lang === 'en' ? '2. Formulate' : '၂။ မူကြမ်းရေးပါ'}</span>
                </span>
                <p className="text-[11px] text-slate-500">
                  {lang === 'en'
                    ? 'Structure task & success metrics in this companion.'
                    : 'ဤ Guide App တွင် ရည်ရွယ်ချက်နှင့် အောင်မြင်မှုစံနှုန်းကို ဖြည့်ပါ။'}
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200 space-y-1">
                <span className="font-bold text-indigo-700 flex items-center gap-1">
                  <span>{lang === 'en' ? '3. Generate' : '၃။ Gem သို့ပို့ပါ'}</span>
                </span>
                <p className="text-[11px] text-slate-500">
                  {lang === 'en'
                    ? 'Iterate & test interactively with the Gemini Gem.'
                    : 'Gemini Skill Builder Gem တွင် AI ဖြင့် မေးမြန်းစမ်းသပ်ပါ။'}
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-purple-300 space-y-1 bg-purple-50/40">
                <span className="font-bold text-purple-800 flex items-center gap-1">
                  <span>{lang === 'en' ? '4. Architect' : '၄။ Studio တွင် ဆောက်ပါ'}</span>
                </span>
                <p className="text-[11px] text-slate-500">
                  {lang === 'en'
                    ? 'Build deep schemas & tools in Spark Skill Studio.'
                    : 'Spark Skill Studio တွင် အဆင့်မြင့် Architecture & Schema ဆောက်ပါ။'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/70">
          <span className="text-[11px] text-slate-500">
            {lang === 'en' ? 'Spark Suite • Free & open to explore' : 'Spark Suite • အားလုံး အခမဲ့ ဖွင့်သုံးနိုင်ပါသည်'}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer"
          >
            {lang === 'en' ? 'Close' : 'ပိတ်မည်'}
          </button>
        </div>
      </div>
    </div>
  );
};
