import { useId } from 'react'

// Fotoğraf yerine kod ile çizilen görseller: sıfır indirme, anında yüklenir.
export default function Art({ variant = 'arch', colors = ['#C98FA0', '#E3B873', '#2B1830'], className = '', label = '' }) {
  const [a, b, c] = colors
  const id = useId().replace(/:/g, '')
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" role={label ? 'img' : undefined} aria-label={label || undefined} aria-hidden={label ? undefined : true} className={className}>
      <defs>
        <linearGradient id={`g${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#g${id})`} />
      {variant === 'arch' && (
        <g>
          <circle cx="200" cy="200" r="78" fill={c} opacity=".9" />
          {[-50, -25, 0, 25, 50].map((r) => (
            <ellipse key={r} cx="200" cy="400" rx="26" ry="120" fill={c} opacity=".75" transform={`rotate(${r} 200 520)`} />
          ))}
        </g>
      )}
      {variant === 'bloom' && (
        <g>
          {Array.from({ length: 8 }, (_, i) => (
            <ellipse key={i} cx="200" cy="165" rx="30" ry="88" fill={i % 2 ? c : '#fff'} opacity=".6" transform={`rotate(${i * 45} 200 250)`} />
          ))}
          <circle cx="200" cy="250" r="34" fill={c} />
        </g>
      )}
      {variant === 'dunes' && (
        <g>
          <circle cx="280" cy="150" r="52" fill={c} opacity=".85" />
          <path d="M0 300Q100 240 200 300T400 280V500H0Z" fill={c} opacity=".55" />
          <path d="M0 370Q120 320 220 380T400 360V500H0Z" fill={a} opacity=".8" />
          <path d="M0 430Q140 390 260 440T400 425V500H0Z" fill={b} opacity=".9" />
        </g>
      )}
    </svg>
  )
}
