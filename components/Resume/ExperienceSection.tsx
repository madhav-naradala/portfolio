'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import type { ResumeData } from '@/data/resume';
import { Badge } from './Badge';

interface ExperienceSectionProps {
  experiences: ResumeData['experience'];
}

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
          Experience that
          <span className="block text-white/30">creates impact.</span>
        </h2>

        <p className="apple-description">
          Building reliable, scalable applications across financial services,
          healthcare, banking, and enterprise environments.
        </p>
      </motion.div>

      <div className="grid gap-7 lg:grid-cols-2">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.id}
            className={`apple-card p-7 sm:p-10 ${
              index === 0 ? 'lg:col-span-2 lg:min-h-[390px] lg:p-14' : ''
            }`}
            variants={itemVariants}
            whileHover={{
              y: -6,
              transition: {
                duration: 0.25,
              },
            }}
          >
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="mb-3 text-sm font-medium text-blue-400">
                    {experience.company}
                  </p>

                  <h3
                    className={`font-semibold tracking-[-0.035em] text-white ${
                      index === 0
                        ? 'text-3xl sm:text-4xl lg:text-5xl'
                        : 'text-2xl sm:text-3xl'
                    }`}
                  >
                    {experience.position}
                  </h3>
                </div>

                <div className="flex shrink-0 items-center gap-2 text-sm text-white/40">
                  <Calendar className="h-4 w-4 text-blue-400" />
                  <span>{experience.duration}</span>
                </div>
              </div>

              {experience.description.length > 0 && (
                <ul
                  className={`mt-8 space-y-3 leading-7 text-white/55 ${
                    index === 0 ? 'max-w-4xl' : ''
                  }`}
                >
                  {experience.description.map((item, descriptionIndex) => (
                    <li
                      key={`${experience.id}-description-${descriptionIndex}`}
                      className="flex gap-3"
                    >
                      <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {experience.technologies.length > 0 && (
                <div className="mt-auto flex flex-wrap gap-2 pt-9">
                  {experience.technologies.map((technology) => (
                    <Badge
                      key={`${experience.id}-${technology}`}
                      text={technology}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};