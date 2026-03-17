import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-card/20">
      <div className="w-full max-w-[1200px] mx-auto px-8 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <a href="#" className="text-lg font-bold tracking-tight">
              <span className="text-primary">&lt;</span>
              VR
              <span className="text-primary"> /&gt;</span>
            </a>
            <p className="text-[11px] text-text-muted mt-1">
              Building the web, one component at a time.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {[
              { icon: <FaGithub size={16} />, href: 'https://github.com/vkxr', label: 'GitHub' },
              { icon: <FaLinkedin size={16} />, href: 'https://www.linkedin.com/in/vivek-rao-a20699278/', label: 'LinkedIn' },
              { icon: <HiOutlineMail size={16} />, href: 'mailto:vkrao800@gmail.com', label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 rounded-lg text-text-muted hover:text-primary hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-5 border-t border-border text-center">
          <p className="text-[11px] text-text-muted">
            © {year} Vivek Rao. Designed & built with{' '}
            <span className="text-primary">♥</span> using React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
