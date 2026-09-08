import React from 'react';
import { StepNumber, GEMINI_SKILL_BUILDER_GEM_URL } from '../types';
import { ArrowLeft, ArrowRight, Copy, Check, RotateCcw, ExternalLink, Bot } from 'lucide-react';

interface MobileBottomBarProps {
  currentStep: StepNumber;
  onPrev: () => void;
  onNext: () => void;
  onCopy?: () => void;
  onCopyAndOpenGem?: () => void;
  copied?: boolean;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  currentStep,
  onPrev,
  onNext,
  onCopy,
  onCopyAndOpenGem,
  copied,
}) => {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 py-2.5 shadow-lg safe-bottom">
      <div className="flex items-center gap-2">
        {currentStep > 1 && (
          <button
            type="button"
            onClick={onPrev}
            className="flex-none w-24 inline-flex items-center justify-center gap-1 py-3 px-2 text-xs font-bold text-slate-700 bg-slate-100 active:bg-slate-200 rounded-xl transition min-h-[46px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{currentStep === 4 ? 'ထပ်စစ်' : 'နောက်ပြန်'}</span>
          </button>
        )}

        {currentStep === 1 && (
          <button
            type="button"
            onClick={onNext}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-bold text-white bg-blue-600 active:bg-blue-700 rounded-xl shadow-md shadow-blue-600/25 transition min-h-[48px]"
          >
            <span>Gem ကို မေးရန် စာသားထုတ်မယ်</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}

        {currentStep === 2 && (
          <>
            {onCopyAndOpenGem ? (
              <button
                type="button"
                onClick={onCopyAndOpenGem}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-2 text-xs font-bold rounded-xl transition min-h-[46px] bg-indigo-600 active:bg-indigo-700 text-white shadow-xs"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>{copied ? 'ကူးပြီး ✓' : 'ကူး & Gem ဖွင့်'}</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </button>
            ) : onCopy ? (
              <button
                type="button"
                onClick={onCopy}
                className={`flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-2 text-xs font-bold rounded-xl transition min-h-[46px] ${
                  copied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-800 active:bg-slate-900 text-white'
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
                    <span>စာသားကူး</span>
                  </>
                )}
              </button>
            ) : null}
            <button
              type="button"
              onClick={onNext}
              className="flex-none w-28 inline-flex items-center justify-center gap-1 py-3 px-2 text-xs font-bold text-white bg-blue-600 active:bg-blue-700 rounded-xl shadow-sm shadow-blue-600/20 transition min-h-[46px]"
            >
              <span>အဖြေရပြီ →</span>
            </button>
          </>
        )}

        {currentStep === 3 && (
          <button
            type="button"
            onClick={onNext}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-3.5 px-4 text-xs font-bold text-white bg-blue-600 active:bg-blue-700 rounded-xl shadow-md shadow-blue-600/25 transition min-h-[46px]"
          >
            <span>အပြီးသတ်စစ်မည်</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}

        {currentStep === 4 && (
          <button
            type="button"
            onClick={onNext}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-3.5 px-4 text-xs font-bold text-white bg-blue-600 active:bg-blue-700 rounded-xl shadow-md shadow-blue-600/25 transition min-h-[46px]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>အသစ်တစ်ခု စမည်</span>
          </button>
        )}
      </div>
    </div>
  );
};
