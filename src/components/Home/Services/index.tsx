"use client";

import Image from "next/image";
import { services } from "@/app/api/data";
import { motion } from "framer-motion";

const ServiceScroll = () => {
  const half = Math.ceil(services.length / 2);
  const leftColumn = services.slice(0, half);
  const rightColumn = services.slice(half);

  return (
    <section
      id="services"
      className="w-full md:py-40 py-20 bg-transparent relative overflow-hidden"
    >
      {/* Headline Section */}
      <div className="text-center mb-12 relative z-10">
        <div className="inline-block px-6 py-4 rounded-xl bg-blue-900/30 backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white">
            Services Offered
          </h2>
          <p className="mt-2 text-lg text-primary font-montserrat">
            What do you need help with?
          </p>
        </div>
      </div>

      <div className="relative flex flex-col lg:flex-row gap-10 justify-center z-0 px-4">
        {/* Left Column (Slide In from Left) */}
        <motion.div
          className="w-full max-w-md space-y-6"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {leftColumn.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center gap-4 border border-blue-400 bg-transparent p-6 rounded-2xl shadow-xl"
            >
              <div className="w-24 h-24 relative rounded-full overflow-hidden border-4 border-blue-300">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white font-montserrat">
                {service.title}
              </h3>
              <p className="text-base text-white font-montserrat">
                {service.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Right Column (Slide In from Right) */}
        <motion.div
          className="w-full max-w-md space-y-6"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {rightColumn.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center gap-4 border border-blue-400 bg-transparent p-6 rounded-2xl shadow-xl"
            >
              <div className="w-24 h-24 relative rounded-full overflow-hidden border-4 border-blue-300">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white font-montserrat">
                {service.title}
              </h3>
              <p className="text-base text-white font-montserrat">
                {service.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceScroll;
