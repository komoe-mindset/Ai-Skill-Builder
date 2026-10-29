import React from 'react';
import { StepNumber } from '../types';
import { Check } from 'lucide-react';
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

  // Genuinely completed steps: only steps strictly before maxReachedStep or completed
  // Step 1 is not completed until the user clicks Submit and reaches Step 2
  const completedStepsCount = Math.max(0, maxReachedStep - 1);
  const completedPercent = Math.round((completedStepsCount / 4) * 100);

  const stepTitles = [
    t.step1Nav,
    t.step2Nav,
    t.step3Nav,
    t.step4Nav,
  ];

  const stepGuides = [
    t.step1CurrentGuide,
    t.step2CurrentGuide,
    t.step3CurrentGuide,
    t.step4CurrentGuide,
  ];

  return (
    <nav
      aria-label="Workflow progress"
      className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-3.5 sm:py-4"
    >
      {/* Top Header: Step Indicator & True Completion Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 text-xs sm:text-sm mb-2.5">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-bold text-blue-700 bg-blue-50 border border-blue-200/80 px-2.5 py-0.5 rounded-lg">
            {lang === 'en' ? `Step ${currentStep} of 4` : `အဆင့် ${currentStep} / ၄`}
          </span>
          <span className="font-extrabold text-slate-800 text-sm sm:text-base">
            {stepTitles[currentStep - 1]}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-500 font-medium">
            {t.stepProgressLabel}:
          </span>
          <span className="font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
            {completedPercent}% {completedPercent === 100 ? t.stepStatusCompleted : ''}
          </span>
        </div>
      </div>

      {/* Progress Track: reflects genuinely completed steps */}
      <div
        className="h-2 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 mb-2.5 shadow-inner"
        role="progressbar"
        aria-valuenow={completedPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Progress: ${completedPercent}%`}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 ease-out"
          style={{ width: `${completedPercent}%` }}
        />
      </div>

      {/* Current Step One-sentence Action Guide */}
      <p className="text-xs text-slate-600 font-medium mb-3.5 leading-relaxed bg-blue-50/50 p-2 rounded-xl border border-blue-100/70">
        👉 {stepGuides[currentStep - 1]}
      </p>

      {/* 4 Consistent Step Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
        {[1, 2, 3, 4].map((num) => {
          const stepNum = num as StepNumber;
          const isActive = currentStep === stepNum;
          const isDone = stepNum < currentStep || (stepNum < maxReachedStep && !isActive);
          const isAccessible = stepNum <= maxReachedStep;

          return (
            <button
              key={stepNum}
              type="button"
              id={`step-nav-btn-${stepNum}`}
              onClick={() => isAccessible && onSelectStep(stepNum)}
              disabled={!isAccessible}
              aria-current={isActive ? 'step' : undefined}
              className={`flex items-center gap-2 py-2 px-2.5 sm:px-3 rounded-xl transition-all duration-150 text-left min-h-[44px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                isActive
                  ? 'bg-blue-600 text-white font-bold shadow-sm shadow-blue-600/25 ring-2 ring-blue-600/20'
                  : isDone
                  ? 'bg-emerald-50 text-emerald-900 font-semibold hover:bg-emerald-100/80 border border-emerald-200/80'
                  : isAccessible
                  ? 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                  : 'bg-slate-50 text-slate-500 border border-slate-200/60 cursor-not-allowed opacity-75'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full text-[11px] font-bold flex items-center justify-center shrink-0 ${
                  isActive
                    ? 'bg-white text-blue-700'
                    : isDone
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-200 text-slate-700'
                }`}
              >
                {isDone ? <Check className="w-3 h-3 stroke-[3]" /> : stepNum}
              </div>
              <span className="text-xs truncate">
                {stepTitles[stepNum - 1]}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
