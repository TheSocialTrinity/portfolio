import React from 'react';

export default function Comparison() {
  return (
    <section className="comparison section-pad" id="comparison" aria-labelledby="comparison-title">
      <div className="section-kicker reveal">
        <span>06</span>
        <span>Why us</span>
        <span className="kicker-rule"></span>
      </div>
      <div className="comparison-heading reveal">
        <h2 id="comparison-title">Not more noise.<br /><em>More of the right work.</em></h2>
        <p>Most agencies add layers. We keep the distance between the idea and the outcome short.</p>
      </div>
      <div className="comparison-table reveal" role="table" aria-label="The Social Trinity compared with typical agencies">
        <div className="comparison-row comparison-head" role="row">
          <span role="columnheader">The difference</span>
          <strong role="columnheader">The Social Trinity</strong>
          <span role="columnheader">Other agencies</span>
        </div>
        <div className="comparison-row" role="row">
          <span role="rowheader">The team</span>
          <strong role="cell">Three named people, close to the work</strong>
          <span role="cell">Layers between you and the makers</span>
        </div>
        <div className="comparison-row" role="row">
          <span role="rowheader">The work</span>
          <strong role="cell">Strategy, content, and action in one loop</strong>
          <span role="cell">Separate deliverables across separate teams</span>
        </div>
        <div className="comparison-row" role="row">
          <span role="rowheader">The pace</span>
          <strong role="cell">Quick conversations, useful decisions</strong>
          <span role="cell">Longer timelines and bigger handoffs</span>
        </div>
        <div className="comparison-row" role="row">
          <span role="rowheader">The goal</span>
          <strong role="cell">Attention that moves people to act</strong>
          <span role="cell">Output that looks finished</span>
        </div>
      </div>
    </section>
  );
}
