import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socials = [
  {
    icon: <HiOutlineMail size={18} />,
    label: 'Email',
    value: 'vkrao800@gmail.com',
    href: 'mailto:vkrao800@gmail.com',
    color: '#6366F1',
  },
  {
    icon: <FaLinkedin size={18} />,
    label: 'LinkedIn',
    value: 'vivek-kumar-100a0b402',
    href: 'https://linkedin.com/in/vivek-kumar-100a0b402/',
    color: '#0A66C2',
  },
  {
    icon: <FaGithub size={18} />,
    label: 'GitHub',
    value: 'github.com/vkxr',
    href: 'https://github.com/vkxr',
    color: '#ffffff',
  },
  {
    icon: <HiOutlinePhone size={18} />,
    label: 'Phone',
    value: '+91 8814012395',
    href: 'tel:+918814012395',
    color: '#22C55E',
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-8 lg:px-12 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">07. Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-text-muted mt-3 max-w-md mx-auto text-sm">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6 lg:gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-3"
          >
            <div className="p-4 rounded-xl border border-border bg-bg-card/40 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1 text-xs text-text-muted">
                <HiOutlineLocationMarker size={14} />
                <span>Location</span>
              </div>
              <p className="text-sm font-medium">Gurugram, Haryana, India</p>
            </div>

            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-bg-card/40 hover:bg-bg-card/70 hover:border-border-hover transition-all duration-300 backdrop-blur-sm"
              >
                <div
                  className="p-2 rounded-lg transition-colors duration-300 flex-shrink-0"
                  style={{
                    backgroundColor: `${social.color}12`,
                    color: social.color,
                  }}
                >
                  {social.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-text-muted uppercase tracking-wider">{social.label}</p>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors truncate">
                    {social.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-5 md:p-7 rounded-2xl border border-border bg-bg-card/40 backdrop-blur-sm space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-text-muted mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-bg border border-border text-text text-sm placeholder:text-text-muted/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-text-muted mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-bg border border-border text-text text-sm placeholder:text-text-muted/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-text-muted mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-2.5 rounded-xl bg-bg border border-border text-text text-sm placeholder:text-text-muted/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 text-sm"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
