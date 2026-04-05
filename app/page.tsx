import Navbar from '@/components/Navbar'
import MobileMenu from '@/components/MobileMenu'
import ThemePanel from '@/components/ThemePanel'
import CursorGlow from '@/components/CursorGlow'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Services from '@/components/Services'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Animations from '@/components/Animations'

export default function Home() {
  return (
    <>
      <CursorGlow />
      <MobileMenu />
      <ThemePanel />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Portfolio />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Animations />
    </>
  )
}
