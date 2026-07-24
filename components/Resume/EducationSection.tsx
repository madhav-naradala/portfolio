'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import type { ResumeData } from '@/data/resume';

interface EducationSectionProps {
  education: ResumeData['education'];
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  education,
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
        <GraduationCap className="h-7 w-7 text-accent" />

        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Education
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <motion.article
            key={item.id}
            className="rounded-lg border border-accent/20 bg-secondary/40 p-6"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <h3 className="text-xl font-semibold text-white">
              {item.degree}
            </h3>

            <p className="mt-1 text-gray-300">{item.field}</p>

            <p className="mt-3 font-medium text-accent-light">
              {item.institution}
            </p>

            <p className="mt-2 text-sm text-gray-300">
              Graduated: {item.graduationYear}
            </p>

            {item.gpa && (
              <p className="mt-2 text-sm text-gray-300">
                GPA: {item.gpa}
              </p>
            )}
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};
