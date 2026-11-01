import React from 'react';

const clients = ["Charlotte", "Jerry Wise", "Crypto Archie", "Jordan Platten", "Mace"];
// Repeat 4 times for smooth continuous CSS marquee scroll
const track = [...clients, ...clients, ...clients, ...clients];

export default function ClientMarquee() {
  return (
    <section className="clients client-marquee section-pad" aria-labelledby="clients-title">
      <div className="section-kicker reveal">
        <span>03</span>
        <span>In good company</span>
        <span className="kicker-rule"></span>
      </div>
      <div className="clients-heading reveal">
        <h2 id="clients-title">Clients we have<br /><em>worked with.</em></h2>
        <p>Names, launches, and communities we’ve helped move forward.</p>
      </div>
      <div className="logo-marquee" aria-label="Clients we have worked with">
        <div className="logo-marquee-track" id="logo-carousel">
          {track.map((name, i) => (
            <div className="logo-card" key={i}>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="carousel-note">
        <span className="pulse-dot"></span> Selected collaborators, 2016—2026
      </p>
    </section>
  );
}
