import { BadgeCheck, ChevronRight, ClipboardList, Users, Eye, LogIn, LogOut } from "lucide-react";
import { Button } from "../ui/button";

const KeyBenefitsPage = () => {
  const benefits = [
    {
      tag: "StartLine",
      title: "Requirements Definition",
      second: "StartLine sets everyone up for success from day one by collaborating with stakeholders.",
      bottom: "Everyone Arrives Prepared = Immediate Productivity",
      color: "text-blue-700 bg-blue-50",
      bar: "border-l-4 border-blue-200",
      icon: <ClipboardList className="h-6 w-6" />,
    },
    {
      tag: "CrewSpec",
      title: "Crew Composition Management",
      second: "CrewSpec ensures optimal workforce mix for project success",
      bottom: "Get the team you need!",
  color: "text-green-700 bg-green-50",
  bar: "border-l-4 border-green-200",
      icon: <Users className="h-6 w-6" />,
    },
    {
      tag: "RTW",
      title: "Visibility Before Arrival",
      second: "RTW provides a clear mobilization status for informed decision-making",
      bottom: "Make informed decisions weeks in advance",
      color: "text-orange-700 bg-orange-50",
      bar: "border-l-4 border-orange-200",
      icon: <Eye className="h-6 w-6" />,
    },
    {
      tag: "GatePass",
      title: "Streamlined Processing",
      second: "GatePass transforms the security backlog",
      bottom: "Stop stranding workers at the gate.",
  color: "text-blue-700 bg-blue-50",
  bar: "border-l-4 border-blue-200",
      icon: <LogIn className="h-6 w-6" />,
    },
    {
      tag: "ExitList",
      title: "Demobilization Cost Management",
      second: "ExitList transforms project wind-down from chaos to control",
      bottom: "Shared demobilization visibility prevents surprises.",
  color: "text-green-700 bg-green-50",
  bar: "border-l-4 border-green-200",
      icon: <LogOut className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-800">
              Mobilization & Demobilization Platform
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Key Benefits
          </h1>
          <p className="text-xl text-gray-700">
            Only what matters. No fluff.
          </p>
        </div>
      </section>

      {/* Benefits list */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {benefits.map((b) => (
              <div
                key={b.tag}
                className={`p-6 rounded-2xl border border-gray-200 bg-white shadow-sm ${b.bar} transition-all duration-200 hover:shadow-md hover:-translate-y-0.5`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${b.color}`}>{b.icon ?? <BadgeCheck className="h-6 w-6" />}</div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold uppercase tracking-wide text-gray-600">{b.tag}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{b.title}</h3>
                    <p className="text-gray-700 mt-2">{b.second}</p>
                    <p className="text-gray-900 font-semibold mt-1">{b.bottom}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="mailto:atovar@ap-vantage.com,jcrager@ap-vantage.com?subject=MODEMO Access Inquiry&body=Hello, I would like to get access to MODEMO and see the value for our role."
              className="inline-block"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold">
                Get Access <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <div className="text-gray-500 mt-3">Owners and contractors see value tailored to their role after sign-up.</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyBenefitsPage;
