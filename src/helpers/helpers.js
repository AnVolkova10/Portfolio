import navIcon from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import projImg4 from '../assets/img/project-img4.png';
import projImg5 from '../assets/img/project-img5.png';
import projImg6 from '../assets/img/project-img6.png';
import projImg7 from '../assets/img/project-img7.png';
import projImg8 from '../assets/img/project-img8.png';
import projImg9 from '../assets/img/project-img9.png';
import projImg10 from '../assets/img/project-img10.png';
import projImg11 from '../assets/img/project-img11.png';
import projImg12 from '../assets/img/project-img12.png';
import projImg13 from '../assets/img/project-img13.png';
import projImg14 from '../assets/img/project-img14.png';
import projImg15 from '../assets/img/project-img15.png';
import projImg16 from '../assets/img/project-img16.png';
import projImg17 from '../assets/img/project-img17.png';
import projImg18 from '../assets/img/project-img18.png';
import projImg19 from '../assets/img/project-img19.png';
import projImg20 from '../assets/img/project-img20.png';
import projImg21 from '../assets/img/project-img21.png';
import projImg22 from '../assets/img/project-img22.png';
import projImg23 from '../assets/img/project-img23.png';

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
export const projectsDev = [
  {
    title: 'Components in DOT Hotels',
    description: 'Frontend Development',
    imgUrl: projImg1,
  },
  {
    title: 'Graphics in LESA',
    description: 'Markup Development',
    imgUrl: projImg2,
  },
  {
    title: 'World & Cat animation',
    description: 'Three.js Development',
    imgUrl: projImg3,
  },
  {
    title: 'Tetris Game',
    description: 'Javascript Game Development',
    imgUrl: projImg4,
  },
  {
    title: 'La Sexta Pata Webpage',
    description: 'Web Development',
    imgUrl: projImg5,
  },
  {
    title: 'Battleship Game',
    description: 'Javascript Game Development',
    imgUrl: projImg6,
  },
  {
    title: 'Simple Store Page',
    description: 'React.js Development',
    imgUrl: projImg7,
  },
  {
    title: 'Marvel Cinematic Timeline',
    description: 'Frontend Development',
    imgUrl: projImg10,
  },
  {
    title: 'VALORANT Game Web Helper',
    description: 'Frontend Development',
    imgUrl: projImg9,
  },
  /*{
    title: 'TO-DO Page',
    description: 'React.js Development',
    imgUrl: projImg8,
  },*/
];
export const projectsFilm = [
  {
    title: 'Shortfilm: Sopa de Gaviota',
    description: 'Director - Film Editor- Script Adaptator',
    imgUrl: projImg11,
  },
  {
    title: 'Animated Shortfilm: De otro mundo',
    description: 'Producer - Writer - Animator - Film Editor',
    imgUrl: projImg12,
  },
  {
    title: 'Shortfilm: Piquenique',
    description: 'Director - Writer - Film Editor',
    imgUrl: projImg13,
  },
  {
    title: 'Experimental shortfilm: DISTANCIA CRÍTICA',
    description: 'Director - Writer - Film Editor',
    imgUrl: projImg14,
  },
  {
    title: 'Animated shortfilm: Game Over',
    description: 'Producer - Writer - Animator - Film Editor',
    imgUrl: projImg15,
  },
  {
    title: 'Oneshot TV Show: Conscientemente',
    description: 'Producer - Writer - Film Editor',
    imgUrl: projImg16,
  },
  {
    title: 'Shortfilm: 7 minutos antes del Primer Vórtex',
    description: 'Director - Writer - Film Editor - Cinematographer',
    imgUrl: projImg17,
  },
  {
    title: 'Shortfilm: My Funny Valentine',
    description: 'Producer - Film Editor',
    imgUrl: projImg18,
  },
  {
    title: 'Documental shortfilm: Un Día de Perros',
    description: 'Producer - Film Editor',
    imgUrl: projImg19,
  },
  /*{
    title: 'Shortfilm: A day in a Life',
    description: ' Director - Producer - Film Editor - Cinematographer - Writer',
    imgUrl: projImg20,
  },*/
];
export const projectsOthers = [
  {
    title: 'Comunidad Valito',
    description:
      'Moderadora - Organizadora de Comunidad Latinoamericana de Valorant',
    imgUrl: projImg21,
  },
  {
    title: 'Equipo de fútbol 5',
    description: 'Mediocampista',
    imgUrl: projImg22,
  },
  {
    title: 'Grupo Mensual de Dungeons & Dragons',
    description: 'Master',
    imgUrl: projImg23,
  },
];
