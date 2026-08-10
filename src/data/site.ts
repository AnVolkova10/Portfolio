import downloadIcon from '../assets/img/download.svg';
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

// NavBar
export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  {
    href: '/cvs/cv-en-angela-curzi.pdf',
    label: 'Resume',
    download: 'cv-en-angela-curzi.pdf',
    icon: downloadIcon,
  },
];

export const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/%C3%A1ngela-curzi-572372ba/',
    imgSrc: navIcon,
    alt: 'LinkedIn Icon',
  },
  {
    href: 'https://github.com/AnVolkova10',
    imgSrc: navIcon2,
    alt: 'Github Icon',
  },
  {
    href: 'https://youtube.com/@anvolkova10',
    imgSrc: navIcon3,
    alt: 'Youtube Icon',
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

export const skills = [
  { imgSrc: reactLogo, alt: 'react', label: 'React' },
  { imgSrc: threejsLogo, alt: 'three.js', label: 'Three.js' },
  { imgSrc: jsLogo, alt: 'js', label: 'JavaScript' },
  { imgSrc: bootstrapLogo, alt: 'bootstrap', label: 'Bootstrap' },
  { imgSrc: htmlLogo, alt: 'html', label: 'HTML' },
  { imgSrc: cssLogo, alt: 'css', label: 'CSS' },
  { imgSrc: sassLogo, alt: 'sass', label: 'Sass' },
  { imgSrc: handlebarsLogo, alt: 'handlebars', label: 'Handlebars' },
  {
    imgSrc: styledComponentsLogo,
    alt: 'styled-components',
    label: 'Styled Components',
  },
  { imgSrc: jqueryLogo, alt: 'jquery', label: 'jQuery' },
  { imgSrc: gsapLogo, alt: 'gsap', label: 'GSAP' },
  { imgSrc: framerMotionLogo, alt: 'framer-motion', label: 'Framer Motion' },
  { imgSrc: nextLogo, alt: 'next', label: 'Next.js' },
  { imgSrc: nodeLogo, alt: 'node', label: 'Node.js' },
  { imgSrc: phpLogo, alt: 'php', label: 'PHP' },
  { imgSrc: mysqlLogo, alt: 'mysql', label: 'MySQL' },
  { imgSrc: dockerLogo, alt: 'docker', label: 'Docker' },
  { imgSrc: filmmakingLogo, alt: 'filmmaking', label: 'Filmmaking' },
  { imgSrc: filmEditingLogo, alt: 'film-editing', label: 'Film Editing' },
  { imgSrc: visualEffectsLogo, alt: 'visual-effects', label: 'Visual Effects' },
  { imgSrc: productionLogo, alt: 'production', label: 'Production' },
  { imgSrc: filmWriterLogo, alt: 'film-writer', label: 'Film Writing' },
  { imgSrc: animatorLogo, alt: 'animator', label: 'Animation' },
];
