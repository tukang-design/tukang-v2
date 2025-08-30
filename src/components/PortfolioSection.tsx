import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, ArrowRight } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'TechStart Landing Page',
    category: 'Landing Page',
    description: 'A high-converting landing page for a Malaysian tech startup, featuring modern design and lead capture optimization.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center',
    link: '#',
    tags: ['Landing Page', 'Tech', 'Conversion Optimization']
  },
  {
    id: 2,
    title: 'Local Restaurant Website',
    category: 'Business Website',
    description: 'Complete website for a Kuala Lumpur restaurant with online menu, reservations, and location integration.',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop&crop=center',
    link: '#',
    tags: ['Restaurant', 'E-commerce', 'Local Business']
  },
  {
    id: 3,
    title: 'E-learning Platform',
    category: 'Advanced System',
    description: 'Custom learning management system for a Malaysian education provider with user authentication and progress tracking.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=center',
    link: '#',
    tags: ['Education', 'Custom Development', 'LMS']
  },
  {
    id: 4,
    title: 'Professional Services',
    category: 'Business Website',
    description: 'Clean, professional website for a consulting firm with service pages, team profiles, and client testimonials.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=center',
    link: '#',
    tags: ['Professional Services', 'Corporate', 'B2B']
  },
  {
    id: 5,
    title: 'E-commerce Store',
    category: 'Advanced System',
    description: 'Full-featured online store with payment integration, inventory management, and customer portal.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center',
    link: '#',
    tags: ['E-commerce', 'Payment Integration', 'Inventory']
  },
  {
    id: 6,
    title: 'Healthcare Clinic',
    category: 'Business Website',
    description: 'Modern website for a medical clinic with appointment booking, service information, and patient resources.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center',
    link: '#',
    tags: ['Healthcare', 'Appointment Booking', 'Medical']
  }
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Recent
            <span className="text-gradient"> Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See how we've helped Malaysian SMEs transform their online presence 
            with beautiful, high-performing websites.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All Projects', 'Landing Page', 'Business Website', 'Advanced System'].map((filter) => (
            <Button
              key={filter}
              variant={filter === 'All Projects' ? 'primary' : 'outline-accent'}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="group card-feature overflow-hidden cursor-pointer">
              {/* Project image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button size="sm" variant="primary">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {item.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button size="lg" variant="primary" className="group">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};