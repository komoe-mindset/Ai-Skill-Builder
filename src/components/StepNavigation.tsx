import React from 'react';
import { StepNumber } from '../types';
import { Check, Edit3, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Language, TRANSLATIONS } from '../translations';

interface StepNavigationProps {
  lang: Language;
  currentStep: StepNumber;
  maxReachedStep: number;
  onSelectStep: (step: StepNumber) => void;
}

export const StepNavigation: React.FC<StepNavigationProps> = ({
  lang,
  currentStep,
  maxReachedStep,
  onSelectStep,
}) => {
  const t = TRANSLATIONS[lang];
  const progressPercent = (currentStep / 4) * 100;

  const stepTitles = [
    t.step1Nav,
    t.step2Nav,
    t.step3Nav,
    t.step4Nav,
  ];

  const fullTitles = lang === 'en'
    ? ['Define Task', 'Send to Gem', 'Review & Refine', 'Final Check']
    : ['အလုပ်သတ်မှတ်ခြင်း', 'Gem ကို မေးခြင်း', 'စစ်ဆေးပြင်ဆင်ခြင်း', 'အပြီးသတ်စစ်ဆေးခြင်း'];

  return (
    <div className="bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-3.5 sm:py-4">
      {/* Top indicator & step title */}
      <div className="flex items-center justify-between gap-3 text-xs sm:text-sm mb-2.5">
        <div className="flex items-center gap-2">
          <span className="font-bold text-blue-600 bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded-md">
            {lang === 'en' ? `Step ${currentStep} of 4` : `အဆင့် ${currentStep} / ၄`}
          </span>
          <span className="font-semibold text-slate-700 hidden xs:inline">
            {fullTitles[currentStep - 1]}
          </span>
        </div>
        <span className="font-medium text-slate-500 text-xs">
          {lang === 'en' ? `Progress: ${Math.round(progressPercent)}%` : `ပြီးစီးမှု: ${Math.round(progressPercent)}%`}
        </span>
      </div>

      {/* Progress Track */}
      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 mb-3.5 shadow-inner">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
          role="progressbar"
          aria-valuenow={progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      {/* Touch-Friendly Step Buttons */}
      <div className="grid grid-cols-4 gap-1 sm:gap-2">
        {[1, 2, 3, 4].map((num) => {
          const stepNum = num as StepNumber;
          const isActive = currentStep === stepNum;
          const isCompleted = currentStep > stepNum;
          const isAccessible = stepNum <= maxReachedStep;

          return (
            <button
              key={stepNum}
              type="button"
              id={`step-nav-btn-${stepNum}`}
              onClick={() => isAccessible && onSelectStep(stepNum)}
              disabled={!isAccessible}
              className={`flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 py-2 px-1.5 sm:px-3 rounded-xl transition-all duration-200 text-left min-h-[44px] ${
                isActive
                  ? 'bg-blue-600 text-white font-bold shadow-sm shadow-blue-600/25 ring-2 ring-blue-600/20'
                  : isCompleted
                  ? 'bg-emerald-50 text-emerald-800 font-medium hover:bg-emerald-100/80 border border-emerald-200/60'
                  : isAccessible
                  ? 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/70'
                  : 'bg-slate-50/50 text-slate-300 border border-slate-100 cursor-not-allowed opacity-60'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full text-[11px] font-bold flex items-center justify-center shrink-0 ${
                  isActive
                    ? 'bg-white text-blue-700'
                    : isCompleted
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                {isCompleted ? <Check className="w-3 h-3 stroke-[3]" /> : stepNum}
              </div>
              <span className="text-xs truncate hidden sm:inline">
                {stepTitles[stepNum - 1]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
