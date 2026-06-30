import Link from 'next/link';
import PageHero from '../../../components/PageHero';

export const metadata = {
  title: 'Application received — Align USA Group',
};

export default function CareersThanksPage() {
  return (
    <>
      <PageHero
        crumb="Careers · Application received"
        title="Application received — thank you."
        lead="We review every submission and reply within one business day. Keep an eye on your inbox."
      />
      <section className="section surface-light">
        <div className="container" style={{ textAlign: 'center', maxWidth: 640 }}>
          <p style={{ color: 'var(--body-gray)', fontSize: 17, lineHeight: 1.6 }}>
            If you don&apos;t hear back within a few days, please email us at{' '}
            <a href="mailto:alignus26@gmail.com">alignus26@gmail.com</a>.
          </p>
          <div style={{ marginTop: 32, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn btn-primary btn-lg" href="/careers">Back to Careers</Link>
            <Link className="btn btn-ghost btn-lg" href="/">Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
