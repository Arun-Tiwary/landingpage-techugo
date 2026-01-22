"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getImagePrefix } from "@/utils/utils";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative w-full py-20 md:py-32 bg-transparent overflow-hidden"
    >
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image (Centered) */}
          <div className="flex items-center justify-center">
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative w-full max-w-md h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src={`${getImagePrefix()}images/timeline/image.png`} // <-- Replace with your image path
                alt="About RunBeta"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
            </motion.div>
          </div>

          {/* Right: Text */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-white mb-6">
              About <span className="text-primary">Us</span>
            </h2>
            <p className="text-white/80 leading-relaxed mb-6 text-lg">
              {/* RunBeta empowers businesses and service providers across Africa
              with smart technology and seamless experiences. From on-demand
              home services to digital tools that fuel growth, we connect people
              to trusted solutions—anytime, anywhere. */}
              RunBeta makes finding trusted professionals simple, fast, and
              reliable. Powered by Artificial Intelligence, we instantly connect
              you with verified experts from on-demand home services to digital
              solutions that fuel your business growth.
            </p>
            <div className="text-white/80 leading-relaxed text-lg ">
              {/* With verified experts, real-time tracking, and transparent
              pricing, we ensure every booking is fast, reliable, and
              stress-free. */}
              Why Choose Us:
              <div className="flex flex-col">
                <span>
                  {" "}
                  ∙ Smart Matching – Our AI connects you with the perfect
                  professional for your needs in seconds.
                </span>
                <span>
                  {" "}
                  ∙ Verified Experts – Every service provider is thoroughly
                  vetted and background-checked.
                </span>
                <span>
                  ∙ Transparent Costs – See exact prices before you book, with
                  no hidden fees.{" "}
                </span>
                <span>
                  {" "}
                  ∙ Instant Booking – Schedule services on your timeline,
                  whenever you need them.
                </span>
                <span>∙ 24X7 Online support.</span>
              </div>
              <br />
              Whether you need a plumber, electrician, cleaner, or any
              professional service, we make it simple to find trusted help
              across Africa.
              <br />
              <span className="font-semibold text-primary">
                Your home, your time, your comfort — our responsibility.
                {/* Your home, your time, your comfort — our responsibility. */}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
