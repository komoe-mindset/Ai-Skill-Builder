import React, { useState, useEffect } from 'react';
import { StepNumber, SkillFormData, SavedSkill, GEMINI_SKILL_BUILDER_GEM_URL, GEMINI_SPARK_GUIDE_URL } from './types';
import { PRESET_TEMPLATES } from './data/presets';
import { buildPromptText, copyToClipboard } from './utils/helpers';
import { ExternalLink } from 'lucide-react';
import { Header } from './components/Header';
import { HeroIntro } from './components/HeroIntro';
import { StepNavigation } from './components/StepNavigation';
import { Step1TaskForm } from './components/Step1TaskForm';
import { Step2PromptView } from './components/Step2PromptView';
import { Step3ReviewTest } from './components/Step3ReviewTest';
import { Step4FinalCheck } from './components/Step4FinalCheck';
import { MobileBottomBar } from './components/MobileBottomBar';
import { SavedSkillsModal } from './components/SavedSkillsModal';
import { TemplatesModal } from './components/TemplatesModal';
import { HelpModal } from './components/HelpModal';

const LOCAL_STORAGE_KEY = 'gemini_skill_builder_saved_skills_v1';

export default function App() {
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

  // Modals & Storage
  const [savedSkills, setSavedSkills] = useState<SavedSkill[]>([]);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState<boolean>(false);
  const [isTemplatesModalOpen, setIsTemplatesModalOpen] = useState<boolean>(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState<boolean>(false);
  const [mobileCopied, setMobileCopied] = useState<boolean>(false);

  // Load saved skills on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setSavedSkills(parsed);
        }
      }
    } catch {
      // Ignore parse errors
    }
  }, []);

  // Save to localStorage helper
  const updateSavedSkills = (skills: SavedSkill[]) => {
    setSavedSkills(skills);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(skills));
    } catch {
      // Storage limits or private mode
    }
  };

  const handleFormChange = (updates: Partial<SkillFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
    if (formError) setFormError('');
  };

  const handleStep1Submit = () => {
    if (!formData.task.trim() || !formData.success.trim()) {
      setFormError('Skill ရဲ့ အလုပ်နဲ့ အောင်မြင်ရလဒ်ကို ဖြည့်ပေးပါ။');
      return;
    }
    setFormError('');
    const prompt = buildPromptText(formData);
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

  const handleSaveCurrentSkill = () => {
    const newSkill: SavedSkill = {
      id: 'skill_' + Date.now(),
      timestamp: Date.now(),
      data: { ...formData },
      generatedPrompt: generatedPrompt || buildPromptText(formData),
    };
    const updated = [newSkill, ...savedSkills.filter((s) => s.data.task !== formData.task)];
    updateSavedSkills(updated);
  };

  const isCurrentSkillSaved = savedSkills.some(
    (s) => s.data.task === formData.task && s.data.destination === formData.destination
  );

  const handleDeleteSavedSkill = (id: string) => {
    const updated = savedSkills.filter((s) => s.id !== id);
    updateSavedSkills(updated);
  };

  const handleLoadSavedSkill = (data: SkillFormData) => {
    setFormData(data);
    const prompt = buildPromptText(data);
    setGeneratedPrompt(prompt);
    goToStep(2);
  };

  const handleSelectTemplate = (data: SkillFormData) => {
    setFormData(data);
    const prompt = buildPromptText(data);
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

  return (
    <div className="min-h-screen pb-20 sm:pb-12 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50/30 text-slate-800">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 pt-3 sm:pt-6">
        {/* Top Header */}
        <Header
          savedCount={savedSkills.length}
          onOpenSaved={() => setIsSavedModalOpen(true)}
          onOpenTemplates={() => setIsTemplatesModalOpen(true)}
          onOpenHelp={() => setIsHelpModalOpen(true)}
          onReset={handleRestart}
        />

        {/* Main Application Container */}
        <main className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden">
          {/* Hero Intro (visible on Step 1) */}
          {currentStep === 1 && (
            <HeroIntro
              onStart={() => {
                const element = document.getElementById('task-input');
                element?.focus();
              }}
              onOpenTemplates={() => setIsTemplatesModalOpen(true)}
            />
          )}

          {/* Interactive Step Navigation Bar */}
          <StepNavigation
            currentStep={currentStep}
            maxReachedStep={maxReachedStep}
            onSelectStep={(step) => goToStep(step)}
          />

          {/* Step 1: Define Task */}
          {currentStep === 1 && (
            <Step1TaskForm
              formData={formData}
              onChange={handleFormChange}
              onSubmit={handleStep1Submit}
              error={formError}
            />
          )}

          {/* Step 2: Copy Prompt to Gem */}
          {currentStep === 2 && (
            <Step2PromptView
              promptText={generatedPrompt}
              onUpdatePrompt={(text) => setGeneratedPrompt(text)}
              onPrev={() => goToStep(1)}
              onNext={() => goToStep(3)}
            />
          )}

          {/* Step 3: Review, Improve & Test */}
          {currentStep === 3 && (
            <Step3ReviewTest
              onPrev={() => goToStep(2)}
              onNext={() => goToStep(4)}
            />
          )}

          {/* Step 4: Final Quality Check */}
          {currentStep === 4 && (
            <Step4FinalCheck
              formData={formData}
              generatedPrompt={generatedPrompt}
              onRestart={handleRestart}
              onBackToReview={() => goToStep(3)}
              onSaveSkill={handleSaveCurrentSkill}
              isSaved={isCurrentSkillSaved}
            />
          )}
        </main>

        {/* Clean Footer Note & Resource Link */}
        <footer className="mt-6 mb-4 text-center text-xs text-slate-500 leading-relaxed px-4 space-y-2">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/90 border border-slate-200/90 shadow-2xs text-xs text-slate-700">
            <span>Gemini Spark အသုံးပြုနည်းနှင့် လက်တွေ့ဥပမာများ ဖတ်ရန်:</span>
            <a
              href={GEMINI_SPARK_GUIDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-amber-800 hover:text-amber-950 inline-flex items-center gap-1 underline underline-offset-2"
            >
              <span>Gemini Spark User Guide (gemini-spark.komoe.org)</span>
              <ExternalLink className="w-3 h-3 text-amber-700" />
            </a>
          </div>

          <p>
            ဒီစာမျက်နှာတွင် Gem System Instruction မပါရှိပါ။ ပြင်ဆင်ပြီးသား Skill Builder Gem ကို အသုံးပြုရန် စာသားများ အထောက်အကူပြု လမ်းညွှန်သာ ဖြစ်ပါသည်။
          </p>
          <p className="text-[11px] text-slate-400">
            Offline Capable • Mobile Responsive • Touch Friendly
          </p>
        </footer>

      </div>

      {/* Mobile Sticky Touch Bottom Bar */}
      <MobileBottomBar
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
      <SavedSkillsModal
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        savedSkills={savedSkills}
        onLoadSkill={handleLoadSavedSkill}
        onDeleteSkill={handleDeleteSavedSkill}
      />

      <TemplatesModal
        isOpen={isTemplatesModalOpen}
        onClose={() => setIsTemplatesModalOpen(false)}
        onSelectTemplate={handleSelectTemplate}
      />

      <HelpModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
      />
    </div>
  );
}
