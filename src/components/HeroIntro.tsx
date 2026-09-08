import React from 'react';
import { ArrowRight, Sparkles, ExternalLink, Bot, BookOpen } from 'lucide-react';
import { GEMINI_SKILL_BUILDER_GEM_URL, GEMINI_SPARK_GUIDE_URL } from '../types';

interface HeroIntroProps {
  onStart: () => void;
  onOpenTemplates: () => void;
}

export const HeroIntro: React.FC<HeroIntroProps> = ({
  onStart,
  onOpenTemplates,
}) => {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/90 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/60 p-5 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Column: Heading and description */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Gem ကို ဖွင့်ထားပြီးဆို ဒီမှာ စပါ</span>
            </div>

            <a
              href={GEMINI_SKILL_BUILDER_GEM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/80 hover:bg-indigo-100 transition"
              title="Gemini Skill Builder Gem ကို ဖွင့်ရန်"
            >
              <Bot className="w-3.5 h-3.5 text-indigo-600" />
              <span>Skill Builder Gem</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={GEMINI_SPARK_GUIDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200/80 hover:bg-amber-100 transition"
              title="Gemini Spark အသုံးပြုနည်းနှင့် ဥပမာများ ဖတ်ရှုရန်"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>Gemini Spark User Guide</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-[1.35]">
            AI Skill တစ်ခု <br className="hidden sm:inline" />
            အမြန်ဖန်တီးမည်
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
            အကွက်လေးခု ဖြည့်ပါ။ <strong>Gemini Skill Builder Gem</strong> သို့ တိုက်ရိုက်ပေးပို့ရမည့် စာသားနှင့် စစ်ဆေးချက်များကို ဤ Guide စာမျက်နှာက စနစ်တကျ ပြင်ဆင်ပေးမည်ဖြစ်ပါသည်။
          </p>

          {/* Callout link for Gemini Spark User Guide with examples */}
          <div className="p-2.5 sm:p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                Gemini Spark အသုံးပြုနည်းနှင့် လက်တွေ့ဥပမာများကို လေ့လာလိုပါသလား။
              </span>
            </div>
            <a
              href={GEMINI_SPARK_GUIDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-amber-900 hover:text-amber-950 underline underline-offset-2 shrink-0"
            >
              <span>User Guide ဝဘ်ဆိုဒ်သို့ သွားမည်</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="pt-1 flex flex-wrap items-center gap-2">
            <button
              type="button"
              id="hero-start-btn"
              onClick={onStart}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-600/20 transition cursor-pointer"
            >
              <span>စတင်ဖန်တီးမည်</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              id="hero-templates-btn"
              onClick={onOpenTemplates}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>အသင့်သုံး ပုံစံများ ရွေးမည်</span>
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
                အလုပ်ကို ရှင်းပြ
              </strong>
              <span className="text-[11px] text-slate-500">
                လိုချင်သည့် AI လုပ်ဆောင်ချက်ကို ဖော်ပြပါ
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-2xs">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-extrabold text-sm flex items-center justify-center shrink-0">
              2
            </div>
            <div>
              <strong className="block text-xs sm:text-sm font-bold text-slate-800">
                Gem ထဲ ကူးထည့်
              </strong>
              <span className="text-[11px] text-slate-500">
                ထုတ်ပေးသော စာသားကို Gem သို့ ပို့ပါ
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-2xs">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-sm flex items-center justify-center shrink-0">
              3
            </div>
            <div>
              <strong className="block text-xs sm:text-sm font-bold text-slate-800">
                စစ်ပြီး ပြင်ဆင်
              </strong>
              <span className="text-[11px] text-slate-500">
                Review, Improve & Test စစ်ဆေးပါ
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

