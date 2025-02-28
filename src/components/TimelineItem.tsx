
import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft?: boolean;
  delay?: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, 
  title, 
  description, 
  isLeft = false,
  delay = 0 
}) => {
  const contentClass = isLeft 
    ? "col-start-1 md:col-start-1 md:col-end-6 md:text-right" 
    : "col-start-1 md:col-start-7 md:col-end-13";
  
  const dotClass = isLeft 
    ? "left-0 md:left-auto md:right-0 md:translate-x-1/2" 
    : "left-0 md:translate-x-[-50%]";
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 relative mb-12 md:mb-24">
      {/* Timeline Line */}
      <div className="absolute h-full w-px bg-border left-0 md:left-1/2 transform md:translate-x-[-50%] top-0">
        <div className={`absolute w-4 h-4 rounded-full bg-primary top-0 ${dotClass}`}></div>
      </div>
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: delay * 0.1 }}
        viewport={{ once: true }}
        className={`${contentClass} relative pl-8 md:pl-0 md:pr-12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}
      >
        <span className="text-sm font-medium text-primary mb-2 block">{year}</span>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </motion.div>
    </div>
  );
};

export default TimelineItem;
