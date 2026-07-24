'use client';

import { motion } from 'framer-motion';
import { resumeData } from '@/data/resume';
import {
  ResumeHeader,
  ExperienceSection,
  SkillsSection,
  EducationSection,
  CertificationsSection,
} from '@/components/Resume';

const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function Home() {
  return (
    <motion.main
      className="min-h-screen bg-gradient-to-br from-primary via-primary to-secondary"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
        variants={containerVariants}
      >
        <ResumeHeader personal={resumeData.personal} />
        <ExperienceSection experiences={resumeData.experience} />
        <SkillsSection skills={resumeData.skills} />
        <EducationSection education={resumeData.education} />
        <CertificationsSection certifications={resumeData.certifications} />

        {/* Footer */}
        <motion.div
          className="mt-16 pt-8 border-t border-accent/10 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm">
            © {new Date().getFullYear()} Madhav Naradala. Built with React, Next.js, and Framer Motion.
          </p>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
