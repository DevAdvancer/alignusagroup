import Link from 'next/link';
import Counter from '../components/Counter';
import Icon from '../components/Icon';

export const metadata = {
  title: 'Align USA Group — Staffing, Software, Consulting | Houston, TX',
  description:
    'Align USA Group offers staffing solutions, custom software development, and consulting services for US companies. Houston-based team, E-Verify enrolled. Build your team with Align today.',
  keywords: [
    'Align USA',
    'Align USA Group',
    'Align staffing',
    'Houston staffing company',
    'staffing solutions USA',
    'software development Houston',
    'custom software development',
    'IT staffing Texas',
    'consulting Houston',
    'business consulting USA',
    'E-Verify staffing',
    'contract staffing',
    'contract-to-hire',
    'software agency Houston',
    'staffing agency Texas',
    'workforce solutions',
    'Align',
    'Align USA consulting',
  ],
  openGraph: {
    title: 'Align USA Group — Staffing, Software, Consulting | Houston, TX',
    description:
      'Houston-based Align USA Group: staffing solutions, custom software development, and business consulting. Compliance-ready hiring from day one.',
  },
};

const services = [
  {
    i: 'users',
    t: 'Staffing Solutions',
    d: 'Contract, contract-to-hire, and student-workforce hiring with payroll and EOR-style support — all run from Houston, TX. Align USA staffing services for US companies.',
    items: [
      'Contract & contract-to-hire',
      'Dedicated remote teams',
      'International student workforce',
      'Payroll & compliance',
      'EOR-style engagement',
    ],
    to: '/staffing',
  },
  {
    i: 'code',
    t: 'Software Development',
    d: 'Custom platforms, automation systems, and enterprise integrations — from MVP to scale. Houston-based software development by Align USA.',
    items: [
      'Custom web applications',
      'Automation & internal tools',
      'Enterprise integrations',
      'MVP for startups',
      'Maintenance & support',
    ],
    to: '/software',
  },
  {
    i: 'compass',
    t: 'Consulting Services',
    d: 'Workforce strategy, compliance advisory, and operating models that help US teams scale responsibly. Business consulting from Align USA.',
    items: [
      'Workforce strategy',
      'Compliance consulting',
      'Process optimization',
      'Technology advisory',
      'Team build-outs',
    ],
    to: '/consulting',
  },
];

const industries = [
  ['Healthcare Support', 'HIPAA-aware staffing & internal tools'],
  ['Legal & Compliance', 'Document workflow, e-signature, audit trails'],
  ['Staffing Firms', 'Pipeline systems, payroll automation'],
  ['Education', 'International student programs, OPT/CPT'],
  ['Payroll & HR Tech', 'Core processing & integration partners'],
  ['Startups', 'Fractional engineering & MVP delivery'],
  ['Technology', 'Platform extension & team build-outs'],
  ['Public Sector', 'Process optimization & advisory'],
];

const indIcons = ['shield', 'doc', 'users', 'globe', 'briefcase', 'spark', 'cube', 'pin'];

const trust = [
  {
    t: 'Texas LLC',
    d: 'Registered in Houston as Advance Leadership and Integrated Group of Networking LLC. Align USA Group operates as a Texas-based company.',
  },
  {
    t: 'E-Verify Enrolled',
    d: 'Federally enrolled to verify the work authorization of every hire we place. Align USA ensures compliance from day one.',
  },
  {
    t: 'Houston-Based Team',
    d: 'Account leadership, recruiting, and engineering operate out of one US time zone. Align USA serves clients from Houston, TX.',
  },
  {
    t: 'Founder-Led',
    d: 'You work directly with the people accountable for delivery — no handoffs to lose. Align USA is led by founders who care.',
  },
];

const processSteps = [
  ['01', 'Discovery', 'Goals, constraints, success metrics.'],
  ['02', 'Scoping', 'Engagement model & roles defined.'],
  ['03', 'Mobilization', 'Team assembled, contracts signed.'],
  ['04', 'Delivery', 'Sprints, sourcing, and onboarding.'],
  ['05', 'Optimization', 'QBRs, performance & throughput.'],
  ['06', 'Scale', 'Add capacity or new workstreams.'],
];

// Breadcrumb JSON-LD for home page
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://alignusagroup.com',
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero surface-dark-grad" aria-labelledby="hero-heading">
        <div className="hero-bg" />
        <div className="container hero-grid">
          <div>
            <div className="reveal in" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
              <span className="pill on-dark">
                <span className="dot" /> Houston, TX · USA-Focused · Align USA
              </span>
            </div>
            <h1 id="hero-heading" className="display-xl reveal in">
              Align USA — Staffing, Software, and Consulting for US Companies
            </h1>
            <p className="lead reveal in reveal-d1">
              Align USA Group helps US companies scale with staffing solutions, compliance-ready onboarding, and custom
              software development — built and delivered by a Houston-based team that handles the operating discipline
              so you don&apos;t have to. Align your business with Align USA.
            </p>
            <div className="hero-cta reveal in reveal-d2">
              <Link className="btn btn-primary btn-lg" href="/staffing">Hire Talent</Link>
              <Link className="btn btn-secondary btn-lg" href="/software">Build Software</Link>
              <Link className="btn btn-ghost on-dark btn-lg" href="/contact">Book Consultation</Link>
            </div>
          </div>
          <div className="globe-scene reveal in reveal-d2" aria-hidden="true">
            <div className="arc a2" />
            <div className="arc" />
            <div className="arc a3" />
            <div className="globe">
              <div className="meridian" />
              <div className="meridian m2" />
              <div className="meridian m3" />
              <div className="lat l1" />
              <div className="lat l2" />
              <div className="lat l3" />
              <div className="node usa" />
              <div className="node eu" />
              <div className="node india" />
              <div className="node sg" />
              <div className="node br" />
            </div>
            <div className="float-card fc1">
              <div className="label">Houston · HQ</div>
              <div style={{ fontWeight: 500 }}>Account leadership</div>
            </div>
            <div className="float-card fc2">
              <div className="label">USA · Delivery</div>
              <div style={{ fontWeight: 500 }}>Engineering & recruiting</div>
            </div>
            <div className="float-card fc3">
              <div className="label">Compliance</div>
              <div style={{ fontWeight: 500 }}>I-9, OPT, CPT ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section surface-light" aria-labelledby="services-heading">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">What we do</div>
              <h2 id="services-heading" className="display-l">
                Align USA — Staffing, Software, and Consulting Services
              </h2>
            </div>
            <p className="lead">
              Each Align USA service runs on the same Houston-based delivery model — consistent experience whether you
              are hiring, building, or transforming. Align USA serves companies across the United States.
            </p>
          </div>
          <div className="grid-3">
            {services.map((s, idx) => (
              <article key={s.t} className={'card reveal reveal-d' + (idx + 1)}>
                <div className="svc-icon" aria-hidden="true">
                  <Icon name={s.i} size={26} alt={`${s.t} icon`} />
                </div>
                <h3 className="display-s" style={{ margin: '0 0 12px', fontWeight: 500, color: 'var(--charcoal)' }}>
                  {s.t}
                </h3>
                <p className="body" style={{ margin: '0 0 20px' }}>
                  {s.d}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'grid', gap: 10 }}>
                  {s.items.map((it) => (
                    <li key={it} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--charcoal)' }}>
                      <span style={{ color: 'var(--ps-blue)', flexShrink: 0 }} aria-hidden="true">
                        <Icon name="check" size={16} alt="" />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
                <Link className="btn btn-secondary btn-mini" href={s.to}>
                  Explore {s.t} <span className="btn-arrow" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section surface-mist" aria-labelledby="industries-heading">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">Industries</div>
              <h2 id="industries-heading" className="display-l">
                Align USA Serves Industries Where Compliance and Velocity Coexist
              </h2>
            </div>
            <p className="lead">
              Align USA Group&apos;s blend of staffing rigor and engineering judgment maps cleanly onto regulated
              industries where compliance and speed have to coexist across the United States.
            </p>
          </div>
          <div className="grid-4">
            {industries.map(([t, d], i) => (
              <Link
                key={t}
                href="/industries"
                className={'card lift reveal reveal-d' + ((i % 4) + 1)}
                style={{ textDecoration: 'none', color: 'inherit', padding: 24 }}
                aria-label={`${t} industry - ${d}`}
              >
                <div className="svc-icon" style={{ width: 44, height: 44, borderRadius: 12, marginBottom: 14 }} aria-hidden="true">
                  <Icon name={indIcons[i]} size={20} alt="" />
                </div>
                <h3 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 500, letterSpacing: -0.1 }}>{t}</h3>
                <p style={{ margin: 0, fontSize: 13.5, color: 'var(--body-gray)', lineHeight: 1.5 }}>{d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section surface-light" aria-labelledby="trust-heading">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">Why Align USA</div>
              <h2 id="trust-heading" className="display-l">
                A Young Texas Firm with the Discipline of a Mature One
              </h2>
            </div>
            <p className="lead">
              Align USA Group is a Texas startup, founded in 2026 — but runs with the operating discipline of a much
              older practice. Compliance from day one, no surprise handoffs, and a team you can reach by name.
            </p>
          </div>
          <div className="grid-4">
            {trust.map((x, i) => (
              <div key={x.t} className={'card lift reveal reveal-d' + (i + 1)} style={{ padding: 28 }}>
                <h3 style={{ margin: '0 0 10px', fontSize: 17, fontWeight: 600 }}>{x.t}</h3>
                <p style={{ margin: 0, color: 'var(--body-gray)', fontSize: 14, lineHeight: 1.55 }}>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section surface-navy" aria-labelledby="process-heading">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow-light">Engagement Process</div>
              <h2 id="process-heading" className="display-l" style={{ color: '#fff' }}>
                Align USA Delivers in Six Structured Stages
              </h2>
            </div>
          </div>
          <div className="process">
            {processSteps.map(([n, t, d], i) => (
              <div key={n} className={'proc-step reveal reveal-d' + ((i % 6) + 1)}>
                <div className="n">{n}</div>
                <h3 style={{ color: '#fff', fontSize: 16, fontWeight: 500, margin: '8px 0' }}>{t}</h3>
                <p style={{ color: '#bcc6e3', fontSize: 13 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="surface-dark" style={{ padding: '72px 0' }} aria-label="Company statistics">
        <div className="container">
          <div className="metrics">
            <div className="metric reveal">
              <Counter to={10} suffix="+" />
              <div className="lab">Placements to date</div>
            </div>
            <div className="metric reveal reveal-d1">
              <Counter to={5} suffix="+" />
              <div className="lab">Projects delivered</div>
            </div>
            <div className="metric reveal reveal-d2">
              <Counter to={100} suffix="%" />
              <div className="lab">Client retention</div>
            </div>
            <div className="metric reveal reveal-d3">
              <div className="num"><span style={{ color: '#43c463', fontSize: '0.9em' }}>✓</span></div>
              <div className="lab">E-Verify enrolled</div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section surface-light" aria-labelledby="cta-heading">
        <div className="container">
          <div className="cta-banner reveal">
            <h2 id="cta-heading" className="display-l">
              Ready to Align Your Hiring, Compliance, and Roadmap?
            </h2>
            <p>
              Book a 30-minute consultation with Align USA. We will review your goals and map them to the right mix of
              staffing, software, and consulting for your US company.
            </p>
            <div className="row">
              <Link className="btn btn-primary btn-lg" href="/contact">Book Consultation</Link>
              <Link className="btn btn-ghost on-dark btn-lg" href="/services">Explore Align USA Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
