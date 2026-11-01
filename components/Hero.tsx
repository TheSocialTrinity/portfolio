import React from 'react';

export default function Hero() {
  return (
    <section className="hero" aria-label="Agency Introduction">
      <div className="section-kicker kicker-inverse reveal">
        <span>01</span>
        <span>How we think</span>
        <span className="kicker-rule"></span>
      </div>

      <div className="hero-lead reveal">
        <h1 className="hero-title">
          Good brands<br />
          don’t just look<br />
          <em>different.</em> They<br />
          feel inevitable.
        </h1>
        <p className="hero-subhead">
          Clear thinking. Warm collaboration.<br />
          Brands people want to follow.
        </p>
        <div className="hero-actions">
          <a href="#consultation" className="button button-primary">
            Book a call <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="hero-card reveal reveal-delay">
        <div className="hero-card-meta">
          <span className="bullet" aria-hidden="true">●</span>
          <span>A small creative crew</span>
        </div>
        <p className="hero-card-display">
          <strong>3 Friends</strong><br />
          <em>Firing followers your way</em>
        </p>
        <p className="hero-card-text">
          Three minds, one chat, no layers of approval.
        </p>
        <div className="hero-card-rule" aria-hidden="true">
          <span>Not an agency. A good team.</span>
        </div>
        <div className="avatar-row" aria-label="The three Social Trinity friends">
          <figure className="avatar-card avatar-card-one">
            <img src="/assets/mudassir.jpg" alt="Mudassir — Strategy" />
            <figcaption>Mudassir<br /><span>Strategy</span></figcaption>
          </figure>
          <figure className="avatar-card avatar-card-two">
            <img src="/assets/ali.jpg" alt="Ali — Identity" />
            <figcaption>Ali<br /><span>Identity</span></figcaption>
          </figure>
          <figure className="avatar-card avatar-card-three">
            <img src="/assets/ahsan.jpg" alt="Ahsan — Digital & Content" />
            <figcaption>Ahsan<br /><span>Digital</span></figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
