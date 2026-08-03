# Portfolio 2026 — TODO maestro

Estado: Fase 0 y migración técnica base realizadas. La UI original queda congelada hasta conversar cada cambio visual.

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

### Primera entrega

- `Armaduki`: publicar con repositorio público.
- `Volkos Food`: publicar usando el repo vigente `Personal/volkos-food`.
- `Mastercard`: preparar como borrador; publicar solo al confirmar el copy público.

### Candidatos con fuente local

- Nitrofert, Jell-O, Progressive: LQBD, Newsan, LOTBA, Web Gen 3.0, Mutantxs.
- Shellbox, River, Conmebol, NotCo, ISTV, Viajes Papa, LESA y DOT Hotels.

### Bloqueados

- Sprite, 4th Judge, Media Party y Saladillo: no se encontró fuente local inequívoca.
- Cocucha: solo se encontró un escudo dentro de Armaduki; falta confirmar si es un proyecto independiente.
- Hosting y URL pública: no confirmados.
- Ravenna: falta una referencia visual aprobada para personalizar el personaje y el favicon.

## Fase 0 — Documento maestro y contenido

- [x] PORT-00.1 Crear `TODO.md` con el plan y sus reglas.
- [x] PORT-00.2 Registrar el baseline técnico y el inventario actual.
- [x] PORT-00.3 Crear la matriz `publicar / borrador / archivar / bloqueado`.
- [ ] PORT-00.4 Confirmar qué información de clientes puede mostrarse públicamente.
- [ ] PORT-00.5 Confirmar hosting y URL pública antes de configurar el deploy.
- [ ] PORT-00.6 Completar para cada proyecto aprobado título, rol, resumen, fecha, stack, portada y enlaces.
- [x] PORT-00.7 Mantener los proyectos sin fuente confirmada como bloqueados, sin inventar contenido.

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

- [ ] PORT-02.1 Implementar tipos de proyecto, estado, categoría e idioma.
- [ ] PORT-02.2 Crear `projects.json` y validador de campos requeridos.
- [ ] PORT-02.3 Separar navegación, redes y skills de los componentes.
- [ ] PORT-02.4 Crear mensajes estáticos ES/EN sin dependencia externa.
- [ ] PORT-02.5 Implementar `LanguageProvider` liviano.
- [ ] PORT-02.6 Detectar idioma, usar español como fallback y persistir la elección.
- [ ] PORT-02.7 Actualizar `lang`, título y descripción según el idioma.
- [ ] PORT-02.8 Mostrar solo proyectos publicados con orden estable.
- [ ] PORT-02.9 Crear filtros Destacados, Clientes, Personales y Audiovisual.
- [ ] PORT-02.10 Documentar el flujo `draft → aprobación → published`.

## Fase 3 — Primera publicación urgente

- [ ] PORT-03.1 Preparar Mastercard como caso único y privado por defecto.
- [ ] PORT-03.2 Preparar Armaduki como proyecto personal.
- [ ] PORT-03.3 Preparar el repo vigente Volkos Food.
- [ ] PORT-03.4 Incorporar portadas optimizadas para los tres proyectos.
- [ ] PORT-03.5 Revisar con la usuaria copys ES/EN y orden.
- [ ] PORT-03.6 Activar Armaduki y Volkos Food.
- [ ] PORT-03.7 Activar Mastercard solo después de aprobar el contenido público.
- [ ] PORT-03.8 Soportar tarjetas sin URL pública o repositorio.

## Fase 4 — Actualización completa del catálogo

- [ ] PORT-04.1 Agregar Nitrofert.
- [ ] PORT-04.2 Agregar Jell-O.
- [ ] PORT-04.3 Agregar Progressive: LQBD desde NFL.
- [ ] PORT-04.4 Agregar Newsan como experiencia única.
- [ ] PORT-04.5 Agregar LOTBA como campaña única.
- [ ] PORT-04.6 Agregar Web Gen 3.0.
- [ ] PORT-04.7 Agregar Mutantxs desde el repo más reciente.
- [ ] PORT-04.8 Agregar Shellbox.
- [ ] PORT-04.9 Agregar River.
- [ ] PORT-04.10 Definir y agregar la experiencia representativa de Conmebol.
- [ ] PORT-04.11 Definir y agregar la experiencia representativa de NotCo.
- [ ] PORT-04.12 Revisar y actualizar ISTV.
- [ ] PORT-04.13 Revisar y actualizar Viajes Papa.
- [ ] PORT-04.14 Revisar y actualizar LESA.
- [ ] PORT-04.15 Revisar y actualizar DOT Hotels.
- [ ] PORT-04.16 Identificar la fuente de Sprite.
- [ ] PORT-04.17 Identificar la fuente de 4th Judge.
- [ ] PORT-04.18 Identificar la fuente de Media Party.
- [ ] PORT-04.19 Identificar Saladillo y conseguir su contenido.
- [ ] PORT-04.20 Confirmar si Cocucha es independiente o parte de Armaduki.
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
