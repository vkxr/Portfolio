import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';

export default function GitHubActivity() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const username = 'vkxr';

  return (
    <section className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="w-full max-w-[1200px] mx-auto px-8 lg:px-12 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">06. GitHub</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
            GitHub Activity
          </h2>
          <p className="text-text-muted mt-3 max-w-lg text-sm">
            My open-source contributions and coding activity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-5 rounded-2xl border border-border bg-bg-card/40 overflow-hidden backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-5">
              <FaGithub size={22} className="text-text" />
              <div>
                <h3 className="font-semibold text-sm">@{username}</h3>
                <p className="text-[11px] text-text-muted">GitHub Profile</p>
              </div>
            </div>

            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&title_color=6366F1&icon_color=22C55E&text_color=9CA3AF&bg_color=00000000&hide_border=true&count_private=true`}
              alt="GitHub Stats"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </motion.div>

          {/* Languages card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-5 rounded-2xl border border-border bg-bg-card/40 overflow-hidden backdrop-blur-sm"
          >
            <h3 className="font-semibold text-sm mb-5">Most Used Languages</h3>

            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&title_color=6366F1&text_color=9CA3AF&bg_color=00000000&hide_border=true&langs_count=8`}
              alt="Top Languages"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-5 p-5 rounded-2xl border border-border bg-bg-card/40 overflow-hidden backdrop-blur-sm"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-sm">Contribution Graph</h3>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-text-muted hover:text-primary transition-colors"
            >
              View on GitHub
              <HiExternalLink size={14} />
            </a>
          </div>

          <img
            src={`https://ghchart.rshah.org/6366F1/${username}`}
            alt="GitHub Contribution Chart"
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
