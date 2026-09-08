import React from 'react';
import { PRESET_TEMPLATES } from '../data/presets';
import { SkillFormData, GEMINI_SPARK_GUIDE_URL } from '../types';
import { X, Sparkles, ArrowRight, CheckCircle, BookOpen, ExternalLink } from 'lucide-react';

interface TemplatesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTemplate: (data: SkillFormData) => void;
}

export const TemplatesModal: React.FC<TemplatesModalProps> = ({
  isOpen,
  onClose,
  onSelectTemplate,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900">
                အသင့်သုံး Skill ပုံစံများ (Templates)
              </h3>
              <p className="text-xs text-slate-500">
                အောက်ပါတို့အနက် တစ်ခုကို ရွေးချယ်ပြီး ချက်ချင်း စမ်းသပ်နိုင်ပါသည်
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Templates List */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3 flex-1">
          {/* Gemini Spark User Guide Link Banner */}
          <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-amber-950">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Gemini Spark အသုံးပြုနည်းနှင့် ဥပမာများကို User Guide တွင် လေ့လာနိုင်ပါသည်</span>
            </div>
            <a
              href={GEMINI_SPARK_GUIDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-amber-900 hover:text-amber-950 inline-flex items-center gap-1 shrink-0 underline underline-offset-2"
            >
              <span>Spark Guide ဖွင့်မည်</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {PRESET_TEMPLATES.map((tpl) => (

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
                <div className="text-[11px] text-slate-500 bg-slate-50 p-2 rounded-xl border border-slate-100 space-y-1">
                  <div><strong>အလုပ်:</strong> {tpl.data.task}</div>
                  <div><strong>အောင်မြင်ရလဒ်:</strong> {tpl.data.success}</div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  id={`select-template-${tpl.id}`}
                  onClick={() => {
                    onSelectTemplate(tpl.data);
                    onClose();
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition shadow-xs"
                >
                  <span>ဒီပုံစံကို အသုံးပြုမည်</span>
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
