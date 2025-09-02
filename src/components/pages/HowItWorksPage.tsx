import { Button } from "../ui/button";
import { ArrowRight, Users, Shield, List, CheckCircle, Zap, ClipboardList } from "lucide-react";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Single Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h1 className="text-6xl lg:text-7xl text-gray-900 font-bold leading-tight mb-12">
            How It Works
          </h1>
          
          <p className="text-3xl text-gray-700 mb-16 leading-relaxed">
            Three simple steps to eliminate mobilization chaos
          </p>

          {/* Three Steps - Ultra Simple */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <List className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4">1. GatePass™</h3>
              <p className="text-xl text-gray-600">Verify credentials before arrival</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-green-900 mb-4">2. CrewSpec™</h3>
              <p className="text-xl text-gray-600">Get the skilled crews you paid for</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-12 w-12 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-orange-900 mb-4">3. RTW™</h3>
              <p className="text-xl text-gray-600">Know who's ready before they arrive</p>
            </div>
          </div>

          {/* Single CTA */}
          <a 
            href="mailto:atovar@ap-vantage.com,jcrager@ap-vantage.com?subject=MODEMO Demo Request&body=Hello, I would like to see how MODEMO works for our facility."
            className="group inline-block"
          >
            <Button className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-lg text-2xl font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="flex items-center">
                See It In Action
                <ArrowRight className="ml-4 h-7 w-7 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </a>
          
          <p className="text-xl text-gray-500 mt-6">
            15-minute demo • Same-day setup
          </p>
        </div>
      </section>
      {/* Compact Features */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold">Standardize Entry</h3>
              </div>
              <p className="text-gray-600">One clear, pre-verified checklist for every worker and craft.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold">Accelerate the Gate</h3>
              </div>
              <p className="text-gray-600">Cut wait times by moving compliance upstream with GatePass™.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <ClipboardList className="h-6 w-6 text-orange-600" />
                <h3 className="text-lg font-semibold">Prove Readiness</h3>
              </div>
              <p className="text-gray-600">RTW™ shows who’s qualified and available before Day 1.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
