import { type SVGProps } from 'react';

export function LogoMark({
  size = 40,
  rounded = true,
  ...rest
}: { size?: number; rounded?: boolean } & SVGProps<SVGSVGElement>) {
  const id = `xs-logomark`; // stable ID for SSR
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="XpenseSnap"
      {...rest}
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%"  stopColor="#22C55E" />
          <stop offset="55%" stopColor="#16A34A" />
          <stop offset="100%" stopColor="#0E7A38" />
        </linearGradient>
        <linearGradient id={`${id}-stroke`} x1="22" y1="22" x2="78" y2="78" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="100%" stopColor="#ECFDF5" stopOpacity="0.95" />
        </linearGradient>
        <filter id={`${id}-soft`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.4" />
        </filter>
      </defs>

      <rect
        x="2" y="2" width="96" height="96"
        rx={rounded ? 22 : 0}
        fill={`url(#${id}-bg)`}
      />

      <path
        d="M 8 30 Q 50 6 92 30"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      <g filter={`url(#${id}-soft)`} opacity="0.35">
        <path d="M 22 78 C 38 42, 62 58, 78 22" stroke="#052e16" strokeWidth="12" strokeLinecap="round" fill="none" />
        <path d="M 22 22 C 38 58, 62 42, 78 78" stroke="#052e16" strokeWidth="12" strokeLinecap="round" fill="none" />
      </g>

      <path
        d="M 22 78 C 38 42, 62 58, 78 22"
        stroke={`url(#${id}-stroke)`}
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 22 22 C 38 58, 62 42, 78 78"
        stroke={`url(#${id}-stroke)`}
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />

      <circle cx="50" cy="50" r="3.5" fill="#052e16" />
      <circle cx="50" cy="50" r="1.6" fill="#86EFAC" />
    </svg>
  );
}

export default LogoMark;
