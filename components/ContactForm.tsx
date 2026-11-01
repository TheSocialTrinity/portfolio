'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get('name') as string;
    setStatus(`Thanks${name ? `, ${name}` : ''} — your note is on its way.`);
    e.currentTarget.reset();
  };

  return (
    <section className="contact section-pad" id="contact" aria-labelledby="contact-title">
      <div className="section-kicker kicker-inverse reveal">
        <span>08</span>
        <span>Free strategy</span>
      </div>
      <div className="contact-grid">
        <div className="contact-copy reveal">
          <p className="eyebrow"><span className="eyebrow-dot"></span> First move on us</p>
          <h2 id="contact-title">Claim your<br /><em>free strategy.</em></h2>
          <p>Bring us your audience, your stuck point, or your next big idea. We’ll show you where the next move is.</p>
          <div className="contact-direct">
            <span>Or drop us a line</span>
            <a href="mailto:hello@socialtrinity.co">hello@socialtrinity.co <span>↗</span></a>
          </div>
        </div>
        <form className="contact-form reveal reveal-delay" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="client-name">What’s your name?</label>
            <input type="text" id="client-name" name="name" required placeholder="Your name" />
          </div>
          <div className="form-field">
            <label htmlFor="client-email">Where can we reach you?</label>
            <input type="email" id="client-email" name="email" required placeholder="you@company.com" />
          </div>
          <div className="form-field">
            <label htmlFor="client-notes">What’s on your mind?</label>
            <textarea id="client-notes" name="notes" rows={3} placeholder="A new brand, a brave pivot, a big idea..."></textarea>
          </div>
          <button type="submit" className="button button-primary">Book a call <span>↗</span></button>
          {status && <p className="form-status" style={{ marginTop: '16px', color: '#f4efe8' }}>{status}</p>}
        </form>
      </div>
    </section>
  );
}
