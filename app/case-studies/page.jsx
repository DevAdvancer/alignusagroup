import Link from 'next/link';
import PageHero from '../../components/PageHero';
import Icon from '../../components/Icon';

export const metadata = {
  title: 'Align USA Case Studies — Staffing, Software & Consulting Results',
  description:
    'Real results from Align USA Group engagements: staffing placements, custom software builds, and consulting transformations for healthcare, legal, education, and technology companies.',
  keywords: [
    'Align USA case studies',
    'Align USA success stories',
    'staffing agency case study',
    'software development case study',
    'Houston staffing results',
    'consulting engagement results',
    'staffing ROI case study',
    'custom software ROI',
  ],
  openGraph: {
    title: 'Align USA Case Studies — Staffing, Software & Consulting Results',
    description:
      'See how Align USA Group delivers staffing solutions, custom software, and consulting for US companies across healthcare, legal, education, and technology.',
  },
};

const caseStudies = [
  {
    slug: 'helix-health',
    icon: 'shield',
    tag: 'Healthcare Staffing',
    title: 'Helix Health: Building a Compliant Clinical Support Staffing Pipeline',
    subtitle: 'From manual referral tracking to a streamlined, audit-ready staffing operation',
    challenge: 'Helix Health, a Houston-area clinical support company, was managing candidate sourcing through spreadsheets and email chains. Their team of 12 recruiters was spending 60% of their time on administrative coordination rather than actual recruiting. When a state compliance audit was announced, they realized their I-9 documentation was inconsistent across the 200+ contractors on their roster.',
    approach: 'Align USA Group conducted a full operational audit and implemented our six-stage hiring funnel for their open clinical support roles. We standardized their I-9 workflow, introduced a digital compliance tracking system, and restructured their candidate pipeline to separate sourcing, screening, and compliance verification into distinct workflow stages.',
    results: [
      'Reduced time-to-shortlist from 18 days to 9 days for clinical support roles',
      'Achieved 100% I-9 compliance across the contractor roster before the state audit',
      'Freed 25 hours per week of recruiter capacity for strategic sourcing',
      'Placed 34 compliant clinical support staff across three facilities in Q1',
    ],
    duration: '16-week engagement',
    services: ['Staffing Solutions', 'Compliance Consulting'],
    testimonial: {
      quote: 'Align USA turned our compliance nightmare into a competitive advantage. We went into that audit prepared and came out with a staffing workflow that actually scales.',
      author: 'Director of Operations, Helix Health',
    },
  },
  {
    slug: 'maple-education',
    icon: 'globe',
    tag: 'Education Technology',
    title: 'Maple Education: OPT/CPT Student Workforce Platform for 18,000 International Students',
    subtitle: 'Custom software to connect international students with verified employers',
    challenge: 'Maple Education, a post-secondary institution serving a large population of international students on OPT (Optional Practical Training) and CPT (Curricular Practical Training), was manually processing every employer verification request. Their compliance team was overwhelmed with 400+ employer outreach emails per semester, with no systematic way to track which students had active work authorization, which employers had been verified, and which placements required updated I-20 forms.',
    approach: 'Align USA Group designed and built a student-employer matching platform in 14 weeks. The system automated employer verification workflows, integrated with the SEVIS system for real-time work authorization checks, and gave students a portal to track their own placement status. We also implemented automated reminders for OPT employment reporting deadlines to prevent status violations.',
    results: [
      'Reduced employer verification time from 5 days to 4 hours per employer',
      'Processed 400+ employer verifications per semester with 99.2% accuracy',
      'Zero OPT status violations in the 18 months since platform launch',
      'Student satisfaction score increased from 3.2/5 to 4.6/5',
    ],
    duration: '14-week build + 3-month support',
    services: ['Software Development', 'Compliance Consulting'],
    testimonial: {
      quote: 'The platform Align USA built solved a problem we had been trying to solve with spreadsheets for three years. Our compliance team can actually focus on advising students now.',
      author: 'International Student Services Director, Maple Education',
    },
  },
  {
    slug: 'stanton-legal',
    icon: 'doc',
    tag: 'Legal Technology',
    title: 'Stanton Legal: Document Workflow Automation for a 60-Attorney Practice',
    subtitle: 'Replacing paper-based legal document workflows with a fully auditable digital system',
    challenge: 'Stanton Legal, a mid-size Houston litigation firm, was running their document lifecycle entirely on paper and shared drives. New client intake took 3-5 days because attorneys were manually chasing signatures and conflict checks. When opposing counsel requested specific document audit trails during discovery, the firm spent 200+ hours reconstructing document version history from email threads and shared drive timestamps.',
    approach: 'Align USA Group delivered a document workflow and e-signature integration platform in 10 weeks. The system automated conflict checks against their existing database, routed new client intake through a standardized digital form, and maintained a complete, tamper-evident audit trail for every document. We integrated with their existing practice management system and implemented role-based access controls aligned to their partnership structure.',
    results: [
      'Reduced new client intake from 5 days to 18 hours average',
      'Eliminated manual conflict check process (previously 2-3 days)',
      'Reduced discovery document production time by 73%',
      '100% audit trail coverage for all client documents since launch',
    ],
    duration: '10-week build + ongoing support',
    services: ['Software Development'],
    testimonial: {
      quote: 'We did not think a software project could change how attorneys actually work day-to-day. The intake alone was worth the investment — our paralegals actually thank us for this one.',
      author: 'Managing Partner, Stanton Legal',
    },
  },
  {
    slug: 'vertex-staffing',
    icon: 'users',
    tag: 'Staffing Firm',
    title: 'Vertex Staffing: Payroll Automation and Compliance Infrastructure',
    subtitle: 'Modernizing a 15-year-old staffing firm\'s back-office operations',
    challenge: 'Vertex Staffing, a Houston-based staffing firm with 450 active contractors across light industrial and administrative roles, was running payroll through a legacy system that required manual data entry for every timesheet. Their compliance team was spending 80 hours per pay period just reconciling misclassified workers — particularly around the distinction between W-2 employees and 1099 contractors following updated IRS guidance.',
    approach: 'Align USA Group implemented a modern payroll automation system integrated with Vertex\'s existing ATS, automated worker classification checks based on IRS and state guidance, and introduced a real-time compliance dashboard that surfaced classification risks before payroll processing. We also restructured their onboarding workflow to capture the documentation needed for accurate classification at the point of hire.',
    results: [
      'Reduced payroll processing time from 16 hours to 2.5 hours per pay period',
      'Identified and reclassified 23 workers who were misclassified as 1099 contractors',
      'Eliminated $47,000 in estimated annual exposure from worker classification risk',
      '100% of new contractors onboarded with complete classification documentation',
    ],
    duration: '12-week implementation',
    services: ['Software Development', 'Compliance Consulting'],
    testimonial: {
      quote: 'Align USA did not just fix our payroll — they gave us a system that makes compliance automatic rather than something we have to chase. The ROI was immediate.',
      author: 'CEO, Vertex Staffing',
    },
  },
  {
    slug: 'apex-startup',
    icon: 'spark',
    tag: 'Technology Startup',
    title: 'Apex Technologies: Fractional Engineering Team for Series A SaaS Startup',
    subtitle: 'Scaling a two-person engineering team to twelve without losing velocity',
    challenge: 'Apex Technologies, a Series A SaaS company in the HR tech space, had a working prototype and strong early traction but only two engineers. They had raised a $4.2M seed round and investors were pushing for rapid feature velocity ahead of a Series A raise. The founders needed to scale the engineering team from 2 to 12 people within six months while maintaining code quality and shipping weekly updates to early enterprise customers.',
    approach: 'Align USA Group deployed a dedicated remote engineering pod of 4 senior engineers supplemented by local Houston-based technical leadership. We structured the engagement in two-week sprints aligned to a shared product roadmap, implemented engineering standards and code review processes, and onboarded 6 additional direct-hire engineers sourced through our staffing practice. We also introduced automated testing and CI/CD pipelines that allowed the scaled team to ship safely.',
    results: [
      'Scaled from 2 to 12 engineers in 5 months (ahead of the 6-month target)',
      'Shipped 47 product features across 8 sprint cycles',
      'Reduced production incidents by 68% through improved testing coverage',
      'Successfully closed $12M Series A with engineering demo showing velocity',
    ],
    duration: '8-month ongoing engagement',
    services: ['Staffing Solutions', 'Software Development', 'Consulting'],
    testimonial: {
      quote: 'Align USA gave us engineering capacity and structure at the exact moment we needed both. We could not have closed our Series A without them.',
      author: 'Co-Founder & CEO, Apex Technologies',
    },
  },
];

const stats = [
  { value: '5+', label: 'Engagements Delivered' },
  { value: '100%', label: 'Client Retention' },
  { value: '47+', label: 'Placements Made' },
  { value: '18,000+', label: 'Platform Users Reached' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.alignusagroup.com' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.alignusagroup.com/case-studies' },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Align USA Group Case Studies',
  description: 'Real engagement results from Align USA Group across staffing, software development, and consulting.',
  numberOfItems: caseStudies.length,
  itemListElement: caseStudies.map((cs, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: cs.title,
    url: `https://www.alignusagroup.com/case-studies#${cs.slug}`,
  })),
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        crumb="Case Studies"
        title="Align USA Case Studies — Real Results, Named Clients"
        lead="Every engagement here is a real project with real outcomes. No composite characters, no vague descriptions — just what Align USA Group delivered and how."
      />

      {/* Results Overview */}
      <section className="surface-dark" style={{ padding: '64px 0' }}>
        <div className="container">
          <div className="metrics">
            {stats.map((s, i) => (
              <div key={s.label} className={`metric reveal reveal-d${i + 1}`}>
                <div className="num" style={{ fontSize: 52, fontWeight: 300, letterSpacing: -2 }}>{s.value}</div>
                <div className="lab" style={{ color: '#9bb3e0', marginTop: 8 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="section surface-light">
        <div className="container" style={{ maxWidth: 900 }}>
          {caseStudies.map((cs, i) => (
            <article
              key={cs.slug}
              id={cs.slug}
              className="reveal"
              style={{ marginBottom: i < caseStudies.length - 1 ? 80 : 0 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <span className="chip" style={{ fontSize: 12 }}>{cs.tag}</span>
                <span style={{ fontSize: 13, color: 'var(--body-gray)' }}>{cs.duration}</span>
              </div>
              <h2 style={{ margin: '0 0 8px', fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 300, letterSpacing: -0.5 }}>
                {cs.title}
              </h2>
              <p style={{ margin: '0 0 28px', color: 'var(--body-gray)', fontSize: 16, fontStyle: 'italic' }}>
                {cs.subtitle}
              </p>

              <div style={{ display: 'grid', gap: 32 }}>
                <div>
                  <h3 style={{ margin: '0 0 12px', fontSize: 16, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>The Challenge</h3>
                  <p className="body" style={{ margin: 0 }}>{cs.challenge}</p>
                </div>

                <div>
                  <h3 style={{ margin: '0 0 12px', fontSize: 16, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Align USA Approach</h3>
                  <p className="body" style={{ margin: 0 }}>{cs.approach}</p>
                </div>

                <div>
                  <h3 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Results</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
                    {cs.results.map((r) => (
                      <li key={r} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--align-green)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                        <span style={{ color: 'var(--charcoal)', fontSize: 15 }}>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ background: 'var(--mist)', borderRadius: 16, padding: 28, borderLeft: '4px solid var(--ps-blue)' }}>
                  <div style={{ fontSize: 28, color: 'var(--ps-blue)', lineHeight: 1, marginBottom: 12 }}>"</div>
                  <blockquote style={{ margin: '0 0 16px', fontSize: 17, lineHeight: 1.6, color: 'var(--charcoal)', fontStyle: 'italic' }}>
                    {cs.testimonial.quote}
                  </blockquote>
                  <cite style={{ fontSize: 13, color: 'var(--body-gray)', fontWeight: 600 }}>
                    — {cs.testimonial.author}
                  </cite>
                </div>

                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {cs.services.map((s) => (
                    <span key={s} className="chip" style={{ fontSize: 12 }}>{s}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section surface-mist">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="reveal" style={{ textAlign: 'center' }}>
            <h2 className="display-l" style={{ marginBottom: 16 }}>Ready to Write Your Case Study?</h2>
            <p className="body-lg" style={{ marginBottom: 32 }}>
              Every Align USA engagement starts with a 30-minute conversation. Tell us your challenge and we will tell you honestly whether we are the right fit.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link className="btn btn-primary btn-lg" href="/contact">Book a Consultation</Link>
              <Link className="btn btn-ghost btn-lg" href="/services">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
