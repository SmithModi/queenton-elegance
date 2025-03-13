import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Layout, Database, Cpu, Palette, BarChart3, X } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Web Development',
      description: 'Custom, responsive websites with elegant user interfaces and seamless experiences.',
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
      title: 'ERP Development',
      description: 'Integrated systems to streamline operations and enhance business efficiency.',
      fullDescription: 'Our ERP solutions help businesses streamline operations, improve efficiency, and enhance overall productivity. We implement tailored systems that integrate with your existing infrastructure, providing real-time insights and automating key processes to drive growth and efficiency.',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
      features: [
        'Custom ERP implementation',
        'Business process automation',
        'Data migration and management',
        'Integration with existing systems',
        'User training and support'
      ]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'UI/UX Development',
      description: 'Human-centered designs that create intuitive, engaging user experiences.',
      fullDescription: 'We blend creativity with functionality to create beautiful, intuitive designs that delight your users. Our UI/UX development focuses on user-centered design principles that enhance usability, accessibility, and overall satisfaction while maintaining your brand identity.',
      image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd',
      features: [
        'User research and persona development',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Usability testing',
        'Design system creation'
      ]
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs from concept to deployment.',
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
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Running Ads',
      description: 'Strategic digital advertising campaigns that drive traffic and increase conversions.',
      fullDescription: 'We create and manage digital advertising campaigns that put your business in front of the right audience. Our data-driven approach ensures optimal use of your advertising budget, focusing on channels and strategies that deliver the best ROI for your specific goals.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      features: [
        'Google Ads management',
        'Social media advertising',
        'Display and retargeting campaigns',
        'Performance tracking and analytics',
        'Budget optimization'
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16 hero-dots">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
        </div>
        
        <div className="max-container relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium mb-2 animate-float">
              Crafting Elegant Digital Experiences
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl mx-auto">
              Bringing Your Vision To <span className="text-primary">Digital Life</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              At Something Media, we specialize in crafting elegant, animated websites that captivate and engage.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <Link to="/services" className="button-primary">
                Explore Our Services
              </Link>
              <Link to="/portfolio" className="button-outline">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-24 bg-secondary">
        <div className="max-container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                We Create Digital Experiences That Matter
              </h2>
              <p className="text-muted-foreground mb-8">
                With 2 years of expertise, we blend creativity and technical precision to create visually stunning, intuitive designs that reflect your brand's identity.
              </p>
              <p className="text-muted-foreground mb-8">
                Whether launching or revamping a site, we bring your vision to life with style and impact. Our team is dedicated to creating websites that stand out in today's digital landscape.
              </p>
              <Link to="/about" className="inline-flex items-center text-primary font-medium group">
                <span className="transition-all duration-300 group-hover:mr-2">Learn more about us</span>
                <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" alt="Web development" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background rounded-lg p-4 shadow-lg max-w-xs">
                <p className="font-medium text-lg">
                  "We create technology that empowers and inspires."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Preview Section */}
      <section className="py-24">
        <div className="max-container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium mb-4">
                What We Offer
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Our Services
              </h2>
              <p className="text-muted-foreground">
                We provide comprehensive technology solutions tailored to meet the unique needs of your business, helping you stand out in today's digital world.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index}
                onClick={() => setSelectedService(index)}
              />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/services" className="button-primary">
              View All Services
            </Link>
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
                    <Link to="/contact" className="button-primary w-full md:w-auto justify-center flex items-center space-x-2">
                      <span>Contact Us</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
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
                Ready to transform your ideas into reality?
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Contact us today to discuss your project and discover how Something Media can help you achieve your digital goals.
              </p>
              <div className="pt-4">
                <Link 
                  to="/contact"
                  className="px-8 py-4 rounded-lg bg-white text-primary font-medium hover:bg-white/90 transition-all hover:translate-y-[-2px] active:translate-y-0 inline-block"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
