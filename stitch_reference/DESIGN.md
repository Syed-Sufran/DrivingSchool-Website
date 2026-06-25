---
name: Apex Automotive Ledger
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d4c5ab'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9c8f78'
  outline-variant: '#4f4632'
  surface-tint: '#fabd00'
  primary: '#ffe4af'
  on-primary: '#3f2e00'
  primary-container: '#ffc107'
  on-primary-container: '#6d5100'
  inverse-primary: '#785900'
  secondary: '#f7bd48'
  on-secondary: '#412d00'
  secondary-container: '#ba880f'
  on-secondary-container: '#392700'
  tertiary: '#e9e6e6'
  on-tertiary: '#313030'
  tertiary-container: '#cdcaca'
  on-tertiary-container: '#565555'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdf9e'
  primary-fixed-dim: '#fabd00'
  on-primary-fixed: '#261a00'
  on-primary-fixed-variant: '#5b4300'
  secondary-fixed: '#ffdea6'
  secondary-fixed-dim: '#f7bd48'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5d4200'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  title-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  max-width: 1440px
---

## Brand & Style

The design system is engineered for a premium automotive audience, evoking the precision of high-end engineering and the luxury of an exclusive concierge service. Drawing inspiration from the provided imagery, the aesthetic is **Cinematic Modernism**—characterized by deep, moody values and focused "pools" of golden light that guide the user's attention.

The personality is authoritative, sophisticated, and unwavering. We balance the heavy, industrial weight of matte charcoal with the vibrant energy of performance-focused yellows. Visual layouts should feel like a grand reveal, using expansive photography and generous margins to create a sense of scale and exclusivity.

- **Primary Style:** Minimalism with high-contrast accents.
- **Visual Metaphor:** The "Sliding Gate"—using vertical reveals, structured ironwork patterns, and light-to-dark transitions to signify access to a premium world.
- **Target Audience:** High-net-worth individuals, automotive enthusiasts, and professional logistics partners.

## Colors

The palette is rooted in a dark-mode-first philosophy to maintain a cinematic, high-end feel. 

- **Matte Black (#0D0D0D):** The foundation of the system. Use this for the primary background to create a sense of infinite depth.
- **Charcoal Tier (#1A1A1A):** Used for elevated surfaces, cards, and containers to differentiate depth from the base background.
- **Golden Yellow (#FFC107):** The "Ignition" color. Reserved for primary calls to action, active states, and critical highlights.
- **Deep Ochre (#B8860B):** Used for secondary accents, borders, and subtle interactive states to add warmth and a metallic, brass-like quality reminiscent of the gate filigree in the reference image.
- **Functional Whites:** Use high-contrast white (#FFFFFF) for body copy and muted silver (#A0A0A0) for secondary metadata.

## Typography

This design system utilizes a high-contrast typographic hierarchy to communicate confidence and technical precision.

- **Headlines:** Sora provides a modern, geometric structure with a wide stance that feels "planted" and stable, much like a performance vehicle. Use heavy weights (700+) for all primary headings.
- **Body:** Inter is selected for its exceptional legibility and neutral tone, ensuring that long-form content is accessible without distracting from the brand's visual impact.
- **Labels & Data:** JetBrains Mono is used for technical specs, VIN numbers, and status labels to evoke a sense of precision engineering and data-driven trust.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop to maintain a premium, editorial feel that doesn't feel overly "stretched."

- **Grid:** 12-column layout with 24px gutters.
- **Rhythm:** An 8px linear scale (8, 16, 24, 32, 40, 48, 64, 80) governs all margins and padding. 
- **Desktop:** Generous 80px side margins to allow the content to breathe and feel centered and deliberate.
- **Mobile:** 4-column grid with 20px margins. Content should reflow vertically, with typography scaling down to ensure readability.
- **Safe Zones:** Use 120px - 160px vertical padding for hero sections to emphasize the cinematic "gate" opening effect.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Subtle Light Pools** rather than traditional drop shadows.

- **Base Layer:** The "Ground" layer is Matte Black.
- **Surface Layer:** Cards and modals use the Charcoal (#1A1A1A) tone.
- **Borders:** Instead of shadows, use 1px solid borders in Deep Ochre at low opacity (15-20%) to define edges. This mimics the thin metal lines of the gate in the reference image.
- **Glows:** For primary buttons or active indicators, use a soft, golden outer glow (0px 4px 20px rgba(255, 193, 7, 0.3)) to simulate a light source reflecting off a car's finish.

## Shapes

The shape language is **Soft (0.25rem)**. We avoid fully sharp corners to remain approachable, but also avoid large "bubbly" rounds to maintain a professional, mechanical edge.

- **Buttons:** 4px (0.25rem) corner radius for a "precision-milled" look.
- **Cards:** 8px (0.5rem) corner radius to differentiate larger containers.
- **Inputs:** 4px radius, strictly aligned with the button style for uniformity.
- **Icons:** Use sharp or slightly rounded geometric icons. Avoid hand-drawn or overly organic styles.

## Components

### Buttons
- **Primary:** Solid Golden Yellow background with black text. No border. High-impact.
- **Secondary:** Transparent background with a 1px Deep Ochre border and white text.
- **Tertiary:** Text-only with a JetBrains Mono label and a golden underline on hover.

### Cards
- Background: #1A1A1A (Charcoal).
- Border: 1px #B8860B (Ochre) at 10% opacity.
- Padding: 32px to maintain a premium feel.

### Input Fields
- Dark background (#0D0D0D) with a subtle bottom-border only in muted silver.
- Focus state: Border transitions to Golden Yellow with a faint glow.

### Chips/Tags
- Small, uppercase JetBrains Mono text. 
- Background: Deep Charcoal with a color-coded dot (e.g., Green for 'Available', Yellow for 'In Service').

### Special Component: The Reveal Header
- Large hero images should be masked using a vertical "sliding" transition that mimics the opening of the iron gates from the reference image when the page loads.