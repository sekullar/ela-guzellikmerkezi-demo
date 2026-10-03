export default function Logo({ light = false }) {
  const ink = light ? '#F3EEF5' : '#2B1830'
  return (
    <span className="inline-flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M4 24Q24 4 44 24Q24 44 4 24Z" fill="none" stroke={ink} strokeWidth="2" />
        <circle cx="24" cy="24" r="8" fill="#C98FA0" />
        <circle cx="24" cy="24" r="3.5" fill={ink} />
        <circle cx="26.6" cy="21.4" r="1.4" fill="#E3B873" />
      </svg>
      <span className="leading-none">
        <span className="block font-display text-2xl font-semibold" style={{ color: ink }}>Elâ</span>
        <span className="block text-xs tracking-wide" style={{ color: ink, opacity: 0.7 }}>güzellik atölyesi</span>
      </span>
    </span>
  )
}
