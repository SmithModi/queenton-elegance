
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
      shortDescription: 'Custom software solutions tailored to your business needs, from concept to deployment.',
      fullDescription: 'Our expert team develops custom software solutions that address your unique business challenges. From needs analysis to deployment and maintenance, we handle the entire development lifecycle. We specialize in creating scalable, secure, and user-friendly applications using the latest technologies and best practices.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      features: [
        'Custom application development',
        'Legacy system modernization',
        'API development and integration',
        'Mobile app development',
        'Quality assurance and testing'
      ]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Website Development',
      shortDescription: 'Responsive, high-performance websites with elegant user interfaces and seamless experiences.',
      fullDescription: 'We create stunning, responsive websites that leave a lasting impression on your visitors. Our websites are not only visually appealing but also optimized for performance, SEO, and conversion. We focus on creating intuitive user experiences that guide visitors toward your business goals.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      features: [
        'Responsive web design',
        'E-commerce websites',
        'Content management systems',
        'Landing page optimization',
        'Website maintenance and support'
      ]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'ERP & CRM Solutions',
      shortDescription: 'Integrated systems to streamline operations and enhance customer relationship management.',
      fullDescription: 'Our ERP and CRM solutions help businesses streamline operations, improve efficiency, and enhance customer relationships. We implement tailored systems that integrate with your existing infrastructure, providing real-time insights and automating key processes to drive growth and productivity.',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
      features: [
        'Custom ERP implementation',
        'CRM deployment and integration',
        'Business process automation',
        'Data migration and management',
        'User training and support'
      ]
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: 'Web Applications',
      shortDescription: 'Sophisticated web applications with modern frameworks and intuitive user experiences.',
      fullDescription: 'We develop powerful web applications that enhance your business capabilities and provide value to your users. Using modern frameworks and technologies, we create scalable, feature-rich solutions that work seamlessly across devices and platforms, delivering exceptional user experiences.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      features: [
        'Progressive web applications',
        'Single-page applications',
        'Real-time data processing',
        'Cloud-based solutions',
        'Cross-platform compatibility'
      ]
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Blockchain Solutions',
      shortDescription: 'Cutting-edge Web3 websites and decentralized applications built on blockchain technology.',
      fullDescription: 'We help businesses leverage blockchain technology to enhance security, transparency, and efficiency. Our Web3 solutions include decentralized applications, smart contracts, and integration with existing systems. We stay at the forefront of this rapidly evolving technology to deliver innovative solutions.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      features: [
        'Decentralized application (dApp) development',
        'Smart contract implementation',
        'Web3 website development',
        'NFT marketplace creation',
        'Blockchain integration with existing systems'
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
              Discover our range of services designed to help your business thrive in the digital landscape. From custom software to cutting-edge blockchain solutions, we have the expertise to bring your vision to life.
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
                    <h3 className="text-lg font-medium">Key Features</h3>
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
                      <span>Contact Us</span>
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
              How We Work
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Our Development Process
            </h2>
            <p className="text-muted-foreground">
              We follow a structured, collaborative approach to ensure that every project is delivered on time, within budget, and to the highest standards of quality.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Discovery', description: 'We start by understanding your business needs and project requirements.' },
              { number: '02', title: 'Planning', description: 'We create a detailed roadmap with timelines, milestones, and deliverables.' },
              { number: '03', title: 'Development', description: 'Our team builds your solution using agile methodologies and regular updates.' },
              { number: '04', title: 'Delivery', description: 'We deploy your solution and provide ongoing support and maintenance.' }
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
              Our Tech Stack
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Technologies We Use
            </h2>
            <p className="text-muted-foreground">
              We work with a wide range of modern technologies to deliver robust, scalable, and future-proof solutions.
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
                className="bg-card rounded-lg p-4 border border-border shadow-sm text-center"
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
                Ready to start your project?
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Contact us today for a free consultation and let us help you bring your vision to life.
              </p>
              <div className="pt-4">
                <a 
                  href="/contact" 
                  className="px-8 py-4 rounded-lg bg-white text-primary font-medium hover:bg-white/90 transition-all hover:translate-y-[-2px] active:translate-y-0 inline-block"
                >
                  Get in Touch
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
