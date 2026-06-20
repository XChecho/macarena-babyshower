---
name: Moo Baby Chibi
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#514345'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#837375'
  outline-variant: '#d5c2c4'
  surface-tint: '#825059'
  primary: '#825059'
  on-primary: '#ffffff'
  primary-container: '#f8b9c3'
  on-primary-container: '#764750'
  inverse-primary: '#f5b6c0'
  secondary: '#6e5d00'
  on-secondary: '#ffffff'
  secondary-container: '#f8df75'
  on-secondary-container: '#736200'
  tertiary: '#705a4c'
  on-tertiary: '#ffffff'
  tertiary-container: '#e1c4b2'
  on-tertiary-container: '#665042'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9de'
  primary-fixed-dim: '#f5b6c0'
  on-primary-fixed: '#330f18'
  on-primary-fixed-variant: '#673a42'
  secondary-fixed: '#fbe278'
  secondary-fixed-dim: '#dec65f'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#534600'
  tertiary-fixed: '#fbddca'
  tertiary-fixed-dim: '#dec1af'
  on-tertiary-fixed: '#28180d'
  on-tertiary-fixed-variant: '#574335'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-chibi:
    fontFamily: bubbleboddy-neue
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -1px
  headline-lg:
    fontFamily: bubbleboddy-neue
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: bubbleboddy-neue
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  subhead-decorative:
    fontFamily: garet
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  body-md:
    fontFamily: garet
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: garet
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 1px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 16px
  margin-mobile: 24px
  margin-desktop: 64px
  section-gap: 48px
---

## Brand & Style
The design system is centered around a "Cow Chibi" theme, specifically tailored for baby shower events. The brand personality is whimsical, nurturing, and celebratory. It aims to evoke an emotional response of warmth and joy through a "kawaii" aesthetic.

The visual style blends **Minimalism** with **Tactile/Skeuomorphic** elements. While the layouts remain clean to ensure readability for event details, the surfaces use watercolor textures and organic, "hand-painted" blobs to mimic a physical scrapbook or invitation. A signature "Cow Print" pattern acts as a structural border and accent element to tie the theme together.

## Colors
The palette is dominated by soft, airy tones contrasted with rich, grounding "cow" accents.
- **Primary (Soft Pink):** Used for main headers, primary buttons, and large decorative watercolor blobs.
- **Secondary (Pastel Yellow):** Used for highlights, decorative flowers, and "attention" elements like dates or special announcements.
- **Tertiary (Dark Brown/Black):** Used exclusively for typography and fine-line illustrations to maintain legibility while feeling softer than pure black.
- **Neutral:** A warm white is used for the base canvas to allow watercolor textures to bleed naturally.
- **Cow Print:** A high-contrast black/white pattern used sparingly in corners or as section dividers.

## Typography
The typography uses a mix of rounded sans-serifs and hand-drawn serifs to balance playfulness with information. 
- **Headers:** Utilize a bold, rounded font (mapped to *Bubbleboddy Neue* for its friendly, approachable curves) to mimic the "Bubbleboddy" aesthetic.
- **Body & Accents:** Utilize a warm, readable sans-serif (mapped to *Garet*) to provide the "bookish" and personal feel of an invitation. 
- **Display Style:** Large "Display Chibi" should be used for names, often rendered in the primary pink with a slight text shadow for depth.

## Layout & Spacing
The design system follows a **Fixed Grid** model for desktop and a **Fluid Content** model for mobile. 
- **Rhythm:** An 8px soft grid guides all spacing.
- **Margins:** Large, generous white space (64px+) on desktop simulates the "center-aligned" nature of high-end stationery.
- **Reflow:** On mobile, watercolor elements should float behind text to ensure the "chibi cow" illustrations don't interfere with information hierarchy. Gutters remain consistent at 16px to prevent content crowding.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and **Watercolor Overlays** rather than traditional shadows.
- **Canvas:** The base layer is the warm neutral white.
- **Decor Layer:** Watercolor blobs and cow prints sit just above the canvas with a "multiply" blend mode.
- **Content Layer:** Cards and interactive elements use extremely soft, tinted shadows (e.g., a 10% opacity pink shadow) to appear as if they are paper cut-outs sitting on a physical desk.
- **Illustrations:** Characters have a subtle "glow" or soft outer feathering to separate them from the background texture.

## Shapes
In line with the "Chibi" aesthetic, sharp corners are strictly avoided. All containers, buttons, and input fields use **Rounded** (0.5rem) or **Pill-shaped** (full radius) corners. Decorative blobs are organic and asymmetrical, mimicking the natural flow of watercolor paint on paper.

## Components
- **Buttons:** Large, pill-shaped, and filled with the primary pink. Hover states should transition to a slightly deeper rose color. Text inside is always the tertiary dark brown.
- **Cards:** White backgrounds with a thin 1px border in soft pink (#f8b9c3). Use a "scalloped" edge effect or a corner "cow print" accent for special announcement cards.
- **Input Fields:** Rounded with a soft yellow focus ring. The cursor should be the tertiary brown.
- **Chips/Badges:** Small pastel yellow circles or rounded rectangles used for dates, times, or RSVP status.
- **Dividers:** Instead of lines, use a repeating "daisy" icon or a row of small cow-print spots to separate content sections.
- **Lists:** Bullet points are replaced by small yellow suns or pink flower icons.
