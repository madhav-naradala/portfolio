'use client';

import { motion } from 'framer-motion';
import { SkillCategory } from '@/data/resume';
import { Badge } from '@/components/Resume/Badge';

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
        Skills
      </motion.h2>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
        {skills.map((skillGroup) => (
          <motion.div
            key={skillGroup.category}
            className="bg-secondary/50 backdrop-blur border border-accent/10 rounded-lg p-6 hover:border-accent/30 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <h3 className="text-xl font-bold text-accent-light mb-4 pb-3 border-b border-accent/20">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.skills.map((skill) => (
                <Badge key={skill} text={skill} variant="secondary" />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
