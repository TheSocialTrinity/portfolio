import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="wordmark-mark" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </span>
          <span className="wordmark-text">THE SOCIAL<br />TRINITY</span>
          <p className="footer-tagline">Attention with a point of view :</p>
        </div>
        <div className="footer-col">
          <span className="footer-col-title">Headquarters</span>
          <p><span>2026</span><br />Islamabad, Pakistan<br />Available worldwide</p>
        </div>
        <div className="footer-col footer-pitch">
          <span className="footer-col-title">Your next move</span>
          <h4>Ready to turn reach into an engine?</h4>
          <p>We work with a select few founders, creators and brands to keep execution tight. Bring us your audience or your stuck point, and we'll show you where the momentum is.</p>
          <a href="#contact" className="button button-primary footer-btn">
            Start a conversation <span>↗</span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 THE SOCIAL TRINITY</span>
        <span>MADE FOR THE IN-BETWEEN</span>
        <a href="#about">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
