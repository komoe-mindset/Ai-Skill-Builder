import React, { useRef, useState, useEffect } from 'react';
import { DestinationType, SkillFormData, SPARK_SKILL_STUDIO_URL } from '../types';
import { getPresetTemplates } from '../data/presets';
import { Language, TRANSLATIONS } from '../translations';
import {
  ArrowRight,
  Sparkles,
  FolderArchive,
  Layers,
  X,
  AlertCircle,
  ExternalLink,
  Cpu,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';

interface Step1TaskFormProps {
  lang: Language;
  formData: SkillFormData;
  formError: string;
  fieldErrors?: { task?: string; success?: string };
  onChange: (field: keyof SkillFormData, value: string) => void;
  onApplyPreset: (data: SkillFormData) => void;
  onSubmit: () => void;
  onClear: () => void;
  onOpenTemplates: () => void;
}

export const Step1TaskForm: React.FC<Step1TaskFormProps> = ({
  lang,
  formData,
  formError,
  fieldErrors,
  onChange,
  onApplyPreset,
  onSubmit,
  onClear,
  onOpenTemplates,
}) => {
  const t = TRANSLATIONS[lang];
  const presets = getPresetTemplates(lang);
  const taskRef = useRef<HTMLTextAreaElement>(null);
  const successRef = useRef<HTMLInputElement>(null);

  // Overwrite confirmation modal state
  const [pendingPreset, setPendingPreset] = useState<SkillFormData | null>(null);
  const [showAppliedToast, setShowAppliedToast] = useState(false);

  // Check if form has user-entered content
  const hasUserContent =
    Boolean(formData.task.trim()) ||
    Boolean(formData.input.trim()) ||
    Boolean(formData.success.trim());

  const handleSelectPresetClick = (presetData: SkillFormData) => {
    if (hasUserContent) {
      // Ask before replacing
      setPendingPreset(presetData);
    } else {
      applyPresetDirectly(presetData);
    }
  };

  const applyPresetDirectly = (presetData: SkillFormData) => {
    onApplyPreset(presetData);
    setPendingPreset(null);
    setShowAppliedToast(true);
    setTimeout(() => {
      setShowAppliedToast(false);
    }, 4000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      onSubmit();
    }
  };

  return (
    <div className="p-4 sm:p-8 space-y-6">
      {/* Title & Subtitle */}
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-1">
          {t.step1Title}
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          {t.step1Subtitle}
        </p>
      </div>

      {/* Preset applied toast confirmation */}
      {showAppliedToast && (
        <div
          role="status"
          className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-semibold flex items-center justify-between gap-2 shadow-sm animate-in fade-in duration-150"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{t.presetAppliedSuccess}</span>
          </div>
          <button
            type="button"
            onClick={() => setShowAppliedToast(false)}
            className="text-emerald-700 hover:text-emerald-900 text-xs font-bold p-1 cursor-pointer"
            aria-label="Dismiss message"
          >
            ✕
          </button>
        </div>
      )}

      {/* Preset Overwrite Confirmation Dialog */}
      {pendingPreset && (
        <div
          role="alertdialog"
          aria-modal="true"
          className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 space-y-3 shadow-md animate-in fade-in"
        >
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="block font-bold text-sm text-amber-900">
                {t.presetConfirmOverwrite}
              </strong>
              <p className="text-xs text-amber-800 leading-relaxed">
                {lang === 'en'
                  ? 'Your current inputs in the form will be replaced with this preset. You can still edit them afterwards.'
                  : 'လက်ရှိ ရေးထားသောအချက်များ ပျက်သွားပြီး နမူနာအချက်အလက်များဖြင့် အစားထိုးပါမည်။ အစားထိုးပြီးပါကလည်း မိမိစိတ်ကြိုက် ဆက်လက်ပြင်ဆင်နိုင်ပါသည်။'}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={() => setPendingPreset(null)}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition cursor-pointer"
            >
              {lang === 'en' ? 'Cancel' : 'မလုပ်တော့ပါ'}
            </button>
            <button
              type="button"
              onClick={() => applyPresetDirectly(pendingPreset)}
              className="px-4 py-1.5 rounded-xl text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 transition cursor-pointer shadow-xs"
            >
              {lang === 'en' ? 'Replace with Preset' : 'အစားထိုးမည်'}
            </button>
          </div>
        </div>
      )}

      {/* Quick Presets Section */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-50/70 via-indigo-50/50 to-slate-50 border border-blue-100/90 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-xs font-extrabold text-slate-800">
              {t.step1PresetsPrompt}
            </span>
          </div>
          <button
            type="button"
            onClick={onOpenTemplates}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
          >
            {t.templates} →
          </button>
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
                onClick={() => handleSelectPresetClick(preset.data)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-xl border transition-all duration-150 min-h-[38px] flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-blue-50/50 hover:text-blue-700 hover:border-blue-300 border-slate-200 shadow-2xs'
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
        className="space-y-6"
        noValidate
      >
        {/* FIELD 1: TASK (REQUIRED) */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="task-input"
              className="text-sm font-bold text-slate-900 flex items-center gap-1"
            >
              <span>{t.fieldTaskLabel}</span>
              <span className="text-rose-600 font-bold" aria-hidden="true">
                *
              </span>
              <span className="sr-only">
                {lang === 'en' ? '(required)' : '(မဖြစ်မနေ ဖြည့်ရန်)'}
              </span>
            </label>
            {formData.task && (
              <button
                type="button"
                onClick={() => onChange('task', '')}
                className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-0.5 cursor-pointer"
                title={t.step1Clear}
              >
                <X className="w-3 h-3" /> {t.step1Clear}
              </button>
            )}
          </div>
          <p className="text-xs text-slate-500 leading-normal" id="task-input-helper">
            {t.fieldTaskHelper}
          </p>
          <div className="relative">
            <textarea
              ref={taskRef}
              id="task-input"
              rows={3}
              value={formData.task}
              onChange={(e) => onChange('task', e.target.value)}
              placeholder={t.fieldTaskPlaceholder}
              aria-describedby="task-input-helper task-input-error"
              aria-invalid={Boolean(fieldErrors?.task || (!formData.task.trim() && formError))}
              className={`w-full px-3.5 py-2.5 text-sm sm:text-base rounded-xl border bg-white text-slate-900 placeholder:text-slate-400 outline-none transition resize-y min-h-[96px] ${
                fieldErrors?.task || (!formData.task.trim() && formError)
                  ? 'border-rose-400 focus:border-rose-600 focus:ring-3 focus:ring-rose-500/15'
                  : 'border-slate-300 focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15'
              }`}
            />
          </div>
          {(fieldErrors?.task || (!formData.task.trim() && formError)) && (
            <p
              id="task-input-error"
              className="text-xs font-semibold text-rose-600 flex items-center gap-1 pt-0.5"
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{t.fieldTaskError}</span>
            </p>
          )}
        </div>

        {/* FIELD 2: DESTINATION */}
        <div className="space-y-1.5">
          <label
            htmlFor="destination-select"
            className="text-sm font-bold text-slate-900 flex items-center gap-1.5"
          >
            <span>{t.fieldDestLabel}</span>
          </label>
          <p className="text-xs text-slate-500 leading-normal" id="destination-help">
            {t.fieldDestHelp}
          </p>
          <div className="relative">
            <select
              id="destination-select"
              value={formData.destination}
              onChange={(e) =>
                onChange('destination', e.target.value as DestinationType)
              }
              aria-describedby="destination-help destination-explanation"
              className="w-full px-3.5 py-3 text-sm sm:text-base rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15 bg-white text-slate-900 outline-none transition appearance-none cursor-pointer"
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

          {/* Honest Explanation of Selected Format */}
          <div
            id="destination-explanation"
            className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed"
          >
            {formData.destination.includes('SKILL.md') ? (
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-purple-900">
                  <FolderArchive className="w-3.5 h-3.5 text-purple-600" />
                  <span>Agent Skills Specification (SKILL.md)</span>
                </div>
                <p>{t.destExplanationSkillMd}</p>
                <div className="pt-1 flex items-center justify-between text-[11px] text-purple-800">
                  <span>
                    {lang === 'en'
                      ? 'Visual multi-tool schema builder available in Spark Studio'
                      : 'အဆင့်မြင့် schema ရေးဆွဲရန် Spark Studio ကို သုံးနိုင်ပါသည်'}
                  </span>
                  <a
                    href={SPARK_SKILL_STUDIO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline underline-offset-2 flex items-center gap-0.5 text-purple-700 hover:text-purple-950"
                  >
                    <span>Studio ↗</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-800">
                  <Layers className="w-3.5 h-3.5 text-blue-600" />
                  <span>Portable Skill Format</span>
                </div>
                <p>{t.destExplanationPortable}</p>
              </div>
            )}
          </div>
        </div>

        {/* FIELD 3: INPUT (OPTIONAL) */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="input-details"
              className="text-sm font-bold text-slate-900 flex items-center gap-1.5"
            >
              <span>{t.fieldInputLabel}</span>
              <span className="text-xs font-normal text-slate-500">
                {t.fieldInputOptional}
              </span>
            </label>
          </div>
          <p className="text-xs text-slate-500 leading-normal" id="input-details-helper">
            {t.fieldInputHelper}
          </p>
          <input
            id="input-details"
            type="text"
            value={formData.input}
            onChange={(e) => onChange('input', e.target.value)}
            placeholder={t.fieldInputPlaceholder}
            aria-describedby="input-details-helper"
            className="w-full px-3.5 py-2.5 text-sm sm:text-base rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15 bg-white text-slate-900 placeholder:text-slate-400 outline-none transition"
          />
        </div>

        {/* FIELD 4: SUCCESS CRITERIA (REQUIRED) */}
        <div className="space-y-1.5">
          <label
            htmlFor="success-details"
            className="text-sm font-bold text-slate-900 flex items-center gap-1"
          >
            <span>{t.fieldSuccessLabel}</span>
            <span className="text-rose-600 font-bold" aria-hidden="true">
              *
            </span>
            <span className="sr-only">
              {lang === 'en' ? '(required)' : '(မဖြစ်မနေ ဖြည့်ရန်)'}
            </span>
          </label>
          <p className="text-xs text-slate-500 leading-normal" id="success-details-helper">
            {t.fieldSuccessHelper}
          </p>
          <input
            ref={successRef}
            id="success-details"
            type="text"
            value={formData.success}
            onChange={(e) => onChange('success', e.target.value)}
            placeholder={t.fieldSuccessPlaceholder}
            aria-describedby="success-details-helper success-details-error"
            aria-invalid={Boolean(fieldErrors?.success || (!formData.success.trim() && formError))}
            className={`w-full px-3.5 py-2.5 text-sm sm:text-base rounded-xl border bg-white text-slate-900 placeholder:text-slate-400 outline-none transition ${
              fieldErrors?.success || (!formData.success.trim() && formError)
                ? 'border-rose-400 focus:border-rose-600 focus:ring-3 focus:ring-rose-500/15'
                : 'border-slate-300 focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15'
            }`}
          />
          {(fieldErrors?.success || (!formData.success.trim() && formError)) && (
            <p
              id="success-details-error"
              className="text-xs font-semibold text-rose-600 flex items-center gap-1 pt-0.5"
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{t.fieldSuccessError}</span>
            </p>
          )}
        </div>

        {/* General Form Error Banner */}
        {formError && (
          <div
            role="alert"
            className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-center gap-2 animate-in fade-in duration-200"
          >
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{formError}</span>
          </div>
        )}

        {/* Primary Action Button & Clear Action */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
            💡 {t.step1SubmitHint}
          </p>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {hasUserContent && (
              <button
                type="button"
                onClick={onClear}
                className="px-4 py-3 text-xs sm:text-sm font-semibold text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition cursor-pointer min-h-[48px]"
              >
                {t.step1Clear}
              </button>
            )}

            <button
              type="submit"
              id="generate-prompt-submit-btn"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-xl shadow-md shadow-blue-600/25 transition min-h-[48px] cursor-pointer"
            >
              <span>{t.step1SubmitBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
