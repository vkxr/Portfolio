import { motion } from 'framer-motion';
import { HiArrowDown, HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] bg-secondary/6 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/3 rounded-full blur-[150px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-border bg-bg-card/50 backdrop-blur-sm"
        >
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
          <span className="text-xs text-text-muted font-medium tracking-wide">Available for opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-5"
        >
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Vivek Rao
          </span>
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-5"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-mono font-medium text-primary bg-primary/10 border border-primary/20 rounded-lg">
            Full Stack Web Developer
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-text-muted max-w-xl mx-auto mb-9 leading-relaxed"
        >
          Building scalable web applications and modern digital products.
          I craft performant, accessible, and visually stunning experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
        >
          <a
            href="#projects"
            className="group px-7 py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center gap-2 text-sm"
          >
            View Projects
            <HiArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border border-border hover:border-border-hover bg-bg-card/50 hover:bg-bg-card text-text font-medium rounded-xl transition-all duration-300 flex items-center gap-2 backdrop-blur-sm text-sm"
          >
            <HiOutlineMail className="w-4 h-4" />
            Contact Me
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-3"
        >
          {[
            { icon: <FaGithub size={18} />, href: 'https://github.com/vkxr', label: 'GitHub' },
            { icon: <FaLinkedin size={18} />, href: 'https://linkedin.com/in/vivek-rao-a20699278', label: 'LinkedIn' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2.5 rounded-xl border border-border bg-bg-card/30 text-text-muted hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 backdrop-blur-sm"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-border rounded-full flex justify-center p-1"
        >
          <motion.div className="w-1 h-2 bg-text-muted rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
