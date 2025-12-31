# Orbi UI - Voice-First AI Assistant Interface

A glassmorphic, voice-first AI assistant interface built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Overview

Orbi is a modern voice agent interface featuring:
- **Glassmorphic Design**: Translucent panels with backdrop blur effects
- **Ambient Aesthetics**: Soft lavender, rose, and cream gradient backgrounds
- **Voice-First Interaction**: Central animated orb that responds to voice commands
- **Dual-Mode Interface**: Switch between full dashboard and compact widget modes
- **Responsive Animations**: Smooth state transitions using Framer Motion

## Design System

### Color Palette

The Orbi design system uses a carefully curated palette:

- **Orb Colors**: Cyan core (#00D4E8), Deep blue (#0A1628), Teal halo (#7EE8FA)
- **Surface Colors**: Lavender (#E8D5F0), Rose (#F5D0E0), Cream (#FFF8F0)
- **Accent Colors**: Pink (#FF8FAB), Purple (#C490E4), Orange (#FFB366), Blue (#7EB8FF)
- **Text Colors**: Primary (#1A1A2E), Secondary (#6B6B8D), Muted (#9B9BB0)
- **Semantic Colors**: Success (#7ED9A6), Voice Active (#00E5CC), Error (#FF7B7B)

### Typography

- **Display Font**: Outfit (titles, branding)
- **Body Font**: Inter (content, UI text)
- **Scale**: 12px to 32px with consistent line heights

### Components

#### Core Components

1. **VoiceOrb** - Central animated orb with starfield canvas
   - States: idle, listening, processing, speaking, error
   - Sizes: sm (80px), md (200px), lg (280px)
   - Features: Particle animations, reactive glow, state-based transitions

2. **GlassPanel** - Floating translucent container
   - Backdrop blur: 20px
   - Border: 1px solid rgba(255,255,255,0.4)
   - Features: Collapsible, draggable (with DnD Kit), closable

3. **VoiceWidget** - Compact mode floating widget
   - Position: Bottom-right corner
   - Features: Mini orb, waveform animation, status indicator
   - Can expand back to full dashboard

4. **IconButton** - Rounded icon containers
   - Variants: calendar, rocket, home, heart, check, more
   - Hover effects: scale(1.05), y: -2px
   - Focus states: ring outline

#### Panel Components

- **ChatHistory** - Recent conversation messages
- **ToolsServices** - Quick action grid (6 icons)
- **DocumentsFiles** - File/folder grid (6 items)
- **VoiceSettings** - Voice configuration toggles

#### Layout Components

- **Dashboard** - Main orchestration layer
  - Grid layout: 3 columns x 2 rows
  - Central orb with 4 surrounding panels
  - Mode switching: dashboard ↔ widget

- **AmbientBackground** - Animated gradient canvas
  - Flowing wave SVG animations
  - 20-second ambient shift cycle
  - Subtle noise texture overlay

## Project Structure

```
src/
├── components/
│   ├── core/
│   │   ├── VoiceOrb.tsx         # Animated central orb
│   │   ├── GlassPanel.tsx       # Floating panel container
│   │   ├── VoiceWidget.tsx      # Compact widget mode
│   │   └── IconButton.tsx       # Styled icon buttons
│   ├── panels/
│   │   ├── ChatHistory.tsx      # Chat messages
│   │   ├── ToolsServices.tsx    # Tool grid
│   │   ├── DocumentsFiles.tsx   # File grid
│   │   └── VoiceSettings.tsx    # Settings panel
│   └── layout/
│       ├── Dashboard.tsx        # Main layout
│       └── AmbientBackground.tsx # Background animations
├── styles/
│   ├── tokens.css               # CSS custom properties
│   └── globals.css              # Global styles + Tailwind
├── App.tsx                      # Root component
└── main.tsx                     # Entry point
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

Run the frontend development server:

```bash
npm run dev:frontend
```

The application will be available at `http://localhost:3000`

### Build

Build the frontend for production:

```bash
npm run build:frontend
```

Build both frontend and backend:

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Configuration

### Tailwind Configuration

The Tailwind config (`tailwind.config.js`) extends the default theme with:
- Custom color palette
- Glass effect utilities
- Custom animations (orb-breathe, orb-pulse, ring-expand, ambient-shift)
- Spring easing function

### Vite Configuration

The Vite config (`vite.config.ts`) includes:
- React plugin with Fast Refresh
- Development server on port 3000
- Production build optimization

## Component Usage

### VoiceOrb Example

```tsx
import { VoiceOrb } from './components/core/VoiceOrb';

function MyComponent() {
  const [state, setState] = useState<'idle' | 'listening' | 'processing' | 'speaking'>('idle');

  return (
    <VoiceOrb
      state={state}
      size="lg"
      onClick={() => setState('listening')}
    />
  );
}
```

### GlassPanel Example

```tsx
import { GlassPanel } from './components/core/GlassPanel';
import { Settings } from 'lucide-react';

function MyPanel() {
  return (
    <GlassPanel
      title="Settings"
      icon={<Settings size={16} />}
      collapsible
    >
      <div>Panel content here</div>
    </GlassPanel>
  );
}
```

## Voice State Machine

The orb follows this state flow:

```
IDLE → [tap/wake word] → LISTENING → [speech detected] → PROCESSING
  → [response ready] → SPEAKING → [complete] → IDLE
```

State transition durations:
- Listening timeout: 5s
- Processing timeout: 30s
- Follow-up timeout: 3s

## Animations

All animations use Framer Motion for smooth transitions:

- **Orb Breathing** (idle): 4s ease-in-out loop
- **Orb Pulse** (listening): 1.5s with expanding rings
- **Orb Spin** (processing): 2s linear rotation
- **Ambient Shift**: 20s background gradient animation
- **Panel Entry**: 300ms spring transition with stagger

## Accessibility

- All interactive elements have `aria-label` attributes
- Focus states visible with 2px ring outline
- Keyboard navigation supported for all panels
- Color contrast ratios meet WCAG 2.2 standards
- Reduced motion support via `prefers-reduced-motion`

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Modern mobile browsers

## Performance Optimizations

- Canvas rendering uses `requestAnimationFrame`
- Hardware-accelerated CSS properties (`transform`, `opacity`)
- Lazy loading for panel content
- Optimized SVG animations
- Font display: swap

## Integration with Deepgram

The existing Deepgram Voice Agent backend (`src/index.ts`) can be integrated by:

1. Importing WebSocket connection logic
2. Connecting orb state to voice recognition events
3. Streaming audio through the Deepgram API
4. Updating UI based on agent responses

See the original `static/index.html` for WebSocket implementation reference.

## Customization

### Theme Customization

Modify `src/styles/tokens.css` to change:
- Color palette
- Typography scales
- Spacing system
- Animation timings

### Component Customization

All components accept `className` props for additional styling:

```tsx
<VoiceOrb className="custom-class" />
<GlassPanel className="w-full h-full" />
```

## License

MIT

## Credits

- Design system based on glassmorphism and calm-tech principles
- Icons from Lucide React
- Animations powered by Framer Motion
- Voice agent backend by Deepgram
