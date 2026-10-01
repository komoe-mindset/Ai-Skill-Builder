import React, { useRef } from 'react';
import { DestinationType, SkillFormData, SPARK_SKILL_STUDIO_URL } from '../types';
import { getPresetTemplates } from '../data/presets';
import { Language, TRANSLATIONS } from '../translations';
import {
  ArrowRight,
  Sparkles,
  FolderArchive,
  Bot,
  Layers,
  X,
  AlertCircle,
  ExternalLink,
  Cpu,
} from 'lucide-react';

interface Step1TaskFormProps {
  lang: Language;
  formData: SkillFormData;
  onChange: (data: Partial<SkillFormData>) => void;
  onSubmit: () => void;
  error: string;
}

export const Step1TaskForm: React.FC<Step1TaskFormProps> = ({
  lang,
  formData,
  onChange,
  onSubmit,
  error,
}) => {
  const t = TRANSLATIONS[lang];
  const presets = getPresetTemplates(lang);
  const taskRef = useRef<HTMLTextAreaElement>(null);
  const successRef = useRef<HTMLInputElement>(null);

  const handleApplyPreset = (presetData: SkillFormData) => {
    onChange(presetData);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      onSubmit();
    }
  };

  return (
    <div className="p-4 sm:p-8">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-1">
          {t.step1Title}
        </h2>
        <p className="text-sm text-slate-500">
          {t.step1Subtitle}
        </p>
      </div>

      {/* Quick Presets Carousel / Badges for fast Mobile Tap */}
      <div className="mb-6 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-50/70 via-indigo-50/50 to-cyan-50/70 border border-blue-100">
        <div className="flex items-center gap-1.5 mb-2.5">
          <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span className="text-xs font-bold text-slate-800">
            {t.step1QuickFill}:
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {presets.map((preset) => {
            const isSelected =
              formData.task === preset.data.task &&
              formData.destination === preset.data.destination;
            return (
              <button
                key={preset.id}
                type="button"
                id={`preset-btn-${preset.id}`}
                onClick={() => handleApplyPreset(preset.data)}
                className={`text-xs font-semibold px-2.5 py-1.5 rounded-xl border transition-all duration-150 min-h-[38px] flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-50 hover:text-blue-600 border-slate-200 shadow-2xs'
                }`}
              >
                <span>{preset.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        onKeyDown={handleKeyDown}
        className="space-y-5"
      >
        {/* Field 1: Task */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="task-input"
              className="text-sm font-bold text-slate-800 flex items-center gap-1"
            >
              <span>{t.fieldTaskLabel}</span>
              <span className="text-rose-500 text-xs">*</span>
            </label>
            {formData.task && (
              <button
                type="button"
                onClick={() => onChange({ task: '' })}
                className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-0.5 cursor-pointer"
              >
                <X className="w-3 h-3" /> {t.step1Clear}
              </button>
            )}
          </div>
          <div className="relative">
            <textarea
              ref={taskRef}
              id="task-input"
              rows={3}
              value={formData.task}
              onChange={(e) => onChange({ task: e.target.value })}
              placeholder={t.fieldTaskPlaceholder}
              className="w-full px-3.5 py-2.5 text-sm sm:text-base rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15 bg-white text-slate-800 placeholder:text-slate-400 outline-none transition resize-y min-h-[96px]"
            />
          </div>
        </div>

        {/* Field 2: Destination */}
        <div className="space-y-1.5">
          <label
            htmlFor="destination-select"
            className="text-sm font-bold text-slate-800 flex items-center gap-1.5"
          >
            <span>{t.fieldDestLabel}</span>
          </label>
          <div className="relative">
            <select
              id="destination-select"
              value={formData.destination}
              onChange={(e) =>
                onChange({ destination: e.target.value as DestinationType })
              }
              className="w-full px-3.5 py-3 text-sm sm:text-base rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15 bg-white text-slate-800 outline-none transition appearance-none cursor-pointer"
            >
              <option value="Agent Skills format (SKILL.md)">
                {t.destOptionSkillMd}
              </option>
              <option value="Portable skill; destination is not decided yet">
                {t.destOptionPortable}
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-500">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[11px] sm:text-xs text-slate-500 px-1 pt-0.5">
            {formData.destination.includes('SKILL.md') ? (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 p-2 rounded-xl bg-purple-50/70 border border-purple-200/80 text-[11px] sm:text-xs w-full">
                <span className="flex items-center gap-1.5 text-purple-900 font-semibold">
                  <FolderArchive className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                  {t.destHintSkillMd}
                </span>
                <a
                  href={SPARK_SKILL_STUDIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-purple-700 hover:text-purple-950 underline underline-offset-2 shrink-0"
                >
                  <Cpu className="w-3 h-3 text-purple-600" />
                  <span>{t.destHintSkillMdStudio}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            ) : (
              <span className="flex items-center gap-1 text-slate-600">
                <Layers className="w-3.5 h-3.5" /> {t.destHintPortable}
              </span>
            )}
          </div>
        </div>

        {/* Field 3: Input */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="input-details"
              className="text-sm font-bold text-slate-800"
            >
              {t.fieldInputLabel}{' '}
              <span className="text-xs font-normal text-slate-400">
                {t.fieldInputOptional}
              </span>
            </label>
          </div>
          <input
            id="input-details"
            type="text"
            value={formData.input}
            onChange={(e) => onChange({ input: e.target.value })}
            placeholder={t.fieldInputPlaceholder}
            className="w-full px-3.5 py-2.5 text-sm sm:text-base rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15 bg-white text-slate-800 placeholder:text-slate-400 outline-none transition"
          />
        </div>

        {/* Field 4: Success Criteria */}
        <div className="space-y-1.5">
          <label
            htmlFor="success-details"
            className="text-sm font-bold text-slate-800 flex items-center gap-1"
          >
            <span>{t.fieldSuccessLabel}</span>
            <span className="text-rose-500 text-xs">*</span>
          </label>
          <input
            ref={successRef}
            id="success-details"
            type="text"
            value={formData.success}
            onChange={(e) => onChange({ success: e.target.value })}
            placeholder={t.fieldSuccessPlaceholder}
            className="w-full px-3.5 py-2.5 text-sm sm:text-base rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15 bg-white text-slate-800 placeholder:text-slate-400 outline-none transition"
          />
        </div>

        {/* Validation Error Banner */}
        {error && (
          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-center gap-2 animate-in fade-in duration-200">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{t.step1Error}</span>
          </div>
        )}

        {/* Submit Action */}
        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            id="generate-prompt-submit-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-xl shadow-md shadow-blue-600/25 transition min-h-[48px] cursor-pointer"
          >
            <span>{t.step1SubmitBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};
