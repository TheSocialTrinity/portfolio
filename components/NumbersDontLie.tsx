import React from 'react';

export default function NumbersDontLie() {
  return (
    <section className="results section-pad" id="results" aria-labelledby="results-title">
      <div className="section-kicker reveal">
        <span>04</span>
        <span>Big numbers</span>
      </div>
      <div className="results-heading reveal">
        <h2 id="results-title">
          The numbers<br /><em>don’t lie.</em>
        </h2>
        <p>Proof will live here: screenshots, results, and the numbers that made the work matter.</p>
      </div>
      <div className="numbers-grid">
        <div className="number-card reveal">
          <strong>137<span>M+</span></strong>
          <small>Total views generated</small>
        </div>
        <div className="number-card reveal">
          <strong>$945<span>K+</span></strong>
          <small>Client revenue created</small>
        </div>
        <div className="number-card reveal">
          <strong>95<span>K+</span></strong>
          <small>Qualified inbound leads</small>
        </div>
        <div className="number-card reveal">
          <strong>465<span>K+</span></strong>
          <small>New audience followers</small>
        </div>
      </div>
    </section>
  );
}
