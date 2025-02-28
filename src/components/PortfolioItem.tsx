
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface PortfolioItemProps {
  title: string;
  category: string;
  imageUrl: string;
  projectUrl: string;
  delay?: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ 
  title, 
  category, 
  imageUrl, 
  projectUrl,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="group relative rounded-2xl overflow-hidden aspect-square shadow-md"
    >
      {/* Image */}
      <div className="absolute inset-0 bg-black">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-all duration-700 
            group-hover:scale-110 group-hover:opacity-70"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 
        group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-white"
        >
          <span className="text-sm font-medium tracking-wide uppercase opacity-80">
            {category}
          </span>
          <h3 className="text-xl md:text-2xl font-semibold mt-1">{title}</h3>
          
          {/* Link Button */}
          <a 
            href={projectUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-white/90 hover:text-white font-medium group"
            onClick={(e) => {
              e.preventDefault();
              window.open(projectUrl, '_blank');
            }}
          >
            <span className="transition-all duration-300 group-hover:mr-2">View Project</span>
            <ExternalLink className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
