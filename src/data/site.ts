import navIcon from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import bootstrapLogo from '../assets/img/bootstrap-logo.png';
import cssLogo from '../assets/img/css-logo.png';
import dockerLogo from '../assets/img/docker-logo.png';
import framerMotionLogo from '../assets/img/framer-motion-logo.png';
import gsapLogo from '../assets/img/gsap-logo.png';
import handlebarsLogo from '../assets/img/handlebars-logo.png';
import htmlLogo from '../assets/img/html-logo.png';
import jqueryLogo from '../assets/img/jquery-logo.png';
import jsLogo from '../assets/img/js-logo.png';
import mysqlLogo from '../assets/img/mysql-logo.png';
import nextLogo from '../assets/img/next-logo.png';
import nodeLogo from '../assets/img/node-logo.png';
import phpLogo from '../assets/img/php-logo.png';
import reactLogo from '../assets/img/react-logo.png';
import sassLogo from '../assets/img/sass-logo.png';
import styledComponentsLogo from '../assets/img/styled-components-logo.png';
import threejsLogo from '../assets/img/threejs-logo.png';
import filmmakingLogo from '../assets/img/filmmaking-logo.png';
import filmEditingLogo from '../assets/img/film-editing-logo.png';
import visualEffectsLogo from '../assets/img/visual-effects-logo.png';
import productionLogo from '../assets/img/production-logo.png';
import filmWriterLogo from '../assets/img/film-writer-logo.png';
import animatorLogo from '../assets/img/animator-logo.png';

export const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/%C3%A1ngela-curzi-572372ba/',
    imgSrc: navIcon,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/AnVolkova10',
    imgSrc: navIcon2,
    label: 'GitHub',
  },
  {
    href: 'https://youtube.com/@anvolkova10',
    imgSrc: navIcon3,
    label: 'YouTube',
  },
];

//SkillsCarousel
export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const skillLabel = (en: string, es: string = en) => ({ es, en });

export const skills = [
  { id: 'react', imgSrc: reactLogo, label: skillLabel('React') },
  { id: 'three-js', imgSrc: threejsLogo, label: skillLabel('Three.js') },
  { id: 'javascript', imgSrc: jsLogo, label: skillLabel('JavaScript') },
  { id: 'bootstrap', imgSrc: bootstrapLogo, label: skillLabel('Bootstrap') },
  { id: 'html', imgSrc: htmlLogo, label: skillLabel('HTML') },
  { id: 'css', imgSrc: cssLogo, label: skillLabel('CSS') },
  { id: 'sass', imgSrc: sassLogo, label: skillLabel('Sass') },
  { id: 'handlebars', imgSrc: handlebarsLogo, label: skillLabel('Handlebars') },
  {
    id: 'styled-components',
    imgSrc: styledComponentsLogo,
    label: skillLabel('Styled Components'),
  },
  { id: 'jquery', imgSrc: jqueryLogo, label: skillLabel('jQuery') },
  { id: 'gsap', imgSrc: gsapLogo, label: skillLabel('GSAP') },
  {
    id: 'framer-motion',
    imgSrc: framerMotionLogo,
    label: skillLabel('Framer Motion'),
  },
  { id: 'next-js', imgSrc: nextLogo, label: skillLabel('Next.js') },
  { id: 'node-js', imgSrc: nodeLogo, label: skillLabel('Node.js') },
  { id: 'php', imgSrc: phpLogo, label: skillLabel('PHP') },
  { id: 'mysql', imgSrc: mysqlLogo, label: skillLabel('MySQL') },
  { id: 'docker', imgSrc: dockerLogo, label: skillLabel('Docker') },
  {
    id: 'filmmaking',
    imgSrc: filmmakingLogo,
    label: skillLabel('Filmmaking', 'Realización audiovisual'),
  },
  {
    id: 'film-editing',
    imgSrc: filmEditingLogo,
    label: skillLabel('Film Editing', 'Edición audiovisual'),
  },
  {
    id: 'visual-effects',
    imgSrc: visualEffectsLogo,
    label: skillLabel('Visual Effects', 'Efectos visuales'),
  },
  {
    id: 'production',
    imgSrc: productionLogo,
    label: skillLabel('Production', 'Producción'),
  },
  {
    id: 'film-writing',
    imgSrc: filmWriterLogo,
    label: skillLabel('Film Writing', 'Guion'),
  },
  {
    id: 'animation',
    imgSrc: animatorLogo,
    label: skillLabel('Animation', 'Animación'),
  },
];
