"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const cardsData = [
  {
    angle: 0,
    uid: "AI-WhatsApp-Recruiter",
    title: "AI WhatsApp Recruiter",
    desc: "Instant Interview on Job Applicants over WhatsApp",
  },
  {
    angle: 72,
    uid: "AI-Phone-Call-Recruiter",
    title: "AI Phone Call Recruiter",
    desc: "Instant Interview on Job Applicants over Phone call",
  },
  {
    angle: 144,
    uid: "AI-CV-Formatter",
    title: "AI CV Formatter",
    desc: "Instant CV Formatting of Applicants or Candidates",
  },
  {
    angle: 216,
    uid: "AI-GDPR-Compliance",
    title: "AI GDPR Compliance",
    desc: "Auto-contacts your database, updates CRM 24/7, 100% compliant.",
  },
  {
    angle: 288,
    uid: "AI-AWR-Compliance",
    title: "AWR Compliance",
    desc: "Auto-contacts clients, ensures pay parity, updates CRM 24/7",
  },
];

export default function OrbitShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalTitleRef = useRef<HTMLHeadingElement>(null);
  const modalDescRef = useRef<HTMLParagraphElement>(null);
  const [selectedCard, setSelectedCard] = useState<string>("");

  useEffect(() => {
    let angleOffset = 0;
    const animateOrbit = () => {
      if (!centerRef.current || !svgRef.current || !containerRef.current)
        return;

      const containerRect = containerRef.current.getBoundingClientRect();

      // Calculate radius based on container width
      let maxRadius = Math.min(containerRect.width, containerRect.height) / 2.5;

      // Reduce radius more aggressively on small screens
      if (window.innerWidth < 640) {
        // Tailwind's 'sm' breakpoint
        maxRadius *= 0.75;
      } else if (window.innerWidth < 768) {
        // 'md' breakpoint
        maxRadius *= 0.85;
      }

      const radius = Math.min(200, maxRadius);

      const cx = containerRect.width / 2;
      const cy = containerRect.height / 2;

      svgRef.current.innerHTML = "";
      const cardEls =
        containerRef.current.querySelectorAll<HTMLDivElement>(".orbit-card");

      cardEls?.forEach((card) => {
        const baseAngle = parseFloat(card.dataset.angle || "0");
        const angle = (baseAngle + angleOffset) % 360;
        const rad = (angle * Math.PI) / 180;

        const x = cx + radius * Math.cos(rad) - card.offsetWidth / 2;
        const y = cy + radius * Math.sin(rad) - card.offsetHeight / 2;

        card.style.left = `${x}px`;
        card.style.top = `${y}px`;

        const cardX = x + card.offsetWidth / 2;
        const cardY = y + card.offsetHeight / 2;

        const line = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line",
        );
        line.setAttribute("x1", `${cx}`);
        line.setAttribute("y1", `${cy}`);
        line.setAttribute("x2", `${cardX}`);
        line.setAttribute("y2", `${cardY}`);
        svgRef.current?.appendChild(line);
      });

      angleOffset += 0.12;
      requestAnimationFrame(animateOrbit);
    };

    animateOrbit();
    window.addEventListener("resize", animateOrbit);
    return () => {
      window.removeEventListener("resize", animateOrbit);
    };
  }, []);

  const openModal = (title: string, desc: string, uid: string) => {
    if (modalTitleRef.current) modalTitleRef.current.textContent = title;
    if (modalDescRef.current) modalDescRef.current.textContent = desc;
    if (modalRef.current) modalRef.current.style.display = "flex";
    setSelectedCard(uid);
  };

  const closeModal = () => {
    if (modalRef.current) modalRef.current.style.display = "none";
  };

  return (
    <>
      <div
        ref={containerRef}
        className="relative h-[450px] w-full overflow-hidden text-text md:h-[620px]"
      >
        <svg
          ref={svgRef}
          className="pointer-events-none absolute inset-0 h-full w-full"
        ></svg>

        {/* Center image */}
        <div
          ref={centerRef}
          className="absolute left-1/2 top-1/2 h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cover bg-right-top shadow-[0_0_20px_#00bfff] sm:h-[80px] sm:w-[80px] md:h-[120px] md:w-[120px]"
          style={{ backgroundImage: "url('/hero/hero_edit.png')" }} // /hero/hero1.png
        ></div>
        {/* Glow ring */}
        <div className="glow-ring"></div>
        {/* Cards */}
        {cardsData.map((card, idx) => (
          <div
            key={idx}
            data-angle={card.angle}
            className="orbit-card animate-float absolute min-h-[60px] w-[100px] cursor-pointer rounded-xl border border-[#00bfff] bg-black/70 p-1.5 shadow-[0_0_20px_rgba(0,191,255,0.35)] sm:min-h-[80px] sm:w-[140px] sm:p-2 md:min-h-[100px] md:w-[180px] md:p-3"
            onClick={() => openModal(card.title, card.desc, card.uid)}
          >
            <div className="mb-0.5 text-[11px] font-semibold leading-tight tracking-[0.2px] text-[#d3b265] sm:mb-1 sm:text-[13px] md:text-[15px]">
              {card.title}
            </div>
            <div className="text-[9px] leading-snug text-text/90 sm:text-[11px] md:text-[13px]">
              {card.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <div
        ref={modalRef}
        className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/90 p-2 sm:p-3 md:p-5"
        onClick={(e) => e.target === modalRef.current && closeModal()}
      >
        <div className="animate-fadeIn w-full max-w-[500px] rounded-xl border border-[#00bfff] bg-[#101215] p-3 text-text shadow-[0_0_8px_#00bfff] sm:p-4 md:p-6">
          <h2
            ref={modalTitleRef}
            className="mb-1.5 text-sm font-bold text-[#d3b265] sm:mb-2 sm:text-base md:text-lg"
          ></h2>
          <p
            ref={modalDescRef}
            className="mb-3 text-xs leading-relaxed opacity-95 sm:mb-4 sm:text-sm md:text-base"
          ></p>
          <div className="flex justify-end gap-2">
            <button
              className="rounded-md border border-[#3a424b] bg-[#2a2f36] px-2 py-1 text-xs font-semibold text-text sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:py-2 md:text-base"
              onClick={closeModal}
            >
              Close
            </button>
            <Link
              href={`/apps/${selectedCard}`}
              className="primary-button rounded-md px-2 py-1 text-xs font-semibold text-black shadow-[0_0_10px_#d3b265] sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:py-2 md:text-base"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
