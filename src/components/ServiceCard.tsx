
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-card rounded-xl p-6 border border-border shadow-sm overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <div className="relative mb-4 text-primary">
        <motion.div
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="relative space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        
        {/* Link */}
        <Link to="/contact" className="mt-4 inline-flex items-center text-primary font-medium group">
          <span className="transition-all duration-300 group-hover:mr-2">Learn More</span>
          <ChevronRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
