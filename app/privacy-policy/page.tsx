export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Privacy Policy</h1>
          <p className="text-blue-700">Last updated: January 2025</p>
        </div>

        <div className="prose prose-blue max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                VitaScan AI collects information you provide directly to us, such as when you create an account, upload
                medical images for analysis, or contact us for support.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Personal information (name, email address, phone number)</li>
                <li>Medical images and associated metadata</li>
                <li>Usage data and analytics</li>
                <li>Communication records</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide AI-powered medical image analysis services</li>
                <li>Improve our algorithms and service quality</li>
                <li>Communicate with you about your account and our services</li>
                <li>Ensure platform security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">3. HIPAA Compliance</h2>
              <p className="text-gray-700 mb-4">
                VitaScan AI is fully compliant with the Health Insurance Portability and Accountability Act (HIPAA). We
                implement appropriate safeguards to protect the privacy and security of protected health information
                (PHI).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">4. Data Security</h2>
              <p className="text-gray-700 mb-4">We implement industry-standard security measures including:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>End-to-end encryption for all data transmission</li>
                <li>Secure cloud storage with access controls</li>
                <li>Regular security audits and penetration testing</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">5. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information and medical data only as long as necessary to provide our services
                and comply with legal obligations. You may request deletion of your data at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of certain communications</li>
                <li>File a complaint with regulatory authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">7. Contact Us</h2>
              <p className="text-gray-700">If you have questions about this Privacy Policy, please contact us at:</p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-900 font-medium">VitaScan AI Privacy Team</p>
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
