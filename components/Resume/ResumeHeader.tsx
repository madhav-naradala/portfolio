'use client';
import {
    motion
} from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    ExternalLink
} from 'lucide-react';
import {
    ResumeData
} from '@/data/resume';
interface ResumeHeaderProps {
    personal: ResumeData['personal'];
}
export const ResumeHeader: React.FC < ResumeHeaderProps > = ({
    personal
}) => {
    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 10
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4
            },
        },
    };
    return ( < motion.div className = "mb-12 bg-gradient-to-r from-primary via-secondary to-primary rounded-lg p-8 border border-accent/20"
        variants = {
            containerVariants
        }
        initial = "hidden"
        animate = "visible" > < motion.h1 className = "text-4xl md:text-5xl font-bold mb-2 text-white"
        variants = {
            itemVariants
        } > {
            personal.name
        } < /motion.h1> <motion.p className="text-accent-light text-lg mb-6 leading-relaxed" variants={itemVariants}> {personal.summary} </motion.p > < motion.div className = "flex flex-wrap gap-6"
        variants = {
            containerVariants
        } > < motion.a href = {
            mailto: $ {
                personal.email
            }
        }
        className = "flex items-center gap-2 text-gray-300 hover:text-accent-light transition-colors group"
        variants = {
            itemVariants
        }
        whileHover = {
            {
                x: 5
            }
        } > < Mail className = "w-5 h-5 group-hover:text-accent transition-colors" / > < span className = "truncate" > {
            personal.email
        } < /span> </motion.a > < motion.div className = "flex items-center gap-2 text-gray-300"
        variants = {
            itemVariants
        } > < Phone className = "w-5 h-5 text-accent" / > < span > {
            personal.phone
        } < /span> </motion.div > < motion.div className = "flex items-center gap-2 text-gray-300"
        variants = {
            itemVariants
        } > < MapPin className = "w-5 h-5 text-accent" / > < span > {
            personal.location
        } < /span> </motion.div > < /motion.div> </motion.div > );
};
