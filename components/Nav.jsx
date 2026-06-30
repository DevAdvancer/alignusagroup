'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/industries', 'Industries'],
  ['/case-studies', 'Case Studies'],
  ['/careers', 'Careers'],
  ['/blog', 'Insights'],
  ['/contact', 'Contact'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <nav className={'nav' + (open ? ' open' : '')} role="navigation" aria-label="Main navigation">
      <div className="container-wide nav-row">
        <Link className="nav-logo" href="/" onClick={() => setOpen(false)} aria-label="Align USA Group — home">
          <Image
            src="/logo/wordmark.png"
            alt="Align USA Group logo - Staffing, Software, Consulting"
            width={1600}
            height={508}
            priority
            style={{ height: 32, width: 'auto', display: 'block' }}
          />
        </Link>
        <div className="nav-links" role="menubar" style={{ whiteSpace: 'nowrap' }}>
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={'nav-link' + (isActive(href) ? ' active' : '')}
              onClick={() => setOpen(false)}
              role="menuitem"
              aria-current={isActive(href) ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="nav-cta">
          <ThemeToggle />
          <Link className="btn btn-primary btn-mini" href="/contact">
            Book Align USA Consultation
          </Link>
          <button
            className="nav-burger"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 7h16M4 12h16M4 17h16'} />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
