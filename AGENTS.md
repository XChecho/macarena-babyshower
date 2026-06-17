# AGENTS.md - Macarena Baby Shower

## Project Identity

**Name:** Macarena Baby Shower  
**Type:** Landing page para Baby Shower con temática Cow Chibi / Moo Baby Chibi  
**Purpose:** Invitación digital interactiva para el Baby Shower de Macarena Morales Cárdenas  
**Event Date:** 15 de octubre de 2026, 4:00 PM  
**Origin:** Exportado de Google AI Studio

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS v4 (configuración inline en CSS con `@theme`)
- **Animations:** `motion` (Framer Motion)
- **Icons:** `lucide-react`
- **Audio:** Web Audio API (sintetizador personalizado en `LullabySynth.ts`)
- **Package Manager:** pnpm

## Project Structure

```
macarena-baby-shower/
├── assets/
│   └── .aistudio/          # Configuración de AI Studio
├── src/
│   ├── App.tsx             # Componente principal (monolítico, 873 líneas)
│   ├── index.css           # Design tokens, Tailwind config y utilidades
│   ├── main.tsx            # Entry point de React
│   └── LullabySynth.ts     # Sintetizador de música de cuna (Web Audio API)
├── index.html              # HTML entry point
├── metadata.json           # Metadata de AI Studio
├── package.json            # Dependencies y scripts
├── pnpm-workspace.yaml     # Configuración de workspace
├── tsconfig.json           # Configuración TypeScript
├── vite.config.ts          # Configuración de Vite
├── AGENTS.md               # Este archivo
└── DESIGN.md               # Design system y guía de estilo
```

## Scripts

- `pnpm dev` - Inicia servidor de desarrollo en puerto 3000
- `pnpm build` - Construye para producción
- `pnpm preview` - Previsualiza build de producción
- `pnpm lint` - Verificación de tipos TypeScript (`tsc --noEmit`)
- `pnpm clean` - Elimina `dist` y `server.js`

## Design System

### Typography

**Display Font:** Bubbleboddy Neue  
- Uso: Títulos, nombres, headers principales
- Características: Redondeada, amigable, estilo "bubble"
- Fuente: [Bubbleboddy Neue](https://www.dafont.com/es/bubbleboddy-neue.font)
- Nota: Fuente personalizada, debe descargarse y colocarse en `assets/fonts/`

**Body Font:** Merienda  
- Uso: Cuerpo de texto, acentos, etiquetas
- Características: Serif cálida, legible, estilo "bookish"
- Fuente: [Merienda](https://fonts.google.com/specimen/Merienda)
- Carga: Google Fonts (ya configurado en `index.css`)

### Color Palette

**Primary (Soft Pink):** `#825059`  
- Headers principales, botones primarios, blobs decorativos grandes
- Variantes: `#f8b9c3` (container), `#ffd9de` (fixed), `#f5b6c0` (dim)

**Secondary (Pastel Yellow):** `#6e5d00`  
- Highlights, flores decorativas, elementos de atención (fechas, anuncios)
- Variantes: `#fbe278` (fixed), `#dec65f` (dim)

**Tertiary (Dark Brown):** `#705a4c`  
- Tipografía y líneas finas (más suave que negro puro)

**Neutral Base:** `#f9f9f9`  
- Canvas blanco cálido para texturas de acuarela

**Cow Print Pattern:**  
- Patrón de vaca en blanco/negro usado en esquinas y separadores

### Visual Style

**Aesthetic:** Minimalismo + Táctil/Skeuomórfico  
**Theme:** Cow Chibi / Kawaii para baby shower  
**Personality:** Whimsical, nurturing, celebratory

**Características:**
- Layouts limpios para legibilidad
- Superficies con texturas de acuarela
- Blobs orgánicos "hand-painted"
- Patrón de vaca como borde estructural
- Sin esquinas afiladas (todo redondeado o pill-shaped)
- Sombras tintadas suaves (10% opacidad rosa)
- Efecto de "papel recortado" en cards

### Spacing System

- **Unit:** 8px (base)
- **Gutter:** 16px
- **Margin Mobile:** 24px
- **Margin Desktop:** 64px
- **Section Gap:** 48px

### Border Radius

- `sm`: 0.25rem
- `DEFAULT`: 0.5rem
- `md`: 0.75rem
- `lg`: 1rem
- `xl`: 1.5rem
- `full`: 9999px

### Components

**Buttons:**
- Pill-shaped, rellenos con primary pink
- Hover: transición a rosa más profundo
- Texto: tertiary dark brown

**Cards:**
- Fondo blanco
- Borde 1px en soft pink (`#f8b9c3`)
- Efecto "scalloped" o acento cow print en esquinas
- Sombras tintadas suaves

**Input Fields:**
- Redondeados
- Focus ring en soft yellow
- Cursor en tertiary brown

**Dividers:**
- Iconos de margaritas repetidas
- O fila de manchas cow print

**Lists:**
- Bullet points replaced por soles amarillos o flores rosadas

## Current Features

### Sections

1. **Hero** - Cuenta regresiva al evento, avatar chibi cow, partículas flotantes
2. **Event Details** - Fecha, hora, lugar con link a Google Maps
3. **Gallery** - Fotos tipo polaroid con lightbox
4. **RSVP** - Formulario que genera mensaje de WhatsApp

### Interactive Elements

- **Música de cuna:** Sintetizador Web Audio API con melodía suave
- **Partículas:** Corazones y soles flotantes animados
- **Lightbox:** Modal para ver fotos en grande
- **Countdown:** Cuenta regresiva en tiempo real
- **Scroll Spy:** Navegación activa según sección visible
- **WhatsApp Integration:** RSVP envía mensaje pre-formateado

## Code Conventions

### File Organization

- **Componentes:** Un solo archivo `App.tsx` (monolítico, 873 líneas)
- **Estilos:** `index.css` con design tokens y utilidades Tailwind
- **Lógica:** Separada en `LullabySynth.ts` para audio

### Styling Approach

- Tailwind CSS v4 con configuración inline en `@theme`
- Clases utilitarias + clases custom en `index.css`
- Animaciones custom definidas en CSS
- No hay CSS modules ni styled-components

### State Management

- `useState` para estado local
- `useEffect` para efectos secundarios (countdown, scroll spy, partículas)
- No hay contexto global ni librerías de estado

### Animation Strategy

- `motion/react` (Framer Motion) para animaciones de componentes
- CSS animations para efectos continuos (float, bounce, pulse)
- Web Audio API para efectos sonoros

## Development Notes

### AI Studio Origin

Este proyecto fue exportado de Google AI Studio. Consideraciones:
- `metadata.json` contiene configuración de AI Studio
- `assets/.aistudio/` tiene configuración específica
- `README.md` menciona AI Studio pero no es relevante para desarrollo local
- Variables de entorno `GEMINI_API_KEY` y `APP_URL` son para AI Studio (no se usan actualmente)

### Font Loading

**Merienda:** Cargada desde Google Fonts en `index.css`  
**Bubbleboddy Neue:** Fuente personalizada, requiere:
1. Descargar de [dafont.com](https://www.dafont.com/es/bubbleboddy-neue.font)
2. Colocar archivos en `assets/fonts/`
3. Actualizar `@font-face` en `index.css`
4. Referenciar en `--font-display` en `@theme`

### Monolithic Component

`App.tsx` es un componente grande (873 líneas). Consideraciones:
- No está refactorizado en sub-componentes
- Toda la lógica de estado está en este archivo
- Para cambios grandes, considerar extraer componentes reutilizables

### Image Assets

Las imágenes usan URLs de Google Photos (`lh3.googleusercontent.com`):
- `CHIBI_COW_AVATAR`: Avatar principal de vaca chibi
- `GALLERY_PHOTOS`: Array de 4 fotos de galería

Para producción, considerar:
- Alojar imágenes localmente o en CDN
- Optimizar tamaños y formatos (WebP)
- Agregar lazy loading (ya implementado parcialmente)

## Deployment

### Build Process

```bash
pnpm build
```

Genera `dist/` con archivos estáticos optimizados.

### Static Hosting

El proyecto puede desplegarse en cualquier hosting estático:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

### Environment Variables

Actualmente no se usan variables de entorno en el código. Las definidas en `.env.example` son para AI Studio y no son necesarias para desarrollo local.

## Accessibility Considerations

- Estructura semántica HTML (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- Labels en formularios
- `alt` text en imágenes
- `aria-labels` en botones de iconos (parcial)
- Navegación por teclado (nativa de React)

## Known Issues

1. **Fuentes:** Bubbleboddy Neue no está configurada (falta archivo local)
2. **Monolito:** `App.tsx` es muy grande, difícil de mantener
3. **Imágenes externas:** URLs de Google Photos pueden expirar
4. **WhatsApp:** Número hardcodeado (`56912345678`), debería ser configurable
5. **Audio autoplay:** Algunos navegadores bloquean audio automático

## Future Improvements

- [ ] Refactorizar `App.tsx` en componentes modulares
- [ ] Agregar Bubbleboddy Neue como fuente local
- [ ] Optimizar imágenes (WebP, lazy loading completo)
- [ ] Agregar más secciones (registry, games, menu)
- [ ] Implementar backend para RSVP (en vez de WhatsApp)
- [ ] Agregar animaciones de scroll reveal
- [ ] Mejorar accesibilidad (ARIA labels, focus management)
- [ ] Agregar modo oscuro
- [ ] Internacionalización (es/en)

## Contact

Para preguntas sobre este proyecto, contactar al desarrollador.
