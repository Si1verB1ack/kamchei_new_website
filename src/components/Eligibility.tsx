import { motion } from "framer-motion";
import { Users, MapPin, Briefcase } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

const Eligibility = () => {
  const eligibilityCriteria = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Age",
      description: "Cambodian age between 18 to 50 years old.",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Nationwide",
      description: "Have specific permanent residential address.",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Career",
      description: "Those who have specific career with regular incomes.",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <section ref={ref} className="py-16 md:py-24 bg-gray-50" id="eligibility">
        {/* Card container */}
        <motion.div
          className="p-24"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            Who Can <span className="text-orange-500">Apply?</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {eligibilityCriteria.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-orange-50 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              className="text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Download our app now and get your loan application processed in
              minutes
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.smile.lorn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaGooglePlay className="text-green-400" />
                <span>Google Play</span>
              </motion.a>
              <motion.a
                href="https://apps.apple.com/kh/app/kamchei-instant-loan-online/id1557801298"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaAppStoreIos className="text-blue-400" />
                <span>App Store</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Eligibility;
