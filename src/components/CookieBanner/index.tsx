"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { motion } from "framer-motion";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 }); // 1 year
    setVisible(false);
  };

  const declineCookies = () => {
    Cookies.set("cookieConsent", "false", { expires: 365 });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 w-full bg-black/80 text-white p-4 md:p-6 z-50"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm md:text-base text-center md:text-left">
          We use cookies to improve your experience on RunBeta. By continuing, you
          agree to our use of cookies.
        </p>
        <div className="flex gap-3">
          <button
            onClick={acceptCookies}
            className="bg-primary px-5 py-2 rounded-lg text-white font-semibold hover:bg-primary/90 transition"
          >
            Accept
          </button>
          <button
            onClick={declineCookies}
            className="bg-gray-600 px-5 py-2 rounded-lg text-white font-semibold hover:bg-gray-500 transition"
          >
            Decline
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieBanner;
