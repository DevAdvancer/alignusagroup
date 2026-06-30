import Link from 'next/link';
import PageHero from '../../components/PageHero';
import { softwareSchema, softwareFaqSchema } from './schema';

export const metadata = {
  title: 'Align USA Software Development — Custom Platforms, Apps & Integrations',
  description:
    'Align USA Group delivers custom software development: web applications, automation systems, internal tools, and enterprise integrations. Houston-based engineering team. Build with Align USA.',
  keywords: [
    'Align USA software',
    'Align USA software development',
    'Houston software development',
    'custom software development USA',
    'web application development',
    'software agency Houston',
    'MVP development',
    'enterprise software integration',
    'automation software',
    'internal tools development',
    'Align USA app development',
    'software consulting Texas',
    'React development',
    'Next.js development',
    'custom platform development',
  ],
  openGraph: {
    title: 'Align USA Software Development — Custom Platforms, Apps & Integrations',
    description:
      'Houston-based software development from Align USA. Custom web applications, automation, enterprise integrations, and MVP delivery.',
  },
};

const lifecycle = [
  ['Discovery', 'Goals + constraints'],
  ['Design', 'Flows + UI'],
  ['Develop', 'Sprint cadence'],
  ['Test', 'QA + security'],
  ['Deploy', 'Staged rollout'],
  ['Support', 'SLAs + iterate'],
];

const tech = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis',
  'AWS', 'GCP', 'Kubernetes', 'Terraform', 'Stripe', 'Snowflake', 'Airflow', 'dbt', 'OpenAI', 'Twilio',
];

const models = [
  ['Fixed-Scope MVP', 'Defined scope, fixed timeline. Best for first products and validation builds.', '6-12 weeks'],
  ['Dedicated Pod', 'A long-running team aligned to your roadmap, with a US-based tech lead.', '3+ months'],
  ['Specialist Sprint', 'A focused team for a specific outcome — integration, audit, hardening, migration.', '2-6 weeks'],
];

const cases = [
  { t: 'Helix Health Pipeline', m: 'HEALTHCARE · 9 WEEKS', d: 'Align USA replaced a manual referral pipeline with an automated case-routing platform.' },
  { t: 'Maple Education Portal', m: 'EDUCATION · 14 WEEKS', d: 'Align USA built OPT/CPT compliance and student-employer matching for 18,000 students.' },
  { t: 'Stanton Legal Vault', m: 'LEGAL · 10 WEEKS', d: 'Align USA delivered document workflow with audit trails and e-signature integration.' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://alignusagroup.com' },
    { '@type': 'ListItem', position: 2, name: 'Software Development', item: 'https://alignusagroup.com/software' },
  ],
};

export default function SoftwarePage() {
  return (
    <>
      <PageHero
        crumb="Software Development"
        title="Align USA Software — Custom Platforms and Automations, Shipped Quietly"
        lead="Align USA Group builds MVPs that land in eight weeks and enterprise integrations that last eight years — one team, one delivery cadence."
      />

      <section className="section surface-light">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">Delivery Lifecycle</div>
              <h2 className="display-l">Align USA Software — Discovery to Design to Develop to Test to Deploy to Support</h2>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 12, position: 'relative' }} className="funnel">
            {lifecycle.map(([t, d], i) => (
              <div key={t} className={'card lift reveal reveal-d' + (i + 1)} style={{ padding: '24px 20px', position: 'relative' }}>
                <div
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
                    marginBottom: 14,
                  }}
                  aria-hidden="true"
                >
                  {(i + 1).toString().padStart(2, '0')}
                </div>
                <h3 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 500 }}>{t}</h3>
                <p style={{ margin: 0, fontSize: 13, color: 'var(--body-gray)' }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-mist">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">Tech Stack</div>
              <h2 className="display-l">Align USA Software — Opinionated Where It Counts, Pragmatic Everywhere Else</h2>
            </div>
            <p className="lead">Align USA picks boring, durable defaults — and overrides them only when the problem demands it.</p>
          </div>
          <div className="tech-grid">
            {tech.map((t, i) => (
              <div key={t} className="tech-tile reveal" style={{ transitionDelay: i * 20 + 'ms' }}>{t}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-light">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">Engagement Models</div>
              <h2 className="display-l">Align USA Software — Three Ways to Start a Build</h2>
            </div>
          </div>
          <div className="grid-3">
            {models.map(([t, d, e], i) => (
              <article key={t} className={'card lift reveal reveal-d' + (i + 1)}>
                <div className="chip" style={{ marginBottom: 14 }}>{e}</div>
                <h3 style={{ margin: '0 0 12px', fontSize: 22, fontWeight: 300 }}>{t}</h3>
                <p className="body" style={{ margin: 0 }}>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-mist">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">Selected Work</div>
              <h2 className="display-l">Align USA Software — A Few Projects We Can Talk About</h2>
            </div>
            <Link className="btn btn-secondary" href="/case-studies">All Case Studies <span className="btn-arrow" /></Link>
          </div>
          <div className="grid-3">
            {cases.map((c, i) => (
              <Link key={c.t} href="/case-studies" className={'case-card reveal reveal-d' + (i + 1)}>
                <div className="thumb">
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'grid',
                      placeItems: 'center',
                      color: 'rgba(255,255,255,.5)',
                      fontSize: 60,
                      fontWeight: 300,
                    }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </div>
                </div>
                <div className="body">
                  <div className="meta">{c.m}</div>
                  <h3 style={{ margin: '8px 0', fontSize: 18, fontWeight: 500 }}>{c.t}</h3>
                  <p style={{ margin: 0, color: 'var(--body-gray)', fontSize: 14, lineHeight: 1.55 }}>{c.d}</p>
                </div>
              </Link>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareFaqSchema) }}
      />
    </>
  );
}
