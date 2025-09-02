import { Button } from "../ui/button";
import { ArrowRight, Check } from "lucide-react";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Single Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h1 className="text-6xl lg:text-7xl text-gray-900 font-bold leading-tight mb-12">
            Inquire About Access
          </h1>
          
          <p className="text-3xl text-gray-700 mb-16 leading-relaxed">
            Value-based access tailored to your facility and contractor needs
          </p>

          <div className="bg-white border border-gray-200 rounded-2xl p-10 mb-12 text-left max-w-2xl mx-auto shadow-sm">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Pricing varies</h3>
            <ul className="text-xl text-gray-700 space-y-3">
              <li className="flex items-start gap-3"><Check className="h-6 w-6 text-green-600 mt-0.5" /> Value scales with your facility size and mobilization frequency</li>
              <li className="flex items-start gap-3"><Check className="h-6 w-6 text-green-600 mt-0.5" /> Custom packages based on your specific needs</li>
            </ul>
          </div>

          {/* Single CTA */}
          <a 
            href="mailto:atovar@ap-vantage.com,jcrager@ap-vantage.com?subject=MODEMO Access & Value Inquiry&body=Hello, I would like to inquire about MODEMO access and understand the value for our organization."
            className="group inline-block"
          >
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-xl text-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="flex items-center">
                Request Custom Pricing
                <ArrowRight className="ml-3 h-6 w-6 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </a>
          
          <p className="text-xl text-gray-500 mt-6">
            Less than $17/day prevents $1-3M delays
          </p>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
