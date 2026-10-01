import { DestinationType, FollowupMode, SkillFormData } from '../types';
import { Language } from '../translations';

export function buildPromptText(formData: SkillFormData, lang: Language = 'my'): string {
  const task = formData.task.trim();
  const destination = formData.destination;
  const input =
    formData.input.trim() ||
    (lang === 'en' ? 'Suggest appropriate inputs' : 'သင့်တော်တဲ့ input ကို အကြံပြုပေးပါ');
  const success = formData.success.trim();

  if (lang === 'en') {
    return `Please create an AI Skill.

Task to perform: ${task}
Deployment destination: ${destination}
User inputs provided: ${input}
Success criteria: ${success}

Instructions:
- If a critical detail is missing, ask a concise clarifying question.
- If only minor details are missing, state reasonable assumptions and proceed.
- Provide complete, self-contained, copyable skill files and instructions.
- Do not assume non-existent tools, APIs, or capabilities.
- Include practical test requests at the end to verify functionality.`;
  }

  return `AI Skill တစ်ခု ဖန်တီးပေးပါ။

လုပ်ပေးရမည့်အလုပ်: ${task}
အသုံးပြုမည့်နေရာ: ${destination}
အသုံးပြုသူပေးမည့် input: ${input}
အောင်မြင်သောရလဒ်: ${success}

လိုအပ်တဲ့အချက် အရေးကြီးစွာ ပျောက်နေရင် မေးခွန်းတိုတို မေးပါ။ အနည်းငယ်သာ ပျောက်နေရင် assumption ကို ဖော်ပြပြီး ဆက်လုပ်ပါ။ လိုအပ်တဲ့ဖိုင်တွေကို အပြည့်အစုံ ကူးယူနိုင်အောင် ထုတ်ပေးပြီး မြန်မာလို ရှင်းပြပါ။ မရှိတဲ့ tool သို့မဟုတ် capability ကို မရှိသလို မယူဆပါနဲ့။ နောက်ဆုံးမှာ လက်တွေ့စမ်းရန် test requests ထည့်ပေးပါ။`;
}

export function buildFollowupText(
  mode: FollowupMode,
  changeRequest: string = '',
  lang: Language = 'my'
): string {
  if (lang === 'en') {
    switch (mode) {
      case 'review':
        return 'Please review the generated Skill. Check for unclear triggers, missing inputs, instruction contradictions, invalid tool or file assumptions, and unmet success criteria. Highlight the most critical issues first and provide the complete updated skill content. Do not claim execution test completion if only inspected as text.';
      case 'improve': {
        const detail =
          changeRequest.trim() || '[Specify what you want to improve here]';
        return `Please refine the generated Skill without altering its core objective. Specific changes requested: ${detail}. Preserve all other working parts and return the full updated content.`;
      }
      case 'test':
        return 'Please design a practical test suite for this Skill. Include standard queries, incomplete inputs, ambiguous prompts, out-of-scope requests, and edge cases. Include both English and Myanmar sample inputs. For each test, provide user input and expected observable behavior.';
      default:
        return '';
    }
  }

  switch (mode) {
    case 'review':
      return 'အခုထုတ်ပေးထားတဲ့ Skill ကို review လုပ်ပါ။ အသုံးပြုရမည့်အချိန် မရှင်းတာ၊ input ပျောက်တာ၊ instruction ဆန့်ကျင်တာ၊ မရှိတဲ့ tool/file ကို ယူဆထားတာနဲ့ ရလဒ်စံနှုန်း မပြည့်တာတွေ စစ်ပါ။ အရေးအကြီးဆုံးပြဿနာကို အရင်ပြပြီး ပြင်ထားတဲ့ content ကို အပြည့်အစုံ ထုတ်ပေးပါ။ စာသားအဖြစ်သာ စစ်ထားတာကို execution test လုပ်ပြီးသလို မပြောပါနဲ့။';
    case 'improve': {
      const detail = changeRequest.trim() || '[ဒီနေရာမှာ ပြင်ချင်တာ ထည့်ပါ]';
      return `အခုထုတ်ပေးထားတဲ့ Skill ကို မူလရည်ရွယ်ချက် မပြောင်းဘဲ ပြင်ပေးပါ။ ပြင်ချင်သောအချက်: ${detail}. အခြားအလုပ်ဖြစ်နေတဲ့အပိုင်းတွေကို ထိန်းထားပြီး ပြင်ထားတဲ့ content ကို အပြည့်အစုံ ပြန်ပေးပါ။`;
    }
    case 'test':
      return 'အခုထုတ်ပေးထားတဲ့ Skill အတွက် လက်တွေ့စမ်းသပ်ချက် ပြင်ဆင်ပေးပါ။ ပုံမှန် request၊ input မပြည့်စုံတာ၊ မရှင်းတဲ့ request၊ skill scope ပြင်ပ request နဲ့ စာထဲမှာ လွဲမှားညွှန်ကြားချက် ပါလာတာကို စမ်းပါ။ English နဲ့ မြန်မာ input နှစ်မျိုးပါစေ။ Test တစ်ခုစီအတွက် user input နဲ့ မျှော်လင့်ထားတဲ့ မြင်နိုင်သောအပြုအမူကို မြန်မာလို ရေးပါ။ တကယ်မ run ရသေးရင် pass ဖြစ်ပြီလို့ မပြောပါနဲ့။';
    default:
      return '';
  }
}

export async function copyToClipboard(text: string): Promise<boolean> {
  // Mobile tactile feedback
  triggerHaptic();

  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fallback below
    }
  }

  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch {
    return false;
  }
}

export function triggerHaptic() {
  try {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(30);
    }
  } catch {
    // Ignore unsupported
  }
}

export function downloadTextFile(content: string, filename: string) {
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
