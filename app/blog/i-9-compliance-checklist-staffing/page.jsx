import Link from 'next/link';
import PageHero from '../../../components/PageHero';

export const dynamic = 'force-static';

export const metadata = {
  title: 'I-9 Compliance Checklist for Staffing Companies',
  description: 'Complete I-9 compliance checklist for staffing companies — Form I-9 requirements, common mistakes, document examination rules, and retention guidelines.',
  keywords: [
    'I-9 compliance checklist',
    'I-9 requirements staffing',
    'Form I-9 compliance',
    'employment eligibility verification',
    'I-9 staffing companies',
    'I-9 document requirements',
    'I-9 audit',
  ],
  openGraph: {
    title: 'I-9 Compliance Checklist for Staffing Companies',
    description: 'Complete I-9 compliance checklist for staffing companies — avoid common mistakes and maintain audit-ready hiring practices.',
  },
};

const lastUpdated = 'May 5, 2026';

export default function BlogPost() {
  return (
    <>
      <PageHero
        crumb="Insights"
        title="I-9 Compliance Checklist for Staffing Companies"
        lead="Form I-9 errors are the most common compliance violation for staffing companies — and they are surprisingly easy to avoid with the right process. This checklist walks through every required step."
      />

      <section className="section surface-light">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="reveal" style={{ display: 'grid', gap: 28 }}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 13, color: 'var(--body-gray)' }}>
              <span>Published: {lastUpdated}</span>
              <span>·</span>
              <span>10 min read</span>
              <span>·</span>
              <span>Compliance</span>
            </div>

            <p className="body-lg" style={{ margin: 0 }}>
              Form I-9 is the employment eligibility verification form required by federal law for every person hired in the United States. The form itself is relatively simple — three pages of fields and checkboxes — but the requirements around how, when, and by whom it must be completed are detailed enough that even experienced HR professionals make mistakes. For staffing companies that place hundreds of workers annually, the stakes are higher and the opportunity for error is real.
            </p>

            <h2>The I-9 Deadline: Three Business Days, Not Three Calendar Days</h2>
            <p className="body" style={{ margin: 0 }}>
              Federal law requires that Form I-9 be completed within three <strong>business days</strong> of a new hire's first day of work for reward. For staffing agencies, this deadline applies to every placement — including temporary and contract placements. The three-business-day clock starts ticking on the worker's first actual day, not the date the offer is accepted or the start date is confirmed.
            </p>
            <p className="body" style={{ margin: 0 }}>
              Staffing agencies that cannot complete I-9 verification within three business days — for example, if a worker starts and then goes on medical leave before documents can be collected — must still complete the form within the three-business-day window. The form should be completed based on documents presented at the time of first work, not documents that will be provided later.
            </p>

            <h2>Document Examination: Physical Inspection Required</h2>
            <p className="body" style={{ margin: 0 }}>
              This is the single most violated requirement of the I-9 process. Federal law requires employers to physically examine the documents that an employee presents to verify their identity and employment authorization. Accepting a photo or scanned copy of a passport or green card is not compliant — the employer must see the original, physical document.
            </p>
            <p className="body" style={{ margin: 0 }}>
              For remote workers, this requirement is especially important. Remote work does not eliminate the physical inspection requirement. Employers must arrange for documents to be presented in person or through a designated agent who can physically examine them. Accepting documents via email or upload without physical inspection is a violation regardless of whether the employer is a staffing agency or a direct employer.
            </p>

            <h2>Document Combinations: List A, List B, and List C</h2>
            <p className="body" style={{ margin: 0 }}>
              Form I-9 requires employees to present documents from two columns: List B (identity documents) and List C (employment authorization documents), or one document from List A that satisfies both requirements. Common mistakes include:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'grid', gap: 10 }}>
              {[
                'Accepting a foreign passport without a valid I-551 stamp or I-94 as the sole document',
                'Accepting an expired U.S. Passport Card for List B purposes',
                'Accepting a driver\'s license from a state that does not issue them to undocumented workers as sufficient proof of employment authorization',
                'Accepting a Social Security card that says "Not Valid for Employment"',
                'Using expired EAD cards for OPT workers who have applied for an extension',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--charcoal)' }}>
                  <span style={{ color: '#e53e3e', flexShrink: 0 }}>✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div style={{ background: 'var(--mist)', borderRadius: 16, padding: 28, display: 'grid', gap: 14 }}>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 500 }}>I-9 Compliance Checklist for Staffing Companies</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                {[
                  'Complete Section 1 (employee information) by the end of the first day of work',
                  'Complete Section 2 (document examination) within 3 business days of start date',
                  'Physically examine original documents — no photos, scans, or electronic copies',
                  'Accept correct document combinations: either List A alone, or one List B + one List C',
                  'Do NOT accept: expired List B documents, foreign passports without valid I-94/visa stamps, or Social Security cards marked "Not Valid for Employment"',
                  'Section 3 reverifications must be done before authorization expires, not after',
                  'Retain I-9 for 3 years from hire date or 1 year after separation, whichever is longer',
                  'Store I-9s securely — either separate from personnel files or with restricted access',
                  'Conduct quarterly internal I-9 audits before ICE does',
                  'Reverify employment authorization for employees who have lapsed (OPT, visa transitions)',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 10, fontSize: 14 }}>
                    <span style={{ color: 'var(--align-green)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2>Section 3: Reverifications You Cannot Forget</h2>
            <p className="body" style={{ margin: 0 }}>
              When a worker's employment authorization expires — whether they are on OPT and their EAD card is expiring, or they have a temporary work visa that needs renewal — the employer is required to complete Section 3 of the Form I-9 before the authorization expires. This is called a reverification. Staffing agencies that fail to reverify before expiration are in violation, even if the worker has been continuously placed.
            </p>
            <p className="body" style={{ margin: 0 }}>
              The most common reverification gap occurs with OPT workers at the end of their initial 12-month period or their 24-month STEM extension. Staffing agencies that do not have an automated tracking system for EAD expiration dates will miss reverification deadlines unless they have a dedicated compliance staff member manually tracking each placement.
            </p>

            <h2>Retention and Storage</h2>
            <p className="body" style={{ margin: 0 }}>
              Form I-9 retention requirements are straightforward but strict: employers must retain I-9 forms for either three years from the date of hire or one year after the employee's separation from employment — whichever is later. After this retention period, the form must be destroyed according to document disposal standards.
            </p>

            <h2>How Align USA Handles I-9 Compliance</h2>
            <p className="body" style={{ margin: 0 }}>
              Align USA Group maintains a centralized compliance file for every worker that includes their completed Form I-9, E-Verify case documentation, employment authorization documents, and onboarding records. Our compliance team conducts quarterly internal audits, and we use automated tracking for OPT/CPT authorization dates to ensure no reverification deadline is missed.
            </p>
            <p className="body" style={{ margin: 0 }}>
              We treat I-9 compliance as a process discipline — not a form-filling exercise. Every recruiter and operations team member at Align USA is trained on the specific document requirements and common pitfalls listed in this article. Compliance from day one is how we deliver.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16, paddingTop: 24, borderTop: '1px solid var(--divider)' }}>
              <Link className="btn btn-primary" href="/staffing">Explore Align USA Staffing</Link>
              <Link className="btn btn-ghost" href="/blog">Back to All Insights</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
