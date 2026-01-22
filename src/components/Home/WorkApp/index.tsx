"use client";

import { perksData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import { motion } from "framer-motion";

const WorkApp = () => {
  return (
    <section id="workapp" className="pb-28 md:py-40 relative">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="text-center mb-20">
          <h2 className="text-white sm:text-40 text-30 font-medium">
            Here Is How It <span className="text-primary">Works</span>!
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Steps */}
          <div className="border border-border border-opacity-20 py-16 px-10 rounded-3xl sm:bg-perk bg-dark_grey bg-opacity-35 lg:bg-bottom bg-center bg-no-repeat">
            <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-10">
              {perksData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: index % 2 === 0 ? 60 : -60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.4 }}
                  className="text-center flex items-center justify-end flex-col"
                >
                  <div className="bg-primary bg-opacity-25 backdrop-blur-sm p-4 rounded-full w-fit">
                    <Image
                      src={`${getImagePrefix()}${item.icon}`}
                      alt={item.title}
                      width={44}
                      height={44}
                    />
                  </div>
                  <h4
                    className={`text-white text-20 font-semibold mt-4 ${item.space}`}
                  >
                    {item.title}
                  </h4>
                  <div
                    className="text-muted text-opacity-60 text-sm mt-2"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Floating image */}
          <motion.div
            // initial={{ opacity: 0, x: 80 }}
            initial={{
              opacity: 0,
              x:
                typeof window !== "undefined" && window.innerWidth < 640
                  ? 30
                  : 80,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.03 }}
              className="relative"
            >
              <Image
                src={`${getImagePrefix()}images/hero/image.png`}
                alt="RunBeta app preview"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Glow */}
        <div className="bg-gradient-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60" />
      </div>
    </section>
  );
};

export default WorkApp;
