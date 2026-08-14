import rawProjects from './projects.json';
import type {
  Locale,
  Project,
  ProjectCategory,
  ProjectCardViewModel,
} from '../types/project';
import { resolvePublicAsset } from '../utils/resolvePublicAsset';
import { validateProjects } from '../utils/validateProjects';
import { translateStackItem } from '../i18n/messages';

const compareProjects = (first: Project, second: Project): number => {
  if (first.featured !== second.featured) {
    return first.featured ? -1 : 1;
  }

  if (
    first.category === 'own' &&
    second.category === 'own' &&
    first.order !== second.order
  ) {
    return first.order - second.order;
  }

  if (!first.featured && !second.featured) {
    const dateComparison = second.date.localeCompare(first.date);

    if (dateComparison !== 0) {
      return dateComparison;
    }
  }

  if (first.order !== second.order) {
    return first.order - second.order;
  }

  return second.date.localeCompare(first.date);
};

const formatDate = (date: string): string => {
  const [year, month] = date.split('-');

  return `${month}/${year}`;
};

const formatStack = (stack: string[], locale: Locale): string => {
  const localizedStack = stack.map((item) => translateStackItem(item, locale));

  if (localizedStack.length === 1) {
    return `${localizedStack[0]}.`;
  }

  const conjunction = locale === 'es' ? ' y ' : ' & ';
  const firstItems = localizedStack.slice(0, -1).join(', ');

  return `${firstItems}${conjunction}${localizedStack.at(-1)}.`;
};

const formatAiUsage = (
  project: Project,
  locale: Locale,
): string | undefined => {
  if (!project.aiAssisted || !project.aiUsage) {
    return undefined;
  }

  const label = locale === 'es' ? 'IA' : 'AI';

  return `${label}: ${project.aiUsage.tool} · ${project.aiUsage.model}`;
};

const toProjectCard = (
  project: Project,
  locale: Locale,
): ProjectCardViewModel => {
  const image = project.media.image;

  if (!image) {
    throw new Error(
      `[projects.json] El proyecto publicado "${project.id}" no tiene portada.`,
    );
  }

  return {
    id: project.id,
    title: project.card.title[locale],
    description: project.card.description[locale],
    featured: project.featured,
    aiAssisted: project.aiAssisted,
    aiAssistedLabel: locale === 'es' ? 'Asistido con IA' : 'AI Assisted',
    workInProgress: project.workInProgress,
    workInProgressLabel:
      locale === 'es' ? 'Proyecto en desarrollo' : 'Work in progress',
    aiUsage: formatAiUsage(project, locale),
    languages:
      project.category === 'audiovisual'
        ? undefined
        : formatStack(project.card.stack, locale),
    imgUrl: resolvePublicAsset(image.file),
    imgAlt: image.alt[locale],
    imgWidth: image.width,
    imgHeight: image.height,
    liveUrl: project.links?.live,
    demoUrl: project.links?.demo,
    caseStudyUrl: project.links?.caseStudy,
    link: project.links?.repository,
    date: formatDate(project.date),
  };
};

export const projects = validateProjects(rawProjects);

export const publishedProjects = projects
  .filter((project) => project.status === 'published')
  .sort(compareProjects);

export const getProjectsByCategory = (
  category: ProjectCategory,
  locale: Locale = 'en',
): ProjectCardViewModel[] =>
  publishedProjects
    .filter((project) => project.category === category)
    .map((project) => toProjectCard(project, locale));
