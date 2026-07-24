'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
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
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 14,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.section
      className="mb-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        className="mb-6 flex items-center gap-3"
        variants={itemVariants}
      >
        <Briefcase className="h-7 w-7 text-accent" />

        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Experience
        </h2>
      </motion.div>

      <div className="space-y-6">
        {experiences.map((experience) => (
          <motion.article
            key={experience.id}
            className="rounded-lg border border-accent/20 bg-secondary/40 p-6"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {experience.position}
                </h3>

                <p className="mt-1 font-medium text-accent-light">
                  {experience.company}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Calendar className="h-4 w-4 text-accent" />
                <span>{experience.duration}</span>
              </div>
            </div>

            {experience.description.length > 0 && (
              <ul className="mt-5 space-y-2 text-gray-300">
                {experience.description.map((item, index) => (
                  <li
                    key={`${experience.id}-description-${index}`}
                    className="flex gap-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {experience.technologies.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <Badge
                    key={`${experience.id}-${technology}`}
                    text={technology}
                  />
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};
