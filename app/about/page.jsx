import PageHero from '../../components/PageHero';
import Icon from '../../components/Icon';

export const metadata = {
  title: 'About Align USA Group — Our Story, Mission & Values | Houston, TX',
  description:
    'Learn about Align USA Group — a Houston-based staffing, software, and consulting firm. Discover our mission, values, and why US companies choose Align USA for workforce solutions.',
  keywords: [
    'About Align USA',
    'Align USA Group about',
    'Align USA story',
    'Houston staffing company about',
    'Align USA mission',
    'Align USA values',
    'Align USA founders',
    'Texas staffing firm',
    'Houston consulting company',
    'Align USA team',
  ],
  openGraph: {
    title: 'About Align USA Group — Our Story, Mission & Values',
    description:
      'Discover the story behind Align USA Group — a Houston-based firm delivering staffing, software, and consulting to US companies since 2026.',
  },
};

const pillars = [
  {
    t: 'Mission',
    d: 'Make staffing, software, and back-office support feel like one in-house team — accountable, compliant, and quietly excellent. Align USA serves US companies with integrity.',
    i: 'compass',
  },
  {
    t: 'Vision',
    d: 'A US-focused practice that helps growing companies get the people, software, and operating discipline they need without the overhead of stitching together vendors. Align USA leads the way.',
    i: 'globe',
  },
  {
    t: 'Philosophy',
    d: 'Quiet authority over loud promises. We pick the work we can do well and stay accountable to it. Align USA delivers results.',
    i: 'spark',
  },
];

const values = [
  ['shield', 'Compliance First', 'E-Verified, I-9-disciplined, and audit-ready by default — not as an afterthought. Align USA prioritizes compliance.'],
  ['users', 'Stewardship', 'We staff to retain — not to replace next quarter. Align USA builds lasting relationships.'],
  ['flow', 'Operating Discipline', 'Documented, reviewable, repeatable engagements. Align USA brings structure to every project.'],
  ['spark', 'Craft', 'We hire people who care about the work itself. Align USA values quality craftsmanship.'],
];

const what = [
  ['users', 'Staffing — IT and Non-IT', 'Contract, contract-to-hire, and student workforce hiring across technical and operations roles. Align USA staffing delivers.'],
  ['code', 'Software Development & Consultation', 'Custom builds, MVPs, integrations, and advisory engagements. Align USA software development team delivers excellence.'],
  ['shield', 'Compliance & Background Checks', 'I-9 review, E-Verify, background screening, and policy work. Align USA ensures compliance from day one.'],
  ['briefcase', 'Admin & Bookkeeping Support', 'Day-to-day operations, vendor management, and recurring bookkeeping for growing US teams. Align USA supports your operations.'],
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.alignusagroup.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.alignusagroup.com/about' },
  ],
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        title="Align USA Group — A Houston-Based US Firm Built on Discipline"
        lead="Align USA Group is the public-facing brand of Advance Leadership and Integrated Group of Networking LLC — a Texas LLC, founded in 2026, focused exclusively on US clients."
      />

      <section className="section surface-light">
        <div className="container">
          <div className="grid-3">
            {pillars.map((x, i) => (
              <article key={x.t} className={'card reveal reveal-d' + (i + 1)}>
                <div className="svc-icon" aria-hidden="true">
                  <Icon name={x.i} size={26} alt="" />
                </div>
                <h2 style={{ margin: '0 0 12px', fontSize: 22, fontWeight: 300, letterSpacing: -0.2 }}>{x.t}</h2>
                <p className="body" style={{ margin: 0 }}>{x.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-mist">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div className="reveal">
              <div className="eyebrow">Our Story</div>
              <h2 className="display-l" style={{ marginTop: 8 }}>Align USA — A Young Firm, Built Deliberately</h2>
            </div>
            <div className="reveal reveal-d1">
              <p className="body-lg">
                Align USA Group is a young Texas-based startup. We formed the LLC in 2026 to bring the
                staffing, software, and back-office work US companies routinely need under one operating
                model — without the friction of stitching together half a dozen vendors.
              </p>
              <p className="body-lg">
                We are E-Verify enrolled, founder-led, and small enough that you work directly with the
                people accountable for delivery. Align USA already has active staffing clients and shipped IT
                projects — and we are building deliberately rather than chasing scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section surface-dark-grad">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow-light">What We Do</div>
              <h2 className="display-l" style={{ color: '#fff' }}>Align USA — Four Practices, One Operating Cadence</h2>
            </div>
            <p className="lead" style={{ color: '#bcc6e3' }}>
              Hiring, building, compliance, and the day-to-day work that keeps a growing US team running —
              all coordinated by one Align USA team in Houston.
            </p>
          </div>
          <div className="grid-4">
            {what.map(([icon, t, d], i) => (
              <article key={t} className={'card-dark reveal reveal-d' + (i + 1)} style={{ padding: 28 }}>
                <div className="svc-icon" style={{ width: 44, height: 44, borderRadius: 12, marginBottom: 14 }} aria-hidden="true">
                  <Icon name={icon} size={20} alt="" />
                </div>
                <h3 style={{ color: '#fff', margin: '0 0 10px', fontSize: 17, fontWeight: 500 }}>{t}</h3>
                <p style={{ margin: 0, color: '#bcc6e3', fontSize: 14, lineHeight: 1.55 }}>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-mist">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">Align USA Values</div>
              <h2 className="display-l">How Align USA Actually Behaves</h2>
            </div>
          </div>
          <div className="grid-4">
            {values.map(([i, t, d], idx) => (
              <article key={t} className={'card lift reveal reveal-d' + (idx + 1)} style={{ padding: 24 }}>
                <div className="svc-icon" style={{ width: 44, height: 44, borderRadius: 12, marginBottom: 14 }} aria-hidden="true">
                  <Icon name={i} size={20} alt="" />
                </div>
                <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 500 }}>{t}</h3>
                <p style={{ margin: 0, fontSize: 13.5, color: 'var(--body-gray)', lineHeight: 1.5 }}>{d}</p>
              </article>
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
