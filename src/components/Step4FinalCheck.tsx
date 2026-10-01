import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { DestinationType, SkillFormData, SPARK_SKILL_STUDIO_URL } from '../types';
import { Language, TRANSLATIONS } from '../translations';
import {
  Check,
  RotateCcw,
  Sparkles,
  Download,
  CheckCircle2,
  FolderTree,
  Bot,
  HelpCircle,
  Cpu,
  ExternalLink,
  Copy,
} from 'lucide-react';
import { downloadTextFile, copyToClipboard } from '../utils/helpers';

interface Step4FinalCheckProps {
  lang: Language;
  formData: SkillFormData;
  generatedPrompt: string;
  onRestart: () => void;
  onBackToReview: () => void;
}

export const Step4FinalCheck: React.FC<Step4FinalCheckProps> = ({
  lang,
  formData,
  generatedPrompt,
  onRestart,
  onBackToReview,
}) => {
  const t = TRANSLATIONS[lang];
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
  });
  const [copiedForStudio, setCopiedForStudio] = useState(false);

  const toggleCheck = (id: number) => {
    setCheckedItems((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      // Check if all 3 are checked!
      if (updated[1] && updated[2] && updated[3]) {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
      return updated;
    });
  };

  const allChecked = checkedItems[1] && checkedItems[2] && checkedItems[3];

  const handleCopyAndOpenStudio = async () => {
    const textToCopy = `# AI Skill: ${formData.task}
Destination: ${formData.destination}
Inputs: ${formData.input || 'None'}
Success: ${formData.success}

Prompt:
${generatedPrompt}
`;
    await copyToClipboard(textToCopy);
    setCopiedForStudio(true);
    setTimeout(() => setCopiedForStudio(false), 2500);
    window.open(SPARK_SKILL_STUDIO_URL, '_blank', 'noopener,noreferrer');
  };

  const handleExportSkill = () => {
    const content = `# AI Skill: ${formData.task}
**Destination:** ${formData.destination}
**Inputs:** ${formData.input || 'None'}
**Success Criteria:** ${formData.success}

---
## Prompt Sent to Gem:
\`\`\`markdown
${generatedPrompt}
\`\`\`

---
## Verification Checklist:
- [${checkedItems[1] ? 'x' : ' '}] ${t.checkItem1Title}
- [${checkedItems[2] ? 'x' : ' '}] ${t.checkItem2Title}
- [${checkedItems[3] ? 'x' : ' '}] ${t.checkItem3Title}
`;
    downloadTextFile(content, 'my-ai-skill.md');
  };

  const checklist = [
    {
      id: 1,
      title: t.checkItem1Title,
      description: t.checkItem1Desc,
    },
    {
      id: 2,
      title: t.checkItem2Title,
      description: t.checkItem2Desc,
    },
    {
      id: 3,
      title: t.checkItem3Title,
      description: t.checkItem3Desc,
    },
  ];

  return (
    <div className="p-4 sm:p-8 space-y-6">
      {/* Header Done Banner */}
      <div className="text-center pt-2 pb-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-3xl bg-emerald-50 text-emerald-600 border border-emerald-200/80 shadow-sm flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
          {t.step4Title}
        </h2>
        <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto leading-relaxed">
          {t.step4Subtitle}
        </p>
      </div>

      {/* Interactive Verification Checklist */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {t.checklistHeader}
          </span>
          <span className="text-xs font-semibold text-blue-600">
            {Object.values(checkedItems).filter(Boolean).length} / 3 {t.checklistCount}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {checklist.map((item) => {
            const isChecked = checkedItems[item.id];
            return (
              <button
                key={item.id}
                type="button"
                id={`check-item-${item.id}`}
                onClick={() => toggleCheck(item.id)}
                className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-start gap-3.5 ${
                  isChecked
                    ? 'bg-emerald-50/60 border-emerald-300 shadow-xs'
                    : 'bg-white hover:bg-slate-50 border-slate-200 shadow-2xs'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    isChecked
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'border-2 border-slate-300 bg-white'
                  }`}
                >
                  {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <strong
                      className={`text-sm sm:text-base font-bold transition-colors ${
                        isChecked ? 'text-emerald-950 line-through' : 'text-slate-800'
                      }`}
                    >
                      {item.title}
                    </strong>
                    {isChecked && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        {t.checklistCount} ✓
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Destination Deployment Guidance Card */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-2">
        <h4 className="font-bold text-slate-800 flex items-center gap-1.5">
          <FolderTree className="w-4 h-4 text-blue-600" />
          <span>{formData.destination}</span>
        </h4>

        {formData.destination.includes('SKILL.md') ? (
          <div className="space-y-1.5 text-slate-600">
            <p>
              {lang === 'en'
                ? 'Create a dedicated folder for your skill containing SKILL.md. Keep YAML frontmatter and tool function signatures accurate.'
                : 'သင့် Skill အတွက် သီးသန့် Folder တစ်ခုဖွင့်၍ SKILL.md ဖိုင်ဖြင့် သိမ်းဆည်းပါ။ YAML frontmatter နှင့် Tool signatures များကို မူရင်းအတိုင်း ထားရှိပါ။'}
            </p>
          </div>
        ) : (
          <div className="flex items-start gap-2.5 text-slate-600">
            <HelpCircle className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
            <p>
              {lang === 'en'
                ? 'Portable format: Store as a standard Markdown file ready to use in any LLM or Agent runtime.'
                : 'Portable Skill: မည်သည့် AI Model/System တွင်မဆို အလွယ်တကူ ပြန်သုံးနိုင်ရန် အောက်ပါ Download ခလုတ်ဖြင့် Markdown ဖိုင်အဖြစ် သိမ်းထားနိုင်ပါသည်။'}
            </p>
          </div>
        )}
      </div>

      {/* Spark Skill Studio & Architect Bridge Section */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-purple-50/90 via-indigo-50/40 to-white border-2 border-purple-200/90 shadow-2xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-purple-600 text-white shadow-xs shrink-0 mt-0.5">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-slate-900 text-sm sm:text-base">
                  {t.studioBridgeTitle}
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-600 text-white">
                  Studio
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                {t.studioBridgeDesc}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col xs:flex-row items-center gap-2 pt-1">
          <button
            type="button"
            id="copy-and-open-studio-btn"
            onClick={handleCopyAndOpenStudio}
            className="w-full xs:w-auto flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition active:scale-[0.98] cursor-pointer"
          >
            {copiedForStudio ? (
              <>
                <Check className="w-4 h-4" />
                <span>{t.studioBridgeCopying}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>{t.studioBridgeCopyOpen}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </>
            )}
          </button>

          <a
            href={SPARK_SKILL_STUDIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full xs:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white hover:bg-purple-50 text-purple-900 font-bold text-xs sm:text-sm rounded-xl border border-purple-200 transition shadow-2xs"
          >
            <span>{t.studioBridgeDirectOpen}</span>
            <ExternalLink className="w-3.5 h-3.5 text-purple-600" />
          </a>
        </div>
      </div>

      {/* Action Buttons (Save Skill removed as requested) */}
      <div className="space-y-3 pt-2">
        <button
          type="button"
          id="export-skill-btn"
          onClick={handleExportSkill}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs transition min-h-[46px] cursor-pointer"
        >
          <Download className="w-4 h-4 text-slate-500" />
          <span>{t.exportMdBtn}</span>
        </button>

        <div className="flex flex-col-reverse xs:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-200">
          <button
            type="button"
            onClick={onBackToReview}
            className="w-full xs:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition min-h-[46px] cursor-pointer"
          >
            <span>{t.backToReviewBtn}</span>
          </button>

          <button
            type="button"
            id="restart-builder-btn"
            onClick={onRestart}
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-xl shadow-md shadow-blue-600/20 transition min-h-[46px] cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t.restartBtn}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
