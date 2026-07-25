'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';
import type { ResumeData } from '@/data/resume';
import { Badge } from './Badge';

interface ExperienceSectionProps {
  experiences: ResumeData['experience'];
}

const accentStyles = {
  green: {
    line: 'bg-emerald-400',
    text: 'text-emerald-400',
    border: 'group-hover:border-emerald-400/30',
    glow: 'group-hover:shadow-[0_30px_100px_rgba(52,211,153,0.12)]',
    background:
      'from-emerald-500/[0.12] via-emerald-500/[0.03] to-transparent',
  },
  red: {
    line: 'bg-red-400',
    text: 'text-red-400',
    border: 'group-hover:border-red-400/30',
    glow: 'group-hover:shadow-[0_30px_100px_rgba(248,113,113,0.12)]',
    background: 'from-red-500/[0.12] via-red-500/[0.03] to-transparent',
  },
  blue: {
    line: 'bg-blue-400',
    text: 'text-blue-400',
    border: 'group-hover:border-blue-400/30',
    glow: 'group-hover:shadow-[0_30px_100px_rgba(96,165,250,0.12)]',
    background: 'from-blue-500/[0.12] via-blue-500/[0.03] to-transparent',
  },
  indigo: {
    line: 'bg-indigo-400',
    text: 'text-indigo-400',
    border: 'group-hover:border-indigo-400/30',
    glow: 'group-hover:shadow-[0_30px_100px_rgba(129,140,248,0.12)]',
    background:
      'from-indigo-500/[0.12] via-indigo-500/[0.03] to-transparent',
  },
  cyan: {
    line: 'bg-cyan-400',
    text: 'text-cyan-400',
    border: 'group-hover:border-cyan-400/30',
    glow: 'group-hover:shadow-[0_30px_100px_rgba(34,211,238,0.12)]',
    background: 'from-cyan-500/[0.12] via-cyan-500/[0.03] to-transparent',
  },
  orange: {
    line: 'bg-orange-400',
    text: 'text-orange-400',
    border: 'group-hover:border-orange-400/30',
    glow: 'group-hover:shadow-[0_30px_100px_rgba(251,146,60,0.12)]',
    background:
      'from-orange-500/[0.12] via-orange-500/[0.03] to-transparent',
  },
};

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
}) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.section
      id="experience"
      className="apple-section scroll-mt-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      <motion.div className="mb-16" variants={itemVariants}>
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-blue-400">
          Career
        </p>

        <h2 className="apple-heading">
          Experience across
          <span className="block text-white/30">
            leading organizations.
          </span>
        </h2>

        <p className="apple-description">
          Building scalable applications across financial services,
          healthcare, banking, payments, and enterprise technology.
        </p>
      </motion.div>

      <div className="grid gap-7 lg:grid-cols-2">
        {experiences.map((experience, index) => {
          const accent = accentStyles[experience.accent];

          return (
            <motion.article
              key={experience.id}
              tabIndex={0}
              className={`apple-card group cursor-default outline-none transition-all duration-500 ${accent.border} ${accent.glow} ${
                index === 0
                  ? 'min-h-[430px] p-7 sm:p-10 lg:col-span-2 lg:p-14'
                  : 'min-h-[370px] p-7 sm:p-10'
              }`}
              variants={itemVariants}
              whileHover={{
                y: -7,
                transition: {
                  duration: 0.25,
                },
              }}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.background} opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100`}
              />

              <div
                className={`absolute left-0 top-0 h-1 w-0 ${accent.line} transition-all duration-500 group-hover:w-full group-focus-visible:w-full`}
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3
                      className={`font-semibold tracking-[-0.045em] text-white ${
                        index === 0
                          ? 'text-4xl sm:text-5xl lg:text-6xl'
                          : 'text-3xl sm:text-4xl'
                      }`}
                    >
                      {experience.company}
                    </h3>

                    <p
                      className={`mt-3 text-base font-medium sm:text-lg ${accent.text}`}
                    >
                      {experience.position}
                    </p>
                  </div>

                  <ArrowUpRight
                    className={`h-6 w-6 shrink-0 text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 ${accent.text}`}
                  />
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm text-white/40">
                  <Calendar className={`h-4 w-4 ${accent.text}`} />
                  <span>{experience.duration}</span>
                </div>

                <div className="mt-8">
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                    Project focus
                  </p>

                  <p
                    className={`leading-7 text-white/60 ${
                      index === 0 ? 'max-w-4xl text-lg' : ''
                    }`}
                  >
                    {experience.overview}
                  </p>
                </div>

                <div className="grid transition-all duration-500 ease-out md:grid-rows-[0fr] md:opacity-0 md:group-hover:mt-8 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100 md:group-focus-visible:mt-8 md:group-focus-visible:grid-rows-[1fr] md:group-focus-visible:opacity-100">
                  <div className="overflow-hidden">
                    <div className="border-t border-white/10 pt-7">
                      <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                        Key contributions
                      </p>

                      <ul className="space-y-3 text-sm leading-6 text-white/55">
                        {experience.description
                          .slice(0, 4)
                          .map((description, descriptionIndex) => (
                            <li
                              key={`${experience.id}-${descriptionIndex}`}
                              className="flex gap-3"
                            >
                              <span
                                className={`mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full ${accent.line}`}
                              />

                              <span>{description}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-9">
                  {experience.technologies.map((technology) => (
                    <Badge
                      key={`${experience.id}-${technology}`}
                      text={technology}
                    />
                  ))}
                </div>

                <p className="mt-6 hidden text-xs text-white/25 md:block">
                  Hover to view key contributions
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
};