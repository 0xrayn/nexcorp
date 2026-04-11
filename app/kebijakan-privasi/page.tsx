import Navbar from '@/components/Navbar'
import MobileMenu from '@/components/MobileMenu'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kebijakan Privasi — NexCorp',
  description: 'Kebijakan privasi NexCorp menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.',
}

const sections = [
  {
    title: '1. Informasi yang Kami Kumpulkan',
    content: `Kami mengumpulkan informasi yang Anda berikan langsung kepada kami, seperti nama, alamat email, nomor telepon, dan informasi perusahaan saat Anda mengisi formulir kontak atau mendaftar layanan kami. Kami juga mengumpulkan informasi teknis seperti alamat IP, jenis browser, dan data penggunaan situs secara otomatis.`,
  },
  {
    title: '2. Cara Kami Menggunakan Informasi',
    content: `Informasi yang kami kumpulkan digunakan untuk: menyediakan dan meningkatkan layanan kami, berkomunikasi dengan Anda terkait proyek dan pembaruan, mengirimkan informasi teknis dan pembaruan keamanan, merespons pertanyaan dan memberikan dukungan pelanggan, serta memenuhi kewajiban hukum yang berlaku.`,
  },
  {
    title: '3. Keamanan Data',
    content: `Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi informasi pribadi Anda dari akses tidak sah, perubahan, pengungkapan, atau penghancuran. Data disimpan di server yang terenkripsi dan kami meninjau praktik keamanan kami secara berkala.`,
  },
  {
    title: '4. Berbagi Informasi',
    content: `Kami tidak menjual, memperdagangkan, atau memindahkan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali sebagaimana diperlukan untuk menyediakan layanan kami, mematuhi hukum yang berlaku, atau melindungi hak-hak kami.`,
  },
  {
    title: '5. Cookie dan Teknologi Pelacakan',
    content: `Situs kami menggunakan cookie untuk meningkatkan pengalaman pengguna. Anda dapat mengatur browser untuk menolak semua cookie atau memberi tahu Anda ketika cookie dikirim. Namun, beberapa fitur situs mungkin tidak berfungsi dengan benar tanpa cookie.`,
  },
  {
    title: '6. Hak Anda',
    content: `Anda berhak untuk mengakses, memperbarui, atau menghapus informasi pribadi Anda kapan saja. Anda juga berhak untuk menarik persetujuan dan membatasi pemrosesan data Anda. Untuk menggunakan hak-hak ini, silakan hubungi kami melalui email privacy@nexcorp.id.`,
  },
  {
    title: '7. Perubahan Kebijakan',
    content: `Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan signifikan akan diberitahukan melalui email atau pemberitahuan yang terlihat di situs kami sebelum perubahan berlaku. Tanggal terakhir diperbarui akan selalu dicantumkan di bagian atas halaman ini.`,
  },
  {
    title: '8. Hubungi Kami',
    content: `Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami di: privacy@nexcorp.id atau melalui halaman kontak kami. Kami akan merespons permintaan Anda dalam waktu 5 hari kerja.`,
  },
]

export default function PrivacyPage() {
  return (
    <>
      <MobileMenu />
      <Navbar />
      <main className="min-h-screen bg-base-100">
        {/* Hero */}
        <div className="bg-base-200/60 border-b border-base-content/5 pt-28 pb-14">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-primary font-display font-bold text-xs tracking-widest uppercase mb-3">Legal</p>
            <h1 className="text-4xl md:text-5xl font-display font-black mb-4">Kebijakan Privasi</h1>
            <p className="opacity-60 text-sm">Terakhir diperbarui: 1 Januari 2026</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <p className="opacity-70 leading-relaxed mb-12 text-base">
            NexCorp berkomitmen untuk melindungi privasi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan layanan dan situs web kami.
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
            <p className="font-display font-semibold mb-2">Pertanyaan atau Kekhawatiran?</p>
            <p className="text-sm opacity-60 mb-4">Tim kami siap membantu Anda memahami hak privasi dan bagaimana data Anda dikelola.</p>
            <a href="/#contact" className="btn btn-primary btn-sm rounded-full">Hubungi Tim Kami</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
