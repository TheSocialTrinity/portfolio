import React from 'react';

export default function AboutOpening() {
  return (
    <section className="statement opening section-pad" id="about" aria-labelledby="statement-title">
      <div className="section-kicker reveal">
        <span>01</span>
        <span>How we think</span>
      </div>
      <div className="opening-grid">
        <div className="opening-copy reveal">
          <h1 className="statement-title" id="statement-title">
            Good brands don’t just look <span>different.</span> They feel inevitable.
          </h1>
          <p>Clear thinking. Warm collaboration. Brands people want to follow.</p>
          <a className="button button-primary" href="#contact">
            Book a call <span>↗</span>
          </a>
        </div>
        <div className="team-panel reveal reveal-delay">
          <div className="team-copy">
            <p className="eyebrow"><span className="eyebrow-dot"></span> A small creative crew</p>
            <h3>3 Friends<br /><em>Firing followers your way</em></h3>
            <p>Three minds, one chat, no layers of approval.</p>
            <span className="team-note">Not an agency. A good team.</span>
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
              <img src="/assets/ahsan.jpg" alt="Ahsan — Digital" />
              <figcaption>Ahsan<br /><span>Digital</span></figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
