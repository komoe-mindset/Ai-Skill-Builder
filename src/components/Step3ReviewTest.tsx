import React, { useState } from 'react';
import { FollowupMode, GEMINI_SKILL_BUILDER_GEM_URL } from '../types';
import { buildFollowupText, copyToClipboard } from '../utils/helpers';
import { Language, TRANSLATIONS } from '../translations';
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
  Info,
} from 'lucide-react';
import { GeminiTestPromptCard } from './GeminiTestPromptCard';

interface Step3ReviewTestProps {
  lang: Language;
  onPrev: () => void;
  onNext: () => void;
}

const CHANGE_SUGGESTIONS_MY = [
  'အဖြေကို တိုတိုရေးပြီး table တစ်ခု ထည့်ပေးပါ',
  'English နှင့် မြန်မာ ၂ မျိုးစလုံး ထည့်သွင်းပေးပါ',
  'Error ဖြစ်လာရင် ဖြေရှင်းမည့်နည်းလမ်း အဆင့်ဆင့် ထည့်ပေးပါ',
  'ဥပမာ sample ၃ ခု ထပ်ဆောင်း ပြသပေးပါ',
];

const CHANGE_SUGGESTIONS_EN = [
  'Keep responses concise and organize results in a markdown table',
  'Provide full dual-language support in English and Myanmar',
  'Add step-by-step error recovery and fallback troubleshooting',
  'Include 3 realistic concrete examples in the output',
];

export const Step3ReviewTest: React.FC<Step3ReviewTestProps> = ({
  lang,
  onPrev,
  onNext,
}) => {
  const t = TRANSLATIONS[lang];
  const suggestions = lang === 'en' ? CHANGE_SUGGESTIONS_EN : CHANGE_SUGGESTIONS_MY;
  const [mode, setMode] = useState<FollowupMode>('review');
  const [changeRequest, setChangeRequest] = useState('');
  const [customPrompt, setCustomPrompt] = useState('');
  const [isEditingPrompt, setIsEditingPrompt] = useState(false);
  const [copied, setCopied] = useState(false);

  // Compute active prompt
  const generatedText = buildFollowupText(mode, changeRequest, lang);
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
      {/* Title */}
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-1">
          {t.step3Title}
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          {t.step3Subtitle}
        </p>
      </div>

      {/* Intro explanation */}
      <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-blue-950 text-xs sm:text-sm leading-relaxed">
        <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
        <span>{t.step3Intro}</span>
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
              {t.modeReviewTitle}
            </strong>
            <p className="text-xs text-slate-500 leading-relaxed">
              {t.modeReviewDesc}
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
              {t.modeImproveTitle}
            </strong>
            <p className="text-xs text-slate-500 leading-relaxed">
              {t.modeImproveDesc}
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
              {t.modeTestTitle}
            </strong>
            <p className="text-xs text-slate-500 leading-relaxed">
              {t.modeTestDesc}
            </p>
          </div>
        </button>
      </div>

      {/* Input area if Improve mode is selected */}
      {mode === 'improve' && (
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 animate-in fade-in duration-200">
          <label
            htmlFor="improve-input"
            className="block text-xs sm:text-sm font-bold text-slate-800"
          >
            {t.improveLabel}
          </label>
          <input
            id="improve-input"
            type="text"
            value={changeRequest}
            onChange={(e) => setChangeRequest(e.target.value)}
            placeholder={t.improvePlaceholder}
            className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15 bg-white text-slate-900 outline-none transition"
          />

          {/* Quick suggestions */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              {t.quickSuggestionsTitle}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {suggestions.map((sug, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setChangeRequest(sug)}
                  className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white hover:bg-blue-50 text-slate-600 hover:text-blue-700 border border-slate-200 shadow-2xs transition cursor-pointer"
                >
                  + {sug}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Generated Follow-up Prompt Box */}
      <div className="border border-slate-300 rounded-2xl overflow-hidden bg-slate-50/70 shadow-xs space-y-0">
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100 border-b border-slate-200">
          <span className="text-xs font-bold text-slate-800">
            {t.promptGeneratedForMode}
          </span>
          <button
            type="button"
            onClick={() => {
              if (!isEditingPrompt) {
                setCustomPrompt(displayPrompt);
                setIsEditingPrompt(true);
              } else {
                setIsEditingPrompt(false);
              }
            }}
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            {isEditingPrompt ? '✕ Cancel Edit' : `✏️ ${t.editPromptBtn}`}
          </button>
        </div>

        <div className="p-4 bg-white">
          {isEditingPrompt ? (
            <textarea
              rows={4}
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              className="w-full text-xs sm:text-sm text-slate-900 leading-relaxed outline-none border border-blue-400 p-2.5 rounded-xl resize-y"
            />
          ) : (
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans whitespace-pre-wrap">
              {displayPrompt}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 p-3 sm:px-4 bg-slate-50 border-t border-slate-200">
          <span className="text-xs text-slate-500">
            {copied ? (
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <Check className="w-4 h-4 text-emerald-600" />
                {t.step3Copied}
              </span>
            ) : (
              <span>💡 {lang === 'en' ? 'Copy and paste this into Gemini.' : 'Gemini ထဲတွင် ထပ်မံမေးမြန်းရန် ကူးယူနိုင်ပါသည်။'}</span>
            )}
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              id="copy-followup-prompt-btn"
              onClick={handleCopy}
              className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 hover:bg-slate-900 text-white'
              }`}
            >
              <Copy className="w-4 h-4" />
              <span>{t.step3CopyPrompt}</span>
            </button>

            <button
              type="button"
              onClick={handleCopyAndOpenGem}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xs transition cursor-pointer"
            >
              <Bot className="w-4 h-4" />
              <span>{t.step3CopyAndOpenGem}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dedicated Gemini Testing Instructions Card */}
      <GeminiTestPromptCard lang={lang} />

      {/* Bottom Navigation Actions */}
      <div className="flex flex-col-reverse xs:flex-row items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={onPrev}
          className="w-full xs:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-xl transition min-h-[46px] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.step3PrevBtn}</span>
        </button>

        <button
          type="button"
          id="step3-next-btn"
          onClick={onNext}
          className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-xl shadow-md shadow-blue-600/20 transition min-h-[46px] cursor-pointer"
        >
          <span>{t.step3NextBtn}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
