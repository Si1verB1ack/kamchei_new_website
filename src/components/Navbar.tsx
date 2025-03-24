import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.jpg";

interface Props {
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    accent: string;
    white: string;
  };
}

const Navbar = ({ colors }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    // { name: "How It Works", path: "/how-it-works" },
    // { name: "Eligibility", path: "/eligibility" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img
              src={logo}
              alt="KamChei"
              className="h-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.span
              className={`ml-2 text-xl font-bold ${
                location.pathname === "/"
                  ? scrolled
                    ? "text-orange-500"
                    : "text-white"
                  : "text-orange-500"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              KamChei
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-orange-600  " // Active link color
                      : location.pathname === "/"
                      ? scrolled
                        ? "text-gray-900 hover:text-orange-500"
                        : "text-white hover:text-orange-100"
                      : "text-gray-900 hover:text-orange-500"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.a
            target="_blank"
            href="https://t.me/KamCheiCS"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className={`cursor-pointer bg-${colors.primary} hover:bg-${colors.primaryDark} text-white px-5 py-2 rounded-lg font-medium transition-all shadow-md hover:shadow-lg`}
            >
              Apply Now
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`cursor-pointer p-2 focus:outline-none ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-2 px-4 font-medium ${
                    location.pathname === link.path
                      ? "text-orange-600" // Active link color
                      : location.pathname === "/"
                      ? scrolled
                        ? "text-gray-900 hover:text-orange-500"
                        : "text-white hover:text-orange-300"
                      : "text-gray-900 hover:text-orange-500"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
              target="_blank"
              href="https://t.me/KamCheiCS"
                className={`cursor-pointer bg-${colors.primary} hover:bg-${colors.primaryDark} text-white py-3 px-4 rounded-lg font-medium transition-all mt-3`}
              >
                Apply Now
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
