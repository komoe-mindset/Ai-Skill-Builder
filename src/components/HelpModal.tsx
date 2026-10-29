import React from 'react';
import {
  X,
  HelpCircle,
  CheckCircle2,
  Bot,
  Layers,
  ArrowRight,
  ExternalLink,
  Lightbulb,
  BookOpen,
  Cpu,
  Server,
  Video,
  Workflow,
  Globe,
} from 'lucide-react';
import {
  WORKFLOW_AI_VIDEO_URL,
  WORKFLOW_AI_SKILL_URL,
  GEMINI_SKILL_BUILDER_GEM_URL,
  GEMINI_SPARK_GUIDE_URL,
  SPARK_SKILL_STUDIO_URL,
  MCP_GUIDE_URL,
} from '../types';
import { Language } from '../translations';

interface HelpModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ lang, isOpen, onClose }) => {
  if (!isOpen) return null;

  const websites = [
    {
      title: 'Workflow AI Video',
      url: WORKFLOW_AI_VIDEO_URL,
      icon: Video,
      color: 'border-rose-200 bg-rose-50/60',
      iconColor: 'text-rose-600 bg-rose-100',
      btnColor: 'bg-rose-600 hover:bg-rose-700',
      desc:
        lang === 'en'
          ? 'AI Video creation, storyboard & prompt-to-video workflow pipeline'
          : 'AI Video ဖန်တီးမှုနှင့် Visual Creative Workflow စနစ်',
    },
    {
      title: 'Workflow AI Skill',
      url: WORKFLOW_AI_SKILL_URL,
      icon: Workflow,
      color: 'border-cyan-200 bg-cyan-50/60',
      iconColor: 'text-cyan-700 bg-cyan-100',
      btnColor: 'bg-cyan-700 hover:bg-cyan-800',
      desc:
        lang === 'en'
          ? 'Agent Skill architecture, task flow & automation orchestration'
          : 'AI Skill တည်ဆောက်ခြင်းနှင့် Automation Workflow စနစ်',
    },
    {
      title: 'Spark Skill Studio & Architect',
      url: SPARK_SKILL_STUDIO_URL,
      icon: Cpu,
      color: 'border-purple-200 bg-purple-50/60',
      iconColor: 'text-purple-600 bg-purple-100',
      btnColor: 'bg-purple-600 hover:bg-purple-700',
      desc:
        lang === 'en'
          ? 'Deep visual studio for multi-tool agent schemas and SKILL.md'
          : 'အဆင့်မြင့် Visual Studio & Agent Architecture စနစ်',
    },
    {
      title: 'MCP Guide Website',
      url: MCP_GUIDE_URL,
      icon: Server,
      color: 'border-emerald-200 bg-emerald-50/60',
      iconColor: 'text-emerald-700 bg-emerald-100',
      btnColor: 'bg-emerald-600 hover:bg-emerald-700',
      desc:
        lang === 'en'
          ? 'Model Context Protocol (MCP) servers & agent tool integration'
          : 'Model Context Protocol (MCP) လက်စွဲလမ်းညွှန် ဝဘ်ဆိုဒ်',
    },
    {
      title: 'Gemini Spark User Guide',
      url: GEMINI_SPARK_GUIDE_URL,
      icon: BookOpen,
      color: 'border-amber-200 bg-amber-50/60',
      iconColor: 'text-amber-700 bg-amber-100',
      btnColor: 'bg-amber-600 hover:bg-amber-700',
      desc:
        lang === 'en'
          ? 'Tutorials, case studies, prompt crafting & best practices'
          : 'Gemini Spark အသုံးပြုနည်းလမ်းညွှန်နှင့် လက်တွေ့ဥပမာများ',
    },
    {
      title: 'Gemini Skill Builder Gem',
      url: GEMINI_SKILL_BUILDER_GEM_URL,
      icon: Bot,
      color: 'border-blue-200 bg-blue-50/60',
      iconColor: 'text-blue-600 bg-blue-100',
      btnColor: 'bg-blue-600 hover:bg-blue-700',
      desc:
        lang === 'en'
          ? 'Interactive AI Gem on Gemini to brainstorm and generate prompts'
          : 'Gemini ပေါ်တွင် AI ဖြင့် မေးမြန်းစမ်းသပ်ဖန်တီးနိုင်သော Gem',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-100 text-blue-700">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900">
                {lang === 'en'
                  ? 'Spark Ecosystem & Skill Guide'
                  : 'Spark Ecosystem & Skill Builder လမ်းညွှန်'}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {lang === 'en'
                  ? 'Workflow instructions and directory of connected websites'
                  : 'အသုံးပြုနည်းနှင့် ချိတ်ဆက်ထားသော ဝဘ်ဆိုဒ်များ'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed flex-1">
          {/* Neat & Tidy Directory of 6 Ecosystem Websites */}
          <div className="space-y-2">
            <div className="flex items-center justify-between px-1">
              <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-blue-600" />
                <span>
                  {lang === 'en'
                    ? 'Connected Websites & Tools (6 Sites)'
                    : 'ချိတ်ဆက်ထားသော ဝဘ်ဆိုဒ်များနှင့် ကိရိယာများ (၆ ခု)'}
                </span>
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {websites.map((site, idx) => {
                const IconComponent = site.icon;
                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-2xl border ${site.color} flex flex-col justify-between space-y-2`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`p-1.5 rounded-lg ${site.iconColor}`}>
                          <IconComponent className="w-3.5 h-3.5" />
                        </div>
                        <h5 className="font-bold text-slate-900 text-xs">
                          {site.title}
                        </h5>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-snug">
                        {site.desc}
                      </p>
                    </div>

                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-1.5 w-full py-1.5 px-3 ${site.btnColor} text-white font-bold text-xs rounded-xl shadow-2xs transition`}
                    >
                      <span>{lang === 'en' ? 'Open Website' : 'ဝဘ်ဆိုဒ်သို့ သွားမည်'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Core 3-Step Process */}
          <div className="space-y-2 pt-1">
            <h4 className="font-bold text-slate-900">
              {lang === 'en' ? 'Core 3-Step Process:' : 'အဓိက အဆင့် (၃) ဆင့်:'}
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <strong className="block text-slate-900 font-semibold">
                    {lang === 'en' ? 'Describe the task' : 'အလုပ်ကို ရှင်းပြပါ'}
                  </strong>
                  <span className="text-slate-500 text-xs">
                    {lang === 'en'
                      ? 'Specify task purpose, deployment format, and success criteria in this app.'
                      : 'ဒီ App ထဲတွင် Skill ၏ ရည်ရွယ်ချက်၊ Destination နှင့် အောင်မြင်မှုစံနှုန်းကို ဖြည့်သွင်းပါ။'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <strong className="block text-slate-900 font-semibold">
                    {lang === 'en' ? 'Paste into the Gem or Workflow' : 'Gem သို့မဟုတ် Workflow ထဲသို့ ကူးထည့်ပါ'}
                  </strong>
                  <span className="text-slate-500 text-xs">
                    {lang === 'en'
                      ? 'Copy the formatted prompt and send it to the Gemini Skill Builder Gem or Workflow.'
                      : 'ထုတ်ပေးလာသော Prompt စာသားကို ကူးယူ၍ Gem သို့မဟုတ် Workflow ထဲသို့ Paste လုပ်ပါ။'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <strong className="block text-slate-900 font-semibold">
                    {lang === 'en' ? 'Review & finalize in Studio' : 'စစ်ဆေးပြီး Studio တွင် အချောသတ်ပါ'}
                  </strong>
                  <span className="text-slate-500 text-xs">
                    {lang === 'en'
                      ? 'Use follow-up reviews, custom adjustments, and build deep schemas in Spark Skill Studio.'
                      : 'ရရှိလာသော Skill ကို Review လုပ်ပြီး Spark Skill Studio တွင် အဆင့်မြင့် Architecture ဆောက်ပါ။'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-950 text-xs space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-amber-900">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>
                {lang === 'en'
                  ? 'Pro Tips:'
                  : 'ပိုမိုထိရောက်စေမည့် နည်းလမ်းကောင်းများ (Pro Tips):'}
              </span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>
                <strong>{lang === 'en' ? 'Pin the Gem:' : 'Gem ကို Pin လုပ်ထားပါ:'}</strong>{' '}
                {lang === 'en'
                  ? 'Pin the Skill Builder Gem in your Gemini sidebar for 1-click access anytime.'
                  : 'Gemini ဝဘ်ဆိုဒ် ဘယ်ဘက် Sidebar ထဲတွင် Skill Builder Gem ကို Pin လုပ်ထားပါက အချိန်မရွေး ၁ ချက်နှိပ်ရုံဖြင့် ပြန်သုံးနိုင်ပါသည်။'}
              </li>
              <li>
                <strong>{lang === 'en' ? 'Dual Windows:' : 'Split Screen / Dual Tabs:'}</strong>{' '}
                {lang === 'en'
                  ? 'Keep this companion on one side and the Gemini Gem on the other for rapid copy-pasting.'
                  : 'မျက်နှာပြင်တစ်ခြမ်းတွင် ဤ Web App ကိုဖွင့်ပြီး အခြားတစ်ခြမ်းတွင် Gem ကို ဖွင့်ထားပါက စာသားကူးထည့်ရန် အလွန်မြန်ဆန်ပါသည်။'}
              </li>
              <li>
                <strong>{lang === 'en' ? 'Video & Skill Workflows:' : 'Workflows ချိတ်ဆက်ခြင်း:'}</strong>{' '}
                {lang === 'en'
                  ? 'Use Workflow AI Video and Workflow AI Skill for comprehensive multi-modal generative pipelines.'
                  : 'AI Video နှင့် AI Skill Workflows များကို အသုံးပြုပြီး ပိုမိုပြည့်စုံသော multi-modal pipeline များ ဖန်တီးနိုင်ပါသည်။'}
              </li>
            </ul>
          </div>
        </div>

        <div className="p-4 border-t border-slate-100 flex justify-end bg-slate-50/50">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer"
          >
            {lang === 'en' ? 'Got it' : 'နားလည်ပါပြီ'}
          </button>
        </div>
      </div>
    </div>
  );
};
