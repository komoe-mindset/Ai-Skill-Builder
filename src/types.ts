export type StepNumber = 1 | 2 | 3 | 4;

export const SPARK_SKILL_STUDIO_URL = 'https://skill-builder.komoe.org/';

export const GEMINI_SKILL_BUILDER_GEM_URL =
  'https://gemini.google.com/gem/1dAUYeLGNaD9iCBwQgnDdyFD3tGvNSRBw?usp=sharing';

export const GEMINI_SPARK_GUIDE_URL = 'https://gemini-spark.komoe.org/';

export const MCP_GUIDE_URL = 'https://mcp-guide.komoe.org/';

export interface SparkEcosystemTool {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  badge: string;
  badgeColor: string;
}

export const SPARK_ECOSYSTEM_TOOLS: SparkEcosystemTool[] = [
  {
    id: 'studio',
    title: 'Spark Skill Studio & Architect',
    subtitle: 'အဆင့်မြင့် Visual Studio & Architecture စနစ်',
    description:
      'Agent Skills များ၊ System Prompts များ၊ Schema များနှင့် Tool Definitions များကို စနစ်တကျ ရေးဆွဲတည်ဆောက်နိုင်သော အဆင့်မြင့် Web Application ဖြစ်ပါသည်။',
    url: SPARK_SKILL_STUDIO_URL,
    badge: 'Studio & Architect',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
  },
  {
    id: 'gem',
    title: 'Gemini Skill Builder Gem',
    subtitle: 'AI Conversational Skill Generator',
    description:
      'Google Gemini ပေါ်တွင် Custom Skill များကို AI နှင့် စကားပြောဆိုကာ အပြန်အလှန် စမ်းသပ်မေးမြန်း တည်ဆောက်နိုင်သော သီးသန့် AI Gem ဖြစ်ပါသည်။',
    url: GEMINI_SKILL_BUILDER_GEM_URL,
    badge: 'AI Gem',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
  },
  {
    id: 'guide',
    title: 'Gemini Spark User Guide',
    subtitle: 'အသုံးပြုနည်းလမ်းညွှန်နှင့် လက်တွေ့ဥပမာများ',
    description:
      'Gemini Spark ကို မည်သို့စနစ်တကျ အသုံးပြုရမည်၊ Prompt ရေးသားနည်းများနှင့် လက်တွေ့အသုံးချ နမူနာများကို စုစည်းထားသော User Guide ဖြစ်ပါသည်။',
    url: GEMINI_SPARK_GUIDE_URL,
    badge: 'Docs & Examples',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
  },
  {
    id: 'mcp-guide',
    title: 'MCP Guide Website',
    subtitle: 'Model Context Protocol လက်စွဲလမ်းညွှန်',
    description:
      'Model Context Protocol (MCP) ဆာဗာများ တည်ဆောက်ခြင်း၊ Tools ချိတ်ဆက်ခြင်းနှင့် AI Agents များအတွက် အသေးစိတ်လမ်းညွှန် ဝဘ်ဆိုဒ် ဖြစ်ပါသည်။',
    url: MCP_GUIDE_URL,
    badge: 'MCP Protocol',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  },
];

export type DestinationType =
  | 'Agent Skills format (SKILL.md)'
  | 'Portable skill; destination is not decided yet';

export interface SkillFormData {
  task: string;
  destination: DestinationType;
  input: string;
  success: string;
}

export type FollowupMode = 'review' | 'improve' | 'test';

export interface PresetTemplate {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  category: string;
  data: SkillFormData;
}
