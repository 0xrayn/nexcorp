const clients = ['Tokopedia', 'Gojek', 'Telkom', 'Bank BCA', 'Bukalapak', 'Traveloka', 'Mandiri', 'XL Axiata']

export default function Marquee() {
  // Duplicate for seamless loop
  const doubled = [...clients, ...clients]

  return (
    <div className="py-8 bg-base-200/50 border-y border-base-content/5 overflow-hidden">
      <div className="marquee-wrap">
        <div className="marquee-inner opacity-40 font-display font-bold text-xl tracking-widest uppercase">
          {doubled.map((name, i) => (
            <span key={i}>{name}&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          ))}
        </div>
      </div>
    </div>
  )
}
