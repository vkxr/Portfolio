import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiBriefcase, HiAcademicCap, HiBadgeCheck } from 'react-icons/hi';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    type: 'Internship',
    company: 'TuffTech.co',
    period: 'Jan 2025 — Jun 2025',
    description:
      'Completed a 6-month internship focused on full-stack development. Built and maintained production web applications using React, Node.js, and PostgreSQL. Collaborated with the engineering team on API design, database optimization, and deployment pipelines.',
    tech: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    current: false,
  },
  {
    role: 'Full Stack Developer',
    type: 'Freelance',
    company: 'Self-Employed',
    period: '2024 — Present',
    description:
      'Building custom web applications for clients. Designing and implementing full-stack solutions with modern frameworks, RESTful APIs, and cloud deployment.',
    tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    current: true,
  },
  {
    role: 'Open Source Contributor',
    type: 'Community',
    company: 'Various Projects',
    period: '2023 — Present',
    description:
      'Active contributor to open-source projects. Submitted pull requests, fixed bugs, improved documentation, and engaged with the developer community.',
    tech: ['JavaScript', 'TypeScript', 'Node.js', 'GitHub'],
    current: true,
  },
];

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    school: 'Parul University, Vadodara, Gujarat',
    period: 'Aug 2022 — May 2026',
  },
];

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/[0.01] to-transparent pointer-events-none" />

      <div className="w-full max-w-[1200px] mx-auto px-8 lg:px-12 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">04. Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
            Work & Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                className="relative flex gap-5 md:gap-7 group"
              >
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                      exp.current
                        ? 'bg-primary/10 border-primary/30 text-primary shadow-[0_0_12px_rgba(99,102,241,0.15)]'
                        : 'bg-bg-card border-border text-text-muted group-hover:border-primary/20 group-hover:text-primary'
                    }`}
                  >
                    <HiBriefcase className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 min-w-0">
                  <div className="p-5 md:p-6 rounded-xl border border-border bg-bg-card/40 hover:bg-bg-card/70 hover:border-border-hover transition-all duration-300 backdrop-blur-sm">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-base md:text-lg font-semibold leading-snug">{exp.role}</h3>
                        <p className="text-sm text-text-muted mt-0.5">
                          {exp.company}
                          <span className="mx-2 text-border">·</span>
                          <span className="text-xs font-mono text-primary/80">{exp.type}</span>
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-text-muted bg-bg/60 px-3 py-1 rounded-md border border-border whitespace-nowrap self-start">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[10px] font-mono text-text-muted/80 bg-bg/50 border border-border/60 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-6">Education</h3>
          {education.map((edu, i) => (
            <div
              key={i}
              className="flex items-start gap-5 md:gap-7"
            >
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center border border-border bg-bg-card text-text-muted">
                <HiAcademicCap className="w-5 h-5" />
              </div>
              <div className="p-5 md:p-6 flex-1 rounded-xl border border-border bg-bg-card/40">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <h4 className="text-base font-semibold">{edu.degree}</h4>
                    <p className="text-sm text-text-muted mt-0.5">{edu.school}</p>
                  </div>
                  <span className="text-[11px] font-mono text-text-muted bg-bg/60 px-3 py-1 rounded-md border border-border whitespace-nowrap self-start">
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10"
        >
          <h3 className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-6">Certifications</h3>
          <div className="flex items-start gap-5 md:gap-7">
            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center border border-secondary/30 bg-secondary/10 text-secondary">
              <HiBadgeCheck className="w-5 h-5" />
            </div>
            <div className="p-5 md:p-6 flex-1 rounded-xl border border-border bg-bg-card/40">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h4 className="text-base font-semibold">Web Development + DevOps Cohort</h4>
                  <p className="text-sm text-text-muted mt-0.5">100xDevs · Cohort 3</p>
                  <p className="text-xs text-text-muted/70 mt-1">
                    Comprehensive knowledge of web application development and system deployment.
                    <br />
                    <span className="text-text-muted/50">Issued by Harkirat Singh, Founder</span>
                  </p>
                </div>
                <span className="text-[11px] font-mono text-text-muted bg-bg/60 px-3 py-1 rounded-md border border-border whitespace-nowrap self-start">
                  Aug 2024
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
