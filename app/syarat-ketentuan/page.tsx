import Navbar from '@/components/Navbar'
import MobileMenu from '@/components/MobileMenu'
import Footer from '@/components/Footer'
import ThemePanel from '@/components/ThemePanel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan — NexCorp',
  description: 'Syarat dan ketentuan penggunaan layanan NexCorp.',
}

const sections = [
  {
    title: '1. Penerimaan Ketentuan',
    content: `Dengan menggunakan layanan NexCorp, Anda menyetujui untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak menyetujui ketentuan ini, harap jangan menggunakan layanan kami. Kami berhak mengubah ketentuan ini kapan saja dengan pemberitahuan yang sesuai.`,
  },
  {
    title: '2. Deskripsi Layanan',
    content: `NexCorp menyediakan layanan pengembangan perangkat lunak, konsultasi teknologi, transformasi digital, dan layanan cloud. Ruang lingkup layanan yang spesifik akan ditetapkan dalam perjanjian proyek terpisah yang ditandatangani oleh kedua belah pihak.`,
  },
  {
    title: '3. Kewajiban Klien',
    content: `Klien bertanggung jawab untuk: menyediakan informasi yang akurat dan lengkap yang diperlukan untuk penyelesaian proyek, memberikan akses yang diperlukan ke sistem dan sumber daya, meninjau dan menyetujui deliverable dalam jangka waktu yang disepakati, dan melakukan pembayaran sesuai jadwal yang telah disepakati.`,
  },
  {
    title: '4. Hak Kekayaan Intelektual',
    content: `Setelah pembayaran penuh diterima, hak kekayaan intelektual atas deliverable proyek akan dialihkan kepada klien, kecuali ditentukan lain dalam perjanjian proyek. NexCorp mempertahankan hak atas komponen generik, framework, dan alat yang dikembangkan sebelum atau di luar proyek.`,
  },
  {
    title: '5. Kerahasiaan',
    content: `Kedua belah pihak setuju untuk menjaga kerahasiaan informasi yang dibagikan selama proyek berlangsung. Kewajiban kerahasiaan ini berlaku selama proyek dan selama 3 tahun setelah penyelesaian proyek, kecuali informasi tersebut menjadi tersedia untuk umum tanpa pelanggaran perjanjian ini.`,
  },
  {
    title: '6. Pembatasan Tanggung Jawab',
    content: `NexCorp tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial. Total kewajiban kami tidak akan melebihi jumlah yang dibayarkan oleh klien untuk layanan dalam 12 bulan terakhir. Kami tidak memberikan jaminan atas ketersediaan layanan tanpa gangguan.`,
  },
  {
    title: '7. Penghentian Layanan',
    content: `Salah satu pihak dapat mengakhiri perjanjian dengan pemberitahuan tertulis 30 hari sebelumnya. Klien wajib membayar semua pekerjaan yang telah diselesaikan hingga tanggal penghentian. NexCorp berhak menghentikan layanan segera jika terjadi pelanggaran material terhadap ketentuan ini.`,
  },
  {
    title: '8. Hukum yang Berlaku',
    content: `Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia. Setiap sengketa yang timbul akan diselesaikan melalui mediasi terlebih dahulu, dan jika tidak berhasil, melalui pengadilan yang berwenang di Jakarta, Indonesia.`,
  },
]

export default function TermsPage() {
  return (
    <>
      <MobileMenu />
      <Navbar />
      <ThemePanel />
      <main className="min-h-screen bg-base-100">
        <div className="bg-base-200/60 border-b border-base-content/5 pt-28 pb-14">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-primary font-display font-bold text-xs tracking-widest uppercase mb-3">Legal</p>
            <h1 className="text-4xl md:text-5xl font-display font-black mb-4">Syarat &amp; Ketentuan</h1>
            <p className="opacity-60 text-sm">Terakhir diperbarui: 1 Januari 2026</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <p className="opacity-70 leading-relaxed mb-12 text-base">
            Syarat dan ketentuan ini mengatur penggunaan layanan NexCorp. Harap baca dengan seksama sebelum menggunakan layanan kami. Dokumen ini membentuk perjanjian yang mengikat secara hukum antara Anda dan NexCorp.
          </p>
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title} className="border-l-2 border-primary/30 pl-6">
                <h2 className="font-display font-bold text-xl mb-3">{s.title}</h2>
                <p className="opacity-70 leading-relaxed text-sm">{s.content}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 p-6 rounded-2xl bg-base-200/60 border border-base-content/5">
            <p className="font-display font-semibold mb-2">Ada Pertanyaan?</p>
            <p className="text-sm opacity-60 mb-4">Tim legal kami siap membantu menjelaskan ketentuan layanan kami.</p>
            <a href="/#contact" className="btn btn-primary btn-sm rounded-full">Hubungi Kami</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
