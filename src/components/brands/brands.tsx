"use client";

import Image from "next/image";
import React from "react";

interface Brand {
  name: string;
  logo: string;
  alt: string;
}

const brands: Brand[] = [
  {
    name: "ATS & CRM",
    logo: "/brands/jobadder.png",
    alt: "JobAdder logo",
  },
  {
    name: "OpenAI",
    logo: "/brands/openai.png", 
    alt: "OpenAI logo",
  },
  {
    name: "Twilio",
    logo: "/brands/twilio.png",
    alt: "Twilio logo",
  },
  {
    name: "SendGrid",
    logo: "/brands/sendgrid.png",
    alt: "SendGrid logo",
  },
  {
    name: "Deepgram",
    logo: "/brands/Deepgram.png",
    alt: "Deepgram logo",
  },
  {
    name: "ElevenLabs",
    logo: "/brands/elevenlabs.png",
    alt: "ElevenLabs logo",
  },
  {
    name: "WhatsApp Business API",
    logo: "/brands/whatsapp.png",
    alt: "WhatsApp logo",
  },
  {
    name: "Meta",
    logo: "/brands/meta.png",
    alt: "Meta logo",
  },
];

export default function BrandShow() {
  return (
    <main className="my-4 rounded-md bg-background px-3 py-8 sm:my-6 sm:px-4 sm:py-10 md:my-8 md:px-8 md:py-12 lg:my-16 lg:px-16">
      <div className="mb-6 text-center">
        <div className="eyebrow">Automation powered by</div>
        <h1 className="mt-2 bg-gradient-to-r from-[#ffe185] via-[#9e7f29] to-[#ffe185] bg-clip-text text-2xl font-semibold text-transparent [background-size:50%] md:text-3xl">
          Our Core Platforms and Partners
        </h1>
      </div>

      <div className="brand-wrap p-2">
        <div className="flex w-[200%]">
          {/* Track A */}
          <div className="brand-marquee">
            {brands.map((b, i) => (
              <div key={i} className="brand-tile" aria-label={b.name}>
                <Image
                  className="brand-logo"
                  src={b.logo}
                  alt={b.alt}
                  width={120}
                  height={44}
                />
                <div className="brand-name">{b.name}</div>
              </div>
            ))}
          </div>

          {/* Track B (duplicate for seamless loop) */}
          <div className="brand-marquee">
            {brands.map((b, i) => (
              <div key={`dup-${i}`} className="brand-tile" aria-label={b.name}>
                <Image
                  className="brand-logo"
                  src={b.logo}
                  alt={b.alt}
                  width={120}
                  height={44}
                />
                <div className="brand-name">{b.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mb-0 mt-3 text-center text-sm text-text">
        Logos are for identification only. All trademarks belong to their
        respective owners.
      </p>
    </main>
  );
}
