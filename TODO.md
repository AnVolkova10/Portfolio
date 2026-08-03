# Portfolio 2026 — TODO maestro

Estado: Fase 0 en curso y migración técnica base realizada. `PORT-00.6` avanza proyecto por proyecto. La UI original queda congelada hasta conversar cada cambio visual.

## Reglas de trabajo

- Conversar y confirmar el alcance antes de implementar cualquier ítem pendiente.
- Por defecto, actualizar únicamente este TODO. No implementar un ítem salvo que la usuaria diga explícitamente “implementalo”, “avanzá” o equivalente.
- Agrupar varios pasos únicamente cuando el lote exacto haya sido aprobado explícitamente.
- Mantener copy en español con tildes y su traducción equivalente en inglés.
- Mantener Sass con un archivo `.scss` por componente. No usar CSS Modules ni Tailwind en este portfolio.
- Preservar el diseño actual; estructura técnica y diseño visual son tareas separadas.
- En Vite mantener `base: './'`.
- No realizar QA visual automatizado, capturas ni inspección de navegador sin autorización.
- Ejecutar `npm run lint` y `npm run build` únicamente en el checkpoint previo a commit y push.
- Usar Conventional Commits en inglés.

## Baseline auditado

- Rama `main` sincronizada con `origin/main`; `.vscode/` es un cambio local de la usuaria y queda fuera de este trabajo.
- Base original: Create React App, React 18, JavaScript, Bootstrap, Sass y datos hardcodeados.
- Catálogo original: 12 proyectos dev, 15 audiovisuales y 3 de intereses dentro de `src/helpers/helpers.js`.
- Assets originales: 68 imágenes, 59 PNG y 9 SVG; peso total aproximado 10,8 MB.
- Problemas detectados: contexto de prueba, imports sin uso, keys por índice, imágenes sin alt, links externos incompletos, cleanup de scroll incorrecto y warning de dependencias en el typewriter.

## Matriz de contenido

### Referencias técnicas

- Usar Mastercard, Armaduki y Volkos Food para estudiar el stack, la organización interna y la forma de trabajo.
- Estos tres repositorios son referencias técnicas; no limitan el catálogo de proyectos que se mostrará.

### Entradas laborales individuales

- DOT Hotels.
- LESA.
- Viajes del Papa.
- ISTV.
- NotCo.
- Sprite.
- Conmebol.
- Newsan.
- River.
- Shellbox.
- 4th Judge.
- LOTBA.
- Web Gen 3.0.
- Mutantxs.
- Progressive: LQBD.
- Media Party.
- Jell-O.
- Nitrofert.
- Mastercard.

### Entradas personales

- Volkos Food.
- Armaduki.

### Otros proyectos

- Saladillo.
- Cocucha.

### Información pública y enlaces

- Cada nombre anterior tendrá una entrada individual; no agrupar proyectos por cliente o experiencia umbrella.
- Se puede mostrar cliente, proyecto, rol, tareas realizadas, stack, fecha e imágenes o videos propios de la aplicación.
- Cada entrada conservará una ficha extensa y una versión compacta ES/EN para las cards actuales.
- Guardar la fecha con precisión mensual en formato `YYYY-MM` y mostrarla como `MM/YYYY`.
- Cada proyecto tendrá `aiAssisted: boolean` para registrar si su desarrollo tuvo asistencia de IA.
- No mostrar repositorios.
- Los enlaces públicos son opcionales y se incorporarán solamente cuando sean útiles y estén aprobados.
- Las referencias externas se guardarán por separado de los enlaces públicos para documentar la existencia y el contexto de cada proyecto.
- Mastercard no tendrá enlace público; podrá mostrarse con una portada y, posteriormente, con un video propio de demostración.
- Ravenna continúa bloqueada hasta recibir una referencia visual aprobada para personalizar el personaje y el favicon.

### Hosting confirmado

- Proveedor: Vercel.
- URL pública: `https://portfolio-anvolkova10.vercel.app/`.

## Fase 0 — Documento maestro y contenido

- [x] PORT-00.1 Crear `TODO.md` con el plan y sus reglas.
- [x] PORT-00.2 Registrar el baseline técnico y el inventario actual.
- [x] PORT-00.3 Crear la matriz `publicar / borrador / archivar / bloqueado`.
- [x] PORT-00.4 Confirmar qué información de clientes puede mostrarse públicamente.
- [x] PORT-00.5 Confirmar hosting y URL pública antes de configurar el deploy.
- [ ] PORT-00.6 Completar para cada proyecto aprobado ficha extensa, copy compacto de card, fecha con mes, stack, asistencia de IA, portada y enlaces.
  - [x] PORT-00.6.01 DOT Hotels.
  - [x] PORT-00.6.02 LESA.
  - [x] PORT-00.6.03 Viajes del Papa.
  - [x] PORT-00.6.04 ISTV.
  - [x] PORT-00.6.05 NotCo.
  - [ ] PORT-00.6.06 Sprite.
  - [ ] PORT-00.6.07 Conmebol.
  - [ ] PORT-00.6.08 Newsan.
  - [ ] PORT-00.6.09 River.
  - [ ] PORT-00.6.10 Shellbox.
  - [ ] PORT-00.6.11 4th Judge.
  - [ ] PORT-00.6.12 LOTBA.
  - [ ] PORT-00.6.13 Web Gen 3.0.
  - [ ] PORT-00.6.14 Mutantxs.
  - [ ] PORT-00.6.15 Progressive: LQBD.
  - [ ] PORT-00.6.16 Media Party.
  - [ ] PORT-00.6.17 Jell-O.
  - [ ] PORT-00.6.18 Nitrofert.
  - [ ] PORT-00.6.19 Mastercard (sin URL ni repositorio).
  - [ ] PORT-00.6.20 Volkos Food.
  - [ ] PORT-00.6.21 Armaduki.
  - [ ] PORT-00.6.22 Saladillo (Otros proyectos).
  - [ ] PORT-00.6.23 Cocucha (Otros proyectos).
- [x] PORT-00.7 Mantener los proyectos sin fuente confirmada como bloqueados, sin inventar contenido.

### Fichas de contenido aprobadas

#### PORT-00.6.01 — DOT Hotels

- Cliente: DOT Hotels.
- Empresa: Genosha.
- Título ES: `DOT Hotels — Plataforma web y micrositios`.
- Título EN: `DOT Hotels — Web Platform and Microsites`.
- Rol ES: `Desarrolladora Frontend`.
- Rol EN: `Frontend Developer`.
- Resumen ES: `Desarrollo y mantenimiento frontend para la plataforma de DOT Hotels, trabajando en componentes reutilizables, micrositios, navegación responsive, habitaciones, sliders, modales, beneficios y flujos relacionados con reservas.`
- Resumen EN: `Frontend development and maintenance for the DOT Hotels platform, working on reusable components, microsites, responsive navigation, room pages, sliders, modals, rewards and booking-related flows.`
- Fecha: `2022-01`; mostrar `01/2022`.
- Stack: HTML, Handlebars, Sass, Bootstrap 5, JavaScript, jQuery y Webpack 5.
- `aiAssisted`: `false`.
- Portada: `public/images/projects/dot-hotels.png`.
- Video: reservar espacio para una demostración propia futura.
- Enlace público: `https://dot-hotels.com/`.
- Referencia externa: [DOT Hotels simplifica sus marcas y potencia su programa de lealtad](https://www.reportur.com/argentina/2022/09/04/dot-hotels-enfoca-su-estrategia-en-el-publico-final-con-una-simplificacion-de-marca/).
- Repositorio: no mostrar.

Versión compacta para la card:

- Título ES: `Componentes en DOT Hotels`.
- Título EN: `Components in DOT Hotels`.
- Descripción ES: `Corrección de errores y desarrollo frontend`.
- Descripción EN: `Bug Fixing & Frontend Development`.
- Stack visible: HTML, Sass, Bootstrap, JavaScript, jQuery y Handlebars.
- Fecha visible: `01/2022`.

#### PORT-00.6.02 — LESA

- Cliente: Secretaría de Derechos Humanos de la Nación.
- Empresa: Genosha.
- Título ES: `LESA — Juicios de Lesa Humanidad`.
- Título EN: `LESA — Crimes Against Humanity Trials`.
- Rol ES: `Desarrolladora Frontend`.
- Rol EN: `Frontend Developer`.
- Resumen ES: `Desarrollo y mantenimiento frontend de una plataforma pública e interactiva sobre los juicios por crímenes de lesa humanidad en Argentina. Implementación y corrección de componentes responsive, visualizaciones de datos, filtros, modales, integraciones con APIs y estados de carga y error.`
- Resumen EN: `Frontend development and maintenance for an interactive public platform about crimes against humanity trials in Argentina. Implementation and improvement of responsive components, data visualizations, filters, modals, API integrations, and loading and error states.`
- Fecha: `2022-05`; mostrar `05/2022`.
- Stack: Next.js, React, TypeScript, Styled Components, Recharts, Mapbox y Axios.
- `aiAssisted`: `false`.
- Portada: `public/images/projects/lesa-juicios-lesa-humanidad.png`.
- Video: reservar espacio para una demostración propia futura.
- Enlace público: `http://www.juiciosdelesahumanidad.ar/`.
- Referencia externa: [La Secretaría de Derechos Humanos presenta un sitio web con información sobre los juicios de lesa humanidad](https://www.argentina.gob.ar/noticias/la-secretaria-de-derechos-humanos-presenta-un-sitio-web-con-informacion-sobre-los-juicios).
- Repositorio: no mostrar.

Versión compacta para la card:

- Título ES: `Componentes en LESA`.
- Título EN: `Components in LESA`.
- Descripción ES: `Corrección de errores y desarrollo frontend`.
- Descripción EN: `Bug Fixing & Frontend Development`.
- Stack visible: React, TypeScript, Styled Components y Recharts.
- Fecha visible: `05/2022`.

#### PORT-00.6.03 — Viajes del Papa

- Cliente: Télam.
- Empresa: Genosha.
- Título ES: `Viajes del Papa — Experiencia interactiva 3D`.
- Título EN: `Pope’s Travels — Interactive 3D Experience`.
- Rol ES: `Desarrolladora Frontend y corrección de errores WebGL`.
- Rol EN: `Frontend Developer & WebGL Bug Fixing`.
- Resumen ES: `Desarrollo frontend de una experiencia interactiva bilingüe sobre los viajes del papa Francisco. Trabajo en tarjetas, grilla, filtros, navegación, selector de idioma, integración de contenidos desde CSV, adaptación responsive y correcciones del globo 3D desarrollado con Three.js y WebGL.`
- Resumen EN: `Frontend development for a bilingual interactive experience about Pope Francis’ travels. Work included cards, grid views, filters, navigation, language selection, CSV content integration, responsive adaptations, and fixes to the 3D globe built with Three.js and WebGL.`
- Fecha: `2023-03`; mostrar `03/2023`.
- Stack: Next.js, React, JavaScript, Three.js, WebGL, Styled Components, GSAP y Lottie.
- `aiAssisted`: `false`.
- Portada: `public/images/projects/viajes-del-papa.png`.
- Video: [demostración propia en Google Drive](https://drive.google.com/file/d/1kB00HDEEV397tfAfwBcBlBh-_bcTq2vH/view?usp=sharing).
- Enlace público: no mostrar mientras no exista una URL activa y autorizada.
- Enlace histórico no activo: `https://www.telam.com.ar/pope/`.
- Referencia externa: [Télam inaugura en Tecnópolis la primera muestra inmersiva en la Argentina sobre los viajes del Papa](https://www.argentina.gob.ar/noticias/telam-inaugura-en-tecnopolis-la-primera-muestra-inmersiva-en-la-argentina-sobre-los-viajes).
- Repositorio: no mostrar.

Versión compacta para la card:

- Título ES: `Viajes del Papa — Télam`.
- Título EN: `Télam: Pope Francis’ Travels`.
- Descripción ES: `Desarrollo frontend y corrección de errores WebGL`.
- Descripción EN: `Frontend Development & WebGL Bug Fixing`.
- Stack visible: React, Three.js y Styled Components.
- Fecha visible: `03/2023`.

#### PORT-00.6.04 — ISTV

- Cliente: Inner Space TV.
- Empresa: Genosha.
- Título ES: `ISTV (Inner Space) — Plataforma de suscripciones y pagos`.
- Título EN: `ISTV (Inner Space) — Subscription and Payment Platform`.
- Rol ES: `Desarrolladora Frontend e integración backend`.
- Rol EN: `Frontend Developer & Backend Integration`.
- Resumen ES: `Desarrollo y evolución de la plataforma de suscripciones y pagos de Inner Space TV. Trabajo en los flujos de planes, registro, checkout, estados de éxito y error, perfil y facturación, además del panel administrativo para gestionar clientes, suscripciones, ventas, cupones, planes y programas. Integración de componentes y templates con rutas, controladores, consultas y servicios de Mercado Pago y Uscreen.`
- Resumen EN: `Development and evolution of Inner Space TV’s subscription and payment platform. Work included plan selection, registration, checkout, success and error states, profile and billing flows, as well as the admin dashboard for managing customers, subscriptions, sales, coupons, plans, and programs. Integration of components and templates with routes, controllers, queries, Mercado Pago, and Uscreen services.`
- Fecha: `2023-05`; mostrar `05/2023`.
- Stack: Node.js, Express, Handlebars, JavaScript, CSS, Bootstrap, MySQL, Sequelize, Mercado Pago, Uscreen y Docker.
- `aiAssisted`: `false`.
- Portada: `public/images/projects/istv-inner-space.png`.
- Enlace público: `https://payments.istv.live/plans`.
- Nota del enlace: la plataforma continúa activa con modificaciones posteriores del cliente, pero conserva la experiencia desarrollada y es representativa de la portada existente.
- Referencia externa: [Lanzan la app móvil de training ISTV: planean facturar USD 1 M](https://www.iproup.com/innovacion/31713-lanzan-la-app-movil-de-training-istv-planean-facturar-us1-m.amp).
- Repositorio: no mostrar.

Versión compacta para la card:

- Título ES: `Pasarela de pagos de Inner Space`.
- Título EN: `Inner Space Payment Gateway`.
- Descripción ES: `Desarrollo frontend e integración backend`.
- Descripción EN: `Frontend Development & Backend Integration`.
- Stack visible: Handlebars, JavaScript, Express, MySQL y Docker.
- Fecha visible: `05/2023`.

#### PORT-00.6.05 — NotCo

- Cliente: NotCo.
- Agencia creativa: GUT México.
- Empresa: Genosha.
- Título ES: `NotCo — Not So Happy Animals`.
- Título EN: `NotCo — Not So Happy Animals`.
- Rol ES: `Desarrolladora Frontend — integraciones y corrección de errores AR`.
- Rol EN: `Frontend Developer — AR Integrations & Bug Fixing`.
- Resumen ES: `Desarrollo frontend para “Not So Happy Animals”, una experiencia mobile de NotCo basada en realidad aumentada. Implementación de componentes, estilos, selección de país e idioma, modales, términos, contenido dinámico, estados de carga y error, CTA de compra, metadata social y analytics. Integración y corrección de errores en el flujo AR, incluyendo selección de trackers, conexión de contenido, reproducción de videos y comportamiento de la interfaz durante el reconocimiento.`
- Resumen EN: `Frontend development for “Not So Happy Animals”, a mobile NotCo experience built around augmented reality. Implementation of components, styles, country and language selection, modals, terms, dynamic content, loading and error states, purchase CTAs, social metadata, and analytics. Integration and bug fixing across the AR flow, including tracker selection, content connections, video playback, and interface behavior during recognition.`
- Fecha: `2024-01`; mostrar `01/2024`.
- Stack: React, JavaScript, Three.js, MindAR, Styled Components, Sass, Zustand, Framer Motion, GSAP, Lottie, HLS.js y Webpack 5.
- `aiAssisted`: `false`.
- Portada: `public/images/projects/notco-not-so-happy-animals.png`.
- Video: [demostración propia en Google Drive](https://drive.google.com/file/d/1KqQKS_oX8VVnQIVErvfQHSkQXlMBV3MF/view?usp=sharing).
- Enlace público: no mostrar; el dominio dejó de estar activo y el entorno de desarrollo depende de credenciales retiradas.
- Referencias externas: [ficha de campaña y créditos de Not So Happy Animals](https://www.adlatina.com/campa%C3%B1as/not-so-happy-animals) y [presentación de NotCo y GUT](https://www.adlatina.com/publicidad/preestreno-notco-y-gut-presentan-not-so-happy-animals).
- Repositorio: no mostrar.
- Nota de alcance: no atribuir el motor AR principal. El trabajo propio comprende UI, componentes, estilos, país e idioma, modales, términos, contenido dinámico, estados, CTA, metadata, analytics e integraciones y correcciones puntuales dentro del flujo AR.

Versión compacta para la card:

- Título ES: `NotCo: Not So Happy Animals`.
- Título EN: `NotCo: Not So Happy Animals`.
- Descripción ES: `Desarrollo frontend, integraciones y corrección de errores AR`.
- Descripción EN: `Frontend Development, AR Integrations & Bug Fixing`.
- Stack visible: React, Three.js, MindAR, Styled Components y Zustand.
- Fecha visible: `01/2024`.

## Fase 1 — Migración técnica mínima, sin cambios visuales

- [x] PORT-01.1 Migrar a Vite 8, React 19 y TypeScript estricto.
- [x] PORT-01.2 Configurar `base: './'`, alias `@/*` y salida `dist`.
- [x] PORT-01.3 Configurar ESLint flat con hooks, código sin uso y React Refresh.
- [x] PORT-01.4 Mantener una estructura simple por componentes y datos.
- [x] PORT-01.5 Convertir componentes JavaScript a TSX sin alterar su JSX visual.
- [x] PORT-01.6 Conservar estilos globales y un archivo Sass por componente.
- [x] PORT-01.7 Conservar React Bootstrap y el carousel para mantener la UI original.
- [x] PORT-01.8 Retirar CRA y dependencias realmente sin uso, sin retirar Sass ni Bootstrap.
- [x] PORT-01.9 Eliminar Context/Reducer de prueba y estado global injustificado.
- [x] PORT-01.10 Migrar el código a variables `VITE_EMAILJS_*` con fallback temporal para `REACT_APP_*`.
- [x] PORT-01.11 Agregar `.env.example` sin secretos.
- [x] PORT-01.12 Conservar EmailJS durante el MVP.

## Fase 2 — JSON, archivos e idioma

- [x] PORT-02.1 Implementar tipos de proyecto, estado, categoría, idioma, ficha extensa, card compacta ES/EN, fecha `YYYY-MM`, `aiAssisted: boolean` y media opcional de imagen o video.
- [x] PORT-02.2 Crear `projects.json` y validador de campos requeridos.
- [ ] PORT-02.3 Separar navegación, redes y skills de los componentes.
- [ ] PORT-02.4 Crear mensajes estáticos ES/EN sin dependencia externa.
- [ ] PORT-02.5 Implementar `LanguageProvider` liviano.
- [ ] PORT-02.6 Detectar idioma, usar español como fallback y persistir la elección.
- [ ] PORT-02.7 Actualizar `lang`, título y descripción según el idioma.
- [ ] PORT-02.8 Mostrar solo proyectos publicados con orden estable.
- [ ] PORT-02.9 Crear filtros Destacados, Clientes, Personales y Audiovisual.
- [ ] PORT-02.10 Documentar el flujo `draft → aprobación → published`.

## Fase 3 — Primera publicación urgente

- [ ] PORT-03.1 Preparar Mastercard como entrada laboral individual, sin URL ni repositorio.
- [ ] PORT-03.2 Preparar Armaduki como proyecto personal.
- [ ] PORT-03.3 Preparar el repo vigente Volkos Food.
- [ ] PORT-03.4 Incorporar portadas optimizadas y permitir un video propio opcional.
  - [x] PORT-03.4.01 Normalizar y centrar la portada de NotCo en `519x380`.
- [ ] PORT-03.5 Revisar con la usuaria copys ES/EN y orden.
- [ ] PORT-03.6 Activar Armaduki y Volkos Food.
- [ ] PORT-03.7 Activar Mastercard solo después de aprobar su copy y su portada o video.
- [x] PORT-03.8 Soportar tarjetas sin URL pública o repositorio.

## Fase 4 — Actualización completa del catálogo

- [ ] PORT-04.1 Agregar Nitrofert.
- [ ] PORT-04.2 Agregar Jell-O.
- [ ] PORT-04.3 Agregar Progressive: LQBD desde NFL.
- [ ] PORT-04.4 Agregar Newsan como entrada individual.
- [ ] PORT-04.5 Agregar LOTBA como entrada individual.
- [ ] PORT-04.6 Agregar Web Gen 3.0.
- [ ] PORT-04.7 Agregar Mutantxs desde el repo más reciente.
- [ ] PORT-04.8 Agregar Shellbox.
- [ ] PORT-04.9 Agregar River.
- [ ] PORT-04.10 Agregar Conmebol como entrada individual.
- [x] PORT-04.11 Agregar NotCo como entrada individual.
- [x] PORT-04.12 Revisar y actualizar ISTV.
- [x] PORT-04.13 Revisar y actualizar Viajes del Papa.
- [x] PORT-04.14 Revisar y actualizar LESA.
- [x] PORT-04.15 Revisar y actualizar DOT Hotels.
- [ ] PORT-04.16 Identificar la fuente y agregar Sprite como entrada individual.
- [ ] PORT-04.17 Identificar la fuente y agregar 4th Judge como entrada individual.
- [ ] PORT-04.18 Identificar la fuente y agregar Media Party como entrada individual.
- [ ] PORT-04.19 Conseguir el contenido y agregar Saladillo en Otros proyectos.
- [ ] PORT-04.20 Conseguir el contenido y agregar Cocucha en Otros proyectos.
- [ ] PORT-04.21 Archivar proyectos tutoriales que ya no aporten.
- [ ] PORT-04.22 Mantener trabajos audiovisuales como categoría propia.
- [ ] PORT-04.23 Mover intereses personales fuera de Projects.

## Fase 5 — Evolución visual

- [ ] PORT-05.1 Centralizar identidad negra, roja y amarilla en tokens accesibles.
- [ ] PORT-05.2 Reemplazar Centra por Plus Jakarta Sans autoalojada.
- [ ] PORT-05.3 Actualizar título de pestaña y metadata social.
- [ ] PORT-05.4 Reemplazar fondos PNG pesados por gradientes CSS.
- [ ] PORT-05.5 Agregar punto inferior a navlinks activos, hover y focus.
- [ ] PORT-05.6 Agregar hover/focus accesible al logo V.
- [ ] PORT-05.7 Agregar cursor rojo titilante al título tipeado.
- [ ] PORT-05.8 Incorporar versión accesible y reduced motion del typewriter.
- [ ] PORT-05.9 Personalizar el personaje como Ravenna al recibir referencia aprobada.
- [ ] PORT-05.10 Reemplazar carousel de skills por grilla agrupada.
- [ ] PORT-05.11 Rediseñar cards con información y CTA siempre visibles.
- [ ] PORT-05.12 Equiparar hover y focus en botones de proyectos.
- [ ] PORT-05.13 Completar CTA, redes y CV del idioma activo.
- [ ] PORT-05.14 Crear favicon de Ravenna como mejora de baja prioridad.
- [ ] PORT-05.15 Definir cómo comunicar visualmente el valor `aiAssisted` en cada proyecto.

## Fase 6 — Refactor, warnings y accesibilidad

- [ ] PORT-06.1 Corregir cleanup del listener de scroll.
- [ ] PORT-06.2 Resolver dependencias de efectos.
- [ ] PORT-06.3 Eliminar imports, variables y comentarios de prueba.
- [ ] PORT-06.4 Usar IDs estables como keys.
- [ ] PORT-06.5 Reemplazar `ConnectButton` por enlace semántico.
- [ ] PORT-06.6 Mantener `useRef` tipado solo donde sea necesario.
- [ ] PORT-06.7 Usar estructura semántica completa.
- [ ] PORT-06.8 Agregar skip link, foco visible y navegación por teclado.
- [ ] PORT-06.9 Completar alt, ARIA y seguridad de links externos.
- [ ] PORT-06.10 Agregar labels y estados accesibles al formulario.
- [ ] PORT-06.11 Revisar contraste y señales no dependientes del color.
- [ ] PORT-06.12 Validar mobile-first y reduced motion.
- [x] PORT-06.13 Corregir el offset del ancla de Skills para que el navbar fijo no tape el título.
- [x] PORT-06.14 Evitar funciones impuras durante el render inicial del typewriter.

## Fase 7 — Assets, documentación y entrega

- [ ] PORT-07.1 Inventariar y eliminar assets huérfanos.
- [ ] PORT-07.2 Convertir fondos y portadas a formatos optimizados.
- [ ] PORT-07.3 Definir dimensiones, lazy loading y decoding de imágenes.
- [ ] PORT-07.4 Mantener hero, logo y fuente crítica optimizados.
- [ ] PORT-07.5 Actualizar README con stack, estructura, variables y alta de proyectos.
- [ ] PORT-07.6 Documentar publicados, archivados y bloqueados.
- [ ] PORT-07.7 Ejecutar validación manual acordada, sin automatización visual.
- [ ] PORT-07.8 Ejecutar `npm run lint` y `npm run build` antes de commit/push.
- [ ] PORT-07.9 Corregir errores y repetir ambos comandos.
- [ ] PORT-07.10 Mantener este TODO actualizado.
- [ ] PORT-07.11 Crear commits pequeños con Conventional Commits.
- [ ] PORT-07.12 Hacer push solo después de aprobación.

## Criterios de cierre

- Solo `published` se renderiza y el catálogo inválido falla con un error claro.
- ES/EN actualiza copy, metadata y `lang`, y persiste la preferencia.
- Assets funcionan con rutas relativas.
- Navegación, filtros, cards, CTA y formulario son accesibles por teclado.
- No quedan warnings de hooks, imports sin uso ni listeners duplicados.
- La validación visual final queda a cargo de la usuaria.
- Lint y build pasan en el checkpoint previo al commit.
