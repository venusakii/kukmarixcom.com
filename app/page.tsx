import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { PrinterShowcase } from "@/components/printer-showcase"
import { Technology } from "@/components/technology"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <PrinterShowcase />
      <Technology />
      <ContactSection />
      <Footer />
    </main>
  )
}
