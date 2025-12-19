// import OrbitShowcase from "./next-step-animation";

// const NextStepsSection = () => {
//   return (
//     <section className="px-4 pb-10 pt-16 text-text md:px-8 lg:px-16">
//       <div className="mb-8 flex w-full flex-col justify-center">
//         <h2 className="mb-4 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-4xl font-semibold leading-tight text-transparent [background-size:60%_100%]">
//           Next Steps to Grow Your Business
//         </h2>
//         <p className="text-lg text-gray-300">
//           Ready to elevate your recruitment operations with cutting-edge AI
//           solutions? Take the next step to transform your business.
//         </p>
//       </div>

//       <OrbitShowcase />
//     </section>
//   );
// };

// export default NextStepsSection;

const NextStepsSection = () => {
  return (
    <section className="px-4 pb-10 pt-16 text-text md:px-8 lg:px-16">
      <div className="mb-8 flex w-full flex-col justify-center">
        <h2 className="mb-4 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-4xl font-semibold leading-tight text-transparent [background-size:60%_100%]">
          Next Steps to Grow Your Business
        </h2>
        <p className="text-lg text-gray-300">
          Ready to elevate your recruitment operations with cutting-edge AI
          solutions? Take the next step to transform your business.
        </p>
      </div>

      <div className="flex justify-center">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="max-w-full rounded-lg shadow-lg"
        >
          <source src="/next_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default NextStepsSection;