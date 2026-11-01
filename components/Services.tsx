'use client';

import React from 'react';

export const servicesList = [
  { number: "01", title: "Organic growth", description: "A content rhythm and point of view that earns attention without paying for every impression." },
  { number: "02", title: "Content strategy", description: "The themes, formats, and ideas that keep your audience coming back." },
  { number: "03", title: "Social media management", description: "Always-on publishing, community care, and a feed that sounds like you." },
  { number: "04", title: "Copywriting", description: "Words that make the value clear, the voice memorable, and the next step easy." },
  { number: "05", title: "Community engagement", description: "Replies, conversations, and small moments that turn followers into regulars." },
  { number: "06", title: "Branding & positioning", description: "A sharper place in the market and a brand people can recognize in a second." },
  { number: "07", title: "Analytics & reporting", description: "Useful numbers, honest readouts, and a plan for what to do next." }
];

interface ServicesProps {
  onSelectService: (num: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section className="services section-pad" id="services" aria-labelledby="services-title">
      <div className="section-kicker reveal">
        <span>07</span>
        <span>Our offerings</span>
        <span className="kicker-rule"></span>
      </div>
      <div className="section-heading-row reveal">
        <h2 id="services-title">What we<br /><em>offer.</em></h2>
        <p>Strategy, content, and the systems that turn attention into a brand people want to stay close to.</p>
      </div>
      <div className="services-grid" id="services-grid">
        {servicesList.map((s) => (
          <article
            className="service-card reveal"
            key={s.number}
            tabIndex={0}
            role="button"
            aria-label={`${s.title} details`}
            onClick={() => onSelectService(s.number)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectService(s.number);
              }
            }}
          >
            <span className="service-number">{s.number}</span>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <span className="service-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}
