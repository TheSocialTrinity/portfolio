'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending your inquiry...');

    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = (fd.get('name') as string) || '';
    const email = (fd.get('email') as string) || '';
    const message = (fd.get('message') as string) || '';

    try {
      const response = await fetch('https://formsubmit.co/ajax/socialtrinityofficial@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `New Strategy Inquiry from ${name || 'Website Visitor'}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setStatus(`Thanks${name ? ', ' + name : ''} — your inquiry has been sent to our team!`);
        form.reset();
      } else {
        // Fallback: trigger mailto so inquiry is never lost
        window.location.href = `mailto:socialtrinityofficial@gmail.com?subject=${encodeURIComponent('Strategy Inquiry from ' + name)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message)}`;
        setStatus(`Thanks${name ? ', ' + name : ''} — your note is on its way.`);
      }
    } catch {
      // Fallback
      window.location.href = `mailto:socialtrinityofficial@gmail.com?subject=${encodeURIComponent('Strategy Inquiry from ' + name)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message)}`;
      setStatus(`Thanks${name ? ', ' + name : ''} — your note is on its way.`);
    } finally {
      setIsSubmitting(false);
    }
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
            <a href="mailto:socialtrinityofficial@gmail.com">
              socialtrinityofficial@gmail.com <span>↗</span>
            </a>
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
          <button className="button button-light" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Book a call'} <span>↗</span>
          </button>
          {status && (
            <p className="form-status" id="form-status" role="status" aria-live="polite">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
