import Link from "next/link"
import { Heart, Stethoscope, Phone, MapPin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                
                <Stethoscope className="h-4 w-4 text-blue-100 absolute -bottom-1 -right-1" />
              </div>
              <span className="text-2xl font-bold">VitaScan AI</span>
            </div>
            <p className="text-blue-200 mb-4 max-w-md">
              Advanced AI-powered cardiac imaging analysis for accurate heart condition diagnosis.
               Empowering healthcare professionals with cutting-edge MPI technology.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200"> <a href="tel:+962790924378" 
                className="text-blue-200 hover:underline">+962 790924378
               </a></span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200">Amman, Jordan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200"> <a href="mailto:gradproj20256@gmail.com" 
                className="text-blue-200 hover:underline">
               gradproj20256@gmail.com
            </a></span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/analysis" className="text-blue-200 hover:text-white transition-colors">
                  Analysis
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-blue-200 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-blue-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-blue-200 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-blue-200 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
         
        </div>
      </div>
    </footer>
  )
}
