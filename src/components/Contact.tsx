import { motion } from "framer-motion";
import { Clock, Phone, MessageSquare } from "lucide-react";

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

const Contact = ({ colors }: Props) => {
  const contactMethods = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      description: "Monday – Sunday (8:30am – 5:30pm)",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      description:
        "Smart: 015469536 | Cellcard: 085782497 | Metfone: 0882111989",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Social Media",
      description: "Customer Service Telegram & Facebook page",
    },
  ];

  return (
    <section className={`py-16 md:py-24 bg-${colors.primaryLight}`} id="contact">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Contact <span className={`text-${colors.primary}`}>Us</span>
        </motion.h2>

        {/* Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {contactMethods.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`bg-orange-50 text-${colors.accent} bg-${colors.primaryLight} rounded-full w-12 h-12 flex items-center justify-center mb-4`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>

              {index === 2 && (
                <div className="mt-4 flex space-x-4">
                  <a
                    target="_blank"
                    href="https://t.me/KamCheiCS"
                    className={`text-${colors.primary} hover:text-${colors.primaryDark} font-medium`}
                  >
                    Telegram
                  </a>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/kamchei"
                    className={`text-${colors.primary} hover:text-${colors.primaryDark} font-medium`}
                  >
                    Facebook
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
