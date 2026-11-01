'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AboutOpening from '@/components/AboutOpening';
import CaseStudies from '@/components/CaseStudies';
import CaseStudyModal from '@/components/CaseStudyModal';
import ClientMarquee from '@/components/ClientMarquee';
import NumbersDontLie from '@/components/NumbersDontLie';
import Process from '@/components/Process';
import Comparison from '@/components/Comparison';
import Services from '@/components/Services';
import ServiceModal from '@/components/ServiceModal';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    // Intersection Observer for .reveal animations
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '50px' }
      );
      reveals.forEach((el) => observer.observe(el));

      // Fallback to guarantee visibility across all viewports
      const timer = setTimeout(() => {
        reveals.forEach((el) => el.classList.add('visible'));
      }, 300);

      return () => {
        clearTimeout(timer);
        observer.disconnect();
      };
    } else {
      reveals.forEach((el) => el.classList.add('visible'));
    }
  }, []);

  return (
    <main>
      <Navbar />
      <AboutOpening />
      <CaseStudies onOpenCase={(id) => setSelectedCase(id)} />
      <ClientMarquee />
      <NumbersDontLie />
      <Process />
      <Comparison />
      <Services onSelectService={(num) => setSelectedService(num)} />
      <ContactForm />
      <Footer />

      {/* Interactive Overlays */}
      <CaseStudyModal
        caseId={selectedCase}
        onClose={() => setSelectedCase(null)}
      />
      <ServiceModal
        serviceId={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </main>
  );
}
