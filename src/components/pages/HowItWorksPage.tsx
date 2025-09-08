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
               Three simple steps. Mobilize fast. Demobilize clean.
          </p>

          {/* Three Steps - Ultra Simple */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <List className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4">1. GatePass</h3>
              <p className="text-xl text-gray-600">Verify credentials before arrival</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-green-900 mb-4">2. CrewSpec</h3>
                 <p className="text-xl text-gray-600">Get the skilled crews you need</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-12 w-12 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-orange-900 mb-4">3. RTW</h3>
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
      {/* Go-live timeline (prominent) */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-block mb-3">
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">Mobilize Fast</span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900">Go live in minutes</h2>
            <p className="text-lg text-gray-600 mt-2">MODEMO vs Traditional</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-stretch">
            <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm border-l-4 border-gray-300">
              <h3 className="text-3xl font-bold text-gray-900 mb-1">Traditional systems</h3>
              <p className="text-sm text-gray-500 mb-6">3–6 months</p>
              <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-gray-400 mt-1" /> <span className="font-semibold">Month 1:</span>&nbsp;Procurement process • Vendor evaluation • Budget approval</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-gray-400 mt-1" /> <span className="font-semibold">Month 2:</span>&nbsp;IT integration • Security review • Network setup</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-gray-400 mt-1" /> <span className="font-semibold">Month 3:</span>&nbsp;System setup • Database config • Testing</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-gray-400 mt-1" /> <span className="font-semibold">Months 4–6:</span>&nbsp;Training & development • User training • Go‑live support</li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm border-l-4 border-green-300">
              <h3 className="text-3xl font-bold text-gray-900 mb-1">MODEMO</h3>
              <p className="text-sm text-gray-500 mb-6">Live in 30 minutes. Protected forever.</p>
              <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-green-600 mt-1" /> <span className="font-semibold">0–10 minutes:</span>&nbsp;Credit card sign‑up • Instant access • No procurement</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-green-600 mt-1" /> <span className="font-semibold">10–20 minutes:</span>&nbsp;Configure requirements • Set checklists • Add contractors</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-green-600 mt-1" /> <span className="font-semibold">20–30 minutes:</span>&nbsp;Live and protected • Start tracking • Full visibility</li>
              </ul>
              <p className="text-gray-500 text-sm mt-5">No IT required. Cloud‑based. Instant setup. Simple to use.</p>
            </div>
          </div>
        </div>
      </section>
  {/* What is RTW (after timeline) */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What is RTW (Ready-To-Work)?</h2>
            <p className="text-xl text-gray-700 mb-2">
              RTW status means a contractor employee has met all site-specific requirements and can begin work upon arrival.
            </p>
            <p className="text-gray-600">
              Fewer false starts. Less unproductive time. Stronger compliance.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">Production delays</span>
              <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">Safety exposure</span>
              <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">Compliance gaps</span>
              <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">Partnership strain</span>
              <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">Support drain</span>
            </div>
          </div>
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
                  <p className="text-gray-600">Cut wait times by moving compliance upstream with GatePass.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <ClipboardList className="h-6 w-6 text-orange-600" />
                <h3 className="text-lg font-semibold">Prove Readiness</h3>
              </div>
                  <p className="text-gray-600">RTW shows who’s qualified and available before Day 1.</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default HowItWorksPage;
