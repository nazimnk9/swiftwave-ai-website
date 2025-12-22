import Image from "next/image";
import Link from "next/link";

const HeroSectionCard = ({
  title,
  description,
  buttonText1,
  buttonText2,
  imageSrc,
  imageAlt,
  mobileImageSrc,
  desktopImageSrc,
  videoSrc,
}: HeroSectionCardProps) => {
  return (
    <section className="relative overflow-hidden flex flex-row items-center justify-between gap-10 bg-background pl-2 pr-0 py-6 text-text sm:gap-16 sm:pl-8 sm:pr-0 lg:gap-24 lg:pl-16 lg:pr-0 lg:py-12">
      {videoSrc && (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute left-0 top-0 h-full w-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          {/* Overlay to make text more readable */}
          <div className="absolute left-0 top-0 h-full w-full bg-black/60"></div>
        </>
      )}
      <div className="relative z-10 w-[45%]">
        <h1 className="mb-2 bg-gradient-to-br from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-base font-bold text-transparent sm:mb-4 sm:text-xl md:text-3xl lg:text-5xl">
          <span className="block">
            {title.split("\n")[0]}
            <span className="sm:hidden">
              <br />
            </span>
          </span>
          <span className="block">
            {title.split("\n")[1]}
            <span className="sm:hidden">
              <br />
            </span>
          </span>
          <span className="block">{title.split("\n")[2]}</span>
        </h1>
        <div className="mt-8">
          <p className="mb-3 text-xs leading-relaxed sm:mb-6 sm:text-sm md:text-base lg:text-lg mr-2">
            {description}
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
            <button className="primary-button hover:primary-button/80 min-w-[80px] rounded-md px-2 py-1 text-xs font-semibold text-black sm:min-w-[120px] sm:px-4 sm:py-2 sm:text-base">
              {buttonText1}
            </button>
            <Link
              href="/apps"
              className="inline-block min-w-[80px] rounded-md border border-primary px-2 py-1 text-center text-xs font-semibold text-primary hover:bg-gray-700 sm:min-w-[120px] sm:px-4 sm:py-2 sm:text-base"
            >
              {buttonText2}
            </Link>
          </div>
        </div>
      </div>

      {/* Only change: added mt-6 for mobile */}
      <div className="relative z-10 w-[45%] mt-[4.3rem] sm:mt-0">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
          {mobileImageSrc && desktopImageSrc ? (
            <>
              <div className="block sm:hidden w-full h-full relative">
                <Image
                  src={mobileImageSrc}
                  alt={imageAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="hidden sm:block w-full h-full relative">
                <Image
                  src={desktopImageSrc}
                  alt={imageAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, 50vw"
                  priority
                />
              </div>
            </>
          ) : (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 50vw, 50vw"
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
};

interface HeroSectionCardProps {
  title: string;
  description: string;
  buttonText1: string;
  buttonText2: string;
  imageSrc: string;
  imageAlt: string;
  mobileImageSrc?: string; // New separate mobile image
  desktopImageSrc?: string; // New separate desktop image
  videoSrc?: string;
}

export default HeroSectionCard;
