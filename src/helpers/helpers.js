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
import projImg24 from '../assets/img/project-img24.png';
import projImg25 from '../assets/img/project-img25.png';
import projImg26 from '../assets/img/project-img26.png';
import projImg27 from '../assets/img/project-img27.png';
import projImg28 from '../assets/img/project-img28.png';
import projImg29 from '../assets/img/project-img29.png';
import projImg30 from '../assets/img/project-img30.png';

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
  { imgSrc: meter2, alt: 'example mark-up dev', label: 'React.js Development' },
  {
    imgSrc: meter2,
    alt: 'example three.js dev',
    label: 'Three.js Development',
  },
  { imgSrc: meter3, alt: 'example filmmaking', label: 'Filmmaking' },
  { imgSrc: meter1, alt: 'example film editor', label: 'Film Editing' },
  { imgSrc: meter2, alt: 'example film production', label: 'Film Production' },
  { imgSrc: meter2, alt: 'example film scripting', label: 'Film Scripting' },
];

//Projects
export const projectsDev = [
  {
    title: 'Inner Space Payment Gateway',
    description: 'Frontend Development & Database Linkage',
    languages: 'HTML, CSS, Handlebars, Javascript, Docker, MySQL & Express.',
    imgUrl: projImg27,
    link: 'https://payments.istv.live/plans',
    date: '05/2023',
  },
  {
    title: 'Telam: Pope Francis Festivities',
    description: 'Frontend Development & WebGL Bugfixing',
    languages: 'React.js, Three.js & Styled Components.',
    imgUrl: projImg28,
    link: 'https://www.telam.com.ar/papa/',
    date: '04/2023',
  },
  {
    title: 'Components, World & Cat animation',
    description: 'Frontend & WebGL Development',
    languages:
      'Next.js, React.js, React Three Fiber, GSAP, Styled Components & Framer Motion.',
    imgUrl: projImg3,
    link: 'https://front.dev.genosha.com.ar/',
    date: '11/2022',
  },
  {
    title: 'Components in LESA',
    description: 'Bug fixing & Markup Development',
    languages: 'React.js, Styled Components & Recharts.',
    imgUrl: projImg2,
    link: 'http://www.juiciosdelesahumanidad.ar/',
    date: '04/2022',
  },
  {
    title: 'Components in DOT Hotels',
    description: 'Bug fixing & Frontend Development',
    languages: 'HTML, Sass, Javascript, JQuery & Handlebars.',
    imgUrl: projImg1,
    link: 'https://dot-hotels.com/',
    date: '01/2022',
  },
  {
    title: 'Battleship Game',
    description: 'Javascript Game Development',
    languages: 'HTML, CSS & Javascript.',
    imgUrl: projImg6,
    link: 'https://anvolkova10.github.io/VolkosBattleship/',
    date: '03/2022',
  },
  {
    title: 'Simple Store Page',
    description: 'API + Frontend Development',
    languages: 'React.js, CSS, Javascript, Moment & Framer Motion.',
    imgUrl: projImg7,
    link: 'https://react-store-bay.vercel.app/',
    date: '01/2022',
  },
  {
    title: 'TO-DO Page',
    description: 'App Development',
    languages: 'React.js, CSS & Javascript',
    link: 'https://todolist-nu-weld.vercel.app/',
    imgUrl: projImg8,
    date: '01/2022',
  },
  {
    title: 'Marvel Cinematic Timeline',
    description: 'Frontend Development',
    languages: 'HTML & CSS.',
    imgUrl: projImg10,
    link: 'https://anvolkova10.github.io/mcu',
    date: '10/2021',
  },
  {
    title: 'La Sexta Pata Webpage',
    description: 'Design & Web Development',
    languages: 'HTML, CSS, Javascript & PHP.',
    imgUrl: projImg5,
    link: 'https://anvolkova10.github.io/lasextapata/',
    date: '07/2021',
  },
  {
    title: 'VALORANT Game Web Helper',
    description: 'PHP & App Development',
    languages: 'HTML, CSS, Javascript & PHP.',
    imgUrl: projImg9,
    link: 'https://anvolkova10.github.io/ValorantApp/',
    date: '07/2021',
  },
  {
    title: 'Minified Tetris Game',
    description: 'Javascript Game Development',
    languages: 'HTML, CSS & Javascript.',
    imgUrl: projImg4,
    link: 'https://anvolkova10.github.io/TetrisChiquito/',
    date: '05/2021',
  },
];
export const projectsFilm = [
  {
    title: 'DeitaLab Data Science Courses',
    description: 'Video Editor',
    imgUrl: projImg30,
    link: 'https://deitalab.mailerpage.io/cursos',
    date: '05/2023',
  },
  {
    title: 'Min. Cultura - Documental Series: Teleras de Santiago del Estero',
    description: 'Video Editor',
    imgUrl: projImg29,
    link: 'https://youtu.be/1t8wTjuZcN8',
    date: '04/2023',
  },
  {
    title: 'Marketing Courses: Atlas Academy',
    description: 'Video Editor',
    imgUrl: projImg26,
    link: 'https://www.youtube.com/watch?v=s5tn39aShpQ',
    date: '03/2022',
  },
  {
    title: 'Ads, Reels & Trailers for Social Media & Companies',
    description: 'Video Editor',
    imgUrl: projImg25,
    link: 'https://www.instagram.com/reel/CXw0S_oljFO/',
    date: '12/2021',
  },
  {
    title: 'Documental: 8 de Enero',
    description: 'Film Editor',
    imgUrl: projImg24,
    link: 'https://www.imdb.com/title/tt27823929/?ref_=nv_sr_srsg_0_tt_6_nm_2_q_8%2520de%2520enero',
    date: '01/2022',
  },
  {
    title: 'Shortfilm: A day in a Life',
    description: 'Director - Producer - Film Editor - Cinematographer - Writer',
    imgUrl: projImg20,
    link: 'https://www.youtube.com/watch?v=J4g6-nsCGVs',
    date: '07/2021',
  },
  {
    title: 'Shortfilm: Sopa de Gaviota',
    description: 'Director - Film Editor- Script Adapter',
    imgUrl: projImg11,
    link: 'https://www.youtube.com/watch?v=Y6RlBPL1vaU',
    date: '05/2018',
  },
  {
    title: 'Animated Shortfilm: De otro mundo',
    description: 'Producer - Writer - Animator - Film Editor',
    imgUrl: projImg12,
    link: 'https://youtu.be/JTTjqIs7YlM',
    date: '02/2019',
  },
  {
    title: 'Shortfilm: Piquenique',
    description: 'Director - Writer - Film Editor',
    imgUrl: projImg13,
    link: 'https://youtu.be/Qpb2eatCaeI',
    date: '10/2018',
  },
  {
    title: 'Experimental shortfilm: DISTANCIA CRÍTICA',
    description: 'Director - Writer - Film Editor',
    imgUrl: projImg14,
    link: 'https://youtu.be/aNGeJPVGJyI',
    date: '01/2019',
  },
  {
    title: 'Animated shortfilm: Game Over',
    description: 'Producer - Writer - Animator - Film Editor',
    imgUrl: projImg15,
    link: 'https://www.youtube.com/watch?v=eptHG8I0OGw',
    date: '07/2018',
  },
  {
    title: 'Oneshot TV Show: Conscientemente',
    description: 'Producer - Writer - Film Editor',
    imgUrl: projImg16,
    link: 'https://www.youtube.com/watch?v=jcDuR79r7vo',
    date: '01/2017',
  },
  {
    title: 'Shortfilm: El primer Vórtex',
    description: 'Director - Writer - Film Editor - Cinematographer',
    imgUrl: projImg17,
    link: 'https://www.youtube.com/watch?v=QN-BeSt9RUA',
    date: '09/2016',
  },
  {
    title: 'Shortfilm: My Funny Valentine',
    description: 'Producer - Film Editor',
    imgUrl: projImg18,
    link: 'https://www.youtube.com/watch?v=WvjpIZsgQrU',
    date: '08/2016',
  },
  {
    title: 'Documental shortfilm: Un Día de Perros',
    description: 'Producer - Film Editor',
    imgUrl: projImg19,
    link: 'https://www.youtube.com/watch?v=LhunXPfMcI4',
    date: '06/2016',
  },
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
