
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Queenton Technology</h3>
            <p className="max-w-xs">
              Elevating digital experiences through innovative technology solutions and modern design.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Software Development</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Website Development</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">ERP & CRM Solutions</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Web Applications</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Blockchain & Web3</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>123 Tech Avenue, Silicon Valley, CA</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+11234567890" className="hover:text-primary transition-colors">+1 (123) 456-7890</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@queenton.com" className="hover:text-primary transition-colors">info@queenton.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Queenton Technology. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
