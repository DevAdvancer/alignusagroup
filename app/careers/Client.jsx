'use client';
import Link from 'next/link';
import PageHero from '../../components/PageHero';
import Icon from '../../components/Icon';

const FORMSUBMIT_EMAIL = 'alignus26@gmail.com';

export const metadata = {
  title: 'Align USA Careers',
  description:
    'Join Align USA Group — a Houston-based staffing, software, and consulting firm. Learn about our culture and career paths.',
  keywords: [
    'Align USA careers',
    'Align USA jobs',
    'Align USA hiring',
    'staffing jobs Houston',
    'software jobs Texas',
    'engineering jobs USA',
    'recruiter jobs',
    'consulting jobs Texas',
    'remote jobs Align USA',
    'work from home jobs',
    'tech jobs Houston',
  ],
  openGraph: {
    title: 'Align USA Careers',
    description:
      'Join Align USA — a Houston-based firm working across engineering, recruiting, compliance, and client services.',
  },
};

const why = [
  ['shield', 'Job Security', "Long client tenures and a deliberate hiring pace mean roles aren't reorged every quarter. Align USA values stability."],
  ['users', 'Real Mentorship', 'Pods are small enough that senior people actually pair, review, and teach. Align USA invests in growth.'],
  ['globe', 'Global Exposure', 'You work alongside US strategy leads on real client problems — not as a back office. Align USA offers real responsibility.'],
  ['spark', 'Career Growth', 'Documented progression frameworks for engineering, recruiting, and consulting tracks. Align USA supports your career path.'],
];

const journey = [
  { y: 'Day 1', t: 'Onboarding', d: 'Buddy assigned, dev environment ready, first client context within a week. Align USA starts you off right.' },
  { y: 'Mo. 3', t: 'First Impact', d: 'Owning a workstream end-to-end with senior pair on call. Align USA trusts new team members early.' },
  { y: 'Yr 1', t: 'Specialization', d: 'Pick a track — engineering, ops, design — with documented levels. Align USA defines clear progression.' },
  { y: 'Yr 3', t: 'Leadership', d: 'Lead a pod or own a client engagement. Align USA develops leaders from within.' },
  { y: 'Yr 5', t: 'Practice', d: 'Define a practice area or open a new vertical with us. Align USA empowers long-term thinkers.' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.alignusagroup.com' },
    { '@type': 'ListItem', position: 2, name: 'Careers', item: 'https://www.alignusagroup.com/careers' },
  ],
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumb="Careers"
        title="Align USA Careers — Quiet Excellence Across Engineering, Recruiting & Consulting"
        lead="Align USA hires deliberately — and the people we hire stay. If you want loud growth and constant pivots, we may not be your shop. Join Align USA for meaningful work."
      />

      <section className="section surface-light">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">Why Work at Align USA</div>
              <h2 className="display-l">Work People Stay For — At Align USA</h2>
            </div>
          </div>
          <div className="grid-4">
            {why.map(([i, t, d], idx) => (
              <article key={t} className={'card lift reveal reveal-d' + (idx + 1)} style={{ padding: 24 }}>
                <div className="svc-icon" style={{ width: 44, height: 44, borderRadius: 12, marginBottom: 14 }} aria-hidden="true">
                  <Icon name={i} size={20} alt="" />
                </div>
                <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 500 }}>{t}</h3>
                <p style={{ margin: 0, color: 'var(--body-gray)', fontSize: 13.5, lineHeight: 1.55 }}>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-mist">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">Align USA Employee Journey</div>
              <h2 className="display-l">From Day One to Year Five — Align USA Career Path</h2>
            </div>
          </div>
          <div className="tl-h">
            {journey.map((s, i) => (
              <div key={s.y} className={'tl-step reveal reveal-d' + (i + 1)}>
                <div className="dot" />
                <div className="yr">{s.y}</div>
                <h3 style={{ margin: '8px 0', fontSize: 16, fontWeight: 500 }}>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-light">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">Open Positions</div>
              <h2 className="display-l">We are not currently hiring</h2>
            </div>
          </div>
          <div className="reveal" style={{ maxWidth: 640, color: 'var(--body-gray)' }}>
            <p style={{ margin: '0 0 16px', fontSize: 17, lineHeight: 1.6 }}>
              While we don't have any open roles at the moment, we're always looking to connect with talented people.
            </p>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6 }}>
              Feel free to reach out to us via our <Link href="/contact" style={{ textDecoration: 'underline' }}>contact page</Link> or check back later for future opportunities.
            </p>
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