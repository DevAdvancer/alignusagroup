import PageHero from '../../components/PageHero';
import { consultingSchema, consultingFaqSchema } from './schema';

export const metadata = {
  title: 'Align USA Consulting — Workforce Strategy & Compliance Advisory | Houston',
  description:
    'Align USA Group provides business consulting: workforce strategy, compliance advisory, process optimization, and operating models for US companies scaling responsibly.',
  keywords: [
    'Align USA consulting',
    'Align USA consulting services',
    'workforce strategy consulting',
    'compliance consulting Houston',
    'business consulting Texas',
    'operating model consulting',
    'process optimization USA',
    'staffing strategy consulting',
    'Align USA advisory',
    'consulting firm Houston',
    'workforce planning',
    'compliance advisory',
  ],
  openGraph: {
    title: 'Align USA Consulting — Workforce Strategy & Compliance Advisory',
    description:
      'Align USA delivers business consulting: workforce strategy, compliance advisory, and operating models for US companies growing responsibly.',
  },
};

const challenges = [
  ['Scaling the Team', 'How do we ramp from 5 to 50 without losing engineering culture?'],
  ['Compliance Gaps', 'We hire fast — and audits are coming. What do we tighten first?'],
  ['Process Drift', 'Sprints have stopped shipping. Where is the operating model breaking?'],
  ['Tech Debt', 'The platform is dragging hiring. What is the smallest viable rewrite?'],
  ['M&A Integration', 'Two engineering orgs, one product. How do we merge without a stall?'],
  ['Cost Pressure', 'Where can we tighten without breaking delivery or compliance?'],
];

const roadmap = [
  { y: '01', t: 'Audit', d: 'Diagnose the operating model and compliance posture.' },
  { y: '02', t: 'Frame', d: 'Articulate the target state and risk tolerances.' },
  { y: '03', t: 'Pilot', d: 'Run a small, instrumented pilot pod or workflow.' },
  { y: '04', t: 'Scale', d: 'Repeat the pilot pattern across teams and geographies.' },
  { y: '05', t: 'Steady State', d: 'Hand off to in-house ops with documentation.' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://alignusagroup.com' },
    { '@type': 'ListItem', position: 2, name: 'Consulting', item: 'https://alignusagroup.com/consulting' },
  ],
};

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        crumb="Consulting"
        title="Align USA Consulting — The Operating Model Behind Your Global Team"
        lead="Align USA delivers workforce strategy, compliance advisory, and the scaling roadmap that turns a hiring spike into durable capacity."
      />

      <section className="section surface-light">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">Business Challenges Align USA Solves</div>
              <h2 className="display-l">When Growth Outruns the Operating Model — Align USA Helps</h2>
            </div>
          </div>
          <div className="grid-3">
            {challenges.map(([t, d], i) => (
              <article key={t} className={'card lift reveal reveal-d' + (i + 1)}>
                <h3 style={{ margin: '0 0 10px', fontSize: 18, fontWeight: 500 }}>{t}</h3>
                <p style={{ margin: 0, color: 'var(--body-gray)', fontSize: 14, lineHeight: 1.6 }}>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-dark-grad">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow-light">Align USA Scaling Roadmap</div>
              <h2 className="display-l" style={{ color: '#fff' }}>From Audit to Operating Model in Five Moves — Align USA Way</h2>
            </div>
          </div>
          <div className="tl-h">
            {roadmap.map((s, i) => (
              <div key={s.y} className={'tl-step reveal reveal-d' + (i + 1)} style={{ color: '#fff' }}>
                <div className="dot" style={{ background: '#000', borderColor: 'var(--ps-cyan)', boxShadow: '0 0 0 6px rgba(30,174,219,.15)' }} />
                <div className="yr" style={{ color: 'var(--ps-cyan)' }}>{s.y}</div>
                <h3 style={{ color: '#fff', fontSize: 16, fontWeight: 500 }}>{s.t}</h3>
                <p style={{ color: '#bcc6e3' }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-light">
        <div className="container">
          <div className="grid-2">
            <div className="reveal">
              <div className="eyebrow">Strategic Frameworks</div>
              <h2 className="display-l" style={{ marginTop: 8 }}>Two Artifacts Align USA Clients Walk Away With</h2>
              <p className="body-lg">
                Every Align USA consulting engagement produces two durable artifacts your team owns afterwards — not
                slides we keep in a drawer.
              </p>
            </div>
            <div>
              <div className="card reveal reveal-d1" style={{ marginBottom: 16 }}>
                <div className="eyebrow">Artifact 01</div>
                <h3 style={{ margin: '8px 0 12px', fontSize: 24, fontWeight: 300 }}>Workforce Operating Model</h3>
                <p style={{ margin: 0, color: 'var(--body-gray)' }}>
                  Roles, ratios, time zones, escalation paths, and governance — the chart Align USA builds for your
                  VPE that should sit on the wall.
                </p>
              </div>
              <div className="card reveal reveal-d2">
                <div className="eyebrow">Artifact 02</div>
                <h3 style={{ margin: '8px 0 12px', fontSize: 24, fontWeight: 300 }}>Compliance &amp; Risk Register</h3>
                <p style={{ margin: 0, color: 'var(--body-gray)' }}>
                  The list of compliance items that matter for your stage, mapped to owners, evidence, and review
                  cadence. Align USA delivers real documentation.
                </p>
              </div>
            </div>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consultingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consultingFaqSchema) }}
      />
    </>
  );
}
