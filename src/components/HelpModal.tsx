import React from 'react';
import { X, HelpCircle, CheckCircle2, Bot, Layers, ArrowRight, ExternalLink, Lightbulb, BookOpen } from 'lucide-react';
import { GEMINI_SKILL_BUILDER_GEM_URL, GEMINI_SPARK_GUIDE_URL } from '../types';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
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
                Gemini Skill Builder Gem အသုံးပြုနည်း
              </h3>
              <p className="text-xs text-slate-500">
                အသုံးပြုနည်းနှင့် ပိုမိုထိရောက်စေမည့် အကြံပြုချက်များ
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed flex-1">
          {/* Direct Gem Link Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200/80 space-y-2.5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="font-bold text-indigo-950 flex items-center gap-1.5">
                  <Bot className="w-4 h-4 text-indigo-600" />
                  <span>Gemini Skill Builder Gem သို့ တိုက်ရိုက်သွားရန်</span>
                </h4>
                <p className="text-xs text-indigo-900/80 mt-1">
                  Google Gemini အကောင့်ဖြင့် ဝင်ရောက်ပြီး ဤ Gem ကို တိုက်ရိုက် အသုံးပြုနိုင်ပါသည်။
                </p>
              </div>
            </div>

            <a
              href={GEMINI_SKILL_BUILDER_GEM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition"
            >
              <span>Skill Builder Gem ကို ဖွင့်မည်</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Gemini Spark User Guide Website Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200/90 space-y-2.5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="font-bold text-amber-950 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-amber-600" />
                  <span>Gemini Spark User Guide (ဥပမာများဖြင့် လေ့လာရန်)</span>
                </h4>
                <p className="text-xs text-amber-900/80 mt-1 leading-normal">
                  Gemini Spark ကို မည်သို့ အသုံးပြုရမည်နှင့် လက်တွေ့အသုံးချနည်း ဥပမာ (Examples) များကို အသေးစိတ်ရှင်းပြထားသော User Guide ဝဘ်ဆိုဒ် ဖြစ်ပါသည်။
                </p>
              </div>
            </div>

            <a
              href={GEMINI_SPARK_GUIDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition"
            >
              <span>Gemini Spark User Guide ဝဘ်ဆိုဒ်သို့ သွားမည်</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-900">အဓိက အဆင့် (၃) ဆင့်:</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">
                  ၁
                </span>
                <div>
                  <strong className="block text-slate-900 font-semibold">အလုပ်ကို ရှင်းပြပါ</strong>
                  <span className="text-slate-500 text-xs">
                    ဒီ App ထဲတွင် Skill ၏ ရည်ရွယ်ချက်၊ Destination နှင့် အောင်မြင်မှုစံနှုန်းကို ဖြည့်သွင်းပါ။
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">
                  ၂
                </span>
                <div>
                  <strong className="block text-slate-900 font-semibold">Gem ထဲသို့ ကူးထည့်ပါ</strong>
                  <span className="text-slate-500 text-xs">
                    ထုတ်ပေးလာသော Prompt စာသားကို "ကူးယူပြီး Gem ဖွင့်မည်" ဖြင့် ကူးယူ၍ Gem ထဲသို့ Paste လုပ်ပါ။
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">
                  ၃
                </span>
                <div>
                  <strong className="block text-slate-900 font-semibold">စစ်ဆေးပြီး အချောသတ်ပါ</strong>
                  <span className="text-slate-500 text-xs">
                    ရရှိလာသော Skill ကို Review၊ Improve သို့မဟုတ် Test လုပ်ရန် Follow-up Prompt များကို ဆက်လက်ထုတ်ယူပါ။
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-950 text-xs space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-amber-900">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>ပိုမိုထိရောက်စေမည့် နည်းလမ်းကောင်းများ (Pro Tips):</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li><strong>Gem ကို Pin လုပ်ထားပါ:</strong> Gemini ဝဘ်ဆိုဒ် ဘယ်ဘက် Sidebar ထဲတွင် Skill Builder Gem ကို Pin လုပ်ထားပါက အချိန်မရွေး ၁ ချက်နှိပ်ရုံဖြင့် ပြန်သုံးနိုင်ပါသည်။</li>
              <li><strong>Split Screen / Dual Tabs:</strong> မျက်နှာပြင်တစ်ခြမ်းတွင် ဤ Web App ကိုဖွင့်ပြီး အခြားတစ်ခြမ်းတွင် Gem ကို ဖွင့်ထားပါက စာသားကူးထည့်ရန် အလွန်မြန်ဆန်ပါသည်။</li>
              <li><strong>သဘောထားပွင့်လင်းစွာ ဖြေပါ:</strong> Gem က မေးခွန်းမေးလာပါက မသိသေးသောအချက်ကို "မသတ်မှတ်ရသေး" သို့မဟုတ် "အဆင်ပြေသလို ဆုံးဖြတ်ပေးပါ" ဟု ပြောနိုင်ပါသည်။</li>
            </ul>
          </div>
        </div>

        <div className="p-4 border-t border-slate-100 flex justify-end bg-slate-50/50">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer"
          >
            နားလည်ပါပြီ
          </button>
        </div>
      </div>
    </div>
  );
};

