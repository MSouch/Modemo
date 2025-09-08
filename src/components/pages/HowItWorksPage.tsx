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
      {/* Go-live comparison redesigned */}
      <section className="py-28 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="px-3 py-1 rounded-full text-[11px] tracking-wider font-semibold bg-green-100 text-green-700 uppercase">Mobilize Fast</span>
            <h2 className="mt-6 text-5xl font-extrabold tracking-tight text-gray-900">Go Live In Minutes</h2>
            <p className="mt-3 text-base md:text-lg text-gray-600">Traditional procurement vs the MODEMO activation path</p>
            <div className="mt-8 grid gap-4 w-full md:grid-cols-4">
              <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex flex-col items-start shadow-sm"><strong className="text-lg">3–6 months</strong><span className="text-[11px] tracking-wider font-semibold text-gray-500">Traditional</span></div>
              <div className="bg-white border border-green-300 rounded-xl px-4 py-3 flex flex-col items-start shadow-sm"><strong className="text-lg">30 minutes</strong><span className="text-[11px] tracking-wider font-semibold text-green-600">MODEMO</span></div>
              <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex flex-col items-start shadow-sm"><strong className="text-lg">0 IT hours</strong><span className="text-[11px] tracking-wider font-semibold text-gray-500">Setup</span></div>
              <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex flex-col items-start shadow-sm md:col-span-1"><strong className="text-lg">Instant</strong><span className="text-[11px] tracking-wider font-semibold text-gray-500">Visibility</span></div>
            </div>
          </div>

          <div className="relative grid gap-20 lg:gap-28 lg:grid-cols-2">
            {/* Traditional timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-[3px] bg-gray-200 rounded" />
              <div className="mb-10"><span className="inline-block text-[11px] tracking-wider font-semibold text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm">TRADITIONAL</span></div>
              {[
                { label: 'MONTH 1', title: 'Procurement & Approvals', body: 'Vendor evaluation, security questionnaires, budget alignment, contract cycles begin.' },
                { label: 'MONTH 2', title: 'IT Integration Prep', body: 'Access provisioning, network design, identity mapping, policy reviews, internal prioritization delays.' },
                { label: 'MONTH 3', title: 'System Configuration', body: 'Environment build, database setup, custom forms, staging validation, change tickets.' },
                { label: 'MONTHS 4–6', title: 'Training & Rollout', body: 'User enablement, staggered onboarding, remediation cycles, post‑go‑live support ramp.' },
              ].map((step) => (
                <div key={step.label} className="relative pl-12 pb-12 last:pb-0 group">
                  <span className="absolute left-[0.5rem] top-1 w-6 h-6 rounded-full border-4 border-gray-300 bg-white shadow ring-4 ring-white transition-transform duration-300 group-hover:scale-110" />
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-[10px] font-semibold tracking-wider text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">{step.label}</span>
                    <h4 className="m-0 text-base font-bold text-gray-900">{step.title}</h4>
                  </div>
                  <p className="m-0 text-sm text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              ))}
              <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-gray-700 to-gray-600 text-white shadow flex flex-col gap-1">
                <h5 className="m-0 text-sm font-semibold tracking-wide">Risk Window Persists</h5>
                <p className="m-0 text-xs opacity-90">Gate inefficiencies & visibility gaps remain until full adoption.</p>
              </div>
            </div>
            {/* MODEMO timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-[3px] bg-green-200 rounded" />
              <div className="mb-10"><span className="inline-block text-[11px] tracking-wider font-semibold text-green-700 bg-white border border-green-200 px-3 py-1 rounded-full shadow-sm">MODEMO</span></div>
              {[
                { label: '0–10 MIN', title: 'Instant Sign‑Up', body: 'Credit card access – no procurement cycle. Platform live immediately.' },
                { label: '10–20 MIN', title: 'Configure Requirements', body: 'Define checklists, crafts, entry criteria. Align stakeholders quickly.' },
                { label: '20–30 MIN', title: 'Activate & Invite', body: 'Contractors onboard; RTW status begins populating. Visibility before arrival.' },
              ].map(step => (
                <div key={step.label} className="relative pl-12 pb-12 last:pb-0 group">
                  <span className="absolute left-[0.5rem] top-1 w-6 h-6 rounded-full border-4 border-green-600 bg-white shadow ring-4 ring-white transition-transform duration-300 group-hover:scale-110" />
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-[10px] font-semibold tracking-wider text-green-700 bg-green-100 px-2 py-0.5 rounded-full">{step.label}</span>
                    <h4 className="m-0 text-base font-bold text-gray-900">{step.title}</h4>
                  </div>
                  <p className="m-0 text-sm text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              ))}
              <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-green-600 to-blue-600 text-white shadow flex flex-col gap-1">
                <h5 className="m-0 text-sm font-semibold tracking-wide">Protected From Minute 30</h5>
                <p className="m-0 text-xs opacity-90">Gate delays reduced; upstream verification flowing; continuous compliance tracking.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-5 text-[11px] font-medium tracking-wide text-gray-600">
                <span className="flex items-center gap-2"><span className="w-3.5 h-3.5 rounded bg-gray-300" /> Traditional milestone</span>
                <span className="flex items-center gap-2"><span className="w-3.5 h-3.5 rounded bg-green-600" /> MODEMO milestone</span>
              </div>
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
