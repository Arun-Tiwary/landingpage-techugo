"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Transition } from "framer-motion";

import { useEffect, useRef, useState, useCallback } from "react";
import { getImagePrefix } from "@/utils/utils";

const Hero = () => {
  const [isBuying, setIsBuyingOpen] = useState(false);
  const [isSelling, setIsSellingOpen] = useState(false);
  const buyRef = useRef<HTMLDivElement>(null);
  const sellRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (buyRef.current && !buyRef.current.contains(event.target as Node)) {
      setIsBuyingOpen(false);
    }
    if (sellRef.current && !sellRef.current.contains(event.target as Node)) {
      setIsSellingOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  useEffect(() => {
    document.body.style.overflow = isBuying || isSelling ? "hidden" : "";
  }, [isBuying, isSelling]);

  const floatTransition: Transition = {
    duration: 12,
    repeat: Infinity,
    repeatType: "reverse",
    ease: [0.45, 0, 0.55, 1],
  };

  const slideInUp = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="main-banner"
      className="relative pt-28 md:pt-40 md:pb-28 pb-16 overflow-hidden z-1"
      aria-label="RunBeta main hero"
    >
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <motion.div
          className="grid grid-cols-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInUp}
        >
          {/* Left: Copy & CTAs */}
          <div className="lg:col-span-5 col-span-12">
            <div className="flex gap-6 items-center lg:justify-start justify-center mb-5 mt-6">
              {/* Pulsing dot with glow */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  {/* Outer glow ring */}
                  <motion.span
                    className="absolute inset-0 w-4 h-4 rounded-full"
                    animate={{
                      scale: [1, 2.5],
                      opacity: [0.6, 0],
                      backgroundColor: ["#22c55e", "#14b8a6", "#22c55e"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Solid inner dot */}
                  <motion.span
                    className="relative inline-block w-2 h-2 rounded-full bg-success"
                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0.7, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <p className="text-white sm:text-12 text-12 mb-0">
                  Coming Soon<span className="text-success"> to Nigeria</span>
                </p>
              </div>
            </div>

            <h1 className="font-medium lg:text-50 md:text-40 text-40 lg:text-start text-center text-white mb-5">
              Africa’s leading <br />
              {/* On-Demand Services Marketplace */}
              AI-Powered, On-demand
              <br />
              services marketplace.
              <span className="text-primary">
                {/* Book in minutes */}
                <br />
                Book verified and trusted Professional.
              </span>{" "}
              <br />
              {/* Trusted professional */}
              {/* in minutes with */}
              Get instant matches
              <span className="text-primary">
                {" "}
                <br /> and enjoy transparent pricing.
              </span>
            </h1>

            <p className="text-white/80 lg:text-left text-center mb-8">
              From hair & beauty to plumbing, cleaning, and repairs—find
              verified providers, schedule in minutes, track progress, and pay
              securely.
            </p>

            <div className="flex items-center md:justify-start justify-center gap-6 mt-6">
              <Link
                href="#"
                className="hover:scale-110 duration-300"
                aria-label="Get RunBeta on Google Play"
              >
                <Image
                  src={`${getImagePrefix()}images/hero/playstore.png`}
                  alt="Get it on Google Play"
                  width={240}
                  height={70}
                />
              </Link>
              <Link
                href="#"
                className="hover:scale-110 duration-300"
                aria-label="Download RunBeta on the App Store"
              >
                <Image
                  src={`${getImagePrefix()}images/hero/applestore.png`}
                  alt="Download on the App Store"
                  width={240}
                  height={70}
                />
              </Link>
            </div>
            <div className="overflow-hidden mt-6">
              <div className="flex animate-marquee whitespace-nowrap justify-center gap-12 text-dark font-semibold text-sm sm:text-base">
                <span className="flex items-center gap-2">
                  <span className="text-primary">★</span> Trusted by Providers
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-primary">★</span> Trusted by Users
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-primary">★</span> Easy Navigations
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-primary">★</span> Easy Booking
                </span>
              </div>
            </div>
          </div>

          {/* Right: Hero image — floats, no fade/slide */}
          <div className="col-span-7 lg:block hidden">
            <motion.div
              className="relative ml-20 -mr-64 will-change-transform"
              animate={{ y: [0, -6, 0], rotate: [-0.9, 0.5, -0.9] }}
              transition={floatTransition}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <Image
                src={`${getImagePrefix()}images/hero/IMG_3984.png`}
                alt="RunBeta app preview"
                width={1000}
                height={600}
                priority
                style={{ willChange: "transform" }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Logos / Testimonials / Category slider */}
      </div>
      {/* Trusted Features Marquee */}

      {/* Soft brand glow */}
    </section>
  );
};

export default Hero;
