
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioItem from '@/components/PortfolioItem';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1523742346641-b9a4d2da09c7',
      description: 'A comprehensive e-commerce platform with advanced product filtering, user authentication, and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      challenge: 'Creating a seamless user experience with fast loading times and complex product filtering.',
      solution: 'We implemented a custom caching strategy and optimized database queries to ensure quick response times even with thousands of products.',
      link: '#'
    },
    {
      title: 'Healthcare Management System',
      category: 'software',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
      description: 'A secure healthcare management system for clinics to manage patient records, appointments, and billing.',
      technologies: ['React', 'Django', 'PostgreSQL', 'AWS'],
      challenge: 'Ensuring data security while maintaining an intuitive user interface for healthcare professionals.',
      solution: 'We implemented industry-standard encryption and role-based access control while working closely with healthcare professionals to design an intuitive workflow.',
      link: '#'
    },
    {
      title: 'Real Estate Marketplace',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
      description: 'A real estate marketplace connecting buyers, sellers, and agents with advanced property search and virtual tours.',
      technologies: ['Vue.js', 'Firebase', 'Google Maps API'],
      challenge: 'Creating an engaging, interactive experience for property browsing with efficient data management.',
      solution: 'We leveraged modern web technologies to create immersive virtual tours and implemented real-time updates for property listings.',
      link: '#'
    },
    {
      title: 'Financial Dashboard',
      category: 'webapp',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      description: 'A comprehensive financial dashboard for investors to track investments, analyze performance, and generate reports.',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      challenge: 'Displaying complex financial data in an accessible and meaningful way for users.',
      solution: 'We created customizable visualizations and automated reporting tools that transformed raw data into actionable insights.',
      link: '#'
    },
    {
      title: 'Smart Home Application',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1558002038-1055e2de7dfc',
      description: 'A mobile application for controlling and monitoring smart home devices with voice commands and automation.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'WebSockets'],
      challenge: 'Creating a responsive interface that could communicate with various IoT devices seamlessly.',
      solution: 'We developed a unified communication protocol and implemented real-time updates to ensure immediate feedback for user actions.',
      link: '#'
    },
    {
      title: 'Supply Chain Management',
      category: 'software',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
      description: 'A blockchain-based supply chain management system for tracking product origin and authenticity.',
      technologies: ['React', 'Solidity', 'Ethereum', 'Node.js'],
      challenge: 'Implementing a secure and transparent tracking system accessible to all stakeholders.',
      solution: 'We leveraged blockchain technology to create an immutable record of product journey while maintaining an intuitive interface for non-technical users.',
      link: '#'
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-secondary">
        <div className="max-container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-accent text-sm font-medium mb-4">
              Our Work
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Featured Projects
            </h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Explore our portfolio of successful projects delivered for clients across various industries.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio Filter */}
      <section className="py-8 border-b border-border">
        <div className="max-container px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {['all', 'web', 'mobile', 'software', 'webapp'].map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="max-container px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  layout
                  onClick={() => setSelectedProject(index)}
                >
                  <PortfolioItem
                    title={project.title}
                    category={project.category}
                    image={project.image}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="relative">
                {/* Project Image */}
                <div className="h-64 md:h-80 relative">
                  <img 
                    src={filteredProjects[selectedProject].image} 
                    alt={filteredProjects[selectedProject].title} 
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex flex-col justify-end p-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/80 text-primary-foreground text-xs font-medium mb-2 backdrop-blur-sm">
                      {filteredProjects[selectedProject].category.charAt(0).toUpperCase() + filteredProjects[selectedProject].category.slice(1)}
                    </div>
                    <h2 className="text-white text-2xl md:text-3xl font-semibold">
                      {filteredProjects[selectedProject].title}
                    </h2>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-8 space-y-6">
                  <p className="text-muted-foreground text-lg">
                    {filteredProjects[selectedProject].description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">The Challenge</h3>
                      <p className="text-muted-foreground">
                        {filteredProjects[selectedProject].challenge}
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Our Solution</h3>
                      <p className="text-muted-foreground">
                        {filteredProjects[selectedProject].solution}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {filteredProjects[selectedProject].technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <a 
                      href={filteredProjects[selectedProject].link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="button-primary inline-flex items-center gap-2"
                    >
                      <span>Visit Project</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="max-container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '120+', label: 'Completed Projects' },
              { number: '15+', label: 'Industries Served' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '10+', label: 'Years of Experience' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="text-4xl font-bold">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="max-container px-4">
          <div className="bg-card rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-border">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Have a project in mind?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our expertise can help you achieve your business goals.
              </p>
              <a 
                href="/contact" 
                className="button-primary inline-block"
              >
                Start a Project
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
