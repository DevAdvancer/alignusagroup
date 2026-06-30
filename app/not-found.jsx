import Link from 'next/link';
import PageHero from '../components/PageHero';

export const metadata = {
  title: 'Page not found — Align USA Group',
};

export default function NotFound() {
  return (
    <>
      <PageHero
        crumb="404"
        title="That page doesn't exist."
        lead="The link you followed may be broken or the page may have moved. Try one of the options below."
      />
      <section className="section surface-light">
        <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn btn-primary btn-lg" href="/">Go home</Link>
            <Link className="btn btn-ghost btn-lg" href="/services">See services</Link>
            <Link className="btn btn-ghost btn-lg" href="/contact">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
