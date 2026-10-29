import React, { useState, useEffect } from 'react';
import {
  StepNumber,
  SkillFormData,
  WORKFLOW_AI_VIDEO_URL,
  WORKFLOW_AI_SKILL_URL,
  GEMINI_SKILL_BUILDER_GEM_URL,
  GEMINI_SPARK_GUIDE_URL,
  SPARK_SKILL_STUDIO_URL,
  MCP_GUIDE_URL,
} from './types';
import { Language, TRANSLATIONS } from './translations';
import { buildPromptText, copyToClipboard } from './utils/helpers';
import {
  ExternalLink,
  Cpu,
  BookOpen,
  Bot,
  Server,
  Video,
  Workflow,
  Globe,
} from 'lucide-react';
import { Header } from './components/Header';
import { HeroIntro } from './components/HeroIntro';
import { StepNavigation } from './components/StepNavigation';
import { Step1TaskForm } from './components/Step1TaskForm';
import { Step2PromptView } from './components/Step2PromptView';
import { Step3ReviewTest } from './components/Step3ReviewTest';
import { Step4FinalCheck } from './components/Step4FinalCheck';
import { MobileBottomBar } from './components/MobileBottomBar';
import { TemplatesModal } from './components/TemplatesModal';
import { HelpModal } from './components/HelpModal';
import { SparkEcosystemModal } from './components/SparkEcosystemModal';

const LANG_STORAGE_KEY = 'gemini_skill_builder_lang_v1';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [currentStep, setCurrentStep] = useState<StepNumber>(1);
  const [maxReachedStep, setMaxReachedStep] = useState<number>(1);

  // Form State
  const [formData, setFormData] = useState<SkillFormData>({
    task: '',
    destination: 'Agent Skills format (SKILL.md)',
    input: '',
    success: '',
  });

  const [formError, setFormError] = useState<string>('');
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');

  // Modals
  const [isTemplatesModalOpen, setIsTemplatesModalOpen] = useState<boolean>(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState<boolean>(false);
  const [isEcosystemModalOpen, setIsEcosystemModalOpen] = useState<boolean>(false);
  const [mobileCopied, setMobileCopied] = useState<boolean>(false);

  // Load language preference on mount, defaulting to English ('en')
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(LANG_STORAGE_KEY) as Language;
      if (savedLang === 'en' || savedLang === 'my') {
        setLang(savedLang);
      } else {
        setLang('en');
      }
    } catch {
      setLang('en');
    }
  }, []);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, newLang);
    } catch {
      // Ignore localStorage write failure in restricted environments
    }
  };

  const handleFieldChange = (field: keyof SkillFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (formError) setFormError('');
  };

  const handleClearForm = () => {
    setFormData({
      task: '',
      destination: 'Agent Skills format (SKILL.md)',
      input: '',
      success: '',
    });
    setFormError('');
  };

  const handleStep1Submit = () => {
    if (!formData.task.trim()) {
      setFormError(
        lang === 'en'
          ? 'Please enter the task you want the AI Skill to accomplish.'
          : 'AI Skill ဖြင့် လုပ်ဆောင်လိုသော အလုပ် (Task) ကို ဖြည့်သွင်းပေးပါ။'
      );
      return;
    }
    if (!formData.success.trim()) {
      setFormError(
        lang === 'en'
          ? 'Please specify the success criteria.'
          : 'အောင်မြင်မှုစံနှုန်း (Success Criteria) ကို သတ်မှတ်ပေးပါ။'
      );
      return;
    }

    setFormError('');
    const prompt = buildPromptText(formData);
    setGeneratedPrompt(prompt);
    setCurrentStep(2);
    if (maxReachedStep < 2) setMaxReachedStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTemplate = (templateData: SkillFormData) => {
    setFormData(templateData);
    setFormError('');
    setIsTemplatesModalOpen(false);
  };

  const handleRestart = () => {
    handleClearForm();
    setCurrentStep(1);
    setMaxReachedStep(1);
    setGeneratedPrompt('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToStep = (step: StepNumber) => {
    if (step <= maxReachedStep || step === 1) {
      setCurrentStep(step);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleMobileCopy = async () => {
    if (!generatedPrompt) return;
    const ok = await copyToClipboard(generatedPrompt);
    if (ok) {
      setMobileCopied(true);
      setTimeout(() => setMobileCopied(false), 2000);
    }
  };

  const handleMobileCopyAndOpenGem = async () => {
    await handleMobileCopy();
    window.open(GEMINI_SKILL_BUILDER_GEM_URL, '_blank', 'noopener,noreferrer');
  };

  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-24 sm:pb-12 antialiased selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 pt-3 sm:pt-6">
        {/* Header Bar */}
        <Header
          lang={lang}
          onChangeLang={handleLanguageChange}
          onOpenTemplates={() => setIsTemplatesModalOpen(true)}
          onOpenHelp={() => setIsHelpModalOpen(true)}
          onOpenEcosystem={() => setIsEcosystemModalOpen(true)}
          onReset={handleRestart}
        />

        {/* Main Content Card Container */}
        <main className="bg-white rounded-3xl shadow-sm border border-slate-200/80 overflow-hidden">
          {/* Hero Section */}
          <HeroIntro
            lang={lang}
            onStart={() => {
              goToStep(1);
              const formEl = document.getElementById('step-content-area');
              if (formEl) {
                formEl.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            onOpenTemplates={() => setIsTemplatesModalOpen(true)}
            onOpenEcosystem={() => setIsEcosystemModalOpen(true)}
          />

          {/* Interactive Step Navigator */}
          <StepNavigation
            lang={lang}
            currentStep={currentStep}
            maxReachedStep={maxReachedStep}
            onStepClick={goToStep}
          />

          {/* Step 1: Input Requirements */}
          {currentStep === 1 && (
            <div id="step-content-area">
              <Step1TaskForm
                lang={lang}
                formData={formData}
                formError={formError}
                onChange={handleFieldChange}
                onSubmit={handleStep1Submit}
                onClear={handleClearForm}
                onOpenTemplates={() => setIsTemplatesModalOpen(true)}
              />
            </div>
          )}

          {/* Step 2: Output Formatted Prompt */}
          {currentStep === 2 && (
            <Step2PromptView
              lang={lang}
              formData={formData}
              generatedPrompt={generatedPrompt}
              onPrev={() => goToStep(1)}
              onNext={() => {
                setCurrentStep(3);
                if (maxReachedStep < 3) setMaxReachedStep(3);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}

          {/* Step 3: Review, Improve & Test */}
          {currentStep === 3 && (
            <Step3ReviewTest
              lang={lang}
              onPrev={() => goToStep(2)}
              onNext={() => goToStep(4)}
            />
          )}

          {/* Step 4: Final Quality Check */}
          {currentStep === 4 && (
            <Step4FinalCheck
              lang={lang}
              formData={formData}
              generatedPrompt={generatedPrompt}
              onRestart={handleRestart}
              onBackToReview={() => goToStep(3)}
            />
          )}
        </main>

        {/* Clean Footer Note & Resource Links */}
        <footer className="mt-8 mb-4 text-center text-xs text-slate-500 leading-relaxed px-4 space-y-3.5">
          {/* Neat & Tidy All Websites Link Chips */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
              {lang === 'en' ? 'Ecosystem Websites & Tools' : 'ချိတ်ဆက်ထားသော ဝဘ်ဆိုဒ်များနှင့် ကိရိယာများ'}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto pt-1">
              <a
                href={WORKFLOW_AI_VIDEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200/90 text-rose-900 font-bold transition shadow-2xs"
                title="Workflow AI Video (https://workflow-ai-video.komoe.org/)"
              >
                <Video className="w-3.5 h-3.5 text-rose-600" />
                <span>Workflow AI Video</span>
                <ExternalLink className="w-2.5 h-2.5 text-rose-500" />
              </a>

              <a
                href={WORKFLOW_AI_SKILL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-50 hover:bg-cyan-100 border border-cyan-200/90 text-cyan-900 font-bold transition shadow-2xs"
                title="Workflow AI Skill (https://workflow-ai-skill.komoe.org/)"
              >
                <Workflow className="w-3.5 h-3.5 text-cyan-600" />
                <span>Workflow AI Skill</span>
                <ExternalLink className="w-2.5 h-2.5 text-cyan-500" />
              </a>

              <a
                href={SPARK_SKILL_STUDIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200/90 text-purple-900 font-bold transition shadow-2xs"
                title="Spark Skill Studio & Architect (skill-builder.komoe.org)"
              >
                <Cpu className="w-3.5 h-3.5 text-purple-600" />
                <span>Spark Skill Studio</span>
                <ExternalLink className="w-2.5 h-2.5 text-purple-600" />
              </a>

              <a
                href={MCP_GUIDE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/90 text-emerald-900 font-bold transition shadow-2xs"
                title="MCP Guide Website (https://mcp-guide.komoe.org/)"
              >
                <Server className="w-3.5 h-3.5 text-emerald-600" />
                <span>MCP Guide</span>
                <ExternalLink className="w-2.5 h-2.5 text-emerald-600" />
              </a>

              <a
                href={GEMINI_SPARK_GUIDE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200/90 text-amber-900 font-bold transition shadow-2xs"
                title="Gemini Spark User Guide (gemini-spark.komoe.org)"
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                <span>Spark Guide</span>
                <ExternalLink className="w-2.5 h-2.5 text-amber-700" />
              </a>

              <a
                href={GEMINI_SKILL_BUILDER_GEM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200/90 text-blue-900 font-bold transition shadow-2xs"
                title="Gemini Skill Builder Gem"
              >
                <Bot className="w-3.5 h-3.5 text-blue-600" />
                <span>Skill Gem</span>
                <ExternalLink className="w-2.5 h-2.5 text-blue-600" />
              </a>
            </div>
          </div>

          <p>
            {t.footerDisclaimer}
          </p>
          <div className="flex items-center justify-center gap-3 text-[11px] text-slate-400">
            <span>{t.footerSuite}</span>
            <span>•</span>
            <button
              type="button"
              onClick={() => setIsEcosystemModalOpen(true)}
              className="text-indigo-600 hover:text-indigo-800 underline font-medium cursor-pointer"
            >
              {t.footerViewTools}
            </button>
            <span>•</span>
            <span>{t.footerFeatures}</span>
          </div>
        </footer>

      </div>

      {/* Mobile Sticky Touch Bottom Bar */}
      <MobileBottomBar
        lang={lang}
        currentStep={currentStep}
        onPrev={() => {
          if (currentStep === 4) goToStep(3);
          else if (currentStep > 1) goToStep((currentStep - 1) as StepNumber);
        }}
        onNext={() => {
          if (currentStep === 1) handleStep1Submit();
          else if (currentStep === 2) goToStep(3);
          else if (currentStep === 3) goToStep(4);
          else if (currentStep === 4) handleRestart();
        }}
        onCopy={currentStep === 2 ? handleMobileCopy : undefined}
        onCopyAndOpenGem={currentStep === 2 ? handleMobileCopyAndOpenGem : undefined}
        copied={mobileCopied}
      />

      {/* Modals */}
      <TemplatesModal
        lang={lang}
        isOpen={isTemplatesModalOpen}
        onClose={() => setIsTemplatesModalOpen(false)}
        onSelectTemplate={handleSelectTemplate}
      />

      <HelpModal
        lang={lang}
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
      />

      <SparkEcosystemModal
        lang={lang}
        isOpen={isEcosystemModalOpen}
        onClose={() => setIsEcosystemModalOpen(false)}
      />
    </div>
  );
}
