export default function AlignGlyph({ size = 36, mono = false }) {
  const navy = mono ? '#fff' : '#1e2a78';
  const navy2 = mono ? '#fff' : '#2c3aa0';
  const green = mono ? '#fff' : '#43c463';
  return (
    <span
      className="align-glyph"
      style={{
        width: size,
        height: size,
        background: mono ? 'transparent' : '#fff',
        padding: mono ? 0 : 4,
      }}
    >
      <svg viewBox="0 0 64 64" aria-hidden>
        <path
          d="M8 56 V32 a24 24 0 0 1 48 0 V56 H44 V36 a12 12 0 0 0-24 0 V56 Z"
          fill={navy2}
        />
        <rect x="22" y="34" width="6" height="14" fill={navy} rx="1" />
        <rect x="30" y="28" width="6" height="20" fill={navy} rx="1" />
        <rect x="38" y="22" width="6" height="26" fill={navy} rx="1" />
        <path
          d="M22 26 L32 18 L42 22"
          stroke={green}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M37 18 L42 18 L42 23"
          stroke={green}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
