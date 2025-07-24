import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { CheckCircle, ArrowRight, DollarSign, Users, Clock, Zap, Shield } from "lucide-react";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-blue-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                TRANSPARENT PRICING
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight mt-4 mb-6">
              💰 Simple, Value-Driven Pricing
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              One simple plan with everything included. Scale with flexible add-ons for additional sites and contractors.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Single Plan */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-2 border-green-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  MODEMO® FULL ACCESS
                </span>
              </div>
              <CardHeader className="pb-6">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gray-900">Complete Platform</h3>
                  <p className="text-gray-600 mt-2">Everything you need for workforce mobilization</p>
                  <div className="mt-6">
                    <span className="text-6xl font-bold text-gray-900">$500</span>
                    <span className="text-gray-600 text-xl">.00/month</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Full platform access + add-ons</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-3">Base Features Included:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">RTW™ Dashboard (Full Access)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">CrewSpec™ Standards & Quality Control</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Gate Acceleration & Pre-validation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Advanced Analytics & Reporting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">API Integrations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Priority Support</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-3">Flexible Add-Ons:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span className="text-gray-700">Additional Site</span>
                      <span className="font-bold text-blue-600">+$25/month</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-700">Additional Contractor</span>
                      <span className="font-bold text-blue-600">+$50/month</span>
                    </li>
                  </ul>
                </div>

                <Button className="bg-green-600 hover:bg-green-700 text-white w-full mt-8 py-4 text-lg">
                  Start Free Trial
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  30-day free trial • Cancel anytime • No setup fees
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Proven ROI in 90 Days
            </h2>
            <p className="text-xl text-gray-600">
              Our customers typically see these results within their first quarter
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <p className="text-gray-600">Faster Mobilization</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">$2.3M</div>
              <p className="text-gray-600">Average Savings</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">50%</div>
              <p className="text-gray-600">Reduced Admin Time</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <p className="text-gray-600">Compliance Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              One platform, all features included, scale as you grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Base Plan */}
            <Card className="p-6 text-center bg-green-50 border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4">Base Platform</h3>
              <div className="text-4xl font-bold text-green-600 mb-2">$500</div>
              <p className="text-green-700 mb-4">per month</p>
              <p className="text-sm text-green-600">
                Complete MODEMO® platform with all core features
              </p>
            </Card>

            {/* Additional Sites */}
            <Card className="p-6 text-center bg-blue-50 border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Additional Sites</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">+$25</div>
              <p className="text-blue-700 mb-4">per site/month</p>
              <p className="text-sm text-blue-600">
                Each additional location you need to manage
              </p>
            </Card>

            {/* Additional Contractors */}
            <Card className="p-6 text-center bg-purple-50 border-purple-200">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Additional Contractors</h3>
              <div className="text-4xl font-bold text-purple-600 mb-2">+$50</div>
              <p className="text-purple-700 mb-4">per contractor/month</p>
              <p className="text-sm text-purple-600">
                Each additional contractor company you onboard
              </p>
            </Card>
          </div>

          <div className="mt-12 p-6 bg-white border-2 border-gray-200 rounded-lg">
            <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Example Pricing:</h4>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Base Platform</span>
                <span>$500.00/month</span>
              </div>
              <div className="flex justify-between">
                <span>3 Additional Sites (3 × $25)</span>
                <span>$75.00/month</span>
              </div>
              <div className="flex justify-between">
                <span>2 Additional Contractors (2 × $50)</span>
                <span>$100.00/month</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-lg">
                <span>Total Monthly Cost</span>
                <span>$675.00/month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What's included in the free trial?
              </h3>
              <p className="text-gray-600">
                Your 30-day free trial includes full access to all features in your chosen plan, including implementation support and training for your team.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Can I change plans later?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Do you offer custom implementations?
              </h3>
              <p className="text-gray-600">
                Absolutely. Our Enterprise plan includes custom integrations, on-site implementation, and dedicated support tailored to your specific needs.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What about data security and compliance?
              </h3>
              <p className="text-gray-600">
                MODEMO® is built with enterprise-grade security, including SOC 2 compliance, data encryption, and regular security audits. Enterprise plans include advanced security features.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Zap className="h-12 w-12 mr-4" />
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Mobilization?
            </h2>
          </div>
          <p className="text-xl mb-8 opacity-90">
            Start your free 30-day trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
