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
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const faqs = [
    {
      category: "About Us",
      questions: [
        {
          question: "Who is KamChei?",
          answer:
            "KamChei is the financial services which provide online loan using the high technology.",
        },
        {
          question: "Where is KamChei Operation?",
          answer:
            "We are operating our business across Cambodia. Your loan will be provided and repaid back through your bank and/or money transfer company.",
        },
      ],
    },
    {
      category: "Sign Up/Sign In",
      questions: [
        {
          question: "How to sign up or Sign In?",
          answer:
            "It is very simple. Please download the app from Google Play or AppStore. Easily request for a loan just by having your Khmer ID Card, Facebook Account, and your smartphone. Very fast cash withdrawal. Repay back on time will help you to increase your next loan amount.",
        },
        {
          question: "I haven't received any messages?",
          answer:
            "You will receive the messages within 2 minutes. If you haven't received the messages, please contact us.",
        },
        {
          question: "Can I create two accounts?",
          answer:
            "No, you cannot. Because your account is only linked with your smartphone and your phone number.",
        },
        {
          question: "I changed my phone number or phone.",
          answer:
            "You can still use the app with the new devices. Your old account will be replaced by the new one.",
        },
        {
          question: "Can I use the phone number of another person to request a loan?",
          answer:
            "No, you cannot. Your information in your phone and our team want to monitor your loan performance points by your statistic.",
        },
      ],
    },
    {
      category: "Customer Verification",
      questions: [
        {
          question: "Can I be eligible to request for loan?",
          answer:
            "Client borrower must meet the following requirements: Age from 18-50 years old. Have regular income sufficient to repay the loan.",
        },
        {
          question: "What do I need to prepare for loan request?",
          answer:
            "You need to have these three: 1. Your own real Facebook account 2. Your bank account 3. Khmer National ID Card",
        },
        {
          question: "How do I allow KamChei to collect information from my phone?",
          answer:
            "Go to Settings in the App, click on KamChei, then Permissions, and enable KamChei to access all required permissions.",
        },
        {
          question: "Why do you need permissions from my phone?",
          answer:
            "KamChei will use the information in your smartphone to help process loan approval faster. Your information will be protected by our modern technology. Your information is only used for your loan request purpose. We will not call or message you without your permission.",
        },
        {
          question: "How do I trust KamChei for collecting my personal information?",
          answer:
            "We use world-class technology to protect all your information. Information in your phone is 100% safe and used only for your loan processing purpose.",
        },
        {
          question: "How can I change my personal information?",
          answer:
            "You can change your personal information through the menu in the app.",
        },
      ],
    },
    {
      category: "Loan Application",
      questions: [
        {
          question: "Why was my loan application not accepted?",
          answer:
            "Our technology evaluates your loan application including your income and loan history. We only approve loans for those who have the ability to repay. Even if your loan was rejected, you can try again later.",
        },
        {
          question: "How much can I request for loan?",
          answer:
            "It depends on your creditability, but for the first loan clients can request from $50-$200 USD. You can review your eligibility on the membership page or during the loan application process. Repaying on time will help you build good credit for future loans.",
        },
        {
          question: "What is the interest rate?",
          answer:
            "It depends on your creditability. The interest rate might be higher for your first loan but can decrease for subsequent loans if you repay on time.",
        },
        {
          question: "Are there any other processing or management fees?",
          answer:
            "Yes, but they are included in the total fee together with interest. There are no hidden costs.",
        },
        {
          question: "Can I request a second loan?",
          answer:
            "You can request a second loan after you repay all outstanding amounts on time.",
        },
      ],
    },
    {
      category: "Receiving Loan",
      questions: [
        {
          question: "How long does it take to get loan approval?",
          answer:
            "For first-time clients, it can take around 2 to 3 days. For returning clients, it will take about 10 minutes.",
        },
        {
          question: "I have not yet received the loan?",
          answer:
            "We sincerely apologize for the delay. Please contact our customer service center if you wait more than 3 days.",
        },
        {
          question: "How can I receive and repay the loan?",
          answer:
            "You can receive the loan through your Wing Account. To use our service, you must have a Wing Account.",
        },
        {
          question: "Can I get a loan on weekends?",
          answer: "Yes, you can.",
        },
      ],
    },
    {
      category: "Repaying Loan",
      questions: [
        {
          question: "How can I repay my loan?",
          answer:
            "Please repay using the 'Repay Now' function in our app. If you have sufficient funds in your Wing Account, we will automatically deduct the amount. If not, please deposit money into your Wing Account first and then click on the Repay Now function. You are responsible for the Wing transfer service charge.",
        },
        {
          question: "Can my friend, relative, or parent repay on my behalf?",
          answer:
            "Please repay through your own Wing account with your account name. This is important because you need evidence of repaying your loan.",
        },
        {
          question: "I repaid the loan on the date but it was delayed by 1 day in KamChei's system. Is this considered late repayment?",
          answer:
            "Yes, your loan must be deposited into your KamChei Account before the due date.",
        },
        {
          question: "I repaid the loan to KamChei already but the system still shows that I haven't paid and the loan is outstanding?",
          answer:
            "We will update your loan status in the system after we verify your deposit into our account.",
        },
        {
          question: "What happens if I cannot repay?",
          answer:
            "If repayment is late by over 30 days, your name will be listed in the blacklist and you will not have a chance to request loans from us again. It will negatively affect your loan history. Repaying on time is key to building your creditworthiness.",
        },
        {
          question: "What if I repay more than the required amount?",
          answer:
            "No worries! You can repay the specific amount through our convenient app. Simply deposit money in your Wing account and repay through our app.",
        },
        {
          question: "What if I repay to the wrong account?",
          answer: "Please contact our team immediately.",
        },
        {
          question: "What happens if I don't repay the full amount?",
          answer:
            "KamChei's App will show you all your outstanding loan amounts that you need to repay. Please follow our instructions.",
        },
        {
          question: "Can I repay early or late?",
          answer:
            "You can repay before the due date without additional fees. Late repayment will negatively affect you. You must pay a penalty fee of 27% of the unpaid amount per month. If repayment is late by 30 days, your name will be registered in the blacklist and you won't be able to get loans from us again. We may take legal actions if necessary.",
        },
      ],
    },
  ];

  const toggleFAQ = (category: string, index: number) => {
    const uniqueId = `${category}-${index}`;
    setActiveIndex(activeIndex === uniqueId ? null : uniqueId);
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
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.category}</h3>
              {category.questions.map((faq, index) => (
                <div key={index} className="mb-4">
                  <button
                    className={`cursor-pointer min-w-full text-left p-6 rounded-lg flex justify-between items-center ${
                      activeIndex === `${category.category}-${index}`
                        ? `bg-gray-100 shadow-md transition-all`
                        : `bg-white shadow-sm hover:bg-white hover:shadow-lg ease-in-out transition-all`
                    }`}
                    onClick={() => toggleFAQ(category.category, index)}
                  >
                    <span className="font-semibold text-gray-900 flex items-center">
                      <HelpCircle
                        className={`mr-3 text-${colors.accent}`}
                        size={20}
                      />
                      {faq.question}
                    </span>
                    {activeIndex === `${category.category}-${index}` ? (
                      <ChevronUp className={`text-${colors.accent}`} size={20} />
                    ) : (
                      <ChevronDown className="text-gray-600" size={20} />
                    )}
                  </button>

                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: activeIndex === `${category.category}-${index}` ? 1 : 0,
                        height: activeIndex === `${category.category}-${index}` ? "auto" : 0,
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
            className={`cursor-pointer bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-lg font-medium transition-all shadow-md hover:shadow-lg`}
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;