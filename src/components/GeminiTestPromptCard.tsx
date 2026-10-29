import React, { useState } from 'react';
import { Copy, Check, Bot, FlaskConical, ExternalLink, HelpCircle } from 'lucide-react';
import { Language, TRANSLATIONS } from '../translations';
import { GEMINI_SKILL_BUILDER_GEM_URL } from '../types';
import { copyToClipboard } from '../utils/helpers';

interface GeminiTestPromptCardProps {
  lang: Language;
  className?: string;
  showGeminiLink?: boolean;
}

export const EXACT_TEST_PROMPT =
  "Let's explore what it does with an example. Make up a realistic user prompt and then use the full Skill end to end.";

export const GeminiTestPromptCard: React.FC<GeminiTestPromptCardProps> = ({
  lang,
  className = '',
  showGeminiLink = true,
}) => {
  const t = TRANSLATIONS[lang];
  const [copied, setCopied] = useState(false);

  const handleCopyTestPrompt = async () => {
    const success = await copyToClipboard(EXACT_TEST_PROMPT);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section
      aria-labelledby="gemini-test-prompt-heading"
      className={`rounded-2xl border-2 border-indigo-200/90 bg-gradient-to-br from-indigo-50/70 via-white to-blue-50/50 shadow-xs overflow-hidden ${className}`}
    >
      {/* Header bar */}
      <div className="px-4 py-3 bg-indigo-100/70 border-b border-indigo-200/80 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-600 text-white shadow-xs">
            <FlaskConical className="w-4 h-4" />
          </div>
          <div>
            <h3
              id="gemini-test-prompt-heading"
              className="text-xs sm:text-sm font-extrabold text-indigo-950 tracking-tight"
            >
              {t.testPromptCardTitle}
            </h3>
          </div>
        </div>

        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-200/70 text-indigo-900">
          Testing
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-3.5">
        {/* Test Prompt Display Box */}
        <div className="relative rounded-xl border border-indigo-200 bg-white p-3.5 shadow-2xs">
          <p className="text-xs sm:text-sm font-mono text-slate-800 leading-relaxed font-semibold selection:bg-indigo-200">
            {EXACT_TEST_PROMPT}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-0.5">
          <div className="flex items-center gap-2">
            <button
              type="button"
              id="copy-test-prompt-btn"
              onClick={handleCopyTestPrompt}
              aria-label={t.testPromptCardCopyBtn}
              className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer min-h-[42px] ${
                copied
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20'
                  : 'bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white shadow-indigo-600/20'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  <span>{t.testPromptCardCopied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{t.testPromptCardCopyBtn}</span>
                </>
              )}
            </button>

            {showGeminiLink && (
              <a
                href={GEMINI_SKILL_BUILDER_GEM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Gemini Skill Builder Gem in a new tab"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-indigo-700 bg-white hover:bg-indigo-50/60 border border-slate-300 hover:border-indigo-300 shadow-2xs transition min-h-[42px]"
              >
                <Bot className="w-4 h-4 text-indigo-600" />
                <span>Gemini Gem</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            )}
          </div>
        </div>

        {/* Helper Note in Myanmar and English */}
        <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs sm:text-sm leading-relaxed">
          <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="font-medium text-amber-900">
            {t.testPromptCardHelper}
          </p>
        </div>
      </div>
    </section>
  );
};
