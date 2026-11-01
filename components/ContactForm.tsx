'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get('name') as string;
    setStatus(`Thanks${name ? ', ' + name : ''} — your note is on its way.`);
    e.currentTarget.reset();
  };

  return (
    <section className="contact section-pad" id="contact" aria-labelledby="contact-title">
      <div className="section-kicker reveal">
        <span>08</span>
        <span>Free strategy</span>
        <span className="kicker-rule"></span>
      </div>
      <div className="contact-panel reveal">
        <div className="contact-intro">
          <p className="eyebrow"><span className="eyebrow-dot"></span> Ready when you are</p>
          <h2 id="contact-title">Claim your<br /><em>free strategy.</em></h2>
          <p>Bring us your audience, your stuck point, or your next big idea. We’ll show you where the next move is.</p>
          <div className="contact-direct">
            <span>Or drop us a line</span>
            <a href="mailto:hello@socialtrinity.co">hello@socialtrinity.co <span>↗</span></a>
          </div>
        </div>
        <form className="contact-form" id="consultation-form" onSubmit={handleSubmit}>
          <label>
            What’s your name?
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Where can we reach you?
            <input name="email" type="email" placeholder="you@company.com" required />
          </label>
          <label>
            What’s on your mind?
            <textarea name="message" rows={3} placeholder="A new brand, a brave pivot, a big idea…" required></textarea>
          </label>
          <button className="button button-light" type="submit">
            Book a call <span>↗</span>
          </button>
          <p className="form-status" id="form-status" role="status" aria-live="polite">{status}</p>
        </form>
      </div>
    </section>
  );
}
