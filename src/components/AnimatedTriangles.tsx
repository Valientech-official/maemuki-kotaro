"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedTriangles() {
  const trianglesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trianglesRef.current) return;

    const triangles = trianglesRef.current.querySelectorAll('.triangle');

    // 各三角形に個別のアニメーションを設定
    triangles.forEach((triangle, index) => {
      gsap.to(triangle, {
        y: -20,
        duration: 1.5 + (index * 0.2), // 少しずつタイミングをずらす
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.3 // 開始タイミングをずらす
      });
    });

  }, []);

  return (
    <div 
      ref={trianglesRef}
      className="flex gap-2 items-center justify-center"
    >
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="triangle w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-white opacity-80"
          style={{
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
          }}
        />
      ))}
    </div>
  );
}