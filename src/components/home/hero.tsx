"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSectionCard from "./hero-card";
import Slider from "react-slick";

export default function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dotsClass:
      "slick-dots  [&>li>button:before]:!text-primary [&>li.slick-active>button:before]:!text-accent",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  // Cast Slider to any to avoid "cannot be used as a JSX component" error due to type definition mismatch
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SliderComponent = Slider as any;

  return (
    <div className="relative my-4 w-full lg:my-16">
      <SliderComponent {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <HeroSectionCard
              title={slide.title}
              description={slide.description}
              buttonText1={slide.buttonText1}
              buttonText2={slide.buttonText2}
              imageSrc={slide.imageSrc}
              imageAlt={slide.imageAlt}
              mobileImageSrc={slide.mobileImageSrc}
              desktopImageSrc={slide.desktopImageSrc}
              videoSrc={slide.videoSrc}
            />
          </div>
        ))}
      </SliderComponent>
    </div>
  );
}

const slides = [
  {
    title: "AI Sales Engine",
    description:
      "Sales team sleeping → 24/7 warm lead capture → auto to CRM → +50% more sales ✓",
    buttonText1: "Start Free Trial",
    buttonText2: "Check Apps",
    imageSrc: "/new_pics/1_edited_noor_v1.png",  // hero/caro_1.png
    mobileImageSrc: "/new_pics/img4.png",
    desktopImageSrc: "/new_pics/img4.png",
    imageAlt: "AI Professional",
    videoSrc: "/next_video.mp4",
  },
  {
    title: "AI Phone Call",
    description:
      "Auto Call → CRM Integration → Reduce Costs → Scale Faster ✓",
    buttonText1: "Start Free Trial",
    buttonText2: "Check Apps",
    imageSrc: "/new_pics/",  // hero/caro_1.png
    // mobileImageSrc: "/new_pics/AI_Phone_Call_for_mobile_version.jpeg",
    // desktopImageSrc: "/new_pics/AI_Phone_Call_for_desktop_version.jpeg",
    mobileImageSrc: "/new_pics/img0.png",
    desktopImageSrc: "/new_pics/img0.png",
    imageAlt: "AI Professional",
    videoSrc: "/next_video.mp4",
  },
  {
    title: "AI Recruiter",
    description:
      "24/7 auto-screen → auto CV format → auto docs to CRM → submission-ready ✓",
    buttonText1: "Start Free Trial",
    buttonText2: "Check Apps",
    imageSrc: "/new_pics/img1.png",    // /hero.png
    imageAlt: "AI Professional",
    videoSrc: "/next_video.mp4",
  },
  {
    title: "AI Skill Search",
    description:
      "Instant skill search → auto docs updated → CRM-ready → 100% compliance ✓",
    buttonText1: "Start Free Trial",
    buttonText2: "Check Apps",
    imageSrc: "/new_pics/4_edit_noor.png",  // /hero/hero2.png
    // mobileImageSrc: "/new_pics/AI_Skill_Search_for_mobile_version.jpeg",
    // desktopImageSrc: "/new_pics/AI_Skill_Search_for_desktop_version.jpeg",
    mobileImageSrc: "/new_pics/img.png",
    desktopImageSrc: "/new_pics/img.png",
    imageAlt: "AI Professional",
    videoSrc: "/next_video.mp4",
  },
  {
    title: "AI Cost Savings",  // Revolutionising Recruitment
    description:
      "AI 24/7 → 50% less admin → fewer staff needed → lower costs → higher profit ✓",
    buttonText1: "Start Free Trial",
    buttonText2: "Check Apps",
    imageSrc: "/new_pics/img3.png",
    imageAlt: "AI Professional",
    videoSrc: "/next_video.mp4",
  },
];
