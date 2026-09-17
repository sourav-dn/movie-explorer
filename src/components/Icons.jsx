import React from 'react';

export function FilmIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2.5" />
      <path d="M7 4v16M17 4v16M2 8h5M2 16h5M17 8h5M17 16h5M2 12h20" />
    </svg>
  );
}

export function StarIcon({ className = "w-4 h-4", filled = true, ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? "0" : "1.8"}
      {...props}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function CalendarIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export function SearchIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" strokeLinecap="round" />
    </svg>
  );
}

export function XMarkIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function SparklesIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}

export function ExternalLinkIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  );
}

export function PlayIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M5.25 4.5A1.5 1.5 0 003 5.8v12.4a1.5 1.5 0 002.25 1.3l12.75-6.2a1.5 1.5 0 000-2.6L5.25 4.5z" />
    </svg>
  );
}

export function ClockIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 6v6l4 2" />
    </svg>
  );
}

export function GlobeIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 000 18M12 3a14.5 14.5 0 010 18" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

export function EyeIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function TagIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.879 2.682.434l3.87-1.935c.902-.451 1.347-1.488.983-2.434l-3.328-8.652A2.25 2.25 0 0015.347 3H9.568z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </svg>
  );
}

export function RefreshIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  );
}

export function FilterIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.539.092.917.56.917 1.109v2.104c0 .35-.14.686-.388.934L14.5 14v6.25a.75.75 0 01-1.164.624l-3-2A.75.75 0 0110 18.25V14L3.888 7.825A1.32 1.32 0 013.5 6.89V4.787c0-.549.378-1.017.917-1.109A48.868 48.868 0 0112 3z" />
    </svg>
  );
}

