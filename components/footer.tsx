export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-sm flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-semibold">kukmarixcom</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {"Professional printing solutions for the modern workplace."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Business Printers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Photo Printers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Large Format
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Downloads
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>{"© 2025 kukmarixcom. All rights reserved."}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
