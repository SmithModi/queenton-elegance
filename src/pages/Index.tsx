
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Globe, Layout, Database, Cpu } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs, from concept to deployment.',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Website Development',
      description: 'Responsive, high-performance websites with elegant user interfaces and seamless experiences.',
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'ERP & CRM Solutions',
      description: 'Integrated systems to streamline operations and enhance customer relationship management.',
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: 'Web Applications',
      description: 'Sophisticated web applications with modern frameworks and intuitive user experiences.',
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Blockchain Solutions',
      description: 'Cutting-edge Web3 websites and decentralized applications built on blockchain technology.',
    },
  ];

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
              Innovative Technology Solutions
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl mx-auto">
              Transforming Ideas Into <span className="text-primary">Digital Reality</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We craft elegant, user-centric software solutions that drive business growth and enhance user experiences.
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
                We Craft Digital Experiences That Matter
              </h2>
              <p className="text-muted-foreground mb-8">
                Queenton Technology is a premium software and web development company dedicated to creating exceptional digital solutions. We combine technical expertise with innovative design to deliver products that stand out.
              </p>
              <p className="text-muted-foreground mb-8">
                Our team of skilled developers, designers, and strategists works collaboratively to transform your vision into reality, ensuring each project exceeds expectations and delivers measurable results.
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
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="Team working on code" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background rounded-lg p-4 shadow-lg max-w-xs">
                <p className="font-medium text-lg">
                  "Our mission is to create technology that empowers and inspires."
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
                We provide comprehensive technology solutions tailored to meet the unique needs of your business, helping you stay ahead in today's digital landscape.
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
                Contact us today to discuss your project and discover how Queenton Technology can help you achieve your digital goals.
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
