import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiCode, HiServer, HiDatabase, HiLightningBolt, HiChartBar, HiShieldCheck,
} from 'react-icons/hi';

const skills = [
  {
    icon: <HiCode className="w-5 h-5" />,
    title: 'Full Stack Development',
    desc: 'End-to-end application development from interactive frontends to robust backend services.',
    color: '#6366F1',
  },
  {
    icon: <HiServer className="w-5 h-5" />,
    title: 'API Development',
    desc: 'RESTful API design with proper authentication, validation, and documentation.',
    color: '#8B5CF6',
  },
  {
    icon: <HiLightningBolt className="w-5 h-5" />,
    title: 'Real-Time Communication',
    desc: 'WebRTC, Socket.IO, and WebSocket-based real-time features for modern applications.',
    color: '#22C55E',
  },
  {
    icon: <HiDatabase className="w-5 h-5" />,
    title: 'Database Design',
    desc: 'PostgreSQL, MongoDB, and Prisma ORM — schema design optimized for performance.',
    color: '#06B6D4',
  },
  {
    icon: <HiChartBar className="w-5 h-5" />,
    title: 'Performance Optimization',
    desc: 'Lazy loading, code splitting, caching strategies, and CDN deployment.',
    color: '#F59E0B',
  },
  {
    icon: <HiShieldCheck className="w-5 h-5" />,
    title: 'Cloud & DevOps',
    desc: 'AWS, Cloudflare, Vercel, Docker — CI/CD pipelines and serverless deployment.',
    color: '#EF4444',
  },
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="relative py-28 lg:py-36">
      <div className="w-full max-w-[1200px] mx-auto px-8 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">05. Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              whileHover={{ y: -3 }}
              className="group relative p-5 rounded-xl border border-border bg-bg-card/40 hover:bg-bg-card/70 hover:border-border-hover transition-all duration-300 overflow-hidden backdrop-blur-sm"
            >
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3 transition-all duration-300"
                style={{
                  backgroundColor: `${skill.color}12`,
                  color: skill.color,
                }}
              >
                {skill.icon}
              </div>
              <h3 className="text-sm font-semibold mb-1.5 group-hover:text-primary transition-colors">
                {skill.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {skill.desc}
              </p>

              {/* Hover glow */}
              <div
                className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-[50px] opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: skill.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
