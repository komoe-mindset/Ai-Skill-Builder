import React from 'react';
import {
  X,
  Compass,
  Bot,
  BookOpen,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  Workflow,
  Cpu,
  Server,
  Video,
} from 'lucide-react';
import {
  WORKFLOW_AI_VIDEO_URL,
  WORKFLOW_AI_SKILL_URL,
  SPARK_SKILL_STUDIO_URL,
  GEMINI_SKILL_BUILDER_GEM_URL,
  GEMINI_SPARK_GUIDE_URL,
  MCP_GUIDE_URL,
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
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-purple-50/70 via-blue-50/50 to-indigo-50/70">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-sm shadow-purple-600/20">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-slate-900">
                  {lang === 'en'
                    ? 'Ecosystem Websites & Tools'
                    : 'Komoe & Spark Ecosystem ဝဘ်ဆိုဒ်များ'}
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                  6 Sites
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                {lang === 'en'
                  ? 'Neat & tidy directory of interconnected AI workflows, studios, and guides'
                  : 'AI Workflows၊ Visual Studio များနှင့် လမ်းညွှန်များအား စနစ်တကျ စုစည်းမှု'}
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

          {/* Section 1: AI Workflows */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 px-1">
              {lang === 'en' ? 'AI Workflows & Creative Automation' : 'AI Workflows နှင့် အလိုအလျောက်စနစ်များ'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Tool: Workflow AI Video */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-50/80 to-pink-50/30 border border-rose-200/90 space-y-2.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-rose-100 text-rose-700">
                        <Video className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-slate-900 text-xs sm:text-sm">
                        Workflow AI Video
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-200">
                      AI Video
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-normal">
                    {lang === 'en'
                      ? 'Creative video generation, prompt-to-video workflow pipelines, and storytelling automation.'
                      : 'AI Video ဖန်တီးမှု၊ Prompt to Video၊ ဇာတ်လမ်းဆင်ခြင်းနှင့် Creative Visual Workflow များကို စနစ်တကျ အကောင်အထည်ဖော်နိုင်သော ဝဘ်ဆိုဒ် ဖြစ်ပါသည်။'}
                  </p>
                </div>

                <a
                  href={WORKFLOW_AI_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-xs transition"
                >
                  <span>{lang === 'en' ? 'Open Video Workflow' : 'Video Workflow သို့ သွားမည်'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Tool: Workflow AI Skill */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-50/80 to-blue-50/30 border border-cyan-200/90 space-y-2.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-cyan-100 text-cyan-700">
                        <Workflow className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-slate-900 text-xs sm:text-sm">
                        Workflow AI Skill
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-100 text-cyan-800 border border-cyan-200">
                      AI Skill
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-normal">
                    {lang === 'en'
                      ? 'AI Skill workflow design, multi-stage task automation, and pipeline orchestration.'
                      : 'AI Agent Skills များ၊ Prompts နှင့် Logic Flow များကို ချိတ်ဆက် အလိုအလျောက် အလုပ်လုပ်ဆောင်စေနိုင်သော Workflow စနစ် ဖြစ်ပါသည်။'}
                  </p>
                </div>

                <a
                  href={WORKFLOW_AI_SKILL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs rounded-xl shadow-xs transition"
                >
                  <span>{lang === 'en' ? 'Open Skill Workflow' : 'Skill Workflow သို့ သွားမည်'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 2: Guides & Knowledge Base */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 px-1">
              {lang === 'en' ? 'Guides, Protocols & AI Companions' : 'လမ်းညွှန်များ၊ Protocols နှင့် AI အထောက်အကူပြုများ'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Tool: MCP Guide Website */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50/80 to-teal-50/40 border border-emerald-200/90 space-y-2.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
                        <Server className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-slate-900 text-xs sm:text-sm">
                        MCP Guide
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                      Protocol
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-normal">
                    {lang === 'en'
                      ? 'Model Context Protocol (MCP) guide for architecture, servers, and agent tools.'
                      : 'Model Context Protocol (MCP) ဆာဗာများ တည်ဆောက်ပုံနှင့် ချိတ်ဆက်နည်း လက်စွဲလမ်းညွှန် ဖြစ်ပါသည်။'}
                  </p>
                </div>

                <a
                  href={MCP_GUIDE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition"
                >
                  <span>{lang === 'en' ? 'Open Guide' : 'Guide ဖွင့်မည်'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Tool: Gemini Spark User Guide */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50/80 to-orange-50/40 border border-amber-200/90 space-y-2.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-amber-100 text-amber-800">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-slate-900 text-xs sm:text-sm">
                        Spark Guide
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                      Docs
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-normal">
                    {lang === 'en'
                      ? 'Comprehensive tutorials, best practices, and real-world examples for Gemini Spark.'
                      : 'Gemini Spark ကို မည်သို့ အသုံးပြုရမည်နှင့် လက်တွေ့ နမူနာ (Examples) များ လမ်းညွှန် ဖြစ်ပါသည်။'}
                  </p>
                </div>

                <a
                  href={GEMINI_SPARK_GUIDE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-xs transition"
                >
                  <span>{lang === 'en' ? 'Read Guide' : 'Guide ဖတ်ရှုမည်'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Tool: Gemini Skill Builder Gem */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50/80 to-slate-50 border border-blue-200/90 space-y-2.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-blue-100 text-blue-700">
                        <Bot className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-slate-900 text-xs sm:text-sm">
                        Skill Gem
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 border border-blue-200">
                      Gemini
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-normal">
                    {lang === 'en'
                      ? 'Conversational AI Gem in Gemini to draft, brainstorm, and test prompt instructions.'
                      : 'Gemini ပေါ်တွင် AI ဖြင့် တိုက်ရိုက် မေးမြန်း၊ ပြင်ဆင်၊ ဆွေးနွေးဖန်တီးနိုင်သော AI Gem ဖြစ်ပါသည်။'}
                  </p>
                </div>

                <a
                  href={GEMINI_SKILL_BUILDER_GEM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition"
                >
                  <span>{lang === 'en' ? 'Open Gem' : 'Gem ဖွင့်မည်'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Connected Workflow Pipeline */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
            <div className="flex items-center gap-2 font-bold text-slate-800">
              <Workflow className="w-4 h-4 text-purple-600" />
              <span>
                {lang === 'en'
                  ? 'Recommended End-to-End Pipeline:'
                  : 'အကြံပြု အသုံးပြုနည်း လမ်းကြောင်း (Recommended Pipeline):'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 space-y-1">
                <span className="font-bold text-amber-800 flex items-center gap-1">
                  <span>{lang === 'en' ? '1. Learn' : '၁။ လေ့လာပါ'}</span>
                </span>
                <p className="text-[11px] text-slate-500">
                  {lang === 'en'
                    ? 'Study workflows in Spark & MCP Guides.'
                    : 'Spark နှင့် MCP Guide တို့တွင် နည်းလမ်းများကို လေ့လာပါ။'}
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200 space-y-1">
                <span className="font-bold text-blue-700 flex items-center gap-1">
                  <span>{lang === 'en' ? '2. Formulate' : '၂။ မူကြမ်းရေးပါ'}</span>
                </span>
                <p className="text-[11px] text-slate-500">
                  {lang === 'en'
                    ? 'Define task & validation in this guide companion.'
                    : 'ဤ Guide App တွင် ရည်ရွယ်ချက်နှင့် အောင်မြင်မှုစံနှုန်းကို ဖြည့်ပါ။'}
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200 space-y-1">
                <span className="font-bold text-cyan-700 flex items-center gap-1">
                  <span>{lang === 'en' ? '3. Workflows' : '၃။ Workflows & Gem'}</span>
                </span>
                <p className="text-[11px] text-slate-500">
                  {lang === 'en'
                    ? 'Orchestrate via Workflow AI & Gemini Gem.'
                    : 'Workflow AI Video / Skill နှင့် Gemini Gem တို့ဖြင့် စမ်းသပ်ပါ။'}
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-purple-300 space-y-1 bg-purple-50/40">
                <span className="font-bold text-purple-800 flex items-center gap-1">
                  <span>{lang === 'en' ? '4. Architect' : '၄။ Studio တွင် ဆောက်ပါ'}</span>
                </span>
                <p className="text-[11px] text-slate-500">
                  {lang === 'en'
                    ? 'Build deep schemas in Spark Skill Studio.'
                    : 'Spark Skill Studio တွင် အဆင့်မြင့် Architecture & Schema ဆောက်ပါ။'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/70">
          <span className="text-[11px] text-slate-500">
            {lang === 'en'
              ? 'Komoe & Spark Ecosystem • All 6 sites are free to access'
              : 'Komoe & Spark Ecosystem • ဝဘ်ဆိုဒ် ၆ ခုစလုံး အခမဲ့ ဝင်ရောက်သုံးနိုင်ပါသည်'}
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
