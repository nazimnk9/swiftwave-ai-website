"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TechnicalRequirementsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="my-8 rounded-md bg-background px-4 py-12 md:px-8 lg:my-16 lg:px-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-10 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-4xl font-bold text-transparent [background-size:30%_100%]"
      >
        Technical Requirements & Costs
      </motion.h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <div>
            <h3 className="mb-4 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-xl font-semibold text-transparent [background-size:30%_100%]">
              API Integration
            </h3>
            <p className="mb-4 text-text">
              Our solution connects directly to your existing CRM software
              through secure API access.
            </p>
            <p className="text-text">
              We provide comprehensive documentation and support for quick
              setup.
            </p>
          </div>
          <div>
            <h3 className="my-4 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-xl font-semibold text-transparent [background-size:30%_100%]">
              Additional Service Costs
            </h3>
            <ul className="list-inside list-disc text-text">
              <li>
                WhatsApp Business API fees apply for chatbot functionality
              </li>
              <li>Voice call minutes charged by telephony providers</li>
              <li>OpenAI usage fees for AI processing capabilities</li>
            </ul>
            <p className="pt-8 text-text">
              These third-party costs are billed separately based on your usage
              levels.
            </p>
          </div>
        </div>
        <motion.div
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          className="mt-0"
        >
          <Image
            src="/API_integration_diagram_with_connections.png"
            alt="System and API Integration Diagram"
            width={500}
            height={300}
            className="h-auto w-full rounded-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalRequirementsSection;
