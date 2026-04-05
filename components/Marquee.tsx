// Client logos marquee with icons and colorful styling
const clients = [
  { name: 'Tokopedia',  color: 'text-green-400',   icon: '🛒' },
  { name: 'Gojek',      color: 'text-emerald-400',  icon: '🛵' },
  { name: 'Telkom',     color: 'text-red-400',       icon: '📡' },
  { name: 'Bank BCA',   color: 'text-blue-400',      icon: '🏦' },
  { name: 'Bukalapak',  color: 'text-red-300',       icon: '🛍️' },
  { name: 'Traveloka',  color: 'text-sky-400',       icon: '✈️' },
  { name: 'Mandiri',    color: 'text-yellow-400',    icon: '💳' },
  { name: 'XL Axiata',  color: 'text-purple-400',    icon: '📶' },
]

// Duplicate for seamless infinite scroll
const doubled = [...clients, ...clients]

export default function Marquee() {
  return (
    <div className="py-8 bg-base-200/50 border-y border-base-content/5 overflow-hidden">
      <div className="marquee-wrap">
        <div className="marquee-inner">
          {doubled.map((c, i) => (
            <span key={i} className="flex items-center gap-2 shrink-0">
              <span className="text-xl">{c.icon}</span>
              <span className={`font-display font-bold text-lg tracking-wider uppercase ${c.color} opacity-70 hover:opacity-100 transition-opacity`}>
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
