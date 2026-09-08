import React from 'react';
import { StepNumber } from '../types';
import { Check, Edit3, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';

interface StepNavigationProps {
  currentStep: StepNumber;
  maxReachedStep: number;
  onSelectStep: (step: StepNumber) => void;
}

const STEP_DATA: { number: StepNumber; title: string; shortTitle: string; icon: React.ElementType }[] = [
  { number: 1, title: 'အလုပ်သတ်မှတ်ခြင်း', shortTitle: 'သတ်မှတ်ခြင်း', icon: Edit3 },
  { number: 2, title: 'Gem ကို မေးခြင်း', shortTitle: 'မေးခြင်း', icon: MessageSquare },
  { number: 3, title: 'စစ်ဆေးပြင်ဆင်ခြင်း', shortTitle: 'စစ်ဆေးခြင်း', icon: CheckCircle2 },
  { number: 4, title: 'အပြီးသတ်စစ်ဆေးခြင်း', shortTitle: 'အပြီးသတ်', icon: ShieldCheck },
];

export const StepNavigation: React.FC<StepNavigationProps> = ({
  currentStep,
  maxReachedStep,
  onSelectStep,
}) => {
  const progressPercent = (currentStep / 4) * 100;

  return (
    <div className="bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-3.5 sm:py-4">
      {/* Top indicator & step title */}
      <div className="flex items-center justify-between gap-3 text-xs sm:text-sm mb-2.5">
        <div className="flex items-center gap-2">
          <span className="font-bold text-blue-600 bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded-md">
            အဆင့် {currentStep} / ၄
          </span>
          <span className="font-semibold text-slate-700 hidden xs:inline">
            {STEP_DATA[currentStep - 1].title}
          </span>
        </div>
        <span className="font-medium text-slate-500 text-xs">
          ပြီးစီးမှု: {Math.round(progressPercent)}%
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
        {STEP_DATA.map((step) => {
          const isActive = currentStep === step.number;
          const isCompleted = currentStep > step.number;
          const isAccessible = step.number <= maxReachedStep;
          const StepIcon = step.icon;

          return (
            <button
              key={step.number}
              type="button"
              id={`step-nav-btn-${step.number}`}
              onClick={() => isAccessible && onSelectStep(step.number)}
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
                {isCompleted ? <Check className="w-3 h-3 stroke-[3]" /> : step.number}
              </div>
              <span className="text-xs truncate hidden sm:inline">
                {step.shortTitle}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
