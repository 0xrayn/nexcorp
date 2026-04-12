import Navbar from '@/components/Navbar'
import MobileMenu from '@/components/MobileMenu'
import Footer from '@/components/Footer'
import ThemePanel from '@/components/ThemePanel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sitemap — NexCorp',
  description: 'Peta situs NexCorp — temukan semua halaman dan konten di situs kami.',
}

const sitemapData = [
  {
    category: 'Halaman Utama',
    color: 'text-primary',
    bg: 'bg-primary/10 border-primary/20',
    links: [
      { label: 'Beranda', href: '/', desc: 'Halaman utama NexCorp' },
      { label: 'Layanan', href: '/#services', desc: 'Semua layanan teknologi kami' },
      { label: 'Tentang Kami', href: '/#about', desc: 'Cerita dan visi NexCorp' },
      { label: 'Portfolio', href: '/#portfolio', desc: 'Proyek dan karya terbaik kami' },
      { label: 'Testimoni', href: '/#testimonials', desc: 'Kata klien tentang kami' },
      { label: 'Kontak', href: '/#contact', desc: 'Hubungi tim NexCorp' },
    ],
  },
  {
    category: 'Layanan',
    color: 'text-secondary',
    bg: 'bg-secondary/10 border-secondary/20',
    links: [
      { label: 'Web Development', href: '/#services', desc: 'Pengembangan web enterprise' },
      { label: 'Mobile App', href: '/#services', desc: 'Aplikasi iOS dan Android' },
      { label: 'Cloud & DevOps', href: '/#services', desc: 'Infrastruktur cloud modern' },
      { label: 'AI & Machine Learning', href: '/#services', desc: 'Solusi kecerdasan buatan' },
      { label: 'Cybersecurity', href: '/#services', desc: 'Keamanan sistem dan data' },
      { label: 'IT Consulting', href: '/#services', desc: 'Konsultasi transformasi digital' },
    ],
  },
  {
    category: 'Legal',
    color: 'text-accent',
    bg: 'bg-accent/10 border-accent/20',
    links: [
      { label: 'Kebijakan Privasi', href: '/kebijakan-privasi', desc: 'Cara kami melindungi data Anda' },
      { label: 'Syarat & Ketentuan', href: '/syarat-ketentuan', desc: 'Ketentuan penggunaan layanan' },
      { label: 'Sitemap', href: '/sitemap-page', desc: 'Peta seluruh halaman situs' },
    ],
  },
  {
    category: 'Platform',
    color: 'text-success',
    bg: 'bg-success/10 border-success/20',
    links: [
      { label: 'app.nexcorp.id', href: '#', desc: 'Platform aplikasi klien' },
      { label: 'docs.nexcorp.id', href: '#', desc: 'Dokumentasi teknis' },
      { label: 'status.nexcorp.id', href: '#', desc: 'Status layanan real-time' },
      { label: 'blog.nexcorp.id', href: '#', desc: 'Artikel dan insight teknologi' },
    ],
  },
]

export default function SitemapPage() {
  return (
    <>
      <MobileMenu />
      <Navbar />
      <ThemePanel />
      <main className="min-h-screen bg-base-100">
        <div className="bg-base-200/60 border-b border-base-content/5 pt-28 pb-4">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-primary font-display font-bold text-xs tracking-widest uppercase mb-3">Navigasi</p>
            <h1 className="text-4xl md:text-5xl font-display font-black mb-4">Sitemap</h1>
            <p className="opacity-60 text-sm max-w-lg">Temukan semua halaman dan konten di situs NexCorp. Panduan lengkap untuk menjelajahi layanan dan informasi kami.</p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid sm:grid-cols-2 gap-8">
            {sitemapData.map((cat) => (
              <div key={cat.category} className={`rounded-2xl border p-6 ${cat.bg}`}>
                <h2 className={`font-display font-bold text-lg mb-4 ${cat.color}`}>{cat.category}</h2>
                <ul className="space-y-3">
                  {cat.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="flex items-start gap-2 group hover:opacity-100 opacity-80 transition-opacity"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 mt-0.5 flex-shrink-0 ${cat.color} group-hover:translate-x-0.5 transition-transform`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M9 18l6-6-6-6"/>
                        </svg>
                        <div>
                          <p className="font-display font-semibold text-sm leading-tight">{link.label}</p>
                          <p className="text-xs opacity-50 mt-0.5">{link.desc}</p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
