import React, { useState } from 'react';
import { FollowupMode, GEMINI_SKILL_BUILDER_GEM_URL } from '../types';
import { buildFollowupText, copyToClipboard } from '../utils/helpers';
import {
  Search,
  PenTool,
  FlaskConical,
  Copy,
  Check,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Bot,
} from 'lucide-react';

interface Step3ReviewTestProps {
  onPrev: () => void;
  onNext: () => void;
}

const CHANGE_SUGGESTIONS = [
  'အဖြေကို တိုတိုရေးပြီး table တစ်ခု ထည့်ပေးပါ',
  'English နှင့် မြန်မာ ၂ မျိုးစလုံး ထည့်သွင်းပေးပါ',
  'Error ဖြစ်လာရင် ဖြေရှင်းမည့်နည်းလမ်း အဆင့်ဆင့် ထည့်ပေးပါ',
  'ဥပမာ sample ၃ ခု ထပ်ဆောင်း ပြသပေးပါ',
];

export const Step3ReviewTest: React.FC<Step3ReviewTestProps> = ({
  onPrev,
  onNext,
}) => {
  const [mode, setMode] = useState<FollowupMode>('review');
  const [changeRequest, setChangeRequest] = useState('');
  const [customPrompt, setCustomPrompt] = useState('');
  const [isEditingPrompt, setIsEditingPrompt] = useState(false);
  const [copied, setCopied] = useState(false);

  // Compute active prompt
  const generatedText = buildFollowupText(mode, changeRequest);
  const displayPrompt = isEditingPrompt ? customPrompt : generatedText;

  const handleSelectMode = (newMode: FollowupMode) => {
    setMode(newMode);
    setIsEditingPrompt(false);
    setCustomPrompt('');
  };

  const handleCopy = async () => {
    const success = await copyToClipboard(displayPrompt);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleCopyAndOpenGem = async () => {
    await handleCopy();
    window.open(GEMINI_SKILL_BUILDER_GEM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="p-4 sm:p-8 space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-1">
          အခု ဘာဆက်လုပ်ချင်ပါသလဲ။
        </h2>
        <p className="text-sm text-slate-500">
          တစ်ခုရွေးပါ။ Gem ကို ဆက်မေးရမည့် စာသား အလိုအလျောက် ထွက်ပေါ်လာပါမည်။
        </p>
      </div>

      {/* 3 Choice Cards - Touch Friendly */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Choice 1: Review */}
        <button
          type="button"
          id="choice-review-btn"
          onClick={() => handleSelectMode('review')}
          className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[130px] ${
            mode === 'review'
              ? 'bg-blue-50/80 border-blue-600 shadow-sm shadow-blue-600/10 ring-2 ring-blue-600/20'
              : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <div
                className={`p-2 rounded-xl ${
                  mode === 'review'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                <Search className="w-5 h-5" />
              </div>
              {mode === 'review' && (
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              )}
            </div>
            <strong className="block text-slate-900 font-extrabold text-sm sm:text-base mb-1">
              Skill ကို စစ်ဆေးမည်
            </strong>
            <p className="text-xs text-slate-500 leading-relaxed">
              မရှင်းတာ၊ ပျောက်နေတာနဲ့ tool မရှိဘဲ ကတိပေးထားတာ ရှိမရှိ စစ်ခိုင်းရန်
            </p>
          </div>
        </button>

        {/* Choice 2: Improve */}
        <button
          type="button"
          id="choice-improve-btn"
          onClick={() => handleSelectMode('improve')}
          className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[130px] ${
            mode === 'improve'
              ? 'bg-blue-50/80 border-blue-600 shadow-sm shadow-blue-600/10 ring-2 ring-blue-600/20'
              : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <div
                className={`p-2 rounded-xl ${
                  mode === 'improve'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                <PenTool className="w-5 h-5" />
              </div>
              {mode === 'improve' && (
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              )}
            </div>
            <strong className="block text-slate-900 font-extrabold text-sm sm:text-base mb-1">
              Skill ကို ပြင်ဆင်မည်
            </strong>
            <p className="text-xs text-slate-500 leading-relaxed">
              မကြိုက်သည့်အချက် ပြောပြီး မူလရည်ရွယ်ချက် မပျက်အောင် ပြန်ရေးခိုင်းရန်
            </p>
          </div>
        </button>

        {/* Choice 3: Test */}
        <button
          type="button"
          id="choice-test-btn"
          onClick={() => handleSelectMode('test')}
          className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[130px] ${
            mode === 'test'
              ? 'bg-blue-50/80 border-blue-600 shadow-sm shadow-blue-600/10 ring-2 ring-blue-600/20'
              : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <div
                className={`p-2 rounded-xl ${
                  mode === 'test'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                <FlaskConical className="w-5 h-5" />
              </div>
              {mode === 'test' && (
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              )}
            </div>
            <strong className="block text-slate-900 font-extrabold text-sm sm:text-base mb-1">
              Skill ကို စမ်းသပ်မည်
            </strong>
            <p className="text-xs text-slate-500 leading-relaxed">
              ပုံမှန်၊ အချက်အလက်မပြည့်စုံနှင့် ခက်ခဲသောအခြေအနေများကို စမ်းသပ်ရန်
            </p>
          </div>
        </button>
      </div>

      {/* Optional Modification Input for 'improve' Mode */}
      {mode === 'improve' && (
        <div className="space-y-2 p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80">
          <label
            htmlFor="change-input"
            className="block text-xs sm:text-sm font-bold text-amber-950"
          >
            ဘာပြင်ချင်ပါသလဲ။ (စိတ်ကြိုက်ဖြည့်နိုင်သည်)
          </label>
          <input
            id="change-input"
            type="text"
            value={changeRequest}
            onChange={(e) => {
              setChangeRequest(e.target.value);
              setIsEditingPrompt(false);
            }}
            placeholder="ဥပမာ — အဖြေကို တိုတိုရေးပြီး table တစ်ခု ထည့်ပေးပါ"
            className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-amber-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 bg-white text-slate-800 placeholder:text-slate-400 outline-none"
          />

          {/* Quick suggestions chips */}
          <div className="pt-1">
            <span className="text-[11px] font-semibold text-amber-800 flex items-center gap-1 mb-1.5">
              <Sparkles className="w-3 h-3" /> အမြန်ရွေးချယ်နိုင်သော အကြံပြုချက်များ:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {CHANGE_SUGGESTIONS.map((sug, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setChangeRequest(sug);
                    setIsEditingPrompt(false);
                  }}
                  className="text-xs px-2.5 py-1 rounded-lg bg-white hover:bg-amber-100/80 text-amber-900 border border-amber-200/80 transition"
                >
                  {sug}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Generated Followup Prompt Box */}
      <div className="border border-slate-300 rounded-2xl overflow-hidden bg-slate-50/60 shadow-xs">
        <div className="flex items-center justify-between px-4 py-2 bg-slate-100 border-b border-slate-200 text-xs font-semibold text-slate-600">
          <span>Gem ကို ဆက်မေးရန် စာသား (Follow-up Prompt)</span>
          <span className="text-slate-400">
            {displayPrompt.length} စာလုံး
          </span>
        </div>

        <textarea
          rows={6}
          value={displayPrompt}
          onChange={(e) => {
            setIsEditingPrompt(true);
            setCustomPrompt(e.target.value);
          }}
          className="w-full p-4 bg-white text-slate-800 text-sm sm:text-base leading-relaxed border-0 outline-none resize-y min-h-[140px]"
        />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-white border-t border-slate-200">
          <div className="text-xs text-slate-500">
            {copied ? (
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> ဆက်မေးရန် စာသားကို ကူးယူပြီးပါပြီ ✓
              </span>
            ) : (
              <span>Gemini Gem စကားပြောခန်းထဲသို့ ဤစာသားကို ကူးထည့်ပါ</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              id="copy-followup-btn"
              onClick={handleCopy}
              className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all min-h-[42px] cursor-pointer ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 hover:bg-slate-900 active:scale-[0.98] text-white'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>ကူးပြီး</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>စာသားကူးရန်</span>
                </>
              )}
            </button>

            <button
              type="button"
              id="copy-and-open-gem-followup-btn"
              onClick={handleCopyAndOpenGem}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] shadow-xs cursor-pointer min-h-[42px]"
              title="စာသားကို ကူးယူပြီး Skill Builder Gem သို့ တိုက်ရိုက်သွားပါ"
            >
              <Bot className="w-4 h-4" />
              <span>ကူးယူပြီး Gem ဖွင့်မည်</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Actions */}
      <div className="flex flex-col-reverse xs:flex-row items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={onPrev}
          className="w-full xs:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-xl transition min-h-[46px] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>နောက်ပြန်</span>
        </button>

        <button
          type="button"
          id="step3-next-btn"
          onClick={onNext}
          className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-xl shadow-md shadow-blue-600/20 transition min-h-[46px] cursor-pointer"
        >
          <span>အပြီးသတ်စစ်ဆေးမည်</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
