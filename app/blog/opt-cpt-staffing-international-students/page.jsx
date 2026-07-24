import Link from 'next/link';
import PageHero from '../../../components/PageHero';

const SITE_URL = 'https://www.alignusagroup.com';

export const dynamic = 'force-static';

export const metadata = {
  title: 'OPT and CPT Staffing: How Staffing Agencies Hire International Students',
  description: 'A practical guide for staffing agencies and employers on hiring international students on OPT and CPT — compliance requirements, document checks, and best practices from Align USA Group.',
  keywords: [
    'OPT staffing',
    'CPT staffing',
    'international student staffing',
    'student workforce hiring',
    'OPT CPT employment',
    'staffing OPT students',
    'CPT placement agencies',
    'international student employment',
  ],
  alternates: {
    canonical: `${SITE_URL}/blog/opt-cpt-staffing-international-students`,
  },
  openGraph: {
    title: 'OPT and CPT Staffing: How Staffing Agencies Hire International Students',
    description: 'Practical compliance guide for staffing agencies on hiring international students on OPT and CPT work authorization.',
    url: `${SITE_URL}/blog/opt-cpt-staffing-international-students`,
    type: 'article',
    article: {
      publishedTime: '2026-05-18',
      modifiedTime: '2026-05-18',
      authors: ['Align USA Group'],
      section: 'International Staffing',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OPT and CPT Staffing: How Staffing Agencies Hire International Students',
    description: 'Practical compliance guide for staffing agencies on hiring international students on OPT and CPT work authorization.',
  },
};

const lastUpdated = 'May 18, 2026';
const publishDate = '2026-05-18';

// Structured Data
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'OPT and CPT Staffing', item: `${SITE_URL}/blog/opt-cpt-staffing-international-students` },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'OPT and CPT Staffing: How Staffing Agencies Hire International Students',
  description: 'A practical guide for staffing agencies and employers on hiring international students on OPT and CPT — compliance requirements, document checks, and best practices.',
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
    '@id': `${SITE_URL}/blog/opt-cpt-staffing-international-students`,
  },
  articleSection: 'International Staffing',
  keywords: ['OPT staffing', 'CPT staffing', 'international students', 'work authorization', 'F-1 visa', 'EAD card'],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Hire International Students on OPT and CPT as a Staffing Agency',
  description: 'Step-by-step guide to compliantly hiring international students on OPT and CPT work authorization',
  totalTime: 'PT60M',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Verify F-1 visa status and work eligibility',
      text: 'Confirm the student holds valid F-1 status, check their program end date, and verify whether they are using CPT (during studies) or OPT (after/before completion).',
    },
    {
      '@type': 'HowToStep',
      name: 'Collect required documents',
      text: 'For CPT: obtain the DSO authorization letter and I-20 with CPT endorsement. For OPT: obtain the EAD card, I-94, and passport with valid visa stamp.',
    },
    {
      '@type': 'HowToStep',
      name: 'Complete Form I-9 correctly',
      text: 'Complete Section 1 on Day 1 and Section 2 within 3 business days with physical document examination. For OPT: List A (EAD card + passport/visa). For CPT: List B (passport/visa + I-94) + List C (I-20 with CPT authorization).',
    },
    {
      '@type': 'HowToStep',
      name: 'Set authorization tracking alerts',
      text: 'Establish a calendar reminder system at 90, 60, and 30 days before any work authorization expiration. OPT workers need EAD renewal tracking; CPT workers need DSO re-verification before program end.',
    },
    {
      '@type': 'HowToStep',
      name: 'Run E-Verify at the right time',
      text: 'For OPT workers: run E-Verify only after the EAD card is physically presented. For CPT workers: E-Verify is not applicable since CPT work authorization comes from the university, not USCIS.',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between OPT and CPT for staffing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CPT (Curricular Practical Training) is work authorization during studies, authorized by the university DSO. OPT (Optional Practical Training) is work authorization after degree completion, applied through USCIS and documented with an EAD card. Staffing agencies must use different compliance processes for each.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can staffing agencies hire international students on OPT and CPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, staffing agencies can hire international students on OPT and CPT, but they must serve as the employer of record and ensure full I-9 compliance, document verification, and work authorization tracking. The agency is legally responsible for the worker\'s compliance throughout the placement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the penalties for non-compliance when hiring OPT/CPT workers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Civil penalties can reach $1,500 per violation. Repeat offenses carry criminal penalties up to $20,000 and 10 months imprisonment. Staffing agencies face debarment from federal contracts. Client relationship damage from compliance failures often has the highest long-term cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do staffing agencies track OPT and CPT work authorization expiration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Staffing agencies should use an automated tracking system with calendar alerts at 90, 60, and 30 days before any work authorization expires. For OPT workers, track EAD card expiration dates. For CPT workers, track the program end date with the DSO. Both CPT and OPT reverifications must be completed before expiration.',
      },
    },
  ],
};

export default function BlogPost() {
  return (
    <>
      <PageHero
        crumb="Insights"
        title="OPT and CPT Staffing: How Staffing Agencies Hire International Students"
        lead="International students on OPT and CPT represent a highly motivated, often underutilized talent pool. But hiring them requires navigating a compliance landscape that trips up even experienced HR teams."
      />

      <section className="section surface-light">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="reveal" style={{ display: 'grid', gap: 28 }}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 13, color: 'var(--body-gray)' }}>
              <span>Published: {lastUpdated}</span>
              <span>·</span>
              <span>9 min read</span>
              <span>·</span>
              <span>International Staffing</span>
              <span>·</span>
              <span>By Align USA Group</span>
            </div>

            <p className="body-lg" style={{ margin: 0 }}>
              International students in the United States on F-1 visas have two primary work authorization pathways: Curricular Practical Training (CPT) during their academic program and Optional Practical Training (OPT) after or during their program. Both provide legal employment authorization — and both come with specific requirements that employers, including staffing agencies, must understand and follow.
            </p>

            <h2>CPT: What Staffing Agencies Need to Know</h2>
            <p className="body" style={{ margin: 0 }}>
              CPT is work authorization for employment that is an integral part of the student's academic curriculum — typically an internship, practicum, or co-op that earns academic credit. CPT authorization is granted by the student's university Designated School Official (DSO), not by USCIS. The employer does not need to apply for anything with the government; the university handles the authorization.
            </p>
            <p className="body" style={{ margin: 0 }}>
              For staffing agencies, the critical CPT requirements are: the employment must be related to the student's field of study (verified by the university), the student must have CPT authorization before starting work (retroactive CPT is generally not permitted), and the work cannot exceed 20 hours per week during the academic semester unless the student is enrolled in full-time CPT as part of the curriculum.
            </p>
            <p className="body" style={{ margin: 0 }}>
              A common mistake staffing agencies make with CPT workers is treating them like any other contractor. The DSO must approve each CPT employment, and the staffing agency's work description needs to align with what the university has authorized. If the actual work diverges from what was approved, the CPT authorization may be invalidated — and so is the student's work authorization.
            </p>

            <h3>CPT vs. Regular Employment: Key Differences for Staffing Agencies</h3>
            <p className="body" style={{ margin: 0 }}>
              Unlike standard employment, CPT authorization requires ongoing coordination with the university DSO. If the student's job duties change, the new duties may require a new CPT authorization. If the student changes employers, the new employer must also be approved by the DSO. Staffing agencies that rotate CPT workers across client assignments without coordinating with the student's university are operating outside compliance.
            </p>

            <h2>OPT: The Bigger Compliance Picture</h2>
            <p className="body" style={{ margin: 0 }}>
              OPT provides up to 12 months of work authorization following the completion of a degree program. STEM degree holders can extend OPT by an additional 24 months through the STEM OPT extension, bringing the total potential authorization period to 36 months. Unlike CPT, OPT authorization is applied for through USCIS and the Employment Authorization Document (EAD) card serves as proof of work authorization.
            </p>
            <p className="body" style={{ margin: 0 }}>
              For staffing agencies placing OPT workers, the compliance picture is more complex than CPT. The agency — as the employer of record — must verify the EAD card, check the start and end dates on the card, and establish a tracking system that flags when authorization is about to expire. An OPT worker whose authorization has expired is unauthorized to work, regardless of whether they have an ongoing placement with the agency.
            </p>

            <h3>STEM OPT Extension Compliance Requirements</h3>
            <p className="body" style={{ margin: 0 }}>
              For STEM degree holders using the 24-month STEM OPT extension, there are additional reporting requirements beyond basic E-Verify compliance. Employers must confirm that the OPT worker is working at least 20 hours per week in a role directly related to their STEM degree field. Employers must also report material changes to the STEM OPT employer's information to the university DSO within 10 days. Staffing agencies placing STEM OPT workers need to track and report these changes for every placement.
            </p>

            <h2>E-Verify and OPT/CPT Workers</h2>
            <p className="body" style={{ margin: 0 }}>
              E-Verify can confirm the validity of an OPT worker's employment authorization — but only if the case is initiated after the EAD card is presented. E-Verify will not verify OPT eligibility if initiated before the EAD is issued or before the OPT start date. Staffing agencies that run E-Verify on an OPT candidate before their EAD arrives will receive an initial verification result, not a confirmation.
            </p>

            <div style={{ background: 'var(--mist)', borderRadius: 16, padding: 28, display: 'grid', gap: 14 }}>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 500 }}>OPT/CPT Staffing Compliance Checklist</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                {[
                  'Verify F-1 visa status and current school enrollment (CPT) or program completion date (OPT)',
                  'Collect and verify DSO CPT authorization letter before start date (CPT)',
                  'Verify EAD card: check card number, category (A-11 for STEM OPT), and expiration date',
                  'Confirm employment is related to field of study for CPT placements',
                  'Run E-Verify only after EAD card is physically presented',
                  'Set calendar alerts at 90, 60, and 30 days before OPT authorization expiration',
                  'Document I-20 (for CPT) and EAD card (for OPT) in the worker file',
                  'Complete Form I-9 with the appropriate document combination for each worker',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 10, fontSize: 14 }}>
                    <span style={{ color: 'var(--align-green)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2>The Risk of Non-Compliance</h2>
            <p className="body" style={{ margin: 0 }}>
              The stakes for OPT/CPT non-compliance are substantial. Employers who knowingly employ an OPT worker after their authorization expires face civil penalties of up to $1,500 per violation, criminal penalties of up to $20,000 and up to 10 months of imprisonment for repeat offenders, and debarment from federal contracting. For staffing agencies whose client relationships depend on compliance certification, a single violation can end multiple client contracts.
            </p>
            <p className="body" style={{ margin: 0 }}>
              According to ICE data, I-9 violations involving F-1 visa workers are among the most commonly cited in staffing agency audits. The primary failure point is not initial verification — most agencies check EAD cards — but sustained tracking. EAD cards expire. Students graduate. Employment authorization changes. Without an automated tracking system, these transitions generate compliance failures that compound over time.
            </p>

            {/* FAQ Section */}
            <div style={{ background: 'var(--mist)', borderRadius: 16, padding: 28, display: 'grid', gap: 16 }}>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 500 }}>Frequently Asked Questions</h3>
              <div style={{ display: 'grid', gap: 12 }}>
                <div style={{ display: 'grid', gap: 4 }}>
                  <h4 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>Can staffing agencies hire international students on OPT and CPT?</h4>
                  <p style={{ margin: 0, fontSize: 14, color: 'var(--body-gray)' }}>Yes, staffing agencies can hire international students on OPT and CPT as the employer of record. The agency must ensure full I-9 compliance, document verification, and work authorization tracking for every placement.</p>
                </div>
                <div style={{ display: 'grid', gap: 4 }}>
                  <h4 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>What documents do we need to verify for OPT workers?</h4>
                  <p style={{ margin: 0, fontSize: 14, color: 'var(--body-gray)' }}>For OPT workers: the Employment Authorization Document (EAD card), Form I-94, and passport with valid F-1 visa stamp. The EAD card is the primary work authorization document for I-9 Form List A completion.</p>
                </div>
                <div style={{ display: 'grid', gap: 4 }}>
                  <h4 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>How does OPT/CPT staffing benefit Houston employers?</h4>
                  <p style={{ margin: 0, fontSize: 14, color: 'var(--body-gray)' }}>Houston-area universities produce thousands of STEM graduates annually on F-1 visas. OPT provides 12-36 months of authorized work, and CPT provides ongoing access during studies. Staffing agencies that build structured programs around this talent pool gain a significant competitive advantage.</p>
                </div>
              </div>
            </div>

            <h2>Align USA: OPT and CPT Staffing Done Right</h2>
            <p className="body" style={{ margin: 0 }}>
              Align USA Group places international students on OPT and CPT through our Houston-based staffing program. We require EAD verification, I-9 completion, and E-Verify enrollment for every OPT placement, and we maintain an automated tracking system that alerts our compliance team 90 days before any worker's authorization expires. For CPT placements, we verify DSO authorization letters and confirm that the work is related to the student's field of study.
            </p>
            <p className="body" style={{ margin: 0 }}>
              Compliance is not an afterthought for Align USA — it is the default. We built our staffing practice on the understanding that in this industry, the companies that stay compliant outlast the ones that do not. If you need a staffing partner that treats OPT/CPT compliance as a first-class discipline, not an afterthought, contact Align USA Group in Houston, TX.
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
