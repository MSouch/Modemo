import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowRight, Droplets, Factory, Zap, CheckCircle, Clock, DollarSign } from "lucide-react";

const IndustriesPage = () => {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero */}
			<section className="bg-gradient-to-br from-gray-50 to-white py-20">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Industries We Serve</h1>
					<p className="text-2xl text-gray-700 max-w-3xl mx-auto">
						Built for high-stakes industrial mobilizations—turnarounds, shutdowns, and capital projects.
					</p>
				</div>
			</section>

			{/* Core industries - compact cards */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-3 gap-8">
						<Card className="hover:shadow-md transition-shadow">
							<CardHeader>
								<div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-3">
									<Droplets className="h-7 w-7 text-orange-600" />
								</div>
								<CardTitle className="text-2xl">Oil & Gas</CardTitle>
							</CardHeader>
							<CardContent className="text-gray-600 space-y-2">
								<p>Refineries, petrochem, midstream</p>
								<p className="flex items-center gap-2 text-gray-700"><CheckCircle className="h-4 w-4 text-green-600" /> GatePass™ to cut gate queues</p>
								<p className="flex items-center gap-2 text-gray-700"><CheckCircle className="h-4 w-4 text-green-600" /> RTW™ to prove readiness</p>
							</CardContent>
						</Card>

						<Card className="hover:shadow-md transition-shadow">
							<CardHeader>
								<div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-3">
									<Factory className="h-7 w-7 text-blue-600" />
								</div>
								<CardTitle className="text-2xl">Manufacturing</CardTitle>
							</CardHeader>
							<CardContent className="text-gray-600 space-y-2">
								<p>Chemicals, heavy industry, discrete</p>
								<p className="flex items-center gap-2 text-gray-700"><CheckCircle className="h-4 w-4 text-green-600" /> CrewSpec™ for skills assurance</p>
								<p className="flex items-center gap-2 text-gray-700"><CheckCircle className="h-4 w-4 text-green-600" /> Faster on-boarding at the gate</p>
							</CardContent>
						</Card>

						<Card className="hover:shadow-md transition-shadow">
							<CardHeader>
								<div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-3">
									<Zap className="h-7 w-7 text-green-600" />
								</div>
								<CardTitle className="text-2xl">Power</CardTitle>
							</CardHeader>
							<CardContent className="text-gray-600 space-y-2">
								<p>Nuclear, fossil, renewables</p>
								<p className="flex items-center gap-2 text-gray-700"><CheckCircle className="h-4 w-4 text-green-600" /> Compliance pre-verified</p>
								<p className="flex items-center gap-2 text-gray-700"><CheckCircle className="h-4 w-4 text-green-600" /> Fewer first-day delays</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Metrics band */}
			<section className="py-14 bg-gray-50 border-t border-b">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid sm:grid-cols-3 gap-8 text-center">
						<div>
							<div className="text-4xl font-bold text-blue-600 mb-1">75%</div>
							<div className="text-gray-700 flex items-center justify-center gap-2"><Clock className="h-5 w-5 text-blue-600" />Faster gate processing</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-emerald-600 mb-1">5.2x</div>
							<div className="text-gray-700 flex items-center justify-center gap-2"><DollarSign className="h-5 w-5 text-emerald-600" />Contractor ROI year one</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-purple-600 mb-1">24 hrs</div>
							<div className="text-gray-700">Typical setup time</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-16 bg-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<a
						href="mailto:atovar@ap-vantage.com,jcrager@ap-vantage.com?subject=MODEMO Industry Solution&body=Hello, I would like to learn about MODEMO solutions for our industry."
						className="group inline-block"
					>
						<Button className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-6 rounded-lg text-2xl font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
							<span className="flex items-center">
								Discuss Your Industry
								<ArrowRight className="ml-4 h-7 w-7 transform group-hover:translate-x-1 transition-transform duration-300" />
							</span>
						</Button>
					</a>
					<p className="text-gray-500 text-lg mt-4">Short call. Clear fit. Fast start.</p>
				</div>
			</section>
		</div>
	);
};

export default IndustriesPage;
