import React from 'react';
import { SavedSkill, SkillFormData } from '../types';
import { X, Trash2, ArrowUpRight, Copy, Check, Calendar, FileText } from 'lucide-react';
import { copyToClipboard } from '../utils/helpers';

interface SavedSkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedSkills: SavedSkill[];
  onLoadSkill: (data: SkillFormData) => void;
  onDeleteSkill: (id: string) => void;
}

export const SavedSkillsModal: React.FC<SavedSkillsModalProps> = ({
  isOpen,
  onClose,
  savedSkills,
  onLoadSkill,
  onDeleteSkill,
}) => {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopyPrompt = async (id: string, text: string) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[88vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div>
            <h3 className="text-lg font-black text-slate-900">
              သိမ်းဆည်းထားသော Skills များ
            </h3>
            <p className="text-xs text-slate-500">
              စုစုပေါင်း {savedSkills.length} ခု သိမ်းဆည်းထားပါသည်
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3 flex-1">
          {savedSkills.length === 0 ? (
            <div className="text-center py-12 text-slate-400 space-y-2">
              <FileText className="w-10 h-10 mx-auto opacity-40" />
              <p className="text-sm font-medium">သိမ်းထားသော Skill မရှိသေးပါ</p>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Skill တစ်ခု ဖန်တီးပြီး နောက်ဆုံးအဆင့်တွင် "မှတ်တမ်းတွင် သိမ်းရန်" ခလုတ်ကို နှိပ်ပါ
              </p>
            </div>
          ) : (
            savedSkills.map((skill) => {
              const formattedDate = new Date(skill.timestamp).toLocaleDateString('my-MM', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              });

              return (
                <div
                  key={skill.id}
                  className="p-4 rounded-2xl border border-slate-200 hover:border-blue-300 bg-slate-50/50 hover:bg-white transition space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-slate-900 truncate">
                        {skill.data.task}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                        <span className="inline-flex items-center gap-1 font-mono text-[11px] bg-slate-200/80 px-2 py-0.5 rounded-md">
                          {skill.data.destination.split(' ')[0]}
                        </span>
                        <span className="flex items-center gap-1 text-[11px]">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          {formattedDate}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onDeleteSkill(skill.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition"
                      title="ဖျက်ရန်"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-1 border-t border-slate-200/60">
                    <button
                      type="button"
                      onClick={() => handleCopyPrompt(skill.id, skill.generatedPrompt)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition"
                    >
                      {copiedId === skill.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">ကူးပြီးပါပြီ</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>Prompt ကူးမည်</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        onLoadSkill(skill.data);
                        onClose();
                      }}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200/60 rounded-xl transition"
                    >
                      <span>ဒီ Skill သုံးမည်</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
