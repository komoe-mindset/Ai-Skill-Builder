import React, { useState } from 'react';
import { getPresetTemplates } from '../data/presets';
import { SkillFormData, GEMINI_SPARK_GUIDE_URL } from '../types';
import { Language, TRANSLATIONS } from '../translations';
import { X, Sparkles, ArrowRight, BookOpen, ExternalLink, AlertCircle } from 'lucide-react';

interface TemplatesModalProps {
  lang: Language;
  isOpen: boolean;
  hasUserContent?: boolean;
  onClose: () => void;
  onSelectTemplate: (data: SkillFormData) => void;
}

export const TemplatesModal: React.FC<TemplatesModalProps> = ({
  lang,
  isOpen,
  hasUserContent = false,
  onClose,
  onSelectTemplate,
}) => {
  if (!isOpen) return null;
  const t = TRANSLATIONS[lang];
  const presets = getPresetTemplates(lang);
  const [confirmingPreset, setConfirmingPreset] = useState<SkillFormData | null>(null);

  const handleSelect = (data: SkillFormData) => {
    if (hasUserContent) {
      setConfirmingPreset(data);
    } else {
      onSelectTemplate(data);
      onClose();
    }
  };

  const handleConfirm = () => {
    if (confirmingPreset) {
      onSelectTemplate(confirmingPreset);
      setConfirmingPreset(null);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
              <Sparkles className="w-5 h-5 fill-amber-500" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900">
                {lang === 'en' ? 'Ready-to-Use Skill Presets' : 'အသင့်သုံး နမူနာ ပုံစံများ (Presets)'}
              </h3>
              <p className="text-xs text-slate-500">
                {t.step1PresetsPrompt}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overwrite Confirmation Alert if active */}
        {confirmingPreset && (
          <div className="p-4 bg-amber-50 border-b border-amber-200 text-amber-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-amber-900">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{t.presetConfirmOverwrite}</span>
            </div>
            <div className="flex items-center justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => setConfirmingPreset(null)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 bg-white border border-slate-200"
              >
                {lang === 'en' ? 'Cancel' : 'မလုပ်တော့ပါ'}
              </button>
              <button
                type="button"
                onClick={handleConfirm}
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-amber-700 hover:bg-amber-800"
              >
                {lang === 'en' ? 'Replace' : 'အစားထိုးမည်'}
              </button>
            </div>
          </div>
        )}

        {/* Templates List */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3 flex-1">
          {/* Gemini Spark User Guide Link Banner */}
          <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-amber-950">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                {lang === 'en'
                  ? 'Learn practical real-world Gemini Spark workflows in the User Guide'
                  : 'လက်တွေ့အသုံးချ နမူနာများကို User Guide တွင်လည်း လေ့လာနိုင်ပါသည်'}
              </span>
            </div>
            <a
              href={GEMINI_SPARK_GUIDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-amber-900 hover:text-amber-950 inline-flex items-center gap-1 shrink-0 underline underline-offset-2"
            >
              <span>{lang === 'en' ? 'Open Guide ↗' : 'Spark Guide ဖွင့်မည် ↗'}</span>
            </a>
          </div>

          {presets.map((tpl) => (
            <div
              key={tpl.id}
              className="p-4 rounded-2xl border border-slate-200 hover:border-blue-400 bg-white hover:bg-blue-50/20 transition-all duration-150 shadow-2xs space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                  {tpl.category}
                </span>
                <span className="text-[11px] font-medium text-slate-500 truncate max-w-[220px]">
                  {tpl.data.destination.split(';')[0]}
                </span>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  {tpl.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-2">
                  {tpl.subtitle}
                </p>
                <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100 space-y-1">
                  <div>
                    <strong className="text-slate-700">
                      {lang === 'en' ? 'Task:' : 'အလုပ်:'}
                    </strong>{' '}
                    {tpl.data.task}
                  </div>
                  <div>
                    <strong className="text-slate-700">
                      {lang === 'en' ? 'Success:' : 'အောင်မြင်ရလဒ်:'}
                    </strong>{' '}
                    {tpl.data.success}
                  </div>
                </div>
              </div>

              <div className="pt-1 flex justify-end">
                <button
                  type="button"
                  id={`select-template-${tpl.id}`}
                  onClick={() => handleSelect(tpl.data)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition shadow-xs cursor-pointer active:scale-[0.98]"
                >
                  <span>{lang === 'en' ? 'Use This Example' : 'ဒီနမူနာကို သုံးမည်'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
