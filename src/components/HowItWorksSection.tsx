import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  UserPlus,
  CheckCircle,
  CreditCard,
  Clock,
  RefreshCw,
} from "lucide-react";

const HowItWorks = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const steps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Create Account",
      description:
        "Sign up in less than 2 minutes with your basic information and Facebook account.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Verify ID",
      description:
        "Upload your ID document and take a selfie for quick verification.",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Receive Funds",
      description:
        "Once approved, your loan is transferred directly to your bank account.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Enjoy Flexible Terms",
      description: "Choose repayment period between 2 weeks to 2 months.",
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Build Credit",
      description:
        "Repay on time to increase your borrowing limit for future loans.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-4 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            How To <span className="text-orange-500">Process</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Get your loan quickly and easily by following these simple steps. No
            paperwork, no office visits.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative"
        >
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all relative z-10"
              >
                <div className="bg-orange-50 rounded-full w-16 h-16 text-orange-600 flex items-center justify-center mb-6 mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
            Apply Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;