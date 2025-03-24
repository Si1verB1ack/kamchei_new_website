import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

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

const FAQ = ({ colors }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What documents do I need to apply for a loan?",
      answer:
        "To apply for a loan, you'll need a valid Cambodian ID card, proof of income (like a salary slip or bank statement), and a Facebook account. For some loans, we may also require proof of address and contact information for references.",
    },
    {
      question: "How long does it take to get approved?",
      answer:
        "Most loan applications are processed within 24 hours. Once approved, funds are typically transferred to your bank account within the same business day.",
    },
    {
      question: "What are the interest rates?",
      answer:
        "Our interest rates vary depending on the loan amount and term. Typically, rates range from 3% to 5% monthly. The exact rate will be disclosed before you finalize your loan application.",
    },
    {
      question: "Can I repay my loan early?",
      answer:
        "Yes, you can repay your loan early without any prepayment penalties. Early repayment may help you save on interest costs.",
    },
    {
      question: "What happens if I can't make a payment on time?",
      answer:
        "If you anticipate difficulty making a payment, please contact us immediately. Late payments may incur additional fees and affect your ability to borrow in the future. We offer flexible options for customers facing temporary financial difficulties.",
    },
    {
      question: "Am I eligible for a loan if I'm self-employed?",
      answer:
        "Yes, self-employed individuals can apply for loans. You'll need to provide additional documentation such as business registration documents and bank statements to verify your income.",
    },
    {
      question: "How do I make loan repayments?",
      answer:
        "Loan repayments can be made through bank transfers, mobile payment apps, or in-person at our partner locations. We'll provide detailed payment instructions after your loan is approved.",
    },
    {
      question: "Can I increase my loan amount?",
      answer:
        "Returning customers with good repayment history may qualify for increased loan amounts. Your borrowing limit will be reviewed after successfully repaying your current loan.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className={`text-${colors.accent}`}>Questions</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Find answers to common questions about our loan process,
            eligibility, and repayment options.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`cursor-pointer min-w-full text-left p-6 rounded-lg flex justify-between items-center ${
                  activeIndex === index
                    ? `bg-gray-100 shadow-md transition-all`
                    : `bg-white shadow-sm hover:bg-white hover:shadow-lg ease-in-out transition-all`
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900 flex items-center">
                  <HelpCircle
                    className={`mr-3 text-${colors.accent}`}
                    size={20}
                  />
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <ChevronUp className={`text-${colors.accent}`} size={20} />
                ) : (
                  <ChevronDown className="text-gray-600" size={20} />
                )}
              </button>

              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    height: activeIndex === index ? "auto" : 0,
                  }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="bg-white p-6 rounded-b-lg border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Contact Support Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-600 mb-6">
            Don't see your question here? Feel free to contact our customer
            support team.
          </p>
          <a
            target="_blank"
            href="https://t.me/KamCheiCS"
            className={`cursor-pointer bg-orange-500 hover:bg-orange-600   text-white py-3 px-8 rounded-lg font-medium transition-all shadow-md hover:shadow-lg`}
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
