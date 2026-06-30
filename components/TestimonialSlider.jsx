'use client';
import { useEffect, useState } from 'react';

const items = [
  {
    q: 'Align gave us a 9-person engineering pod in 17 days. Three quarters in, attrition is zero and our roadmap is back on track.',
    n: 'Maya Iyer',
    r: 'VP Engineering, Helix Health',
  },
  {
    q: 'They are the rare partner that takes I-9 and OPT compliance as seriously as we do. We stopped worrying about audits.',
    n: 'Daniel Chen',
    r: 'COO, Maple Education',
  },
  {
    q: 'The US strategy team translated our messy ask into a clear scope, and the India delivery team shipped it inside a quarter.',
    n: 'Priya Subramanian',
    r: 'CTO, Forge Labs',
  },
];

export default function TestimonialSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 7000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="section surface-mist">
      <div className="container" style={{ maxWidth: 920 }}>
        <div className="sec-head reveal" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <div style={{ flex: 1 }}>
            <div className="eyebrow" style={{ display: 'block' }}>What clients say</div>
            <h2 className="display-l">Quiet, durable partnerships.</h2>
          </div>
        </div>
        <div className="testimonial reveal">
          <blockquote key={i} style={{ animation: 'fadeIn 600ms ease' }}>
            {items[i].q}
          </blockquote>
          <div className="tt-meta">
            <div className="tt-avatar">
              {items[i].n
                .split(' ')
                .map((p) => p[0])
                .join('')}
            </div>
            <div>
              <div className="nm">{items[i].n}</div>
              <div className="rl">{items[i].r}</div>
            </div>
          </div>
          <div className="tt-controls">
            {items.map((_, idx) => (
              <button
                key={idx}
                className={'tt-dot' + (idx === i ? ' on' : '')}
                onClick={() => setI(idx)}
                aria-label={'Slide ' + (idx + 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
