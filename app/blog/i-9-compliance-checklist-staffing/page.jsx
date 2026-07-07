import Link from 'next/link';
import PageHero from '../../../components/PageHero';

const SITE_URL = 'https://alignusagroup.com';

export const dynamic = 'force-static';

export const metadata = {
  title: 'I-9 Compliance Checklist for Staffing Companies',
  description: 'Complete I-9 compliance checklist for staffing companies — every required step, document rules, retention schedules, and audit preparation from Align USA Group.',
  keywords: [
    'I-9 compliance checklist',
    'I-9 staffing companies',
    'Form I-9 requirements',
    'I-9 audit checklist',
    'staffing compliance I-9',
    'I-9 compliance staffing',
    'E-Verify I-9',
  ],
  alternates: {
    canonical: `${SITE_URL}/blog/i-9-compliance-checklist-staffing`,
  },
  openGraph: {
    title: 'I-9 Compliance Checklist for Staffing Companies',
    description: 'Complete I-9 compliance checklist for staffing companies — every required step, document rules, retention schedules, and audit preparation.',
    url: `${SITE_URL}/blog/i-9-compliance-checklist-staffing`,
    type: 'article',
    article: {
      publishedTime: '2026-05-05',
      modifiedTime: '2026-05-05',
      authors: ['Align USA Group'],
      section: 'Compliance',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'I-9 Compliance Checklist for Staffing Companies',
    description: 'Complete I-9 compliance checklist for staffing companies.',
  },
};

const lastUpdated = 'May 5, 2026';
const publishDate = '2026-05-05';

// Structured Data
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'I-9 Compliance Checklist', item: `${SITE_URL}/blog/i-9-compliance-checklist-staffing` },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'I-9 Compliance Checklist for Staffing Companies',
  description: 'Complete I-9 compliance checklist for staffing companies — Form I-9 requirements, common mistakes, document examination rules, and retention guidelines.',
  image: `${SITE_URL}/og-image.png`,
  datePublished: publishDate,
  dateModified: lastUpdated,
  author: {
    '@type': 'Organization',
    name: 'Align USA Group',
    url: SITE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Align USA Group',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo/icon.png`,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/blog/i-9-compliance-checklist-staffing`,
  },
  articleSection: 'Compliance',
  keywords: ['I-9 compliance', 'Form I-9', 'staffing compliance', 'employment eligibility', 'compliance checklist'],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Complete I-9 Compliance for Staffing Companies',
  description: 'Step-by-step guide to completing Form I-9 correctly for every staffing placement',
  totalTime: 'PT45M',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Complete Section 1 on Day 1',
      text: 'Have the employee complete Section 1 of Form I-9 by the end of their first day of work. Verify all information is accurate and the employee has signed and dated the form.',
    },
    {
      '@type': 'HowToStep',
      name: 'Schedule Document Review Within 3 Business Days',
      text: 'Arrange for physical examination of original documents within three business days of the start date. The employer representative must physically examine the documents, not view them electronically.',
    },
    {
      '@type': 'HowToStep',
      name: 'Verify Acceptable Document Combinations',
      text: 'Accept either one List A document (proves identity AND employment authorization) OR one List B (identity) plus one List C (employment authorization) document. Verify all documents are not expired.',
    },
    {
      '@type': 'HowToStep',
      name: 'Complete Section 2 and Retain Records',
      text: 'Complete Section 2 of Form I-9 within three business days. Record document details, the preparer/translator information if applicable, and sign and date the form. Store securely.',
    },
    {
      '@type': 'HowToStep',
      name: 'Track Reverification Deadlines',
      text: 'Monitor employment authorization expiration dates for all workers. Complete Section 3 reverification before expiration, not after. Set calendar reminders 60 days before each expiration.',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What happens if we miss the 3-business-day I-9 deadline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Missing the I-9 deadline is a technical violation that can result in civil penalties ranging from $230 to $2,300 per violation. ICE typically issues notices of inspection before penalties are assessed, giving you an opportunity to correct technical errors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can we accept electronic copies of I-9 documents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Employers must physically examine original documents. Electronic copies, photos, or scanned documents are not acceptable. Remote work arrangements do not eliminate this requirement — you must arrange for in-person document review.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long must we retain I-9 forms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I-9 forms must be retained for either three years from the date of hire OR one year after the employee\'s separation date, whichever is later. After this period, forms must be securely destroyed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most common I-9 mistakes staffing companies make?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common mistakes include accepting expired documents, failing to physically examine documents, using incorrect document combinations, missing Section 3 reverification deadlines for OPT/CPT workers, and not maintaining secure storage.',
      },
    },
  ],
};

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
              <span>·</span>
              <span>By Align USA Group</span>
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

            <h3>Why the Distinction Between Business Days and Calendar Days Matters</h3>
            <p className="body" style={{ margin: 0 }}>
              If a worker starts on Friday, the three business days would be Monday, Tuesday, and Wednesday — not Saturday. Many compliance failures occur when HR teams mistakenly count calendar days. For workers starting before or during holidays, always verify the business day calculation to avoid unintentional violations.
            </p>

            <h2>Document Examination: Physical Inspection Required</h2>
            <p className="body" style={{ margin: 0 }}>
              This is the single most violated requirement of the I-9 process. Federal law requires employers to physically examine the documents that an employee presents to verify their identity and employment authorization. Accepting a photo or scanned copy of a passport or green card is not compliant — the employer must see the original, physical document.
            </p>
            <p className="body" style={{ margin: 0 }}>
              For remote workers, this requirement is especially important. Remote work does not eliminate the physical inspection requirement. Employers must arrange for documents to be presented in person or through a designated agent who can physically examine them. Accepting documents via email or upload without physical inspection is a violation regardless of whether the employer is a staffing agency or a direct employer.
            </p>

            <h3>Designated Agent Option for Remote Placements</h3>
            <p className="body" style={{ margin: 0 }}>
              Employers may use a designated agent — such as a notary public, HR professional at a client site, or immigration attorney — to physically examine documents on their behalf. The designated agent must still follow all I-9 completion rules and sign the Form I-9 as the employer representative. This option is particularly useful for staffing agencies with remote placements.
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

            <h3>OPT/CPT Reverification Timeline</h3>
            <p className="body" style={{ margin: 0 }}>
              For OPT workers, EAD cards typically expire 90 days after the program end date listed on the I-20. Staffing agencies must track the program end date, not just the EAD expiration date, to ensure reverification happens within the compliance window. Set calendar reminders at 60 and 30 days before expiration.
            </p>

            <h2>Retention and Storage</h2>
            <p className="body" style={{ margin: 0 }}>
              Form I-9 retention requirements are straightforward but strict: employers must retain I-9 forms for either three years from the date of hire or one year after the employee's separation from employment — whichever is later. After this retention period, the form must be destroyed according to document disposal standards.
            </p>
            <p className="body" style={{ margin: 0 }}>
              I-9 forms must be stored separately from general personnel files with restricted access. During an ICE audit, the government can request I-9 forms for a specific period or specific employees. Having organized, accessible I-9 files significantly reduces audit stress and potential penalties.
            </p>

            {/* FAQ Section */}
            <div style={{ background: 'var(--mist)', borderRadius: 16, padding: 28, display: 'grid', gap: 16 }}>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 500 }}>Frequently Asked Questions</h3>
              <div style={{ display: 'grid', gap: 12 }}>
                <div style={{ display: 'grid', gap: 4 }}>
                  <h4 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>What happens if we miss the 3-business-day I-9 deadline?</h4>
                  <p style={{ margin: 0, fontSize: 14, color: 'var(--body-gray)' }}>Missing the I-9 deadline is a technical violation that can result in civil penalties ranging from $230 to $2,300 per violation. ICE typically issues notices of inspection before penalties are assessed, giving you an opportunity to correct technical errors.</p>
                </div>
                <div style={{ display: 'grid', gap: 4 }}>
                  <h4 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>Can we accept electronic copies of I-9 documents?</h4>
                  <p style={{ margin: 0, fontSize: 14, color: 'var(--body-gray)' }}>No. Employers must physically examine original documents. Electronic copies, photos, or scanned documents are not acceptable. Remote work arrangements do not eliminate this requirement.</p>
                </div>
                <div style={{ display: 'grid', gap: 4 }}>
                  <h4 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>How long must we retain I-9 forms?</h4>
                  <p style={{ margin: 0, fontSize: 14, color: 'var(--body-gray)' }}>I-9 forms must be retained for either three years from the date of hire OR one year after the employee's separation date, whichever is later.</p>
                </div>
              </div>
            </div>

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

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
