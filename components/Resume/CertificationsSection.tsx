'use client';

import { motion } from 'framer-motion';
import { Certification } from '@/data/resume';
import { Award } from 'lucide-react';

interface CertificationsSectionProps {
  certifications: Certification[];
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  if (certifications.length === 0) return null;

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
        Certifications
      </motion.h2>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            className="bg-secondary/50 backdrop-blur border border-accent/10 rounded-lg p-6 hover:border-accent/30 transition-all duration-300 flex items-start gap-4"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <Award className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-accent-light mb-1">{cert.title}</h3>
              <p className="text-gray-300 text-sm mb-2">{cert.issuer}</p>
              <p className="text-gray-400 text-xs">Issued: {cert.issueDate}</p>
              {cert.expiryDate && (
                <p className="text-gray-400 text-xs">Expires: {cert.expiryDate}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
