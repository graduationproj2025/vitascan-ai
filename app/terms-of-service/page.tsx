export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Terms of Service</h1>
          <p className="text-blue-700">Last updated: January 2025</p>
        </div>

        <div className="prose prose-blue max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using VitaScan AI services, you accept and agree to be bound by the terms and provision
                of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">2. Service Description</h2>
              <p className="text-gray-700 mb-4">
                VitaScan AI provides artificial intelligence-powered medical imaging analysis services, specifically for
                lung and heart X-ray interpretation. Our services include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>AI-powered image analysis and interpretation</li>
                <li>Medical imaging insights and recommendations</li>
                <li>Secure data storage and management</li>
                <li>Analytics and reporting tools</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">3. Medical Disclaimer</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <p className="text-red-800 font-medium">
                  IMPORTANT: VitaScan AI is a diagnostic aid tool and should not replace professional medical judgment.
                  All AI-generated analyses must be reviewed and validated by qualified healthcare professionals.
                </p>
              </div>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Our AI provides suggestions and insights, not definitive diagnoses</li>
                <li>Healthcare professionals must make final diagnostic decisions</li>
                <li>Emergency cases require immediate medical attention regardless of AI results</li>
                <li>We are not liable for medical decisions based solely on our AI analysis</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">4. User Responsibilities</h2>
              <p className="text-gray-700 mb-4">As a user of VitaScan AI, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Use the service only for legitimate medical purposes</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect patient privacy and confidentiality</li>
                <li>Not attempt to reverse engineer or compromise our AI systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">5. Data Privacy and Security</h2>
              <p className="text-gray-700 mb-4">
                We are committed to protecting your data and maintaining HIPAA compliance:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>All medical data is encrypted in transit and at rest</li>
                <li>Access controls ensure only authorized personnel can view data</li>
                <li>We do not sell or share patient data with third parties</li>
                <li>Data retention policies comply with healthcare regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                VitaScan AI and its AI algorithms, software, and related materials are protected by intellectual
                property laws:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>You may not copy, modify, or distribute our software</li>
                <li>Our AI models and algorithms are proprietary</li>
                <li>You retain ownership of your medical images and data</li>
                <li>We may use anonymized data to improve our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">To the maximum extent permitted by law:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>We provide our services "as is" without warranties</li>
                <li>We are not liable for medical decisions or patient outcomes</li>
                <li>Our liability is limited to the amount paid for our services</li>
                <li>We are not responsible for third-party integrations or services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">8. Service Availability</h2>
              <p className="text-gray-700">
                While we strive for 99.9% uptime, we cannot guarantee uninterrupted service availability. We may perform
                maintenance, updates, or experience technical issues that temporarily affect service access.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">9. Termination</h2>
              <p className="text-gray-700">
                Either party may terminate this agreement at any time. Upon termination, you will lose access to our
                services, but we will provide reasonable time to export your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-700">
                These terms are governed by the laws of Jordan. Any disputes will be resolved through binding
                arbitration in Amman, Jordan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">11. Contact Information</h2>
              <p className="text-gray-700">For questions about these Terms of Service, contact us:</p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-900 font-medium">VitaScan AI Legal Team</p>
                <p className="text-blue-700">Email: gradproj2025@gmail.com</p>
                <p className="text-blue-700">Phone: +962 790924378</p>
                <p className="text-blue-700">Address: Amman, Jordan</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
