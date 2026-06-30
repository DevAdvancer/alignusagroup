'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import PageHero from '../../components/PageHero';
import Icon from '../../components/Icon';

const FORMSUBMIT_EMAIL = 'alignus26@gmail.com';

export const metadata = {
  title: 'Align USA Careers — Open Roles in Staffing, Engineering & Consulting',
  description:
    'Join Align USA Group — a Houston-based staffing, software, and consulting firm. View open positions in engineering, recruiting, compliance, and client services. Apply today.',
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
    title: 'Align USA Careers — Open Roles in Staffing, Engineering & Consulting',
    description:
      'Join Align USA — a Houston-based firm hiring across engineering, recruiting, compliance, and client services.',
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

const roles = [
  ['Senior Software Engineer', 'USA · Remote', 'Engineering'],
  ['Compliance Lead', 'Houston · Hybrid', 'Operations'],
  ['Recruiter, Healthcare', 'USA · Remote', 'Talent'],
  ['Engineering Manager, Platform', 'Houston · Hybrid', 'Engineering'],
  ['Product Designer', 'USA · Remote', 'Design'],
  ['Account Director', 'USA · Remote', 'Client Services'],
];

const OPEN_OPTION = 'Open Application — No Specific Role';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://alignusagroup.com' },
    { '@type': 'ListItem', position: 2, name: 'Careers', item: 'https://alignusagroup.com/careers' },
  ],
};

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState(roles[0][0]);
  const formRef = useRef(null);

  function applyFor(role) {
    setSelectedRole(role);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

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
              <h2 className="display-l">Align USA Is Currently Hiring</h2>
            </div>
            <span className="pill"><span className="dot" /> {roles.length} open roles at Align USA</span>
          </div>
          <div style={{ display: 'grid', gap: 12 }}>
            {roles.map(([t, loc, dept], i) => (
              <article
                key={t}
                className={'role-row reveal reveal-d' + ((i % 5) + 1)}
                style={{
                  padding: '24px 28px',
                  background: 'var(--card-bg, #fff)',
                  borderRadius: 16,
                  border: '1px solid var(--card-border, #ececec)',
                  display: 'grid',
                  gridTemplateColumns: '1.4fr 1fr 1fr auto',
                  gap: 16,
                  alignItems: 'center',
                  transition: 'all 200ms ease',
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 4px', fontSize: 18, fontWeight: 500 }}>{t}</h3>
                  <span style={{ fontSize: 13, color: 'var(--body-gray)' }}>{dept}</span>
                </div>
                <div style={{ fontSize: 14, color: 'var(--body-gray)' }}>
                  <Icon name="pin" size={14} alt="" /> {loc}
                </div>
                <div style={{ fontSize: 14, color: 'var(--body-gray)' }}>Full-time</div>
                <button
                  type="button"
                  className="btn btn-secondary btn-mini"
                  onClick={() => applyFor(t)}
                >
                  Apply at Align USA <span className="btn-arrow" />
                </button>
              </article>
            ))}
          </div>

          <div
            ref={formRef}
            id="apply"
            className="card reveal"
            style={{ marginTop: 64, padding: 40 }}
          >
            <div className="eyebrow">Apply Now</div>
            <h2 className="display-m" style={{ margin: '8px 0 8px' }}>Submit Your Align USA Application</h2>
            <p style={{ margin: '0 0 28px', color: 'var(--body-gray)', maxWidth: 640 }}>
              Send us your resume and a few words about yourself. Align USA reviews every submission and replies
              within one business day.
            </p>

            <form
              action={`https://formsubmit.co/${FORMSUBMIT_EMAIL}`}
              method="POST"
              encType="multipart/form-data"
              aria-label="Align USA job application form"
            >
              <input type="hidden" name="_subject" value={`Align USA Job Application — ${selectedRole}`} />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://alignusagroup.com/careers/thanks" />
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="field">
                  <label htmlFor="first_name">First name</label>
                  <input required id="first_name" name="first_name" placeholder="Maya" />
                </div>
                <div className="field">
                  <label htmlFor="last_name">Last name</label>
                  <input required id="last_name" name="last_name" placeholder="Iyer" />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input required id="email" type="email" name="email" placeholder="maya@example.com" />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" type="tel" name="phone" placeholder="+1 555 555 5555" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="role">Role you are applying for</label>
                <select
                  id="role"
                  name="role"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  {roles.map(([t]) => (
                    <option key={t}>{t}</option>
                  ))}
                  <option>{OPEN_OPTION}</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="link">LinkedIn / portfolio (optional)</label>
                <input id="link" type="url" name="link" placeholder="https://linkedin.com/in/…" />
              </div>
              <div className="field">
                <label htmlFor="cover_letter">Cover letter</label>
                <textarea
                  id="cover_letter"
                  name="cover_letter"
                  placeholder="Why this Align USA role, what you have shipped, and how you work."
                />
              </div>
              <div className="field">
                <label htmlFor="resume">Resume (PDF or DOCX, max 10 MB)</label>
                <input
                  required
                  id="resume"
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                <button type="submit" className="btn btn-primary btn-lg">
                  Submit Align USA Application
                </button>
                <Link className="btn btn-ghost btn-lg" href="/contact">
                  Have a question first?
                </Link>
              </div>
            </form>
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