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
} from 'lucide-react';
import {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-blue-100 text-blue-700">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900">
                {lang === 'en' ? 'Spark Ecosystem & Skill Guide' : 'Spark Ecosystem & Skill Builder လမ်းညွှန်'}
              </h3>
              <p className="text-xs text-slate-500">
                {lang === 'en'
                  ? 'Workflow instructions and best practices'
                  : 'အသုံးပြုနည်းနှင့် ပိုမိုထိရောက်စေမည့် အကြံပြုချက်များ'}
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
          {/* Spark Skill Studio & Architect Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50/60 border border-purple-200/90 space-y-2.5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="font-bold text-purple-950 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-purple-600" />
                  <span>Spark Skill Studio & Architect</span>
                </h4>
                <p className="text-xs text-purple-900/80 mt-1 leading-normal">
                  {lang === 'en'
                    ? 'Visual Studio & Architecture platform for designing multi-tool Agent Skills, schemas, and production code.'
                    : 'Agent Skills များကို အဆင့်မြင့် Visual Architect ဖြင့် စနစ်တကျ ဒီဇိုင်းရေးဆွဲပြီး Tool Schema နှင့် Code များကို ဖန်တီးနိုင်သော Web App ဖြစ်ပါသည်။'}
                </p>
              </div>
            </div>

            <a
              href={SPARK_SKILL_STUDIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition"
            >
              <span>{lang === 'en' ? 'Open Skill Studio & Architect' : 'Spark Skill Studio & Architect သို့ သွားမည်'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Direct Gem Link Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200/80 space-y-2.5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="font-bold text-indigo-950 flex items-center gap-1.5">
                  <Bot className="w-4 h-4 text-indigo-600" />
                  <span>Gemini Skill Builder Gem</span>
                </h4>
                <p className="text-xs text-indigo-900/80 mt-1">
                  {lang === 'en'
                    ? 'Interactive AI Gem on Gemini to brainstorm, iterate, and generate prompt instructions collaboratively.'
                    : 'Google Gemini အကောင့်ဖြင့် ဝင်ရောက်ပြီး ဤ Gem ကို တိုက်ရိုက် မေးမြန်းဆွေးနွေး အသုံးပြုနိုင်ပါသည်။'}
                </p>
              </div>
            </div>

            <a
              href={GEMINI_SKILL_BUILDER_GEM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition"
            >
              <span>{lang === 'en' ? 'Open Skill Builder Gem' : 'Skill Builder Gem ကို ဖွင့်မည်'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Gemini Spark User Guide Website Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200/90 space-y-2.5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="font-bold text-amber-950 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-amber-600" />
                  <span>Gemini Spark User Guide</span>
                </h4>
                <p className="text-xs text-amber-900/80 mt-1 leading-normal">
                  {lang === 'en'
                    ? 'Official documentation explaining Gemini Spark features with real-world case studies and examples.'
                    : 'Gemini Spark ကို မည်သို့ အသုံးပြုရမည်နှင့် လက်တွေ့အသုံးချနည်း ဥပမာ (Examples) များကို အသေးစိတ်ရှင်းပြထားသော User Guide ဝဘ်ဆိုဒ် ဖြစ်ပါသည်။'}
                </p>
              </div>
            </div>

            <a
              href={GEMINI_SPARK_GUIDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition"
            >
              <span>{lang === 'en' ? 'Open User Guide Website' : 'Gemini Spark User Guide ဝဘ်ဆိုဒ်သို့ သွားမည်'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* MCP Guide Website Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/50 border border-emerald-200/90 space-y-2.5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="font-bold text-emerald-950 flex items-center gap-1.5">
                  <Server className="w-4 h-4 text-emerald-600" />
                  <span>MCP Guide Website</span>
                </h4>
                <p className="text-xs text-emerald-900/80 mt-1 leading-normal">
                  {lang === 'en'
                    ? 'Comprehensive Model Context Protocol (MCP) guide explaining server setup, client integration, and practical developer workflows.'
                    : 'Model Context Protocol (MCP) ဆာဗာများ တည်ဆောက်ခြင်း၊ ချိတ်ဆက်အသုံးပြုခြင်းနှင့် လက်တွေ့အသုံးချမှု နည်းလမ်းများကို လေ့လာနိုင်သော ဝဘ်ဆိုဒ် ဖြစ်ပါသည်။'}
                </p>
              </div>
            </div>

            <a
              href={MCP_GUIDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition"
            >
              <span>{lang === 'en' ? 'Open MCP Guide (mcp-guide.komoe.org)' : 'MCP Guide ဝဘ်ဆိုဒ်သို့ သွားမည် (mcp-guide.komoe.org)'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-2">
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
                    {lang === 'en' ? 'Paste into the Gem' : 'Gem ထဲသို့ ကူးထည့်ပါ'}
                  </strong>
                  <span className="text-slate-500 text-xs">
                    {lang === 'en'
                      ? 'Copy the formatted prompt and send it to the Gemini Skill Builder Gem.'
                      : 'ထုတ်ပေးလာသော Prompt စာသားကို "ကူးယူပြီး Gem ဖွင့်မည်" ဖြင့် ကူးယူ၍ Gem ထဲသို့ Paste လုပ်ပါ။'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <strong className="block text-slate-900 font-semibold">
                    {lang === 'en' ? 'Review & finalize' : 'စစ်ဆေးပြီး အချောသတ်ပါ'}
                  </strong>
                  <span className="text-slate-500 text-xs">
                    {lang === 'en'
                      ? 'Use follow-up reviews, custom adjustments, and test suites before deployment.'
                      : 'ရရှိလာသော Skill ကို Review၊ Improve သို့မဟုတ် Test လုပ်ရန် Follow-up Prompt များကို ဆက်လက်ထုတ်ယူပါ။'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-950 text-xs space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-amber-900">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>{lang === 'en' ? 'Pro Tips:' : 'ပိုမိုထိရောက်စေမည့် နည်းလမ်းကောင်းများ (Pro Tips):'}</span>
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
                <strong>{lang === 'en' ? 'Iterate Freely:' : 'သဘောထားပွင့်လင်းစွာ ဖြေပါ:'}</strong>{' '}
                {lang === 'en'
                  ? 'If unsure about a question from the Gem, say "decide for me" or "keep standard".'
                  : 'Gem က မေးခွန်းမေးလာပါက မသိသေးသောအချက်ကို "မသတ်မှတ်ရသေး" သို့မဟုတ် "အဆင်ပြေသလို ဆုံးဖြတ်ပေးပါ" ဟု ပြောနိုင်ပါသည်။'}
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
