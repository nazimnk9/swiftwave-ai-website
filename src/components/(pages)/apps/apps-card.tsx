"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AppsCard: FC<AppsCardProps> = ({ id, cardInfo }) => {
  const isOdd = parseInt(id) % 2 === 1;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Map app UID to PricingPage tab key
  const tabKeyMap: { [key: string]: string } = {
    "AI-Phone-Call-Recruiter": "AIPhoneCallRecruiter",
    "AI-WhatsApp-Recruiter": "AIWhatsAppRecruiter",
    "AI-SMS-Recruiter": "AISMSRecruiter",
    "AI-Client-Lead-Generation": "AIClientLeadGeneration",
    "AI-BDM-Sales-Engine": "AIBDMSalesEngine",
    "AI-Candidate-Skill-Search": "AICandidateSkillSearch",
    "AI-Verify-Documents": "AIVerifyDocuments",
    "AI-CV-Formatter": "AICVFormatter",
    "AI-GDPR-Compliance": "AIGDPRCompliance",
    "AI-AWR-Compliance": "AIAWRCompliance",
  };

  const pricingTab = tabKeyMap[cardInfo.uid] || "AIWhatsAppRecruiter";

  return (
    <div ref={ref} className="flex flex-col p-6 md:flex-row md:gap-8">
      {isOdd ? (
        <div className="flex flex-col md:flex-row-reverse">
          <motion.div className="flex w-full flex-col justify-center p-2 md:w-2/3 md:p-6">
            <h1 className="mb-2 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-xl font-bold text-transparent [background-size:30%_100%] md:mb-4 md:text-2xl">
              {cardInfo.title}
            </h1>
            <p className="md:text-md mb-4 text-sm leading-relaxed text-text md:mb-6">
              {cardInfo.description}
            </p>
            <div className="flex w-full flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
              <Link
                href={`/apps/${cardInfo.uid}`}
                className="primary-button rounded-md px-3 py-1.5 text-center text-xs font-semibold text-black transition-colors hover:bg-primary sm:px-6 sm:py-2 sm:text-sm"
              >
                See More
              </Link>
              <Link
                href={`/pricing?tab=${pricingTab}`}
                className="rounded-md border border-primary bg-transparent px-2 py-1 text-center text-xs font-semibold text-primary transition-all hover:bg-gray-700 sm:px-4 sm:py-2"
              >
                Pricing
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              type: "spring",
              damping: 20,
            }}
            className="hidden w-1/3 items-center justify-center p-6 md:flex"
          >
            <div className="h-[400px] w-[450px]">
              <Image
                src={cardInfo.image}
                alt={cardInfo.title}
                width={450}
                height={400}
                className="h-full w-full rounded-lg object-cover shadow-lg transition-transform hover:scale-105"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row">
          <motion.div className="flex w-full flex-col justify-center p-2 md:w-2/3 md:p-6">
            <h1 className="mb-2 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-xl font-bold text-transparent [background-size:60%_100%] md:mb-4 md:text-2xl">
              {cardInfo.title}
            </h1>
            <p className="md:text-md mb-4 text-sm leading-relaxed text-text md:mb-6">
              {cardInfo.description}
            </p>
            <div className="flex w-full flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
              <Link
                href={`/apps/${cardInfo.uid}`}
                className="primary-button rounded-md px-3 py-1.5 text-center text-xs font-semibold text-black transition-colors hover:bg-primary sm:px-6 sm:py-2 sm:text-sm"
              >
                See More
              </Link>
              <Link
                href={`/pricing?tab=${pricingTab}`}
                className="rounded-md border border-primary bg-transparent px-2 py-1 text-center text-xs font-semibold text-primary transition-all hover:bg-gray-700 sm:px-4 sm:py-2"
              >
                Pricing
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              type: "spring",
              damping: 20,
            }}
            className="hidden w-1/3 items-center justify-center p-6 md:flex"
          >
            <div className="h-[400px] w-[450px]">
              <Image
                src={cardInfo.image}
                alt={cardInfo.title}
                width={450}
                height={400}
                className="h-full w-full rounded-lg object-cover shadow-lg transition-transform hover:scale-105"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

interface CardInfo {
  id: string;
  uid: string;
  title: string;
  description: string;
  image: string;
}

interface AppsCardProps {
  id: string;
  cardInfo: CardInfo;
}

export default AppsCard;
