export type StepNumber = 1 | 2 | 3 | 4;

export const GEMINI_SKILL_BUILDER_GEM_URL =
  'https://gemini.google.com/gem/1dAUYeLGNaD9iCBwQgnDdyFD3tGvNSRBw?usp=sharing';

export const GEMINI_SPARK_GUIDE_URL = 'https://gemini-spark.komoe.org/';

export type DestinationType =
  | 'Agent Skills format (SKILL.md)'
  | 'Gemini Gem instructions'
  | 'Portable skill; destination is not decided yet';

export interface SkillFormData {
  task: string;
  destination: DestinationType;
  input: string;
  success: string;
}

export type FollowupMode = 'review' | 'improve' | 'test';

export interface SavedSkill {
  id: string;
  timestamp: number;
  data: SkillFormData;
  generatedPrompt: string;
}

export interface PresetTemplate {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  category: string;
  data: SkillFormData;
}
