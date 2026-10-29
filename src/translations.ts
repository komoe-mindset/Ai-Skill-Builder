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
  workflowAiVideoBtn: string;
  workflowAiSkillBtn: string;
  allWebsitesBtn: string;
  categoryWorkflows: string;
  categoryStudios: string;
  categoryGuides: string;

  // Hero
  heroTag: string;
  heroTitle: string;
  heroDesc: string;
  heroSkillDefTitle: string;
  heroSkillDef: string;
  heroStartBtn: string;
  heroTemplatesBtn: string;
  heroOtherTools: string;
  heroOtherToolsDesc: string;
  heroStudioCallout: string;
  heroStudioOpen: string;
  heroEcosystemView: string;

  // Quick Start 3-step Guide
  quickStartTitle: string;
  quickStartStep1Badge: string;
  quickStartStep1Title: string;
  quickStartStep1Desc: string;
  quickStartStep2Badge: string;
  quickStartStep2Title: string;
  quickStartStep2Desc: string;
  quickStartStep3Badge: string;
  quickStartStep3Title: string;
  quickStartStep3Desc: string;

  // Gemini Test Prompt
  testPromptCardTitle: string;
  testPromptCardSubtitle: string;
  testPromptCardCopyBtn: string;
  testPromptCardCopied: string;
  testPromptCardHelper: string;
  exactTestPrompt: string;

  // Step Nav
  step1Nav: string;
  step2Nav: string;
  step3Nav: string;
  step4Nav: string;
  stepProgressLabel: string;
  stepStatusPreparing: string;
  stepStatusCompleted: string;

  // Step 1
  step1Title: string;
  step1Subtitle: string;
  step1CurrentGuide: string;
  step1PresetsPrompt: string;
  fieldTaskLabel: string;
  fieldTaskHelper: string;
  fieldTaskPlaceholder: string;
  fieldTaskError: string;
  fieldDestLabel: string;
  fieldDestHelp: string;
  destOptionSkillMd: string;
  destOptionPortable: string;
  destExplanationSkillMd: string;
  destExplanationPortable: string;
  fieldInputLabel: string;
  fieldInputOptional: string;
  fieldInputHelper: string;
  fieldInputPlaceholder: string;
  fieldSuccessLabel: string;
  fieldSuccessHelper: string;
  fieldSuccessPlaceholder: string;
  fieldSuccessError: string;
  step1SubmitBtn: string;
  step1SubmitHint: string;
  step1Clear: string;
  presetAppliedSuccess: string;
  presetConfirmOverwrite: string;

  // Step 2
  step2Title: string;
  step2Subtitle: string;
  step2CurrentGuide: string;
  step2PromptLabel: string;
  step2PromptNotice: string;
  step2HandoffTitle: string;
  step2Handoff1: string;
  step2Handoff2: string;
  step2Handoff3: string;
  step2Handoff4: string;
  step2Handoff5: string;
  step2ToolbarTitle: string;
  step2Words: string;
  step2Chars: string;
  step2DownloadPrompt: string;
  step2CopyBtn: string;
  step2Copied: string;
  step2OpenGemBtn: string;
  step2CopyAndOpenGemBtn: string;
  step2PrevBtn: string;
  step2NextBtn: string;
  step2ClipboardFallback: string;

  // Step 3
  step3Title: string;
  step3Subtitle: string;
  step3CurrentGuide: string;
  step3Intro: string;
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
  step4CurrentGuide: string;
  pasteSkillHeader: string;
  pasteSkillHelp: string;
  pasteSkillPlaceholder: string;
  validatorTitle: string;
  validatorSuccess: string;
  validatorMissingFrontmatter: string;
  validatorNoContent: string;
  checklistHeader: string;
  checklistCount: string;
  checkItem1Title: string;
  checkItem1Desc: string;
  checkItem2Title: string;
  checkItem2Desc: string;
  checkItem3Title: string;
  checkItem3Desc: string;
  finalGuidanceTitle: string;
  finalGuidance1: string;
  finalGuidance2: string;
  finalGuidance3: string;
  honestDisclosureTitle: string;
  honestDisclosureText: string;
  studioBridgeTitle: string;
  studioBridgeDesc: string;
  studioBridgeCopyOpen: string;
  studioBridgeCopying: string;
  studioBridgeDirectOpen: string;
  downloadSkillMdBtn: string;
  downloadChecklistLogBtn: string;
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
    appSubtitle: 'Gemini Skill Builder အထောက်အကူပြု လမ်းညွှန် companion',
    langToggle: 'မြန်မာ',
    sparkSuite: 'Spark Suite',
    templates: 'ပုံစံများ',
    templatesDesc: 'အသင့်သုံး Skill ပုံစံများ ရွေးချယ်ရန်',
    help: 'အသုံးပြုနည်း',
    reset: 'ပြန်လည်စတင်ရန်',
    studioBtn: 'Skill Studio',
    gemBtn: 'Skill Builder Gem',
    sparkGuideBtn: 'Spark Guide',
    mcpGuideBtn: 'MCP Guide',
    workflowAiVideoBtn: 'Workflow AI Video',
    workflowAiSkillBtn: 'Workflow AI Skill',
    allWebsitesBtn: 'ဝဘ်ဆိုဒ်များနှင့် ကိရိယာများ',
    categoryWorkflows: 'AI Workflows',
    categoryStudios: 'Studio & Generator',
    categoryGuides: 'Guides & Documentation',

    // Hero
    heroTag: 'AI Skill ဖန်တီးနည်း လမ်းညွှန်',
    heroTitle: 'AI Skill တစ်ခုကို အဆင့်လိုက် ဖန်တီးပါ',
    heroDesc:
      'သင်လုပ်ချင်တဲ့အလုပ်ကို ဖြည့်ပါ။ ဒီ website က Gemini ထဲမှာ အသုံးပြုရန် prompt ကို ပြင်ဆင်ပေးပါမယ်။ ထို့နောက် ရရှိလာသော Skill ကို စစ်ဆေးပြီး သိမ်းဆည်းနိုင်ပါတယ်။',
    heroSkillDefTitle: 'Skill ဆိုတာ ဘာလဲ။',
    heroSkillDef:
      'Skill ဆိုတာ AI ကို အလုပ်တစ်ခု ဘယ်လိုလုပ်ရမလဲဆိုတာ ညွှန်ပြထားတဲ့ လမ်းညွှန်ချက် ဖြစ်ပါတယ်။',
    heroStartBtn: 'ဒီနေရာမှာ စတင်ပါ',
    heroTemplatesBtn: 'ဥပမာတစ်ခုဖြင့် စတင်မည်',
    heroOtherTools: 'ပိုမိုသိရှိရန် & အခြားကိရိယာများ',
    heroOtherToolsDesc:
      'သီးခြားဝဘ်ဆိုဒ်အသစ်တွင် ပွင့်မည့် အထောက်အကူပြု ကိရိယာများ (လိုအပ်မှသာ ဖွင့်သုံးနိုင်ပါသည်)',
    heroStudioCallout:
      'အဆင့်မြင့် Visual Multi-tool Architecture လိုအပ်ပါက Spark Skill Studio ကို အသုံးပြုနိုင်ပါသည် (ရွေးချယ်နိုင်သည်)',
    heroStudioOpen: 'Studio ဖွင့်မည်',
    heroEcosystemView: 'ကိရိယာစုံကြည့်ရန်',

    // Quick Start 3-step Guide
    quickStartTitle: 'အမြန်စတင်နည်း (၃ ဆင့်)',
    quickStartStep1Badge: 'အဆင့် (၁)',
    quickStartStep1Title: 'AI Agent ၏ လုပ်ဆောင်ချက်ကို ရွေးပါ သို့မဟုတ် ရေးပါ',
    quickStartStep1Desc:
      'သင့် AI Agent လုပ်ဆောင်စေချင်သည့် အလုပ်ကို အောက်တွင် ရိုက်ထည့်ပါ (သို့မဟုတ် နမူနာတစ်ခုကို ရွေးပါ)',
    quickStartStep2Badge: 'အဆင့် (၂)',
    quickStartStep2Title: 'ထွက်လာသော Skill မူကြမ်းကို လိုအပ်သလို ပြင်ဆင်ပါ',
    quickStartStep2Desc:
      'အသင့်ထွက်လာသော Prompt မူကြမ်းကို Gemini သို့ ပို့ပြီး လိုအပ်သလို မွမ်းမံပြင်ဆင်ပါ',
    quickStartStep3Badge: 'အဆင့် (၃)',
    quickStartStep3Title: 'Skill.md ကို Copy ကူးပြီး Gemini တွင် စမ်းသပ်ပါ',
    quickStartStep3Desc:
      'Skill.md ကို Copy ကူးယူပြီး Gemini တွင် Test Prompt ဖြင့် အစအဆုံး လက်တွေ့စမ်းသပ်ပါ',

    // Gemini Test Prompt
    testPromptCardTitle: 'Gemini တွင် စမ်းသပ်ရန် Prompt (Testing Instructions)',
    testPromptCardSubtitle:
      'Skill.md ကို Gemini သို့ ထည့်သွင်းပြီးပါက အောက်ပါ Prompt ကို အသုံးပြု၍ Skill လုပ်ဆောင်ချက် အပြည့်အစုံကို စမ်းသပ်နိုင်ပါသည်',
    testPromptCardCopyBtn: 'Copy Test Prompt',
    testPromptCardCopied: 'Test Prompt ကို ကူးယူပြီးပါပြီ ✓',
    testPromptCardHelper:
      'Skill.md ကို Gemini သို့ ထည့်သွင်းပြီးပါက အထက်ပါ Prompt ကို ရိုက်ထည့်၍ Skill လုပ်ဆောင်ချက် အပြည့်အစုံကို စမ်းသပ်နိုင်ပါသည်။',
    exactTestPrompt:
      "Let's explore what it does with an example. Make up a realistic user prompt and then use the full Skill end to end.",

    // Step Nav
    step1Nav: 'အလုပ်ကို ပြောပြပါ',
    step2Nav: 'Gemini သို့ ပို့ပါ',
    step3Nav: 'Skill ကို စစ်ဆေးပါ',
    step4Nav: 'စမ်းသပ်ပြီး သိမ်းပါ',
    stepProgressLabel: 'ပြီးစီးမှု',
    stepStatusPreparing: 'စတင်ပြင်ဆင်ဆဲ',
    stepStatusCompleted: 'ပြီးစီးပါပြီ',

    // Step 1
    step1Title: 'အဆင့် ၁ — အလုပ်ကို ပြောပြပါ',
    step1Subtitle:
      'သင့် AI Agent လုပ်ဆောင်စေချင်သည့် အလုပ်နှင့် ရလဒ်ကို အောက်တွင် ဖြည့်စွက်ပါ။ မဖြစ်မနေ လိုအပ်သောအချက် ၂ ချက်ကို ကြယ်နီ (*) ဖြင့် ပြထားပါသည်။',
    step1CurrentGuide:
      'သင့် AI Agent လုပ်ဆောင်စေချင်သည့် အလုပ်ကို အောက်တွင် ရိုက်ထည့်ပါ။',
    step1PresetsPrompt:
      'ဘယ်လိုစတင်ရမလဲ မသေချာပါက အောက်ပါ နမူနာများမှ တစ်ခုကို ရွေးချယ်နိုင်ပါသည်',
    fieldTaskLabel: 'သင့် AI Agent ကို ဘာအလုပ် လုပ်ခိုင်းချင်ပါသလဲ။',
    fieldTaskHelper:
      'သင့် AI Agent လုပ်ဆောင်စေချင်သည့် အလုပ်ကို အောက်တွင် ရိုက်ထည့်ပါ (တစ်ကြောင်း သို့မဟုတ် နှစ်ကြောင်းဖြင့် ရှင်းလင်းစွာ ရေးနိုင်ပါသည်)',
    fieldTaskPlaceholder:
      'ဥပမာ — အစည်းအဝေးမှတ်စုတွေကို အကျဉ်းချုပ်ပြီး ဆက်လုပ်ရန်အချက်များ ထုတ်ပေးပါ။',
    fieldTaskError: 'ဆက်လုပ်ရန် သင့် AI Agent လုပ်ဆောင်စေချင်သည့် အလုပ်ကို အရင်ရေးပါ။',
    fieldDestLabel: 'ဒီ Skill ကို ဘယ်နေရာမှာ သုံးချင်ပါသလဲ။',
    fieldDestHelp: 'မသေချာသေးရင် လက်ရှိရွေးထားတဲ့ အဖြေကို ထားနိုင်ပါတယ်။',
    destOptionSkillMd: 'Agent Skills format (SKILL.md folder ပုံစံ)',
    destOptionPortable: 'Portable skill (နေရာတိုင်းသုံး စာသားပုံစံ)',
    destExplanationSkillMd:
      'SKILL.md: AI Agents များ (Claude, Codex, Antigravity စသည်) တွင် တိုက်ရိုက်ထည့်သွင်းအသုံးပြုနိုင်ရန် ဖန်တီးထားသော စံ standard folder/file ပုံစံဖြစ်ပါသည်။ (AI စနစ်တိုင်းတွင် တပ်ဆင်ပုံ မတူညီနိုင်ပါ)',
    destExplanationPortable:
      'Portable Skill: သီးခြား format မလိုဘဲ မည်သည့် AI chat သို့မဟုတ် model တွင်မဆို စာသားအဖြစ် ကူးယူအသုံးပြုနိုင်သော ပုံစံဖြစ်ပါသည်။',
    fieldInputLabel: 'AI ကို ဘယ်လိုအချက်အလက် ပေးမလဲ။',
    fieldInputOptional: '(မသိသေးလျှင် မဖြည့်ဘဲ ဆက်လုပ်နိုင်ပါတယ်)',
    fieldInputHelper:
      'AI က အလုပ်လုပ်ရန် သင်ထည့်ပေးမည့် စာရွက်စာတမ်း သို့မဟုတ် အချက်အလက်များ',
    fieldInputPlaceholder:
      'ဥပမာ — အစည်းအဝေးမှတ်စု၊ ဆွေးနွေးထားသော အကြောင်းအရာများ',
    fieldSuccessLabel: 'AI က ဘယ်လိုရလဒ် ပြန်ပေးစေချင်ပါသလဲ။',
    fieldSuccessHelper: 'နောက်ဆုံးရလဒ်မှာ ဘာတွေ ပါစေချင်သလဲဆိုတာ ရေးပါ။',
    fieldSuccessPlaceholder:
      'ဥပမာ — အကျဉ်းချုပ်၊ ဆုံးဖြတ်ချက်များနှင့် ဆက်လုပ်ရန်အချက်များ ပါဝင်ပါစေ။',
    fieldSuccessError: 'ဆက်လုပ်ရန် သင်လိုချင်သော ရလဒ်ကို အရင်ရေးပါ။',
    step1SubmitBtn: 'Gemini အတွက် Prompt ပြင်ဆင်မည်',
    step1SubmitHint:
      'နောက်တစ်ဆင့်တွင် Prompt ကို ကူးယူပြီး Gemini Gem ထဲသို့ ထည့်သွင်းရပါမည်။',
    step1Clear: 'ဖျက်မည်',
    presetAppliedSuccess: 'နမူနာအချက်အလက် ဖြည့်ပြီးပါပြီ။ လိုအပ်သလို ပြင်နိုင်ပါတယ်။',
    presetConfirmOverwrite:
      'လက်ရှိ ရေးထားသောအချက်အလက်များကို ရွေးချယ်ထားသော နမူနာဖြင့် အစားထိုးမလား။',

    // Step 2
    step2Title: 'အဆင့် ၂ — Gemini သို့ ပို့ပါ',
    step2Subtitle:
      'ပြင်ဆင်ထားသော Prompt ကို ကူးယူပြီး Gemini Skill Builder Gem ထဲတွင် ထည့်သွင်းမေးမြန်းပါ။',
    step2CurrentGuide:
      'အောက်ပါ Prompt ကို ကူးယူပြီး Gemini Gem ထဲသို့ ထည့်သွင်း၍ စကားစတင်မေးမြန်းပါ။',
    step2PromptLabel: 'Gemini သို့ ပို့ရန် Prompt (Intermediate Prompt)',
    step2PromptNotice:
      'သတိပြုရန် — ဤစာသားသည် Gemini ထံ ပို့မည့် စကားစတင်မေးမြန်းရန် Prompt ဖြစ်ပြီး နောက်ဆုံးထွက်ရှိလာမည့် SKILL.md ဖိုင် မဟုတ်သေးပါ။',
    step2HandoffTitle: 'Gemini တွင် လုပ်ဆောင်ရမည့် အဆင့်များ:',
    step2Handoff1: '၁။ အောက်ပါ Prompt ကို ကူးယူပါ။',
    step2Handoff2: '၂။ Gemini Skill Builder Gem ကို ဖွင့်ပါ။ (သီးခြား tab အသစ်တွင် ပွင့်ပါမည်)',
    step2Handoff3: '၃။ Prompt ကို Gemini ထဲတွင် ကူးထည့် (Paste) ပြီး ပို့ပါ။',
    step2Handoff4: '၄။ Gemini မှ ရရှိလာသော Skill ကို ဖတ်ရှုစစ်ဆေးပါ။',
    step2Handoff5: '၅။ လိုအပ်ပါက နောက်တစ်ဆင့်ရှိ စစ်ဆေးချက်များဖြင့် စမ်းသပ်ပါ။',
    step2ToolbarTitle: 'ပြင်ဆင်ပြီး Prompt',
    step2Words: 'လုံး',
    step2Chars: 'လုံးရေ',
    step2DownloadPrompt: 'Prompt ဒေါင်းလုဒ်',
    step2CopyBtn: 'Prompt ကို ကူးယူမည်',
    step2Copied: 'ကူးယူပြီးပါပြီ ✓',
    step2OpenGemBtn: 'Gemini Skill Builder Gem ဖွင့်မည် ↗',
    step2CopyAndOpenGemBtn: 'ကူးယူပြီး Gem ဖွင့်မည် ↗',
    step2PrevBtn: 'အဆင့် ၁ သို့ ပြန်သွားမည်',
    step2NextBtn: 'စစ်ဆေးရန် နောက်တစ်ဆင့်သို့',
    step2ClipboardFallback:
      'Browser ကန့်သတ်ချက်ကြောင့် အလိုအလျောက် မကူးယူနိုင်ပါက အထက်ပါ စာသားကွက်ထဲရှိ စာများကို ဖိ၍ select all လုပ်ကာ ကူးယူ (Copy) နိုင်ပါသည်။',

    // Step 3
    step3Title: 'အဆင့် ၃ — Skill ကို စစ်ဆေးပါ',
    step3Subtitle:
      'Gemini ထံမှ ရရှိလာသော အဖြေကို သုံးသပ်ပြီး လိုအပ်ပါက ထပ်မံပြင်ဆင်ခိုင်းနိုင်ပါသည်။',
    step3CurrentGuide:
      'Gemini ၏ အဖြေကို ဖတ်ရှုပြီး လိုအပ်ပါက ပြင်ဆင်ရန် Follow-up Prompt ထုတ်ယူပါ။',
    step3Intro:
      'Gemini က Skill မူကြမ်း ထုတ်ပေးပြီးပါက စစ်ဆေးရန် (Review)၊ ပြင်ဆင်ရန် (Improve) သို့မဟုတ် စမ်းသပ်ရန် (Test) အောက်ပါ မေးခွန်းစာသားများကို ကူးယူပြီး Gem ထဲတွင် ဆက်လက်မေးမြန်းနိုင်ပါသည်။',
    modeReviewTitle: 'စစ်ဆေးချက် မေးခွန်း',
    modeReviewDesc:
      'Input ပျောက်ဆုံးမှု၊ ရလဒ်စံနှုန်းနှင့် instruction ဆန့်ကျင်မှုများကို Gemini အား စစ်ဆေးခိုင်းရန်',
    modeImproveTitle: 'ထပ်မံ ပြင်ဆင်ခိုင်းရန်',
    modeImproveDesc:
      'ဖော်ပြချက်တိုစေရန်၊ မြန်မာ/အင်္ဂလိပ် နှစ်မျိုးစလုံးပါစေရန် စသည်တို့ကို သီးသန့် ညွှန်ကြားရန်',
    modeTestTitle: 'စမ်းသပ်မှု ပြင်ဆင်ရန်',
    modeTestDesc:
      'ပုံမှန် request များနှင့် edge case များကို စမ်းသပ်နိုင်မည့် test suite ထုတ်ခိုင်းရန်',
    improveLabel: 'ပြင်ဆင်လိုသော အချက်အလက်များ (ရွေးချယ်နိုင်သည်):',
    improvePlaceholder:
      'ဥပမာ — မြန်မာလို ပိုမိုရှင်းလင်းစွာ ရေးပေးပါ၊ စာရင်းဇယား table ပုံစံဖြင့် ထုတ်ပေးပါ...',
    quickSuggestionsTitle: 'အသုံးများသော အကြံပြုချက်များ:',
    promptGeneratedForMode: 'Gemini ထံ ဆက်လက်ပို့ရန် မေးခွန်းစာသား:',
    editPromptBtn: 'စာသား ပြင်ဆင်မည်',
    editingPromptBadge: 'တည်းဖြတ်နေသည်',
    step3CopyPrompt: 'Follow-up Prompt ကူးယူမည်',
    step3Copied: 'ကူးယူပြီးပါပြီ ✓',
    step3CopyAndOpenGem: 'ကူးယူပြီး Gem သို့ သွားမည် ↗',
    step3PrevBtn: 'Prompt ကြည့်ရန် နောက်သို့',
    step3NextBtn: 'စမ်းသပ်ပြီး သိမ်းရန် နောက်တစ်ဆင့်သို့',

    // Step 4
    step4Title: 'အဆင့် ၄ — စမ်းသပ်ပြီး သိမ်းပါ',
    step4Subtitle:
      'Gemini ထံမှ နောက်ဆုံးရရှိသော Skill ကို စစ်ဆေးပြီး SKILL.md ဖိုင်အဖြစ် သိမ်းဆည်းပါ။',
    step4CurrentGuide:
      'Gemini မှ ရရှိလာသော Skill ကို စစ်ဆေးပြီး SKILL.md အဖြစ် သိမ်းဆည်းနိုင်ပါသည်။',
    pasteSkillHeader: 'Gemini မှ ရရှိလာသော Skill စာသား (ဒီနေရာတွင် ကူးထည့်ပါ):',
    pasteSkillHelp:
      'Gemini ထဲမှ ထွက်လာသော အပြီးသတ် SKILL.md စာသားကို ဤနေရာတွင် ကူးထည့်ပါက စံချိန်မီမမီ စစ်ဆေးပေးပြီး SKILL.md ဖိုင်အဖြစ် တိုက်ရိုက် ဒေါင်းလုဒ်ဆွဲနိုင်ပါမည်။',
    pasteSkillPlaceholder:
      'Gemini ထံမှ ရရှိသော Skill စာသား (ဥပမာ --- name: ... description: ... အပြည့်အစုံ) ကို ဒီနေရာတွင် Paste လုပ်ပါ...',
    validatorTitle: 'Agent Skills (SKILL.md) စံစစ်ဆေးချက်:',
    validatorSuccess:
      'YAML frontmatter (name, description) နှင့် ညွှန်ကြားချက်များ ပြည့်စုံမှန်ကန်ပါသည်။',
    validatorMissingFrontmatter:
      'သတိပြုရန် — စံချိန်မီ Agent Skill ဖြစ်ရန် ထိပ်ဆုံးတွင် YAML frontmatter (--- name: ... description: ... ---) ပါဝင်ရန် လိုအပ်ပါသည်။',
    validatorNoContent:
      'Gemini မှ ရရှိလာသော Skill စာသားကို အထက်ပါအကွက်တွင် ကူးထည့်ပေးပါ။',
    checklistHeader: 'အတည်ပြု စစ်ဆေးချက်များ:',
    checklistCount: 'ချက် စစ်ပြီး',
    checkItem1Title: '၁။ အဓိကရည်ရွယ်ချက် ပြည့်စုံမှု',
    checkItem1Desc:
      'Gemini ထုတ်ပေးသော Skill သည် မိမိလိုချင်သော task ကို တိကျစွာ လုပ်ဆောင်နိုင်ခြင်း ရှိမရှိ စစ်ဆေးပြီးပါပြီ။',
    checkItem2Title: '၂။ မရှိသော tool များ မပါဝင်မှု',
    checkItem2Desc:
      'တကယ်မရှိသော API သို့မဟုတ် ဖိုင်များကို ထည့်မတွက်ထားဘဲ သဘာဝကျမှု ရှိမရှိ စစ်ဆေးပြီးပါပြီ။',
    checkItem3Title: '၃။ စမ်းသပ်မှု နမူနာဖြင့် စမ်းသပ်ပြီးမှု',
    checkItem3Desc:
      'အနည်းဆုံး လက်တွေ့ input နမူနာတစ်ခုဖြင့် Gemini ထဲတွင် စမ်းသပ်ပြီး အဖြေမှန်ထွက်သည်ကို အတည်ပြုပြီးပါပြီ။',
    finalGuidanceTitle: 'နောက်ဆုံး လိုက်နာရမည့် လမ်းညွှန်ချက် (၃) ချက်:',
    finalGuidance1: '၁။ SKILL.md ထဲရှိ ညွှန်ကြားချက်များကို အရင်စစ်ဆေးပါ။',
    finalGuidance2: '၂။ သင်အသုံးပြုမည့် AI Agent ၏ Skill တပ်ဆင်နည်းကို လိုက်နာပါ။',
    finalGuidance3: '၃။ ဥပမာတစ်ခုဖြင့် စမ်းသပ်ပြီး လိုအပ်သလို ပြင်ဆင်ပါ။',
    honestDisclosureTitle: 'အရေးကြီးသော မှတ်ချက်:',
    honestDisclosureText:
      'ဖိုင်ဒေါင်းလုဒ်ဆွဲခြင်းသည် ကွန်ပျူတာထဲသို့ ဖိုင်သိမ်းဆည်းခြင်းသာ ဖြစ်ပြီး AI Agent ထဲသို့ အလိုအလျောက် install လုပ်ပေးခြင်း မဟုတ်ပါ။ သက်ဆိုင်ရာ Agent ၏ လမ်းညွှန်ချက်အတိုင်း Skill Folder ထဲ ထည့်သွင်းရပါမည်။',
    studioBridgeTitle: 'အဆင့်မြင့် Visual Studio သို့ ချိတ်ဆက်ရန် (ရွေးချယ်နိုင်သည်)',
    studioBridgeDesc:
      'Multi-tool schemas နှင့် complex architecture များ လိုအပ်မှသာ Spark Skill Studio & Architect Web App ကို အသုံးပြုနိုင်ပါသည်။ (ရိုးရှင်းသော Skill များအတွက် မဖြစ်မနေ မလိုပါ)',
    studioBridgeCopyOpen: 'Studio တွင် ဆက်ဆောက်မည် ↗',
    studioBridgeCopying: 'ကူးယူပြီးပါပြီ ✓',
    studioBridgeDirectOpen: 'Studio သို့ တိုက်ရိုက်သွားမည် ↗',
    downloadSkillMdBtn: 'SKILL.md ဖိုင် ဒေါင်းလုဒ်ဆွဲမည်',
    downloadChecklistLogBtn: 'Prompt နှင့် စစ်ဆေးချက်မှတ်တမ်း ဒေါင်းလုဒ်',
    backToReviewBtn: 'အဆင့် ၃ သို့ ပြန်သွားမည်',
    restartBtn: 'Skill အသစ် ပြန်စမည်',

    // Mobile bar
    mobileBack: 'နောက်သို့',
    mobileRecheck: 'ပြန်စစ်မည်',
    mobileGenPrompt: 'Prompt ပြင်ဆင်မည်',
    mobileCopy: 'Prompt ကူးမည်',
    mobileCopied: 'ကူးပြီး ✓',
    mobileCopyOpenGem: 'Gem ဖွင့်မည် ↗',
    mobileGotAnswer: 'အဖြေရပြီ (စစ်မည်)',
    mobileFinalCheck: 'သိမ်းဆည်းမည်',
    mobileStartNew: 'အသစ်စမည်',

    // Footer
    footerGuidePrompt: 'Gemini Skill Builder Guide Companion',
    footerDisclaimer:
      'ဒီစာမျက်နှာသည် Gemini Skill Builder Gem တွင် အသုံးပြုရန် prompt နှင့် စစ်ဆေးချက်များကို အထောက်အကူပြု ပြင်ဆင်ပေးသော companion application ဖြစ်ပါသည်။ Gemini နှင့် ပြင်ပကိရိယာများသည် သီးခြားဝန်ဆောင်မှုများ ဖြစ်ကြပါသည်။',
    footerSuite: 'Spark Ecosystem Suite',
    footerViewTools: 'ကိရိယာများ အသေးစိတ်ကြည့်ရန်',
    footerFeatures: 'Mobile Responsive & Touch Friendly',
  },

  en: {
    appName: 'Skill Builder Guide',
    appTagline: 'Interactive Companion for Creating AI Skills with Gemini',
    appSubtitle: 'Interactive companion and prompt preparer for Gemini Skill Builder',
    langToggle: 'English',
    sparkSuite: 'Spark Suite',
    templates: 'Templates',
    templatesDesc: 'Choose from ready-to-use Skill presets',
    help: 'Help',
    reset: 'Reset',
    studioBtn: 'Skill Studio',
    gemBtn: 'Skill Builder Gem',
    sparkGuideBtn: 'Spark Guide',
    mcpGuideBtn: 'MCP Guide',
    workflowAiVideoBtn: 'Workflow AI Video',
    workflowAiSkillBtn: 'Workflow AI Skill',
    allWebsitesBtn: 'Ecosystem Websites',
    categoryWorkflows: 'AI Workflows',
    categoryStudios: 'Studio & Generator',
    categoryGuides: 'Guides & Documentation',

    // Hero
    heroTag: 'AI Skill Creation Guide',
    heroTitle: 'Build an AI Skill Step-by-Step',
    heroDesc:
      'Fill in what you want your AI to do. This website prepares the exact structured prompt to send to Gemini Skill Builder Gem. Afterwards, you can review, test, and save the resulting skill.',
    heroSkillDefTitle: 'What is an AI Skill?',
    heroSkillDef:
      'An AI Skill is a structured instruction package that teaches an AI model or agent how to perform a specific task reliably.',
    heroStartBtn: 'Start Building Skill',
    heroTemplatesBtn: 'Start with an Example',
    heroOtherTools: 'Other Ecosystem Tools',
    heroOtherToolsDesc:
      'Connected companion tools that open in separate websites (use only when needed)',
    heroStudioCallout:
      'For deep multi-tool schema architecture, you can open Spark Skill Studio (optional)',
    heroStudioOpen: 'Open Studio',
    heroEcosystemView: 'View All Tools',

    // Quick Start 3-step Guide
    quickStartTitle: 'Quick Start Guide (3 Simple Steps)',
    quickStartStep1Badge: 'Step 1',
    quickStartStep1Title: 'Choose or Describe Task',
    quickStartStep1Desc:
      'Type what you want your AI Agent to do below, or select a preset example to begin.',
    quickStartStep2Badge: 'Step 2',
    quickStartStep2Title: 'Review & Customize',
    quickStartStep2Desc:
      'Send the prepared prompt to Gemini and customize the instructions to fit your exact needs.',
    quickStartStep3Badge: 'Step 3',
    quickStartStep3Title: 'Export to Gemini & Test',
    quickStartStep3Desc:
      'Copy your finalized Skill.md and test it end-to-end in Gemini with the testing prompt.',

    // Gemini Test Prompt
    testPromptCardTitle: 'Gemini Testing Prompt (Testing Instructions)',
    testPromptCardSubtitle:
      'Once you enter your Skill.md in Gemini, paste the prompt below to test the full skill end-to-end',
    testPromptCardCopyBtn: 'Copy Test Prompt',
    testPromptCardCopied: 'Copied Test Prompt ✓',
    testPromptCardHelper:
      'Once you enter your Skill.md in Gemini, paste the prompt above to test the full skill end to end.',
    exactTestPrompt:
      "Let's explore what it does with an example. Make up a realistic user prompt and then use the full Skill end to end.",

    // Step Nav
    step1Nav: 'Describe Task',
    step2Nav: 'Send to Gemini',
    step3Nav: 'Review Skill',
    step4Nav: 'Test & Save',
    stepProgressLabel: 'Progress',
    stepStatusPreparing: 'Drafting',
    stepStatusCompleted: 'Completed',

    // Step 1
    step1Title: 'Step 1 — Describe the Task',
    step1Subtitle:
      'Describe what you want the AI to do and the expected outcome. The two fields with red asterisks (*) are required.',
    step1CurrentGuide:
      'Fill in the task details and success criteria below.',
    step1PresetsPrompt:
      'Not sure what to write? Choose a ready-to-use preset example below to get started quickly.',
    fieldTaskLabel: 'What task should the AI accomplish?',
    fieldTaskHelper: 'Describe the task in 1 or 2 concise sentences.',
    fieldTaskPlaceholder:
      'Example — Summarize meeting notes, identify decisions, and extract follow-up action items.',
    fieldTaskError:
      'Please enter the task you want the AI to accomplish before proceeding.',
    fieldDestLabel: 'Where will you deploy this Skill?',
    fieldDestHelp:
      'If unsure, keep the current default selection.',
    destOptionSkillMd: 'Agent Skills format (SKILL.md standard folder)',
    destOptionPortable: 'Portable skill (universal text for any AI runtime)',
    destExplanationSkillMd:
      'SKILL.md: Standard folder/file specification for agent runtimes (Claude, Codex, Antigravity, etc.). Note that installation steps vary across agent platforms.',
    destExplanationPortable:
      'Portable Skill: Universal plain markdown text with no specialized folder structure, usable in any AI chat or LLM prompt directly.',
    fieldInputLabel: 'What input will the user provide to the AI?',
    fieldInputOptional: '(Optional — leave blank if not yet determined)',
    fieldInputHelper:
      'The documents, messages, or raw data the user will feed into the AI.',
    fieldInputPlaceholder:
      'Example — Meeting raw notes, transcript, discussion bullet points',
    fieldSuccessLabel: 'What output should the AI deliver?',
    fieldSuccessHelper:
      'Specify the required elements in the final response.',
    fieldSuccessPlaceholder:
      'Example — Clean summary with decisions, action items, assignees, and deadlines.',
    fieldSuccessError:
      'Please specify the expected success criteria before proceeding.',
    step1SubmitBtn: 'Prepare Prompt for Gemini',
    step1SubmitHint:
      'In the next step, you will copy this prompt and paste it into Gemini Skill Builder Gem.',
    step1Clear: 'Clear',
    presetAppliedSuccess:
      'Preset example loaded! You can edit any field as needed.',
    presetConfirmOverwrite:
      'Do you want to replace your currently entered content with this preset example?',

    // Step 2
    step2Title: 'Step 2 — Send to Gemini',
    step2Subtitle:
      'Copy the prepared prompt and paste it into Gemini Skill Builder Gem to generate your skill.',
    step2CurrentGuide:
      'Copy the prompt below and start your conversation in the Gemini Gem.',
    step2PromptLabel: 'Prompt to Send to Gemini (Intermediate Prompt)',
    step2PromptNotice:
      'Note: This text is the initial conversation prompt to send to Gemini, not the final SKILL.md file.',
    step2HandoffTitle: 'Step-by-step instructions for Gemini:',
    step2Handoff1: '1. Copy the prepared prompt below.',
    step2Handoff2: '2. Open Gemini Skill Builder Gem (opens in a new tab).',
    step2Handoff3: '3. Paste the prompt into Gemini and press send.',
    step2Handoff4: '4. Read and review the initial skill generated by Gemini.',
    step2Handoff5: '5. Proceed to the next step to review and test the response.',
    step2ToolbarTitle: 'Prepared Prompt',
    step2Words: 'words',
    step2Chars: 'characters',
    step2DownloadPrompt: 'Download Prompt',
    step2CopyBtn: 'Copy Prompt',
    step2Copied: 'Copied to Clipboard ✓',
    step2OpenGemBtn: 'Open Gemini Skill Builder Gem ↗',
    step2CopyAndOpenGemBtn: 'Copy & Open Gem ↗',
    step2PrevBtn: 'Back to Step 1',
    step2NextBtn: 'Continue to Review Step',
    step2ClipboardFallback:
      'If clipboard copy is blocked by browser permissions, select all text in the box above and copy manually.',

    // Step 3
    step3Title: 'Step 3 — Review the Skill',
    step3Subtitle:
      'Inspect Gemini’s generated skill and formulate follow-up prompts to refine it if needed.',
    step3CurrentGuide:
      'Review Gemini’s response and grab follow-up prompts to refine or test it.',
    step3Intro:
      'Once Gemini drafts your skill, inspect it for missing inputs, tool contradictions, or unfulfilled success criteria. Select an option below to generate a follow-up prompt to send to the Gem:',
    modeReviewTitle: 'Review & Audit',
    modeReviewDesc:
      'Ask Gemini to audit the skill for ambiguous triggers, missing inputs, and logic contradictions.',
    modeImproveTitle: 'Refine & Polish',
    modeImproveDesc:
      'Instruct Gemini to make outputs concise, add bilingual support, or format results into tables.',
    modeTestTitle: 'Generate Test Suite',
    modeTestDesc:
      'Ask Gemini to draft realistic test queries, edge cases, and expected observable behaviors.',
    improveLabel: 'Specific changes requested (optional):',
    improvePlaceholder:
      'Example — Make explanations concise, provide bilingual English and Myanmar outputs...',
    quickSuggestionsTitle: 'Popular refinement suggestions:',
    promptGeneratedForMode: 'Follow-up prompt to send to Gemini:',
    editPromptBtn: 'Edit Prompt Text',
    editingPromptBadge: 'Editing',
    step3CopyPrompt: 'Copy Follow-up Prompt',
    step3Copied: 'Copied ✓',
    step3CopyAndOpenGem: 'Copy & Open Gem ↗',
    step3PrevBtn: 'Back to Step 2',
    step3NextBtn: 'Continue to Test & Save',

    // Step 4
    step4Title: 'Step 4 — Test & Save',
    step4Subtitle:
      'Verify the finalized skill against the checklist and save it as SKILL.md.',
    step4CurrentGuide:
      'Inspect the finalized skill, run quality checks, and download as SKILL.md.',
    pasteSkillHeader: 'Final Skill Generated by Gemini (Paste here):',
    pasteSkillHelp:
      'Paste the finalized SKILL.md content generated by Gemini here. The validator will check the YAML frontmatter and allow direct download as SKILL.md.',
    pasteSkillPlaceholder:
      'Paste the full SKILL.md response from Gemini here (including --- name: ... description: ...)...',
    validatorTitle: 'Agent Skills (SKILL.md) Validator:',
    validatorSuccess:
      'Valid Agent Skill format: YAML frontmatter (name, description) and instructions are present.',
    validatorMissingFrontmatter:
      'Notice: To comply with the standard Agent Skills specification, the file should begin with YAML frontmatter (--- name: ... description: ... ---).',
    validatorNoContent:
      'Paste the finalized skill from Gemini above to validate and download as SKILL.md.',
    checklistHeader: 'Verification Checklist:',
    checklistCount: 'checked',
    checkItem1Title: '1. Objective & Success Criteria Met',
    checkItem1Desc:
      'Confirmed that Gemini’s generated skill fulfills the exact task and produces the expected output format.',
    checkItem2Title: '2. No Invalid Tool or API Assumptions',
    checkItem2Desc:
      'Verified that the instructions do not assume non-existent external tools, APIs, or files.',
    checkItem3Title: '3. Tested with a Real-World Sample',
    checkItem3Desc:
      'Tested with at least one realistic sample query in Gemini and confirmed the expected behavior.',
    finalGuidanceTitle: 'Three Final Rules of Thumb:',
    finalGuidance1: '1. Inspect the instructions in SKILL.md before deployment.',
    finalGuidance2: '2. Follow the installation guide for your specific AI agent runtime.',
    finalGuidance3: '3. Test with sample inputs and refine as needed.',
    honestDisclosureTitle: 'Important Clarification:',
    honestDisclosureText:
      'Downloading this file saves it to your local device. It does not automatically install the skill into an AI agent. Follow your specific AI agent’s documentation for where to place the skill folder.',
    studioBridgeTitle: 'Connect with Visual Studio & Architect (Optional)',
    studioBridgeDesc:
      'Use Spark Skill Studio & Architect only if you need visual multi-tool schemas and complex architectures. Simple skills do not require it.',
    studioBridgeCopyOpen: 'Architect in Studio ↗',
    studioBridgeCopying: 'Copied ✓',
    studioBridgeDirectOpen: 'Open Studio Directly ↗',
    downloadSkillMdBtn: 'Download SKILL.md',
    downloadChecklistLogBtn: 'Download Prompt & Checklist Log',
    backToReviewBtn: 'Back to Step 3',
    restartBtn: 'Start a New Skill',

    // Mobile bar
    mobileBack: 'Back',
    mobileRecheck: 'Recheck',
    mobileGenPrompt: 'Prepare Prompt',
    mobileCopy: 'Copy Prompt',
    mobileCopied: 'Copied ✓',
    mobileCopyOpenGem: 'Open Gem ↗',
    mobileGotAnswer: 'Got Answer (Review)',
    mobileFinalCheck: 'Save Skill',
    mobileStartNew: 'Start New',

    // Footer
    footerGuidePrompt: 'Gemini Skill Builder Guide Companion',
    footerDisclaimer:
      'This website is an interactive companion that prepares prompts and testing checklists for Gemini Skill Builder Gem. Gemini and other ecosystem websites are separate independent services.',
    footerSuite: 'Spark Ecosystem Suite',
    footerViewTools: 'View Ecosystem Details',
    footerFeatures: 'Mobile Responsive & Touch Friendly',
  },
};
