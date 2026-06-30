import Link from 'next/link';
import PageHero from '../../components/PageHero';

export const metadata = {
  title: 'Privacy policy — Align USA Group',
  description:
    'How Align USA Group (Advance Leadership and Integrated Group of Networking LLC) collects, uses, and protects information from website visitors and clients.',
};

const EFFECTIVE_DATE = 'May 6, 2026';
const CONTACT_EMAIL = 'alignus26@gmail.com';

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        crumb="Privacy policy"
        title="Privacy policy"
        lead={`Effective ${EFFECTIVE_DATE}. This policy explains what we collect, how we use it, and your rights.`}
      />
      <section className="section surface-light">
        <div className="container" style={{ maxWidth: 820 }}>
          <article className="reveal" style={{ display: 'grid', gap: 28, color: 'var(--charcoal)', fontSize: 16, lineHeight: 1.7 }}>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>Who we are</h2>
              <p style={{ margin: 0 }}>
                Align USA Group is the public-facing brand of <strong>Advance Leadership and Integrated
                Group of Networking LLC</strong>, a Texas limited liability company headquartered at
                17350 State Hwy 249, Ste 220 #35058, Houston, TX 77064 ("Align," "we," "us," "our"). This
                policy applies to <Link href="/">alignusagroup.com</Link> and to information collected
                during prospect or client interactions.
              </p>
            </div>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>Information we collect</h2>
              <ul style={{ margin: 0, paddingLeft: 22, display: 'grid', gap: 8 }}>
                <li><strong>Information you submit.</strong> When you fill in the contact form or apply for a role, we receive your name, email, phone (optional), company, message, and — for job applications — your resume and any links you share.</li>
                <li><strong>Email correspondence.</strong> If you email us directly we keep that thread for as long as we need to respond and follow up.</li>
                <li><strong>Basic technical data.</strong> Our hosting provider (Vercel) logs standard request data such as IP address, user agent, and request path for security and uptime purposes.</li>
                <li><strong>No advertising trackers.</strong> We do not run third-party advertising or analytics trackers on this site at this time.</li>
              </ul>
            </div>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>How we use information</h2>
              <ul style={{ margin: 0, paddingLeft: 22, display: 'grid', gap: 8 }}>
                <li>To respond to inquiries and consultation requests.</li>
                <li>To evaluate job applications and contact candidates.</li>
                <li>To deliver staffing, software, or consulting services we have agreed to provide.</li>
                <li>To meet legal, tax, audit, and compliance obligations.</li>
                <li>To secure and operate the website.</li>
              </ul>
              <p style={{ margin: '12px 0 0' }}>
                We do not sell personal information.
              </p>
            </div>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>Service providers</h2>
              <p style={{ margin: 0 }}>
                We share information only with vendors that help us operate the business and only to
                the extent needed. Current providers include Vercel (hosting), FormSubmit (form
                forwarding to our inbox), and Google (email). Each is bound by its own terms and
                processes data on our behalf.
              </p>
            </div>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>Retention</h2>
              <p style={{ margin: 0 }}>
                We keep contact submissions and job applications for as long as needed to respond,
                evaluate fit, or maintain a future-roles pipeline — and longer if required by law. You
                can ask us to delete your information at any time using the contact details below.
              </p>
            </div>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>Your rights</h2>
              <p style={{ margin: 0 }}>
                Depending on where you live, you may have rights to access, correct, delete, or port
                your personal information; to object to or restrict certain processing; and to lodge a
                complaint with a supervisory authority. To exercise any of these rights, email{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            </div>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>Children</h2>
              <p style={{ margin: 0 }}>
                The site is not directed to children under 16, and we do not knowingly collect their
                information.
              </p>
            </div>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>Changes to this policy</h2>
              <p style={{ margin: 0 }}>
                We may update this policy from time to time. The effective date at the top of the page
                will reflect the most recent revision.
              </p>
            </div>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>Contact</h2>
              <p style={{ margin: 0 }}>
                Questions about this policy or your information? Email{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or write to us at the address above.
              </p>
            </div>

          </article>
        </div>
      </section>
    </>
  );
}
