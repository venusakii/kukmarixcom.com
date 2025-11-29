import { Sparkles } from "lucide-react"

const technologies = [
  {
    number: "01",
    title: "Quantum Ink Technology",
    description:
      "Revolutionary ink formulation that delivers vibrant colors and deep blacks while using 40% less ink than traditional printers.",
  },
  {
    number: "02",
    title: "Precision Alignment System",
    description:
      "Laser-guided paper alignment ensures perfect registration and eliminates paper jams for uninterrupted productivity.",
  },
  {
    number: "03",
    title: "Eco-Smart Power",
    description:
      "Intelligent power management reduces energy consumption by up to 60% without affecting performance or speed.",
  },
]

export function Technology() {
  return (
    <section id="technology" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 rounded-l-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Innovation</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
              {"Technology that transforms printing"}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              {
                "Our proprietary technologies push the boundaries of what's possible in modern printing, delivering results that exceed expectations."
              }
            </p>

            <div className="space-y-8">
              {technologies.map((tech, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <span className="text-secondary font-bold">{tech.number}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted border border-border">
              <img src="/advanced-printer-technology-internal-mechanisms.jpg" alt="Technology" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-2xl opacity-20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
