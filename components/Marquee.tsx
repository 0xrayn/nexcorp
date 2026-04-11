// Client logos marquee — clean SVG brand icons, no emoji

const clients = [
  {
    name: 'Tokopedia',
    color: '#43B549',
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 flex-shrink-0" fill="currentColor">
        <path d="M16 2a14 14 0 1 0 0 28A14 14 0 0 0 16 2zm0 4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm-6 9h12l-1.5 9H11.5L10 15z"/>
      </svg>
    ),
  },
  {
    name: 'Gojek',
    color: '#00AA13',
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 flex-shrink-0" fill="currentColor">
        <circle cx="16" cy="16" r="14"/>
        <circle cx="16" cy="16" r="7" fill="white"/>
        <circle cx="16" cy="16" r="3.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Telkom',
    color: '#FF0000',
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 flex-shrink-0" fill="currentColor">
        <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 4c2.5 0 4.8.84 6.64 2.24L7.24 22.64A9.96 9.96 0 0 1 6 16c0-5.52 4.48-10 10-10zm0 20c-2.5 0-4.8-.84-6.64-2.24l15.4-15.4A9.96 9.96 0 0 1 26 16c0 5.52-4.48 10-10 10z"/>
      </svg>
    ),
  },
  {
    name: 'Bank BCA',
    color: '#006DB7',
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 flex-shrink-0" fill="currentColor">
        <rect x="2" y="8" width="28" height="16" rx="3"/>
        <rect x="2" y="13" width="28" height="4" fill="white" opacity="0.3"/>
        <circle cx="7" cy="21" r="2" fill="white" opacity="0.7"/>
      </svg>
    ),
  },
  {
    name: 'Bukalapak',
    color: '#E4202E',
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 flex-shrink-0" fill="currentColor">
        <path d="M6 6h8l6 8-6 8H6V6zm10 0h4a6 6 0 0 1 0 12h-4l-5-6 5-6z"/>
      </svg>
    ),
  },
  {
    name: 'Traveloka',
    color: '#0064D2',
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 flex-shrink-0" fill="currentColor">
        <path d="M27 9l-14 14-6-6 2-2 4 4L25 7l2 2z"/>
        <path d="M16 4a12 12 0 1 0 0 24A12 12 0 0 0 16 4zm0 2a10 10 0 1 1 0 20A10 10 0 0 1 16 6z"/>
      </svg>
    ),
  },
  {
    name: 'Mandiri',
    color: '#F5A623',
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 flex-shrink-0" fill="currentColor">
        <path d="M4 24V12l12-8 12 8v12H20v-8h-8v8H4z"/>
      </svg>
    ),
  },
  {
    name: 'XL Axiata',
    color: '#2B4FBA',
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 flex-shrink-0" fill="currentColor">
        <path d="M16 2a14 14 0 1 0 0 28A14 14 0 0 0 16 2zm-4 8h8M12 16h8M12 22l8-12"/>
        <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M11 11l10 10M21 11L11 21" strokeWidth="2.5" stroke="currentColor" strokeLinecap="round"/>
      </svg>
    ),
  },
]

const doubled = [...clients, ...clients]

export default function Marquee() {
  return (
    <div className="py-8 bg-base-200/50 border-y border-base-content/5 overflow-hidden">
      <div className="marquee-wrap">
        <div className="marquee-inner">
          {doubled.map((c, i) => (
            <span
              key={i}
              className="flex items-center gap-2.5 shrink-0"
              style={{ color: c.color }}
            >
              {c.svg}
              <span
                className="font-display font-bold text-base tracking-wider uppercase opacity-60 hover:opacity-100 transition-opacity"
                style={{ color: c.color }}
              >
                {c.name}
              </span>
              <span className="text-base-content/20 font-bold text-xl ml-3">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
