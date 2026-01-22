"use client";
import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { footerlabels } from "@/app/api/data";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer
      className="pt-16 relative overflow-hidden"
      style={{ backgroundColor: "#e0f2ff" }}
    >
      {/* Pattern Background (SVG) */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100L100 0M-20 80L80 -20M20 120L120 20' stroke='%23a0c4ff' stroke-width='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative container text-darkmode mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-12 lg:gap-20 md:gap-6 sm:gap-12 gap-6 pb-16">
          {/* Logo + Socials */}
          <div className="lg:col-span-4 md:col-span-6 col-span-6">
            <Logo />
            <div className="flex gap-6 items-center mt-8">
              <Link
                href="https://www.facebook.com/profile.php?id=61577685464094"
                target="_blank"
                className="group"
              >
                <Icon
                  icon="fa6-brands:facebook-f"
                  width="24"
                  height="24"
                  className="text-darkmode group-hover:text-primary"
                />
              </Link>
              <Link
                href="https://www.instagram.com/runbeta.io"
                target="_blank"
                className="group"
              >
                <Icon
                  icon="fa6-brands:instagram"
                  width="24"
                  height="24"
                  className="text-darkmode group-hover:text-primary"
                />
              </Link>
              <Link
                href="https://x.com/runbetaofficial"
                target="_blank"
                className="group"
              >
                <Icon
                  icon="fa6-brands:x-twitter"
                  width="24"
                  height="24"
                  className="text-darkmode group-hover:text-primary"
                />
              </Link>
            </div>
            <span>
              <button
                onClick={() => {
                  window.open(
                    "https://www.youtube.com/@Runbeta.ioOfficial",
                    "_blank"
                  );
                }}
                className="px-10 py-3 rounded bg-blue-950 hover:bg-blue-800 text-white  mt-12"
              >
                Get Started{" "}
              </button>
            </span>

            <h3 className="text-dark text-24 font-medium sm:mt-20 mt-12">
              © 2025 | RunBeta
            </h3>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 md:col-span-3 col-span-6">
            <h4 className="text-darkmode mb-4 font-medium text-24">Links</h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className="pb-4">
                  <Link
                    href={item.href}
                    className="text-darkmode hover:text-primary text-17"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="lg:col-span-2 md:col-span-3 col-span-6">
            <h4 className="text-darkmode mb-4 font-medium text-24">
              Information
            </h4>
            <ul>
              {footerlabels.map((item, index) => (
                <li key={index} className="pb-4">
                  <Link
                    href={item.herf}
                    className="text-darkmode hover:text-primary text-17"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 md:col-span-4 col-span-6">
            <div className="ml-embedded" data-form="uBbBPW"></div>
          </div>

          {/* <div className="lg:col-span-4 md:col-span-4 col-span-6">
            <h3 className="text-darkmode text-24 font-medium">Subscribe</h3>

            <p className="text-darkmode text-opacity-60 text-18 mt-5">
              Subscribe to get the latest
              <br /> news from us
            </p>
            <div className="relative mt-6">
              <input
                type="email"
                name="mail"
                id="mail"
                placeholder="Enter Email"
                className="bg-white border border-dark_border border-opacity-60 py-4 text-darkmode rounded-lg w-full px-6"
              />
              <Icon
                icon="tabler:send"
                width="24"
                height="24"
                className="text-primary absolute right-7 bottom-4"
              />
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
