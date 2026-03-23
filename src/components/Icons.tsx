export function CoinsIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="14" cy="22" r="11" stroke="#C5A44E" strokeWidth="1.5" />
      <circle cx="22" cy="14" r="11" stroke="#1B3D2F" strokeWidth="1.5" />
      <text x="22" y="18" textAnchor="middle" fill="#1B3D2F" fontSize="10" fontFamily="Georgia">$</text>
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="12" stroke="#1B3D2F" strokeWidth="1.5" />
      <ellipse cx="18" cy="18" rx="6" ry="12" stroke="#C5A44E" strokeWidth="1" />
      <line x1="6" y1="18" x2="30" y2="18" stroke="#1B3D2F" strokeWidth="0.75" />
      <line x1="8" y1="11" x2="28" y2="11" stroke="#1B3D2F" strokeWidth="0.5" />
      <line x1="8" y1="25" x2="28" y2="25" stroke="#1B3D2F" strokeWidth="0.5" />
    </svg>
  );
}

export function ShieldIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M18 4 L30 10 L30 20 C30 27 18 33 18 33 C18 33 6 27 6 20 L6 10 Z" stroke="#1B3D2F" strokeWidth="1.5" />
      <path d="M13 18 L16.5 21.5 L23 14" stroke="#C5A44E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RecycleIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M18 6 L22 13 L14 13 Z" stroke="#1B3D2F" strokeWidth="1.5" />
      <path d="M27 24 L22 13 L30 17 Z" stroke="#C5A44E" strokeWidth="1.5" />
      <path d="M9 24 L14 13 L6 17 Z" stroke="#1B3D2F" strokeWidth="1.5" />
      <path d="M12 28 L24 28" stroke="#C5A44E" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function GemIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M10 14 L18 6 L26 14 L18 32 Z" stroke="#C5A44E" strokeWidth="1.5" />
      <line x1="10" y1="14" x2="26" y2="14" stroke="#1B3D2F" strokeWidth="1" />
      <line x1="18" y1="6" x2="18" y2="32" stroke="#1B3D2F" strokeWidth="0.5" opacity="0.4" />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.2" />
      <polygon points="7,5.5 13,9 7,12.5" fill="currentColor" />
    </svg>
  );
}

export function DocIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="3" y="1" width="12" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <line x1="6" y1="5" x2="12" y2="5" stroke="currentColor" strokeWidth="0.8" />
      <line x1="6" y1="8" x2="12" y2="8" stroke="currentColor" strokeWidth="0.8" />
      <line x1="6" y1="11" x2="10" y2="11" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}

export const iconMap: Record<string, React.FC> = {
  coins: CoinsIcon,
  globe: GlobeIcon,
  shield: ShieldIcon,
  recycle: RecycleIcon,
  gem: GemIcon,
};
