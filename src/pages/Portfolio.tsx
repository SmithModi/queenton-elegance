
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronRight, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PortfolioItemProps {
  id: number;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
  year: string;
}

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedItem, setSelectedItem] = useState<PortfolioItemProps | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const portfolioItems: PortfolioItemProps[] = [
    {
      id: 1,
      title: 'NexusCommerce Platform',
      category: 'Web Development',
      description: 'A comprehensive e-commerce solution for a global retail brand, featuring personalized shopping experiences and advanced inventory management.',
      challenge: 'The client needed to unify their online and offline retail channels while handling complex international inventory and payment systems.',
      solution: 'We developed a custom e-commerce platform with real-time inventory synchronization, multi-currency support, and an AI-powered recommendation engine.',
      results: [
        'Increased conversion rate by 34%',
        'Reduced cart abandonment by 27%',
        'Expanded market reach to 15 new countries'
      ],
      technologies: ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'Redis', 'AWS'],
      imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      projectUrl: '#',
      year: '2023'
    },
    {
      id: 2,
      title: 'FinVision Dashboard',
      category: 'Web Application',
      description: 'An interactive financial analytics dashboard that visualizes complex data for investment professionals and financial analysts.',
      challenge: 'The client required a high-performance solution for processing and visualizing massive financial datasets with minimal latency.',
      solution: 'We created a WebGL-powered data visualization platform with WebSocket connections for real-time updates and sophisticated filtering capabilities.',
      results: [
        'Processing time reduced by 85%',
        'Analysis capabilities expanded by 300%',
        'Adopted by 5 major financial institutions'
      ],
      technologies: ['TypeScript', 'WebGL', 'D3.js', 'WebSockets', 'Python', 'TensorFlow'],
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      projectUrl: '#',
      year: '2022'
    },
    {
      id: 3,
      title: 'MedConnect',
      category: 'Mobile Development',
      description: 'A secure telemedicine platform connecting patients with healthcare providers through video consultations and secure messaging.',
      challenge: 'Creating a HIPAA-compliant mobile application that works reliably across devices while handling sensitive medical information.',
      solution: 'We developed a cross-platform solution with end-to-end encryption, secure document sharing, and integration with electronic health record systems.',
      results: [
        'Connected 10,000+ patients with specialists',
        'Reduced appointment waiting times by 64%',
        'Achieved 99.99% uptime with zero security incidents'
      ],
      technologies: ['React Native', 'Firebase', 'WebRTC', 'Realm', 'Node.js'],
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      projectUrl: '#',
      year: '2023'
    },
    {
      id: 4,
      title: 'PropTech Portal',
      category: 'Web Development',
      description: 'A comprehensive real estate platform with virtual property tours, intelligent property matching, and transaction management.',
      challenge: 'Developing a scalable solution that could handle complex property data and multimedia content while maintaining fast load times.',
      solution: 'We built a Progressive Web App with 3D visualization capabilities, geospatial search, and an integrated transaction management system.',
      results: [
        'Increased property viewing engagement by 78%',
        'Reduced time-to-sell by 45%',
        'Expanded to 12 major metropolitan markets'
      ],
      technologies: ['Next.js', 'Three.js', 'PostgreSQL', 'Elasticsearch', 'AWS'],
      imageUrl: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
      projectUrl: '#',
      year: '2022'
    },
    {
      id: 5,
      title: 'LogisticsPro',
      category: 'ERP Solution',
      description: 'An integrated logistics management system for a multinational shipping company, handling fleet management, route optimization, and delivery tracking.',
      challenge: 'Modernizing legacy systems while maintaining operations and integrating with multiple third-party services and IoT devices.',
      solution: 'We developed a microservices-based ERP solution with real-time tracking, predictive maintenance, and machine learning for route optimization.',
      results: [
        'Reduced fuel costs by 17%',
        'Improved delivery time accuracy by 32%',
        'Decreased system maintenance costs by 60%'
      ],
      technologies: ['Java', 'Spring Boot', 'Kafka', 'MongoDB', 'TensorFlow', 'Kubernetes'],
      imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      projectUrl: '#',
      year: '2021'
    },
    {
      id: 6,
      title: 'ArtifactX',
      category: 'Blockchain',
      description: 'A decentralized marketplace for digital artists to mint, sell, and trade NFTs with integrated royalty tracking and creator verification.',
      challenge: 'Building a user-friendly platform that abstracts blockchain complexity while ensuring secure transactions and protecting digital rights.',
      solution: 'We created a Web3 application with smart contract integration, decentralized storage, and an intuitive creator dashboard.',
      results: [
        'Facilitated over $8M in artist transactions',
        'Onboarded 2,000+ verified creators',
        'Maintained 100% transaction security'
      ],
      technologies: ['Solidity', 'React', 'IPFS', 'Ethers.js', 'Node.js', 'AWS'],
      imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      projectUrl: '#',
      year: '2023'
    },
    {
      id: 7,
      title: 'SocialMetrics',
      category: 'Web Application',
      description: 'An advanced social media analytics platform that provides cross-platform insights, sentiment analysis, and campaign performance tracking.',
      challenge: 'Processing and analyzing massive volumes of social media data while providing actionable insights and maintaining API compliance.',
      solution: 'We built a scalable data processing pipeline with natural language processing capabilities and interactive visualization tools.',
      results: [
        'Increased marketing ROI by 42% for clients',
        'Reduced analysis time from days to minutes',
        'Integrated data from 14 social platforms'
      ],
      technologies: ['Python', 'React', 'TensorFlow', 'Elasticsearch', 'Redis', 'GCP'],
      imageUrl: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
      projectUrl: '#',
      year: '2022'
    },
    {
      id: 8,
      title: 'ReserveTable',
      category: 'Web Development',
      description: 'A restaurant reservation and management system with waitlist optimization, table management, and customer relationship features.',
      challenge: 'Creating an intuitive system that worked for both customers and restaurant staff while handling complex booking logic and integrations.',
      solution: 'We developed a multi-sided platform with real-time updates, integration with POS systems, and an AI-powered capacity optimization engine.',
      results: [
        'Reduced no-shows by 32%',
        'Increased table utilization by 24%',
        'Deployed to 200+ restaurants across 5 countries'
      ],
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io', 'Docker'],
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      projectUrl: '#',
      year: '2021'
    },
    {
      id: 9,
      title: 'EduSphere',
      category: 'Web Application',
      description: 'A comprehensive learning management system with adaptive learning paths, interactive content, and detailed analytics for educators.',
      challenge: 'Developing an accessible, engaging platform that supports diverse learning styles while providing powerful tools for instructors.',
      solution: 'We created an LMS with AI-driven content recommendations, interactive assessment tools, and detailed performance analytics.',
      results: [
        'Improved student engagement by 47%',
        'Increased completion rates by 38%',
        'Adopted by 25+ educational institutions'
      ],
      technologies: ['React', 'Django', 'PostgreSQL', 'WebSockets', 'AWS', 'Docker'],
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      projectUrl: '#',
      year: '2022'
    },
  ];

  const categories = ['All', 'Web Development', 'Mobile Development', 'Web Application', 'ERP Solution', 'Blockchain'];
  
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  const filterProjects = (category: string) => {
    setActiveCategory(category);
    
    if (category === 'All') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === category));
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5
      }
    })
  };

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
              Explore our portfolio of transformative digital solutions across multiple industries and technologies. Each project represents our commitment to excellence, innovation, and measurable client outcomes.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Filter Categories */}
      <section className="py-12 border-b border-border">
        <div className="max-container px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeCategory === category 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'bg-secondary hover:bg-secondary/70'}`}
                onClick={() => filterProjects(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: 20 }}
                  className="group relative rounded-2xl overflow-hidden aspect-square shadow-md cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Image */}
                  <div className="absolute inset-0 bg-black">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-all duration-700 
                        group-hover:scale-110 group-hover:opacity-70"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 
                    group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    
                    {/* Content */}
                    <div className="text-white">
                      <span className="text-sm font-medium tracking-wide uppercase opacity-80">
                        {item.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold mt-1">{item.title}</h3>
                      
                      {/* Link Button */}
                      <div className="mt-4 inline-flex items-center text-white/90 hover:text-white font-medium group/btn">
                        <span className="transition-all duration-300 group-hover/btn:mr-2">View Details</span>
                        <ChevronRight className="h-4 w-4 transition-all duration-300 group-hover/btn:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
      
      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors z-10"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
              
              {/* Project Image */}
              <div className="w-full h-80 relative">
                <img 
                  src={selectedItem.imageUrl} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover rounded-t-2xl" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-t-2xl"></div>
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-3">
                    {selectedItem.category}
                  </div>
                  <h2 className="text-3xl font-semibold text-white">{selectedItem.title}</h2>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-semibold mb-4">Overview</h3>
                    <p className="text-muted-foreground mb-6">{selectedItem.description}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-medium mb-2">The Challenge</h4>
                        <p className="text-muted-foreground">{selectedItem.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium mb-2">Our Solution</h4>
                        <p className="text-muted-foreground">{selectedItem.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium mb-2">Results</h4>
                        <ul className="space-y-2">
                          {selectedItem.results.map((result, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="mr-3 mt-1 text-primary">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12.25 3.5L5.25 10.5L1.75 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t md:border-t-0 md:border-l border-border md:pl-8 pt-6 md:pt-0">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-medium mb-3">Project Details</h4>
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm text-muted-foreground">Year</span>
                            <p>{selectedItem.year}</p>
                          </div>
                          <div>
                            <span className="text-sm text-muted-foreground">Category</span>
                            <p>{selectedItem.category}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedItem.technologies.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-secondary rounded-full text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <a 
                        href={selectedItem.projectUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="button-primary w-full flex items-center justify-center space-x-2"
                      >
                        <span>Visit Project</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      
                      <a 
                        href="/contact" 
                        className="button-outline w-full flex items-center justify-center space-x-2"
                      >
                        <span>Discuss Similar Project</span>
                        <ChevronRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Technologies Badge Section */}
      <section className="py-16 bg-secondary">
        <div className="max-container px-4">
          <h2 className="text-xl md:text-2xl font-medium text-center mb-10">
            Technologies Used Across Our Projects
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Node.js', 'Python', 'TypeScript', 'Angular', 
              'Vue.js', 'AWS', 'Azure', 'MongoDB', 'PostgreSQL', 
              'Docker', 'Flutter', 'Swift', 'Kotlin', 'Solidity'
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-card rounded-full shadow-sm text-sm border border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Client Testimonials Section */}
      <section className="py-20">
        <div className="max-container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium mb-4">
              Client Perspectives
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Success Stories
            </h2>
            <p className="text-muted-foreground">
              Hear from our clients about their experience working with Queenton Technology and the impact our solutions have had on their businesses.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Queenton's technical expertise transformed our e-commerce operations. Their solution scaled seamlessly during peak seasons and increased our revenue significantly.",
                author: "Sarah Johnson",
                position: "CTO, Global Retail Inc."
              },
              {
                quote: "The analytics platform Queenton built has revolutionized how we understand customer behavior. The insights generated have directly influenced our product strategy.",
                author: "Michael Chen",
                position: "Director of Analytics, DataDrive"
              },
              {
                quote: "Working with Queenton was truly collaborative. They prioritized understanding our business challenges before proposing technical solutions, resulting in a system that precisely met our needs.",
                author: "Emma Rodriguez",
                position: "COO, HealthTech Solutions"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-8 border border-border shadow-sm relative"
              >
                <div className="text-4xl text-primary/20 absolute top-4 left-4">"</div>
                <p className="text-muted-foreground mb-8 relative z-10">
                  {testimonial.quote}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-semibold">
                Ready to build something exceptional?
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Let's discuss how our expertise can help bring your vision to life with a solution tailored to your unique requirements.
              </p>
              <div className="pt-4">
                <a 
                  href="/contact" 
                  className="px-8 py-4 rounded-lg bg-white text-primary font-medium hover:bg-white/90 transition-all hover:translate-y-[-2px] active:translate-y-0 inline-block"
                >
                  Start Your Project
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
