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
  AlertCircle,
  Cpu,
  ExternalLink,
  Copy,
  FileCode2,
  Info,
} from 'lucide-react';
import { downloadTextFile, copyToClipboard } from '../utils/helpers';
import { GeminiTestPromptCard } from './GeminiTestPromptCard';

interface Step4FinalCheckProps {
  lang: Language;
  formData: SkillFormData;
  generatedPrompt: string;
  finalSkillText?: string;
  onUpdateFinalSkill?: (text: string) => void;
  onRestart: () => void;
  onBackToReview: () => void;
}

export const Step4FinalCheck: React.FC<Step4FinalCheckProps> = ({
  lang,
  formData,
  generatedPrompt,
  finalSkillText = '',
  onUpdateFinalSkill,
  onRestart,
  onBackToReview,
}) => {
  const t = TRANSLATIONS[lang];
  const [skillInput, setSkillInput] = useState(finalSkillText);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
  });
  const [copiedForStudio, setCopiedForStudio] = useState(false);
  const [copiedFinalSkill, setCopiedFinalSkill] = useState(false);

  const handleSkillInputChange = (text: string) => {
    setSkillInput(text);
    if (onUpdateFinalSkill) {
      onUpdateFinalSkill(text);
    }
  };

  const toggleCheck = (id: number) => {
    setCheckedItems((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      // Check if all 3 are checked!
      if (updated[1] && updated[2] && updated[3]) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
        });
      }
      return updated;
    });
  };

  // Agent Skills Validation logic
  const trimmed = skillInput.trim();
  const hasContent = Boolean(trimmed);
  const hasYamlFrontmatter =
    trimmed.startsWith('---') &&
    trimmed.indexOf('---', 3) > 3 &&
    /name\s*:/i.test(trimmed) &&
    /description\s*:/i.test(trimmed);

  const handleCopyFinalSkill = async () => {
    if (!skillInput) return;
    const ok = await copyToClipboard(skillInput);
    if (ok) {
      setCopiedFinalSkill(true);
      setTimeout(() => setCopiedFinalSkill(false), 2500);
    }
  };

  const handleDownloadSkillMd = () => {
    // If user has pasted final skill content, download that directly as SKILL.md
    if (skillInput.trim()) {
      downloadTextFile(skillInput, 'SKILL.md');
      return;
    }

    // Otherwise format standard template draft
    const defaultSkillMd = `---
name: ${formData.task ? formData.task.slice(0, 50).replace(/[^\w\s-]/g, '').trim().toLowerCase().replace(/\s+/g, '-') || 'custom-skill' : 'custom-skill'}
description: ${formData.task || 'Custom AI Skill'}
---

# ${formData.task || 'AI Skill'}

## Destination
${formData.destination}

## Input Requirements
${formData.input || 'None specified'}

## Success Criteria
${formData.success}

## Instructions
[Gemini မှ ရရှိလာသော အသေးစိတ်ညွှန်ကြားချက်များကို ဤနေရာတွင် ထည့်သွင်းပါ]
`;
    downloadTextFile(defaultSkillMd, 'SKILL.md');
  };

  const handleDownloadChecklistLog = () => {
    const logContent = `# AI Skill Creation Log
Task: ${formData.task}
Destination: ${formData.destination}
Inputs: ${formData.input || 'None'}
Success Criteria: ${formData.success}

---
## Prompt Prepared on Companion:
${generatedPrompt}

---
## Verification Checklist Status:
- [${checkedItems[1] ? 'x' : ' '}] ${t.checkItem1Title}
- [${checkedItems[2] ? 'x' : ' '}] ${t.checkItem2Title}
- [${checkedItems[3] ? 'x' : ' '}] ${t.checkItem3Title}

---
## Final Skill Output:
${skillInput || '(No final skill text pasted yet)'}
`;
    downloadTextFile(logContent, 'skill-verification-record.md');
  };

  const handleCopyAndOpenStudio = async () => {
    const textToCopy = skillInput || `# AI Skill: ${formData.task}
Prompt:
${generatedPrompt}
`;
    await copyToClipboard(textToCopy);
    setCopiedForStudio(true);
    setTimeout(() => setCopiedForStudio(false), 2500);
    window.open(SPARK_SKILL_STUDIO_URL, '_blank', 'noopener,noreferrer');
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
      {/* Header Banner */}
      <div className="text-center pt-2 pb-2">
        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-xs flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 stroke-[2.2]" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-1.5">
          {t.step4Title}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
          {t.step4Subtitle}
        </p>
      </div>

      {/* Direct Area to Paste Final Skill Generated by Gemini */}
      <div className="border border-slate-300 rounded-2xl overflow-hidden bg-slate-50/80 shadow-xs space-y-0">
        <div className="px-4 py-3 bg-slate-100 border-b border-slate-200">
          <label
            htmlFor="final-skill-paste-area"
            className="block text-xs sm:text-sm font-bold text-slate-900"
          >
            {t.pasteSkillHeader}
          </label>
          <p className="text-xs text-slate-500 mt-0.5 leading-normal">
            {t.pasteSkillHelp}
          </p>
        </div>

        <div className="p-3 sm:p-4 bg-white">
          <textarea
            id="final-skill-paste-area"
            rows={7}
            value={skillInput}
            onChange={(e) => handleSkillInputChange(e.target.value)}
            placeholder={t.pasteSkillPlaceholder}
            className="w-full text-xs sm:text-sm font-mono text-slate-900 leading-relaxed outline-none border border-slate-200 focus:border-blue-500 rounded-xl p-3 resize-y bg-slate-50/40"
          />
        </div>

        {/* Real Agent Skills Validation Feedback */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5">
            <FileCode2 className="w-4 h-4 text-slate-500 shrink-0" />
            <span className="font-bold text-slate-700">{t.validatorTitle}</span>
          </div>

          <div>
            {!hasContent ? (
              <span className="text-slate-500 font-medium">
                {t.validatorNoContent}
              </span>
            ) : hasYamlFrontmatter ? (
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                {t.validatorSuccess}
              </span>
            ) : (
              <span className="text-amber-800 font-semibold flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {t.validatorMissingFrontmatter}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Download and Save Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          type="button"
          id="download-skill-md-btn"
          onClick={handleDownloadSkillMd}
          className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] shadow-md shadow-blue-600/25 transition min-h-[48px] cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>{t.downloadSkillMdBtn}</span>
        </button>

        {hasContent && (
          <button
            type="button"
            onClick={handleCopyFinalSkill}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl font-bold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs transition min-h-[48px] cursor-pointer"
          >
            {copiedFinalSkill ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'en' ? 'Copied ✓' : 'ကူးယူပြီးပါပြီ ✓'}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>{lang === 'en' ? 'Copy SKILL.md' : 'SKILL.md ကူးယူမည်'}</span>
              </>
            )}
          </button>
        )}

        <button
          type="button"
          onClick={handleDownloadChecklistLog}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-2xl font-semibold text-xs sm:text-sm text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition min-h-[48px] cursor-pointer"
          title="Download summary record"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{t.downloadChecklistLogBtn}</span>
        </button>
      </div>

      {/* Dedicated Gemini Testing Instructions Card */}
      <GeminiTestPromptCard lang={lang} />

      {/* Interactive Verification Checklist */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {t.checklistHeader}
          </span>
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
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
                className={`w-full p-4 rounded-2xl border text-left transition-all duration-150 cursor-pointer flex items-start gap-3.5 ${
                  isChecked
                    ? 'bg-emerald-50/60 border-emerald-300 shadow-2xs'
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

      {/* Final Guidance (3 Rules) */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-2">
        <h4 className="font-extrabold text-slate-900">
          {t.finalGuidanceTitle}
        </h4>
        <ul className="space-y-1.5 text-slate-700 leading-relaxed font-medium">
          <li>{t.finalGuidance1}</li>
          <li>{t.finalGuidance2}</li>
          <li>{t.finalGuidance3}</li>
        </ul>
      </div>

      {/* Honest Disclosure */}
      <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 text-xs leading-relaxed">
        <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong className="font-bold block text-amber-900 mb-0.5">
            {t.honestDisclosureTitle}
          </strong>
          <span>{t.honestDisclosureText}</span>
        </div>
      </div>

      {/* Optional Spark Skill Studio Bridge (Quiet & Optional) */}
      <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-200 text-xs sm:text-sm space-y-2.5">
        <div className="flex items-start gap-2.5">
          <Cpu className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-purple-950">
              {t.studioBridgeTitle}
            </h4>
            <p className="text-xs text-purple-900/80 mt-0.5 leading-normal">
              {t.studioBridgeDesc}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <button
            type="button"
            id="copy-and-open-studio-btn"
            onClick={handleCopyAndOpenStudio}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 rounded-xl transition cursor-pointer"
          >
            {copiedForStudio ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>{t.studioBridgeCopying}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{t.studioBridgeCopyOpen}</span>
              </>
            )}
          </button>

          <a
            href={SPARK_SKILL_STUDIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold text-purple-800 hover:text-purple-950 hover:bg-purple-100/50 rounded-xl border border-purple-200/90 transition"
          >
            <span>{t.studioBridgeDirectOpen}</span>
          </a>
        </div>
      </div>

      {/* Bottom Navigation */}
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
  );
};
