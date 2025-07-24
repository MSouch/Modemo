import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CheckCircle, Factory, Zap, Droplets, ArrowRight, Building, Wrench } from "lucide-react";

const IndustriesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-blue-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block">
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                INDUSTRY EXPERTISE
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight mt-4 mb-6">
              Proven Across Industries
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From refineries to manufacturing plants, MODEMO® delivers results across the most demanding industrial environments.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Oil & Gas */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Droplets className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-800">Oil & Gas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Complex turnarounds, shutdowns, and maintenance operations requiring precise coordination.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Refineries</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Petrochemical Plants</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Upstream Facilities</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Pipeline Operations</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Manufacturing */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Factory className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-800">Manufacturing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  High-volume production environments with strict safety and efficiency requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Chemical Processing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Automotive</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Heavy Industry</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Food & Beverage</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Power Generation */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl text-orange-800">Power Generation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Critical infrastructure requiring maximum uptime and regulatory compliance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Nuclear Plants</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Coal Facilities</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Natural Gas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Renewables</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Expanding Industries
            </h2>
            <p className="text-xl text-gray-600">
              MODEMO® continues to grow across new industrial sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Infrastructure</h3>
              <p className="text-gray-600">Ports, airports, and transportation hubs</p>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mining</h3>
              <p className="text-gray-600">Extraction and processing operations</p>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pharmaceuticals</h3>
              <p className="text-gray-600">GMP environments and clean rooms</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Industry Success Metrics
            </h2>
            <p className="text-xl text-gray-600">
              Proven results across all industrial sectors
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$1M+</div>
              <p className="text-gray-700">Average savings per STO event</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5.7x</div>
              <p className="text-gray-700">ROI for contractor operations</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">85%</div>
              <p className="text-gray-700">Reduction in gate delays</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24hrs</div>
              <p className="text-gray-700">Faster mobilization time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Your Industry, Our Expertise
          </h2>
          <p className="text-xl mb-8 opacity-90">
            See how MODEMO® can transform workforce mobilization in your specific industrial environment.
          </p>
          <a href="mailto:atovar@ap-vantage.com,jcrager@ap-vantage.com?subject=MODEMO Industry Discussion&body=Hello, I would like to discuss how MODEMO can help in my industry.">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-lg">
              Discuss Your Industry
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
