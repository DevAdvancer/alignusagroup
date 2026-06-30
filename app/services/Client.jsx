'use client';
import { useState } from 'react';
import Link from 'next/link';
import PageHero from '../../components/PageHero';
import Icon from '../../components/Icon';

export const metadata = {
  title: 'Align USA Services — Staffing, Software & Consulting | Houston',
  description:
    'Align USA Group delivers three services under one operating model: staffing solutions, custom software development, and consulting for US companies. All services delivered from Houston, TX.',
  keywords: [
    'Align USA services',
    'Align USA staffing',
    'Align USA software development',
    'Align USA consulting',
    'Houston staffing services',
    'software development Houston',
    'business consulting Texas',
    'IT staffing USA',
    'custom software solutions',
    'staffing and consulting services',
  ],
  openGraph: {
    title: 'Align USA Services — Staffing, Software & Consulting',
    description:
      'Align USA delivers three services under one operating model: staffing, software, and consulting for US companies.',
  },
};

const pillars = [
  {
    id: 'staffing',
    icon: 'users',
    title: 'Align USA Staffing Solutions',
    tag: 'A',
    lead: 'Contract, contract-to-hire, and student-workforce hiring with payroll and EOR-style support. Align USA staffing ensures compliance from day one.',
    items: [
      'Contract staffing',
      'Contract-to-hire',
      'International student hiring support',
      'Payroll & compliance services',
      'Employer-of-record style support',
      'Dedicated remote teams',
    ],
  },
  {
    id: 'software',
    icon: 'code',
    title: 'Align USA Software Development',
    tag: 'B',
    lead: 'From MVP through enterprise integration — custom platforms built end-to-end by Align USA engineers.',
    items: [
      'Custom software development',
      'Web applications',
      'Automation systems',
      'Internal dashboards',
      'Enterprise integrations',
      'MVP development for startups',
    ],
  },
  {
    id: 'consulting',
    icon: 'compass',
    title: 'Align USA Consulting Services',
    tag: 'C',
    lead: 'Strategy and operating models that make scale predictable. Align USA consulting delivers actionable frameworks.',
    items: [
      'Workforce strategy consulting',
      'Compliance consulting',
      'Process optimization',
      'Technology advisory',
      'Scaling delivery teams',
    ],
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://alignusagroup.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://alignusagroup.com/services' },
  ],
};

export default function ServicesPage() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <PageHero
        crumb="Services"
        title="Align USA Services — Three Pillars, One Operating Model"
        lead="Align USA delivers staffing, software, and consulting under a single Houston-based operating cadence. Align USA makes it possible to transition from hiring to building without restarting the relationship."
      />

      <section className="section surface-light">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <h2 className="display-l">Align USA Services — Choose Your Starting Point</h2>
            </div>
            <p className="lead">
              Align USA Group combines three services under one delivery model. Whether you need talent, software, or strategic guidance, Align USA delivers with consistent quality.
            </p>
          </div>
          <div className="grid-3">
            {pillars.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setOpen(idx)}
                className={'card lift reveal reveal-d' + (idx + 1)}
                style={{
                  textAlign: 'left',
                  cursor: 'pointer',
                  border: open === idx ? '2px solid var(--ps-blue)' : '1px solid #ececec',
                }}
                aria-expanded={open === idx}
                aria-controls={`service-${p.id}`}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div className="svc-icon">
                    <Icon name={p.icon} size={26} alt={`${p.title} icon`} />
                  </div>
                  <span className="chip">{p.tag}</span>
                </div>
                <h3 style={{ margin: '0 0 12px', fontSize: 24, fontWeight: 300, letterSpacing: -0.2 }}>{p.title}</h3>
                <p className="body" style={{ margin: 0 }}>{p.lead}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-mist">
        <div className="container">
          {pillars.map((p, idx) => (
            <div key={p.id} id={`service-${p.id}`} style={{ display: open === idx ? 'block' : 'none' }} className="reveal in">
              <div className="grid-2" style={{ alignItems: 'flex-start' }}>
                <div>
                  <div className="eyebrow">Align USA Service {p.tag}</div>
                  <h2 className="display-l" style={{ marginTop: 8 }}>{p.title}</h2>
                  <p className="lead" style={{ marginTop: 16, color: 'var(--body-gray)' }}>{p.lead}</p>
                  <Link className="btn btn-primary" href={'/' + p.id} style={{ marginTop: 24 }}>
                    Learn more about Align USA {p.title.toLowerCase()} <span className="btn-arrow" />
                  </Link>
                </div>
                <div>
                  <div className="card" style={{ padding: 32 }}>
                    <div className="eyebrow" style={{ marginBottom: 16 }}>What Align USA provides</div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 16 }}>
                      {p.items.map((it, i) => (
                        <li
                          key={it}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 14,
                            padding: '14px 18px',
                            borderRadius: 12,
                            background: '#fff',
                            border: '1px solid #ececec',
                            transition: 'all 200ms ease',
                          }}
                        >
                          <span
                            style={{
                              width: 28,
                              height: 28,
                              borderRadius: '50%',
                              background: 'rgba(0,112,204,.08)',
                              color: 'var(--ps-blue)',
                              display: 'grid',
                              placeItems: 'center',
                              fontSize: 13,
                              fontWeight: 600,
                              flexShrink: 0,
                            }}
                            aria-hidden="true"
                          >
                            {(i + 1).toString().padStart(2, '0')}
                          </span>
                          <span style={{ fontSize: 15, fontWeight: 500 }}>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
