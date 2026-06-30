'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FloatingCTA() {
  const pathname = usePathname();
  if (pathname === '/contact') return null;
  return (
    <Link className="btn btn-primary btn-lg floating-cta" href="/contact">
      Talk to us <span style={{ marginLeft: 4 }}>→</span>
    </Link>
  );
}
