import PageHero from '../../components/PageHero';

export const metadata = {
  title: 'Cookie policy — Align USA Group',
  description:
    'How Align USA Group uses cookies and similar storage on alignusagroup.com.',
};

const EFFECTIVE_DATE = 'May 6, 2026';
const CONTACT_EMAIL = 'alignus26@gmail.com';

export default function CookiesPage() {
  return (
    <>
      <PageHero
        crumb="Cookie policy"
        title="Cookie policy"
        lead={`Effective ${EFFECTIVE_DATE}. A short, honest summary of how we use browser storage on this site.`}
      />
      <section className="section surface-light">
        <div className="container" style={{ maxWidth: 820 }}>
          <article className="reveal" style={{ display: 'grid', gap: 28, color: 'var(--charcoal)', fontSize: 16, lineHeight: 1.7 }}>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>What we use today</h2>
              <p style={{ margin: 0 }}>
                alignusagroup.com is largely a static marketing site. We do not run third-party
                advertising or analytics cookies at this time. The only browser storage we use is:
              </p>
              <ul style={{ margin: '12px 0 0', paddingLeft: 22, display: 'grid', gap: 8 }}>
                <li>
                  <strong>Theme preference (localStorage).</strong> When you toggle between light and dark
                  mode, your choice is saved in your browser under the key <code>theme</code>. It never
                  leaves your device.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>Hosting & form vendors</h2>
              <p style={{ margin: 0 }}>
                Our hosting provider (Vercel) and our form-forwarding provider (FormSubmit) may set
                technical cookies as part of normal operation (for example, to balance traffic or
                prevent abuse). We do not control these and they are governed by each provider's own
                policies.
              </p>
            </div>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>What we may add later</h2>
              <p style={{ margin: 0 }}>
                If we add analytics or marketing cookies in the future, we'll update this page and add a
                consent control where required. We're not in any hurry to add tracking we don't need.
              </p>
            </div>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>Managing cookies</h2>
              <p style={{ margin: 0 }}>
                You can clear or block cookies and localStorage in your browser settings. Doing so will
                reset your theme preference and may otherwise affect how the site behaves.
              </p>
            </div>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>Contact</h2>
              <p style={{ margin: 0 }}>
                Questions? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            </div>

          </article>
        </div>
      </section>
    </>
  );
}
