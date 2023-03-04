import navIcon from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';

// NavBar
export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
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
    items: 3,
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
  { imgSrc: meter1, alt: 'example web dev', label: 'Web Development' },
  { imgSrc: meter2, alt: 'example mark-up dev', label: 'Mark-up Development' },
  {
    imgSrc: meter2,
    alt: 'example three.js dev',
    label: 'Three.js Development',
  },
  { imgSrc: meter3, alt: 'example filmmaking', label: 'Filmmaking' },
  { imgSrc: meter1, alt: 'example film editor', label: 'Film Editor' },
  { imgSrc: meter2, alt: 'example film production', label: 'Film Production' },
  { imgSrc: meter2, alt: 'example film scripting', label: 'Film Scripting' },
];

//Projects
export const projects = [
  {
    title: 'Components in DOT Hotels',
    description: 'Frontend Development',
    // imgUrl: projImg1,
  },
  {
    title: 'Graphics in LESA',
    description: 'Markup Development',
    // imgUrl: projImg2,
  },
  {
    title: 'World & Cat animation',
    description: 'Three.js Development',
    // imgUrl: projImg3,
  },
  {
    title: 'Tetris',
    description: 'Javascript Game Development',
    // imgUrl: projImg4,
  },
  {
    title: 'Contact List',
    description: 'JAVA Development',
    // imgUrl: projImg5,
  },
  {
    title: 'La Sexta Pata Webpage',
    description: 'Web Development',
    // imgUrl: projImg6,
  },
];
