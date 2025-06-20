import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Brain, Shield, Zap, Users, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600/90 to-blue-800/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Advanced AI Medical Imaging</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Revolutionizing heart MPI analysis with cutting-edge artificial intelligence for faster, more
              accurate medical diagnosis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/analysis">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-200 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl"
                >
                  Start Analysis
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-blue-900 bg-white/90 hover:bg-white hover:text-blue-700 hover:scale-105 transition-all duration-200 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose VitaScan AI?</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Our advanced AI technology provides healthcare professionals with powerful tools for accurate and
              efficient medical imaging analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow bg-white/90">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">AI-Powered Analysis</CardTitle>
                <CardDescription>
                  Advanced machine learning algorithms trained on thousands of medical images for precise diagnosis.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow bg-white/90">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-blue-900">Instant Results</CardTitle>
                <CardDescription>
                  Get comprehensive analysis results in seconds, not hours. Accelerate your diagnostic workflow.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow bg-white/90">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-blue-900">Data Security and Privacy Compliance</CardTitle>
                <CardDescription>
                  Our system is designed with strong security measures to protect patient data and ensure user privacy.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow bg-white/90">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-blue-900">Single Organ Analysis</CardTitle>
                <CardDescription>
                  Focused MPI heart image analysis for precise cardiac condition classification.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow bg-white/90">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-blue-900">Collaborative Platform</CardTitle>
                <CardDescription>
                  Share results with colleagues and build a comprehensive patient history database.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow bg-white/90">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-blue-900">AI-validated model</CardTitle>
                <CardDescription>
                  AI-validated model for MPI-based cardiac condition classification.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Trusted by Healthcare Professionals</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">95%+</div>
              <div className="text-blue-800 font-medium">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-blue-800 font-medium">Images Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-blue-800 font-medium">Healthcare Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-blue-800 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Medical Practice?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of healthcare professionals who trust VitaScan AI for accurate and efficient medical imaging
            analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-200 px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl rounded-full"
              >
                Get Started Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-blue-900 bg-white/90 hover:bg-white hover:text-blue-700 hover:scale-105 transition-all duration-200 px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl rounded-full"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
