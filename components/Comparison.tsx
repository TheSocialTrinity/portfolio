import React from 'react';

export default function Comparison() {
  return (
    <section className="comparison section-pad" id="comparison" aria-labelledby="comparison-title">
      <div className="section-kicker kicker-inverse reveal">
        <span>06</span>
        <span>Why us</span>
      </div>
      <div className="comparison-heading reveal">
        <h2 id="comparison-title">
          Not more noise.<br />
          <em>More of the right work.</em>
        </h2>
        <p>Most agencies add layers. We keep the distance between the idea and the outcome short.</p>
      </div>
      <div className="comparison-table-wrap reveal">
        <table className="comparison-table">
          <thead>
            <tr>
              <th scope="col">The difference</th>
              <th scope="col">The Social Trinity</th>
              <th scope="col">Other agencies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">The team</th>
              <td><span className="bullet">●</span> Three named people, close to the work</td>
              <td>Layers between you and the makers</td>
            </tr>
            <tr>
              <th scope="row">The work</th>
              <td><span className="bullet">●</span> Strategy, content, and action in one loop</td>
              <td>Separate deliverables across separate teams</td>
            </tr>
            <tr>
              <th scope="row">The pace</th>
              <td><span className="bullet">●</span> Quick conversations, useful decisions</td>
              <td>Longer timelines and bigger handoffs</td>
            </tr>
            <tr>
              <th scope="row">The goal</th>
              <td><span className="bullet">●</span> Attention that moves people to act</td>
              <td>Output that looks finished</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
