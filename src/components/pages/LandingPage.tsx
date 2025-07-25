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
                  Get Them Working, Not Waiting
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  MODEMO® is a SaaS platform that solves the mobilization chaos plaguing refineries and chemical plants. When you need to coordinate 1,500-2,000 contractors during turnarounds, MODEMO® gives you real-time visibility and control over who's qualified, who's on-site, and who's actually ready to work.
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
              The Real Pain Points
            </h2>
            <p className="text-xl text-gray-600">
              Q1 2025, Texas Gulf Coast: 400 contractors stranded at the gate because qualifications weren't verified. After 12 hours of chaos, 100+ workers still waiting in line. Two days of lost momentum you never recover.
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
                    <h4 className="font-bold text-red-800">Day One Disasters</h4>
                    <p className="text-red-700">400 contractors stranded at the gate. 12 hours of chaos. 100+ workers still waiting in line.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-800 text-sm">!</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-800">Production Losses</h4>
                    <p className="text-red-700">Every day of delay costs $1-3 million. A Gulf Coast refinery lost $12 million from 10-day delays</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-800 text-sm">!</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-800">Unbillable Hour Crisis</h4>
                    <p className="text-red-700">At $85-150/hour for skilled trades, every false start destroys margins. 25% of workers have issues preventing immediate work</p>
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
                    <h4 className="font-bold text-green-800">Real-Time Visibility</h4>
                    <p className="text-green-700">Complete visibility of contractor readiness, prevent costly delays, and ensure everyone who shows up can actually work</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-green-800">RTW™ Status</h4>
                    <p className="text-green-700">Know exactly who's ready to work before deployment. Day 1 becomes predictable instead of chaotic</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-green-800">Built for Major Facilities</h4>
                    <p className="text-green-700">Built for facilities like BP, ExxonMobil, Lubrizol, Indorama, and Chemours</p>
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
              MODEMO®'s Three-Step Solution
            </h2>
            <p className="text-xl text-gray-600">
              Real-time tracking, automated compliance, seamless coordination
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 p-8 hover:bg-blue-50 border-2 hover:border-blue-200">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-blue-200 transition-colors duration-300">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Clear Event Mobilization Checklists</h3>
              <p className="text-gray-600 mb-6">
                Create site-specific requirements for each trade. Share them 60-90 days before mobilization (the industry best practice). Include exact documentation standards and timelines. Eliminate the last-minute scrambling that creates bottlenecks.
              </p>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li>• Site-specific requirements for each trade</li>
                <li>• 60-90 days advance sharing</li>
                <li>• Exact documentation standards</li>
              </ul>
            </Card>

            <Card className="text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 p-8 hover:bg-green-50 border-2 hover:border-green-200">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-green-200 transition-colors duration-300">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Set Crew Standards with CrewSpec™</h3>
              <p className="text-gray-600 mb-6">
                Define minimum journeyman-to-apprentice ratios (1:1 to 1:3). Require adequate foreman coverage (1 per 8-12 workers). Lock in certification levels during bidding. Get the A-team you're paying for, not the B-team that shows up.
              </p>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li>• Journeyman-to-apprentice ratios (1:1 to 1:3)</li>
                <li>• Foreman coverage (1 per 8-12 workers)</li>
                <li>• Lock in certification levels during bidding</li>
              </ul>
            </Card>

            <Card className="text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 p-8 hover:bg-orange-50 border-2 hover:border-orange-200">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-orange-200 transition-colors duration-300">
                <Clock className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">See Everything with Real-Time Reporting</h3>
              <p className="text-gray-600 mb-6">
                Track RTW™ status for every worker before arrival. Verify actual crew composition matches bid promises. Spot which contractors are stuck in orientation versus working. Give security complete qualified contractor lists for 75% faster gate processing.
              </p>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li>• Track RTW™ status before arrival</li>
                <li>• Verify crew composition matches bids</li>
                <li>• 75% faster gate processing</li>
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
              <div className="text-4xl font-bold text-green-600 mb-2">$12M</div>
              <p className="text-gray-600">Gulf Coast Refinery Lost</p>
            </div>
            <div className="text-center hover:transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">5.2x</div>
              <p className="text-gray-600">Contractor ROI Year 1</p>
            </div>
            <div className="text-center hover:transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-600 mb-2">25%</div>
              <p className="text-gray-600">Workers Have Issues</p>
            </div>
            <div className="text-center hover:transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl font-bold text-orange-600 mb-2">75%</div>
              <p className="text-gray-600">Faster Gate Processing</p>
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
                    Your daily delay cost: $1-3 million in lost production. MODEMO® cost: Less than $17 per day ($500/month). Each day saved pays for years of MODEMO®.
                  </p>
                  <p className="text-gray-700 mb-4">
                    1 hour saved = $42,000-125,000 (based on $1-3M daily production). 1 shift saved = $333,000-1,000,000. 1 day saved = $1,000,000-3,000,000.
                  </p>
                  <p className="text-green-700 font-semibold">
                    At less than $17 per day, the ROI is immediate and measurable. While contractors see 5.2x returns, owners see returns that multiply with every hour of delay prevented.
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
                    Your workers show up. They can't work. You eat the cost. Meanwhile, your competitors with MODEMO® are billing from hour one because their crews arrive Ready-To-Work.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Save $170-340 per worker per deployment (2-4 hours at $85/hour). With a proven <strong>5.2x ROI in Year 1</strong>, MODEMO® dramatically reduces admin costs by 20-30%.
                  </p>
                  <p className="text-blue-700 font-semibold">
                    Smart contractors are using MODEMO® to win more bids with RTW™ guarantees, command premium rates for proven reliability, and build preferred contractor status.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Testimonial */}
          <Card className="p-8 bg-blue-50 border-blue-200 hover:shadow-xl hover:bg-blue-100 hover:border-blue-300 transition-all duration-300 hover:scale-102">
            <div className="text-center">
              <blockquote className="text-xl text-gray-800 italic mb-4">
                "Day 1 becomes predictable instead of chaotic. Workers arrive ready. Orientation becomes confirmation, not qualification. Productive work begins immediately."
              </blockquote>
              <div className="text-blue-600 font-bold">Chemical Plant Manager</div>
              <div className="text-gray-600">Reduced mobilization time by 40%</div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready When You Are
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Eliminate contractor mobilization chaos. Get complete visibility of contractor readiness, prevent costly delays, and ensure everyone who shows up can actually work.
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
