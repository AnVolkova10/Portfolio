import type {
  LocalizedText,
  Project,
  ProjectCategory,
  ProjectImage,
  ProjectLinks,
  ProjectMedia,
  ProjectReference,
  ProjectStatus,
  ProjectVideo,
} from '../types/project';

const projectStatuses: ProjectStatus[] = ['draft', 'published', 'archived'];
const projectCategories: ProjectCategory[] = [
  'client',
  'personal',
  'audiovisual',
];

const validationError = (path: string, message: string): never => {
  throw new Error(`[projects.json] ${path}: ${message}`);
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const requireRecord = (
  value: unknown,
  path: string,
): Record<string, unknown> => {
  if (!isRecord(value)) {
    return validationError(path, 'debe ser un objeto.');
  }

  return value;
};

const requireString = (value: unknown, path: string): string => {
  if (typeof value !== 'string' || value.trim() === '') {
    return validationError(path, 'debe ser un texto no vacío.');
  }

  return value;
};

const requireOptionalString = (value: unknown, path: string): string | undefined =>
  value === undefined ? undefined : requireString(value, path);

const requireBoolean = (value: unknown, path: string): boolean => {
  if (typeof value !== 'boolean') {
    return validationError(path, 'debe ser booleano.');
  }

  return value;
};

const requirePositiveInteger = (value: unknown, path: string): number => {
  if (typeof value !== 'number' || !Number.isInteger(value) || value <= 0) {
    return validationError(path, 'debe ser un número entero positivo.');
  }

  return value;
};

const requireNonNegativeInteger = (value: unknown, path: string): number => {
  if (typeof value !== 'number' || !Number.isInteger(value) || value < 0) {
    return validationError(path, 'debe ser un número entero mayor o igual a cero.');
  }

  return value;
};

const requireStringArray = (value: unknown, path: string): string[] => {
  if (!Array.isArray(value) || value.length === 0) {
    return validationError(path, 'debe ser una lista con al menos un elemento.');
  }

  return value.map((item, index) => requireString(item, `${path}[${index}]`));
};

const requireLocalizedText = (value: unknown, path: string): LocalizedText => {
  const localizedText = requireRecord(value, path);

  return {
    es: requireString(localizedText.es, `${path}.es`),
    en: requireString(localizedText.en, `${path}.en`),
  };
};

const requireUrl = (value: unknown, path: string): string => {
  const url = requireString(value, path);

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
      return validationError(path, 'debe usar el protocolo http o https.');
    }
  } catch {
    return validationError(path, 'debe ser una URL válida.');
  }

  return url;
};

const requireOptionalUrl = (value: unknown, path: string): string | undefined =>
  value === undefined ? undefined : requireUrl(value, path);

const requireImage = (value: unknown, path: string): ProjectImage => {
  const image = requireRecord(value, path);

  return {
    file: requireString(image.file, `${path}.file`),
    width: requirePositiveInteger(image.width, `${path}.width`),
    height: requirePositiveInteger(image.height, `${path}.height`),
    alt: requireLocalizedText(image.alt, `${path}.alt`),
  };
};

const requireVideo = (value: unknown, path: string): ProjectVideo => {
  const video = requireRecord(value, path);

  return {
    url: requireUrl(video.url, `${path}.url`),
    title: requireLocalizedText(video.title, `${path}.title`),
  };
};

const requireMedia = (value: unknown, path: string): ProjectMedia => {
  const media = requireRecord(value, path);
  const image = media.image === undefined
    ? undefined
    : requireImage(media.image, `${path}.image`);
  const video = media.video === undefined
    ? undefined
    : requireVideo(media.video, `${path}.video`);

  if (!image && !video) {
    return validationError(path, 'debe incluir una imagen o un video.');
  }

  return { image, video };
};

const requireReference = (value: unknown, path: string): ProjectReference => {
  const reference = requireRecord(value, path);

  return {
    title: requireLocalizedText(reference.title, `${path}.title`),
    url: requireUrl(reference.url, `${path}.url`),
  };
};

const requireLinks = (value: unknown, path: string): ProjectLinks => {
  const links = requireRecord(value, path);
  const references = links.references === undefined
    ? undefined
    : Array.isArray(links.references)
      ? links.references.map((reference, index) =>
          requireReference(reference, `${path}.references[${index}]`),
        )
      : validationError(`${path}.references`, 'debe ser una lista.');

  return {
    live: requireOptionalUrl(links.live, `${path}.live`),
    demo: requireOptionalUrl(links.demo, `${path}.demo`),
    repository: requireOptionalUrl(links.repository, `${path}.repository`),
    caseStudy: requireOptionalUrl(links.caseStudy, `${path}.caseStudy`),
    historical: requireOptionalUrl(links.historical, `${path}.historical`),
    references,
  };
};

const requireProject = (value: unknown, path: string): Project => {
  const project = requireRecord(value, path);
  const status = requireString(project.status, `${path}.status`);
  const category = requireString(project.category, `${path}.category`);

  if (!projectStatuses.includes(status as ProjectStatus)) {
    return validationError(
      `${path}.status`,
      `debe ser uno de: ${projectStatuses.join(', ')}.`,
    );
  }

  if (!projectCategories.includes(category as ProjectCategory)) {
    return validationError(
      `${path}.category`,
      `debe ser una de: ${projectCategories.join(', ')}.`,
    );
  }

  const date = requireString(project.date, `${path}.date`);

  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(date)) {
    return validationError(`${path}.date`, 'debe usar el formato YYYY-MM.');
  }

  const card = requireRecord(project.card, `${path}.card`);
  const media = requireMedia(project.media, `${path}.media`);
  const links = project.links === undefined
    ? undefined
    : requireLinks(project.links, `${path}.links`);

  if (status === 'published' && !media.image) {
    return validationError(
      `${path}.media.image`,
      'es obligatoria para un proyecto publicado en la grilla actual.',
    );
  }

  return {
    id: requireString(project.id, `${path}.id`),
    slug: requireString(project.slug, `${path}.slug`),
    status: status as ProjectStatus,
    category: category as ProjectCategory,
    featured: requireBoolean(project.featured, `${path}.featured`),
    order: requireNonNegativeInteger(project.order, `${path}.order`),
    date,
    client: requireOptionalString(project.client, `${path}.client`),
    agency: requireOptionalString(project.agency, `${path}.agency`),
    company: requireOptionalString(project.company, `${path}.company`),
    aiAssisted: requireBoolean(project.aiAssisted, `${path}.aiAssisted`),
    title: requireLocalizedText(project.title, `${path}.title`),
    summary: requireLocalizedText(project.summary, `${path}.summary`),
    role: requireLocalizedText(project.role, `${path}.role`),
    stack: requireStringArray(project.stack, `${path}.stack`),
    card: {
      title: requireLocalizedText(card.title, `${path}.card.title`),
      description: requireLocalizedText(
        card.description,
        `${path}.card.description`,
      ),
      stack: requireStringArray(card.stack, `${path}.card.stack`),
    },
    media,
    links,
  };
};

const requireUniqueValue = (
  value: string,
  path: string,
  seenValues: Set<string>,
): void => {
  if (seenValues.has(value)) {
    validationError(path, `el valor "${value}" está repetido.`);
  }

  seenValues.add(value);
};

export const validateProjects = (value: unknown): Project[] => {
  if (!Array.isArray(value)) {
    return validationError('root', 'debe ser una lista de proyectos.');
  }

  const projects = value.map((project, index) =>
    requireProject(project, `projects[${index}]`),
  );
  const ids = new Set<string>();
  const slugs = new Set<string>();

  projects.forEach((project, index) => {
    requireUniqueValue(project.id, `projects[${index}].id`, ids);
    requireUniqueValue(project.slug, `projects[${index}].slug`, slugs);
  });

  return projects;
};
