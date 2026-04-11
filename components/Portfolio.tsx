const projects = [
  {
    image: "/images/ecommerce.jpg",
    badge: "E-Commerce",
    badgeColor: "badge-primary",
    title: "Marketplace Platform",
    stack: "Next.js · Node.js · PostgreSQL",
    num: "01",
    colSpan: "",
    aspect: "aspect-[4/3]",
  },
  {
    image: "/images/fintech.jpg",
    badge: "Fintech",
    badgeColor: "badge-success",
    title: "Banking Super App",
    stack: "React Native · Go · Redis",
    num: "02",
    colSpan: "",
    aspect: "aspect-[4/3]",
  },
  {
    image: "/images/logistics.jpg",
    badge: "Logistics",
    badgeColor: "badge-warning",
    title: "Fleet Management System",
    stack: "Vue.js · Python · MongoDB",
    num: "03",
    colSpan: "",
    aspect: "aspect-[4/3]",
  },
  {
    image: "/images/healthcare.jpg",
    badge: "Healthcare",
    badgeColor: "badge-secondary",
    title: "Hospital Management Platform",
    stack: "React · .NET · SQL Server · Azure",
    num: "04",
    colSpan: "md:col-span-2",
    aspect: "aspect-video",
  },
  {
    image: "/images/edtech.jpg",
    badge: "EdTech",
    badgeColor: "badge-info",
    title: "Learning Management System",
    stack: "Next.js · GraphQL · Prisma",
    num: "05",
    colSpan: "",
    aspect: "aspect-[4/3]",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-20">
          <p className="text-primary font-display font-bold text-sm tracking-widest uppercase mb-3">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl font-display font-black">
            Karya yang <br /> Berbicara Sendiri
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group relative overflow-hidden rounded-2xl ${p.aspect} ${p.colSpan} cursor-pointer`}
            >

              {/* Background Image */}
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

              {/* Number watermark */}
              <div className="absolute top-4 right-4 text-white/20 font-display font-black text-7xl select-none leading-none">
                {p.num}
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">

                <span className={`badge ${p.badgeColor} badge-sm mb-1.5`}>
                  {p.badge}
                </span>

                <h3 className="text-white font-display font-bold text-lg leading-tight">
                  {p.title}
                </h3>

              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition duration-300 backdrop-blur-sm">

                <span className={`badge ${p.badgeColor} badge-sm mb-2 w-fit`}>
                  {p.badge}
                </span>

                <h3 className="text-white font-display font-bold text-lg">
                  {p.title}
                </h3>

                <p className="text-white/70 text-sm mt-1">
                  {p.stack}
                </p>

                <div className="mt-3 text-white/50 text-xs font-medium">
                  Lihat Project →
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="btn btn-outline btn-lg rounded-full px-10"
          >
            Lihat Semua Portfolio →
          </a>
        </div>

      </div>
    </section>
  );
}
