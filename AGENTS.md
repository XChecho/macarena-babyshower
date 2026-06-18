# AGENTS.md - Macarena Baby Shower

## Project Identity

**Name:** Macarena Baby Shower  
**Type:** Landing page para Baby Shower con temática Cow Chibi / Moo Baby Chibi  
**Purpose:** Invitación digital interactiva para el Baby Shower de Macarena Morales Cárdenas  
**Event Date:** 7 de agosto de 2026, 4:00 PM  
**Origin:** Exportado de Google AI Studio

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS v4 (configuración inline en CSS con `@theme`)
- **Animations:** `motion` (Framer Motion)
- **Icons:** `lucide-react`
- **Audio:** HTML5 Audio API (reproductor MP3 con loop)
- **Package Manager:** pnpm

## Project Structure

```
macarena-baby-shower/
├── assets/
│   ├── fonts/                # Fuentes locales (Bubbleboddy Neue, Merienda)
│   └── .aistudio/            # Configuración de AI Studio
├── public/
│   └── assets/
│       ├── images/           # Imágenes locales (avatar, galería)
│       └── sounds/           # Audio (Índigo - Camilo y Evaluna)
├── src/
│   ├── App.tsx               # Orquestador principal de secciones
│   ├── main.tsx              # Entry point de React
│   ├── index.css             # Design tokens, Tailwind config y utilidades
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx    # Navegación desktop + móvil
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx      # Cuenta regresiva, avatar chibi
│   │   │   ├── EventDetails.tsx  # Fecha, hora, lugar
│   │   │   ├── Gallery.tsx   # Fotos polaroid con lightbox
│   │   │   ├── Gifts.tsx     # Link a SmileBaby
│   │   │   ├── Rsvp.tsx      # Formulario WhatsApp
│   │   │   └── Thanks.tsx    # Agradecimientos
│   │   └── ui/
│   │       ├── ParticleBackground.tsx
│   │       ├── Lightbox.tsx
│   │       └── MusicToggle.tsx
│   ├── hooks/
│   │   ├── useCountdown.ts
│   │   ├── useScrollSpy.ts
│   │   └── useBackgroundMusic.ts
│   └── lib/
│       ├── constants.ts      # URLs, config, datos estáticos
│       └── utils.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── AGENTS.md                 # Este archivo
└── DESIGN.md                 # Design system y guía de estilo
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
- Estado: ✅ Configurada en `assets/fonts/`

**Body Font:** Merienda  
- Uso: Cuerpo de texto, acentos, etiquetas
- Características: Serif cálida, legible, estilo "bookish"
- Fuente: [Merienda](https://fonts.google.com/specimen/Merienda)
- Estado: ✅ Configurada en `assets/fonts/`

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
4. **Gifts** - Enlace a SmileBaby con mensaje emotivo
5. **RSVP** - Formulario que genera mensaje de WhatsApp
6. **Thanks** - Agradecimientos con animaciones

### Interactive Elements

- **Música de fondo:** "Índigo" de Camilo y Evaluna en loop (inicia tras interacción)
- **Botón mute:** Control de música en navbar
- **Partículas:** Corazones y soles flotantes animados
- **Lightbox:** Modal para ver fotos en grande
- **Countdown:** Cuenta regresiva en tiempo real
- **Scroll Spy:** Navegación activa según sección visible
- **WhatsApp Integration:** RSVP envía mensaje pre-formateado

## Code Conventions

### File Organization

- **Componentes:** Extraídos en `src/components/` (layout, sections, ui)
- **Hooks:** Custom hooks en `src/hooks/`
- **Constantes:** URLs y config en `src/lib/constants.ts`
- **Estilos:** `index.css` con design tokens y utilidades Tailwind

### Styling Approach

- Tailwind CSS v4 con configuración inline en `@theme`
- Clases utilitarias + clases custom en `index.css`
- Animaciones custom definidas en CSS
- No hay CSS modules ni styled-components

### State Management

- `useState` para estado local
- `useEffect` para efectos secundarios
- Custom hooks para lógica reutilizable
- No hay contexto global ni librerías de estado

### Animation Strategy

- `motion/react` (Framer Motion) para animaciones de componentes
- CSS animations para efectos continuos (float, bounce, pulse)
- HTML5 Audio API para música de fondo

## Assets

### Images

Las imágenes se almacenan en `public/assets/images/`:
- `chibi-cow-avatar.jpg` - Avatar principal de vaca chibi
- `gallery-1.jpg` a `gallery-4.jpg` - Fotos de galería

### Audio

- `public/assets/sounds/indigo.mp3` - "Índigo" de Camilo y Evaluna (música de fondo)

### Fonts

- `assets/fonts/BubbleboddyNeue-Regular.ttf`
- `assets/fonts/BubbleboddyNeue-Bold.ttf`
- `assets/fonts/Merienda-Regular.ttf`
- `assets/fonts/Merienda-Medium.ttf`
- `assets/fonts/Merienda-Bold.ttf`

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

Actualmente no se usan variables de entorno en el código.

## Configuration

### URLs Editables

En `src/lib/constants.ts`:
- `SMILEBABY_URL` - Link a la lista de regalos en SmileBaby
- `WHATSAPP_NUMBER` - Número de WhatsApp para RSVP
- `EVENT_DATE` - Fecha del evento (ISO format)

## Known Issues

1. **WhatsApp:** Número hardcodeado (`56912345678`), debe actualizarse
2. **Audio copyright:** "Índigo" de Camilo y Evaluna requiere licencia para uso público
3. **Mobile nav:** 6 secciones pueden ser muchas para navegación móvil

## Future Improvements

- [ ] Implementar backend para RSVP (en vez de WhatsApp)
- [ ] Mejorar accesibilidad (ARIA labels, focus management)
- [ ] Agregar modo oscuro
- [ ] Internacionalización (es/en)
- [ ] Optimizar imágenes (WebP, lazy loading completo)

## Contact

Para preguntas sobre este proyecto, contactar al desarrollador.
