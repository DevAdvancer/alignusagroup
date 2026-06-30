import Link from 'next/link';
import PageHero from '../../../components/PageHero';

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
  openGraph: {
    title: 'OPT and CPT Staffing: How Staffing Agencies Hire International Students',
    description: 'Practical compliance guide for staffing agencies on hiring international students on OPT and CPT work authorization.',
  },
};

const lastUpdated = 'May 18, 2026';

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

            <h2>OPT: The Bigger Compliance Picture</h2>
            <p className="body" style={{ margin: 0 }}>
              OPT provides up to 12 months of work authorization following the completion of a degree program. STEM degree holders can extend OPT by an additional 24 months through the STEM OPT extension, bringing the total potential authorization period to 36 months. Unlike CPT, OPT authorization is applied for through USCIS and the Employment Authorization Document (EAD) card serves as proof of work authorization.
            </p>
            <p className="body" style={{ margin: 0 }}>
              For staffing agencies placing OPT workers, the compliance picture is more complex than CPT. The agency — as the employer of record — must verify the EAD card, check the start and end dates on the card, and establish a tracking system that flags when authorization is about to expire. An OPT worker whose authorization has expired is unauthorized to work, regardless of whether they have an ongoing placement with the agency.
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

            <h2>Align USA: OPT and CPT Staffing Done Right</h2>
            <p className="body" style={{ margin: 0 }}>
              Align USA Group places international students on OPT and CPT through our Houston-based staffing program. We require EAD verification, I-9 completion, and E-Verify enrollment for every OPT placement, and we maintain an automated tracking system that alerts our compliance team 90 days before any worker's authorization expires. For CPT placements, we verify DSO authorization letters and confirm that the work is related to the student's field of study.
            </p>
            <p className="body" style={{ margin: 0 }}>
              Compliance is not a afterthought for Align USA — it is the default. We built our staffing practice on the understanding that in this industry, the companies that stay compliant outlast the ones that do not.
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
