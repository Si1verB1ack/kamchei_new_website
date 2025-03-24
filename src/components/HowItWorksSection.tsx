import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  UserPlus,
  CheckCircle,
  CreditCard,
  Clock as ClockIcon,
  RefreshCw,
} from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Create Account",
      description:
        "Sign up in less than 2 minutes with your basic information and Facebook account.",
      timeEstimate: "2 min",
      color: "bg-orange-500",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Verify ID",
      description:
        "Upload your ID document and take a selfie for quick verification.",
      timeEstimate: "3 min",
      color: "bg-orange-500",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Receive Funds",
      description:
        "Once approved, your loan is transferred directly to your bank account.",
      timeEstimate: "< 24 hrs",
      color: "bg-orange-500",
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: "Enjoy Flexible Terms",
      description: "Choose repayment period between 2 weeks to 2 months.",
      timeEstimate: "Your choice",
      color: "bg-orange-500",
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Build Credit",
      description:
        "Repay on time to increase your borrowing limit for future loans.",
      timeEstimate: "Ongoing",
      color: "bg-orange-500",
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
    <section id="how-it-works" className="pt-16 md:pt-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          How It <span className="text-orange-500">Works</span>
        </motion.h2>

        <motion.p
          className="text-gray-600 text-center max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Get your loan in just five simple steps - it's quick, easy, and
          hassle-free.
        </motion.p>

        {/* Process Timeline */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border-t-4 border-orange-500 hover:shadow-lg transition-all"
              variants={itemVariants}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div
                className={`bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto -mt-12 mb-6 relative shadow-md`}
                aria-hidden="true"
              >
                {step.icon}
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center">{step.description}</p>

              {/* Time Estimate */}
              <div className="flex items-center justify-center mt-4 text-orange-600">
                <ClockIcon size={16} className="mr-1" />
                <span className="text-sm">{step.timeEstimate}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Teaser */}
        <motion.div
          className="text-center py-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <p className="text-gray-600 mb-4">
            Have questions about the loan process?
          </p>
          <motion.div
            className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/faq"
              className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
            >
              View Frequently Asked Questions
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
