import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CheckCircle, Users, Shield, Clock, ArrowRight, List } from "lucide-react";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                HOW IT WORKS
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight mt-4 mb-6">
              The MODEMO® Process
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From chaos to clarity in three proven steps. See how MODEMO® transforms workforce mobilization.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars - Detailed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl font-bold">1</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Create Site-Specific Checklists</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Eliminate confusion with clear documentation, deadlines, and contact information tailored to your specific site requirements.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Custom checklist templates for different job types</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Automated deadline tracking and notifications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Contact directory with roles and responsibilities</span>
                  </li>
                </ul>
              </div>
              <Card className="p-8 border-blue-200 bg-blue-50">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <List className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-center text-blue-800 mb-4">Checklist Management</h3>
                <p className="text-blue-700 text-center">
                  Dynamic, intelligent checklists that adapt to your project requirements and ensure nothing falls through the cracks.
                </p>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="p-8 border-green-200 bg-green-50 lg:order-1">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-center text-green-800 mb-4">CrewSpec™ Standards</h3>
                <p className="text-green-700 text-center">
                  Intelligent crew composition analysis ensuring proper journeyman ratios and foreman coverage for optimal safety and productivity.
                </p>
              </Card>
              <div className="lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl font-bold">2</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Enforce Crew Standards</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  CrewSpec™ ensures proper journeyman ratios and foreman coverage, maintaining quality and safety standards across all crews.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Automated crew composition validation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Skills matrix and certification tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Real-time crew quality scoring</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl font-bold">3</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Track RTW™ Status</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Know exactly who is qualified, cleared, and ready—before Day 1. Real-time Ready-to-Work™ visibility eliminates surprises.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Real-time workforce readiness dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Certification expiration monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Predictive analytics for mobilization timing</span>
                  </li>
                </ul>
              </div>
              <Card className="p-8 border-orange-200 bg-orange-50">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-center text-orange-800 mb-4">RTW™ Dashboard</h3>
                <p className="text-orange-700 text-center mb-4">
                  Comprehensive readiness tracking with predictive insights for optimal mobilization timing.
                </p>
                <div className="text-sm text-orange-800 font-medium bg-orange-100 p-3 rounded-lg">
                  RTW™ = Ready-to-Work Status
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Implementation Timeline
            </h2>
            <p className="text-xl text-gray-600">
              From setup to full deployment in record time
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Week 1</h3>
              <p className="text-gray-600">Initial setup and configuration</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Week 2</h3>
              <p className="text-gray-600">Team training and onboarding</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Week 3</h3>
              <p className="text-gray-600">Pilot testing and refinement</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Week 4</h3>
              <p className="text-gray-600">Full deployment and go-live</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            See MODEMO® in Action
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Watch our 90-second overview or schedule a personalized demo to see how it works for your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-lg">
              Watch 90-Second Overview
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg rounded-lg">
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
