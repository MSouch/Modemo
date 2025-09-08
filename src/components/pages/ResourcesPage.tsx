import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowRight, FileText, Video, BookOpen } from "lucide-react";

const ResourcesPage = () => {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero */}
			<section className="bg-gradient-to-br from-gray-50 to-white py-20">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Resources & Education</h1>
					<p className="text-2xl text-gray-700 max-w-3xl mx-auto">Short, practical materials to master workforce mobilization.</p>
				</div>
			</section>

			{/* Resource types */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-3 gap-8">
						<Card className="hover:shadow-md transition-shadow">
							<CardHeader>
								<div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-3">
									<FileText className="h-7 w-7 text-blue-600" />
								</div>
								<CardTitle className="text-2xl">White Papers</CardTitle>
							</CardHeader>
							<CardContent className="text-gray-600 space-y-2">
								<p>ROI benchmarks and case studies</p>
								<p>Gate acceleration strategies</p>
								<p>Readiness and compliance models</p>
							</CardContent>
						</Card>

						<Card className="hover:shadow-md transition-shadow">
							<CardHeader>
								<div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-3">
									<Video className="h-7 w-7 text-purple-600" />
								</div>
								<CardTitle className="text-2xl">Short Demos</CardTitle>
							</CardHeader>
							<CardContent className="text-gray-600 space-y-2">
								<p>GatePass in 2 minutes</p>
								<p>CrewSpec skill assurance</p>
								<p>RTW readiness overview</p>
							</CardContent>
						</Card>

						<Card className="hover:shadow-md transition-shadow">
							<CardHeader>
								<div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-3">
									<BookOpen className="h-7 w-7 text-green-600" />
								</div>
								<CardTitle className="text-2xl">Guides</CardTitle>
							</CardHeader>
							<CardContent className="text-gray-600 space-y-2">
								<p>90‑day rollout playbook</p>
								<p>Contractor onboarding checklist</p>
								<p>Metrics to track and share</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-16 bg-gray-50 border-t">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<a
						href="mailto:atovar@ap-vantage.com,jcrager@ap-vantage.com?subject=MODEMO Resources Request&body=Please share access to MODEMO resources."
						className="group inline-block"
					>
						<Button className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-6 rounded-lg text-2xl font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
							<span className="flex items-center">
								Request Resources
								<ArrowRight className="ml-4 h-7 w-7 transform group-hover:translate-x-1 transition-transform duration-300" />
							</span>
						</Button>
					</a>
					<p className="text-gray-500 text-lg mt-4">We’ll send the latest guides, demos, and papers.</p>
				</div>
			</section>
		</div>
	);
};

export default ResourcesPage;
