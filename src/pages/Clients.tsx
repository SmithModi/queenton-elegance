
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

// Generate placeholder client data
const generateClients = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Client ${i + 1}`,
    logo: `https://placehold.co/200x100/333/FFF?text=Client+${i + 1}`
  }));
};

const Clients = () => {
  const [clients] = useState(generateClients(150));
  const [currentPage, setCurrentPage] = useState(1);
  const clientsPerPage = 20;
  const totalPages = Math.ceil(clients.length / clientsPerPage);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  
  const getCurrentPageClients = () => {
    const startIndex = (currentPage - 1) * clientsPerPage;
    const endIndex = startIndex + clientsPerPage;
    return clients.slice(startIndex, endIndex);
  };
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink 
            onClick={() => handlePageChange(i)} 
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    return pageNumbers;
  };

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
              Our Clients
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              We're proud to have worked with 150+ amazing brands
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Clients Grid */}
      <section className="py-16 md:py-24">
        <div className="max-container px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {getCurrentPageClients().map((client) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (client.id % clientsPerPage) * 0.03 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-4 flex items-center justify-center aspect-video card-hover border border-border"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-w-full max-h-20 object-contain"
                />
              </motion.div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-16">
            <Pagination>
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                  </PaginationItem>
                )}
                
                {renderPageNumbers()}
                
                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="max-container px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Join our growing list of satisfied clients
              </h2>
              <p className="text-muted-foreground mb-8">
                We've helped businesses of all sizes achieve their digital goals. Let's make your brand the next success story.
              </p>
              <a 
                href="/contact" 
                className="button-primary inline-block"
              >
                Get Started
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Clients;
