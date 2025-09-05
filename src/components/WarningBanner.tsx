"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const imgVector = "/assets/4eeee62fbc51abf7825dde4f40ac642dd2459414.svg";
const imgComponent1 = "/assets/d1dec2121c0c79125eaeea4981d65932377e81a7.svg";

interface Component1Props {
  variant?: string;
}

function Component1({ variant = "1" }: Component1Props) {
  if (variant === "34") {
    return (
      <div className="relative size-full" data-name="variant=34">
        <div className="absolute bottom-[6%] left-0 right-[-0.04%] top-[6.93%]">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>
    );
  }
  return null;
}

export default function WarningBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const icon1Ref = useRef<HTMLDivElement>(null);
  const icon2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bannerRef.current || !textRef.current || !icon1Ref.current || !icon2Ref.current) return;

    // Gentle banner pulsing
    gsap.to(bannerRef.current, {
      scale: 1.02,
      boxShadow: "0 0 15px rgba(239, 68, 68, 0.4)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Subtle icons breathing effect
    gsap.to([icon1Ref.current, icon2Ref.current], {
      scale: 1.1,
      opacity: 0.8,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.3
    });

    // Soft attention-getting effect every 5 seconds
    gsap.timeline({ repeat: -1, repeatDelay: 5 })
      .to(bannerRef.current, {
        y: -2,
        boxShadow: "0 2px 20px rgba(239, 68, 68, 0.6)",
        duration: 0.3,
        ease: "power1.out"
      })
      .to(bannerRef.current, {
        y: 0,
        boxShadow: "0 0 10px rgba(239, 68, 68, 0.3)",
        duration: 0.3,
        ease: "power1.in"
      });

  }, []);

  return (
    <div
      ref={bannerRef}
      className="absolute bg-red-500 h-[39.59px] rounded-[780px] top-[-56px] translate-x-[-50%] w-[357.77px]"
      style={{ 
        left: "calc(50% - 0.005px)",
        boxShadow: '0 0 20px rgba(239, 68, 68, 0.6)'
      }}
    >
      <div className="absolute box-border content-stretch flex flex-col h-[39.59px] items-start justify-start left-0 overflow-clip pl-0 pr-[317.77px] py-0 top-0 w-[357.77px]">
        <div className="overflow-clip relative shrink-0 size-10">
          <img alt="" className="block max-w-none size-full" src={imgComponent1} />
        </div>
      </div>
      <div
        className="absolute content-stretch flex gap-2 items-start justify-start translate-x-[-50%] translate-y-[-50%]"
        style={{ top: "calc(50% + 0.005px)", left: "calc(50% - 0.385px)" }}
      >
        <div ref={icon1Ref} className="relative shrink-0 size-3.5">
          <Component1 variant="34" />
        </div>
        <div
          ref={textRef}
          className="[text-shadow:rgba(0,0,0,0.1)_1px_1px_0px] flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[15.6px] text-nowrap tracking-[1.39px]"
        >
          <p className="leading-[15.6px] whitespace-pre">
            {new Date().getMonth() + 1}月中に退職予定の方はお急ぎください
          </p>
        </div>
        <div ref={icon2Ref} className="relative shrink-0 size-3.5">
          <Component1 variant="34" />
        </div>
      </div>
    </div>
  );
}