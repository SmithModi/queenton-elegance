
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Load Google Maps API
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    window.document.body.appendChild(googleMapScript);
    
    googleMapScript.addEventListener('load', () => {
      initMap();
    });
    
    return () => {
      window.document.body.removeChild(googleMapScript);
    };
  }, []);
  
  const mapRef = useRef(null);
  
  const initMap = () => {
    if (!mapRef.current) return;
    
    const location = { lat: 40.7128, lng: -74.0060 }; // New York coordinates
    
    const mapOptions = {
      center: location,
      zoom: 14,
      styles: [
        {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [{"saturation": 36}, {"color": "#333333"}, {"lightness": 40}]
        },
        {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"lightness": 16}]
        },
        {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [{"visibility": "off"}]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [{"color": "#fefefe"}, {"lightness": 20}]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [{"color": "#fefefe"}, {"lightness": 17}, {"weight": 1.2}]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [{"color": "#f5f5f5"}, {"lightness": 20}]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{"color": "#f5f5f5"}, {"lightness": 21}]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{"color": "#dedede"}, {"lightness": 21}]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{"color": "#ffffff"}, {"lightness": 17}]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{"color": "#ffffff"}, {"lightness": 29}, {"weight": 0.2}]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{"color": "#ffffff"}, {"lightness": 18}]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [{"color": "#ffffff"}, {"lightness": 16}]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [{"color": "#f2f2f2"}, {"lightness": 19}]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{"color": "#e9e9e9"}, {"lightness": 17}]
        }
      ]
    };
    
    // @ts-ignore
    const map = new window.google.maps.Map(mapRef.current, mapOptions);
    
    // @ts-ignore
    const marker = new window.google.maps.Marker({
      position: location,
      map: map,
      title: 'Queenton Technology'
    });
    
    // @ts-ignore
    const infoWindow = new window.google.maps.InfoWindow({
      content: `<div style="padding: 10px; max-width: 200px;">
                  <h3 style="margin: 0 0 5px; font-weight: bold;">Queenton Technology</h3>
                  <p style="margin: 0;">123 Tech Avenue, New York, NY 10001</p>
                </div>`
    });
    
    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });
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
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Contact Us
            </h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Have questions or ready to start your project? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-16">
        <div className="max-container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl border border-border p-8"
            >
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <ContactForm />
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">123 Tech Avenue, New York, NY 10001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">info@queenton.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Office Hours</h3>
                      <p className="text-muted-foreground">Monday-Friday: 9am-6pm</p>
                      <p className="text-muted-foreground">Saturday: 10am-4pm</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-xl border border-border overflow-hidden h-80">
                <div ref={mapRef} className="w-full h-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
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
              FAQs
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our services and process.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while complex applications can take several months. We provide detailed timelines during our initial consultation.'
              },
              {
                question: 'How much does a typical project cost?',
                answer: 'Each project is unique, and costs depend on requirements, complexity, and timeline. We provide transparent pricing and detailed proposals after understanding your specific needs.'
              },
              {
                question: 'Do you provide maintenance and support after launch?',
                answer: 'Yes, we offer ongoing maintenance and support packages to ensure your application continues to function optimally and stays up-to-date with the latest technologies.'
              },
              {
                question: 'What technologies do you specialize in?',
                answer: 'We specialize in a wide range of modern technologies including React, Angular, Vue.js, Node.js, Python, and various database systems. Our team stays updated with the latest advancements to recommend the best solutions for your needs.'
              },
              {
                question: 'How do you handle project communication?',
                answer: 'We maintain regular communication through scheduled meetings, progress reports, and collaborative tools. Our clients have access to project management systems where they can track progress and communicate with our team.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
