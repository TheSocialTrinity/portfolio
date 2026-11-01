'use client';

import React, { useState } from 'react';

const clients = ["Charlotte", "Jerry Wise", "Crypto Archie", "Jordan Platten", "Mace"];

export default function ClientMarquee() {
  const [offset, setOffset] = useState(0);

  const prev = () => setOffset((offset - 1 + clients.length) % clients.length);
  const next = () => setOffset((offset + 1) % clients.length);

  const displayList = [...clients.slice(offset), ...clients.slice(0, offset), ...clients.slice(offset), ...clients.slice(0, offset)];

  return (
    <section className="clients client-marquee section-pad" aria-labelledby="clients-title">
      <div className="section-kicker reveal">
        <span>03</span>
        <span>In good company</span>
      </div>
      <div className="clients-heading reveal">
        <div>
          <h2 id="clients-title">Clients we have<br /><em>worked with.</em></h2>
        </div>
        <p>Names, launches, and communities we’ve helped move forward.</p>
      </div>

      <div className="client-carousel-wrap reveal">
        <div className="client-carousel" id="logo-carousel" aria-label="Clients list">
          {displayList.map((name, i) => (
            <div className="logo-card" key={i}>
              <span>{name}</span>
            </div>
          ))}
        </div>
        <div className="carousel-controls" aria-label="Client carousel controls">
          <button type="button" aria-label="Previous clients" onClick={prev}>←</button>
          <button type="button" aria-label="Next clients" onClick={next}>→</button>
        </div>
      </div>

      <p className="clients-note reveal">
        <span className="asterisk">✹</span> Selected collaborators, 2016–2026
      </p>
    </section>
  );
}
