import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CheckCircle, Users, Shield, Clock, ArrowRight } from "lucide-react";

const SolutionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                MODEMO® SOLUTIONS
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight mt-4 mb-6">
              Comprehensive Workforce Mobilization Solutions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From small maintenance jobs to major turnarounds, MODEMO® scales to meet your industrial workforce needs.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* For Owner-Operators */}
            <Card className="p-8 border-blue-200">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-800">For Owner-Operators</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">STO Event Management</h4>
                      <p className="text-gray-600">Complete shutdown, turnaround, and outage coordination</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Compliance Oversight</h4>
                      <p className="text-gray-600">Real-time contractor compliance monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Gate Management</h4>
                      <p className="text-gray-600">Eliminate bottlenecks and reduce wait times</p>
                    </div>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* For Contractors */}
            <Card className="p-8 border-green-200">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-800">For Contractors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Crew Management</h4>
                      <p className="text-gray-600">Optimize crew deployment and utilization</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Billing Acceleration</h4>
                      <p className="text-gray-600">Start invoicing from day one arrival</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">CrewSpec™ Validation</h4>
                      <p className="text-gray-600">Prove skilled team delivery</p>
                    </div>
                  </div>
                </div>
                <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600">
              Proven success across industrial sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Oil & Gas</h3>
              <p className="text-gray-600">Refineries, petrochemical plants, and upstream facilities</p>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
              <p className="text-gray-600">Chemical processing, automotive, and heavy industry</p>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Power Generation</h3>
              <p className="text-gray-600">Nuclear, coal, natural gas, and renewable facilities</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how MODEMO® can optimize your specific industrial workforce challenges.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-lg">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
