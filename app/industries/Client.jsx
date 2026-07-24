'use client';
import { useState } from 'react';
import PageHero from '../../components/PageHero';
import Icon from '../../components/Icon';

export const metadata = {
  title: 'Industries Served by Align USA — Healthcare, Legal, Education & More',
  description:
    'Align USA Group serves healthcare, legal, education, staffing firms, payroll tech, startups, technology, and public sector industries. Our compliance-focused approach supports regulated environments.',
  keywords: [
    'Align USA industries',
    'industries we serve',
    'healthcare staffing',
    'legal staffing',
    'education staffing',
    'staffing industry',
    'payroll software industry',
    'startup staffing',
    'tech industry staffing',
    'public sector consulting',
    'Align USA healthcare',
    'Align USA legal',
    'Align USA education',
  ],
  openGraph: {
    title: 'Industries Served by Align USA — Healthcare, Legal, Education & More',
    description:
      'Align USA serves industries where compliance and velocity must coexist. Healthcare, legal, education, staffing firms, payroll tech, startups, and more.',
  },
};

const ind = [
  {
    t: 'Healthcare Support Services',
    d: 'HIPAA-aware staffing for revenue cycle, billing, and clinical operations support — plus internal tools for case routing and quality. Align USA understands healthcare compliance requirements.',
    i: 'shield',
    chips: ['IT Staffing', 'Non-IT Staffing', 'Background Checks', 'Compliance'],
  },
  {
    t: 'Legal Support Organizations',
    d: 'Document workflow, e-signature integrations, and audit-ready records management. Paralegals and engineers in the same engagement. Align USA delivers legal tech solutions.',
    i: 'doc',
    chips: ['Paralegals', 'Software', 'Records Compliance'],
  },
  {
    t: 'Staffing Firms',
    d: 'Pipeline systems, payroll automation, and back-office augmentation. We help other staffing firms run. Align USA provides software and operational support.',
    i: 'users',
    chips: ['Software', 'Bookkeeping', 'Admin Support'],
  },
  {
    t: 'Payroll & HR Companies',
    d: 'Core processing extensions, integration partners, and compliance modules — built and operated. Align USA builds payroll technology solutions.',
    i: 'briefcase',
    chips: ['Software', 'Integrations', 'Compliance'],
  },
  {
    t: 'Startups',
    d: 'Fractional engineering, MVP delivery, and the first compliance scaffold for fast-moving teams. Align USA helps startups scale.',
    i: 'spark',
    chips: ['IT Staffing', 'Software', 'Bookkeeping'],
  },
  {
    t: 'Education & International Student Programs',
    d: 'OPT/CPT compliance, employer matching, and student-facing portals at school-system scale. Align USA specializes in student workforce solutions.',
    i: 'globe',
    chips: ['Student Staffing', 'Software', 'Compliance'],
  },
  {
    t: 'Technology Companies',
    d: 'Platform extension, dedicated team build-outs, and enterprise integration practice — all under one roof. Align USA delivers engineering talent and software development.',
    i: 'cube',
    chips: ['IT Staffing', 'Software', 'Admin Support'],
  },
  {
    t: 'Professional Services & SMBs',
    d: 'Background checks, bookkeeping, admin support, and the staffing that keeps a growing team running. Align USA supports small and medium businesses.',
    i: 'pin',
    chips: ['Non-IT Staffing', 'Background Checks', 'Bookkeeping', 'Admin Support'],
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.alignusagroup.com' },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.alignusagroup.com/industries' },
  ],
};

export default function IndustriesPage() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <PageHero
        crumb="Industries"
        title="Industries Served by Align USA — Where Regulation and Scale Meet"
        lead="Align USA Group works in industries where compliance is a feature and where shipping faster cannot mean shipping looser. We staff both IT and non-IT roles across all industries we serve."
      />
      <section className="section surface-light">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <h2 className="display-l">Regulated Industries That Choose Align USA</h2>
            </div>
            <p className="lead">
              Align USA concentrates in industries where compliance matters and where scale requires both velocity and discipline.
            </p>
          </div>
          <div className="acc">
            {ind.map((x, i) => (
              <div
                key={x.t}
                className={'acc-row' + (open === i ? ' open' : '')}
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <div className="head">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: 'rgba(0,112,204,.08)',
                        color: 'var(--ps-blue)',
                        display: 'grid',
                        placeItems: 'center',
                      }}
                      aria-hidden="true"
                    >
                      <Icon name={x.i} size={20} alt="" />
                    </div>
                    <h3 style={{ margin: 0, fontSize: 18 }}>{x.t}</h3>
                  </div>
                  <div className="sym" aria-hidden="true">{open === i ? '−' : '+'}</div>
                </div>
                <div className="body">
                  <p style={{ margin: '8px 0 0', maxWidth: 720 }}>{x.d}</p>
                  <div className="chip-row" style={{ marginTop: 14 }}>
                    {x.chips.map((c) => (
                      <span key={c} className="chip">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
