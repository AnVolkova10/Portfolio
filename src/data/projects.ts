import rawProjects from './projects.json';
import { legacyProjectsDev } from './site';
import type {
  Locale,
  Project,
  ProjectCardViewModel,
} from '../types/project';
import { resolvePublicAsset } from '../utils/resolvePublicAsset';
import { validateProjects } from '../utils/validateProjects';

const compareProjects = (first: Project, second: Project): number => {
  if (first.featured !== second.featured) {
    return first.featured ? -1 : 1;
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
  if (stack.length === 1) {
    return `${stack[0]}.`;
  }

  const conjunction = locale === 'es' ? ' y ' : ' & ';
  const firstItems = stack.slice(0, -1).join(', ');

  return `${firstItems}${conjunction}${stack.at(-1)}.`;
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
    languages: formatStack(project.card.stack, locale),
    imgUrl: resolvePublicAsset(image.file),
    imgAlt: image.alt[locale],
    imgWidth: image.width,
    imgHeight: image.height,
    liveUrl: project.links?.live,
    demoUrl: project.links?.demo,
    date: formatDate(project.date),
  };
};

const slugify = (value: string): string =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const legacyProjectCards: ProjectCardViewModel[] = legacyProjectsDev.map(
  (project) => ({
    id: `legacy-dev-${slugify(project.title)}`,
    ...project,
    liveUrl: project.link,
  }),
);

export const projects = validateProjects(rawProjects);

export const publishedProjects = projects
  .filter((project) => project.status === 'published')
  .sort(compareProjects);

export const getProjectsDev = (locale: Locale = 'en'): ProjectCardViewModel[] => {
  const currentProjectCards = publishedProjects.map((project) => ({
    order: project.order,
    card: toProjectCard(project, locale),
  }));
  const cardsBeforeArmaduki = currentProjectCards
    .filter(({ order }) => order < 3)
    .map(({ card }) => card);
  const cardsAfterArmaduki = currentProjectCards
    .filter(({ order }) => order >= 3)
    .map(({ card }) => card);
  const [armaduki, ...remainingLegacyCards] = legacyProjectCards;

  return [
    ...cardsBeforeArmaduki,
    ...(armaduki ? [armaduki] : []),
    ...cardsAfterArmaduki,
    ...remainingLegacyCards,
  ];
};

export const projectsDev = getProjectsDev();
