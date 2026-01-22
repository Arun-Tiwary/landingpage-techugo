"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const initialFormData = {
  name: "",
  email: "",
  phone_no: "",
  description: "",
};

const ContactSection = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("https://dev.runbeta.io:2025/support/v1/promotional/contact-us", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Form Submitted Successfully!");
        // console.log("API response:", data);
        setIsFormSubmitted(true);
        setFormData(initialFormData);
      })
      .catch((err) => {
        // console.error("API error:", err);
        toast.error("Something went wrong!");
      });
  };

  return (
    <section
      className="w-full py-24 md:py-40 bg-gradient-to-br from-[#0a1e3a] via-[#0f2e57] to-[#13386e] text-white"
      id="contact"
    >
      <Toaster />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Left Side */}
          <motion.div
            className="p-8 flex flex-col justify-center"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-3">
              Contact <span className="text-primary">Us</span>
            </h2>
            <p className="text-lg text-primary mb-6 font-montserrat">
              Got questions or feedback?
              <br />
              We’d love to hear from you!
            </p>
            <div className="rounded-xl overflow-hidden w-full h-72 relative shadow-lg">
              <Image
                src="/images/upgrade/contact-photo.png" // Replace with actual image
                alt="Contact Support"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="p-8"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Email Info */}
            <div className="flex items-center gap-2 text-sm text-blue-400 mb-6">
              <Mail size={18} />
              <span className="font-medium uppercase tracking-wide">Email</span>
              :
              <a href="mailto:support@runbeta.io" className="underline">
                contact@runbeta.io
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 rounded-md bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 rounded-md bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone_no"
                  required
                  value={formData.phone_no}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 rounded-md bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Write Us</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full mt-1 p-3 rounded-md bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 text-white font-semibold bg-primary hover:bg-primary/90 rounded-md transition"
              >
                {isFormSubmitted ? "Sent" : "SEND"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
