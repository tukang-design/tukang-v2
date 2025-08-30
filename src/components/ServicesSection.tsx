import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, ArrowRight, Zap, Building2, Cog } from 'lucide-react';

const services = [
  {
    id: 'landing-page',
    icon: Zap,
    name: 'The Landing Page',
    price: 'RM 2,500',
    description: 'Perfect for launching new products, services, or campaigns. A single, high-converting page optimized for results.',
    features: [
      'Mobile-responsive design',
      'Lead capture forms',
      'SEO optimization',
      'Fast loading speed',
      '7-day delivery',
      'Free domain setup'
    ],
    popular: false,
    ctaText: 'Get Started',
    ctaAction: 'book'
  },
  {
    id: 'business-website',
    icon: Building2,
    name: 'The Business Website',
    price: 'RM 4,999',
    description: 'Complete multi-page website for established businesses. Perfect for showcasing your services and building credibility.',
    features: [
      'Up to 5 custom pages',
      'Professional design',
      'Contact & booking forms',
      'Google Maps integration',
      'SEO optimization',
      'Content management',
      '10-day delivery',
      'Free domain & hosting setup'
    ],
    popular: true,
    ctaText: 'Most Popular',
    ctaAction: 'book'
  },
  {
    id: 'advanced-system',
    icon: Cog,
    name: 'The Advanced System',
    price: 'Custom Quote',
    description: 'Complex web applications, e-commerce platforms, or custom integrations. Let\'s discuss your unique requirements.',
    features: [
      'Custom functionality',
      'Database integration',
      'Payment processing',
      'User authentication',
      'API integrations',
      'Ongoing support',
      'Timeline varies',
      'Discovery call required'
    ],
    popular: false,
    ctaText: 'Book Free Call',
    ctaAction: 'call'
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your Perfect
            <span className="text-gradient"> Website Package</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Transparent pricing, no hidden fees. Pick the package that fits your business needs 
            and start building your online presence today.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className={`relative p-8 card-feature hover:scale-105 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-accent shadow-glow' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-accent/10 mr-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.name}</h3>
                </div>

                <div className="mb-4">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {service.price}
                  </div>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full group`}
                  variant={service.popular ? 'hero' : service.ctaAction === 'call' ? 'outline-accent' : 'primary'}
                  size="lg"
                >
                  {service.ctaText}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Not sure which package is right for you?
          </p>
          <Button variant="outline-accent">
            Get Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};