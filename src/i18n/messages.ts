import type { Locale, LocalizedText } from '../types/project'

export interface SiteMessages {
  meta: {
    title: string
    description: string
  }
  language: {
    label: string
    spanish: string
    english: string
  }
  nav: {
    home: string
    skills: string
    projects: string
    resume: string
    connect: string
    logoAlt: string
    toggleMenu: string
  }
  banner: {
    tagline: string
    headingPrefix: string
    roles: string[]
    bio: {
      namePrefix: string
      knownAsPrefix: string
      journey: string
      belief: string
      learning: string
      coding: string
      life: string
      ravennaPrefix: string
    }
    catAlt: string
    babyAlt: string
    connect: string
  }
  skills: {
    title: string
    description: string
    backgroundAlt: string
  }
  projects: {
    title: string
    description: string
    tabs: {
      professional: string
      own: string
      lab: string
      audiovisual: string
      beyondCode: string
    }
    openProject: string
    openDemo: string
    openCaseStudy: string
    openRepository: string
  }
  contact: {
    title: string
    imageAlt: string
    firstName: string
    lastName: string
    email: string
    phone: string
    message: string
    send: string
    sending: string
    sent: string
    success: string
    error: string
  }
  footer: {
    logoAlt: string
    rights: string
  }
}

export const messages: Record<Locale, SiteMessages> = {
  es: {
    meta: {
      title: 'Ángela Curzi aka Volkova - Web',
      description:
        'Portfolio de Ángela Curzi, desarrolladora frontend y realizadora audiovisual especializada en experiencias web interactivas.',
    },
    language: {
      label: 'Selector de idioma',
      spanish: 'Ver el sitio en español',
      english: 'Ver el sitio en inglés',
    },
    nav: {
      home: 'Inicio',
      skills: 'Habilidades',
      projects: 'Proyectos',
      resume: 'CV',
      connect: 'Conectemos',
      logoAlt: 'Logo de Ángela Curzi',
      toggleMenu: 'Abrir o cerrar la navegación',
    },
    banner: {
      tagline: 'Te doy la bienvenida a mi humilde portfolio',
      headingPrefix: 'Hola, soy ',
      roles: [
        '¡Desarrolladora Frontend!',
        '¡Desarrolladora React.js!',
        '¡Desarrolladora Three.js!',
        '¡Editora de video!',
        '¡Realizadora audiovisual!',
        '¡Futbolista!',
        '¡Gamer!',
      ],
      bio: {
        namePrefix: 'Soy ',
        knownAsPrefix: '—quizás me conozcas como ',
        journey:
          '. De Mar del Plata a La Plata, mi camino estuvo guiado por una idea simple: ',
        belief: 'el conocimiento nos hace libres',
        learning:
          '. Como aprendiz de por vida, quiero absorber todo el conocimiento posible antes de que se acabe el tiempo. Al fin encontré un trabajo que amo: ',
        coding: '¡PROGRAMAR!',
        life: ' Disfruto pasar tiempo con mi computadora, devoro libros y juego videojuegos siempre que puedo. También juego al fútbol con amigxs, porque el trabajo en equipo y la alegría importan tanto fuera de la pantalla como dentro de ella. Hace poco me recibí de Licenciada en Artes Audiovisuales, y eso afinó mi forma de pensar las historias, la imagen y las interfaces.',
        ravennaPrefix: ' Mi alma gemela es una gata llamada ',
      },
      catAlt: 'Ilustración de una gata programando',
      babyAlt: 'Texto: Mi bebé',
      connect: 'Conectemos',
    },
    skills: {
      title: 'Habilidades',
      description:
        'Acá muestro mi experiencia en distintas áreas, con foco en tecnología y desarrollo de software. Me apasiona resolver problemas y aprender herramientas nuevas todo el tiempo para mantenerme al día en mi campo.',
      backgroundAlt: '',
    },
    projects: {
      title: 'Proyectos',
      description:
        'Como programadora y realizadora audiovisual, me entusiasma compartir la diversidad de habilidades y proyectos que atraviesan mi trabajo. Acá vas a encontrar desde soluciones de software hasta piezas audiovisuales: cada experiencia refleja mi creatividad, mis conocimientos técnicos y mi pasión por contar historias.',
      tabs: {
        professional: 'PROFESIONAL',
        own: 'PROPIOS',
        lab: 'LAB',
        audiovisual: 'AUDIOVISUAL',
        beyondCode: 'MÁS ALLÁ DEL CÓDIGO',
      },
      openProject: 'Abrir',
      openDemo: 'Abrir demo de',
      openCaseStudy: 'Abrir caso de estudio de',
      openRepository: 'Abrir repositorio de',
    },
    contact: {
      title: 'Escribime',
      imageAlt: 'Ilustración de contacto',
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      message: 'Mensaje',
      send: 'Enviar',
      sending: 'Enviando…',
      sent: '¡ENVIADO!',
      success: '¡Listo! Tu mensaje se envió correctamente.',
      error: 'Algo salió mal. Por favor, intentá de nuevo.',
    },
    footer: {
      logoAlt: 'Logo de Ángela Curzi',
      rights: 'Todos los derechos reservados.',
    },
  },
  en: {
    meta: {
      title: 'Ángela Curzi aka Volkova - Web',
      description:
        'Portfolio of Ángela Curzi, a frontend developer and filmmaker specializing in interactive web experiences.',
    },
    language: {
      label: 'Language selector',
      spanish: 'View the site in Spanish',
      english: 'View the site in English',
    },
    nav: {
      home: 'Home',
      skills: 'Skills',
      projects: 'Projects',
      resume: 'Resume',
      connect: "Let's Connect",
      logoAlt: 'Ángela Curzi logo',
      toggleMenu: 'Open or close navigation',
    },
    banner: {
      tagline: 'Welcome to my humble portfolio',
      headingPrefix: "Hi, I'm a ",
      roles: [
        'Frontend Developer!',
        'React.js Developer!',
        'Three.js Developer!',
        'Video Editor!',
        'Filmmaker!',
        'Football Player!',
        'Gamer!',
      ],
      bio: {
        namePrefix: 'I’m ',
        knownAsPrefix: '—you might know me as ',
        journey:
          '. From Mar del Plata to La Plata, my path has been guided by a simple belief: ',
        belief: 'knowledge sets us free',
        learning:
          ". As a lifelong learner, I'm on a mission to soak up as much knowledge as possible before my time is up. I finally found a job I love: ",
        coding: 'CODING!',
        life: ' I enjoy spending time with my computer, I eat books for dinner, and I play video games whenever I can. I also play football with friends, because teamwork and joy matter as much off the screen as they do on it. I recently earned my degree in Audiovisual Arts, which sharpened how I think about story, image, and interface.',
        ravennaPrefix: ' My soulmate is a cat named ',
      },
      catAlt: 'Illustration of a cat coding',
      babyAlt: 'Text: My baby',
      connect: "Let's connect",
    },
    skills: {
      title: 'Skills',
      description:
        'Here I showcase my experience across different areas, with a focus on technology and software development. I am passionate about problem solving and continually learning new tools to stay at the forefront of my field.',
      backgroundAlt: '',
    },
    projects: {
      title: 'Projects',
      description:
        'As a programmer and filmmaker, I am excited to share the diverse range of skills and projects behind my work. From software solutions to audiovisual pieces, each experience reflects my creativity, technical expertise, and passion for storytelling.',
      tabs: {
        professional: 'PROFESSIONAL',
        own: 'OWN PROJECTS',
        lab: 'LAB',
        audiovisual: 'AUDIOVISUAL',
        beyondCode: 'BEYOND CODE',
      },
      openProject: 'Open',
      openDemo: 'Open demo for',
      openCaseStudy: 'Open case study for',
      openRepository: 'Open repository for',
    },
    contact: {
      title: 'Get In Touch',
      imageAlt: 'Contact illustration',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      phone: 'Phone No.',
      message: 'Message',
      send: 'Send',
      sending: 'Sending…',
      sent: 'SENT!',
      success: 'Message sent successfully!',
      error: 'Something went wrong. Please try again.',
    },
    footer: {
      logoAlt: 'Ángela Curzi logo',
      rights: 'All rights reserved.',
    },
  },
}

const stackLabels: Record<string, LocalizedText> = {
  'Adaptación de guion': {
    es: 'Adaptación de guion',
    en: 'Screenplay Adaptation',
  },
  Animación: { es: 'Animación', en: 'Animation' },
  'Cine experimental': { es: 'Cine experimental', en: 'Experimental Film' },
  'Community Management': {
    es: 'Gestión de comunidades',
    en: 'Community Management',
  },
  'Contenido educativo': {
    es: 'Contenido educativo',
    en: 'Educational Content',
  },
  Dirección: { es: 'Dirección', en: 'Directing' },
  Documental: { es: 'Documental', en: 'Documentary' },
  'Edición de video': { es: 'Edición de video', en: 'Video Editing' },
  Entrenamiento: { es: 'Entrenamiento', en: 'Training' },
  Facilitación: { es: 'Facilitación', en: 'Facilitation' },
  Fotografía: { es: 'Fotografía', en: 'Cinematography' },
  'Fútbol 5': { es: 'Fútbol 5', en: '5-a-Side Football' },
  'Fútbol 7': { es: 'Fútbol 7', en: '7-a-Side Football' },
  'Ala derecha': { es: 'Ala derecha', en: 'Right Winger' },
  'Extrema derecha': { es: 'Extrema derecha', en: 'Right Winger' },
  Guion: { es: 'Guion', en: 'Screenwriting' },
  Improvisación: { es: 'Improvisación', en: 'Improvisation' },
  Montaje: { es: 'Montaje', en: 'Film Editing' },
  'Montaje cinematográfico': {
    es: 'Montaje cinematográfico',
    en: 'Film Editing',
  },
  Narrativa: { es: 'Narrativa', en: 'Storytelling' },
  Postproducción: { es: 'Posproducción', en: 'Post-production' },
  Producción: { es: 'Producción', en: 'Production' },
  'Redes sociales': { es: 'Redes sociales', en: 'Social Media' },
  'Semantic HTML': { es: 'HTML semántico', en: 'Semantic HTML' },
  'Social Media': { es: 'Redes sociales', en: 'Social Media' },
  Televisión: { es: 'Televisión', en: 'Television' },
  Tournaments: { es: 'Torneos', en: 'Tournaments' },
  'Trabajo en equipo': { es: 'Trabajo en equipo', en: 'Teamwork' },
  Worldbuilding: { es: 'Construcción de mundos', en: 'Worldbuilding' },
}

export const translateStackItem = (item: string, locale: Locale): string =>
  stackLabels[item]?.[locale] ?? item
