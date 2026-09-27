import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">

      {/* Footer Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              AI<span className="text-blue-300">Scheme</span>
            </h2>

            <p className="text-gray-300 text-sm leading-6">
              An AI-powered platform that helps marginalized entrepreneurs
              discover government schemes based on their needs, profile,
              and eligibility.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="/" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/schemes" className="hover:text-blue-400 transition">
                  Find Schemes
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-blue-400 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  AI Scheme Matching
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Eligibility Check
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Scheme Recommendations
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Application Guidance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact Us
            </h3>

            <div className="space-y-3 text-gray-300 text-sm">
              <p>📧  priyanshi12@gmail.com</p>
              <p>📞 +91 9598276534</p>
              <p>📍 India</p>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="hover:text-blue-400 transition"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="hover:text-blue-400 transition"
              >
                GitHub
              </a>

              <a
                href="#"
                className="hover:text-blue-400 transition"
              >
                Instagram
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 mt-10 pt-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2026 AI Scheme Matching. All Rights Reserved.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-blue-400 transition"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="hover:text-blue-400 transition"
              >
                Terms & Conditions
              </a>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}