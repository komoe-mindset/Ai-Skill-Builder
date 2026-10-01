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
} from 'lucide-react';

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
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-1">
          {t.step3Title}
        </h2>
        <p className="text-sm text-slate-500">
          {t.step3Subtitle}
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

      {/* Dynamic Sub-form for Mode 'improve' */}
      {mode === 'improve' && (
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 animate-in fade-in duration-200">
          <label
            htmlFor="change-input"
            className="block text-xs sm:text-sm font-bold text-slate-800"
          >
            {t.improveLabel}
          </label>
          <input
            id="change-input"
            type="text"
            value={changeRequest}
            onChange={(e) => {
              setChangeRequest(e.target.value);
              setIsEditingPrompt(false);
            }}
            placeholder={t.improvePlaceholder}
            className="w-full px-3.5 py-2.5 text-sm sm:text-base rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15 bg-white text-slate-800 outline-none transition"
          />

          {/* Quick Suggestions Pills */}
          <div className="pt-1">
            <span className="text-[11px] font-semibold text-slate-500 block mb-1.5">
              {t.quickSuggestionsTitle}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {suggestions.map((suggestion, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setChangeRequest(suggestion);
                    setIsEditingPrompt(false);
                  }}
                  className="text-xs px-2.5 py-1 rounded-lg bg-white hover:bg-blue-50 hover:text-blue-700 border border-slate-200 transition text-slate-600 cursor-pointer"
                >
                  + {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Generated Follow-up Prompt Box */}
      <div className="border border-slate-300 rounded-2xl overflow-hidden bg-white shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-slate-100 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.promptGeneratedForMode}</span>
          </div>

          <button
            type="button"
            onClick={() => {
              if (!isEditingPrompt) {
                setCustomPrompt(generatedText);
              }
              setIsEditingPrompt(!isEditingPrompt);
            }}
            className="text-xs font-medium text-slate-600 hover:text-blue-600 underline cursor-pointer"
          >
            {isEditingPrompt ? 'Auto' : t.editPromptBtn}
          </button>
        </div>

        <div className="p-4 sm:p-5 bg-slate-50/50">
          {isEditingPrompt ? (
            <textarea
              rows={4}
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm leading-relaxed outline-none focus:border-blue-600 resize-y"
            />
          ) : (
            <p className="text-xs sm:text-sm text-slate-800 font-sans leading-relaxed whitespace-pre-wrap select-all">
              {displayPrompt}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-white border-t border-slate-200">
          <div className="text-xs text-slate-500">
            {copied ? (
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <Check className="w-4 h-4 text-emerald-600" />
                {t.step2CopySuccess}
              </span>
            ) : isEditingPrompt ? (
              <span className="text-amber-600 font-medium">
                {t.editingPromptBadge}
              </span>
            ) : (
              <span>{t.step2CopyHint}</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              id="copy-followup-btn"
              onClick={handleCopy}
              className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all min-h-[44px] cursor-pointer shadow-xs ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 hover:bg-slate-900 active:scale-[0.98] text-white'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>{t.step3Copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{t.step3CopyPrompt}</span>
                </>
              )}
            </button>

            <button
              type="button"
              id="copy-and-open-gem-followup-btn"
              onClick={handleCopyAndOpenGem}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] shadow-md shadow-blue-600/20 transition min-h-[44px] cursor-pointer"
              title={t.step3CopyAndOpenGem}
            >
              <Bot className="w-4 h-4" />
              <span>{t.step3CopyAndOpenGem}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-col-reverse xs:flex-row items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={onPrev}
          className="w-full xs:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition min-h-[46px] cursor-pointer"
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
