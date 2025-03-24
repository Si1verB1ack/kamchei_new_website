import { motion } from "framer-motion";
import { Users, MapPin, Briefcase } from "lucide-react";
import { useInView } from "react-intersection-observer";

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
      <section ref={ref} className="py-4 md:py-24 bg-gray-50" id="eligibility">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            Who Can <span className="text-orange-500">Apply?</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
        </div>
      </section>

      {/* Quick Apply Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-400 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Our application process is quick and easy. Get the funds you need
              in just a few steps.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <a href="https://t.me/KamCheiCS" target="_blank" className="cursor-pointer bg-white text-orange-600 hover:bg-gray-100 py-3 px-8 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl text-lg">
                Apply For A Loan Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Eligibility;