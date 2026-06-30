import PageHero from '../../components/PageHero';
import Icon from '../../components/Icon';
import { staffingSchema, staffingFaqSchema } from './schema';

export const metadata = {
  title: 'Align USA Staffing Solutions — Contract, Contract-to-Hire & EOR Hiring',
  description:
    'Align USA Group offers staffing solutions for US companies: contract staffing, contract-to-hire, and EOR-style hiring with compliance. Houston-based team, E-Verify enrolled.',
  keywords: [
    'Align USA staffing',
    'Align USA staff',
    'Houston staffing agency',
    'US staffing company',
    'IT staffing Texas',
    'contract staffing USA',
    'contract-to-hire staffing',
    'EOR staffing',
    'payroll staffing',
    'staffing solutions Houston',
    'Align USA hiring',
    'Align USA recruiters',
    'temporary staffing USA',
    'staffing firm Houston',
    'international student staffing',
    'OPT CPT staffing',
  ],
  openGraph: {
    title: 'Align USA Staffing Solutions — Contract, Contract-to-Hire & EOR Hiring',
    description:
      'Houston-based staffing solutions from Align USA. Contract, contract-to-hire, and EOR hiring with full compliance for US companies.',
  },
};

const funnel = [
  ['Sourcing', 'Bench + active outreach', '420'],
  ['Screening', 'Recruiter + tech screen', '180'],
  ['Assessment', 'Async + live coding', '72'],
  ['Client Interview', 'US-led', '24'],
  ['Compliance', 'I-9, OPT, contracts', '12'],
  ['Onboarding', 'Day-one ready', '9'],
];

const models = [
  {
    t: 'Contract Staffing',
    d: 'Individual contractors placed against specific roles. Fastest path to a body in the seat. Align USA delivers contract staffing nationwide.',
    f: ['Roles in 7-14 days', 'W-2 / 1099 / C2C', 'Renewable monthly'],
  },
  {
    t: 'Dedicated Remote Team',
    d: 'A full pod of engineers, recruiters, or analysts on long-term retainer. Align USA provides dedicated remote teams for US companies.',
    f: ['4-20 person pods', 'Quarterly billing', 'Pod lead included'],
  },
  {
    t: 'Employer of Record',
    d: 'We hold the employment relationship; you direct the work. Compliance off your desk. Align USA EOR services simplify your workforce.',
    f: ['Global coverage', 'Local payroll', 'Statutory benefits'],
  },
];

const compliance = [
  'Right-to-work verification',
  'I-9 + supporting documents',
  'OPT / CPT / H-1B review',
  'Background & reference checks',
  'Payroll & tax setup',
  'Day-one onboarding artifacts',
];

const stats = [
  ['Time-zone Overlap', '5+ hours daily by default'],
  ['Time-to-Shortlist', 'Roles closed in under 14 days'],
  ['Retention', '12-month retention above 90%'],
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://alignusagroup.com' },
    { '@type': 'ListItem', position: 2, name: 'Staffing', item: 'https://alignusagroup.com/staffing' },
  ],
};

export default function StaffingPage() {
  return (
    <>
      <PageHero
        crumb="Staffing Solutions"
        title="Align USA Staffing — Hire Across the Globe Without Losing the Thread"
        lead="Align USA offers contract roles, dedicated teams, and international student programs — a single staffing partner that handles US compliance from day one."
      />

      <section className="section surface-light">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">Hiring Funnel</div>
              <h2 className="display-l">Align USA Runs a Six-Stage Funnel, Instrumented End to End</h2>
            </div>
            <p className="lead">
              Align USA tunes the funnel for your role family — adjusting screen depth, time zones, and assessment style
              to match your in-house bar.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 12 }} className="funnel">
            {funnel.map(([t, d, n], i) => (
              <div
                key={t}
                className={'reveal reveal-d' + (i + 1)}
                style={{
                  padding: 24,
                  borderRadius: 19,
                  background: '#fff',
                  border: '1px solid #ececec',
                  boxShadow: 'var(--shadow-1)',
                  position: 'relative',
                }}
              >
                <div style={{ fontSize: 11, color: 'var(--ps-blue)', letterSpacing: 1.4, fontWeight: 600, marginBottom: 10 }}>
                  STAGE {(i + 1).toString().padStart(2, '0')}
                </div>
                <h3 style={{ margin: '0 0 6px', fontSize: 16, fontWeight: 500 }}>{t}</h3>
                <p style={{ margin: '0 0 14px', fontSize: 13, color: 'var(--body-gray)', lineHeight: 1.5 }}>{d}</p>
                <div style={{ fontSize: 32, fontWeight: 300, color: 'var(--charcoal)', letterSpacing: -1 }}>{n}</div>
                <div style={{ fontSize: 11, color: 'var(--body-gray)', textTransform: 'uppercase', letterSpacing: 1.2, fontWeight: 600 }}>
                  candidates
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-mist">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">Engagement Models</div>
              <h2 className="display-l">Align USA Staffing — Pick the Shape That Matches Your Scale</h2>
            </div>
          </div>
          <div className="grid-3">
            {models.map((m, i) => (
              <article key={m.t} className={'card lift reveal reveal-d' + (i + 1)}>
                <h3 style={{ margin: '0 0 12px', fontSize: 22, fontWeight: 300 }}>{m.t}</h3>
                <p className="body" style={{ margin: '0 0 20px' }}>{m.d}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                  {m.f.map((x) => (
                    <li key={x} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--charcoal)' }}>
                      <span style={{ color: 'var(--ps-blue)' }} aria-hidden="true">
                        <Icon name="check" size={16} alt="" />
                      </span>
                      {x}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-dark-grad">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="reveal">
              <div className="eyebrow-light">Compliance Workflow</div>
              <h2 className="display-l" style={{ color: '#fff', marginTop: 8 }}>Align USA Ensures Audit-Ready Hiring by Design</h2>
              <p className="body-lg reveal" style={{ color: '#bcc6e3', marginTop: 16 }}>
                Every Align USA placement runs through a documented compliance workflow — I-9 verification, work
                authorization, OPT/CPT review, payroll setup, and onboarding artifacts — owned by US-based compliance leads.
              </p>
            </div>
            <div className="reveal reveal-d1">
              <div className="card-dark">
                <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
                  {compliance.map((s, i) => (
                    <li
                      key={s}
                      style={{
                        display: 'flex',
                        gap: 14,
                        alignItems: 'center',
                        padding: '14px 18px',
                        borderRadius: 12,
                        background: 'rgba(255,255,255,.04)',
                        border: '1px solid rgba(255,255,255,.08)',
                      }}
                    >
                      <span
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          background: 'var(--ps-blue)',
                          color: '#fff',
                          display: 'grid',
                          placeItems: 'center',
                          fontWeight: 600,
                          fontSize: 13,
                          flexShrink: 0,
                        }}
                      >
                        {(i + 1).toString().padStart(2, '0')}
                      </span>
                      <span style={{ color: '#fff', fontSize: 15 }}>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section surface-light">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">Industries We Staff</div>
              <h2 className="display-l">Align USA Staffing Runs Deepest in These Industries</h2>
            </div>
          </div>
          <div className="chip-row reveal" style={{ gap: 12 }}>
            {[
              'Healthcare Support',
              'Legal & Compliance',
              'Education & Student Programs',
              'Payroll & HR Tech',
              'Financial Services',
              'Technology Platforms',
              'Professional Services',
              'Public Sector',
            ].map((t) => (
              <span key={t} className="chip" style={{ padding: '10px 16px', fontSize: 14 }}>{t}</span>
            ))}
          </div>
          <div className="grid-3" style={{ marginTop: 48 }}>
            {stats.map(([t, d], i) => (
              <div key={t} className={'reveal reveal-d' + (i + 1)} style={{ padding: 24, borderLeft: '2px solid var(--ps-blue)' }}>
                <div style={{ fontSize: 32, fontWeight: 300, letterSpacing: -1 }}>{t}</div>
                <div style={{ marginTop: 6, color: 'var(--body-gray)' }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(staffingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(staffingFaqSchema) }}
      />
    </>
  );
}
