import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div>
            <div className="brandmark">
              <Image
                src="/logo/wordmark.png"
                alt="Align USA Group — Staffing, Software, Consulting"
                width={1600}
                height={508}
                style={{ height: 44, width: 'auto', display: 'block' }}
              />
            </div>
            <p style={{ color: '#cfe1ff', maxWidth: 360, lineHeight: 1.6, fontSize: 14 }}>
              Advance Leadership and Integrated Group of Networking LLC. A Houston-based Align USA staffing,
              software, and consulting partner serving US companies.
            </p>
          </div>
          <div>
            <h3 style={{ color: '#fff', marginBottom: 16, fontSize: 14, fontWeight: 600 }}>Align USA Services</h3>
            <ul>
              <li><Link href="/staffing">Align USA Staffing Solutions</Link></li>
              <li><Link href="/software">Align USA Software Development</Link></li>
              <li><Link href="/consulting">Align USA Consulting Services</Link></li>
              <li><Link href="/services">All Align USA Services</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#fff', marginBottom: 16, fontSize: 14, fontWeight: 600 }}>Align USA Company</h3>
            <ul>
              <li><Link href="/about">About Align USA</Link></li>
              <li><Link href="/case-studies">Align USA Case Studies</Link></li>
              <li><Link href="/careers">Align USA Careers</Link></li>
              <li><Link href="/blog">Align USA Insights</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#fff', marginBottom: 16, fontSize: 14, fontWeight: 600 }}>Industries</h3>
            <ul>
              <li><Link href="/industries">Healthcare</Link></li>
              <li><Link href="/industries">Legal &amp; Compliance</Link></li>
              <li><Link href="/industries">Education</Link></li>
              <li><Link href="/industries">Technology</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#fff', marginBottom: 16, fontSize: 14, fontWeight: 600 }}>Contact Align USA</h3>
            <ul>
              <li><a href="mailto:alignus26@gmail.com">alignus26@gmail.com</a></li>
              <li style={{ color: '#cfe1ff', fontSize: 14, lineHeight: 1.55 }}>
                Align USA HQ — Houston, TX<br />
                17350 State Hwy 249, Ste 220 #35058<br />
                Houston, TX 77064
              </li>
              <li><Link href="/contact">Book Align USA Consultation</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <small>
            &copy; {new Date().getFullYear()} Advance Leadership and Integrated Group of Networking LLC.
            All rights reserved. Align USA Group.
          </small>
          <nav aria-label="Legal links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookie Preferences</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
