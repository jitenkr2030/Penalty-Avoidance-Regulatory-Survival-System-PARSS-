'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle, Clock, Shield, BarChart3, FileText, Users, Zap, Database, Network, Bot, ArrowRight, Star, IndianRupee } from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        organization: formData.get('organization'),
        phone: formData.get('phone'),
        institutionType: formData.get('institution-type'),
        institutionSize: formData.get('institution-size'),
        complianceFocus: formData.get('compliance-focus'),
        currentChallenges: formData.get('current-challenges'),
        expectedOutcomes: formData.get('expected-outcomes'),
        timeline: formData.get('timeline'),
        newsletter: formData.get('newsletter'),
        message: formData.get('message')
      };
      
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        alert('Demo request submitted successfully! Our compliance experts will contact you within 24 hours to schedule your personalized demo.');
        setEmail('');
        setMessage('');
        (e.target as HTMLFormElement).reset();
      } else {
        alert(result.error || 'Error submitting demo request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting demo request:', error);
      alert('Error submitting demo request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: FileText,
      title: "Core Compliance Management",
      description: "Essential compliance infrastructure with intelligent document and regulatory systems",
      features: [
        "Centralized document storage with versioning",
        "Automated regulatory compliance monitoring",
        "Role-based user access control",
        "Comprehensive compliance reporting"
      ]
    },
    {
      icon: Shield,
      title: "Government Integration",
      description: "Seamless multi-portal connectivity with automated workflows and real-time synchronization",
      features: [
        "Direct integration with GST, MCA, RBI, NAAC, AICTE",
        "Streamlined compliance process automation",
        "Secure digital signature authentication",
        "Live data synchronization across portals"
      ]
    },
    {
      icon: Bot,
      title: "Advanced Technologies",
      description: "Cutting-edge AI, blockchain, and IoT solutions for intelligent compliance management",
      features: [
        "Immutable blockchain compliance documentation",
        "Smart campus IoT monitoring systems",
        "AI-powered compliance assistance",
        "Predictive analytics for proactive management"
      ]
    },
    {
      icon: BarChart3,
      title: "Autonomous Operations",
      description: "Self-healing systems with intelligent decision making and continuous optimization",
      features: [
        "Automated problem resolution systems",
        "AI-powered compliance decision making",
        "Zero-touch compliance workflows",
        "Continuous system performance optimization"
      ]
    }
  ];

  const phases = [
    {
      phase: "PHASE 1",
      title: "Core Compliance",
      description: "Essential compliance infrastructure with document management and regulatory tracking",
      features: ["Document management system", "Regulatory compliance monitoring", "User access control", "Comprehensive reporting"],
      status: "Live"
    },
    {
      phase: "PHASE 2",
      title: "Government Integration",
      description: "Multi-portal API integration with automated workflows and real-time synchronization",
      features: ["Multi-portal APIs integration", "Automated workflow engine", "Digital signature authentication", "Real-time data sync"],
      status: "Live"
    },
    {
      phase: "PHASE 3",
      title: "Advanced Technologies",
      description: "Blockchain, IoT, and AI-powered compliance systems with predictive analytics",
      features: ["Blockchain compliance records", "IoT smart campus monitoring", "AI compliance assistant", "Predictive analytics"],
      status: "Live"
    },
    {
      phase: "PHASE 4",
      title: "Autonomous Operations",
      description: "Self-healing systems with intelligent decision making and continuous optimization",
      features: ["Self-healing problem resolution", "AI-powered decision making", "Zero-touch operations", "Continuous optimization"],
      status: "Live"
    }
  ];

  const integrations = [
    { name: "UGC", description: "University Grants Commission - Higher Education Regulation" },
    { name: "AICTE", description: "All India Council for Technical Education - Technical Standards" },
    { name: "NCTE", description: "National Council for Teacher Education - Teacher Education" },
    { name: "NAAC", description: "National Assessment and Accreditation Council - Quality Assessment" },
    { name: "NBA", description: "National Board of Accreditation - Technical Program Accreditation" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VB</span>
              </div>
              <span className="font-semibold text-lg text-slate-900">Viksit Bharat</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a>
              <a href="#phases" className="text-slate-600 hover:text-slate-900 transition-colors">Phases</a>
              <a href="#councils" className="text-slate-600 hover:text-slate-900 transition-colors">Councils</a>
              <a href="#technologies" className="text-slate-600 hover:text-slate-900 transition-colors">Technologies</a>
              <a href="#integration" className="text-slate-600 hover:text-slate-900 transition-colors">Integration</a>
              <a href="#demo" className="text-slate-600 hover:text-slate-900 transition-colors">Demo</a>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" onClick={() => window.location.href = '/login'}>
                Login
              </Button>
              <Button size="sm" onClick={() => window.location.href = '/signup'}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  VIKSIT BHARAT SHIKSHA ADHIKSHAN 2025
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  AI-Powered Compliance for{' '}
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Educational Excellence
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  99% autonomous compliance management with AI intelligence, multi-council integration, 
                  and self-healing systems. Transforming educational institutions through seamless 
                  regulatory adherence across UGC, AICTE, NCTE and beyond.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  View Features
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">99%</div>
                  <div className="text-sm text-slate-600">Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">58,000+</div>
                  <div className="text-sm text-slate-600">Institutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">24/7</div>
                  <div className="text-sm text-slate-600">AI Monitoring</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <CardTitle className="text-lg">Compliance Dashboard</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div className="flex-1">
                      <div className="font-medium text-slate-900">UGC Compliance</div>
                      <div className="text-sm text-green-600">Verified</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div className="flex-1">
                      <div className="font-medium text-slate-900">AICTE Standards</div>
                      <div className="text-sm text-green-600">Completed</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <Clock className="h-5 w-5 text-yellow-600" />
                    <div className="flex-1">
                      <div className="font-medium text-slate-900">NCTE Guidelines</div>
                      <div className="text-sm text-yellow-600">In Progress</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Strip */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-slate-600 mb-8">Seamlessly integrating with India's educational regulatory ecosystem</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-20 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center">
                  <span className="text-sm font-medium text-slate-700">{integration.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Comprehensive Capabilities</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Complete Compliance Management Suite
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From core document management to fully autonomous operations, our platform provides 
              end-to-end compliance solutions with AI intelligence and multi-council integration.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2 text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Phases Section */}
      <section id="phases" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Implementation Phases</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Four Phases of Compliance Evolution
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our platform evolves from essential compliance management to fully autonomous operations, 
              delivering increasing levels of automation and intelligence at each phase.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant={phase.status === 'Live' ? 'default' : 'secondary'}>
                      {phase.phase}
                    </Badge>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      phase.status === 'Live' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {phase.status}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{phase.title}</CardTitle>
                  <CardDescription>{phase.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {phase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Councils Section */}
      <section id="councils" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Specialized Councils</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Three Pillars of Educational Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Viksit Bharat Shiksha Adhikshan establishes three specialized councils to ensure 
              comprehensive governance of higher education institutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Viniyaman Parishad</CardTitle>
                <CardDescription>Regulatory Council</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Acts as the common regulator for higher education, ensuring compliance with governance norms.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Governance compliance</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Commercialisation prevention</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Graded autonomy facilitation</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Institutional expansion support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Gunvatta Parishad</CardTitle>
                <CardDescription>Accreditation Council</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Oversees outcome-based accreditation frameworks with technology-driven quality assessment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Outcome-based accreditation</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Technology-driven ecosystem</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Transparent quality assessment</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Continuous improvement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Manak Parishad</CardTitle>
                <CardDescription>Standards Council</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Sets national academic standards and defines learning outcomes for educational excellence.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>National academic standards</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Learning outcome definitions</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Credit transfer facilitation</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Student mobility support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI/ML & Advanced Technologies Section */}
      <section id="technologies" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Advanced Technologies</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Powered by state-of-the-art AI/ML frameworks and advanced technologies 
              for intelligent compliance management and autonomous operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">TensorFlow.js</CardTitle>
                <CardDescription>Client-side Machine Learning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Advanced ML algorithms running directly in the browser for real-time compliance analysis and predictive insights.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">OpenAI API</CardTitle>
                <CardDescription>Natural Language Processing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Intelligent compliance guidance and document analysis using advanced NLP capabilities for automated insights.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Blockchain</CardTitle>
                <CardDescription>Immutable Records</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Tamper-proof compliance documentation and audit trails using distributed ledger technology for ultimate security.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">IoT Protocols</CardTitle>
                <CardDescription>Smart Campus Connectivity</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Real-time facility monitoring and compliance tracking through interconnected IoT sensors and smart devices.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Executive Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Advanced reporting and insights for institutional leadership with real-time dashboards and predictive analytics.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  AI Document Processing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Intelligent document analysis and automated compliance verification using advanced machine learning algorithms.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Penalty Avoidance System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Proactive compliance monitoring with automated alerts and preventive measures to avoid regulatory penalties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Platform Impact</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Transforming Educational Compliance at Scale
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our platform delivers unprecedented automation and intelligence across India's educational landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">99%</div>
                <div className="text-sm text-slate-600">Automation Rate</div>
                <div className="text-xs text-slate-500 mt-1">Fully autonomous operations</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">58,000+</div>
                <div className="text-sm text-slate-600">Institutions</div>
                <div className="text-xs text-slate-500 mt-1">Across India</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-sm text-slate-600">AI Monitoring</div>
                <div className="text-xs text-slate-500 mt-1">Real-time compliance</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">318%</div>
                <div className="text-sm text-slate-600">Global Growth</div>
                <div className="text-xs text-slate-500 mt-1">Visibility improvement</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Platform Capabilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Self-Healing Systems</span>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">AI Decision Making</span>
                    <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Zero-Touch Operations</span>
                    <Badge className="bg-green-100 text-green-800">Automated</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Continuous Optimization</span>
                    <Badge className="bg-blue-100 text-blue-800">Real-time</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Advanced Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-slate-600">Penalty Avoidance System</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-slate-600">Multi-Channel Alert Management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-slate-600">Real-time Regulatory Updates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-slate-600">Executive Analytics Dashboard</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-slate-600">AI Document Processing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Get Started</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Request Your Compliance Demo
              </h2>
              <p className="text-xl text-slate-600">
                Experience how our 99% autonomous platform transforms compliance management for your institution
              </p>
            </div>
            
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Institutional Compliance Assessment</CardTitle>
                <CardDescription>
                  Tell us about your institution and compliance needs. Our experts will provide a personalized demo tailored to your requirements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Enter your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="organization">Institution Name *</Label>
                      <Input id="organization" placeholder="Enter your institution name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="institution-type">Institution Type *</Label>
                      <select id="institution-type" className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required>
                        <option value="">Select type</option>
                        <option value="university">University</option>
                        <option value="college">College</option>
                        <option value="standalone">Standalone Institution</option>
                        <option value="deemed">Deemed University</option>
                        <option value="autonomous">Autonomous College</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="institution-size">Institution Size</Label>
                      <select id="institution-size" className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                        <option value="">Select size</option>
                        <option value="small">Small (&lt;1000 students)</option>
                        <option value="medium">Medium (1000-5000 students)</option>
                        <option value="large">Large (5000-20000 students)</option>
                        <option value="xlarge">Extra Large (&gt;20000 students)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="compliance-focus">Primary Focus *</Label>
                      <select id="compliance-focus" className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required>
                        <option value="">Select focus</option>
                        <option value="regulatory">Regulatory Compliance</option>
                        <option value="accreditation">Accreditation Management</option>
                        <option value="automation">Process Automation</option>
                        <option value="analytics">Analytics & Reporting</option>
                        <option value="comprehensive">Comprehensive Solution</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="current-challenges">Current Compliance Challenges</Label>
                    <Textarea 
                      id="current-challenges" 
                      placeholder="Describe your current compliance challenges, manual processes, or pain points..."
                      rows={3}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="expected-outcomes">Expected Outcomes</Label>
                    <Textarea 
                      id="expected-outcomes" 
                      placeholder="What are your expected outcomes from implementing our compliance platform?"
                      rows={3}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Implementation Timeline</Label>
                    <select id="timeline" className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (within 1 month)</option>
                      <option value="short-term">Short-term (1-3 months)</option>
                      <option value="medium-term">Medium-term (3-6 months)</option>
                      <option value="long-term">Long-term (6+ months)</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Requirements (Optional)</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Any specific requirements, questions, or additional information..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="newsletter" className="rounded border-slate-300 text-orange-600 focus:ring-orange-500" />
                    <Label htmlFor="newsletter" className="text-sm text-slate-600">
                      I would like to receive updates about compliance regulations and platform features
                    </Label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting Request...' : 'Request Personalized Demo'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">VB</span>
                </div>
                <span className="font-semibold text-lg">Viksit Bharat</span>
              </div>
              <p className="text-slate-400">
                Empowering educational institutions with seamless VBSA compliance management.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Platform</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors">VBSA Features</a></li>
                <li><a href="#phases" className="hover:text-white transition-colors">Implementation Phases</a></li>
                <li><a href="#councils" className="hover:text-white transition-colors">Specialized Councils</a></li>
                <li><a href="#integration" className="hover:text-white transition-colors">Regulatory Integration</a></li>
                <li><a href="#demo" className="hover:text-white transition-colors">Request Demo</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">VBSA Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Implementation Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Contact</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Email: vbsa-support@viksitbharat.edu.in</li>
                <li>Phone: +91-XXX-XXX-XXXX</li>
                <li>Address: New Delhi, India</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Viksit Bharat Shiksha Adhikshan Compliance Suite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}