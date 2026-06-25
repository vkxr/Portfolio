import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'NexusAI — AI-Native Multi-Tenant SaaS',
    description:
      'Production-ready B2B SaaS boilerplate combining multi-tenant workspaces, subscription billing, and token-based AI quotas. Supports Claude, GPT-4o, and Gemini via OpenRouter. Features Razorpay webhooks with retry logic, JWT token rotation with server-side revocation, and role-based access control (OWNER/ADMIN/MEMBER) — fully deployable as a starting point for any AI product.',
    tech: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'Razorpay', 'Docker', 'OpenRouter'],
    github: 'https://github.com/vkxr/ai-saas',
    demo: null,
    gradient: 'from-violet-500/20 to-purple-500/20',
    period: '2026',
    featured: true,
  },
  {
    title: 'Autonomous Multi-Agent Engineering System',
    description:
      'Self-directing agent platform that accepts a natural language goal, decomposes it into steps, runs specialized workers (file I/O, shell commands, Playwright scraping, code search via ripgrep), validates each result with a Critic LLM, and self-corrects on failure — all streamed live to the browser via SSE. Token budget per turn prevents runaway cost.',
    tech: ['Next.js 14', 'TypeScript', 'Fastify', 'PostgreSQL', 'OpenRouter', 'Playwright', 'SSE', 'Prisma'],
    github: 'https://github.com/vkxr/multi-agent',
    demo: 'https://multi-agent-swart-one.vercel.app/',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    period: '2026',
    featured: true,
  },
  {
    title: 'Agentic RAG Knowledge System',
    description:
      'Chat with your PDF documents using AI-powered hybrid retrieval. Combines dense vector search (pgvector) with keyword-based BM25 matching via reciprocal rank fusion — no separate vector DB required. Streams GPT-4o-mini responses with inline source citations and supports multi-document queries across simultaneously uploaded files.',
    tech: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'pgvector', 'OpenAI', 'Prisma', 'Tailwind CSS'],
    github: 'https://github.com/vkxr/rag-knowledge-system',
    demo: 'https://rag-knowledge-system-snowy.vercel.app/',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    period: 'Jun 2026',
    featured: true,
  },
  {
    title: 'ChatRoom — Real-Time Communication',
    description:
      'Minimalist room-based chat app with peer-to-peer WebRTC audio/video calling and screen sharing, built on a strict black-and-white design system. Incoming call modals, live typing indicators, in-chat call-event pills, and JWT-secured rooms — all without disrupting the chat flow. Signaling via Socket.IO.',
    tech: ['React 19', 'Node.js', 'TypeScript', 'WebRTC', 'Socket.IO', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/vkxr/chatroom',
    demo: 'https://chatroom-client-eight.vercel.app',
    gradient: 'from-indigo-500/20 to-blue-500/20',
    period: 'Jun 2026',
    featured: false,
  },
  {
    title: 'MusicVote — Collaborative Music Queue',
    description:
      'Real-time music queue where audiences vote on what plays next at parties, streams, or events. Redis as the single source of truth for all live session data with TTL-based auto-cleanup. Enforces one active vote per user, YouTube IFrame playback, and creator-controlled queue mode — Google OAuth via NextAuth.',
    tech: ['Next.js 15', 'TypeScript', 'Redis', 'PostgreSQL', 'NextAuth', 'YouTube API', 'Prisma'],
    github: 'https://github.com/vkxr/Music_Voting-',
    demo: 'https://music-voting-t73k.vercel.app/',
    gradient: 'from-pink-500/20 to-rose-500/20',
    period: 'Jun 2026',
    featured: false,
  },
  {
    title: 'URL Shortener',
    description:
      'Production-ready URL shortener with Zod schema validation, automatic 30-minute expiry, secure redirects, and a dark mode React UI. RESTful Express.js API with CORS and real-time copy-to-clipboard feedback.',
    tech: ['React 19', 'TypeScript', 'Node.js', 'Express.js', 'Vite', 'Zod'],
    github: 'https://github.com/vkxr/url-shortner',
    demo: 'https://url-shortner-329g.vercel.app/',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    period: 'Feb 2026',
    featured: false,
  },
  {
    title: 'BloggingSphere — Blogging Platform',
    description:
      'Full-featured blogging platform with CRUD operations, JWT authentication, user ownership validation, and a rich Markdown editor. RESTful API backed by PostgreSQL and Prisma, fully responsive UI built with React and Tailwind CSS.',
    tech: ['React', 'TypeScript', 'Vite', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    github: 'https://github.com/vkxr/Blogging-Website',
    demo: 'https://blogging-website-ashy.vercel.app',
    gradient: 'from-amber-500/20 to-orange-500/20',
    period: 'Jan 2025',
    featured: false,
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
                  <div className="flex flex-col items-end gap-2 flex-shrink-0 md:mt-1">
                    {project.featured && (
                      <span className="text-[9px] font-mono font-semibold text-primary/80 bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full tracking-widest uppercase">
                        Featured
                      </span>
                    )}
                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg border border-border text-text-muted hover:text-text hover:border-border-hover hover:bg-bg-card transition-all duration-300"
                        aria-label={`GitHub: ${project.title}`}
                      >
                        <FaGithub size={16} />
                      </a>
                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-lg border border-border text-text-muted hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                          aria-label={`Live Demo: ${project.title}`}
                        >
                          <HiExternalLink size={16} />
                        </a>
                      ) : (
                        <span
                          className="p-2.5 rounded-lg border border-border/40 text-text-muted/30 cursor-not-allowed"
                          title="No live demo"
                        >
                          <HiExternalLink size={16} />
                        </span>
                      )}
                    </div>
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
