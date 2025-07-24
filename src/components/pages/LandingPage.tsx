import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ArrowRight, CheckCircle, Users, Clock, Shield } from "lucide-react";
import { useState } from "react";
import ModemoLogo from "../../Assets/Modemo.svg";

const LandingPage = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    WORKFORCE MOBILIZATION PLATFORM
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                  Turn Mobilization Chaos into Day 1 Readiness
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  MODEMO® is the workforce mobilization platform purpose-built for industrial events—eliminating bottlenecks, enforcing crew quality, and delivering workforce visibility before boots hit the ground.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:atovar@ap-vantage.com,jcrager@ap-vantage.com?subject=MODEMO Demo Request&body=Hello, I would like to schedule a demo of MODEMO."
                  className="group relative overflow-hidden"
                >
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-green-500/25">
                    <span className="relative z-10 flex items-center">
                      Schedule a Demo
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </a>
                <Button className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-3 rounded-lg text-lg transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                  Watch Overview
                </Button>
              </div>
            </div>

            {/* Right Column - Visual/Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="text-center mb-6">
                <img 
                  src={ModemoLogo} 
                  alt="MODEMO - See in Action" 
                  className="h-12 w-auto mx-auto transition-all duration-200 hover:scale-105"
                />
              </div>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-gray-700">Work Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@company.com"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-gray-700">Company</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your Company Name"
                    className="mt-2"
                  />
                </div>
                <a 
                  href="mailto:atovar@ap-vantage.com,jcrager@ap-vantage.com?subject=MODEMO Demo Request&body=Hello, I would like to request a demo of MODEMO.%0D%0A%0D%0ACompany: [Your Company]%0D%0AEmail: [Your Email]%0D%0A%0D%0AThank you!"
                  className="block w-full group relative overflow-hidden"
                >
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-lg text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 relative z-10">
                    <span className="relative z-10">Request Demo</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </a>
                <p className="text-sm text-gray-500 text-center">
                  30-minute personalized demo • No sales pressure
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Why Mobilization Fails (And How to Fix It)
            </h2>
            <p className="text-xl text-gray-600">
              Every delay costs thousands. Every compliance issue risks millions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Problem Side */}
            <Card className="p-8 border-red-200 bg-red-50 hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-red-300">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-red-800">❌ Traditional Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-800 text-sm">!</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-800">Paper-Based Chaos</h4>
                    <p className="text-red-700">Spreadsheets, emails, and manual processes create bottlenecks</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-800 text-sm">!</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-800">No Crew Visibility</h4>
                    <p className="text-red-700">Discover skill gaps and compliance issues on arrival day</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-800 text-sm">!</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-800">Gate Bottlenecks</h4>
                    <p className="text-red-700">Hours-long waits while processing hundreds of workers</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Solution Side */}
            <Card className="p-8 border-green-200 bg-green-50 hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-green-300">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-green-800">✅ MODEMO® Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-green-800">Digital-First Platform</h4>
                    <p className="text-green-700">Automated workflows eliminate manual bottlenecks</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-green-800">RTW™ Dashboard</h4>
                    <p className="text-green-700">Real-time visibility into crew readiness before they arrive</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-green-800">Day 1 Readiness</h4>
                    <p className="text-green-700">Workers arrive job-ready with validated compliance</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              The MODEMO® Three Pillars
            </h2>
            <p className="text-xl text-gray-600">
              Built specifically for industrial workforce mobilization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 p-8 hover:bg-blue-50 border-2 hover:border-blue-200">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-blue-200 transition-colors duration-300">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">RTW™ Tracking</h3>
              <p className="text-gray-600 mb-6">
                Real-time Ready-to-Work visibility across your entire workforce pipeline, from planning to gate entry.
              </p>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li>• Live crew status dashboard</li>
                <li>• Compliance tracking</li>
                <li>• Arrival coordination</li>
              </ul>
            </Card>

            <Card className="text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 p-8 hover:bg-green-50 border-2 hover:border-green-200">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-green-200 transition-colors duration-300">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">CrewSpec™ Standards</h3>
              <p className="text-gray-600 mb-6">
                Enforce crew quality and standardization with digital skill verification and role requirements.
              </p>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li>• Digital skill verification</li>
                <li>• Role-based requirements</li>
                <li>• Quality assurance</li>
              </ul>
            </Card>

            <Card className="text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 p-8 hover:bg-orange-50 border-2 hover:border-orange-200">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-orange-200 transition-colors duration-300">
                <Clock className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Gate Acceleration</h3>
              <p className="text-gray-600 mb-6">
                Eliminate gate bottlenecks with pre-validated workers and streamlined entry processes.
              </p>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li>• Pre-validation workflows</li>
                <li>• Streamlined gate entry</li>
                <li>• Reduced wait times</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Real Results from Real Customers
            </h2>
            <p className="text-xl text-gray-600">
              Industry leaders trust MODEMO® for their most critical projects
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
              <p className="text-gray-600">Faster Mobilization</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2.3M</div>
              <p className="text-gray-600">Average Savings</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50%</div>
              <p className="text-gray-600">Reduced Admin Time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <p className="text-gray-600">Compliance Rate</p>
            </div>
          </div>

          {/* Testimonial */}
          <Card className="p-8 bg-blue-50 border-blue-200 hover:shadow-xl hover:bg-blue-100 hover:border-blue-300 transition-all duration-300 hover:scale-102">
            <div className="text-center">
              <blockquote className="text-xl text-gray-800 italic mb-4">
                "MODEMO® transformed our turnaround mobilization. What used to take 3 weeks now happens in 3 days. The ROI was immediate and dramatic."
              </blockquote>
              <div className="text-blue-600 font-bold">Sarah Johnson</div>
              <div className="text-gray-600">Project Director, Major Refinery</div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Turn Chaos into Day 1 Readiness?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join industry leaders who've transformed their workforce mobilization with MODEMO®.
          </p>
          <a 
            href="mailto:atovar@ap-vantage.com,jcrager@ap-vantage.com?subject=MODEMO Demo Request&body=Hello, I would like to schedule a demo of MODEMO."
            className="group relative inline-block"
          >
            <Button className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 px-8 py-3 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-white/25 relative z-10">
              <span className="relative z-10 flex items-center">
                Schedule Your Demo Today
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
