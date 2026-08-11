import {
  siBitbucket,
  siBootstrap,
  siCss,
  siCssmodules,
  siDavinciresolve,
  siDocker,
  siFlask,
  siFramer,
  siGooglegemini,
  siGoogleappsscript,
  siGooglesheets,
  siGsap,
  siHandlebarsdotjs,
  siHtml5,
  siJavascript,
  siJquery,
  siLottiefiles,
  siMediapipe,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPython,
  siReact,
  siReplit,
  siSass,
  siSocketdotio,
  siStyledcomponents,
  siTailwindcss,
  siTensorflow,
  siThreedotjs,
  siTypescript,
  siVercel,
  siVite,
  siWebpack,
  type SimpleIcon,
} from 'simple-icons';
import type { LocalizedText } from '../types/project';

export type SkillConceptIcon =
  | 'architecture'
  | 'artificial-intelligence'
  | 'cloud'
  | 'filmmaking'
  | 'postproduction'
  | 'realtime';

export interface SkillLogo {
  icon: SimpleIcon;
  displayColor?: string;
}

export interface SkillGroup {
  id: string;
  label: LocalizedText;
  technologies: {
    es: string[];
    en: string[];
  };
  logos: SkillLogo[];
  conceptIcon?: SkillConceptIcon;
}

const localized = (es: string, en: string = es): LocalizedText => ({ es, en });
const localizedList = (es: string[], en: string[] = es) => ({ es, en });
const logo = (icon: SimpleIcon, displayColor?: string): SkillLogo => ({
  icon,
  displayColor,
});

const white = '#f5f5f5';

export const skillsResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const skillGroups: SkillGroup[] = [
  {
    id: 'modern-frontend',
    label: localized('Frontend moderno', 'Modern Frontend'),
    technologies: localizedList(['React', 'TypeScript', 'JavaScript']),
    logos: [logo(siReact), logo(siTypescript), logo(siJavascript)],
  },
  {
    id: 'ui-styling',
    label: localized('UI y estilos', 'UI & Styling'),
    technologies: localizedList([
      'HTML',
      'CSS',
      'Sass',
      'CSS Modules',
      'Tailwind',
    ]),
    logos: [
      logo(siHtml5, '#e34f26'),
      logo(siCss),
      logo(siSass),
      logo(siCssmodules, white),
      logo(siTailwindcss),
    ],
  },
  {
    id: 'three-dimensional-web',
    label: localized('3D y WebGL', '3D & WebGL'),
    technologies: localizedList(['Three.js', 'React Three Fiber', 'WebGL']),
    logos: [logo(siThreedotjs, white), logo(siReact)],
  },
  {
    id: 'interface-motion',
    label: localized('Motion para interfaces', 'Interface Motion'),
    technologies: localizedList(['Framer Motion', 'GSAP', 'Lottie']),
    logos: [logo(siFramer), logo(siGsap), logo(siLottiefiles)],
  },
  {
    id: 'state-architecture',
    label: localized('Estado y arquitectura', 'State & Architecture'),
    technologies: localizedList(
      ['Zustand', 'React Context', 'Arquitectura de componentes'],
      ['Zustand', 'React Context', 'Component Architecture'],
    ),
    logos: [logo(siReact), logo(siTypescript)],
    conceptIcon: 'architecture',
  },
  {
    id: 'ar-computer-vision',
    label: localized('AR y visión computacional', 'AR & Computer Vision'),
    technologies: localizedList(['TensorFlow.js', 'MediaPipe', 'MindAR']),
    logos: [logo(siTensorflow), logo(siMediapipe)],
  },
  {
    id: 'apis-realtime',
    label: localized('APIs y tiempo real', 'APIs & Real Time'),
    technologies: localizedList(['REST APIs', 'Socket.IO', 'WebSockets']),
    logos: [logo(siSocketdotio, white)],
    conceptIcon: 'realtime',
  },
  {
    id: 'google-workspace',
    label: localized('Google Workspace'),
    technologies: localizedList(['Apps Script', 'Google Sheets', 'CSV']),
    logos: [logo(siGoogleappsscript), logo(siGooglesheets)],
  },
  {
    id: 'backend-data',
    label: localized('Backend y datos', 'Backend & Data'),
    technologies: localizedList(['Node.js', 'Python', 'Flask', 'PHP', 'MySQL']),
    logos: [
      logo(siNodedotjs),
      logo(siPython),
      logo(siFlask, white),
      logo(siPhp),
      logo(siMysql),
    ],
  },
  {
    id: 'frameworks-build',
    label: localized('Frameworks y build', 'Frameworks & Build'),
    technologies: localizedList(['Vite', 'Next.js', 'Webpack']),
    logos: [logo(siVite), logo(siNextdotjs, white), logo(siWebpack)],
  },
  {
    id: 'cloud-delivery',
    label: localized('Cloud y delivery', 'Cloud & Delivery'),
    technologies: localizedList([
      'AWS S3',
      'Vercel',
      'Bitbucket Pipelines',
      'Docker',
    ]),
    logos: [logo(siVercel, white), logo(siBitbucket), logo(siDocker)],
    conceptIcon: 'cloud',
  },
  {
    id: 'ai-assisted-development',
    label: localized('Desarrollo con IA', 'AI-Assisted Development'),
    technologies: localizedList(['Codex', 'Replit Agent', 'Gemini']),
    logos: [logo(siReplit), logo(siGooglegemini)],
    conceptIcon: 'artificial-intelligence',
  },
  {
    id: 'earlier-web-experience',
    label: localized('Experiencia web previa', 'Earlier Web Experience'),
    technologies: localizedList([
      'Bootstrap',
      'jQuery',
      'Handlebars',
      'Styled Components',
    ]),
    logos: [
      logo(siBootstrap),
      logo(siJquery),
      logo(siHandlebarsdotjs, white),
      logo(siStyledcomponents),
    ],
  },
  {
    id: 'filmmaking-production',
    label: localized('Realización y producción', 'Filmmaking & Production'),
    technologies: localizedList(
      ['Dirección', 'Producción', 'Guion', 'Realización'],
      ['Directing', 'Production', 'Screenwriting', 'Filmmaking'],
    ),
    logos: [],
    conceptIcon: 'filmmaking',
  },
  {
    id: 'editing-postproduction',
    label: localized('Edición y postproducción', 'Editing & Postproduction'),
    technologies: localizedList(
      ['Edición', 'Efectos visuales', 'Animación', 'DaVinci Resolve'],
      ['Editing', 'Visual Effects', 'Animation', 'DaVinci Resolve'],
    ),
    logos: [logo(siDavinciresolve)],
    conceptIcon: 'postproduction',
  },
];
