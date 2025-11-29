import { Printer, Zap, Shield, Cpu } from "lucide-react"

const features = [
  {
    icon: Printer,
    title: "Professional Quality",
    description: "Industry-leading print resolution up to 4800 DPI for exceptional detail and color accuracy.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Print speeds up to 60 pages per minute without compromising on quality or reliability.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Advanced encryption and secure print release to protect your sensitive documents.",
  },
  {
    icon: Cpu,
    title: "Smart Technology",
    description: "AI-powered optimization automatically adjusts settings for perfect results every time.",
  },
]

export function Features() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">{"Why Choose Kukmarixcom"}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {"Cutting-edge features designed to enhance your printing experience and boost productivity."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-card border border-border rounded-lg hover:border-secondary transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
