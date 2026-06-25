import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiHtml5, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiPrisma,
  SiTailwindcss, SiCloudflare, SiGit, SiDocker,
  SiGithub, SiVercel, SiPostman, SiFigma, SiRedux, SiSocketdotio,
  SiRedis, SiOpenai, SiStripe, SiPython, SiFastapi,
  SiJest, SiGithubactions,
} from 'react-icons/si';
import { FaCss3Alt, FaAws } from 'react-icons/fa';
import { MdOutlineVideocam, MdBugReport } from 'react-icons/md';
import { HiSparkles } from 'react-icons/hi';

const categories = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5',       icon: <SiHtml5 />,       color: '#E34F26' },
      { name: 'CSS3',        icon: <FaCss3Alt />,      color: '#1572B6' },
      { name: 'JavaScript',  icon: <SiJavascript />,   color: '#F7DF1E' },
      { name: 'TypeScript',  icon: <SiTypescript />,   color: '#3178C6' },
      { name: 'React.js',    icon: <SiReact />,        color: '#61DAFB' },
      { name: 'Next.js',     icon: <SiNextdotjs />,    color: '#ffffff' },
      { name: 'Redux',       icon: <SiRedux />,        color: '#764ABC' },
      { name: 'Tailwind CSS',icon: <SiTailwindcss />,  color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Python',      icon: <SiPython />,       color: '#3776AB' },
      { name: 'FastAPI',     icon: <SiFastapi />,      color: '#009688' },
      { name: 'Node.js',     icon: <SiNodedotjs />,    color: '#339933' },
      { name: 'Express.js',  icon: <SiExpress />,      color: '#ffffff' },
      { name: 'Socket.IO',   icon: <SiSocketdotio />,  color: '#ffffff' },
      { name: 'Prisma ORM',  icon: <SiPrisma />,       color: '#2D3748' },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'PostgreSQL',  icon: <SiPostgresql />,   color: '#4169E1' },
      { name: 'pgvector',    icon: <SiPostgresql />,   color: '#7C3AED' },
      { name: 'MongoDB',     icon: <SiMongodb />,      color: '#47A248' },
      { name: 'Redis',       icon: <SiRedis />,        color: '#DC382D' },
    ],
  },
  {
    title: 'AI / ML',
    items: [
      { name: 'OpenAI API',   icon: <SiOpenai />,      color: '#ffffff' },
      { name: 'LangChain',    icon: <HiSparkles />,    color: '#1C7DCA' },
      { name: 'RAG',          icon: <HiSparkles />,    color: '#8B5CF6' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    items: [
      { name: 'AWS',             icon: <FaAws />,             color: '#FF9900' },
      { name: 'Docker',          icon: <SiDocker />,          color: '#2496ED' },
      { name: 'GitHub Actions',  icon: <SiGithubactions />,   color: '#2088FF' },
      { name: 'Vercel',          icon: <SiVercel />,          color: '#ffffff' },
      { name: 'Cloudflare',      icon: <SiCloudflare />,      color: '#F38020' },
    ],
  },
  {
    title: 'Testing',
    items: [
      { name: 'Jest',        icon: <SiJest />,            color: '#C21325' },
      { name: 'Playwright',  icon: <MdBugReport />,      color: '#2EAD33' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git',      icon: <SiGit />,      color: '#F05032' },
      { name: 'GitHub',   icon: <SiGithub />,   color: '#ffffff' },
      { name: 'Stripe',   icon: <SiStripe />,   color: '#635BFF' },
      { name: 'WebRTC',   icon: <MdOutlineVideocam />, color: '#6B7280' },
      { name: 'Postman',  icon: <SiPostman />,  color: '#FF6C37' },
      { name: 'Figma',    icon: <SiFigma />,    color: '#F24E1E' },
    ],
  },
];

export default function TechStack() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="techstack" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="w-full max-w-[1200px] mx-auto px-8 lg:px-12 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">02. Tech Stack</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
            Technologies I Work With
          </h2>
          <p className="text-text-muted mt-3 max-w-lg text-sm">
            A curated set of modern technologies I use to build high-quality web applications.
          </p>
        </motion.div>

        <div className="space-y-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + ci * 0.08 }}
            >
              <h3 className="text-[11px] font-mono text-text-muted mb-3 tracking-widest uppercase">
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
                {cat.items.map((item, ii) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.15 + ci * 0.08 + ii * 0.03 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="group relative flex items-center gap-2.5 p-3 rounded-xl border border-border bg-bg-card/40 hover:bg-bg-card/70 hover:border-border-hover transition-all duration-300 cursor-default backdrop-blur-sm"
                  >
                    <span
                      className="text-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                      style={{ color: item.color }}
                    >
                      {item.icon}
                    </span>
                    <span className="text-xs font-medium text-text-muted group-hover:text-text transition-colors truncate">
                      {item.name}
                    </span>
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${item.color}08, transparent 70%)`,
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
