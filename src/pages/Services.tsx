
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Globe, Database, Layout, Cpu, ArrowRight, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Software Development',
      shortDescription: 'Enterprise-grade software solutions engineered for performance, security, and scalability.',
      fullDescription: 'Our software development services deliver tailor-made solutions that address complex business challenges through innovative architecture and clean, maintainable code. From requirements analysis to deployment and beyond, we manage the complete software lifecycle with meticulous attention to quality and performance optimization.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      features: [
        'Microservices architecture design',
        'Enterprise application development',
        'API development and integration',
        'Cloud-native application development',
        'Performance optimization and refactoring'
      ]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Website Development',
      shortDescription: 'High-impact digital experiences with pixel-perfect design and optimized performance.',
      fullDescription: 'We craft visually stunning, responsive websites that establish your digital presence with authority. Our development process emphasizes intuitive user experiences, optimized performance metrics, and conversion-focused design elements. Each website is built with scalability in mind, allowing for seamless future expansion.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      features: [
        'Responsive design with mobile-first approach',
        'E-commerce & transactional systems',
        'Content management implementation',
        'SEO optimization & technical performance',
        'Accessibility compliance (WCAG 2.1)'
      ]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'ERP & CRM Solutions',
      shortDescription: 'Integrated business systems that streamline operations and enhance customer insights.',
      fullDescription: 'Our enterprise solution specialists implement and customize ERP and CRM systems that connect siloed operations, automate workflows, and centralize critical business data. We focus on seamless integration with existing infrastructure while providing intuitive interfaces that encourage organization-wide adoption.',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
      features: [
        'Business process analysis & optimization',
        'Custom module development',
        'Legacy system integration',
        'Data migration & transformation',
        'Training & continuous improvement'
      ]
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: 'Web Applications',
      shortDescription: 'Feature-rich interactive applications that deliver exceptional user experiences.',
      fullDescription: 'Our web application development combines technical excellence with intuitive design to create powerful, interactive digital tools. We leverage modern frameworks and architectural patterns to build responsive, secure, and scalable applications that handle complex business logic while providing seamless user experiences.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      features: [
        'Single-page application (SPA) development',
        'Progressive Web Apps (PWAs)',
        'Real-time data processing & visualization',
        'Complex form management & validation',
        'Authentication & authorization systems'
      ]
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Blockchain Solutions',
      shortDescription: 'Next-generation Web3 applications and decentralized systems for modern businesses.',
      fullDescription: 'Our blockchain specialists design and implement decentralized solutions that leverage distributed ledger technology to enhance security, transparency, and efficiency. From smart contract development to full dApp implementations, we help organizations navigate the complexities of Web3 while delivering practical business applications.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      features: [
        'Smart contract development & auditing',
        'Decentralized application (dApp) creation',
        'Tokenization & NFT implementation',
        'Private/permissioned blockchain networks',
        'Web3 integration with existing systems'
      ]
    },
  ];

  const closeServiceDetail = () => {
    setSelectedService(null);
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
              Our Expertise
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Discover our specialized service offerings designed to transform your business challenges into technology-driven advantages. Click on any service to explore detailed capabilities.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Grid Section */}
      <section className="py-20">
        <div className="max-container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedService(index)}
                className="cursor-pointer"
              >
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  icon={service.icon}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeServiceDetail}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={closeServiceDetail}
                className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="h-64 md:h-full relative">
                  <img 
                    src={services[selectedService].image} 
                    alt={services[selectedService].title} 
                    className="w-full h-full object-cover rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-bl-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6 md:hidden">
                    <h2 className="text-white text-2xl font-semibold">
                      {services[selectedService].title}
                    </h2>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 space-y-6">
                  <div className="hidden md:block text-primary mb-4">
                    {services[selectedService].icon}
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-semibold hidden md:block">
                    {services[selectedService].title}
                  </h2>
                  
                  <p className="text-muted-foreground">
                    {services[selectedService].fullDescription}
                  </p>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Core Capabilities</h3>
                    <ul className="space-y-2">
                      {services[selectedService].features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="mr-3 mt-1 text-primary">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.25 3.5L5.25 10.5L1.75 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <a href="/contact" className="button-primary w-full md:w-auto justify-center flex items-center space-x-2">
                      <span>Discuss Your Project</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Development Process */}
      <section className="py-20 bg-secondary">
        <div className="max-container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-accent text-sm font-medium mb-4">
              Our Methodology
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Strategic Development Process
            </h2>
            <p className="text-muted-foreground">
              Our proven four-phase approach combines technical expertise with business acumen to deliver solutions that address both immediate needs and long-term objectives.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Discovery & Analysis', description: 'Comprehensive assessment of requirements, constraints, and opportunities to establish project parameters.' },
              { number: '02', title: 'Architecture & Planning', description: 'Strategic solution design with technical roadmapping, resource allocation, and milestone definition.' },
              { number: '03', title: 'Agile Implementation', description: 'Iterative development with continuous integration, regular client reviews, and quality assurance.' },
              { number: '04', title: 'Deployment & Evolution', description: 'Production launch with performance monitoring, ongoing maintenance, and continuous improvement.' }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border shadow-sm relative"
              >
                <div className="text-6xl font-bold text-primary/10 absolute -top-2 -left-2">
                  {step.number}
                </div>
                <div className="relative pt-4">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
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
              Technology Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Our Technical Stack
            </h2>
            <p className="text-muted-foreground">
              We strategically select technologies that provide optimal performance, security, and scalability for each unique project requirement.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React', 'Node.js', 'Python', 'TypeScript', 
              'Angular', 'Vue.js', 'AWS', 'Azure', 
              'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes',
              'Swift', 'Kotlin', 'Flutter', 'Go', 
              'GraphQL', 'Solidity'
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-4 border border-border shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                {tech}
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
                Ready to transform your business?
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Schedule a consultation with our solutions architects to discuss your unique technology requirements and discover how Queenton can accelerate your digital initiatives.
              </p>
              <div className="pt-4">
                <a 
                  href="/contact" 
                  className="px-8 py-4 rounded-lg bg-white text-primary font-medium hover:bg-white/90 transition-all hover:translate-y-[-2px] active:translate-y-0 inline-block"
                >
                  Schedule Consultation
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

export default Services;
