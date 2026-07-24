'use client';

import { motion } from 'framer-motion';
import {
  ResumeHeader,
  ExperienceSection,
  SkillsSection,
  EducationSection,
} from '@/components/Resume';
import { resumeData } from '@/data/resume';

export default function HomePage() {
  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.main
      className="relative min-h-screen overflow-hidden bg-primary text-white"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl animate-pulse-soft" />

        <div
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl animate-pulse-soft"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20 lg:px-8"
        variants={containerVariants}
      >
        <ResumeHeader personal={resumeData.personal} />

        <ExperienceSection experiences={resumeData.experience} />

        <SkillsSection skills={resumeData.skills} />

        <EducationSection education={resumeData.education} />

        <motion.footer
          className="mt-16 border-t border-accent/10 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>
            © {new Date().getFullYear()} {resumeData.personal.name}. All rights
            reserved.
          </p>
        </motion.footer>
      </motion.div>
    </motion.main>
  );
}
