import { motion } from "framer-motion";
import { CreditCard, Shield, Clock } from "lucide-react";
import bg from "../assets/images/hero-bg.jpg";
import { useInView } from "react-intersection-observer";
import { FaGooglePlay, FaAppStoreIos, FaArrowRight } from "react-icons/fa";
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
        <div className="container mx-auto px-4 relative z-20 text-white text-center">
          <div className="max-w-2xl">
            {/* Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Quick Loans for Cambodians
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get the financial support you need with our fast and flexible loan
              options. Apply online in minutes.
            </motion.p>

            {/* App Store & Play Store Buttons with How It Works Button */}
            <motion.div className="flex flex-col sm:flex-row gap-2 justify-center items-center mt-6 w-full sm:w-[512px] mx-auto">
              {/* How It Works Button - Takes 4/6 of the width */}
              <motion.div
                className="w-full sm:w-4/6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.a
                  href="#how-it-works"
                  className="flex items-center justify-center gap-2 bg-white text-orange-600 py-2.5 w-full rounded-lg font-medium hover:bg-gray-50 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>How It Works</span>
                  <FaArrowRight className="text-orange-600 text-lg" />
                </motion.a>
              </motion.div>

              {/* App Store & Play Store Buttons - Smaller with only icons */}
              <motion.div
                className="flex gap-2 w-full sm:w-2/6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.smile.lorn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-black/90 text-white p-3 rounded-lg hover:bg-black/80 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaGooglePlay className="text-green-400 text-xl" />
                </motion.a>
                <motion.a
                  href="https://apps.apple.com/kh/app/kamchei-instant-loan-online/id1557801298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-black/90 text-white p-3 rounded-lg hover:bg-black/80 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaAppStoreIos className="text-blue-400 text-xl" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
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
