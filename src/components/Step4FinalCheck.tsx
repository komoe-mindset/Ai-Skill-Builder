import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { DestinationType, SkillFormData } from '../types';
import {
  Check,
  RotateCcw,
  Sparkles,
  Download,
  BookmarkCheck,
  Bookmark,
  CheckCircle2,
  FolderTree,
  Bot,
  HelpCircle,
} from 'lucide-react';
import { downloadTextFile } from '../utils/helpers';

interface Step4FinalCheckProps {
  formData: SkillFormData;
  generatedPrompt: string;
  onRestart: () => void;
  onBackToReview: () => void;
  onSaveSkill: () => void;
  isSaved: boolean;
}

const CHECKLIST_ITEMS = [
  {
    id: 1,
    title: 'Tool နှင့် File များ စစ်ဆေးခြင်း',
    desc: 'မရှိသော tool၊ မရှိသော ဖိုင် သို့မဟုတ် မရှိသော အချက်အလက်များကို ရှိသကဲ့သို့ မရေးထားကြောင်း စစ်ဆေးပြီးပြီလား။',
  },
  {
    id: 2,
    title: 'စမ်းသပ်မှု ပွင့်လင်းမြင်သာမှု',
    desc: 'တကယ် စမ်းသပ်ထားသော အချက်အလက်နှင့် စာသားအရသာ စစ်ဆေးထားသည်များကို ရှင်းလင်းစွာ ခွဲခြားဖော်ပြထားသလား။',
  },
  {
    id: 3,
    title: 'ဘာသာစကား ၂ မျိုး စမ်းသပ်မှု',
    desc: 'English နှင့် မြန်မာ input ၂ မျိုးစလုံးဖြင့် မျှော်လင့်ထားသော ရလဒ်များ မှန်မှန်ကန်ကန် ရရှိကြောင်း လက်တွေ့စမ်းပြီးပြီလား။',
  },
];

export const Step4FinalCheck: React.FC<Step4FinalCheckProps> = ({
  formData,
  generatedPrompt,
  onRestart,
  onBackToReview,
  onSaveSkill,
  isSaved,
}) => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
  });

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

  const handleExportSkill = () => {
    const content = `# AI Skill: ${formData.task}
**Destination:** ${formData.destination}
**Input Format:** ${formData.input || 'အဆင်ပြေရာ'}
**Success Criteria:** ${formData.success}

---
## Prompt Sent to Gem:
\`\`\`markdown
${generatedPrompt}
\`\`\`

---
## Verification Checklist:
- [${checkedItems[1] ? 'x' : ' '}] Tool & File Integrity Checked
- [${checkedItems[2] ? 'x' : ' '}] Execution vs Text Evaluation Clarified
- [${checkedItems[3] ? 'x' : ' '}] Tested with English & Myanmar Inputs
`;
    downloadTextFile(content, 'my-ai-skill-guide.md');
  };

  return (
    <div className="p-4 sm:p-8 space-y-6">
      {/* Header Done Banner */}
      <div className="text-center pt-2 pb-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-3xl bg-emerald-50 text-emerald-600 border border-emerald-200/80 shadow-sm flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
          Skill ကို မသိမ်းမီ သုံးချက်စစ်ပါ
        </h2>
        <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto leading-relaxed">
          Gem က လှလှပပ ရေးသားပေးထားသည်ထက် လက်တွေ့တွင် အမှားအယွင်းကင်းပြီး အလုပ်ဖြစ်ရန်က ပိုမိုအရေးကြီးပါသည်။
        </p>
      </div>

      {/* Interactive Verification Checklist */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            စစ်ဆေးရမည့် အချက်များ (နှိပ်၍ အမှန်ခြစ်ပါ)
          </span>
          <span className="text-xs font-semibold text-blue-600">
            {Object.values(checkedItems).filter(Boolean).length} / ၃ ပြီးစီး
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {CHECKLIST_ITEMS.map((item) => {
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
                      ? 'bg-emerald-600 text-white'
                      : 'border-2 border-slate-300 bg-white text-transparent'
                  }`}
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold grid place-items-center">
                      {item.id}
                    </span>
                    <strong
                      className={`text-sm sm:text-base font-bold transition-colors ${
                        isChecked ? 'text-emerald-950 line-through decoration-emerald-500/60' : 'text-slate-800'
                      }`}
                    >
                      {item.title}
                    </strong>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                    {item.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Storage Tip Advice based on Destination */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/40 border border-blue-200/80 text-xs sm:text-sm text-slate-700 space-y-2">
        <div className="flex items-center gap-2 font-bold text-slate-900">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>သိမ်းဆည်းနည်း လမ်းညွှန် —</span>
        </div>
        {formData.destination.includes('SKILL.md') ? (
          <div className="flex items-start gap-2.5 text-slate-600">
            <FolderTree className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <p>
              <strong>Agent Skills format:</strong> Gem က ထုတ်ပေးသော folder နှင့် <code className="bg-white px-1.5 py-0.5 rounded border text-blue-700 font-mono">SKILL.md</code> ဖိုင်အမည် အတိုင်း Project repo သို့မဟုတ် AI Studio စနစ်ထဲသို့ ကူးထည့်၍ သိမ်းဆည်းပါ။
            </p>
          </div>
        ) : formData.destination.includes('Gemini Gem') ? (
          <div className="flex items-start gap-2.5 text-slate-600">
            <Bot className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <p>
              <strong>Gemini Gem format:</strong> Gem က ထုတ်ပေးသော instruction စာသားကို မိမိအသုံးပြုမည့် သီးခြား Custom Gem တစ်ခု ပြုလုပ်၍ ၎င်း၏ <strong>Instructions</strong> အကွက်ထဲသို့ ထည့်သွင်းသိမ်းဆည်းပါ။
            </p>
          </div>
        ) : (
          <div className="flex items-start gap-2.5 text-slate-600">
            <HelpCircle className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
            <p>
              <strong>Portable Skill:</strong> မည်သည့် AI Model/System တွင်မဆို အလွယ်တကူ ပြန်သုံးနိုင်ရန် အောက်ပါ Download ခလုတ်ဖြင့် Markdown ဖိုင်အဖြစ် သိမ်းထားနိုင်ပါသည်။
            </p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-2">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            id="save-skill-btn"
            onClick={onSaveSkill}
            className={`w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition min-h-[46px] cursor-pointer ${
              isSaved
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 shadow-2xs'
            }`}
          >
            {isSaved ? (
              <>
                <BookmarkCheck className="w-4 h-4 text-emerald-600" />
                <span>မှတ်တမ်းတွင် သိမ်းဆည်းထားပြီး ✓</span>
              </>
            ) : (
              <>
                <Bookmark className="w-4 h-4 text-slate-500" />
                <span>Skill ကို မှတ်တမ်းတွင် သိမ်းရန်</span>
              </>
            )}
          </button>

          <button
            type="button"
            id="export-skill-btn"
            onClick={handleExportSkill}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs transition min-h-[46px] cursor-pointer"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>ဖိုင်အဖြစ် ဒေါင်းလုဒ်လုပ်မည် (.md)</span>
          </button>
        </div>

        <div className="flex flex-col-reverse xs:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-200">
          <button
            type="button"
            onClick={onBackToReview}
            className="w-full xs:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition min-h-[46px] cursor-pointer"
          >
            <span>ထပ်မံ စစ်ဆေးပြင်ဆင်မည်</span>
          </button>

          <button
            type="button"
            id="restart-builder-btn"
            onClick={onRestart}
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-xl shadow-md shadow-blue-600/20 transition min-h-[46px] cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>အသစ်တစ်ခု ထပ်မံလုပ်မည်</span>
          </button>
        </div>
      </div>
    </div>
  );
};
