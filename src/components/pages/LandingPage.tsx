import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ArrowRight, DollarSign, Clock, Shield, Eye, FileText } from "lucide-react";
import { useState } from "react";
import ModemoLogo from "../../Assets/Modemo.svg";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - two-column layout */}
      <section className="min-h-[85vh] flex items-center bg-gradient-to-br from-blue-50 to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Message */}
            <div>
              <div className="mb-8">
                <img src={ModemoLogo} alt="MODEMO" className="h-16 w-auto" />
              </div>

              <div className="inline-block mb-6">
                <span className="bg-green-100 text-green-800 px-5 py-2.5 rounded-full text-base font-semibold">
                  MOBILIZATION & DEMOBILIZATION PLATFORM
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl text-gray-900 font-bold leading-tight mb-6">
                Stop Losing Millions
                <br />
                <span className="text-green-600">To Gate Chaos</span>
              </h1>

              <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                <strong>$17/day</strong> prevents <strong>$1–3M</strong> daily losses
              </p>

              {/* Triple Protection - compact row */}
              <div className="grid grid-cols-3 gap-6 max-w-xl mb-8">
                <div>
                  <div className="text-lg font-bold text-blue-600">GatePass™</div>
                  <div className="text-sm text-gray-600">75% faster gates</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-green-600">CrewSpec™</div>
                  <div className="text-sm text-gray-600">Skills assurance</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-orange-600">RTW™</div>
                  <div className="text-sm text-gray-600">Ready to work</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:atovar@ap-vantage.com,jcrager@ap-vantage.com?subject=MODEMO Access Inquiry&body=Hello, I would like to inquire about accessing MODEMO for our facility."
                  className="group"
                >
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-5 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl">
                    <span className="flex items-center">
                      Get Protected Now
                      <ArrowRight className="ml-3 h-6 w-6 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </a>
                <span className="text-gray-500">Sign up in minutes • No IT • No lawyers</span>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 lg:ml-auto max-w-md w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Demo</h3>
                <p className="text-gray-600 mb-6">15-minute demo • Same-day setup</p>
                <div className="space-y-4">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Work Email"
                    className="text-base py-3"
                  />
                  <Input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company Name"
                    className="text-base py-3"
                  />
                  <a
                    href={`mailto:atovar@ap-vantage.com,jcrager@ap-vantage.com?subject=MODEMO Demo Request&body=Hello, I would like to schedule a demo of MODEMO.%0D%0A%0D%0ACompany: ${company}%0D%0AEmail: ${email}%0D%0A%0D%0AThank you!`}
                    className="block w-full"
                  >
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 text-base font-semibold rounded-lg">
                      Request Demo
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section - concise and scannable */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Benefits</h2>
            <p className="text-xl text-gray-600">The outcomes owners and contractors care about most</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Savings</h3>
                <p className="text-gray-600">Avoid $1–3M/day delays for under $17/day</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Speed</h3>
                <p className="text-gray-600">75% faster gate processing with GatePass™</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Safety</h3>
                <p className="text-gray-600">RTW™ confirms training and readiness pre-arrival</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                <Eye className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Visibility</h3>
                <p className="text-gray-600">Know who’s ready, who’s arriving, and when</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                <FileText className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Records</h3>
                <p className="text-gray-600">Clean documentation for audits and billing</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <ArrowRight className="h-6 w-6 text-gray-800" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Administrative ease</h3>
                <p className="text-gray-600">Fewer calls, emails, and gate hold-ups</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
