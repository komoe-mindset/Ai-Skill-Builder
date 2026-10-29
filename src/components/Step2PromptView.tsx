import React, { useState, useRef } from 'react';
import { copyToClipboard, downloadTextFile } from '../utils/helpers';
import { GEMINI_SKILL_BUILDER_GEM_URL } from '../types';
import { Language, TRANSLATIONS } from '../translations';
import {
  Copy,
  Check,
  ExternalLink,
  Download,
  ArrowLeft,
  ArrowRight,
  Bot,
  AlertCircle,
  Info,
} from 'lucide-react';

interface Step2PromptViewProps {
  lang: Language;
  promptText: string;
  onUpdatePrompt: (text: string) => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Step2PromptView: React.FC<Step2PromptViewProps> = ({
  lang,
  promptText,
  onUpdatePrompt,
  onPrev,
  onNext,
}) => {
  const t = TRANSLATIONS[lang];
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleCopy = async () => {
    setCopyFailed(false);
    const success = await copyToClipboard(promptText);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } else {
      setCopyFailed(true);
      // Select textarea content for manual copy
      if (textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.select();
      }
    }
  };

  const handleCopyAndOpenGem = async () => {
    await handleCopy();
    window.open(GEMINI_SKILL_BUILDER_GEM_URL, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = () => {
    downloadTextFile(promptText, 'gemini-skill-prompt.md');
  };

  const charCount = promptText.length;
  const wordCount = promptText.trim() ? promptText.trim().split(/\s+/).length : 0;

  return (
    <div className="p-4 sm:p-8 space-y-6">
      {/* Title */}
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-1">
          {t.step2Title}
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          {t.step2Subtitle}
        </p>
      </div>

      {/* 5-Step Clear Handoff Guidance Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-50/80 via-blue-50/50 to-white border border-indigo-200/90 space-y-3">
        <h3 className="font-extrabold text-sm text-indigo-950 flex items-center gap-2">
          <Bot className="w-4 h-4 text-indigo-600" />
          <span>{t.step2HandoffTitle}</span>
        </h3>
        <ol className="space-y-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
          <li className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              1
            </span>
            <span>{t.step2Handoff1}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              2
            </span>
            <span>{t.step2Handoff2}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              3
            </span>
            <span>{t.step2Handoff3}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              4
            </span>
            <span>{t.step2Handoff4}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              5
            </span>
            <span>{t.step2Handoff5}</span>
          </li>
        </ol>
      </div>

      {/* Clear Honest Label: Intermediate Prompt Notice */}
      <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs leading-relaxed">
        <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <span>{t.step2PromptNotice}</span>
      </div>

      {/* Main Prompt Display Container */}
      <div className="border border-slate-300 rounded-2xl overflow-hidden bg-slate-50/70 shadow-xs">
        {/* Header Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-slate-100 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
            <span>{t.step2PromptLabel}</span>
            <span className="text-slate-400 font-normal">|</span>
            <span className="text-slate-500 font-normal">
              {wordCount} {t.step2Words} ({charCount} {t.step2Chars})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs transition cursor-pointer"
              title={t.step2DownloadPrompt}
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>{t.step2DownloadPrompt}</span>
            </button>

            <a
              href={GEMINI_SKILL_BUILDER_GEM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-indigo-700 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-200 transition cursor-pointer"
              title="Gemini Skill Builder Gem (သီးခြား tab အသစ်တွင် ဖွင့်ပါမည်)"
            >
              <Bot className="w-3.5 h-3.5 text-indigo-600" />
              <span>{t.step2OpenGemBtn}</span>
            </a>
          </div>
        </div>

        {/* Editable Prompt Textarea */}
        <div className="relative">
          <textarea
            ref={textareaRef}
            id="prompt-textarea"
            rows={10}
            value={promptText}
            onChange={(e) => onUpdatePrompt(e.target.value)}
            aria-label={t.step2PromptLabel}
            className="w-full p-4 sm:p-5 bg-white text-slate-900 font-sans text-sm sm:text-base leading-relaxed border-0 outline-none resize-y min-h-[220px]"
          />
        </div>

        {/* Prompt Footer Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:px-4 sm:py-3 bg-white border-t border-slate-200">
          <div className="text-xs text-slate-500">
            {copied ? (
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <Check className="w-4 h-4 text-emerald-600" />
                {t.step2Copied}
              </span>
            ) : copyFailed ? (
              <span className="text-amber-800 font-medium flex items-center gap-1">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                {t.step2ClipboardFallback}
              </span>
            ) : (
              <span>💡 {lang === 'en' ? 'Click below to copy this prompt.' : 'အောက်ပါခလုတ်ဖြင့် Prompt ကို ကူးယူနိုင်ပါသည်။'}</span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              id="copy-prompt-btn"
              onClick={handleCopy}
              className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all min-h-[44px] cursor-pointer shadow-xs ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 hover:bg-slate-900 text-white active:scale-[0.98]'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>{t.step2Copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{t.step2CopyBtn}</span>
                </>
              )}
            </button>

            <button
              type="button"
              id="copy-and-open-gem-btn"
              onClick={handleCopyAndOpenGem}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] shadow-md shadow-blue-600/20 transition min-h-[44px] cursor-pointer"
            >
              <Bot className="w-4 h-4" />
              <span>{t.step2CopyAndOpenGemBtn}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Between Steps */}
      <div className="flex flex-col-reverse xs:flex-row items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={onPrev}
          className="w-full xs:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-xl transition min-h-[46px] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.step2PrevBtn}</span>
        </button>

        <button
          type="button"
          id="step2-next-btn"
          onClick={onNext}
          className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-xl shadow-md shadow-blue-600/20 transition min-h-[46px] cursor-pointer"
        >
          <span>{t.step2NextBtn}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
