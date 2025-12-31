import { Settings } from 'lucide-react';

export function VoiceSettings() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-text-secondary">Voice Response</span>
        <div className="w-10 h-6 bg-orb-core/20 rounded-full relative">
          <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-orb-core rounded-full" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-text-secondary">Wake Word</span>
        <div className="w-10 h-6 bg-orb-core/20 rounded-full relative">
          <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-orb-core rounded-full" />
        </div>
      </div>
      <button className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors">
        <Settings size={14} />
        More Settings
      </button>
    </div>
  );
}
