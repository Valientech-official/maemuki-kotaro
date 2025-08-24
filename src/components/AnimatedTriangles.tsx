"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedTriangles() {
  const trianglesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trianglesRef.current) return;

    const triangles = trianglesRef.current.querySelectorAll('.triangle-path');

    // 各三角形に色の切り替えアニメーションを設定
    triangles.forEach((triangle, index) => {
      const tl = gsap.timeline({ repeat: -1 });
      
      // 上の三角形は薄いオレンジから始まり、下の三角形は濃いオレンジから始まる
      const startColor = index === 0 ? '#F4B942' : '#D97706';
      const endColor = index === 0 ? '#D97706' : '#F4B942';
      
      // GSAPでSVGの属性をアニメーションするためにattr()を使用
      tl.to(triangle, {
        attr: { fill: endColor },
        duration: 1,
        ease: "power2.inOut"
      })
      .to(triangle, {
        attr: { fill: startColor },
        duration: 1,
        ease: "power2.inOut"
      });

      // 同時に開始
      tl.delay(0);
    });

  }, []);

  return (
    <div 
      ref={trianglesRef}
      className="flex flex-col gap-1 items-center justify-center"
    >
      {[...Array(2)].map((_, index) => (
        <svg
          key={index}
          width="30"
          height="25"
          viewBox="0 0 30 25"
          className="triangle"
          style={{
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))'
          }}
        >
          <path
            className="triangle-path"
            d="M15 25 L30 0 L0 0 Z"
            fill={index === 0 ? '#F4B942' : '#D97706'}
          />
        </svg>
      ))}
    </div>
  );
}