import React, { useState, useEffect } from 'react';
import {
  StepNumber,
  SkillFormData,
  GEMINI_SKILL_BUILDER_GEM_URL,
  GEMINI_SPARK_GUIDE_URL,
  SPARK_SKILL_STUDIO_URL,
} from './types';
import { Language, TRANSLATIONS } from './translations';
import { buildPromptText, copyToClipboard } from './utils/helpers';
import { ExternalLink, Cpu, BookOpen, Bot } from 'lucide-react';
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
      const stored = localStorage.getItem(LANG_STORAGE_KEY);
      if (stored === 'en' || stored === 'my') {
        setLang(stored as Language);
      } else {
        setLang('en');
      }
    } catch {
      // Ignore
    }
  }, []);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, newLang);
    } catch {
      // Ignore
    }
    // If prompt is already generated, update it in the newly selected language if user hasn't heavily customized
    if (formData.task && formData.success) {
      setGeneratedPrompt(buildPromptText(formData, newLang));
    }
  };

  const handleFormChange = (updates: Partial<SkillFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
    if (formError) setFormError('');
  };

  const handleStep1Submit = () => {
    if (!formData.task.trim() || !formData.success.trim()) {
      setFormError(
        lang === 'en'
          ? 'Please provide both the Task description and Success criteria.'
          : 'Skill ရဲ့ အလုပ်နဲ့ အောင်မြင်ရလဒ်ကို ဖြည့်ပေးပါ။'
      );
      return;
    }
    setFormError('');
    const prompt = buildPromptText(formData, lang);
    setGeneratedPrompt(prompt);
    goToStep(2);
  };

  const goToStep = (step: StepNumber) => {
    setCurrentStep(step);
    if (step > maxReachedStep) {
      setMaxReachedStep(step);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setFormData({
      task: '',
      destination: 'Agent Skills format (SKILL.md)',
      input: '',
      success: '',
    });
    setFormError('');
    setGeneratedPrompt('');
    setMaxReachedStep(1);
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTemplate = (data: SkillFormData) => {
    setFormData(data);
    const prompt = buildPromptText(data, lang);
    setGeneratedPrompt(prompt);
    goToStep(2);
  };

  const handleMobileCopy = async () => {
    if (currentStep === 2) {
      const ok = await copyToClipboard(generatedPrompt);
      if (ok) {
        setMobileCopied(true);
        setTimeout(() => setMobileCopied(false), 2000);
      }
    }
  };

  const handleMobileCopyAndOpenGem = async () => {
    await handleMobileCopy();
    window.open(GEMINI_SKILL_BUILDER_GEM_URL, '_blank', 'noopener,noreferrer');
  };

  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen pb-20 sm:pb-12 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50/30 text-slate-800">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 pt-3 sm:pt-6">
        {/* Top Header with Language Switcher */}
        <Header
          lang={lang}
          onChangeLang={handleLanguageChange}
          onOpenTemplates={() => setIsTemplatesModalOpen(true)}
          onOpenHelp={() => setIsHelpModalOpen(true)}
          onOpenEcosystem={() => setIsEcosystemModalOpen(true)}
          onReset={handleRestart}
        />

        {/* Main Application Container */}
        <main className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden">
          {/* Hero Intro (visible on Step 1) */}
          {currentStep === 1 && (
            <HeroIntro
              lang={lang}
              onStart={() => {
                const element = document.getElementById('task-input');
                element?.focus();
              }}
              onOpenTemplates={() => setIsTemplatesModalOpen(true)}
              onOpenEcosystem={() => setIsEcosystemModalOpen(true)}
            />
          )}

          {/* Interactive Step Navigation Bar */}
          <StepNavigation
            lang={lang}
            currentStep={currentStep}
            maxReachedStep={maxReachedStep}
            onSelectStep={(step) => goToStep(step)}
          />

          {/* Step 1: Define Task */}
          {currentStep === 1 && (
            <Step1TaskForm
              lang={lang}
              formData={formData}
              onChange={handleFormChange}
              onSubmit={handleStep1Submit}
              error={formError}
            />
          )}

          {/* Step 2: Copy Prompt to Gem */}
          {currentStep === 2 && (
            <Step2PromptView
              lang={lang}
              promptText={generatedPrompt}
              onUpdatePrompt={(text) => setGeneratedPrompt(text)}
              onPrev={() => goToStep(1)}
              onNext={() => goToStep(3)}
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
        <footer className="mt-8 mb-4 text-center text-xs text-slate-500 leading-relaxed px-4 space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
            <a
              href={SPARK_SKILL_STUDIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200/90 text-purple-900 font-bold transition shadow-2xs"
              title="Spark Skill Studio & Architect (skill-builder.komoe.org)"
            >
              <Cpu className="w-3.5 h-3.5 text-purple-600" />
              <span>{t.studioBtn}</span>
              <ExternalLink className="w-3 h-3 text-purple-600" />
            </a>

            <a
              href={GEMINI_SPARK_GUIDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200/90 text-amber-900 font-bold transition shadow-2xs"
              title="Gemini Spark User Guide (gemini-spark.komoe.org)"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>{t.sparkGuideBtn}</span>
              <ExternalLink className="w-3 h-3 text-amber-700" />
            </a>

            <a
              href={GEMINI_SKILL_BUILDER_GEM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200/90 text-blue-900 font-bold transition shadow-2xs"
              title="Gemini Skill Builder Gem"
            >
              <Bot className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.gemBtn}</span>
              <ExternalLink className="w-3 h-3 text-blue-600" />
            </a>
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
