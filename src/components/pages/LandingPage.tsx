import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ModemoLogo from "../../Assets/Modemo.svg";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - two-column layout */}
  <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Message */}
            <div>
              

              <div className="inline-block mb-6">
                <span className="bg-green-100 text-green-800 px-5 py-2.5 rounded-full text-base font-semibold">
                  Mobilization & Demobilization Platform
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl text-gray-900 font-bold leading-tight mb-6">
                Get Everyone Ready
                <br />
                <span className="text-green-600">Before They Arrive</span>
              </h1>

              <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                MODEMO® is a SaaS platform that eliminates contractor mobilization chaos with real‑time RTW visibility.
              </p>

              {/* Triple Protection - compact row */}
              <div className="grid grid-cols-3 gap-6 max-w-xl mb-8">
                <div>
                  <div className="text-lg font-bold text-blue-600">GatePass</div>
                  <div className="text-sm text-gray-600">Streamlined gate processing</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-green-600">CrewSpec</div>
                  <div className="text-sm text-gray-600">Crew composition assurance</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-orange-600">RTW</div>
                  <div className="text-sm text-gray-600">Readiness before arrival</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:atovar@ap-vantage.com,jcrager@ap-vantage.com?subject=MODEMO Access Inquiry&body=Hello, I would like to inquire about accessing MODEMO for our facility."
                  className="group"
                >
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-5 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl">
                    <span className="flex items-center">
          Request Access
                      <ArrowRight className="ml-3 h-6 w-6 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </a>
        <span className="text-gray-500">Sign up in minutes • No IT</span>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <div className="lg:ml-auto max-w-md w-full">
                <div className="mb-6 flex justify-center">
                  <img src={ModemoLogo} alt="MODEMO" className="h-16 w-auto" />
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 w-full">
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
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
