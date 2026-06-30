import PageHero from '../../components/PageHero';

export const metadata = {
  title: 'Terms of service — Align USA Group',
  description:
    'Terms governing use of the Align USA Group website and any related services provided by Advance Leadership and Integrated Group of Networking LLC.',
};

const EFFECTIVE_DATE = 'May 6, 2026';
const CONTACT_EMAIL = 'alignus26@gmail.com';

export default function TermsPage() {
  return (
    <>
      <PageHero
        crumb="Terms of service"
        title="Terms of service"
        lead={`Effective ${EFFECTIVE_DATE}. By using this site you agree to these terms.`}
      />
      <section className="section surface-light">
        <div className="container" style={{ maxWidth: 820 }}>
          <article className="reveal" style={{ display: 'grid', gap: 28, color: 'var(--charcoal)', fontSize: 16, lineHeight: 1.7 }}>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>1. Who we are</h2>
              <p style={{ margin: 0 }}>
                These Terms of Service ("Terms") govern your access to and use of alignusagroup.com (the
                "Site"), operated by <strong>Advance Leadership and Integrated Group of Networking
                LLC</strong>, a Texas limited liability company doing business as Align USA Group
                ("Align," "we," "us," "our"). By visiting the Site you accept these Terms.
              </p>
            </div>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>2. Use of the Site</h2>
              <p style={{ margin: 0 }}>
                You may use the Site for lawful purposes only. You agree not to: misuse forms or
                submission features; attempt to gain unauthorized access; introduce malicious code;
                scrape the Site at a rate that interferes with normal operation; or use the Site to
                violate any applicable law or regulation.
              </p>
            </div>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>3. Content on the Site</h2>
              <p style={{ margin: 0 }}>
                Site content — including copy, design, code, marks, and logos — is owned by Align or
                licensed to us and is protected by intellectual property laws. You may view and share
                links to public pages. You may not reproduce, modify, distribute, or create derivative
                works without our prior written consent, except as expressly permitted.
              </p>
            </div>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>4. Information you submit</h2>
              <p style={{ margin: 0 }}>
                When you submit a contact form or job application, you represent that the information
                is accurate and that you have the right to share it. We handle the information you
                submit per our <a href="/privacy">Privacy Policy</a>.
              </p>
            </div>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>5. Services</h2>
              <p style={{ margin: 0 }}>
                The Site is informational. Any staffing, software, or consulting services Align provides
                are governed by a separate written agreement. Nothing on this Site constitutes an offer,
                commitment, or guarantee of services or outcomes.
              </p>
            </div>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>6. Disclaimers</h2>
              <p style={{ margin: 0 }}>
                The Site is provided "as is" and "as available" without warranties of any kind, express
                or implied, including warranties of merchantability, fitness for a particular purpose,
                non-infringement, or accuracy. We do not warrant that the Site will be uninterrupted,
                secure, or error-free.
              </p>
            </div>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>7. Limitation of liability</h2>
              <p style={{ margin: 0 }}>
                To the maximum extent permitted by law, Align and its members, employees, and
                contractors are not liable for any indirect, incidental, special, consequential, or
                punitive damages, or any loss of profits or revenues, whether incurred directly or
                indirectly, arising out of your use of the Site.
              </p>
            </div>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>8. Third-party links and services</h2>
              <p style={{ margin: 0 }}>
                The Site may link to or rely on third-party services. We are not responsible for the
                content, policies, or practices of those services.
              </p>
            </div>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>9. Changes</h2>
              <p style={{ margin: 0 }}>
                We may update these Terms from time to time. Continued use of the Site after an update
                constitutes acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>10. Governing law</h2>
              <p style={{ margin: 0 }}>
                These Terms are governed by the laws of the State of Texas, without regard to its
                conflict-of-law principles. Disputes shall be brought exclusively in the state or
                federal courts located in Harris County, Texas.
              </p>
            </div>

            <div>
              <h2 className="display-s" style={{ margin: '0 0 10px' }}>11. Contact</h2>
              <p style={{ margin: 0 }}>
                Questions about these Terms? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or
                write to: Advance Leadership and Integrated Group of Networking LLC, 17350 State Hwy
                249, Ste 220 #35058, Houston, TX 77064.
              </p>
            </div>

          </article>
        </div>
      </section>
    </>
  );
}
