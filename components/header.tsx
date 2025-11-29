"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-secondary rounded-sm flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-lg lg:text-xl">K</span>
            </div>
            <span className="text-xl lg:text-2xl font-semibold tracking-tight">kukmarixcom</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium hover:text-secondary transition-colors">
              Products
            </a>
            <a href="#technology" className="text-sm font-medium hover:text-secondary transition-colors">
              Technology
            </a>
            <a href="#solutions" className="text-sm font-medium hover:text-secondary transition-colors">
              Solutions
            </a>
            <a href="#support" className="text-sm font-medium hover:text-secondary transition-colors">
              Support
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-secondary hover:bg-secondary/90">
              Get Started
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#products" className="text-sm font-medium hover:text-secondary transition-colors">
                Products
              </a>
              <a href="#technology" className="text-sm font-medium hover:text-secondary transition-colors">
                Technology
              </a>
              <a href="#solutions" className="text-sm font-medium hover:text-secondary transition-colors">
                Solutions
              </a>
              <a href="#support" className="text-sm font-medium hover:text-secondary transition-colors">
                Support
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
