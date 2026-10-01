export type Language = 'my' | 'en';

export interface Translations {
  appName: string;
  appTagline: string;
  appSubtitle: string;
  langToggle: string;
  sparkSuite: string;
  templates: string;
  templatesDesc: string;
  help: string;
  reset: string;
  studioBtn: string;
  gemBtn: string;
  sparkGuideBtn: string;
  mcpGuideBtn: string;

  // Hero
  heroTag: string;
  heroTitle1: string;
  heroTitle2: string;
  heroDesc: string;
  heroStudioCallout: string;
  heroStudioOpen: string;
  heroEcosystemView: string;
  heroStartBtn: string;
  heroTemplatesBtn: string;
  step1Mini: string;
  step1MiniDesc: string;
  step2Mini: string;
  step2MiniDesc: string;
  step3Mini: string;
  step3MiniDesc: string;

  // Step Nav
  step1Nav: string;
  step2Nav: string;
  step3Nav: string;
  step4Nav: string;

  // Step 1
  step1Title: string;
  step1Subtitle: string;
  step1QuickFill: string;
  fieldTaskLabel: string;
  fieldTaskPlaceholder: string;
  fieldDestLabel: string;
  fieldInputLabel: string;
  fieldInputOptional: string;
  fieldInputPlaceholder: string;
  fieldSuccessLabel: string;
  fieldSuccessPlaceholder: string;
  destOptionSkillMd: string;
  destOptionPortable: string;
  destHintSkillMd: string;
  destHintSkillMdStudio: string;
  destHintPortable: string;
  step1Clear: string;
  step1SubmitBtn: string;
  step1Error: string;

  // Step 2
  step2Title: string;
  step2Subtitle: string;
  step2ToolbarTitle: string;
  step2Words: string;
  step2Chars: string;
  step2Download: string;
  step2OpenGem: string;
  step2CopyPrompt: string;
  step2Copied: string;
  step2CopyAndOpenGem: string;
  step2CopySuccess: string;
  step2CopyHint: string;
  step2TipTitle: string;
  step2TipDesc: string;
  step2PrevBtn: string;
  step2NextBtn: string;

  // Step 3
  step3Title: string;
  step3Subtitle: string;
  modeReviewTitle: string;
  modeReviewDesc: string;
  modeImproveTitle: string;
  modeImproveDesc: string;
  modeTestTitle: string;
  modeTestDesc: string;
  improveLabel: string;
  improvePlaceholder: string;
  quickSuggestionsTitle: string;
  promptGeneratedForMode: string;
  editPromptBtn: string;
  editingPromptBadge: string;
  step3CopyPrompt: string;
  step3Copied: string;
  step3CopyAndOpenGem: string;
  step3PrevBtn: string;
  step3NextBtn: string;

  // Step 4
  step4Title: string;
  step4Subtitle: string;
  checklistHeader: string;
  checklistCount: string;
  checkItem1Title: string;
  checkItem1Desc: string;
  checkItem2Title: string;
  checkItem2Desc: string;
  checkItem3Title: string;
  checkItem3Desc: string;
  studioBridgeTitle: string;
  studioBridgeDesc: string;
  studioBridgeCopyOpen: string;
  studioBridgeCopying: string;
  studioBridgeDirectOpen: string;
  exportMdBtn: string;
  backToReviewBtn: string;
  restartBtn: string;

  // Mobile bar
  mobileBack: string;
  mobileRecheck: string;
  mobileGenPrompt: string;
  mobileCopy: string;
  mobileCopied: string;
  mobileCopyOpenGem: string;
  mobileGotAnswer: string;
  mobileFinalCheck: string;
  mobileStartNew: string;

  // Footer
  footerGuidePrompt: string;
  footerDisclaimer: string;
  footerSuite: string;
  footerViewTools: string;
  footerFeatures: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  my: {
    appName: 'Skill Builder Guide',
    appTagline: 'Gemini Skill Builder Gem ဖြင့် AI Skill ဖန်တီးနည်း လမ်းညွှန်',
    appSubtitle: 'Spark Ecosystem & Gemini Skill Builder လမ်းညွှန်',
    langToggle: 'မြန်မာ',
    sparkSuite: 'Spark Suite',
    templates: 'ပုံစံများ',
    templatesDesc: 'အသင့်သုံး Skill ပုံစံများ ရွေးချယ်ရန်',
    help: 'အသုံးပြုနည်း',
    reset: 'ပြန်လည်စတင်ရန်',
    studioBtn: 'Skill Studio & Architect',
    gemBtn: 'Skill Builder Gem',
    sparkGuideBtn: 'Spark Guide',
    mcpGuideBtn: 'MCP Guide',

    // Hero
    heroTag: 'Spark Suite လမ်းညွှန်',
    heroTitle1: 'AI Skill တစ်ခု',
    heroTitle2: 'အမြန်ဖန်တီးမည်',
    heroDesc:
      'အကွက်လေးခု ဖြည့်ပါ။ Gemini Skill Builder Gem နှင့် Spark Skill Studio & Architect တို့တွင် တိုက်ရိုက်အသုံးပြုနိုင်မည့် မူကြမ်းနှင့် စစ်ဆေးချက်များကို ဤ Companion က စနစ်တကျ ပြင်ဆင်ပေးမည်ဖြစ်ပါသည်။',
    heroStudioCallout:
      'အဆင့်မြင့် Agent Architecture အတွက် Spark Skill Studio & Architect Web App ကို သုံးနိုင်ပါသည်',
    heroStudioOpen: 'Studio ဖွင့်မည်',
    heroEcosystemView: 'ကိရိယာစုံကြည့်ရန်',
    heroStartBtn: 'စတင်ဖန်တီးမည်',
    heroTemplatesBtn: 'အသင့်သုံး ပုံစံများ ရွေးမည်',
    step1Mini: 'အလုပ်ကို ရှင်းပြ',
    step1MiniDesc: 'လိုချင်သည့် AI လုပ်ဆောင်ချက်ကို ဖော်ပြပါ',
    step2Mini: 'Gem ထဲ ကူးထည့်',
    step2MiniDesc: 'ထုတ်ပေးသော စာသားကို Gem သို့ ပို့ပါ',
    step3Mini: 'စစ်ပြီး ပြင်ဆင်',
    step3MiniDesc: 'Review, Improve & Test စစ်ဆေးပါ',

    // Step Nav
    step1Nav: '၁။ အလုပ်သတ်မှတ်',
    step2Nav: '၂။ Gem သို့ပို့',
    step3Nav: '၃။ စစ်ပြီးပြင်',
    step4Nav: '၄။ အပြီးသတ်စစ်',

    // Step 1
    step1Title: 'Skill ၏ အချက်အလက်များ ဖြည့်ပါ',
    step1Subtitle:
      'အောက်ပါအကွက် (၄) ခုကို ဖြည့်ပေးပါ။ မဖြစ်မနေ လိုအပ်သောအချက် ၂ ချက်ကို ကြယ်နီ (*) ပြထားပါသည်။',
    step1QuickFill: 'အသင့်သုံး နမူနာဖြင့် ဖြည့်မည်',
    fieldTaskLabel: 'Skill က ဘာလုပ်ပေးရမလဲ။',
    fieldTaskPlaceholder:
      'ဥပမာ — ဖောက်သည်ပေးတဲ့ အချက်အလက်ကနေ quotation တစ်စောင် ပြင်ဆင်ပေးရန်',
    fieldDestLabel: 'ဘယ်နေရာမှာ သုံးမလဲ။',
    fieldInputLabel: 'အသုံးပြုသူက ဘာပေးမလဲ။',
    fieldInputOptional: '(မဖြစ်မနေ မလို)',
    fieldInputPlaceholder: 'ဥပမာ — ပစ္စည်းအမည်၊ စျေးနှုန်း၊ အရေအတွက်',
    fieldSuccessLabel: 'အောင်မြင်တဲ့ရလဒ်က ဘာဖြစ်မလဲ။',
    fieldSuccessPlaceholder:
      'ဥပမာ — ရှင်းလင်းပြတ်သားပြီး တွက်ချက်မှုမှန်ကန်သော quotation စာရွက်စာတမ်း',
    destOptionSkillMd: 'Agent တစ်ခုမှာ SKILL.md အဖြစ် (Folder & Markdown)',
    destOptionPortable: 'မဆုံးဖြတ်ရသေး — Portable Skill',
    destHintSkillMd: 'Code repo / AI Studio Agent Skill အတွက် အထူးသင့်တော်သည်',
    destHintSkillMdStudio: 'Spark Skill Studio တွင် Visual Architecture ဆောက်နိုင်သည်',
    destHintPortable: 'မည်သည့် AI စနစ်တွင်မဆို လွတ်လပ်စွာ အသုံးပြုနိုင်သည်',
    step1Clear: 'ရှင်းလင်းရန်',
    step1SubmitBtn: 'Gem ကို မေးရန် စာသားထုတ်မည်',
    step1Error: 'Skill ရဲ့ အလုပ်နဲ့ အောင်မြင်ရလဒ်ကို ဖြည့်ပေးပါ။',

    // Step 2
    step2Title: 'ဒီစာသားကို Gem ထဲ ကူးထည့်ပါ',
    step2Subtitle:
      'Gem က မေးခွန်းပြန်မေးရင် သိသလောက်ဖြေပါ။ မသိတာကို “မသတ်မှတ်ရသေး” လို့ ပြောလို့ရပါတယ်။',
    step2ToolbarTitle: 'Gemini Skill Builder Prompt',
    step2Words: 'စကားလုံး',
    step2Chars: 'စာလုံး',
    step2Download: 'သိမ်းရန်',
    step2OpenGem: 'Skill Builder Gem ဖွင့်ရန်',
    step2CopyPrompt: 'စာသားကူးရန်',
    step2Copied: 'ကူးပြီးပါပြီ',
    step2CopyAndOpenGem: 'ကူးယူပြီး Gem ဖွင့်မည်',
    step2CopySuccess: 'Clipboard သို့ အောင်မြင်စွာ ကူးယူပြီးပါပြီ ✓',
    step2CopyHint: 'ကလစ်တစ်ချက်နှိပ်ရုံဖြင့် စာသားတစ်ခုလုံးကို ကူးယူပါ',
    step2TipTitle: 'အရေးကြီး သတိပြုရန် —',
    step2TipDesc:
      'Gem က ထုတ်ပေးတဲ့ Skill ကို သေချာဖတ်ပါ။ ဖိုင်အမည်၊ code နဲ့ YAML ဖွဲ့စည်းပုံများကို မပြောင်းလဲဘဲ မြန်မာလို ရှင်းပြချက်များကိုသာ သေချာဖတ်ရှုဆန်းစစ်ပါ။',
    step2PrevBtn: 'ပြန်ပြင်မည်',
    step2NextBtn: 'Gem အဖြေ ရပြီ (ဆက်သွားမည်)',

    // Step 3
    step3Title: 'အခု ဘာဆက်လုပ်ချင်ပါသလဲ။',
    step3Subtitle:
      'တစ်ခုရွေးပါ။ Gem ကို ဆက်မေးရမည့် စာသား အလိုအလျောက် ထွက်ပေါ်လာပါမည်။',
    modeReviewTitle: 'အရည်အသွေးစစ်မည်',
    modeReviewDesc:
      'လိုအပ်ချက်များ၊ ပျောက်နေသောအချက်များ နှင့် Tool အမှားများကို စစ်ဆေးခိုင်းပါ',
    modeImproveTitle: 'လိုသလို ပြင်မည်',
    modeImproveDesc:
      'စိတ်ကြိုက် အချက်အလက်များ ထပ်ဖြည့်ခိုင်းပါ သို့မဟုတ် ပုံစံပြောင်းခိုင်းပါ',
    modeTestTitle: 'လက်တွေ့ စမ်းသပ်မည်',
    modeTestDesc:
      'Test cases များနှင့် စမ်းသပ်မည့် Input များကို ပြင်ဆင်ခိုင်းပါ',
    improveLabel: 'ဘာပြင်ချင်ပါသလဲ။ (လိုချင်သည့်အချက်ကို အောက်တွင်ရေးပါ)',
    improvePlaceholder:
      'ဥပမာ — error ဖြစ်လာရင် ဖြေရှင်းမယ့်နည်းလမ်း အဆင့်ဆင့် ထည့်ပေးပါ',
    quickSuggestionsTitle: 'အမြန်ရွေးချယ်စရာများ:',
    promptGeneratedForMode: 'Gem သို့ ပေးပို့ရမည့် Follow-up စာသား:',
    editPromptBtn: 'စာသားကိုယ်တိုင် ပြင်မည်',
    editingPromptBadge: 'ကိုယ်တိုင် စာသားပြင်နေသည်',
    step3CopyPrompt: 'စာသားကူးရန်',
    step3Copied: 'ကူးပြီးပါပြီ',
    step3CopyAndOpenGem: 'ကူးယူပြီး Gem သို့ သွားမည်',
    step3PrevBtn: 'မူလ Prompt သို့',
    step3NextBtn: 'စစ်ဆေးချက်ပြီးပြီ (အပြီးသတ်မည်)',

    // Step 4
    step4Title: 'Skill ကို အသုံးမပြုမီ သုံးချက်စစ်ပါ',
    step4Subtitle:
      'Gem က လှလှပပ ရေးသားပေးထားသည်ထက် လက်တွေ့တွင် အမှားအယွင်းကင်းပြီး အလုပ်ဖြစ်ရန်က ပိုမိုအရေးကြီးပါသည်။',
    checklistHeader: 'စစ်ဆေးရမည့် အချက်များ (နှိပ်၍ အမှန်ခြစ်ပါ)',
    checklistCount: 'ပြီးစီး',
    checkItem1Title: 'Tool နှင့် File များ စစ်ဆေးခြင်း',
    checkItem1Desc:
      'တကယ်ရှိသော tools/files များကိုသာ သုံးထားသလား။ မရှိသော API/Library များကို ထင်ရာစိုင်း ဖန်တီးထားခြင်း မရှိစေရပါ။',
    checkItem2Title: 'စာသားစစ်ဆေးမှု နှင့် လက်တွေ့အလုပ်လုပ်မှု ခွဲခြားခြင်း',
    checkItem2Desc:
      'Prompt စာသားကို ဖတ်ရှုစစ်ဆေးရုံမျှဖြင့် execution test အောင်မြင်ပြီးသလို မထင်မှတ်ပါနှင့်။',
    checkItem3Title: 'ဘာသာစကား ၂ မျိုး စမ်းသပ်ခြင်း',
    checkItem3Desc:
      'English Input နှင့် မြန်မာ Input နှစ်မျိုးစလုံးဖြင့် စမ်းသပ်ပါ။ ဘာသာပြန်လွဲမှားမှု မရှိစေရန် စစ်ဆေးပါ။',
    studioBridgeTitle: 'Spark Skill Studio & Architect တွင် ဆက်လက်တည်ဆောက်မည်',
    studioBridgeDesc:
      'စစ်ဆေးပြီးသော Skill ကို Spark Skill Studio သို့ ယူဆောင်သွားကာ အဆင့်မြင့် Agent Architecture, Tool Schema များနှင့် Production File များ တည်ဆောက်နိုင်ပါသည်။',
    studioBridgeCopyOpen: 'မူကြမ်းကူးပြီး Studio သို့ သွားမည်',
    studioBridgeCopying: 'မူကြမ်းကူးပြီးပါပြီ! Studio ဖွင့်နေသည်...',
    studioBridgeDirectOpen: 'Studio တိုက်ရိုက်ဖွင့်မည်',
    exportMdBtn: 'ဖိုင်အဖြစ် ဒေါင်းလုဒ်လုပ်မည် (.md)',
    backToReviewBtn: 'ထပ်မံ စစ်ဆေးပြင်ဆင်မည်',
    restartBtn: 'အသစ်တစ်ခု ထပ်မံလုပ်မည်',

    // Mobile
    mobileBack: 'နောက်ပြန်',
    mobileRecheck: 'ထပ်စစ်',
    mobileGenPrompt: 'Gem ကို မေးရန် စာသားထုတ်မယ်',
    mobileCopy: 'စာသားကူး',
    mobileCopied: 'ကူးပြီး',
    mobileCopyOpenGem: 'ကူး & Gem ဖွင့်',
    mobileGotAnswer: 'အဖြေရပြီ →',
    mobileFinalCheck: 'အပြီးသတ်စစ်မည်',
    mobileStartNew: 'အသစ်တစ်ခု စမည်',

    // Footer
    footerGuidePrompt: 'Gemini Spark အသုံးပြုနည်းနှင့် လက်တွေ့ဥပမာများ ဖတ်ရန်:',
    footerDisclaimer:
      'ဒီစာမျက်နှာတွင် Gem System Instruction မပါရှိပါ။ ပြင်ဆင်ပြီးသား Skill Builder Gem နှင့် Spark Studio တို့ကို အသုံးပြုရန် စာသားများ အထောက်အကူပြု လမ်းညွှန်သာ ဖြစ်ပါသည်။',
    footerSuite: 'Spark Ecosystem Suite',
    footerViewTools: 'ကိရိယာများ အသေးစိတ်ကြည့်ရန်',
    footerFeatures: 'Mobile Responsive & Touch Friendly',
  },

  en: {
    appName: 'Skill Builder Guide',
    appTagline: 'Interactive Companion for Creating AI Skills with Gemini',
    appSubtitle: 'Spark Ecosystem & Gemini Skill Builder Companion',
    langToggle: 'English',
    sparkSuite: 'Spark Suite',
    templates: 'Templates',
    templatesDesc: 'Choose from ready-to-use Skill presets',
    help: 'Help',
    reset: 'Reset',
    studioBtn: 'Skill Studio & Architect',
    gemBtn: 'Skill Builder Gem',
    sparkGuideBtn: 'Spark Guide',
    mcpGuideBtn: 'MCP Guide',

    // Hero
    heroTag: 'Spark Suite Guide',
    heroTitle1: 'Build an AI Skill',
    heroTitle2: 'Quickly & Reliably',
    heroDesc:
      'Fill in 4 simple fields. This companion formats the exact prompt and testing checklist to send directly into Gemini Skill Builder Gem and Spark Skill Studio.',
    heroStudioCallout:
      'For deep multi-tool Agent Architecture, use the Spark Skill Studio & Architect Web App',
    heroStudioOpen: 'Open Studio',
    heroEcosystemView: 'View All Tools',
    heroStartBtn: 'Start Building',
    heroTemplatesBtn: 'Use Presets',
    step1Mini: 'Describe Task',
    step1MiniDesc: 'Specify what you want the AI to do',
    step2Mini: 'Send to Gem',
    step2MiniDesc: 'Copy structured prompt into the Gem',
    step3Mini: 'Review & Refine',
    step3MiniDesc: 'Review, improve, and run test cases',

    // Step Nav
    step1Nav: '1. Define Task',
    step2Nav: '2. Send to Gem',
    step3Nav: '3. Review & Test',
    step4Nav: '4. Final Check',

    // Step 1
    step1Title: 'Define Your Skill Requirements',
    step1Subtitle:
      'Fill in the 4 fields below. Fields marked with red asterisk (*) are required.',
    step1QuickFill: 'Quick Fill with Preset Sample',
    fieldTaskLabel: 'What should the Skill do?',
    fieldTaskPlaceholder:
      'e.g. Generate an itemized price quotation based on customer specifications',
    fieldDestLabel: 'Where will it be deployed?',
    fieldInputLabel: 'What inputs does the user provide?',
    fieldInputOptional: '(Optional)',
    fieldInputPlaceholder: 'e.g. Item names, unit prices, tax percentage, quantity',
    fieldSuccessLabel: 'What defines a successful output?',
    fieldSuccessPlaceholder:
      'e.g. Clean, well-formatted markdown quotation with accurate totals and payment terms',
    destOptionSkillMd: 'Agent Skills format (SKILL.md folder & markdown)',
    destOptionPortable: 'Portable Skill (Destination not decided yet)',
    destHintSkillMd: 'Best for code repositories, CLI agents, and AI Studio Agent Skills',
    destHintSkillMdStudio: 'Build visual architecture in Spark Skill Studio',
    destHintPortable: 'Standard markdown format compatible with any LLM system',
    step1Clear: 'Clear',
    step1SubmitBtn: 'Generate Prompt for Gem',
    step1Error: 'Please provide both the Task description and Success criteria.',

    // Step 2
    step2Title: 'Paste This Prompt Into the Gem',
    step2Subtitle:
      'If the Gem asks follow-up questions, answer as best as you can or say "undecided".',
    step2ToolbarTitle: 'Gemini Skill Builder Prompt',
    step2Words: 'words',
    step2Chars: 'characters',
    step2Download: 'Save .md',
    step2OpenGem: 'Open Skill Builder Gem',
    step2CopyPrompt: 'Copy Prompt',
    step2Copied: 'Copied!',
    step2CopyAndOpenGem: 'Copy & Open Gem',
    step2CopySuccess: 'Successfully copied to clipboard ✓',
    step2CopyHint: 'Click to copy the entire formatted prompt',
    step2TipTitle: 'Important Best Practice —',
    step2TipDesc:
      'Carefully inspect the skill produced by the Gem. Keep file names, code blocks, and YAML frontmatter intact while validating the logic.',
    step2PrevBtn: 'Edit Inputs',
    step2NextBtn: 'Got Gem Output (Continue)',

    // Step 3
    step3Title: 'What Would You Like to Do Next?',
    step3Subtitle:
      'Choose an action. A tailored follow-up prompt will be generated automatically.',
    modeReviewTitle: 'Review Quality',
    modeReviewDesc:
      'Check for missing requirements, contradictions, and invalid tool assumptions',
    modeImproveTitle: 'Request Improvements',
    modeImproveDesc:
      'Ask for specific enhancements, extra examples, or adjusted formatting',
    modeTestTitle: 'Generate Test Suite',
    modeTestDesc:
      'Generate edge cases, incomplete queries, and dual-language tests',
    improveLabel: 'What would you like to improve or add?',
    improvePlaceholder:
      'e.g. Include step-by-step fallback handling if an API error occurs',
    quickSuggestionsTitle: 'Quick Suggestions:',
    promptGeneratedForMode: 'Follow-up Prompt to Send to Gem:',
    editPromptBtn: 'Edit Prompt Text',
    editingPromptBadge: 'Customizing prompt text',
    step3CopyPrompt: 'Copy Follow-up',
    step3Copied: 'Copied!',
    step3CopyAndOpenGem: 'Copy & Open Gem',
    step3PrevBtn: 'Back to Initial Prompt',
    step3NextBtn: 'Review Complete (Final Check)',

    // Step 4
    step4Title: '3-Point Verification Before Saving',
    step4Subtitle:
      'A skill that executes accurately and reliably is far more valuable than one that merely sounds convincing.',
    checklistHeader: 'Verification Checklist (Click to check off)',
    checklistCount: 'Completed',
    checkItem1Title: 'Tool & File Integrity',
    checkItem1Desc:
      'Are only real, existing tools and files referenced? Ensure the LLM has not hallucinated non-existent APIs or libraries.',
    checkItem2Title: 'Text Inspection vs Real Execution',
    checkItem2Desc:
      'Reading and validating prompt text does not substitute for actual execution testing in your runtime environment.',
    checkItem3Title: 'Dual-Language Testing',
    checkItem3Desc:
      'Test with both English and Myanmar inputs to verify consistent reasoning and proper terminology translation.',
    studioBridgeTitle: 'Continue in Spark Skill Studio & Architect',
    studioBridgeDesc:
      'Take your validated skill into Spark Skill Studio to generate full tool schemas, multi-file architectures, and production-ready assets.',
    studioBridgeCopyOpen: 'Copy Draft & Open Studio',
    studioBridgeCopying: 'Copied draft! Opening Studio...',
    studioBridgeDirectOpen: 'Open Studio Directly',
    exportMdBtn: 'Export Markdown (.md)',
    backToReviewBtn: 'Back to Review',
    restartBtn: 'Start New Skill',

    // Mobile
    mobileBack: 'Back',
    mobileRecheck: 'Recheck',
    mobileGenPrompt: 'Generate Prompt for Gem',
    mobileCopy: 'Copy',
    mobileCopied: 'Copied',
    mobileCopyOpenGem: 'Copy & Open Gem',
    mobileGotAnswer: 'Got Answer →',
    mobileFinalCheck: 'Final Check',
    mobileStartNew: 'Start New',

    // Footer
    footerGuidePrompt: 'Read Gemini Spark Guide & practical examples:',
    footerDisclaimer:
      'This companion does not replace Gem instructions. It serves as a structured workflow generator for Gemini Skill Builder Gem and Spark Skill Studio.',
    footerSuite: 'Spark Ecosystem Suite',
    footerViewTools: 'View Tool Details',
    footerFeatures: 'Mobile Responsive & Touch Friendly',
  },
};
