'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, TrendingUp, AlertTriangle, Building, GraduationCap, Users, Crown, ArrowRight, Star, IndianRupee, Calculator, Target } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Small College",
      price: "₹1L",
      period: "per year",
      description: "Essential penalty protection for smaller educational institutions",
      icon: <Building className="w-8 h-8 text-blue-600" />,
      features: [
        "Penalty Risk Assessment",
        "Basic Compliance Monitoring",
        "Deadline Management",
        "Email & SMS Alerts",
        "Regulatory Updates",
        "Support via Email"
      ],
      riskProtection: "Up to ₹50L penalties prevented",
      badge: "Start Protection",
      popular: false
    },
    {
      name: "Mid-Size Institute",
      price: "₹2–3L",
      period: "per year", 
      description: "Comprehensive penalty avoidance for growing institutions",
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      features: [
        "Everything in Small College",
        "Advanced AI Risk Prediction",
        "Multi-Council Integration",
        "Executive Analytics Dashboard",
        "Priority Support",
        "Compliance Training"
      ],
      riskProtection: "Up to ₹1Cr penalties prevented",
      badge: "Most Popular",
      popular: true
    },
    {
      name: "University / Deemed",
      price: "₹5–10L",
      period: "per year",
      description: "Enterprise-grade penalty prevention for large universities",
      icon: <Users className="w-8 h-8 text-green-600" />,
      features: [
        "Everything in Mid-Size",
        "Blockchain Compliance Records",
        "IoT Monitoring Integration",
        "AI Assistant 24/7",
        "Custom Risk Models",
        "Dedicated Account Manager"
      ],
      riskProtection: "Up to ₹2Cr penalties prevented",
      badge: "Enterprise",
      popular: false
    },
    {
      name: "Education Group",
      price: "₹15L+",
      period: "per year",
      description: "White-label solution for large education conglomerates",
      icon: <Crown className="w-8 h-8 text-gold-600" />,
      features: [
        "Everything in University",
        "White-Label Solution",
        "Multi-Institution Management",
        "Custom Integrations",
        "SLA Guarantees",
        "Executive Reporting"
      ],
      riskProtection: "Unlimited penalties prevented",
      badge: "Enterprise+",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Risk Insurance, Not SaaS",
      description: "We're selling penalty protection insurance, not software subscriptions"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: "ROI Calculator",
      description: "Save ₹50L–₹2Cr in penalties vs. ₹1–15L+ annual investment"
    },
    {
      icon: <Target className="w-6 h-6 text-purple-600" />,
      title: "Proven Results",
      description: "99% penalty avoidance rate across 1000+ educational institutions"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
      title: "Law of Penalty Economics",
      description: "If a system saves ₹50L–₹2Cr risk, pricing below ₹1–5L/year is irrationally cheap"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PARSS
              </span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-blue-600 font-medium">
                Pricing
              </Link>
              <Link href="/#demo" className="text-gray-600 hover:text-blue-600 transition-colors">
                Demo
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="#demo">
                <Button>Start Free Trial</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200">
              <Calculator className="w-4 h-4 mr-2" />
              Risk Insurance Pricing
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Law of Penalty Economics
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              If a system saves <span className="font-bold text-red-600">₹50L–₹2Cr</span> in penalties, 
              pricing below <span className="font-bold text-green-600">₹1–5L/year</span> is irrationally cheap.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    💰 Sell as Risk Insurance, Not SaaS
                  </h3>
                  <p className="text-gray-600 mb-4">
                    PARSS protects your institution from regulatory penalties that can reach ₹2Cr+ annually.
                    Our pricing reflects the actual value of penalty avoidance.
                  </p>
                  <div className="flex items-center text-green-600 font-semibold">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    ROI: 1000%+ in most cases
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">₹2Cr</div>
                    <div className="text-sm text-gray-600 mb-4">Maximum Penalty Risk</div>
                    <div className="text-2xl font-bold text-green-600 mb-2">₹5-15L</div>
                    <div className="text-sm text-gray-600">Annual Investment</div>
                    <div className="mt-4 text-lg font-semibold text-blue-600">
                      = 0.25% to 0.75% of Risk Protected
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Penalty Protection Level</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each plan is designed as risk insurance, protecting your institution from penalties 
              worth 10x to 100x your annual investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''} hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-4">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-500 font-normal">/{plan.period}</span>
                  </div>
                  <CardDescription className="text-gray-600">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <div className="text-sm font-semibold text-green-800 mb-1">Risk Protection</div>
                    <div className="text-lg font-bold text-green-600">{plan.riskProtection}</div>
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="#demo" className="block">
                    <Button className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}>
                      {plan.badge}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why PARSS Pricing Makes Economic Sense</h2>
            <p className="text-xl text-gray-600">
              Our pricing is based on actual penalty risk protection, not typical SaaS models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Calculate Your ROI</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            See how much money PARSS can save your institution by preventing penalties 
            that could cost ₹50L to ₹2Cr+ annually.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#demo">
              <Button size="lg" variant="secondary" className="text-blue-600">
                Get Free ROI Analysis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Understanding PARSS pricing and value proposition
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Why is PARSS pricing higher than typical SaaS?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We're selling penalty protection insurance, not software. If we prevent ₹2Cr in penalties 
                  with a ₹5L investment, that's a 4000% ROI. Our pricing reflects this value.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What if we don't face any penalties?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  That's exactly the goal! PARSS is proactive prevention. Our AI predicts and prevents 
                  violations before they become penalties. Think of it as insurance you hope never to use.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can we start with a smaller plan and upgrade?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Absolutely. We recommend starting with the plan that matches your current risk level, 
                  with seamless upgrades as your institution grows or compliance requirements increase.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What guarantees do you provide?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We guarantee 99% penalty avoidance or provide additional consulting support at no cost. 
                  Our track record speaks for itself across 1000+ institutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold">PARSS</span>
              </div>
              <p className="text-gray-400">
                Penalty Avoidance & Regulatory Survival System for Educational Institutions
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/#demo" className="hover:text-white transition-colors">Demo</Link></li>
                <li><Link href="/api-docs" className="hover:text-white transition-colors">API</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/training" className="hover:text-white transition-colors">Training</Link></li>
                <li><Link href="/status" className="hover:text-white transition-colors">Status</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PARSS - Penalty Avoidance & Regulatory Survival System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}