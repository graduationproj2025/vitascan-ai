export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Cookie Policy</h1>
          <p className="text-blue-700">Last updated: January 2025</p>
        </div>

        <div className="prose prose-blue max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us
                provide you with a better experience by remembering your preferences and improving our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Types of Cookies We Use</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Essential Cookies</h3>
                  <p className="text-gray-700">
                    These cookies are necessary for the website to function properly. They enable core functionality
                    such as security, network management, and accessibility.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Performance Cookies</h3>
                  <p className="text-gray-700">
                    These cookies help us understand how visitors interact with our website by collecting and reporting
                    information anonymously.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Functional Cookies</h3>
                  <p className="text-gray-700">
                    These cookies enable enhanced functionality and personalization, such as remembering your login
                    details and preferences.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">How We Use Cookies</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>To keep you signed in to your account</li>
                <li>To remember your preferences and settings</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To improve our services and user experience</li>
                <li>To ensure website security and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Managing Cookies</h2>
              <p className="text-gray-700 mb-4">You can control and manage cookies in various ways:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
                <li>Third-party tools: Use privacy tools to manage tracking cookies</li>
                <li>Opt-out links: Use provided opt-out mechanisms for specific services</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Please note that disabling certain cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services that set cookies on our website, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Google Analytics for website analytics</li>
                <li>Authentication services for secure login</li>
                <li>Content delivery networks for improved performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-700">
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new
                policy on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Us</h2>
              <p className="text-gray-700">If you have questions about our use of cookies, please contact us:</p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-900 font-medium">VitaScan AI Support</p>
                <p className="text-blue-700">Email: gradproj2025@gmail.com</p>
                <p className="text-blue-700">Phone: +962 790924378</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
