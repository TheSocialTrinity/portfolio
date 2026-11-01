'use client';

import React from 'react';

interface CaseStudiesProps {
  onOpenCase: (id: string) => void;
}

export default function CaseStudies({ onOpenCase }: CaseStudiesProps) {
  return (
    <section className="portfolio-preview section-pad" id="work" aria-labelledby="portfolio-title">
      <div className="section-kicker kicker-inverse reveal">
        <span>02</span>
        <span>Portfolio</span>
      </div>
      <div className="portfolio-heading reveal">
        <h2 id="portfolio-title">Case study</h2>
        <p>A few good ones, made memorable.</p>
      </div>

      <div className="work-grid">
        {/* Card 1: Jerry Wise */}
        <article className="work-card work-card-case-study reveal" data-card="jerry-wise">
          <div className="case-thumb-box case-thumb-jerry-wise">
            <img src="/case-studies/jerry-wise/jerry-wise-thumb.png" alt="Jerry Wise Case Study Preview" className="case-thumb-img" />
          </div>
          <div className="work-card-content">
            <span className="case-badge">Jerry Wise / 2025–2026</span>
            <h3>From reach to retention, <em>rebuilt in 20 months.</em></h3>
            <div className="case-stat-row">
              <div className="case-stat">
                <strong>9.3%</strong>
                <small>Regular Viewers</small>
              </div>
              <div className="case-stat">
                <strong>$821K</strong>
                <small>Revenue</small>
              </div>
              <div className="case-stat">
                <strong>28.3M</strong>
                <small>Views</small>
              </div>
            </div>
            <button
              type="button"
              className="text-link case-study-trigger"
              onClick={() => onOpenCase('jerry-wise')}
            >
              View full case study <span>↗</span>
            </button>
          </div>
        </article>

        {/* Card 2: Charlotte Hazelwood */}
        <article className="work-card work-card-case-study reveal reveal-delay" data-card="charlotte-hazelwood">
          <div className="case-thumb-box case-thumb-charlotte-hazelwood">
            <img src="/case-studies/charlotte-hazelwood/charlotte-hazelwood-thumb.png" alt="Charlotte Hazelwood Case Study Preview" className="case-thumb-img" />
          </div>
          <div className="work-card-content">
            <span className="case-badge">Charlotte Hazelwood / 2025–2026</span>
            <h3>From 3.5M to 108M+ views <em>in 12 months.</em></h3>
            <div className="case-stat-row">
              <div className="case-stat">
                <strong>108.2M</strong>
                <small>Total Views</small>
              </div>
              <div className="case-stat">
                <strong>59.9M</strong>
                <small>Reach</small>
              </div>
              <div className="case-stat">
                <strong>41.4K</strong>
                <small>Hot Leads</small>
              </div>
            </div>
            <button
              type="button"
              className="text-link case-study-trigger"
              onClick={() => onOpenCase('charlotte-hazelwood')}
            >
              View full case study <span>↗</span>
            </button>
          </div>
        </article>

        {/* Card 3: Crypto Archie */}
        <article className="work-card work-card-case-study reveal reveal-delay-two" data-card="crypto-archie">
          <div className="case-thumb-box case-thumb-crypto-archie">
            <img src="/case-studies/crypto-archie/crypto-archie-thumb.png" alt="Crypto Archie Case Study Preview" className="case-thumb-img" />
          </div>
          <div className="work-card-content">
            <span className="case-badge">Crypto Archie / 2026</span>
            <h3>A business rebuilt <em>in five months.</em></h3>
            <div className="case-stat-row">
              <div className="case-stat">
                <strong>+103.6%</strong>
                <small>Recurring Rev</small>
              </div>
              <div className="case-stat">
                <strong>-59.9%</strong>
                <small>Monthly Churn</small>
              </div>
              <div className="case-stat">
                <strong>+1,835</strong>
                <small>Net Subs</small>
              </div>
            </div>
            <button
              type="button"
              className="text-link case-study-trigger"
              onClick={() => onOpenCase('crypto-archie')}
            >
              View full case study <span>↗</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
