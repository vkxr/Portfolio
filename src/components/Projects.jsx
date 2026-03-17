import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'ChatRoom — Real-Time Communication',
    description:
      'A full-stack real-time chat application featuring WebRTC-based peer-to-peer audio and video calling, deployed on Vercel with a PostgreSQL database on Render. Includes Socket.IO peer connection signaling, inline call event indicators, and a responsive mobile-first UI.',
    tech: ['React', 'Node.js', 'TypeScript', 'WebRTC', 'Socket.IO', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/vkxr',
    demo: '#',
    gradient: 'from-indigo-500/20 to-purple-500/20',
    period: 'Oct 2025 — Present',
  },
  {
    title: 'AI Interview Preparation Platform',
    description:
      'An AI-powered mock interview platform that simulates real interview experiences. Features real-time voice AI interview simulation, automated evaluation, transcript storage, and personalized feedback to help candidates prepare for technical interviews.',
    tech: ['React', 'Node.js', 'TypeScript', 'AI/ML', 'WebSockets', 'MongoDB'],
    github: 'https://github.com/vkxr',
    demo: '#',
    gradient: 'from-violet-500/20 to-fuchsia-500/20',
    period: '2025',
  },
  {
    title: 'DrawTogether — Collaborative Whiteboard',
    description:
      'A multiplayer collaborative whiteboard using Next.js where users draw, write, and erase together on shared canvases via real-time WebSocket synchronization. Structured as a monorepo with shared TypeScript types; integrated in-session real-time chat.',
    tech: ['Next.js', 'Node.js', 'TypeScript', 'WebSockets', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/vkxr',
    demo: '#',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    period: 'Aug 2025 — Present',
  },
  {
    title: 'Second Brain — AI Content Manager',
    description:
      'A platform to save, tag, and search YouTube, Twitter & web content via GitHub OAuth. Integrated Gemini AI for semantic search across saved collections. Public Brain Share feature for publishing curated collections with JWT-secured REST API.',
    tech: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Gemini API'],
    github: 'https://github.com/vkxr',
    demo: '#',
    gradient: 'from-amber-500/20 to-orange-500/20',
    period: 'Jan 2025 — Mar 2025',
  },
  {
    title: 'BloggingSphere — Blogging Platform',
    description:
      'A complete blogging platform with full CRUD operations, JWT authentication, and user ownership validation via a RESTful API. Features a rich Markdown editor for structured content with a fully responsive UI, backend deployed on Render.',
    tech: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    github: 'https://github.com/vkxr',
    demo: '#',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    period: 'Dec 2024 — Feb 2025',
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="relative py-28 lg:py-36">
      <div className="w-full max-w-[1200px] mx-auto px-8 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">03. Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-text-muted mt-3 max-w-lg text-sm leading-relaxed">
            A selection of projects that showcase my technical skills and product thinking.
          </p>
        </motion.div>

        <div className="grid gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -3 }}
              className="group relative rounded-2xl border border-border bg-bg-card/40 hover:bg-bg-card/70 hover:border-border-hover overflow-hidden transition-all duration-400 backdrop-blur-sm"
            >
              {/* Top gradient bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="p-5 md:p-7">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Title row */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} flex-shrink-0`} />
                      <h3 className="text-base md:text-lg font-semibold group-hover:text-primary transition-colors duration-300 leading-snug">
                        {project.title}
                      </h3>
                    </div>

                    {/* Period */}
                    <p className="text-[11px] font-mono text-text-muted/60 ml-5 mb-3">{project.period}</p>

                    {/* Desc */}
                    <p className="text-sm text-text-muted leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[10px] font-mono font-medium text-text-muted/80 bg-bg/50 border border-border/60 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 flex-shrink-0 md:mt-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg border border-border text-text-muted hover:text-text hover:border-border-hover hover:bg-bg-card transition-all duration-300"
                      aria-label={`GitHub: ${project.title}`}
                    >
                      <FaGithub size={16} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg border border-border text-text-muted hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                      aria-label={`Live Demo: ${project.title}`}
                    >
                      <HiExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className={`absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-r ${project.gradient} rounded-full blur-[60px] opacity-0 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none`}
              />
            </motion.article>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/vkxr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-text-muted border border-border rounded-xl hover:text-text hover:border-border-hover hover:bg-bg-card/50 transition-all duration-300"
          >
            <FaGithub size={16} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
