"use client";

import React, { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (formData.phone && !/^\+?[\d\s-]{7,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number or leave it blank.";
    }
    if (!formData.reason) newErrors.reason = "Please select a reason.";
    if (!formData.message.trim())
      newErrors.message = "Please enter your message.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", reason: "", message: "" });
      setErrors({});
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  if (submitted) {
    return (
      <div className="mx-auto my-2 w-full max-w-4xl rounded-lg p-4 text-center shadow-md sm:p-6">
        <h2 className="mb-4 text-lg font-semibold text-gray-800 sm:text-xl">
          Thanks! Your message has been sent.
        </h2>
        <button
          className="rounded bg-primary px-3 py-2 text-sm text-text hover:bg-primary/90 sm:px-4 sm:text-base"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full items-start justify-center px-2 py-4 sm:px-4 sm:py-6 md:py-8 lg:py-12">
      <div className="w-full max-w-5xl space-y-6 sm:space-y-8">
        <div className="px-2 sm:px-0">
          <span className="mb-3 inline-block rounded bg-[#d3b265] px-2 py-1 text-xs font-semibold text-gray-800 sm:mb-4 sm:px-3 sm:text-sm">
            Contact
          </span>
          <h2 className="bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-2xl font-bold text-transparent [background-size:30%_100%] sm:text-3xl md:text-4xl">
            Contact Us
          </h2>
          <p className="mt-2 text-sm text-text sm:text-base">
            Questions, demo requests, or enterprise enquiries—drop us a line and
            we&apos;ll get back to you.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 px-2 md:grid-cols-2 md:gap-8 md:px-0">
          <div className="rounded-lg p-4 shadow-md shadow-primary sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-primary sm:text-sm"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-primary bg-background p-2 text-sm text-white focus:border-[#ffe185] focus:ring-[#ffe185] sm:text-base"
                  style={{
                    WebkitBoxShadow: "0 0 0 1000px var(--background) inset",
                    WebkitTextFillColor: "white",
                  }}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500 sm:text-sm">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-primary sm:text-sm"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-primary bg-background p-2 text-sm text-white focus:border-[#ffe185] focus:ring-[#ffe185] sm:text-base"
                  style={{
                    WebkitBoxShadow: "0 0 0 1000px var(--background) inset",
                    WebkitTextFillColor: "white",
                  }}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500 sm:text-sm">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-medium text-primary sm:text-sm"
                >
                  Phone number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-primary bg-background p-2 text-sm text-white focus:border-[#ffe185] focus:ring-[#ffe185] sm:text-base"
                  style={{
                    WebkitBoxShadow: "0 0 0 1000px var(--background) inset",
                    WebkitTextFillColor: "white",
                  }}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500 sm:text-sm">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="reason"
                  className="block text-xs font-medium text-primary sm:text-sm"
                >
                  Reason for contact *
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-primary bg-background p-2 text-sm text-white focus:border-[#ffe185] focus:ring-[#ffe185] sm:text-base"
                >
                  <option value="">Choose one...</option>
                  <option value="Demo of Apps">Demo of Apps</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Query about Enterprise Package">
                    Query about Enterprise Package
                  </option>
                </select>
                {errors.reason && (
                  <p className="mt-1 text-xs text-red-500 sm:text-sm">
                    {errors.reason}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-primary sm:text-sm"
                >
                  Message content *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-primary bg-background p-2 text-sm text-white focus:border-[#ffe185] focus:ring-[#ffe185] sm:text-base"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500 sm:text-sm">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="primary-button w-full rounded px-3 py-2 text-sm text-black hover:bg-primary/90 sm:px-4 sm:py-2 sm:text-base"
              >
                Send message
              </button>
              <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                We typically reply within 1 business day.
              </p>
            </form>
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-lg p-4 shadow-md shadow-primary sm:min-h-[400px] sm:p-6">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            >
              <source src="/contact_us.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10">
              <h3 className="mb-3 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-base font-semibold text-transparent sm:mb-4 sm:text-lg">
                Other ways to reach us
              </h3>
              <p className="mb-2 text-sm text-text sm:text-base">
                <strong>Email:</strong> support@ai-rd1.com
              </p>
              <p className="mb-2 text-sm text-text sm:text-base">
                <strong>Sales:</strong> sales@ai-rd1.com
              </p>
              <p className="mb-2 text-sm text-text sm:text-base">
                <strong>Office:</strong> London, UK
              </p>
              <p className="text-xs text-gray-500 sm:text-sm">
                By submitting this form you agree we may contact you about your
                enquiry. For details, read our{" "}
                <span className="text-primary hover:underline">
                  Privacy Policy
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px var(--background) inset !important;
          -webkit-text-fill-color: white !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
