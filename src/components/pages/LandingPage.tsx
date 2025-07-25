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
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
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
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
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
              Why RTW™ Tracking Benefits Everyone
            </h2>
            <p className="text-xl text-gray-600">
              When non-qualified workers arrive at your site, they create a cascade of problems: bottlenecks at security gates, frustrated skilled workers waiting in line, administrative chaos, and significant productivity losses.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Problem Side */}
            <Card className="p-8 border-red-200 bg-red-50 hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-red-300">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-red-800">❌ Traditional Process</CardTitle>
              </CardHeader>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-800 text-sm">!</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-800">25% Workers Have Issues</h4>
                    <p className="text-red-700">Industry data shows that 25% of workers typically have qualification issues on arrival</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-800 text-sm">!</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-800">Gate Bottlenecks</h4>
                    <p className="text-red-700">Bottlenecks at security gates, frustrated skilled workers waiting in line</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-800 text-sm">!</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-800">Administrative Chaos</h4>
                    <p className="text-red-700">Administrative chaos and significant productivity losses</p>
                  </div>
                </div>
              </div>
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
                    <h4 className="font-bold text-green-800">RTW™ System</h4>
                    <p className="text-green-700">MODEMO®'s transparent RTW™ system ensures only fully qualified personnel reach your gates</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-green-800">CrewSpec™ Verification</h4>
                    <p className="text-green-700">Combined with CrewSpec™ verification, ensures proper crew composition with the right mix of journeymen, apprentices, and foremen</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-green-800">Eliminate Disruptions</h4>
                    <p className="text-green-700">Eliminating costly disruptions and building stronger, more efficient working relationships</p>
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
                Understanding Ready-to-Work (RTW™) Status: RTW™ certification means a worker has completed every requirement necessary to begin productive work immediately upon site arrival. This game-changing status eliminates the costly delays that occur when workers show up unprepared.
              </p>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li>• Owners define specific requirements upfront</li>
                <li>• 30-day advance warnings before credentials expire</li>
                <li>• Continuous RTW™ status throughout project</li>
              </ul>
            </Card>

            <Card className="text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 p-8 hover:bg-green-50 border-2 hover:border-green-200">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-green-200 transition-colors duration-300">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">CrewSpec™ Standards</h3>
              <p className="text-gray-600 mb-6">
                Combined with CrewSpec™ verification, owners can ensure not just individual qualifications, but proper crew composition with the right mix of journeymen, apprentices, and foremen for safe, efficient operations.
              </p>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li>• Proper crew composition verification</li>
                <li>• Right mix of skilled workers</li>
                <li>• Safe, efficient operations</li>
              </ul>
            </Card>

            <Card className="text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 p-8 hover:bg-orange-50 border-2 hover:border-orange-200">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-orange-200 transition-colors duration-300">
                <Clock className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Gate Acceleration</h3>
              <p className="text-gray-600 mb-6">
                Only Ready To Work workers should arrive at the site. All others add cost, chaos, frustration, and slow down the flow of RTW workers into the site. Transparent RTW requirements, fulfillment, tracking and streamlining is a money saver to both Owner and Contractor.
              </p>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li>• Only RTW™ workers arrive at site</li>
                <li>• Transparent requirements</li>
                <li>• Money saver for both parties</li>
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
            <div className="text-center hover:transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl font-bold text-green-600 mb-2">$1M+</div>
              <p className="text-gray-600">Saved on STO Events</p>
            </div>
            <div className="text-center hover:transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">5.7x</div>
              <p className="text-gray-600">Return on Investment</p>
            </div>
            <div className="text-center hover:transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-600 mb-2">25%</div>
              <p className="text-gray-600">Workers Have Issues</p>
            </div>
            <div className="text-center hover:transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl font-bold text-orange-600 mb-2">RTW™</div>
              <p className="text-gray-600">Ready-to-Work Status</p>
            </div>
          </div>

          {/* Enhanced Value Proposition */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50 border-green-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-green-800 flex items-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mr-3">OWNERS</span>
                    Exponential ROI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Transform your Shutdown, Turnaround, and Outage (STO) events with exponential ROI—at less than <strong>$17/day</strong>, MODEMO® prevents million-dollar delays.
                  </p>
                  <p className="text-gray-700 mb-4">
                    When daily production losses range from $1-3 million, saving just one hour ($42,000-125,000) pays for months of MODEMO®. Save one shift and you've covered years.
                  </p>
                  <p className="text-green-700 font-semibold">
                    With CrewSpec™, get the skilled workforce you bid for—proper journeyman-to-apprentice ratios and adequate foreman coverage.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-blue-800 flex items-center">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-3">CONTRACTORS</span>
                    Immediate Billing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Start billing immediately when your Ready-to-Work (RTW™) employees arrive on site—no more unbillable hours lost to qualification issues.
                  </p>
                  <p className="text-gray-700 mb-4">
                    With a proven <strong>5.7x return on investment</strong>, MODEMO® dramatically reduces administrative burden by automating paperwork and ensuring audit readiness.
                  </p>
                  <p className="text-blue-700 font-semibold">
                    CrewSpec™ proves you're delivering the exact skilled workforce promised, turning compliance into a competitive advantage.
                  </p>
                </CardContent>
              </Card>
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
