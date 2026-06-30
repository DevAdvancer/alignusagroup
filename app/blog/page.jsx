import Link from 'next/link';
import PageHero from '../../components/PageHero';

export const metadata = {
  title: 'Insights — Align USA Group',
  description:
    'Notes on staffing, compliance, and software delivery from the Align USA Group team. Coming soon.',
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        crumb="Insights"
        title="Insights — coming soon."
        lead="Quiet writing about staffing, compliance, and craft. We're drafting the first set of pieces and will publish them here."
      />
      <section className="section surface-light">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="reveal" style={{ display: 'grid', gap: 18 }}>
            <p className="body-lg" style={{ margin: 0 }}>
              In the meantime, if there's a workforce, compliance, or delivery topic you'd like us to
              tackle first, drop us a line. We read every request.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
              <Link className="btn btn-primary btn-lg" href="/contact">
                Suggest a topic
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
