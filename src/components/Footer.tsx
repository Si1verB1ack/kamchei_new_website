import {
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-white min-h-[250px] flex items-center py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">KamChei</h3>
            <p className="text-gray-800 mb-4">
              Your trusted financial partner in Cambodia providing quick and
              easy loans for your needs.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-blue-400 transition-colors duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-pink-600 transition-colors duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-blue-800 transition-colors duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-600 hover:text-orange-500"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#eligibility"
                  className="text-gray-600 hover:text-orange-500"
                >
                  Eligibility
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-orange-500"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Loan Agreement
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <FaPhone className="w-4 h-4 mr-2 text-green-500" />
                <span>
                  <span className="text-green-700">Smart</span>: 015469536
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="w-4 h-4 mr-2 text-yellow-500" />
                <span>
                  <span className="text-yellow-700">Cellcard</span>: 012399999
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
