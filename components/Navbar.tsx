'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <a href="#" className="wordmark" aria-label="The Social Trinity home">
        <span className="wordmark-mark" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className="wordmark-text">THE SOCIAL<br />TRINITY</span>
      </a>

      <button
        className={`menu-toggle ${isOpen ? 'is-open' : ''}`}
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        aria-label="Toggle navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        id="primary-navigation"
        className={`main-nav ${isOpen ? 'is-open' : ''}`}
        aria-label="Primary"
      >
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#work" onClick={() => setIsOpen(false)}>Case Studies</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#contact" className="header-cta" onClick={() => setIsOpen(false)}>
          Book a call <span>↗</span>
        </a>
      </nav>
    </header>
  );
}
