"use client";

import { useState } from "react";

const SubscribeForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage("🎉 You’ve been subscribed!");
        setFormData({ name: "", email: "" });
      } else {
        const data = await res.json();
        setMessage(`⚠️ ${data.error?.message || "Subscription failed"}`);
      }
    } catch {
      setMessage("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-md p-6 rounded-xl space-y-4 w-full max-w-md mx-auto"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 rounded-lg border border-gray-300 bg-transparent text-white focus:ring-2 focus:ring-primary"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-3 rounded-lg border border-gray-300 bg-transparent text-white focus:ring-2 focus:ring-primary"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition"
      >
        {loading ? "Submitting..." : "Subscribe"}
      </button>

      {message && <p className="text-center text-sm mt-2">{message}</p>}
    </form>
  );
};

export default SubscribeForm;
