import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CheckCircle, Download, Play, BookOpen, ArrowRight, FileText, Video } from "lucide-react";

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-blue-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                KNOWLEDGE CENTER
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight mt-4 mb-6">
              📋 Resources & Education
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Master workforce mobilization with expert insights, proven strategies, and implementation guides.
            </p>
          </div>
        </div>
      </section>

      {/* Main Resource Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* White Papers */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-800">White Papers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  In-depth analysis of mobilization challenges, ROI case studies, and industry benchmarks.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Download className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">The True Cost of Mobilization Delays</h4>
                      <p className="text-xs text-gray-500">15-page analysis</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Download className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">ROI Study: Digital vs. Manual Processes</h4>
                      <p className="text-xs text-gray-500">22-page report</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Download className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">Industry Benchmarks 2025</h4>
                      <p className="text-xs text-gray-500">28-page study</p>
                    </div>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-6">
                  Download Papers
                </Button>
              </CardContent>
            </Card>

            {/* Best Practice Videos */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-green-200">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Video className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-800">Best Practice Videos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Expert guidance on optimizing your mobilization processes with real-world examples.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Play className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">CrewSpec™ Best Practices</h4>
                      <p className="text-xs text-gray-500">12 min tutorial</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Play className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">RTW™ Dashboard Walkthrough</h4>
                      <p className="text-xs text-gray-500">8 min demo</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Play className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">Mobilization Success Stories</h4>
                      <p className="text-xs text-gray-500">15 min case studies</p>
                    </div>
                  </li>
                </ul>
                <Button className="bg-green-600 hover:bg-green-700 text-white w-full mt-6">
                  Watch Videos
                </Button>
              </CardContent>
            </Card>

            {/* Implementation Guides */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-orange-200">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl text-orange-800">Implementation Guides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Step-by-step guides for successful MODEMO® deployment and optimization.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">Quick Start Guide</h4>
                      <p className="text-xs text-gray-500">30-day implementation</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">Team Training Playbook</h4>
                      <p className="text-xs text-gray-500">Complete curriculum</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">Change Management Toolkit</h4>
                      <p className="text-xs text-gray-500">Templates & checklists</p>
                    </div>
                  </li>
                </ul>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full mt-6">
                  Get Guides
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600">
              Most popular downloads and educational content
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Featured White Paper */}
            <Card className="p-8 border-purple-200 bg-purple-50">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-purple-800 mb-2">
                    🏆 Most Downloaded: The Digital Mobilization Revolution
                  </h3>
                  <p className="text-purple-700 mb-4">
                    A comprehensive 35-page guide to modernizing industrial workforce mobilization, featuring real ROI calculations and implementation timelines.
                  </p>
                  <div className="flex items-center text-sm text-purple-600 mb-4">
                    <Download className="h-4 w-4 mr-2" />
                    <span>Downloaded 2,847 times</span>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Download Now
                  </Button>
                </div>
              </div>
            </Card>

            {/* Featured Video */}
            <Card className="p-8 border-indigo-200 bg-indigo-50">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Play className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-indigo-800 mb-2">
                    🎬 Most Watched: MODEMO® Success Story
                  </h3>
                  <p className="text-indigo-700 mb-4">
                    See how a major refinery reduced mobilization time by 85% and saved $2.3M on their last turnaround using MODEMO®.
                  </p>
                  <div className="flex items-center text-sm text-indigo-600 mb-4">
                    <Play className="h-4 w-4 mr-2" />
                    <span>18,432 views • 12 min</span>
                  </div>
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    Watch Now
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Webinar Series */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-gray-600">
              Live expert sessions on workforce mobilization topics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="text-sm text-blue-600 font-bold mb-2">JAN 30, 2025 • 2:00 PM EST</div>
                <h3 className="text-lg font-bold mb-2">RTW™ Dashboard Deep Dive</h3>
                <p className="text-gray-600 text-sm">Master the Ready-to-Work dashboard for maximum visibility</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full text-sm">
                Register Now
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="text-sm text-green-600 font-bold mb-2">FEB 06, 2025 • 2:00 PM EST</div>
                <h3 className="text-lg font-bold mb-2">CrewSpec™ Best Practices</h3>
                <p className="text-gray-600 text-sm">Optimize crew standards and quality control</p>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full text-sm">
                Register Now
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="text-sm text-orange-600 font-bold mb-2">FEB 13, 2025 • 2:00 PM EST</div>
                <h3 className="text-lg font-bold mb-2">ROI Calculation Workshop</h3>
                <p className="text-gray-600 text-sm">Calculate and present mobilization ROI to stakeholders</p>
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full text-sm">
                Register Now
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Stay Ahead of the Curve
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for the latest insights, case studies, and best practices in workforce mobilization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 rounded-lg text-gray-900 flex-1"
            />
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg">
              Subscribe
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
