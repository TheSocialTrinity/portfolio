import React from 'react';

const steps = [
  { num: '01', title: 'Get attention', desc: 'Find the hook, format, and point of view that makes the right people stop.' },
  { num: '02', title: 'Start conversation', desc: 'Turn passive views into comments, DMs, replies, and useful signals.' },
  { num: '03', title: 'Build trust', desc: 'Make your ideas easier to understand, remember, and believe in.' },
  { num: '04', title: 'Drive action', desc: 'Give warm people a clear next step that feels natural, not forced.' },
  { num: '05', title: 'Scale momentum', desc: 'Read what works, repeat the signal, and grow the system with intention.' }
];

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
      <div className="process-flow">
        {steps.map((s, i) => (
          <article className="process-step reveal" key={i}>
            <span className="step-count">{s.num}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
