'use client';
import { useState } from 'react';
import PageHero from '../../components/PageHero';

const FORMSUBMIT_EMAIL = 'alignus26@gmail.com';

export const metadata = {
  title: 'Contact Align USA — Book a Consultation | Houston, TX',
  description:
    'Contact Align USA Group for staffing, software development, or consulting inquiries. Book a free 30-minute consultation. Align USA responds within one business day.',
  keywords: [
    'Contact Align USA',
    'Align USA contact',
    'Align USA consultation',
    'book consultation Align USA',
    'Houston staffing contact',
    'Align USA email',
    'Align USA phone',
    'contact staffing company',
    'software development inquiry',
    'consulting consultation',
  ],
  openGraph: {
    title: 'Contact Align USA — Book a Consultation',
    description:
      'Contact Align USA Group for staffing, software, or consulting inquiries. Book a 30-minute consultation. We respond within one business day.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://alignusagroup.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://alignusagroup.com/contact' },
  ],
};

export default function ContactPage() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('');
  const [inquiry, setInquiry] = useState('Staffing');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const fd = new FormData(e.currentTarget);
    const payload = {
      first_name: fd.get('first_name'),
      last_name: fd.get('last_name'),
      email: fd.get('email'),
      company: fd.get('company') || '',
      inquiry_type: fd.get('inquiry') || '',
      message: fd.get('message') || '',
      _subject: `Align USA Group — Contact (${fd.get('inquiry') || 'General'})`,
      _template: 'table',
      _captcha: 'false',
    };

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json().catch(() => ({}));
      const ok = data.success === 'true' || data.success === true || res.ok;

      if (ok) {
        setStatus('sent');
        e.target.reset();
        setInquiry('Staffing');
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please email Align USA at ' + FORMSUBMIT_EMAIL + '.');
    }
  }

  const sending = status === 'sending';
  const sent = status === 'sent';
  const errored = status === 'error';

  return (
    <>
      <PageHero
        crumb="Contact"
        title="Contact Align USA — Tell Us What You Are Trying to Align"
        lead="Hiring, building, or rethinking the operating model — start with a 30-minute Align USA consultation. We will respond within one business day."
      />

      <section className="section surface-light">
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: 'flex-start' }}>
            <div className="reveal">
              <form onSubmit={handleSubmit} noValidate aria-label="Align USA contact form">
                {/* Honeypot for spam bots — humans won't fill this. */}
                <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="field">
                    <label htmlFor="first_name">First name</label>
                    <input required id="first_name" name="first_name" placeholder="Maya" disabled={sending} />
                  </div>
                  <div className="field">
                    <label htmlFor="last_name">Last name</label>
                    <input required id="last_name" name="last_name" placeholder="Iyer" disabled={sending} />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="email">Work email</label>
                  <input required id="email" type="email" name="email" placeholder="maya@company.com" disabled={sending} />
                </div>
                <div className="field">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" placeholder="Helix Health" disabled={sending} />
                </div>
                <div className="field">
                  <label htmlFor="inquiry">Inquiry type</label>
                  <select
                    id="inquiry"
                    name="inquiry"
                    value={inquiry}
                    onChange={(e) => setInquiry(e.target.value)}
                    disabled={sending}
                  >
                    <option>Align USA Staffing</option>
                    <option>Align USA Software Development</option>
                    <option>Align USA Consulting</option>
                    <option>Hiring Request</option>
                    <option>Press / Partnerships</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">Tell Align USA a bit more</label>
                  <textarea id="message" name="message" placeholder="A sentence or two on what you are trying to do with Align USA." disabled={sending} />
                </div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                  <button type="submit" className="btn btn-primary btn-lg" disabled={sending}>
                    {sending ? 'Sending…' : sent ? 'Sent — Align USA will be in touch' : 'Send Align USA a Message'}
                  </button>
                  <a className="btn btn-ghost btn-lg" href={`mailto:${FORMSUBMIT_EMAIL}`}>
                    Email Align USA directly
                  </a>
                </div>
                {sent && (
                  <p style={{ marginTop: 14, color: 'var(--ps-blue)', fontSize: 14 }}>
                    Thanks — Align USA will respond within one business day.
                  </p>
                )}
                {errored && (
                  <p style={{ marginTop: 14, color: '#c0392b', fontSize: 14 }}>{errorMsg}</p>
                )}
              </form>
            </div>
            <div className="reveal reveal-d1">
              <div className="card" style={{ padding: 32 }}>
                <div className="eyebrow">Align USA Headquarters</div>
                <h2 style={{ fontSize: 24, fontWeight: 300, margin: '8px 0 20px' }}>Houston, Texas.</h2>
                <div style={{ display: 'grid', gap: 14, marginTop: 8 }}>
                  <div>
                    <div className="eyebrow" style={{ marginBottom: 6 }}>Align USA — USA Headquarters</div>
                    <address style={{ fontStyle: 'normal', margin: 0, fontSize: 14, color: 'var(--body-gray)', lineHeight: 1.55 }}>
                      17350 State Hwy 249, Ste 220 #35058<br />
                      Houston, TX 77064
                    </address>
                  </div>
                  <hr className="div" />
                  <div>
                    <div className="eyebrow" style={{ marginBottom: 6 }}>Align USA Email</div>
                    <p style={{ margin: 0, fontSize: 14 }}>
                      <a href={`mailto:${FORMSUBMIT_EMAIL}`}>{FORMSUBMIT_EMAIL}</a>
                    </p>
                  </div>
                  <hr className="div" />
                  <div>
                    <div className="eyebrow" style={{ marginBottom: 6 }}>Align USA Response Time</div>
                    <p style={{ margin: 0, fontSize: 14, color: 'var(--body-gray)' }}>
                      Align USA replies within one business day, Mon–Fri (Central Time).
                    </p>
                  </div>
                </div>
              </div>
            </div>
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