'use client';

import React from 'react';

interface CaseStudiesProps {
  onOpenCase: (id: string) => void;
}

export default function CaseStudies({ onOpenCase }: CaseStudiesProps) {
  return (
    <section className="portfolio-preview section-pad" id="work" aria-labelledby="portfolio-title">
      <div className="section-kicker reveal">
        <span>02</span>
        <span>Portfolio</span>
        <span className="kicker-rule"></span>
      </div>
      <div className="portfolio-heading reveal">
        <h2 id="portfolio-title">Case study</h2>
        <p>A few good ones, made memorable.</p>
      </div>
      <div className="portfolio-grid">
        {/* Jerry Wise */}
        <article className="portfolio-card portfolio-card-jerry reveal">
          <div className="portfolio-visual">
            <span>JERRY<br /><em>WISE</em></span>
            <small>YouTube + Retention + Funnel</small>
          </div>
          <div className="portfolio-card-copy">
            <p>Jerry Wise / 2025–2026</p>
            <h3>From reach to retention,<br /><em>rebuilt in 20 months.</em></h3>
            <dl className="card-stats">
              <div><dt>Regular viewers</dt><dd>9.3%</dd></div>
              <div><dt>Revenue</dt><dd>$821K</dd></div>
              <div><dt>Views</dt><dd>28.3M</dd></div>
            </dl>
            <button className="case-trigger" type="button" onClick={() => onOpenCase('jerry-wise')}>
              View full case study <span>↗</span>
            </button>
          </div>
        </article>

        {/* Charlotte Hazelwood */}
        <article className="portfolio-card portfolio-card-charlotte reveal reveal-delay">
          <div className="portfolio-visual">
            <span>CHARLOTTE<br /><em>HAZELWOOD</em></span>
            <small>Social Growth + Funnel + Challenge</small>
          </div>
          <div className="portfolio-card-copy">
            <p>Charlotte Hazelwood / 2025–2026</p>
            <h3>From 3.5M to 108M+ views<br /><em>in 12 months.</em></h3>
            <dl className="card-stats">
              <div><dt>Total views</dt><dd>108.2M</dd></div>
              <div><dt>Reach</dt><dd>59.9M</dd></div>
              <div><dt>Hot leads</dt><dd>41.4K</dd></div>
            </dl>
            <button className="case-trigger" type="button" onClick={() => onOpenCase('charlotte-hazelwood')}>
              View full case study <span>↗</span>
            </button>
          </div>
        </article>

        {/* Crypto Archie */}
        <article className="portfolio-card portfolio-card-archie reveal reveal-delay-two">
          <div className="portfolio-visual">
            <span>CRYPTO<br /><em>ARCHIE</em></span>
            <small>Content + Retention + Measurement</small>
          </div>
          <div className="portfolio-card-copy">
            <p>Crypto Archie / 2026</p>
            <h3>A business rebuilt<br /><em>in five months.</em></h3>
            <dl className="card-stats">
              <div><dt>Recurring rev</dt><dd>+103.6%</dd></div>
              <div><dt>Monthly churn</dt><dd>-59.9%</dd></div>
              <div><dt>Net subs</dt><dd>+1,835</dd></div>
            </dl>
            <button className="case-trigger" type="button" onClick={() => onOpenCase('crypto-archie')}>
              View full case study <span>↗</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
