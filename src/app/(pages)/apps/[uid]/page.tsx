"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { appData } from "@/components/data/app-data";

export default function AppDetailsPage() {
  const { uid } = useParams<{ uid: string }>();
  const router = useRouter();
  const data = appData.find((item) => item.uid === uid) as AppDataItem;

  if (!data) {
    return (
      <div className="w-full px-1 py-4 text-center text-text lg:px-12">
        App not found
      </div>
    );
  }

  // Map UID to tab key for PricingPage
  const tabKeyMap: { [key: string]: string } = {
    "AI-WhatsApp-Recruiter": "AIWhatsAppRecruiter",
    "AI-AWR-Compliance": "AIAWRCompliance",
    "AI-GDPR-Compliance": "AIGDPRCompliance",
    "AI-Phone-Call-Recruiter": "AIPhoneCallRecruiter",
    "AI-CV-Formatter": "AICVFormatter",
  };

  const handlePricingClick = () => {
    const tabKey = tabKeyMap[uid];
    if (tabKey) {
      router.push(`/pricing?tab=${tabKey}`);
    } else {
      router.push("/pricing");
    }
  };

  return (
    <div className="min-h-screen w-full px-1 py-4 text-text lg:px-12">
      {/* Hero */}
      <section className="flex flex-row items-center justify-between gap-4 bg-background px-2 py-6 text-text sm:gap-8 sm:px-8">
        <div className="w-1/2 sm:w-2/3">
          <span className="mb-2 inline-block rounded bg-[#d3b265] px-2 py-1 text-xs font-semibold text-gray-800 sm:mb-3 sm:px-3 sm:text-sm">
            {data.hero.badge}
          </span>
          <h1 className="mb-2 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-base font-bold text-transparent sm:mb-4 sm:text-xl md:text-3xl lg:text-5xl">
            <span className="block">
              {data.hero.title}
              <span className="sm:hidden">
                <br />
              </span>
            </span>
            <span className="block">{data.hero.highlight}</span>
          </h1>
          <p className="mb-3 text-xs leading-relaxed opacity-80 sm:mb-6 sm:text-sm md:text-base lg:text-lg">
            {data.hero.description}
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
            {data.hero.buttons.map((btn, i) => (
              <a
                key={i}
                href={btn.href}
                onClick={
                  btn.label === "Check Pricing"
                    ? (e) => {
                        e.preventDefault();
                        handlePricingClick();
                      }
                    : undefined
                }
                className={`${
                  btn.variant === "primary"
                    ? "primary-button hover:primary-button/80"
                    : "border border-primary text-primary hover:bg-gray-700"
                } min-w-[80px] rounded-md px-2 py-1 text-center text-xs font-semibold text-black sm:min-w-[120px] sm:px-4 sm:py-2 sm:text-base`}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
        <div className="w-1/2 sm:w-1/3">
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-md sm:aspect-[5/5]">
            <Image
              src={data.hero.carouselImages[0].src}
              alt={data.hero.carouselImages[0].alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 50vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="how-it-works" className="overflow-hidden py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-bold uppercase tracking-wide text-cyan-300">
              {data.steps.headingBadge}
            </span>
            <h2 className="mt-2 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-3xl font-extrabold text-transparent lg:text-4xl">
              {data.steps.headingTitle}
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {data.steps.items.map((step, i) => (
              <motion.div
                key={i}
                className="rounded-xl bg-primary/10 p-6 transition-all duration-300 hover:bg-primary/20"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-text">
                  {step.number}
                </div>
                <h5 className="mb-2 font-bold">{step.title}</h5>
                <p className="opacity-80">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto space-y-20 px-6">
          {data.features.map((feature, i) => (
            <div
              key={i}
              className="mx-auto flex max-w-2xl flex-col items-center text-center"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                <span className="font-bold text-cyan-300">{feature.icon}</span>
              </div>
              <h3 className="mb-4 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-2xl font-bold text-transparent">
                {feature.title}
              </h3>
              <p className="opacity-80">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-bold uppercase tracking-wide text-cyan-300">
              {data.whatYouGet.title}
            </span>
            <h2 className="animate-gradient mt-2 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-3xl font-extrabold text-transparent [background-size:200%] lg:text-4xl">
              {data.whatYouGet.subtitle}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {data.whatYouGet.items.map((item, i) => (
              <div
                key={i}
                className="h-full rounded-xl bg-primary/10 p-6 transition-all duration-300 hover:bg-primary/20"
              >
                <h5 className="mb-2 font-bold">{item.title}</h5>
                <p className="opacity-80">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="pricing" className="py-16">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl bg-primary/30 p-10 text-center text-text shadow-xl">
            <h3 className="mb-4 text-2xl font-bold lg:text-3xl">
              {data.cta.title}
            </h3>
            <p className="mb-6 opacity-80">{data.cta.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {data.cta.buttons.map((btn, i) => (
                <a
                  key={i}
                  href={btn.href}
                  onClick={
                    btn.label === "View Pricing"
                      ? (e) => {
                          e.preventDefault();
                          handlePricingClick();
                        }
                      : undefined
                  }
                  className={`rounded-lg px-4 py-2 font-medium transition-all duration-300 ${
                    btn.variant === "primary"
                      ? "primary-button text-black hover:bg-opacity-90"
                      : "border border-primary text-primary hover:bg-gray-700 hover:text-primary"
                  }`}
                >
                  {btn.label}
                </a>
              ))}
            </div>
            <small className="mt-4 block opacity-80">
              {data.cta.footerText}{" "}
              <Link
                href={data.cta.footerLink.href}
                className="text-[#d3b265] hover:underline"
              >
                {data.cta.footerLink.label}
              </Link>
            </small>
          </div>
        </div>
      </section>
    </div>
  );
}

interface HeroButton {
  label: string;
  href: string;
  variant: "primary" | "outline";
}

interface HeroSection {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  buttons: HeroButton[];
  carouselImages: { src: string; alt: string }[];
}

interface StepItem {
  number: string;
  title: string;
  description: string;
}

interface StepsSection {
  headingBadge: string;
  headingTitle: string;
  items: StepItem[];
}

interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
  image: string;
}

interface WhatYouGetItem {
  title: string;
  description: string;
}

interface CTAButton {
  label: string;
  href: string;
  variant: "primary" | "outline";
}

interface CTASection {
  title: string;
  description: string;
  buttons: CTAButton[];
  footerText: string;
  footerLink: { label: string; href: string };
}

interface AppDataItem {
  uid: string;
  hero: HeroSection;
  steps: StepsSection;
  features: FeatureItem[];
  whatYouGet: {
    title: string;
    subtitle: string;
    items: WhatYouGetItem[];
  };
  cta: CTASection;
}
