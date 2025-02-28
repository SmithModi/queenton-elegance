
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
      description: 'We strive for excellence in everything we do, from code quality to user experience.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Collaboration',
      description: 'We work closely with our clients, fostering communication and shared success.'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative approaches to solve complex problems.'
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: 'Integrity',
      description: 'We conduct business with transparency, honesty, and ethical principles.'
    }
  ];

  const stats = [
    { value: '25+', label: 'Team Members' },
    { value: '100+', label: 'Projects Completed' },
    { value: '15+', label: 'Countries Served' },
    { value: '8+', label: 'Years of Experience' }
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
                Crafting Digital Excellence Since 2015
              </h1>
              <p className="text-muted-foreground mb-8 text-lg">
                We are a team of passionate developers, designers, and strategists dedicated to creating exceptional digital experiences. Our journey began with a simple mission: to help businesses harness the power of technology to grow and thrive in the digital landscape.
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
                How We Started
              </h2>
              <p className="text-muted-foreground mb-4">
                Queenton Technology was founded by a group of tech enthusiasts who saw a gap in the market for high-quality, user-focused digital solutions. What started as a small web development agency has evolved into a full-service technology company serving clients across the globe.
              </p>
              <p className="text-muted-foreground">
                Over the years, we've expanded our expertise to include software development, ERP and CRM solutions, web applications, and blockchain technology, always staying at the forefront of industry trends and innovations to deliver the best possible solutions to our clients.
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
                Where We're Going
              </h2>
              <p className="text-muted-foreground mb-4">
                Our vision is to be a global leader in digital innovation, recognized for our commitment to excellence, creativity, and client satisfaction. We aim to create technology that not only solves problems but also inspires and empowers users.
              </p>
              <p className="text-muted-foreground">
                We believe in the transformative power of technology and its ability to enhance businesses and lives. As we continue to grow, we remain committed to our core values and to delivering solutions that exceed expectations, drive results, and stand the test of time.
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
              At Queenton Technology, our values guide everything we do. They shape our culture, inform our decisions, and define how we work with our clients and each other.
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
              Company Timeline
            </h2>
            <p className="text-muted-foreground">
              From humble beginnings to industry leadership, explore the key milestones that have shaped Queenton Technology.
            </p>
          </motion.div>
          
          <div className="relative mt-20">
            <TimelineItem
              year="2015"
              title="Company Founded"
              description="Queenton Technology was established with a focus on web development and design services."
              isLeft={false}
              delay={0}
            />
            
            <TimelineItem
              year="2017"
              title="Expansion into Software Development"
              description="We expanded our services to include custom software development, growing our team and expertise."
              isLeft={true}
              delay={1}
            />
            
            <TimelineItem
              year="2019"
              title="Introduction of ERP & CRM Solutions"
              description="Launched our enterprise solutions division, offering integrated systems for business management."
              isLeft={false}
              delay={2}
            />
            
            <TimelineItem
              year="2020"
              title="Global Reach Milestone"
              description="Achieved our goal of serving clients across 10+ countries, establishing a truly global presence."
              isLeft={true}
              delay={3}
            />
            
            <TimelineItem
              year="2022"
              title="Blockchain & Web3 Innovation"
              description="Embraced blockchain technology, developing cutting-edge decentralized applications and Web3 solutions."
              isLeft={false}
              delay={4}
            />
            
            <TimelineItem
              year="2023"
              title="Industry Recognition"
              description="Received multiple industry awards for our innovative approach and exceptional client results."
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
                The Minds Behind Queenton
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Our team consists of talented developers, designers, project managers, and strategists who bring diverse skills and perspectives to every project. We're united by our passion for technology and our commitment to creating exceptional digital experiences.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-white mt-0.5 shrink-0" />
                  <span>Specialized expertise across multiple technology domains</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-white mt-0.5 shrink-0" />
                  <span>Continuous learning and professional development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-white mt-0.5 shrink-0" />
                  <span>Collaborative, supportive work environment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-white mt-0.5 shrink-0" />
                  <span>Client-focused approach with clear communication</span>
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
              We measure our success by the results we deliver to our clients. Here's a snapshot of our performance over the years.
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
              <h3 className="text-2xl font-semibold mb-2">200%</h3>
              <p className="text-muted-foreground">Average Client Growth</p>
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
              <h3 className="text-2xl font-semibold mb-2">98%</h3>
              <p className="text-muted-foreground">Client Satisfaction Rate</p>
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
              <h3 className="text-2xl font-semibold mb-2">15+</h3>
              <p className="text-muted-foreground">Industry Awards</p>
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
                Join Us On Our Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold">
                Ready to transform your digital presence?
              </h2>
              <p className="text-muted-foreground text-lg">
                Whether you're looking to develop a new product, enhance an existing system, or explore emerging technologies, we're here to help you succeed.
              </p>
              <div className="pt-4">
                <a href="/contact" className="button-primary">
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

export default About;
