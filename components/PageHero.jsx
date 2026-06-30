import Link from 'next/link';

export default function PageHero({ crumb, title, lead }) {
  return (
    <section className="page-hero">
      <div className="container">
        {crumb && (
          <nav aria-label="Breadcrumb">
            <ol className="crumbs reveal in">
              <li>
                <Link href="/" aria-current={crumb === crumb ? 'page' : undefined}>
                  Home
                </Link>
              </li>
              {crumb && (
                <>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page">{crumb}</li>
                </>
              )}
            </ol>
          </nav>
        )}
        <h1 className="display-l reveal in" style={{ fontWeight: 300 }} tabIndex="-1">
          {title}
        </h1>
        {lead && <p className="lead reveal in">{lead}</p>}
      </div>
    </section>
  );
}