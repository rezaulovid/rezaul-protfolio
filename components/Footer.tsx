import Link from 'next/link';
import { Github, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link className="brand" href="/">
          <span className="brand-mark">
            R<span>.</span>
          </span>
          <span>
            rezaul<span className="brand-muted">.dev</span>
          </span>
        </Link>
        <p>Building digital experiences with strategy, search and code.</p>
        <div className="footer-links">
          <a
            href="https://github.com/rezaulovid"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:rezaul1998bd@gmail.com"
            aria-label="Email"
          >
            <ArrowUpRight size={18} />
          </a>
        </div>
        <small>
          © {new Date().getFullYear()} Rezaul Islam. Designed with purpose.
        </small>
      </div>
    </footer>
  );
}
