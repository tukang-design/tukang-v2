import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'EN' ? 'MS' : 'EN');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gradient-primary">
              Tukang Design
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#services" 
              className="text-foreground hover:text-accent transition-colors duration-200"
            >
              Services
            </a>
            <a 
              href="#portfolio" 
              className="text-foreground hover:text-accent transition-colors duration-200"
            >
              Portfolio
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-accent transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-accent transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{currentLang}</span>
            </button>
            <Button variant="primary">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-foreground hover:text-accent transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#portfolio" 
                className="text-foreground hover:text-accent transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-accent transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-accent transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 text-sm text-muted-foreground"
                >
                  <Globe className="w-4 h-4" />
                  <span>{currentLang}</span>
                </button>
                <Button variant="primary">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};