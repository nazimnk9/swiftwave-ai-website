"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AIModulesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative my-32 overflow-hidden rounded-md px-3 py-8 sm:my-6 sm:px-4 sm:py-10 md:my-8 md:px-8 md:py-12 lg:my-16 lg:px-16"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/AI_Video.mov" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-6 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-center text-4xl font-bold text-transparent sm:mb-8 md:mb-10"
        >
          AI Modules: Revolutionize Your Recruitment & HR
        </motion.h2>

        {/* Text Section */}
        <div className="flex flex-col items-center space-y-8 md:space-y-10">
          <div className="space-y-8">
            <p className="max-w-3xl text-center text-base leading-relaxed text-text sm:text-lg">
              Transform your recruitment and HR operations with our
              comprehensive suite of AI-powered modules. Seamlessly integrate
              with your existing systems while delivering measurable results.
            </p>

            <div>
              <h3 className="mb-6 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-center text-2xl font-semibold text-transparent">
                Core AI Capabilities
              </h3>
              <ul className="max-w-2xl space-y-1 text-left text-base text-text sm:text-lg">
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  <span>
                    <strong>24/7 AI Capture</strong>{" "}
                    <span className="text-base">
                      - ID, certificates & CV auto-formatted with your logo.
                    </span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  <span>
                    <strong>AI Checks</strong>{" "}
                    <span className="text-base">
                      - Built-in verification of qualifications, Right to Work &
                      availability, then books calls.
                    </span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  <span>
                    <strong>CRM Status</strong>{" "}
                    <span className="text-base">
                      - Automatically updates from AI WhatsApp & SMS Recruiter and AI Call.
                    </span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  <span>
                    <strong>Smart Integration</strong>{" "}
                    <span className="text-base">
                      - Live with JobAdder, API-ready for seamless integration
                      into your CRM.
                    </span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  <span>
                    <strong>100% Compliance</strong>{" "}
                    <span className="text-base">
                      - GDPR & AWR Built-In Option.
                    </span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  <span>
                    <strong>Faster Placements</strong>{" "}
                    <span className="text-base">
                      - 50% less admin, quicker submissions & huge cost savings.
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-center text-2xl font-semibold text-transparent">
                Integration & Compatibility
              </h3>
              <p className="max-w-3xl text-center text-base leading-relaxed text-text sm:text-lg">
                Swiftwave.AI is already live with JobAdder. Future development can be
                delivered to client requirements, enabling seamless API
                integration with leading CRMs, recruitment and HR software
                systems.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="primary-button w-full rounded-md px-4 py-2 text-base font-medium text-black transition-colors hover:bg-primary sm:w-auto">
              Start Free Trial
            </button>
            <button className="w-full rounded-md border border-primary px-4 py-2 text-base font-medium text-primary transition-colors hover:bg-gray-700 sm:w-auto">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIModulesSection;
