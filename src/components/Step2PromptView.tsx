import React, { useState } from 'react';
import { copyToClipboard, downloadTextFile } from '../utils/helpers';
import { GEMINI_SKILL_BUILDER_GEM_URL } from '../types';
import { Copy, Check, ExternalLink, Download, ArrowLeft, ArrowRight, Lightbulb, Bot } from 'lucide-react';

interface Step2PromptViewProps {
  promptText: string;
  onUpdatePrompt: (text: string) => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Step2PromptView: React.FC<Step2PromptViewProps> = ({
  promptText,
  onUpdatePrompt,
  onPrev,
  onNext,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(promptText);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleCopyAndOpenGem = async () => {
    await handleCopy();
    window.open(GEMINI_SKILL_BUILDER_GEM_URL, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = () => {
    downloadTextFile(promptText, 'skill-builder-prompt.md');
  };

  const charCount = promptText.length;
  const wordCount = promptText.trim() ? promptText.trim().split(/\s+/).length : 0;

  return (
    <div className="p-4 sm:p-8 space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-1">
          ဒီစာသားကို Gem ထဲ ကူးထည့်ပါ
        </h2>
        <p className="text-sm text-slate-500">
          Gem က မေးခွန်းပြန်မေးရင် သိသလောက်ဖြေပါ။ မသိတာကို “မသတ်မှတ်ရသေး” လို့ ပြောလို့ရပါတယ်။
        </p>
      </div>

      {/* Main Prompt Display Container */}
      <div className="border border-slate-300/90 rounded-2xl overflow-hidden bg-slate-50/70 shadow-xs">
        {/* Prompt Header Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-slate-100/90 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span>Gemini Skill Builder Prompt</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-400 font-normal">
              {wordCount} စကားလုံး ({charCount} စာလုံး)
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs transition cursor-pointer"
              title="ဖိုင်အဖြစ် သိမ်းဆည်းရန်"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden xs:inline">သိမ်းရန်</span>
            </button>

            <a
              href={GEMINI_SKILL_BUILDER_GEM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-indigo-700 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-2.5 py-1.5 rounded-lg border border-indigo-200 transition cursor-pointer"
              title="Skill Builder Gem ကို တက်ဘ်အသစ်တွင် ဖွင့်ရန်"
            >
              <Bot className="w-3.5 h-3.5 text-indigo-600" />
              <span>Skill Builder Gem ဖွင့်ရန်</span>
              <ExternalLink className="w-3 h-3 text-indigo-500" />
            </a>
          </div>
        </div>

        {/* Editable Prompt Area */}
        <div className="relative">
          <textarea
            id="prompt-textarea"
            rows={10}
            value={promptText}
            onChange={(e) => onUpdatePrompt(e.target.value)}
            className="w-full p-4 sm:p-5 bg-white text-slate-800 font-sans text-sm sm:text-base leading-relaxed border-0 outline-none resize-y min-h-[240px]"
            placeholder="Prompt စာသား..."
          />
        </div>

        {/* Prompt Footer with Prominent Copy Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:px-4 sm:py-3 bg-white border-t border-slate-200">
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            {copied ? (
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <Check className="w-4 h-4 text-emerald-600" />
                Clipboard သို့ အောင်မြင်စွာ ကူးယူပြီးပါပြီ ✓
              </span>
            ) : (
              <span>ကလစ်တစ်ချက်နှိပ်ရုံဖြင့် စာသားတစ်ခုလုံးကို ကူးယူပါ</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              id="copy-prompt-btn"
              onClick={handleCopy}
              className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all min-h-[44px] cursor-pointer shadow-xs ${
                copied
                  ? 'bg-emerald-600 text-white shadow-emerald-600/20'
                  : 'bg-slate-800 hover:bg-slate-900 active:scale-[0.98] text-white'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>ကူးပြီးပါပြီ</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>စာသားကူးရန်</span>
                </>
              )}
            </button>

            <button
              type="button"
              id="copy-and-open-gem-btn"
              onClick={handleCopyAndOpenGem}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] shadow-md shadow-blue-600/20 transition min-h-[44px] cursor-pointer"
              title="စာသားကို ကူးယူပြီး Skill Builder Gem သို့ တိုက်ရိုက်သွားပါ"
            >
              <Bot className="w-4 h-4" />
              <span>ကူးယူပြီး Gem ဖွင့်မည်</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>
        </div>
      </div>

      {/* Tip Banner */}
      <div className="flex items-start gap-3 p-4 rounded-2xl bg-teal-50/80 border border-teal-200/70 text-teal-950 text-xs sm:text-sm leading-relaxed">
        <div className="p-1.5 rounded-lg bg-teal-100/80 text-teal-700 shrink-0 mt-0.5">
          <Lightbulb className="w-4 h-4" />
        </div>
        <div>
          <strong className="font-bold block text-teal-900 mb-0.5">အရေးကြီး သတိပြုရန် —</strong>
          Gem က ထုတ်ပေးတဲ့ Skill ကို သေချာဖတ်ပါ။ ဖိုင်အမည်၊ code နဲ့ YAML ဖွဲ့စည်းပုံများကို မပြောင်းလဲဘဲ မြန်မာလို ရှင်းပြချက်များကိုသာ သေချာဖတ်ရှုဆန်းစစ်ပါ။
        </div>
      </div>

      {/* Bottom Navigation Actions */}
      <div className="flex flex-col-reverse xs:flex-row items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={onPrev}
          className="w-full xs:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-xl transition min-h-[46px] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>ပြန်ပြင်မည်</span>
        </button>

        <button
          type="button"
          id="step2-next-btn"
          onClick={onNext}
          className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-xl shadow-md shadow-blue-600/20 transition min-h-[46px] cursor-pointer"
        >
          <span>Gem အဖြေ ရပြီ (ဆက်သွားမည်)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
