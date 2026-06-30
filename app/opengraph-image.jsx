import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Align USA Group — Staffing, Software, Consulting in Houston, TX';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #04153d 0%, #0070cc 100%)',
          padding: 80,
          fontFamily: 'system-ui',
          position: 'relative',
        }}
      >
        {/* Logo badge */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 60,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: '#43c463',
              boxShadow: '0 0 20px rgba(67, 196, 99, 0.5)',
            }}
          />
          <span
            style={{
              color: '#cfe1ff',
              fontSize: 20,
              letterSpacing: 3,
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            alignusagroup.com
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 60 }}>
          <div
            style={{
              color: '#fff',
              fontSize: 88,
              fontWeight: 300,
              letterSpacing: -2,
              lineHeight: 1,
            }}
          >
            Align USA
          </div>
          <div
            style={{
              color: '#fff',
              fontSize: 64,
              fontWeight: 300,
              letterSpacing: -1,
              lineHeight: 1.1,
              opacity: 0.9,
            }}
          >
            Group
          </div>
          <div
            style={{
              color: '#1eaedb',
              fontSize: 32,
              fontWeight: 500,
              letterSpacing: 2,
              textTransform: 'uppercase',
              marginTop: 16,
            }}
          >
            Staffing · Software · Consulting
          </div>
        </div>

        {/* Description */}
        <div
          style={{
            color: '#bcc6e3',
            fontSize: 32,
            fontWeight: 300,
            lineHeight: 1.3,
            maxWidth: 900,
          }}
        >
          Houston-based staffing, software, and consulting for US companies. Compliance-ready hiring from day one.
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            color: '#9bb3e0',
            fontSize: 20,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>📍</span>
            <span>Houston, TX</span>
          </div>
          <div>alignusagroup.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
