import { Button } from "../ui/button";
import { ArrowRight, Shield, Users, CheckCircle2, Clock, DollarSign } from "lucide-react";

const SolutionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Single Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h1 className="text-6xl lg:text-7xl text-gray-900 font-bold leading-tight mb-12">
            Solutions
          </h1>
          
          <p className="text-3xl text-gray-700 mb-16 leading-relaxed">
            Triple Protection™ for every mobilization scenario
          </p>

          {/* Two Solutions - Ultra Simple */}
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div className="text-center">
              <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Shield className="h-16 w-16 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-blue-900 mb-6">For Owners</h3>
              <p className="text-2xl text-gray-600 mb-4">Prevent million-dollar delays</p>
              <p className="text-xl text-gray-500">Less than $17/day</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Users className="h-16 w-16 text-green-600" />
              </div>
              <h3 className="text-4xl font-bold text-green-900 mb-6">For Contractors</h3>
              <p className="text-2xl text-gray-600 mb-4">5.2x ROI in Year 1</p>
              <p className="text-xl text-gray-500">Bill from hour one</p>
            </div>
          </div>

          {/* Single CTA */}
          <a 
            href="mailto:atovar@ap-vantage.com,jcrager@ap-vantage.com?subject=MODEMO Solutions Inquiry&body=Hello, I would like to learn about MODEMO solutions for our organization."
            className="group inline-block"
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-lg text-2xl font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="flex items-center">
                Find Your Solution
                <ArrowRight className="ml-4 h-7 w-7 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </a>
          
          <p className="text-xl text-gray-500 mt-6">
            Custom solutions for your needs
          </p>
        </div>
      </section>
      {/* Owners vs Contractors - concise benefits */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Owner-Operators</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3"><Clock className="h-5 w-5 text-blue-600" /> 75% fewer gate delays</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-green-600" /> RTW™ verified before arrival</li>
                <li className="flex items-center gap-3"><DollarSign className="h-5 w-5 text-emerald-600" /> Prevent $1–3M/day overruns</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contractors</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-green-600" /> CrewSpec™ proves qualifications</li>
                <li className="flex items-center gap-3"><Clock className="h-5 w-5 text-blue-600" /> Bill from hour one</li>
                <li className="flex items-center gap-3"><DollarSign className="h-5 w-5 text-emerald-600" /> 5.2x ROI in year one</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
