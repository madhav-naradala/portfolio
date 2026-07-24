'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/data/resume';
import { Badge } from '@/components/Resume/Badge';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
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
        Experience
      </motion.h2>

      <motion.div className="space-y-8" variants={containerVariants}>
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="bg-secondary/50 backdrop-blur border border-accent/10 rounded-lg p-6 hover:border-accent/30 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.5)' }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-accent-light mb-1">{exp.position}</h3>
                <p className="text-lg text-gray-300 font-medium">{exp.company}</p>
              </div>
              <motion.div
                className="text-gray-400 text-sm mt-2 md:mt-0 whitespace-nowrap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                {exp.startDate} - {exp.endDate}
              </motion.div>
            </div>

            <ul className="space-y-2 mb-4 ml-4">
              {exp.description.map((desc, idx) => (
                <motion.li
                  key={idx}
                  className="text-gray-300 flex items-start gap-3 text-sm md:text-base"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <span className="text-accent mt-1.5 flex-shrink-0">▸</span>
                  <span>{desc}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <Badge key={tech} text={tech} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
