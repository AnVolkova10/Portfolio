export type Locale = 'es' | 'en';

export type ProjectStatus = 'draft' | 'published' | 'archived';

export type ProjectCategory =
  | 'professional'
  | 'own'
  | 'lab'
  | 'audiovisual'
  | 'beyond-code';

export interface LocalizedText {
  es: string;
  en: string;
}

export interface ProjectImage {
  file: string;
  width: number;
  height: number;
  alt: LocalizedText;
}

export interface ProjectVideo {
  url: string;
  title: LocalizedText;
}

export interface ProjectMedia {
  image?: ProjectImage;
  video?: ProjectVideo;
}

export interface ProjectReference {
  title: LocalizedText;
  url: string;
}

export interface ProjectLinks {
  live?: string;
  demo?: string;
  repository?: string;
  caseStudy?: string;
  historical?: string;
  references?: ProjectReference[];
}

export interface ProjectCardContent {
  title: LocalizedText;
  description: LocalizedText;
  stack: string[];
}

export interface ProjectAiUsage {
  tool: string;
  model: string;
  purpose: LocalizedText;
}

export interface Project {
  id: string;
  slug: string;
  status: ProjectStatus;
  category: ProjectCategory;
  featured: boolean;
  order: number;
  date: string;
  client?: string;
  agency?: string;
  productionCompany?: string;
  company?: string;
  aiAssisted: boolean;
  workInProgress: boolean;
  aiUsage?: ProjectAiUsage;
  title: LocalizedText;
  summary: LocalizedText;
  role: LocalizedText;
  stack: string[];
  card: ProjectCardContent;
  media: ProjectMedia;
  links?: ProjectLinks;
}

export interface ProjectCardViewModel {
  id: string;
  title: string;
  description: string;
  featured?: boolean;
  aiAssisted?: boolean;
  aiAssistedLabel?: string;
  workInProgress?: boolean;
  workInProgressLabel?: string;
  aiUsage?: string;
  languages?: string;
  imgUrl: string;
  imgAlt?: string;
  imgWidth?: number;
  imgHeight?: number;
  liveUrl?: string;
  demoUrl?: string;
  caseStudyUrl?: string;
  link?: string;
  date?: string;
}
