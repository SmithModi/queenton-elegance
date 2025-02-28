
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Award, Briefcase, BarChart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TimelineItem from '@/components/TimelineItem';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: 'Excellence',
      description: 'We pursue excellence in every line of code and design element, maintaining rigorous standards that exceed industry benchmarks.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Collaboration',
      description: 'Our transparent development process keeps clients involved at every stage, ensuring solutions that truly address business objectives.'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Innovation',
      description: 'We constantly explore emerging technologies and methodologies to deliver forward-thinking solutions that keep our clients ahead of the curve.'
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: 'Integrity',
      description: 'Ethical business practices form the foundation of our client relationships, with clear communication and honest project assessments.'
    }
  ];

  const stats = [
    { value: '35+', label: 'Technology Experts' },
    { value: '120+', label: 'Projects Delivered' },
    { value: '18+', label: 'Countries Served' },
    { value: '9+', label: 'Years of Excellence' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-secondary">
        <div className="max-container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-accent text-sm font-medium mb-4">
                About Queenton Technology
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                Digital Innovation Architects
              </h1>
              <p className="text-muted-foreground mb-8 text-lg">
                Founded in 2015, Queenton Technology has evolved from a specialized development studio into a comprehensive digital solutions provider. Our multidisciplinary team of technologists, designers, and strategists collaborate to transform complex business challenges into elegant, scalable solutions that drive measurable results.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <p className="text-3xl md:text-4xl font-semibold">{stat.value}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-xl -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-xl -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Queenton Technology Team" 
                  className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Story/Vision Section */}
      <section className="py-20">
        <div className="max-container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium mb-4">
                Our Story
              </div>
              <h2 className="text-3xl font-semibold mb-6">
                The Queenton Journey
              </h2>
              <p className="text-muted-foreground mb-4">
                What began as a pioneering venture by five technology visionaries has grown into a global digital solutions powerhouse. Our founders identified a significant gap in the market for truly user-centric, technically excellent digital products that could evolve alongside rapidly changing business requirements.
              </p>
              <p className="text-muted-foreground">
                Today, Queenton Technology stands at the forefront of digital innovation, with specialized teams delivering transformative solutions across software development, web engineering, enterprise systems, interactive applications, and blockchain technologies. Our evolution reflects our commitment to continuous learning and adaptation in the ever-changing technology landscape.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium mb-4">
                Our Vision
              </div>
              <h2 className="text-3xl font-semibold mb-6">
                Technology With Purpose
              </h2>
              <p className="text-muted-foreground mb-4">
                At Queenton, we envision a future where technology seamlessly enhances human experiences, business operations, and global connectivity. We're committed to pioneering solutions that not only address current challenges but anticipate future needs, positioning our clients at the cutting edge of their industries.
              </p>
              <p className="text-muted-foreground">
                Our strategic roadmap emphasizes sustainable development practices, enhanced security frameworks, and increasingly intelligent systems that leverage AI and machine learning to deliver predictive capabilities. By maintaining our focus on both technical excellence and user experience, we create digital assets that deliver exceptional value throughout their lifecycle.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
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
              What Drives Us
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              These principles guide our strategic decisions, shape our corporate culture, and define our approach to client partnerships and technical implementation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border shadow-sm"
              >
                <div className="text-primary mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
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
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Company Milestones
            </h2>
            <p className="text-muted-foreground">
              Tracing our evolution from an ambitious startup to an industry leader in digital innovation.
            </p>
          </motion.div>
          
          <div className="relative mt-20">
            <TimelineItem
              year="2015"
              title="Foundation"
              description="Queenton Technology launched with a specialized focus on bespoke web development solutions for startups and mid-market businesses."
              isLeft={false}
              delay={0}
            />
            
            <TimelineItem
              year="2017"
              title="Technology Portfolio Expansion"
              description="Broadened our technical capabilities to include comprehensive software development services and advanced architectural consulting."
              isLeft={true}
              delay={1}
            />
            
            <TimelineItem
              year="2019"
              title="Enterprise Solutions Division"
              description="Launched dedicated ERP and CRM implementation teams, integrating specialized enterprise systems expertise into our service portfolio."
              isLeft={false}
              delay={2}
            />
            
            <TimelineItem
              year="2020"
              title="Global Market Penetration"
              description="Established strategic partnerships in APAC and EMEA regions, doubling our global client base and diversifying our industry expertise."
              isLeft={true}
              delay={3}
            />
            
            <TimelineItem
              year="2022"
              title="Web3 & Blockchain Innovation"
              description="Created our dedicated Emerging Technologies division focused on Web3 architecture, blockchain solutions, and decentralized applications."
              isLeft={false}
              delay={4}
            />
            
            <TimelineItem
              year="2023"
              title="Industry Recognition"
              description="Recognized with multiple industry awards for technical innovation, design excellence, and transformative client outcomes."
              isLeft={true}
              delay={5}
            />
          </div>
        </div>
      </section>
      
      {/* Team Ethos Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-4">
                Our Team
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Technology Specialists
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Our multidisciplinary team combines deep technical expertise with creative problem-solving capabilities. We've carefully assembled specialists across frontend and backend development, UX/UI design, DevOps, quality assurance, and project management to create fully-integrated delivery units.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-white mt-0.5 shrink-0" />
                  <span>Technical leadership averaging 12+ years of specialized experience</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-white mt-0.5 shrink-0" />
                  <span>Continuous professional development through our Queenton Academy program</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-white mt-0.5 shrink-0" />
                  <span>Cross-functional collaboration enabling comprehensive solution architecture</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-white mt-0.5 shrink-0" />
                  <span>Domain-specific expertise across finance, healthcare, retail, and manufacturing</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-auto"
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                  alt="Team Member" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334" 
                  alt="Team Collaboration" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Growth & Performance */}
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
              Our Impact
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Growth & Performance
            </h2>
            <p className="text-muted-foreground">
              Measuring our success through client outcomes and quantifiable results that demonstrate our technological impact.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 border border-border shadow-sm text-center"
            >
              <div className="text-primary mb-4">
                <BarChart className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">230%</h3>
              <p className="text-muted-foreground">Average Client ROI</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 border border-border shadow-sm text-center"
            >
              <div className="text-primary mb-4">
                <Users className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">97%</h3>
              <p className="text-muted-foreground">Client Retention Rate</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 border border-border shadow-sm text-center"
            >
              <div className="text-primary mb-4">
                <Award className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">18+</h3>
              <p className="text-muted-foreground">Industry Recognitions</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-accent text-sm font-medium mb-4">
                Partner With Us
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold">
                Let's Transform Your Vision Into Reality
              </h2>
              <p className="text-muted-foreground text-lg">
                Whether you're launching a new digital product, enhancing an existing system, or exploring emerging technologies, our team is ready to deliver solutions that exceed expectations.
              </p>
              <div className="pt-4">
                <a href="/contact" className="button-primary">
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

export default About;
