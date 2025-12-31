// Orbi UI Type Definitions

export type OrbState = 'idle' | 'listening' | 'processing' | 'speaking' | 'error';

export type OrbSize = 'sm' | 'md' | 'lg';

export type ViewMode = 'dashboard' | 'widget';

export type WidgetState = 'inactive' | 'active' | 'minimized';

export type IconVariant = 'calendar' | 'rocket' | 'home' | 'heart' | 'check' | 'more' | 'custom';

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export interface PanelPosition {
  x: number;
  y: number;
}

export interface VoiceAgentConfig {
  wakeWord: string;
  wakeWordEnabled: boolean;
  language: string;
  voiceId: string;
  timeouts: {
    listening: number;
    followUp: number;
    processing: number;
  };
  feedback: {
    sounds: {
      wakeDetected: string;
      listeningStart: string;
      processingStart: string;
      error: string;
    };
    haptics: {
      enabled: boolean;
      wakePattern: number[];
    };
  };
  privacy: {
    localProcessing: boolean;
    saveHistory: boolean;
    historyRetention: string;
  };
}

export interface ChatMessage {
  id: string;
  text: string;
  timestamp: Date;
  sender: 'user' | 'orbi';
  type: 'text' | 'voice';
}

export interface Tool {
  id: string;
  label: string;
  icon: React.ReactNode;
  variant: IconVariant;
  onClick?: () => void;
}

export interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder' | 'pdf' | 'image' | 'document';
  icon: React.ReactNode;
  color: string;
  backgroundColor: string;
  size?: number;
  modified?: Date;
}

export interface ThemeConfig {
  colors: {
    orb: {
      core: string;
      deep: string;
      halo: string;
    };
    surface: {
      lavender: string;
      rose: string;
      cream: string;
    };
    glass: {
      background: string;
      border: string;
      blur: string;
    };
    text: {
      primary: string;
      secondary: string;
      muted: string;
    };
    accent: {
      pink: string;
      purple: string;
      orange: string;
      blue: string;
    };
    semantic: {
      success: string;
      error: string;
      voiceActive: string;
    };
  };
  typography: {
    fontFamily: {
      display: string;
      body: string;
    };
    scale: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
    };
  };
  spacing: {
    unit: number;
    scale: number[];
  };
  radii: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    glow: {
      cyan: string;
      soft: string;
    };
  };
  animation: {
    duration: {
      fast: string;
      base: string;
      slow: string;
      spring: string;
    };
    easing: {
      default: string;
      spring: string;
    };
  };
}
