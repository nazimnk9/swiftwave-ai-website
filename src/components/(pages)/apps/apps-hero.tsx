import { FC } from "react";
const AppsHero: FC = () => {
  return (
    <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden rounded-md sm:min-h-[70vh]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute left-0 top-0 h-full w-full object-cover"
      >
        <source src="/app_1.mp4" type="video/mp4" />
      </video>

      {/* Overlay to make text more readable */}
      <div className="absolute left-0 top-0 h-full w-full bg-black/50"></div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-2 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-2xl font-bold text-transparent sm:mb-4 md:text-3xl lg:text-5xl">
          <span className="sm:hidden">
            Start the automation process on your Business CRM today
          </span>
          <span className="hidden sm:block">Start the</span>
          <span className="hidden sm:block">automation process</span>
          <span className="hidden sm:block">
            on your Business CRM today
          </span>
        </h1>

        <p className="mb-3 text-sm leading-relaxed text-text sm:mb-6 md:text-base lg:text-lg">
          While other businesses tell you unsure things, we offer you tested
          automations which will help you control your Business CRM from
          bed. From the Live job application process, to GDPR-AWR documents, you
          let the major operations in your Business CRM be done by our AI apps.
        </p>

        <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <button className="primary-button hover:primary-button/80 min-w-[80px] rounded-md px-3 py-2 text-xs font-semibold text-black sm:min-w-[120px] sm:px-4 sm:py-2 sm:text-base">
            Get Started
          </button>
          <button className="inline-block min-w-[80px] rounded-md border border-primary px-3 py-2 text-center text-xs font-semibold text-primary hover:bg-gray-700 sm:min-w-[120px] sm:px-4 sm:py-2 sm:text-base">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppsHero;
