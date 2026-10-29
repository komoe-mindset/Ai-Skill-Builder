export type StepNumber = 1 | 2 | 3 | 4;

export const WORKFLOW_AI_VIDEO_URL = 'https://workflow-ai-video.komoe.org/';
export const WORKFLOW_AI_SKILL_URL = 'https://workflow-ai-skill.komoe.org/';
export const SPARK_SKILL_STUDIO_URL = 'https://skill-builder.komoe.org/';
export const GEMINI_SKILL_BUILDER_GEM_URL =
  'https://gemini.google.com/gem/1dAUYeLGNaD9iCBwQgnDdyFD3tGvNSRBw?usp=sharing';
export const GEMINI_SPARK_GUIDE_URL = 'https://gemini-spark.komoe.org/';
export const MCP_GUIDE_URL = 'https://mcp-guide.komoe.org/';

export interface SparkEcosystemTool {
  id: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  description: string;
  descriptionEn: string;
  url: string;
  badge: string;
  badgeColor: string;
  category: 'workflow' | 'studio' | 'guide';
  iconType: 'video' | 'workflow' | 'cpu' | 'bot' | 'book' | 'server';
}

export const SPARK_ECOSYSTEM_TOOLS: SparkEcosystemTool[] = [
  {
    id: 'workflow-video',
    title: 'Workflow AI Video',
    titleEn: 'Workflow AI Video',
    subtitle: 'AI Video ဖန်တီးမှုနှင့် Visual Workflow စနစ်',
    subtitleEn: 'AI Video Creation & Visual Production Workflow',
    description:
      'AI Video ထုတ်လုပ်မှု၊ Prompt to Video၊ ဇာတ်လမ်းဆင်ခြင်းနှင့် Creative Visual Workflow များကို စနစ်တကျ အကောင်အထည်ဖော်နိုင်သော ဝဘ်ဆိုဒ် ဖြစ်ပါသည်။',
    descriptionEn:
      'Powerful creative platform for AI video generation, prompt-to-video pipelines, storyboarding, and visual media workflows.',
    url: WORKFLOW_AI_VIDEO_URL,
    badge: 'AI Video',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    category: 'workflow',
    iconType: 'video',
  },
  {
    id: 'workflow-skill',
    title: 'Workflow AI Skill',
    titleEn: 'Workflow AI Skill',
    subtitle: 'AI Skill တည်ဆောက်ခြင်းနှင့် Automation Workflow',
    subtitleEn: 'AI Skill Architecture & Automation Workflows',
    description:
      'AI Agent Skills များ၊ Prompts နှင့် Logic Flow များကို ချိတ်ဆက် အလိုအလျောက် အလုပ်လုပ်ဆောင်စေနိုင်သော Workflow စနစ် ဖြစ်ပါသည်။',
    descriptionEn:
      'Design, orchestrate, and automate AI agent skill execution pipelines and autonomous operational workflows.',
    url: WORKFLOW_AI_SKILL_URL,
    badge: 'AI Skill',
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    category: 'workflow',
    iconType: 'workflow',
  },
  {
    id: 'studio',
    title: 'Spark Skill Studio & Architect',
    titleEn: 'Spark Skill Studio & Architect',
    subtitle: 'အဆင့်မြင့် Visual Studio & Architecture စနစ်',
    subtitleEn: 'Advanced Visual Studio & Agent Architecture',
    description:
      'Agent Skills များ၊ System Prompts များ၊ Schema များနှင့် Tool Definitions များကို စနစ်တကျ ရေးဆွဲတည်ဆောက်နိုင်သော အဆင့်မြင့် Web Application ဖြစ်ပါသည်။',
    descriptionEn:
      'Visual studio to architect multi-tool agent schemas, parameter definitions, and production SKILL.md packages.',
    url: SPARK_SKILL_STUDIO_URL,
    badge: 'Studio',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    category: 'studio',
    iconType: 'cpu',
  },
  {
    id: 'gem',
    title: 'Gemini Skill Builder Gem',
    titleEn: 'Gemini Skill Builder Gem',
    subtitle: 'AI Conversational Skill Generator',
    subtitleEn: 'Conversational Skill Generator in Gemini',
    description:
      'Google Gemini ပေါ်တွင် Custom Skill များကို AI နှင့် စကားပြောဆိုကာ အပြန်အလှန် စမ်းသပ်မေးမြန်း တည်ဆောက်နိုင်သော သီးသန့် AI Gem ဖြစ်ပါသည်။',
    descriptionEn:
      'Interact directly with Gemini conversational AI to draft, iterate, and refine agent prompts interactively.',
    url: GEMINI_SKILL_BUILDER_GEM_URL,
    badge: 'AI Gem',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    category: 'studio',
    iconType: 'bot',
  },
  {
    id: 'mcp-guide',
    title: 'MCP Guide Website',
    titleEn: 'MCP Guide Website',
    subtitle: 'Model Context Protocol လက်စွဲလမ်းညွှန်',
    subtitleEn: 'Model Context Protocol Guide & Tool Integration',
    description:
      'Model Context Protocol (MCP) ဆာဗာများ တည်ဆောက်ခြင်း၊ Tools ချိတ်ဆက်ခြင်းနှင့် AI Agents များအတွက် အသေးစိတ်လမ်းညွှန် ဝဘ်ဆိုဒ် ဖြစ်ပါသည်။',
    descriptionEn:
      'Comprehensive guide covering Model Context Protocol (MCP) servers, client integration, and agent tooling.',
    url: MCP_GUIDE_URL,
    badge: 'MCP Protocol',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    category: 'guide',
    iconType: 'server',
  },
  {
    id: 'guide',
    title: 'Gemini Spark User Guide',
    titleEn: 'Gemini Spark User Guide',
    subtitle: 'အသုံးပြုနည်းလမ်းညွှန်နှင့် လက်တွေ့ဥပမာများ',
    subtitleEn: 'Tutorials, Prompts & Real-world Examples',
    description:
      'Gemini Spark ကို မည်သို့စနစ်တကျ အသုံးပြုရမည်၊ Prompt ရေးသားနည်းများနှင့် လက်တွေ့အသုံးချ နမူနာများကို စုစည်းထားသော User Guide ဖြစ်ပါသည်။',
    descriptionEn:
      'Official documentation and real-world prompt crafting tutorials for the Gemini Spark ecosystem.',
    url: GEMINI_SPARK_GUIDE_URL,
    badge: 'User Guide',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    category: 'guide',
    iconType: 'book',
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
