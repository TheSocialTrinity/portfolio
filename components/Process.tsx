import React from 'react';

export default function Process() {
  return (
    <section className="process section-pad" id="process" aria-labelledby="process-title">
      <div className="section-kicker reveal">
        <span>05</span>
        <span>How we work</span>
        <span className="kicker-rule"></span>
      </div>
      <div className="process-heading reveal">
        <h2 id="process-title">What we did<br /><em>for them.</em></h2>
        <p>Five clear moves from attention to momentum, built around what your audience is ready for next.</p>
      </div>
      <div className="process-grid">
        <article className="process-card reveal">
          <span>01</span>
          <h3>Get attention</h3>
          <p>Find the hook, format, and point of view that makes the right people stop.</p>
        </article>
        <article className="process-card reveal reveal-delay">
          <span>02</span>
          <h3>Start conversation</h3>
          <p>Turn passive views into comments, DMs, replies, and useful signals.</p>
        </article>
        <article className="process-card reveal reveal-delay-two">
          <span>03</span>
          <h3>Build trust</h3>
          <p>Make your ideas easier to understand, remember, and believe in.</p>
        </article>
        <article className="process-card reveal">
          <span>04</span>
          <h3>Drive action</h3>
          <p>Give warm people a clear next step that feels natural, not forced.</p>
        </article>
        <article className="process-card reveal reveal-delay">
          <span>05</span>
          <h3>Scale momentum</h3>
          <p>Read what works, repeat the signal, and grow the system with intention.</p>
        </article>
      </div>
    </section>
  );
}
