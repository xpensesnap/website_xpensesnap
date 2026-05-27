import Link from 'next/link';
import LogoMark from './LogoMark';

export function Logo({ size = 36, asLink = true }: { size?: number; asLink?: boolean }) {
  const inner = (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark size={size} />
      <span className="font-display font-extrabold tracking-tight text-[1.15rem] sm:text-[1.2rem] text-ink-900 dark:text-white">
        Xpense<span className="gradient-text">Snap</span>
      </span>
    </span>
  );
  if (!asLink) return inner;
  return (
    <Link href="/" className="inline-flex items-center group" aria-label="XpenseSnap home">
      <span className="transition-transform duration-300 group-hover:rotate-[8deg] group-hover:scale-[1.03]">
        <LogoMark size={size} />
      </span>
      <span className="ml-2.5 font-display font-extrabold tracking-tight text-[1.15rem] sm:text-[1.2rem] text-ink-900 dark:text-white">
        Xpense<span className="gradient-text">Snap</span>
      </span>
    </Link>
  );
}

export default Logo;
