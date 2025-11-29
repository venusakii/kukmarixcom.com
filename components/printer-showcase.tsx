import { Button } from "@/components/ui/button"

const printers = [
  {
    name: "Pro Series X1",
    category: "Professional",
    description: "High-volume printing for demanding business environments",
    image: "/professional-office-laser-printer.jpg",
  },
  {
    name: "Creative Studio",
    category: "Creative",
    description: "Photo-quality prints for designers and photographers",
    image: "/professional-photo-printer-studio.jpg",
  },
  {
    name: "Compact Pro",
    category: "Small Office",
    description: "Perfect for home offices and small teams",
    image: "/compact-modern-office-printer.jpg",
  },
]

export function PrinterShowcase() {
  return (
    <section id="products" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">{"Our Product Line"}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {"Discover the perfect printer for your needs. From high-volume business printing to photo-quality output."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {printers.map((printer, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-secondary transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={printer.image || "/placeholder.svg"}
                  alt={printer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                    {printer.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{printer.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{printer.description}</p>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:border-secondary bg-transparent"
                >
                  {"Learn More"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
