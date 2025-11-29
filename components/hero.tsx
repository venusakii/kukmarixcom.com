import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-professional-printer-technology-in-sleek-da.jpg"
          alt="Modern Printing Technology"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            {"Precision printing for the modern world"}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 lg:mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
            {
              "Experience unparalleled quality with our next-generation printing technology. Built for professionals who demand excellence."
            }
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6">
              {"Explore Products"}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              {"Watch Demo"}
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/40 rounded-full" />
        </div>
      </div>
    </section>
  )
}
