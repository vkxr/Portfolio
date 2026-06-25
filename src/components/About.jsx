import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCode, HiLightningBolt, HiCube } from 'react-icons/hi';

const highlights = [
  {
    icon: <HiCode className="w-5 h-5" />,
    title: 'Clean Code',
    desc: 'Writing maintainable, well-structured code following industry best practices.',
  },
  {
    icon: <HiLightningBolt className="w-5 h-5" />,
    title: 'Performance',
    desc: 'Optimized applications with blazing-fast load times and smooth UX.',
  },
  {
    icon: <HiCube className="w-5 h-5" />,
    title: 'Scalable',
    desc: 'Architecture designed to grow with your product and user base.',
  },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="w-full max-w-[1200px] mx-auto px-8 lg:px-12" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">01. About</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-sm text-text-muted leading-relaxed">
              I'm a <span className="text-text font-medium">Full Stack &amp; AI Engineer</span> with 1+ year shipping SaaS platforms, payment systems, and real-time features on the <span className="text-text font-medium">MERN stack and TypeScript</span>. I built an autonomous multi-tool AI coding agent from scratch — extending it into a multi-agent RAG system with hybrid retrieval.
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              Focused on roles where I own features end-to-end and <span className="text-text font-medium">AI is the core of the product</span>. Currently at Veyber Services building Stripe billing pipelines and OpenAI-powered automation tools.
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              Pursuing B.Tech in Computer Science at Parul University, Vadodara (May 2026). Open to remote roles at startups where AI is central to what they build.
            </p>

            {/* Code block */}
            <div className="mt-4 p-4 bg-bg-card/60 rounded-xl border border-border font-mono text-xs backdrop-blur-sm">
              <div className="flex items-center gap-1.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <code className="text-text-muted">
                <span className="text-primary">const</span>{' '}
                <span className="text-text">developer</span> = {'{'}<br />
                &nbsp;&nbsp;name: <span className="text-secondary">&quot;Vivek Kumar&quot;</span>,<br />
                &nbsp;&nbsp;role: <span className="text-secondary">&quot;Full Stack + AI Engineer&quot;</span>,<br />
                &nbsp;&nbsp;stack: <span className="text-secondary">&quot;Next.js · Node.js · TypeScript&quot;</span>,<br />
                &nbsp;&nbsp;openTo: <span className="text-secondary">&quot;Remote startup roles&quot;</span>,<br />
                &nbsp;&nbsp;coffee: <span className="text-primary">true</span><br />
                {'}'};
              </code>
            </div>
          </motion.div>

          {/* Highlights + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-3"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className="group p-4 rounded-xl border border-border bg-bg-card/40 hover:bg-bg-card/70 hover:border-border-hover transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-0.5">{item.title}</h3>
                    <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { value: '15+', label: 'Projects' },
                { value: '1+', label: 'Years Exp.' },
                { value: '20+', label: 'Technologies' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 rounded-xl border border-border bg-bg-card/30 backdrop-blur-sm"
                >
                  <div className="text-xl font-bold text-primary">{stat.value}</div>
                  <div className="text-[10px] text-text-muted mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
