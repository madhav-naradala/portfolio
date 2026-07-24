'use client';

import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import type { ResumeData } from '@/data/resume';
import { Badge } from './Badge';

interface SkillsSectionProps {
  skills: ResumeData['skills'];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 12,
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
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div
        className="mb-6 flex items-center gap-3"
        variants={itemVariants}
      >
        <Code2 className="h-7 w-7 text-accent" />

        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Skills
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <motion.article
            key={group.category}
            className="rounded-lg border border-accent/20 bg-secondary/40 p-6"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <h3 className="mb-4 text-lg font-semibold text-accent-light">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={`${group.category}-${skill}`} text={skill} />
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};
