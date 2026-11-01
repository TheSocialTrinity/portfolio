import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer section-pad">
      <div className="footer-top">
        <div className="footer-brand">
          <a className="wordmark wordmark-footer" href="#top">
            <span className="wordmark-mark" aria-hidden="true"><i></i><i></i><i></i></span>
            <span>THE SOCIAL<br />TRINITY</span>
          </a>
          <p>Attention with a point<br />of view.</p>
        </div>
        <div className="office-list">
          <p className="footer-label">Headquarters</p>
          <div className="office">
            <span>ISB</span>
            <p>Islamabad, Pakistan<br />Available worldwide</p>
          </div>
        </div>
        <div className="footer-pitch">
          <p className="footer-label">Your Next Move</p>
          <h4>Ready to turn reach into an engine?</h4>
          <p>We work with a select few founders, creators, and brands to keep execution tight. Bring us your audience or your stuck point, and we’ll show you where the momentum is.</p>
          <a className="button button-primary footer-btn" href="#contact">Start a conversation <span>↗</span></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 The Social Trinity</span>
        <span>Made for the in-between.</span>
        <a href="#about">Back to top ↑</a>
      </div>
    </footer>
  );
}
