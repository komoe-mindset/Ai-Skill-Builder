import { PresetTemplate } from '../types';

export const PRESET_TEMPLATES: PresetTemplate[] = [
  {
    id: 'quotation-builder',
    title: 'Quotation စာရင်းထုတ်ပေးခြင်း',
    subtitle: 'ဖောက်သည်ပေးသော စာရင်းမှ စံချိန်မီ တွက်ချက်ထားသော Quotation ပြင်ဆင်ရန်',
    icon: 'ReceiptText',
    category: 'Business',
    data: {
      task: 'ဖောက်သည်ပေးတဲ့ အချက်အလက်ကနေ စံချိန်မီ တွက်ချက်ထားသော Quotation တစ်စောင် ပြင်ဆင်ပေးရန်',
      destination: 'Agent Skills format (SKILL.md)',
      input: 'Client name, items, unit prices, tax percentage, payment terms, due date',
      success: 'စျေးနှုန်းတွက်ချက်မှု တိကျမှန်ကန်ပြီး ရှင်းလင်းပြတ်သားသော မြန်မာ/အင်္ဂလိပ် quotation စာရွက်စာတမ်း'
    }
  },
  {
    id: 'code-review',
    title: 'Code ပြန်လည်စစ်ဆေးခြင်း',
    subtitle: 'TypeScript/JavaScript Code များတွင် bug နှင့် clean code စစ်ဆေးရန်',
    icon: 'Code2',
    category: 'Development',
    data: {
      task: 'Developer များ ရေးသားထားသော Code များတွင် bug, security vulnerabilities နှင့် clean code principles များကို စစ်ဆေးအကြံပြုပေးရန်',
      destination: 'Agent Skills format (SKILL.md)',
      input: 'Source code snippet, PR diff သို့မဟုတ် project tech stack',
      success: 'အားနည်းချက်များ၊ ဖြစ်နိုင်ချေရှိသော bug များ နှင့် ဖြေရှင်းနည်းဥပမာ Code ဖြင့် အဆင့်ဆင့် ရှင်းပြပေးခြင်း'
    }
  },
  {
    id: 'translator',
    title: 'အင်္ဂလိပ်-မြန်မာ ဘာသာပြန်ခြင်း',
    subtitle: 'နည်းပညာနှင့် စီးပွားရေးဆိုင်ရာ စာများကို သဘာဝကျသော မြန်မာစကားပြေအဖြစ် ပြန်ရန်',
    icon: 'Languages',
    category: 'Language',
    data: {
      task: 'နည်းပညာနှင့် စီးပွားရေးဆိုင်ရာ စာသားများကို သဘာဝကျပြီး သွက်လက်သော မြန်မာစကားပြေအဖြစ် ဘာသာပြန်ပေးရန်',
      destination: 'Gemini Gem instructions',
      input: 'English technical or business article, context, target audience',
      success: 'တိုက်ရိုက်ဘာသာပြန်တာမဟုတ်ဘဲ ဆီလျော်မှုရှိပြီး မြန်မာစာဖတ်သူ နားလည်လွယ်သော မြန်မာပြန်စာသား'
    }
  },
  {
    id: 'customer-support',
    title: 'Customer Service အကူအညီ',
    subtitle: 'ဖောက်သည်များ၏ စုံစမ်းမေးမြန်းမှုများကို ယဉ်ကျေးစွာ အမြန်ဖြေကြားပေးရန်',
    icon: 'MessageSquare',
    category: 'Support',
    data: {
      task: 'Customer များ မေးမြန်းလာသော စုံစမ်းမှုများနှင့် ပြဿနာများကို ယဉ်ကျေးပျူငှာစွာနှင့် တိကျစွာ အမြန်ဖြေကြားပေးရန်',
      destination: 'Gemini Gem instructions',
      input: 'Customer message, inquiry category, order ID (if any)',
      success: 'ယဉ်ကျေးသိမ်မွေ့ပြီး ပြဿနာကို ထိထိရောက်ရောက် ဖြေရှင်းပေးနိုင်သော professional customer support message'
    }
  },
  {
    id: 'meeting-summary',
    title: 'အစည်းအဝေး မှတ်စု အကျဉ်းချုပ်',
    subtitle: 'Action Items နှင့် အဓိက ဆုံးဖြတ်ချက်များကို စနစ်တကျ ခွဲခြမ်းပြရန်',
    icon: 'FileText',
    category: 'Productivity',
    data: {
      task: 'အစည်းအဝေးမှတ်စု သို့မဟုတ် စကားပြောမှတ်တမ်းများမှ အဓိက ဆုံးဖြတ်ချက်များနှင့် တာဝန်များကို စာရင်းပြုစုပေးရန်',
      destination: 'Portable skill; destination is not decided yet',
      input: 'Meeting raw notes, bullet points, discussion topics',
      success: 'Key Decisions, Action Items, Assigned Persons နှင့် Deadlines များကို ရှင်းလင်းစွာ ခွဲခြမ်းပြထားသော အကျဉ်းချုပ်'
    }
  }
];
