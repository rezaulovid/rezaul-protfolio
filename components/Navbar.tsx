'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#education', label: 'Education' },
  { href: '/#certificates', label: 'Certificates' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <nav className="navbar container" aria-label="Main navigation">
        <Link
          className="brand"
          href="/"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">
            R<span>.</span>
          </span>
          <span>
            rezaul<span className="brand-muted">.dev</span>
          </span>
        </Link>

        <div className={`nav-links ${open ? 'nav-links-open' : ''}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            className="nav-contact"
            href="/#contact"
            onClick={() => setOpen(false)}
          >
            Let’s talk <ArrowUpRight size={15} />
          </Link>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}
