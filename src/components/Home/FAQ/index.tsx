"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs: { q: string; a: string }[] = [
  {
    q: "Is RunBeta available on both iOS and Android?",
    a: "Yes. You can download from the Apple App Store and Google Play Store using the buttons above.",
  },
  {
    q: "Are providers verified?",
    a: "Yes. We perform ID checks and require documentation before a provider can accept jobs.",
  },
  {
    q: "How do payments work?",
    a: "You add a card and pay in-app. Funds are released to the provider after the job is completed.",
  },
  {
    q: "Where is RunBeta available?",
    a: "We’re rolling out across major Nigerian cities, starting with Lagos and Abuja.",
  },
  {
    q: "How do I book a service?",
    a: "You can book any service through our app by selecting your required service, choosing a convenient date and time, and confirming the booking.",
  },
  {
    q: "Can I reschedule or cancel a booking?",
    a: "Yes, you can reschedule or cancel through the app up to 24 hours before the service time.",
  },
  {
    q: "How is pricing calculated?",
    a: "Pricing is based on the service category and scope of work. All prices are transparent and shown upfront before booking.",
  },
  {
    q: "What if I’m not satisfied with the service?",
    a: "You can report issues via the app. We’ll mediate and resolve complaints promptly.",
  },
  {
    q: "Can I track my service provider in real time?",
    a: "Yes. You’ll see real-time updates and GPS tracking once the job is assigned and started.",
  },
  {
    q: "What safety measures do you follow?",
    a: "We conduct background checks, verify documents, and encourage reviews to ensure service quality and safety.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split FAQs into two columns
  const middle = Math.ceil(faqs.length / 2);
  const leftFAQs = faqs.slice(0, middle);
  const rightFAQs = faqs.slice(middle);

  return (
    <section className="md:pt-48 sm:pt-28 pt-12 pb-8" id="faq">
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6">
        {/* FAQ Title Block */}
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: "-20%", opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white sm:text-40 text-30 font-medium font-montserrat">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted text-opacity-70 text-18 font-montserrat mt-2">
            Everything you need to know about using RunBeta.
            <br className="md:block hidden" />
            Can't find your answer? Contact our team.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {[leftFAQs, rightFAQs].map((column, colIndex) => (
            <div key={colIndex} className="space-y-6">
              {column.map((faq, index) => {
                const actualIndex = colIndex === 0 ? index : index + middle;
                return (
                  <motion.div
                    key={actualIndex}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-xl border border-blue-400 bg-white/5 backdrop-blur-md p-5"
                  >
                    <button
                      className="w-full flex justify-between items-center text-left"
                      onClick={() => toggleFAQ(actualIndex)}
                    >
                      <span className="text-white text-lg font-semibold font-montserrat">
                        {faq.q}
                      </span>
                      <span className="text-primary text-2xl font-bold">
                        {openIndex === actualIndex ? "−" : "+"}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {openIndex === actualIndex && (
                        <motion.p
                          key="answer"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 text-white text-sm font-montserrat"
                        >
                          {faq.a}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
