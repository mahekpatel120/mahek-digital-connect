import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp,
  ShoppingCart,
  Search,
  BarChart3,
  Target,
  Megaphone,
  Palette,
  Users,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Digital Marketing Strategy",
      description: "Comprehensive digital marketing solutions that drive growth and maximize ROI through strategic planning and execution.",
      features: [
        "Social Media Marketing",
        "Content Marketing Strategy",
        "Email Marketing Campaigns",
        "Influencer Partnerships",
        "Marketing Automation"
      ],
      pricing: "Starting from ₹25,000/month"
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce Management",
      description: "Complete marketplace management to boost your online sales presence across all major platforms.",
      features: [
        "Amazon Store Optimization",
        "Product Listing Management",
        "Inventory Management",
        "Order Processing",
        "Customer Service Support"
      ],
      pricing: "Starting from ₹20,000/month"
    },
    {
      icon: Search,
      title: "SEO & Content Optimization",
      description: "Advanced SEO strategies to improve your search rankings and drive organic traffic to your website.",
      features: [
        "Keyword Research & Analysis",
        "On-Page SEO Optimization",
        "Technical SEO Audits",
        "Content Creation & Optimization",
        "Link Building Strategies"
      ],
      pricing: "Starting from ₹15,000/month"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Data-driven insights and analytics to optimize your marketing performance and track ROI.",
      features: [
        "Google Analytics Setup",
        "Conversion Tracking",
        "Performance Reporting",
        "ROI Analysis",
        "Custom Dashboard Creation"
      ],
      pricing: "Starting from ₹12,000/month"
    },
    {
      icon: Palette,
      title: "Brand Positioning & Creative",
      description: "Build a strong brand identity that resonates with your target audience and drives engagement.",
      features: [
        "Brand Strategy Development",
        "Logo & Visual Identity",
        "Creative Campaign Design",
        "Brand Guidelines",
        "Market Positioning"
      ],
      pricing: "Starting from ₹30,000/project"
    },
    {
      icon: Target,
      title: "Strategy Execution",
      description: "Turn your marketing strategies into actionable plans with our expert execution and monitoring.",
      features: [
        "Campaign Management",
        "A/B Testing & Optimization",
        "Project Management",
        "Performance Monitoring",
        "Strategic Consulting"
      ],
      pricing: "Starting from ₹18,000/month"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We start by understanding your business, goals, and current marketing landscape."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Our team creates a customized strategy tailored to your specific needs and objectives."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute the strategy with precision, ensuring every detail is optimized for success."
    },
    {
      step: "04",
      title: "Monitor & Optimize",
      description: "Continuous monitoring and optimization to ensure maximum performance and ROI."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-primary/5 to-accent/10">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            Professional Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive digital marketing solutions designed to accelerate your business growth
            and drive measurable results across all channels.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 shadow-card bg-gradient-card">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center shadow-button group-hover:shadow-elegant transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-center group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="text-lg font-semibold text-primary mb-4">{service.pricing}</div>
                    <Button className="w-full group">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center shadow-button">
                    <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-primary rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's discuss how our services can help you achieve your digital marketing goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background hover:text-primary">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background hover:text-primary">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;