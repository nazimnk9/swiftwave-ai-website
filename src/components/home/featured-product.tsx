import Link from "next/link";

export default function FeaturedProductSection() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 sm:px-8 py-8 w-full">
      <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-10 bg-white border-2 border-[#0a0a0a] rounded-[24px] p-[32px_26px] sm:p-[44px_48px] shadow-sm text-left">
        <div className="max-w-[560px]">
          <span className="inline-block text-[12px] font-bold tracking-[0.08em] text-white bg-[#0a0a0a] px-[14px] py-[6px] rounded-full mb-4">
            FLAGSHIP PRODUCT
          </span>
          <h2 className="m-0 mb-[10px] text-[26px] sm:text-[32px] font-extrabold tracking-[-0.02em] leading-[1.15] text-[#0a0a0a]">
            CallPilot — AI Applicant Screening Calls
          </h2>
          <p className="m-0 text-[15px] sm:text-[16px] text-[#6b6b68] leading-[1.5]">
            Swiftwave&apos;s first product, built and live: AI voice calls that screen applicants in under a minute, sync straight into your ATS, and run 24/7.
          </p>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-[10px] shrink-0 w-full sm:w-auto">
          <span className="inline-flex items-center text-[12.5px] font-bold text-[#16a34a] tracking-[0.02em]">
            <span className="inline-block w-[7px] h-[7px] rounded-full bg-[#16a34a] mr-[6px]" />
            Live now
          </span>
          <a
            href="https://callpilot.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto text-center px-[28px] py-[15px] bg-[#0a0a0a] text-white no-underline rounded-[10px] text-[15px] font-bold whitespace-nowrap hover:bg-[#262624] transition-colors"
          >
            Explore CallPilot &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}
