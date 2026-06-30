import Link from 'next/link';
import PageHero from '../../components/PageHero';

export const metadata = {
  title: 'Case studies — Align USA Group',
  description:
    'Real engagement write-ups from Align USA Group are coming soon. In the meantime, get in touch and we will walk you through relevant work in person.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        crumb="Case studies"
        title="Case studies — coming soon."
        lead="We're putting together write-ups of recent engagements that survive client review. They'll go up here as soon as they're cleared."
      />
      <section className="section surface-light">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="reveal" style={{ display: 'grid', gap: 18 }}>
            <p className="body-lg" style={{ margin: 0 }}>
              Until then, the fastest way to see relevant work is a 30-minute conversation. We'll walk you
              through engagements that map to your situation — staffing build-outs, software platforms, and
              compliance programs — and share references where appropriate.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
              <Link className="btn btn-primary btn-lg" href="/contact">
                Book consultation
              </Link>
              <Link className="btn btn-ghost btn-lg" href="/services">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
