'use client';

import { motion } from 'framer-motion';
import { Education } from '@/data/resume';
import { CheckCircle } from 'lucide-react';

interface EducationSectionProps {
  education: Education[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="mb-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3" variants={itemVariants}>
        <span className="w-1 h-8 bg-accent rounded"></span>
        Education
      </motion.h2>

      <motion.div className="space-y-6" variants={containerVariants}>
        {education.map((edu) => (
          <motion.div
            key={edu.id}
            className="bg-secondary/50 backdrop-blur border border-accent/10 rounded-lg p-6 hover:border-accent/30 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-accent-light mb-1">{edu.degree}</h3>
                <p className="text-lg text-gray-300 font-medium">{edu.field}</p>
                <p className="text-gray-400 text-sm mt-1">{edu.institution}</p>
              </div>
              <motion.div
                className="text-gray-400 text-sm mt-2 md:mt-0 whitespace-nowrap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                Graduated: {edu.graduationYear}
              </motion.div>
            </div>

            {edu.achievements && edu.achievements.length > 0 && (
              <div className="mt-4 space-y-2">
                {edu.achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2 text-gray-300 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    {achievement}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
