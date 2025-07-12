import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  Target, 
  Users, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Sparkles,
  BarChart3,
  Search,
  ShoppingCart
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Digital Marketing Strategy",
      description: "Comprehensive digital marketing solutions that drive growth and maximize ROI."
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce Management",
      description: "Complete marketplace management to boost your online sales and presence."
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Advanced SEO strategies to improve your search rankings and visibility."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Data-driven insights and analytics to optimize your marketing performance."
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "50+", label: "Happy Clients" },
    { number: "3+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-background via-primary/5 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 mr-2" />
              Your Growth Partner in Digital Success
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Welcome to{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Mahek Enterprises
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Empowering businesses with cutting-edge digital marketing, ecommerce management, 
              branding strategies, and SEO optimization to achieve unprecedented growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button variant="hero" size="lg" className="group">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-bounce-subtle"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-bounce-subtle"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions designed to elevate your business and drive measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 shadow-card bg-gradient-card">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center shadow-button group-hover:shadow-elegant transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose <span className="text-primary">Mahek Enterprises</span>?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                We combine strategic thinking with creative execution to deliver results that matter to your business.
              </p>
              
              <div className="space-y-4">
                {[
                  "Proven track record with 95% client satisfaction",
                  "Data-driven strategies for measurable results",
                  "Personalized approach tailored to your business",
                  "Continuous optimization and performance monitoring"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button variant="default" size="lg" asChild>
                  <Link to="/contact">Start Your Journey</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-primary rounded-2xl p-8 shadow-elegant">
                <div className="text-center text-primary-foreground">
                  <Zap className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Ready to Grow?</h3>
                  <p className="mb-6">
                    Let's discuss how we can accelerate your business growth with our proven strategies.
                  </p>
                  <Button variant="outline" className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background hover:text-primary">
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;