import { Outlet } from 'react-router'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingWhatsApp from '../components/ui/FloatingWhatsApp'
// import CookieConsent from '../components/CookieConsent'

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      {/* <CookieConsent /> */}
    </div>
  )
}
