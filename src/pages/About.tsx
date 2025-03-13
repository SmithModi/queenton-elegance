
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TimelineItem from '@/components/TimelineItem';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary">
        <div className="max-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto px-4"
          >
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              About Something Media
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Crafting elegant, animated websites that captivate and engage.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="max-container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold">
                Bringing your vision to life with style and impact
              </h2>
              <p className="text-muted-foreground">
                At Something Media, we're committed to creating visually stunning, intuitive designs that reflect your brand's identity. Our mission is to blend creativity and technical precision, delivering websites and software solutions that not only look great but also drive engagement and results.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium">
                Our Vision
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold">
                Setting new standards in digital excellence
              </h2>
              <p className="text-muted-foreground">
                We envision a digital landscape where every business, regardless of size, has access to premium web solutions. Our goal is to transform how brands connect with their audience through innovative design, seamless functionality, and memorable user experiences that drive growth and success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-secondary">
        <div className="max-container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-accent text-sm font-medium mb-4">
              Our Core Values
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Principles that guide our work
            </h2>
            <p className="text-muted-foreground">
              These values form the foundation of our company culture and drive every decision we make, from development practices to client relationships.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-10 w-10" />,
                title: 'Excellence',
                description: 'We pursue the highest standards in every project, delivering quality that exceeds expectations.'
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: 'Collaboration',
                description: 'We work closely with our clients, turning their vision into reality through transparent partnership.'
              },
              {
                icon: <TrendingUp className="h-10 w-10" />,
                title: 'Innovation',
                description: 'We embrace cutting-edge technologies to keep our clients ahead of the digital curve.'
              },
              {
                icon: <MapPin className="h-10 w-10" />,
                title: 'Reliability',
                description: 'We deliver on our promises, building trust through consistency and dependability.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 text-center"
              >
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company History */}
      <section className="py-16 md:py-24">
        <div className="max-container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium mb-4">
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Our path to digital excellence
            </h2>
            <p className="text-muted-foreground">
              Though young, we've already accomplished so much on our journey to becoming a leading digital agency.
            </p>
          </motion.div>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-px bg-border md:-translate-x-[0.5px]" />
            
            {/* Timeline items */}
            <div className="space-y-12">
              <TimelineItem 
                year="2022"
                title="Company Founded"
                description="Something Media was established with a mission to provide cutting-edge web development services to businesses of all sizes."
                isLeft={true}
              />
              
              <TimelineItem 
                year="2022"
                title="First Major Client"
                description="Secured our first enterprise client and expanded our team of talented developers, designers, and project managers."
                isLeft={false}
              />
              
              <TimelineItem 
                year="2023"
                title="Service Expansion"
                description="Added ERP Development and UI/UX Design services to our portfolio, offering comprehensive digital solutions."
                isLeft={true}
              />
              
              <TimelineItem 
                year="2023"
                title="Client Milestone"
                description="Reached our 50th satisfied client, building a strong reputation for quality and reliability."
                isLeft={false}
              />
              
              <TimelineItem 
                year="2024"
                title="Industry Recognition"
                description="Received recognition for our innovative approach to web development and client satisfaction."
                isLeft={true}
              />
              
              <TimelineItem 
                year="2024"
                title="Present Day"
                description="Now serving 150+ clients, we continue to innovate and deliver exceptional digital experiences that drive results."
                isLeft={false}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-secondary">
        <div className="max-container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-accent text-sm font-medium mb-4">
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Meet the experts behind Something Media
            </h2>
            <p className="text-muted-foreground">
              Our diverse team combines deep technical expertise with industry knowledge to deliver exceptional results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Alex Thompson',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=800'
              },
              {
                name: 'Morgan Chen',
                role: 'Lead Developer',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=crop&w=800&h=800'
              },
              {
                name: 'Taylor Rodriguez',
                role: 'UI/UX Designer',
                image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?fit=crop&w=800&h=800'
              },
              {
                name: 'Jamie Wilson',
                role: 'Project Manager',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=800&h=800'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl overflow-hidden card-hover"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-container px-4">
          <div className="bg-card rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-border">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Ready to work with us?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our expertise can help your business grow and transform in the digital age.
              </p>
              <a 
                href="/contact" 
                className="button-primary inline-block"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
