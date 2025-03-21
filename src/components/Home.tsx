import { motion } from "framer-motion";
import { ChevronDown, CreditCard, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import bg from "../assets/images/hero-bg.jpg";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const features = [
    {
      icon: <CreditCard size={32} />,
      title: "Quick Cash",
      description:
        "Get funds transferred to your account within 24 hours after approval.",
    },
    {
      icon: <Shield size={32} />,
      title: "Secure Process",
      description:
        "Your data is protected with the highest security standards.",
    },
    {
      icon: <Clock size={32} />,
      title: "Flexible Terms",
      description:
        "Choose a repayment period that fits your financial situation.",
    },
  ];

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black/40">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/60 to-orange-500/60 z-10"></div>
          <img
            src={bg}
            alt="KamChei Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 text-white">
          <div className="max-w-xl">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Quick Loans for Cambodians
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get the financial support you need with our fast and flexible loan
              options. Apply online in minutes.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button className="cursor-pointer bg-white text-orange-600 hover:bg-gray-100 py-3 px-8 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
                Apply Now
              </button>
              <Link
                to="/how-it-works"
                className="flex items-center justify-center bg-orange-600 bg-opacity-30 hover:bg-opacity-40 backdrop-blur-sm py-3 px-8 rounded-lg font-medium transition-all"
              >
                How It Works
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="pt-8 pb-4 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            Why Choose <span className="text-orange-500">KamChei</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 40 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-orange-50 text-orange-600 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;